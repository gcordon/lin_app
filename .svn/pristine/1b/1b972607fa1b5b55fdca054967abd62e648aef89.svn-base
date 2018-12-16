const Controller = require('egg').Controller
const {
    SUCCESS,
    ERROR,
    nowDate,
} = require('../util/util')
const moment = require('moment')


class TaskCommentController extends Controller {
    /**
     * 写入单个蓝墨任务评论
     */
    async setOneTaskComment() {
        const {
            ctx, service, app
        } = this
        const comment_content = ctx.request.body.comment_content || ctx.query.comment_content
        const student_token = ctx.request.body.student_token || ctx.query.student_token
        const task_id = ctx.request.body.task_id || ctx.query.task_id
        const commentObj = {
            comment_content,
            student_token,
            task_id: Number(task_id),
            date: moment().format('YYYY-MM-DD HH:mm:ss'),
        }
        const setOneTaskComment = await service.taskComment.setOneTaskComment(commentObj)
        ctx.body = setOneTaskComment
    }
}
module.exports = TaskCommentController