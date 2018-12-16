const  {
    GetSession,
} = require('../util/util')
// 验证后台session
module.exports = app => {
    return async function adminCheck(ctx, next) {
        const checkSession = ctx.session.egg_server
        if (!checkSession) {
            ctx.redirect('/admin/login',302)
        }
        await next()
    }
}