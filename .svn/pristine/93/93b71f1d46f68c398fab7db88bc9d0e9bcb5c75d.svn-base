import Cookies from 'js-cookie'

// 设置cookie
export const setCookies = (key, value, expires=1) => {
    return Cookies.set([key], [value], { expires: expires })//expires到期时间(以天为单位);
}
// 获取cookie
export const getCookies = (key) => {
    return Cookies.get(key)//expires到期时间);
}
// 移除cookie
export const removeCookies = (key, path='') => {
    return Cookies.remove([key], { path: path }); // removed!
}