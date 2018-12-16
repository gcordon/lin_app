import '@/configs/axios.js' // 加载条和axios配置
import Axios from 'axios'
import * as user from './action-type'
import { API_GET_USER_LIST} from '@/apis/server'


// 获取用户 => ajax
export const get_user_list = () => {
    return async (dispath, getstate) => {
        const user_list = await API_GET_USER_LIST()
        dispath(GET_USER_LIST(user_list))
        // Axios('/admin/getUser?page=1&limit=20')
        //     .then(e => {
        //         dispath(GET_USER_LIST(e.data.data))
        //     })
    }
}
// 存储到store中
const GET_USER_LIST = (payload) => {
    return { type: user.USER_LIST, payload }
}

