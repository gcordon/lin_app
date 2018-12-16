const Controller = require('egg').Controller
const moment = require('moment')

class MessageController extends Controller {
    // 写入消息中心
    async setMessageCenter() {
        const {
            ctx, service, app
        } = this

        // const paramRule = {
        //     title: {type:'string', required: true,},
        //     course_child_id: { type: 'number', required: true,},
        //     date: {type: 'data', required: false,},
        // }

        // //  Postman 传递的 course_id 是string类型
        // ctx.query.course_child_id = Number(ctx.query.course_child_id)

        // const paramErrors = await app.validator.validate(paramRule,  ctx.query)
        // if (paramErrors) {    // 如果为真说明校验不通过
        //     return ctx.body = `setMessageCenter 参数校验失败`
        // }

        // => 2018-05-29 09:09:05
        const title = ctx.request.body.title || ctx.query.title
        const course_child_id = ctx.request.body.course_child_id || ctx.query.course_child_id

        const date = moment().format('YYYY-MM-DD HH:mm:ss')

        const insertObj = {
            title,
            course_child_id,
            date,
        }

        const insertMessage = await service.message.setMessageCenter(insertObj)
        ctx.body = insertMessage
    }

    // 获取消息中心
    async getMessageCenter() {
        const {
            ctx, service, app
        } = this

        // const paramRule = {
        //     limit: {type: 'number', required: false},
        // }
        // const paramErrors = await app.validator.validate(paramRule, ctx.query)
        // if (paramErrors) {    // 如果为真说明校验不通过
        //     return ctx.body = `getMessageCenter 参数校验失败`
        // }

        const limit = ctx.request.body.limit || ctx.query.limit
        const course_child_id = ctx.request.body.course_child_id || ctx.query.course_child_id
        const findLimitMessage = await service.message.getMessageCenter(limit, course_child_id )
        ctx.body = findLimitMessage

    }

    // 删除指定的id消息
    async delMessageCenter() {
        const {
            ctx,service
        } = this
        const id = ctx.request.body.id || ctx.query.id || ctx.params.id
        console.log(ctx.params)
        const delMessageCenter = await service.message.delMessageCenter(Number(id))
        ctx.body = delMessageCenter
    }
}
module.exports = MessageController