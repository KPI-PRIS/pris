import {Injectable} from '@nestjs/common';
import {PrismaService} from "./prisma.service";
import {Order} from "./interfaces/Order.db";
import {ObjectId} from 'mongodb';

@Injectable()
export class OrderService {

    constructor(private readonly prisma: PrismaService) {
    }

    getOrderById(id: string) {
        return this.prisma.order.findUnique({where: {id}});
    }

    async createOrder(order: Order) {
        return this.prisma.order.create({
            data: {
                id: new ObjectId().toString(),
                user_id: order.user_id,
                totalPrice: order.totalPrice,
                quantity: order.quantity,
                merchandises: {
                    create: order.merchandises.map(item => ({
                        name: item.name,
                        price: item.price,
                        total: item.total
                    }))
                },
                tickets: {
                    create: order.tickets.map(ticket => ({
                        name: ticket.name,
                        price: ticket.price,
                        total: ticket.total
                    }))
                }
            },
            include: {
                // Включаємо в результат також мерчандайзи та квитки
                merchandises: true,
                tickets: true
            }
        });
    }
}
