import Axios from 'axios'
import { message, Button } from 'antd';

import '@/configs/axios'
import Ajax from '@/configs/ajax'
const GET_QIAN_ZHUI = '/api'
const POST_QIAN_ZHUI = '/admin'

// GET
// 获取 轮播图
export const API_Banner = () => Ajax.axios_ajax('get', `${GET_QIAN_ZHUI}/banner`)
// 获取 用户
export const API_GET_USER_LIST = (data) => Ajax.axios_ajax('get', `admin/getUser?page=1&limit=20`)
// 获取单个课程
export const API_GET_COURSE = (id) => Ajax.axios_ajax('get', `/api/courseOne?course_child_id=${id}`)

// POST
export const Login = (data) => {
    if(Object.prototype.toString.call(data) !== "[object Object]") {
        message.error(`server函数Login参数${data}错误，应该为object`)
    }  
    const login =  Ajax.axios_ajax('post', `${POST_QIAN_ZHUI}/login`, data)
    return login
}
/**
 * 
// 
 * @param {编辑班课 } data
/* @param {(有上传图片的)} */
export const editcourse_image = (data) => '/api/editcourse' + data
/* @param {(没有上传图片的)} */
export const API_EDIT_COURSE = (data) =>  Ajax.axios_ajax('post', `/api/editcourse`, data)


