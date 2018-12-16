import '@/configs/axios.js' // 加载条和axios配置
import Axios from 'axios'

const USER_LIST = 'USER_LIST'

const defaultState = {
    user_list: [], // 保存stduent表用户
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

// 获取用户 => ajax
export function get_user_list(){

    return (dispath, getstate) => {
        Axios('/admin/getUser?page=1&limit=10')
            .then(e => {
                // if (e.data.data.code == 0) {
                console.log(e);

                dispath(GET_USER_LIST(e.data.data))
                // }
            })
    }
}
// 存储到store中
const GET_USER_LIST = (payload) => {
    return { type: USER_LIST, payload }
}

export default USER