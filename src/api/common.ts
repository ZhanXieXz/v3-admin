import request from '../utils/request'
import { IResponseData } from './types/common'

export const getLoginInfo = () => {
    return request.get<IResponseData<{
        login_info: string,
        login_imge: string,
        slide: string[]
    }>>('/api/login/info')
}