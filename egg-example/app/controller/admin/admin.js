const Controller = require('egg').Controller
const os = require('os')
const ms = require('ms')
const path = require('path')

// ('=获取ip地址===================================');
// 192.168.93.14/24
// console.log(os.networkInterfaces()['以太网'][1].cidr.split('/')[0]);
const {
    getParam
} = require('../../util/getparam.js')
const {
    ERROR,
    SUCCESS,
    Encryption,
    Decrypt_Encryption,
    GetParam,
    GetSession,
    SetSession,
} = require('../../util/util')



const crypto = require('crypto')


class AdminController extends Controller {
    constructor(ctx) {
        super(ctx)
        // 当前egg后台服务器的ip地址；
        this.current_ip = os.networkInterfaces()['以太网'][1].cidr.split('/')[0]
    }
    // 显示后台登录界面
    async showLogin() {
        const { ctx } = this
        // 判断是否已经登录了
        if (GetSession.call(this, 'egg_server')) {
            await ctx.redirect('/admin/home')
        } else {
            await this.ctx.render('login.pug', {
                home: 'linlinlin',
                current_ip: this.current_ip
            })
        }
        // await GetSession.call(this,'egg_server') ? ctx.redirect('/admin/home'): next();
        // // 渲染登录模板
        // await this.ctx.render('login.pug', {
        //     home: 'linlinlin',
        //     current_ip: this.current_ip
        // })
    }
    // 后台管理员登陆
    async ajaxLogin() {
            // 加密
            let password = this.ctx.request.body['password']
            let username = this.ctx.request.body['username']
            // 加密密码 后台
            const encryption_password = Encryption(password, 'egg_server')
            /**
             *
            const paramarr = ['username', 'password']
            const ajaxLoginObj = getParam(this.ctx, paramarr)
             * 
             */
            const ajaxLogin = await this.service.admin.ajaxLogin({
                username,
                password,   
                encryption_password,
            })
            // 设置session key值为egg_server value值为加密后的后台登录密码
            // SetSession.call(this, 'egg_server', encryption_password)
            // this.ctx.body = Object.assign(SUCCESS, {
            //     msg: `后台登录成功！`
            // })
        this.ctx.body = ajaxLogin
    }
    //  后台退出登录
    logout() {
        // 清除登录session
        const {
            ctx,
        } = this
        ctx.session.egg_server = null
        this.ctx.redirect('/admin/login', 302)
    }
    async showHome() {
        await this.ctx.render('home.pug')
    }
/******************************start用户表***********************************/
    // 显示showUser.pug
    async showUser() {
        
        await this.ctx.render('showUser.pug',{
        })
    }
    // 显示showCourse.pug
    async showCourse() {
        const courseAll = await this.service.courseAll.getCourseAll({})
        await this.ctx.render('showCourse.pug', {
            courseAll: courseAll,
        })
    }
    // 显示addCourse.pug
    async addCourse() {
        const getCourseAll = await this.service.courseAll.getCourseAll({})
        await this.ctx.render('addCourse.pug', {})
    }

    // 显示student表（分页）
    async getUser() {
        const {ctx}=this
        // console.log(this.ctx.session.egg_server)
        // this.router.redirect('/','/home', 302)
        // window.location.href = 'http://www.baidu.com'
        // if (this.ctx.session.egg_server) {
        // }
        const page = ctx.request.body.page || ctx.query.page 
        const limit = ctx.request.body.limit || ctx.query.limit 

        const findUser = await ctx.model.Student.findAndCountAll({
            // where: {
                // decide: 1,
            // },
            'offset': (Number(page) - 1) * Number(limit),
            'limit': Number(limit),                      // 每页多少条
        })
        findUser.rows.map(item => {
            const oldavatar = item.dataValues.avatar
            // 加密之前的密码
            item.dataValues.defaultpassword = Decrypt_Encryption(item.dataValues.password, 'egg_client')
            // 
            item.dataValues.avatar = `<img 
            style="display: inline-block; width: 50%; height: 100%;" 
            layer-src="../${oldavatar}" src="../${oldavatar}" alt="../${oldavatar}"
            sql-src="${oldavatar}"
            src="../${oldavatar}">`
        })
        const count = findUser.count
        ctx.body = Object.assign(SUCCESS,{
            count: findUser.count,
            data: findUser.rows,
        })
    }
    // 删除指定的student id
    async delUser() {
        const {ctx} = this
        const id = ctx.request.body.id || ctx.query.id//用户id
        
        const delUser = await ctx.model.Student.destroy({
            where: {
                id: Number(id)
            }
        })
        if (delUser) {
            ctx.body = Object.assign(SUCCESS, {
                msg: `用户id: ${id} 删除成功！`
            })
        } else {
            ctx.body = Object.assign(SUCCESS, {
                msg: `用户id: ${id} 删除失败！`
            })
        }
    }
    // 修改用户资料
    async setDatum() {
        const { ctx, service } = this
        // 可以是任意的更改
        const datumObj = ctx.request.body
        const setDatum = await service.admin.setDatum(datumObj)
        ctx.body = setDatum
    }

    // 添加用户
    async addUser() {
        const {
            ctx,
            service
        } = this
        // 可以是任意的更改
        const userObj = ctx.request.body
        Object.assign(userObj, {
            username: String(userObj.username), // 如果是数字也转换成字符串
        })
        const addUser = await service.admin.addUser(userObj)
        ctx.body = addUser
    }
/******************************end用户表***********************************/

    // 显示showBanner.pug
    async showBanner() {
        await this.ctx.render('showBanner.pug')
    }
    async upload () {
        const {
            ctx
        } = this;
        // const file = ctx.request.files[0];
        const stream = await ctx.getFileStream()
        const extname = path.extname(stream.filename)
        this.ctx.body = extname
    }
}
module.exports = AdminController