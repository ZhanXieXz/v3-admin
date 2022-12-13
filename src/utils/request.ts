import axios from 'axios'
import { ElMessage } from "element-plus";
import { store } from "../store/index";
import router from '../router/index';
const request = axios.create({})

let isRefresginf = false
// 请求拦截
request.interceptors.request.use(function (config) {
    // 设置token
    const user = store.state.userInfo
    console.log(user?.token)
    if (user && user.token) {
        config.headers ? config.headers.Authorization = `Bearer ${user.token}` : ''
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// 响应拦截
request.interceptors.response.use(function (response) {
    // 处理接口响应初错误
    const status = response.data.status
    if (!status || status == 200) {
        return response;
    }

    if (status == 400004) {
        ElMessage({
            showClose: true,
            message: '登录信息已过期',
            type: 'error',
            grouping: true,
        })
        store.commit('changeUserInfo', null)
        router.push({
            name: 'login',
            query: {
                redirect: router.currentRoute.value.fullPath
            }
        })
        return Promise.reject(response)
    }

    ElMessage({
        showClose: true,
        message: response.data.msg || 'error',
        type: 'error',
    })
    return Promise.reject(response.data)
    
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default request
