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

    getOrderByUserId(user_id: string) {
        return this.prisma.order.findMany({
            where: {user_id}, include: {
                merchandises: true,
                tickets: true
            },
            orderBy: {
                createdAt: 'desc'
            }
        })
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
                        total: item.total,
                        image_url: item.image_url,
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
                merchandises: true,
                tickets: true
            }
        });
    }
}
