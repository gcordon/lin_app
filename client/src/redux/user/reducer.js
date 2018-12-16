import '@/configs/axios.js' // 加载条和axios配置
import Axios from 'axios'
import * as user from './action-type'

export const defaultState = {
    user_list: [] // 保存stduent表用户
}

// state 存储
// action效果 =》  action.type
const USER = function (state = defaultState, action) {
    switch (action.type) {
        case 'USER_LIST':
            return { user_list: action.payload }
            break;
        default:
            return state
            break;
    }
}

export default USER