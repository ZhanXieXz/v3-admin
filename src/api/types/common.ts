export interface IResponseData<T = any> {
    msg: string,
    status: string,
    data: T
}
