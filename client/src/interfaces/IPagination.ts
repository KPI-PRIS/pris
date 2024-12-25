export interface IPagination<T> {
    datas: T[],
    numberPage: number,
    totalDatas: number,
    totalPages: number,
}