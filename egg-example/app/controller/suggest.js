'use strict';

const Controller = require('egg').Controller;
const {
    SUCCESS,
    ERROR,
} = require('../util/util')

const path = require('path')
const moment = require('moment')
const fs = require('fs')

class SuggestController extends Controller {

    async suggest() {
        const { ctx, app, service } = this;
        try {
            const stream = await ctx.getFileStream()       // 上传的文件流
            const {
                problem, // 问题
                address, // 联系方式
                md, // 手机型号
                os, // 手机版本
            } = stream.fields
            // date, // 上传时间

            /**************start 文件上传相关*************** */
                const suffix = path.extname(stream.filename)   // 获取后缀
                const appPath = path.resolve(__dirname, '../') // 获取到app目录
                const avatarPath = path.resolve(appPath + '/public/img/suggest/')

                // 以当前时间戳命名
                let currentDate = moment().format('YYYY-MM-DD') + '_' + Date.now()
                const imagename = '/' + path.basename(currentDate + suffix)

                const filePath = path.resolve(avatarPath + imagename) //需要上传文件的地址

                // /**********开始本地上传文件************* */
                const ws = fs.createWriteStream(path.resolve(avatarPath + imagename))
                let text = '本地上传图片文件！'
                if (stream.pipe(ws)) {
                    text = '本地图片上传成功！'
                }
                // 写入数据库时保存的课程图片地址
                let img_url = 'public/img/suggest' + imagename
            /*****************end 文件上传相关****************** */
            // 保存到数据库

            const save_suggest = await ctx.model.Suggest.create({
                problem,
                address,
                md,
                os,
                img: img_url,
                date: moment().format('YYYY-MM-DD HH:mm:ss'),
            })
            try {
                return this.ctx.body = Object.assign(SUCCESS, {
                    data: {},
                    msg: '反馈问题成功',
                })
            } catch (error) {
                return this.ctx.body = Object.assign(ERROR, {
                    data: {},
                    msg: `反馈问题失败${error}`,
                })
            }
        } catch (error) {
            // 处理没有图片上传的

            const paramRule = {
                problem: { type: 'string', required: true },  // 问题
                md: { type: 'string', required: false, allowEmpty: true },// 手机型号
                os: { type: 'string', required: false, allowEmpty: true },// 手机版本
                // img: { required: false, },                      // 图片
                address: { type: 'string', required: false, allowEmpty: true },  // 联系方式
            }
            const paramError = app.validator.validate(paramRule, ctx.request.body);
            if (paramError) {
                return ctx.body = Object.assign(ERROR, {
                    data: {},
                    msg: paramError
                })
            }
            // 写入反馈
            try {
                const create_suggest = Object.assign(ctx.request.body, {
                    date: moment().format('YYYY-MM-DD HH:mm:ss'),
                })
                const save_suggest = await ctx.model.Suggest.create(create_suggest)
                return this.ctx.body = Object.assign(SUCCESS, {
                    data: {},
                    msg: '反馈问题成功',
                })
            } catch (error) {
                return this.ctx.body = Object.assign(ERROR, {
                    data: {},
                    msg: `反馈问题失败${error}`,
                })
            }
        }
    }

}

module.exports = SuggestController;



