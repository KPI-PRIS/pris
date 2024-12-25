/**
 * Інтерфейс для представлення товару (merchandise).
 */
export interface IMerch {
    /**
     * Унікальний ідентифікатор товару.
     * @example "abc123"
     */
    id: string;

    /**
     * Назва товару.
     * @example "Футболка з логотипом"
     */
    name: string;

    /**
     * Опис товару.
     * @example "Бавовняна футболка з логотипом вашої улюбленої команди."
     */
    description: string;

    /**
     * Ціна товару у валюті, що використовується в системі.
     * @example 399.99
     */
    price: number;

    /**
     * Кількість товару, доступного на складі.
     * @example 150
     */
    stockQuantity: number;

    /**
     * Категорія товару.
     * @example "Одяг"
     */
    category: string;

    /**
     * URL зображення товару.
     * @example "https://example.com/images/shirt.jpg"
     */
    image_url: string;
}
