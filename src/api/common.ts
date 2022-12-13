import request from '../utils/request'
import { IResponseData } from './types/common'

export const login = (data: {account: string, password: string}) => {
    return request.post<IResponseData<{
        token: string,
        profile: string,
        express_time: number
    }>>('/api/login/v1', data)
}

export const logout = () => {
    return request.post('/api/admin/logout', {})
}
export const getProList = () => {
    return request.post('/api/product/list', {})
}