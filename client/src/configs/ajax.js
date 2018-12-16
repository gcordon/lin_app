import Axios from 'axios'
import { message, Button } from 'antd';

import './axios'
import NProgress from 'nprogress'

export default {
    /**
        * 2XX：请求成功
        * 3XX：重定向
        * 4XX：客户端错误
        * 5XX：服务器端错误
         */
    /**
     * 
     * @param {get |  delete | head | post | post | patch} Method
     * @param {*} Url 
     * @param {*} Data 
     */
    axios_ajax(method = "get", url = '', data = {}, params = {}) {
        return new Promise((resolve, reject) => {
            const ajax = Axios({
                method,
                url,
                data,
                // `headers` 是即将被发送的自定义请求头
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
                params: {},
                validateStatus(status) {
                    window.status = status
                    switch (status.toString()[0]) {
                        // case '2': message.success(`***请求成功***\nAxios——————获取数据————status ${status}`, 10); break;
                        // case '3': message.error(`***重定向***\nAxios后台数据获取链接：/api/banner 状态码：${status}`, 5); NProgress.done(); break;
                        // case '4': message.error(`***客户端错误***\n后台数据获取链接：/api/banner 状态码：${status}`, 5); NProgress.done(); break;
                        case '5': message.error(`***服务器端错误***\nAxios后台数据获取链接：/api/banner 状态码：${status}`, 10); NProgress.done(); break;
                        default:
                            break;
                    }
                    return status < 500
                },
            });
            ajax
            .then((success) => {
                    if (success.status == 200 && success.data.code == 0) {
                        resolve(success.data.data)
                    } else {
                        // message.error(`Axios数据获取失败`, 5)
                        resolve({ axios_ajax_error: 1})
                    }
                })
        })
    }
}