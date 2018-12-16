'use strict';

const Controller = require('egg').Controller;
const path = require('path');
const fs = require('fs')
const sendToWormhole = require('stream-wormhole');

class TestController extends Controller {
    antd() {
        console.log('====================================');
        console.log(this.ctx.request.body);
        console.log(this.ctx.query)
        console.log(this.ctx.getFileStream())
        console.log('====================================');
        this.ctx.body = '666'    
    }
    fire() {
        this.ctx.body = {
            code:1,
            msg:'错误信息！！！'
        }
    }
    home(){
        this.ctx.body = 'hi, egg'
    }
    async fangkui() {
        const {
            ctx,
        } = this
        console.log('stream======')
        console.log('stream======')
        const b = await ctx.request.body
        // const stream = await ctx.getFileStream()       // 上传的文件流
        // console.log(stream)
        console.log('====================================');
        console.log(b);
        console.log('====================================');
        console.log('fangkuifangkuifangkuifangkui======')
        console.log('fangkuifangkuifangkuifangkui======')
        return ctx
    }
    async validate() {
        const {
            ctx
        } = this
        const createRule = {
            LoginName: {type:'string'}
        }
        // console.log(errors)
        // ctx.body = errors || ctx.request.body
        try {
            const errors = await ctx.validate(createRule)
            this.ctx.body =  this.ctx.request.body
        } catch (error) {
            this.ctx.body = error || this.ctx.request.body
        }
    }
    async search() {
        const {ctx,app} = this
        const Op = app.Sequelize.Op;
        const search = await ctx.model.Course.findAndCountAll({
            where: {
                [Op.or]: [
                    { title: { $like: '%' + ctx.params.keyword + '%' } },
                    { school: { $like: '%' + ctx.params.keyword + '%' } },
                ]
            },
            attributes: ['title','id'],
        })
        ctx.body = search || 'search'
    }
    
    tfdsafasd() {
        const {
            app, ctx
        } = this
        // Reuqest 参数规则
        const paramRule = {
            username: {type: 'string'},
            password: {type: 'string'},
            rememberMe: {type: 'boolean',required: false},
        }
        const paramErrors = app.validator.validate(paramRule, ctx.request.body)

        if (paramErrors) {
            ctx.body = `校验失败`
        } 
        else {
            ctx.body = `校验成功, ${ctx.request.body.username}`
        }
    }
    test() {
        const { 
            ctx,
        } = this
        console.log(ctx.request.body)
        this.ctx.body = '666'
    }
    async pug() {
        await this.ctx.render('hello.pug', {
            index: 'linlinlin'
        })
    }
    // 上传图片
    async upload() {
        let response
        const stream = await this.ctx.getFileStream();
        console.log('====================================');
        console.log(this.ctx.query)
        console.log(this.ctx.request.body)
        console.log(stream)
        console.log('====================================');
        this.ctx.body = 'getFileStream'
        return
        
        const extname = path.extname(stream.filename);
        const name = path.basename(stream.filename, extname);
        const filename = name + Date.now() + extname;
        let result;
        try {
            // 本地上传
            const ws = fs.createWriteStream(path.resolve('app/public/' + '1.jpg'));
            stream.pipe(ws);
            // oss 服务
            // result = await this.ctx.oss.put(name + now, stream)
        } catch (e) {
            await sendToWormhole(stream);
            throw new Error(e);
            response = '上传图片失败'
        } finally {
            await sendToWormhole(stream); 
        }
        response = '上传图片成功'
        
        this.ctx.body = response;
    }
    async socket() {
        await this.ctx.render('socket.pug')
    }
    async socket_a() {
        await this.ctx.render('socket_a.pug')
    }
    async socket_b() {
        await this.ctx.render('socket_b.pug')
    }
}

module.exports = TestController;