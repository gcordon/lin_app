const Service = require('egg').Service
const {
    SUCCESS,
    ERROR,
} = require('../../util/util')

class AdminService extends Service {
    // 后台登陆
    async ajaxLogin(ajaxLoginObj) {

        const { ctx } = this
        const login = await ctx.model.Admin.findOne({
            ajaxLoginObj
        })
        if (login) {
            return Object.assign(SUCCESS, {
                msg: `${ajaxLoginObj}后台登陆成功`,
                data: login,
            })
        } else  {
            return Object.assign(ERROR, {
                msg: `${ajaxLoginObj}后台登陆失败`,
                data: login,
            })
        }
    }
    // 修改用户资料
    async setDatum(datumObj) {
        const {
            ctx,
        } = this
        try {
            const { token, name } = datumObj
            const sex = Number(datumObj.sex)
            const student = await ctx.model.Student.findOne({
                where: {
                    token,
                }
            })
            if (!student) return Object.assign(ERROR, { msg: '此用户不存在' })
            // dupate
            const setDatum = await ctx.model.Student.update({
                name,
                sex,
            }, {
                where: {
                    token,
                }
            })
            if (!setDatum) return Object.assign(ERROR, { msg: '资料修改失败' })
            return Object.assign(SUCCESS, {
                msg: '资料修改成功!',
            })
        } catch (error) {
            ctx.status = 500
            throw (error)
        }
    }

 
}

module.exports = AdminService