import '@/configs/axios.js' // 加载条和axios配置
import Axios from 'axios'
import * as user from './action-type'

export const defaultState = {
    cat_course: {} // 
}

// state 存储
// action效果 =》  action.type
const USER = function (state = defaultState, action) {
    switch (action.type) {
        case 'CAT_COURSE':
            return { cat_course: action.payload }
            break;
        case 'EDIT_COURSE':
            /**
             * { ...state.cat_course, ...action.payload}  原值 + 更新的值 =》 用更新的值覆盖原本存在的值
             */
            return { cat_course: { ...state.cat_course, ...action.payload} }
            break;
        default:
            return state
            break;
    }
}

export default USER