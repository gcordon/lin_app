import axios from 'axios';
import './axios.css'
import NProgress from 'nprogress'
import { message, Button } from 'antd';

// 头部的进度条
NProgress.configure({
    parent: '#root'
});

// const request = axios.create({
//     baseURL: '/api',     // api的base_url
//     timeout: 10000,     // 请求超时时间 ms
// })

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    NProgress.start();
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    NProgress.done();
    return response;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});