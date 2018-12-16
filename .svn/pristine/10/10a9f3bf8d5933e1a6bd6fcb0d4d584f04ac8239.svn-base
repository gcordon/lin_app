const Controller = require('egg').Controller
const {
    SUCCESS,
    ERROR,
    nowDate,
} = require('../util/util')
const moment = require('moment')


class discussController extends Controller {
    /**
     * 写入单个蓝墨答疑/讨论   发布消息
     * @argument {socket}
     */
    async setOneDiscussComment() {
        const {
            ctx, service, app
        } = this
        var comment_content_obj = ctx.request.body.comment_content_obj || ctx.query.comment_content_obj
        const discuss_id = ctx.request.body.discuss_id || ctx.query.discuss_id // 讨论

        const setOneTaskComment = await service.discussComent.setOneDiscussComment(JSON.parse(comment_content_obj), Number(discuss_id))
        ctx.body = setOneTaskComment
    }
    /**
     * @param {} 获取指定的答疑讨论id下的消getDiscussMessage息
     */
    async getDiscussMessage() {
        const {
            ctx, service, app
        } = this
        // 消息的id 
        var id = ctx.request.body.id || ctx.query.id

        const getDiscussMessage = await service.discussComent.getDiscussMessage(JSON.parse(id))
        ctx.body = getDiscussMessage
    }
}
module.exports = discussController