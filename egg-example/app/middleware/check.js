module.exports = app => {
    return async function check(ctx,next) {
        console.log('====================================');
        console.log('====================================');
        console.log('验证用户登录middleware中间件');
        console.log('=====check===============================');
        console.log('====================================');
        console.log('====================================');
        const token = ctx.headers['x-access-token']
        const username = ctx.session.username 
        // 检测token 和 username存不存在
        if (!username || !token) {
            ctx.body = {
                code: 0,
                msg: 'token验证，用户未登陆'
            }
        }
        // 数据库经行帅选，查看是否此token和此username一直
        const checkUser = await ctx.model.Student.findOne({
            where: {
                token: token,
                username: username,
            }
        })
        if (!checkUser) {
            ctx.body = {
                code: 0,
                msg: 'token验证，用户未登陆'
            }
            return
        }
        // 执行=>next
        await next()
    }
}

// const {
//     SUCCESS,
//     ERROR,
// } = require('../util/util')
// module.exports = (req, res, next) => {
//     return function* (next) {
//         yield next;
//         // 判断token 和 usernameSession(session)
//         const token = this.request.header['x-access-token']
//         console.log('liknlinlinl', res)
//         const usernameSession = this.session.username
//         const checkUser = yield this.model.Student.findOne({
//             where: {
//                 token: token,
//                 username: usernameSession
//             }
//         })
//         if (!checkUser) {
//             console.log('**********************')
//             console.log('token失败！')
//             console.log('**********************')

//             this.status = 401
//             this.body = {
//                 code: 0,
//                 msg: 'token用户不一致！',
//                 test: this.ctx
//             }
//             return
//         }
//     }
// }