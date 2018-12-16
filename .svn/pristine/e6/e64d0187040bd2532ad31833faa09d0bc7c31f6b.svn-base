'use strict';

const Controller = require('egg').Controller;

class TokenController extends Controller {
    async token() {
        var jwt =  require('jsonwebtoken') // token 生成
        var crypto = require('crypto') // md5加密
        // 生成Token
        var content = { msg: 'egg app' } // 要生成token的主题信息
        var secretOrprivateKey = 'egg app jiami' //这是加密的key（密钥）
        var token = jwt.sign(content, secretOrprivateKey, {
            expiresIn: 60*60 // 24 小时过期
        })

        const username = 'linlinlin'
        const cryptoUsername = crypto.createHash('md5').update(`${username} ${Math.random()} ${username} egg`).digest('hex')
        
        this.ctx.body = {
            jwt
        }
    }
}

module.exports = TokenController;



