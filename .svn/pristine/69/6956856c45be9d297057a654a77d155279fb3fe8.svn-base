import Axios from 'axios'
import { message, Button } from 'antd';

import '@/configs/axios'
import Ajax from '@/configs/ajax'
const GET_QIAN_ZHUI = '/api'
const POST_QIAN_ZHUI = '/admin'

// GET
export const Banner = () => {
    return Ajax.axios_ajax('get', `${GET_QIAN_ZHUI}/banner`)
}

// POST
export const Login = (data) => {
    if(Object.prototype.toString.call(data) !== "[object Object]") {
        message.error(`server函数Login参数${data}错误，应该为object`)
    }  
    const login =  Ajax.axios_ajax('post', `${POST_QIAN_ZHUI}/login`, data)
    return login
}


