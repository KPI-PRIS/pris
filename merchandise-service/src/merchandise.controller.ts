import {Controller} from '@nestjs/common';
import {MerchandiseService} from './merchandise.service';
import {IUpdateParamsById, MerchRepository} from "./interfaces/MerchRepository";
import {IMerch} from "./interfaces/IMerch";
import {MessagePattern} from "@nestjs/microservices";

/**
 * Контролер для управління операціями з товарами (merchandise).
 * Реалізує інтерфейс `MerchRepository` і обробляє повідомлення, отримані через мікросервіси.
 */
@Controller()
export class MerchandiseController implements MerchRepository {
    /**
     * Конструктор для ініціалізації служби товарів.
     * @param merchandiseService Сервіс для роботи з товарами.
     */
    constructor(private readonly merchandiseService: MerchandiseService) {
    }

    /**
     * Обробляє запит на створення нового товару.
     * @param data Об'єкт товару `IMerch`.
     * @returns Проміс з об'єктом створеного товару.
     * @example
     * const newMerch = await create({ id: "abc124", name: "Чашка", ... });
     */
    @MessagePattern('merch_create')
    create(data: IMerch): Promise<IMerch> {
        return this.merchandiseService.create(data);
    }

    /**
     * Обробляє запит на видалення товару за його ідентифікатором.
     * @param id Унікальний ідентифікатор товару.
     * @returns Проміс з об'єктом видаленого товару.
     * @example
     * const deletedMerch = await deleteById("abc123");
     */
    @MessagePattern('merch_delete_by_id')
    deleteById(id: string): Promise<IMerch> {
        return this.merchandiseService.deleteById(id);
    }

    /**
     * Обробляє запит на отримання списку всіх товарів.
     * @returns Проміс з масивом об'єктів `IMerch`.
     * @example
     * const allMerch = await findAll();
     */
    @MessagePattern('merch_find_all')
    findAll(): Promise<IMerch[]> {
        return this.merchandiseService.findAll();
    }

    @MessagePattern('merch_find_all_by_page')
    findAllByPage(page: string) {
        return this.merchandiseService.findAllByPage(+page);
    }

    /**
     * Обробляє запит на отримання товару за його ідентифікатором.
     * @param id Унікальний ідентифікатор товару.
     * @returns Проміс з об'єктом товару `IMerch`.
     * @example
     * const merch = await findOneById("abc123");
     */
    @MessagePattern('merch_find_one_by_id')
    findOneById(id: string): Promise<IMerch> {
        return this.merchandiseService.findOneById(id);
    }

    /**
     * Обробляє запит на оновлення даних товару за його ідентифікатором.
     * @param params Об'єкт, що містить ідентифікатор та дані для оновлення.
     * @returns Проміс з оновленим об'єктом `IMerch`.
     * @example
     * const updatedMerch = await updateById({ id: "abc123", data: { ... } });
     */
    @MessagePattern('merch_update_by_id')
    updateById(params: IUpdateParamsById): Promise<IMerch> {
        return this.merchandiseService.updateById(params);
    }
}
