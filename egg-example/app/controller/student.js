'use strict'

const Controller = require('egg').Controller
const validator = require('validator') // 验证
const crypto = require('crypto') // 加密
const utility = require('utility')
const jwt = require('jsonwebtoken') // token 生成

// 图片压缩工具
// require('fs)
const gm = require('gm').subClass({
    imageMagick: true
})

const path = require('path')
const {
    SUCCESS,
    ERROR,
    Encryption,
    saveAvatar,
} = require('../util/util')

// 文件上传
const sendToWormhole = require('stream-wormhole')
const fs = require('fs')


class SignController extends Controller {
    constructor(props) {
        super(props)
        this.studentModel = this.app.model.Student
    }
    // 压缩图片
    async yasuo() {
        const {
            ctx
        } = this
        // 获取图片路径
        const ImagePath = __dirname
        const appPath = path.resolve(ImagePath, '../')
        const publicPath = '/public/user/avatar/lin1.jpg'
        const newImagePath = path.resolve(appPath + publicPath)
        // 压缩
        const yasuoPath = 'E:/eggjs/egg/egg-example/app/public/user/avatar/lin1yasuo.jpg'
        gm(newImagePath)
            .resize(150, 150, '!') //加('!')强行把图片缩放成对应尺寸150*150！
            .autoOrient()
            .write(yasuoPath, function (err) {
                if (err) {
                    console.log('====================================');
                    console.log('gm压缩错误');
                    console.log(err)
                    console.log('====================================');
                }
            });
        ctx.body = 'yys'
    }
    // 注册
    async signRegister() {
        const {
            ctx,
            service,
        } = this
        // validate
        // const createRule = {
        //     username: {type:'string', max: 20, min: 6, allowEmpay: false,}
        // }
        // const error = ctx.validator(createRule)
        // validate

        const username = ctx.request.body.username || ctx.query.username || ''
        var password = ctx.request.body.password || ctx.query.password || ''
        const email = ctx.request.body.email || ctx.query.email || ''
        const sex = ctx.request.body.sex || ctx.query.sex || ''
        /*
        /////////旧的加密方式/////////////////
                // // 密码加密
                var md5 = crypto.createHash('sha1');
                password = md5.update(password).digest('hex');
                
        /// 最后一条student 是数据是：
        86 25226 未定义 a8fb7ae94f39b5ceb2ff98642accde6d634dfa32 1  default.jpg 0 67 dd967afb76807093f002537545cf29 25226@1qq.com 2018 - 07 - 03 08: 56: 19 2018 - 07 - 03 08: 56: 19

        */
        /////////新的加密方式/////////////////
        // token生成
        const token = crypto.createHash('md5').update(`${username} ${Math.random() + 1 + Math.random()} ${username} egg`).digest('hex')
        password = Encryption(String(password), 'egg_client')
        const RegisterObj = {
            username,
            password,
            email,
            token, // 随机的token
        }
        // 判断是否已经存在此用户 （用户名）

        const signRegisterIf = await service.student.signRegisterIfServer({
            username,
            email,
        })
        if (signRegisterIf) {
            ctx.body = signRegisterIf
            return
        }

        // 注册
        const signRegister = await service.student.signRegisterServer({
            username,
            password,
            token,
            email,
            sex
        })
        if (signRegister) {
            ctx.body = signRegister
        }
    }
    // 登陆
    async signLogin() {
        const {
            ctx,
            service,
        } = this

        const username = ctx.request.body.username || ctx.query.username || ''
        var password = ctx.request.body.password || ctx.query.password || ''
        const Remember = ctx.request.body.Remember || ctx.query.Remember || '0' // 是否记者登陆状态(0不记录，1记录登陆记录)
        if (Remember == '1') {
            // 记住自动登陆session
            ctx.session.autoLogin = username
        }
        /*
        /////////旧的加密方式/////////////////
        // 解密
        var md5 = crypto.createHash('sha1');
        password = md5.update(password).digest('hex');
        */
        /////////新的加密方式/////////////////
        password = Encryption(password, 'egg_client')
        /////////新的加密方式/////////////////

        // 条件判断语句
        const LoginObj = {
            username: username,
            password: password
        }
        const signLogin = await service.student.signLoginServer(LoginObj)
        // 记录登陆状态
        ctx.session.username = username
        ctx.body = signLogin

    }
    // 退出
    async signLogout() {
        const {
            ctx,
            service,
        } = this
        // 清除session
        if (ctx.session.autoLogin || ctx.session.username) {
            ctx.session.autoLogin = null
            ctx.session.username = null
            ctx.status = 200
            ctx.body = {
                code: '0',
                msg: '退出成功！',
            }
            return
        }
        ctx.body = {
            status: '1',
            msg: '退出失败！',
        }
    }
    //重置密码（无发送邮箱）
    async signResetPassword() {
        const {
            ctx,
            service,
        } = this
        // 旧密码 && 加密
        let oldPwd = Encryption(String(ctx.query.oldPwd || ctx.request.body.oldPwd), 'egg_client')
        // 新密码 && 加密
        let newPwd = Encryption(String(ctx.query.newPwd || ctx.request.body.newPwd), 'egg_client')

        // 修改密码
        const findAndSetPwd = await service.student.signResetPassword({
            oldPwd,
            newPwd
        })
        ctx.body = findAndSetPwd
    }
    //找回密码（发送邮箱）
    async signEmailResetPassword() {
        const {
            ctx,
            service
        } = this
        const email = ctx.request.body.email || ctx.query.email
        const username = ctx.request.body.username || ctx.query.username
        const signEmailResetPassword = await service.student.signEmailResetPassword({
            username,
            email,
        })
        ctx.body = signEmailResetPassword
    }
    async signValiteTokenEmailCode() {
        const {
            ctx
        } = this
        const token_email_code = ctx.request.body.token_email_code || ctx.query.token_email_code
        const username = ctx.request.body.username || ctx.query.username 
        const signValiteTokenEmailCode = await ctx.model.Student.findOne({
            where: {token_email_code, username}
        })
        if (signValiteTokenEmailCode) {
            return ctx.body = Object.assign(SUCCESS, {
                msg: ''
            })
        } else {
            return ctx.body = Object.assign(ERROR, {
                msg: '验证码错误'
            })
        }
    }
    //找回密码
    // 1 验证：验证码 & &用户名
    // 2 验证成功： 删除token_email_code
    async signUpdateEmailResetPassword() {
        const {
            ctx,
            service
        } = this
        const token_email_code = ctx.request.body.token_email_code || ctx.query.token_email_code
        const username = ctx.request.body.username || ctx.query.username
        let password = ctx.request.body.password || ctx.query.password
        password = Encryption(String(password), 'egg_client')
        const signUpdateEmailResetPassword = await service.student.signUpdateEmailResetPassword({
            token_email_code,
            username,
            password,
        })
        ctx.body = signUpdateEmailResetPassword
    }
    // 修改个人资料
    async setDatum() {
        const {
            ctx,
            service
        } = this
        // token 名字 性别 邮箱
        const token = ctx.request.body.token || ctx.query.token
        const name = ctx.request.body.name || ctx.query.name
        const sex = ctx.request.body.sex || ctx.query.sex
        const datumObj = {
            token,
            name,
            sex: sex,
        }
        const setDatum = await service.student.setDatum(datumObj)
        ctx.body = setDatum
    }
    // 
    async show() {
        await this.ctx.render('hello.pug', {
            index: 'linlinlin'
        })
    }
    // 头像上传
    async setAvatar() {
        const {
            ctx,
            service,
            app
        } = this
        const token = ctx.request.body.token || ctx.query.token || ''
        const username = ctx.request.body.username || ctx.query.username || ctx.params.username
        // 前端上传头像
        if (token) {
             /****************start 使用tokne在数据库查询学生的信息************************** */
            const student = await this.studentModel.findOne({
                where: {
                    token,
                }
            })
            if (!student) {
                return Object.assign(ERROR, {
                    msg: '修改头像=》不存在此用户！',
                    data: ''
                })
            }
            const username_ = student.dataValues.username
             /****************end 使用tokne在数据库查询学生的信息************************** */
            ctx.body = saveAvatar.call(this, username_)
        } 
        // 后端 添加用户 上传头像
        else if (username){
            // saveAvatar.call(this, username)
            console.log({
                a: ctx.request.body,
                b: ctx.query,
                c: ctx.params.username
            })
            ctx.body = await {a: ctx.request.body, b: ctx.query,c:ctx.params.username}
        } 
    }
}
module.exports = SignController
