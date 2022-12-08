import axios from 'axios'

const request = axios.create({
    // baseURL: 'http://127.0.0.1:1995/'
})

// 请求拦截
request.interceptors.request.use(function (config) {
    // 设置token
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// 响应拦截
request.interceptors.response.use(function (response) {
    // 处理接口响应初错误
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default request