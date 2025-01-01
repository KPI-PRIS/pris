import {IMerch} from "./IMerch";

/**
 * Інтерфейс для параметрів оновлення товару за ідентифікатором.
 */
export interface IUpdateParamsById {
    /**
     * Унікальний ідентифікатор товару, який потрібно оновити.
     * @example "abc123"
     */
    id: string;

    /**
     * Дані для оновлення товару.
     */
    data: IMerch;
}

/**
 * Інтерфейс для репозиторію роботи з товарами.
 */
export interface MerchRepository {
    /**
     * Повертає список усіх товарів.
     * @returns Проміс з масивом об'єктів `IMerch`.
     */
    findAll: () => Promise<IMerch[]>;

    /**
     * Повертає товар за його ідентифікатором.
     * @param id Унікальний ідентифікатор товару.
     * @returns Проміс з об'єктом `IMerch`.
     * @example
     * const merch = await repository.findOneById("abc123");
     */
    findOneById: (id: string) => Promise<IMerch>;

    /**
     * Створює новий товар.
     * @param data Об'єкт `IMerch` із даними для створення.
     * @returns Проміс з об'єктом створеного товару `IMerch`.
     * @example
     * const newMerch = await repository.create({ id: "abc124", name: "Чашка", ... });
     */
    create: (data: IMerch) => Promise<IMerch>;

    /**
     * Оновлює дані товару за його ідентифікатором.
     * @param params Об'єкт із ідентифікатором і даними для оновлення.
     * @returns Проміс з оновленим об'єктом `IMerch`.
     * @example
     * const updatedMerch = await repository.updateById({ id: "abc123", data: { ... } });
     */
    updateById: (params: IMerch) => Promise<IMerch>;

    /**
     * Видаляє товар за його ідентифікатором.
     * @param id Унікальний ідентифікатор товару.
     * @returns Проміс з об'єктом видаленого товару `IMerch`.
     * @example
     * const deletedMerch = await repository.deleteById("abc123");
     */
    deleteById: (id: string) => Promise<IMerch>;
}
