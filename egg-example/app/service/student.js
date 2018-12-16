const Service = require('egg').Service
const crypto = require('crypto')
const {
    ERROR,
    SUCCESS,
    sendEmail,
    randomCode,
} = require('../util/util')

class SignService extends Service {
    // 学生注册
    async signRegisterServer(RegisterObj) {
        const {
            ctx
        } = this
        try {
            ctx.status = 200
            RegisterObj.sex = Number(RegisterObj.sex)
            const register = await ctx.model.Student.create(RegisterObj)
            if (register) {
                ctx.status = 200
                return Object.assign(SUCCESS, {
                    data: '',
                    msg: '注册成功',
                })
            } else {
                ctx.status = 401
                return Object.assign(ERROR, {
                    msg: '注册失败',
                    dat: ''
                })
            }
        } catch (error) {
            ctx.body = '服务器出错'
            ctx.status = 500
            throw (error)
        }
    }
    // // 检测是否存在此用户 或 邮箱已存在 (ifObject)  (errorText)错误提示的信息
    async signRegisterIfServer(ifObject) {
        const {
            ctx
        } = this
        try {
            const ifUser = await ctx.model.Student.findOne({
                where: {
                    username: ifObject.username
                }
            })
            const ifEmail = await ctx.model.Student.findOne({
                where: {
                    email: ifObject.email
                }
            })
            ctx.status = 401
            if (ifEmail) {
                return Object.assign(ERROR, {
                    data: '',
                    msg: `邮箱已经注册过一次了！`,
                })
            }

            if (ifUser) {
                return Object.assign(ERROR, {
                    data: '',
                    msg: `用户名已存在！`,
                })
            }
        } catch (error) {
            ctx.status = 500
            throw (error)
        }
    }
    // // 登陆
    async signLoginServer(LoginObj) {
        const {
            ctx
        } = this
        try {
            const student = await ctx.model.Student.findOne({
                attributes: ['id','username','name','sex','avatar','decide','email','token'],
                where: LoginObj,
            })
            if (student) {
                return Object.assign(SUCCESS, {
                    data: student,
                    msg: '用户登录成功！'
                })
            }
            if (student) {
                ctx.status = 200
                return Object.assign(SUCCESS, {
                    msg: '登陆成功！',
                    data: student,
                })
            } else {
                ctx.status = 401
                return Object.assign(ERROR, {
                    data: '',
                    msg: '登陆账号或密码错误',
                })
            }
        } catch (error) {
            return Object.assign(ERROR, {
                data: '',
                msg: 'server 错误',
            })
        }
    }
    // 修改资料
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
            if (!student) return Object.assign(ERROR, { data: '',msg: '此用户不存在' })
            // dupate
            const setDatum = await ctx.model.Student.update({
                name,
                sex,
            }, {
                where: {
                    token,
                }
            })
            if (!setDatum) return Object.assign(ERROR, { data: '', msg: '资料修改失败' })
            return Object.assign(SUCCESS, {
                msg: '资料修改成功!',
            })
        } catch (error) {
            ctx.status = 500
            throw (error)
        }
    }
    // 上传图片
    async setAvatar(username, imageName) {
        const {
            ctx
        } = this
        try {
            const update = { avatar: imageName }
            const where = { where: { username: username } }
            const setAvatar = await ctx.model.Student.update(update, where)
            if (setAvatar) {
                return Object.assign(SUCCESS, {
                    msg: "上传图片到数据库成功！",
                    data: {
                        setAvatar,
                        avatarPath: imageName
                    },
                })
            } else {
                return Object.assign(SUCCESS, {
                    msg: "上传图片到数据库失败！",
                    data: setAvatar,
                })
            }    
        } catch (error) {
            ctx.status = 500
            throw (error)
        } 
    }
    // 密码修改 (无发送密码)
    async signResetPassword(pwdObj) {
        const {
            ctx
        } = this
        try {
            const find = await ctx.model.Student.findOne({
                where: {
                    username: ctx.session.username, // 已经存储在session中了
                    password: pwdObj.oldPwd,
                }
            })
            // 查看原密码是否正确
            if (!find) {
                return Object.assign(ERROR, {
                    msg: `原密码${pwdObj.oldPwd}错误`
                })
            }
            // 修改用户的密码
            const update = await ctx.model.Student.update({
                password: pwdObj.newPwd,
            },{
                where: {
                    username: ctx.session.username, // 已经存储在session中了
                }
            })
            return Object.assign(SUCCESS, {
                msg: `修改用户：${ctx.session.username}密码成功！`
            })
        } catch (error) {
            ctx.status = 500
            throw (error)
        } finally {
            console.log('用户修改密码api')
        }
    }
    //找回密码（发送邮箱）
    async signEmailResetPassword(dataObj) {
        const {
            ctx
        } = this
        const {
            username,
            email
        } = dataObj
         /**
          * 获取    1；username2；email
          * 1.判断用户名是否存在
          * 2.判断用户名与邮箱是否对应， 数据库中查询
          * 发送邮箱 1;数据库查询 username(判断是否有此用户);
          * (不判断邮箱)
          * 发送随机码， 更新对应的student的token_email_code
          */
        const user = await ctx.model.Student.findOne({
            where: {
                username,
            }
        })
        if (!user) return ctx.body = Object.assign(ERROR, {
            msg: `用户名:${username}不存在`
        })

        const findEmailandUser = await ctx.model.Student.findOne({
            where: {
                username,
                email,
            }
        })
        if (!findEmailandUser) return ctx.body = Object.assign(ERROR, {
            msg: `输入的邮箱与用户名不对应`
        })

        // 随机码
        const token_email_code = randomCode()
        // 发送短信
        sendEmail(user.username, token_email_code, email) // 传递参数 ：用户名、随机码、接收者邮箱
        // 更新 随机验证码
        const update_token_email_code = await ctx.model.Student.update({
            token_email_code,
        }, {
            where: {
                username: user.username,
                email: user.email,
            }
        })
        if (update_token_email_code) {
            return Object.assign(SUCCESS, {
                msg: '找回密码，验证发送成功！',
                data: '',
            })
        } else {
            return Object.assign(ERROR, {
                msg: '找回密码，验证发送失败！',
                data: '',
            })
        }
    }
    //找回密码
    // 1 验证：验证码 & &用户名
    // 2 验证成功： 删除token_email_code 修改密码

    async signUpdateEmailResetPassword(objData) {
        const {
            ctx,
        } = this
        const {
            token_email_code,
            username,
            password,
        } = objData
        
        const fidnUsernameToken_email_code = await ctx.model.Student.findOne({
            where:{token_email_code,username}
        })
        if (!fidnUsernameToken_email_code) {return Object.assign(ERROR, {msg:'验证码有误！'})}

        const update_token_email_code = await ctx.model.Student.update({
            token_email_code: '',  //删除随机码
            password,
        }, {
            where: {
                username
            }
        })
        if (update_token_email_code) {
            return Object.assign(SUCCESS, {
                msg: '密码修改成功！'
            })
        } else {
            return Object.assign(SUCCESS, {
                msg: '密码修改失败！'
            })
        }
    }
}
module.exports = SignService