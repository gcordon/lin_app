const Service = require('egg').Service
const {
    SUCCESS,
    ERROR,
    Encryption,
    Decrypt_Encryption,
} = require('../util/util')

const crypto = require('crypto')

class AdminService extends Service {
    // 后台登陆
    async ajaxLogin(ajaxLoginObj) {
        const { ctx } = this
        const login = await ctx.model.Admin.findOne({ where: ajaxLoginObj })
        if (login) {
            return Object.assign(SUCCESS, {
                msg: `${JSON.stringify(ajaxLoginObj)}后台登陆成功`,
                data: login,
            })
        } else  {
            return Object.assign(ERROR, {
                msg: `${JSON.stringify(ajaxLoginObj)}后台登陆失败`,
                data: '',
            })
        }
    }
    // 修改用户资料
    async setDatum(datumObj) {
        const {
            ctx,
        } = this
        try {
            const { token, } = datumObj
            const sex = Number(datumObj.sex)
            datumObj.password = Encryption(String(datumObj.password), 'egg_client')
            const student = await ctx.model.Student.findOne({
                where: {
                    token,
                }
            })
            if (!student) return Object.assign(ERROR, { msg: '此用户不存在' })
            // dupate
            const setDatum = await ctx.model.Student.update(datumObj, {
                    where: {
                        token,
                    }
                })
            if (!setDatum) return Object.assign(ERROR, { msg: '资料修改失败' })
            return Object.assign(SUCCESS, {
                data: '',
                msg: '资料修改成功!',
            })
        } catch (error) {
            ctx.status = 500
            throw (error)
        }
    }
    // 添加用户
    async addUser(userObj) {
        const {
            ctx,
        } = this
        try {
            const findUser = await ctx.model.Student.findOne({
                where: {
                    username: userObj.username,
                }
            })
            if (findUser) {
                return Object.assign(SUCCESS, {
                    data: '',
                    msg: `此用户${userObj.username}已存在！`,
                })
            }
            // token生成
            const token = crypto.createHash('md5').update(`${userObj.username} ${Math.random() + 1 + Math.random()} ${userObj.username} egg`).digest('hex')
            // 密码加密
            userObj.password = Encryption('userObj.password', 'egg_client')
            Object.assign(userObj, {
                token,
            })
            const addUser = ctx.model.Student.create(userObj)
            if (!addUser) return Object.assign(ERROR, {
                msg: '用户添加失败'
            })
            return Object.assign(SUCCESS, {
                data: '',
                msg: '用户添加成功!',
            })
        } catch (error) {
            ctx.status = 500
            throw (error)
        }
    }
}

module.exports = AdminService