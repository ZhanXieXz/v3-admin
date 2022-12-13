export interface IResponseData<T = any> {
    msg: string,
    status: string,
    data: T
}
export interface Iuserinfo {
    express_time: number,
    name: string,
    profile: string,
    token: string
  }
  