import '@/configs/axios.js' // 加载条和axios配置
import Axios from 'axios'
import * as user from './action-type'
import { API_GET_COURSE, API_EDIT_COURSE  } from '@/apis/server'


// 获取单个课程
export const get_cat_course = (id) => {
    return async (dispath, getstate) => {
        const cat_course = await API_GET_COURSE(id)
        dispath(GET_CAT_COURSE(cat_course))
    }
}
// 存储到store中
const GET_CAT_COURSE = (payload) => {
    return { type: user.CAT_COURSE, payload }
}

// 编辑指定子课程
export const edit_cat_course = (obj) => {
    return async (dispath, getstate) => {
        const edit = await API_EDIT_COURSE(obj)
        dispath(EDIT_CAT_COURSE(edit))
    }
}
// 存储到store中 => 修改 cat_course中的数据 => 让catCourse重新渲染值
export const EDIT_CAT_COURSE = (payload) => {
    console.log('======payload==============================');
    console.log('======payload==============================');
    console.log(payload);
    console.log('=======payload=============================');
    console.log('=======payload=============================');
    return { type: user.EDIT_COURSE, payload }
}
