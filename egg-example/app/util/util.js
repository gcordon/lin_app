'use strict'
const moment = require('moment')
const crypto = require('crypto')
const ms = require('ms') // 设置session时间长度 =》https://eggjs.org/zh-cn/core/cookie-and-session.html
// 文件上传
const sendToWormhole = require('stream-wormhole')
const fs = require('fs')
const path = require('path')

let Random = (Min, Max) => {
    var Range = Max - Min;
    var Rand = Math.random();
    if (Math.round(Rand * Range) == 0) {
        return Min + 1;
    }
    var num = Min + Math.round(Rand * Range);
    return num;
}

module.exports = {
    /** 
     * 失败反正的json
     */
    ERROR : {
        code : 1,
        msg : 'failed', // 失败
    },
    /**
     * 成功返回的JSON
     */
    SUCCESS : {
        code : 0,
        msg : 'success', // 成功
    },
    /**
     * 返回现在的时间 年月日 时分秒
     */
    nowDate: {
        date: moment().format('YYYY-MM-DD HH:mm:ss'),
    },
    // str 加密的内容
    // text 需要加入的特殊字符
    /*
            Encryption(str, text) {
                if (!str) throw new Error(`encryption ${String(str)} error`);
                return crypto.createHmac('sha256', String(str))
                    .update(text)
                    .digest('hex')
            },
    */
    // 密码加密
    // key == 'egg_client' || 'egg_server'
    Encryption(data, key) {
        const cipher = crypto.createCipher('aes192', key);
        var crypted = cipher.update(data, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    },
    // 密码解密
    // key == 'egg_client' || 'egg_server'
    Decrypt_Encryption(encrypted, key) {
            const decipher = crypto.createDecipher('aes192', key);
            var decrypted = decipher.update(encrypted, 'hex', 'utf8');
            decrypted += decipher.final('utf8');
            return decrypted;
    },
    // 接收参数
    GetParam(ctx, pramArr) {
        try {
            let arr = {}
            pramArr.forEach(item => {
                const pa = ctx.request.body[item] || ctx.query[item]
                arr[item] = pa
            })
            return arr
        } catch (error) {
            throw (`${__filename} => getParam 函数出错`)
        }
    },
    GetCookie (key) {
        return !!this.ctx.cookies.get(key)
    },
    SetCookie(key, value) {
        return !!this.ctx.cookies.set(key, value,{
            // httpOnly: false,
            // signed: false,
        })  
    },
    // 存储&&获取session
    GetSession(key) {
        return !!this.ctx.session[key]
    },
    SetSession(key, value, ms=false) {
        const set_session = !!(this.ctx.session[key] = value)
        // 如果用户勾选了 `记住我`，设置 30 天的过期时间
        ms ? this.ctx.session.maxAge = ms('30d') : null
        return set_session
    },
    // 发送邮箱
    // randomCode 随机code
    sendEmail(username, randomCode, sendEmail) {
        var nodemailer = require('nodemailer');

        var transporter = nodemailer.createTransport({
            service: 'qq',
            auth: {
                user: '1099065111@qq.com',
                pass: 'bmdjgoubdmwbhdgd' //授权码,通过QQ获取    
            }
        });
        var mailOptions = {
            from: '1099065111@qq.com', // 发送者  
            // to: '87788877@qq.com', // 接受者,可以同时发送多个,以逗号隔开  
            to: `${sendEmail}`,
            subject: '>> 用户修改密码 <<', // 标题  
            text: '吃葡萄不吐葡萄皮', // 文本  
            // html: `<h2>nodemailer基本使用:</h2><h3><a href="http://blog.csdn.net/zzwwjjdj1/article/details/51878392">  
            // http://blog.csdn.net/zzwwjjdj1/article/details/51878392</a></h3>`
            html: 
`<div id="contentDiv" onmouseover="getTop().stopPropagation(event);" onclick="getTop().preSwapLink(event, 'html', 'ZC1021-t_qo2lc4pZ5SJSB70QeYV8a');" style="position:relative;font-size:14px;height:auto;padding:15px 15px 10px 15px;z-index:1;zoom:1;line-height:1.7;" class="body">    <div id="qm_con_body"><div id="mailContentContainer" class="qmbox qm_con_body_content qqmail_webmail_only" style="">
<style>
.qmbox a {
    color: #009A61;
    text-decoration: none;
}
.qmbox h4 {
    font-size: 15px;
    font-weight: bold;
}
</style>
<div style=""></div>
    <center></center>
    <div style="margin: 80px auto 0; width: 580px; background: #FFF; box-shadow: 0 0 10px #333; text-align:left;">
        <div style="margin: 0 40px; color: #999; border-bottom: 1px dotted #DDD; padding: 40px 0 30px; font-size: 25px; text-align: center;">
            <a href="#" rel="noopener" target="_blank">EGG</a><br>
            密码找回
        </div>
    <div style="padding: 30px 40px 40px;text-align:center;font-size:24px;">
        用户：${username} 您好
        <br>
            本次找回密码验证码为： <span style="color:red;"> ${randomCode}</span>
        <br>
    </div>
    <div style="text-align: center;">
        <a href="https://segmentfault.com/app" style="display: block;height: 160px;" rel="noopener" target="_blank">
            <!-- <img src="http://sfault-image.b0.upaiyun.com/386/403/3864035040-5631c20777f98" style="width: 520px;"> -->
        </a>
    </div>
        <center></center>
        <div></div>
        <div style=""></div>
<br><br>
<div style="width:1px;height:0px;overflow:hidden">
<img style="width:0;height:0" src="http://sctrack.sc.gg/track/open/eyJtYWlsbGlzdF9pZCI6IDAsICJ0YXNrX2lkIjogIiIsICJlbWFpbF9pZCI6ICIxNTQwMTI0NDk0OTY0XzE0OTRfMTQyMF81NzQwLnNjLTEwXzlfNTVfMTItaW5ib3VuZDAkODc3ODg4NzdAcXEuY29tIiwgInNpZ24iOiAiOWVhMjc5YTczM2Y5NGYyM2YxNjkyMzE3N2E4ZDU2YmMiLCAidXNlcl9oZWFkZXJzIjoge30sICJsYWJlbCI6IDAsICJ1c2VyX2lkIjogMTQ5NCwgImNhdGVnb3J5X2lkIjogNTU1NzN9.gif">
</div>

<style type="text/css">.qmbox style, .qmbox script, .qmbox head, .qmbox link, .qmbox meta {display: none !important;}</style></div></div><!-- --><style>#mailContentContainer .txt {height:auto;}</style>  </div>`
            
        };
        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                console.log(err);
                return;
            }
            console.log('发送成功');
        });
    },
    // 验证发送邮箱时验证的token(注意: 是前几位和后几位，具体看arguments的第二个参数)
    // token, sli, is='send'
    /*
        validateSendEmailToken(token, sli) {
            // 验证函数参数
            let argumentArr = Array.from(arguments)
            if (argumentArr.length < 2) return `validateSendEmailToken Arguments 参数少于2位`
            // 发送邮箱内容
            return token.slice(0, sli) + '_validateSendEmailToken_' + token.slice(-sli)
        },
        SendEmailToken() {
            // var token_str = 'validateSendEmailToken'
            let regExp = /(\w+)(\_{1,}[validateSendEmailToken]+\_{1,})(\w+)/
            let match = token.match(regExp)
            if (match[2] != 'validateSendEmailToken') return console.log('发送的邮箱验证不等于 validateSendEmailToken 失败')
        },
    */
    // 随机字符串 5位
    randomCode() {
        var arr = []
        for (var i = 0; i < 26; i++) {
            arr.push(String.fromCharCode(65 + i))
            arr.push(String.fromCharCode(97 + i))
        }
        for (let i = 0; i < 100; i++) {
            arr.push(i)
        }
        var arr2 = [];
        while (arr.length > 0) {
            var index = Math.floor(Math.random() * arr.length);
            arr2.push(arr[index]);
            arr.splice(index, 1);
        }
        return arr2.join('').slice(5, 10);
    },
    /**
     * @argument student中的username
     * @argument 
     *  */
    async saveAvatar(username,) {
        const {
            ctx, service
        } = this
        let response
        /****************start 本地文件上传************************** */
        const stream = await ctx.getFileStream()
        if (!stream) ctx.body = `文件上传存在或上传失败${stream}`
        const extname = path.extname(stream.filename)

        const name = path.basename(stream.filename, extname)
        const filename = name + Date.now() + extname

        const splitFilename = filename.split('.')
        const suffix = splitFilename[splitFilename.length - 1]

        const imageName = `${username}.${suffix}`
        let result, setAvatar
        try {
            let avatarPath = 'app/public/img/user/avatar/'

            let CurrentParevPath = path.resolve(__dirname, '../')
            let newPath = path.resolve(CurrentParevPath + '/public/img/user/avatar')

            if (!fs.existsSync(newPath)) {
                fs.mkdirSync(newPath)
                console.log(`新建文件夹：${newPath}成功！`)
            }

            // 本地上传
            const ws = fs.createWriteStream(path.resolve(avatarPath + imageName))
            stream.pipe(ws)
            // oss 服务
            // result = await ctx.oss.put(name + now, stream)
            /****************end 本地文件上传************************** */

            /****************start 数据库写入************************** */
            setAvatar = await service.student.setAvatar(username, `public/img/user/avatar/${imageName}`) // 用户名 && 图片名
            /****************end 数据库写入************************** */
        } catch (e) {
            await sendToWormhole(stream)
            response = '上传本地图片失败'
            throw (e)
        } finally {
            await sendToWormhole(stream)
        }
        response = '上传本地图片成功'
        setAvatar.localhostAvatar = response
        if (setAvatar) {
            // ctx.body = setAvatar
            return Object.assign({code:0},{
                msg: '',
                data: setAvatar
            })
        } else {
            return Object.assign({
                code: 1
            }, {
                msg: '头像上传失败',
                data: ''
            })
        }
    },
    /**
     * 
     * @param {*需要验证的请求数据} paramRule 
     * @param {*类型} q 
     */
    // 验证  GET 或 POST 传递的参数
    * valParamRule(paramRule, q='post') {
        const paramError = this.app.validator.validate(paramRule, q == 'post' ? this.ctx.request.body : this.ctx.query);
        console.log('====================================');
        console.log('====================================');
        console.log('====================================');
        console.log(paramError);
        console.log(paramError);
        console.log('====================================');
        console.log('====================================');
        console.log('====================================');
        console.log('====================================');
        if (paramError) {
            return this.ctx.body = Object.assign({
                    code: 1,
                    // msg: 'failed', // 失败
                }, { 
                    data: {}, msg: paramError 
                })
        }
        yield next()
    }
}
