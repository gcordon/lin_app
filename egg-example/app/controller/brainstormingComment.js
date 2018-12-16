const Controller = require('egg').Controller
const {
    SUCCESS,
    ERROR,
    nowDate,
} = require('../util/util')
const moment = require('moment')


class brainstormingController extends Controller {
    /**
     * 写入单个蓝墨头脑风暴评论
     */
    async setOneBrainstormingComment() {
        const {
            ctx, service, app
        } = this
        const comment_content = ctx.request.body.comment_content || ctx.query.comment_content
        const student_token = ctx.request.body.student_token || ctx.query.student_token
        const brainstorming_id = ctx.request.body.brainstorming_id || ctx.query.brainstorming_id
        const commentObj = {
            comment_content,
            student_token,
            brainstorming_id: Number(brainstorming_id),
            date: moment().format('YYYY-MM-DD HH:mm:ss'),
        }
        const setOneTaskComment = await service.brainstormingComent.setOneBrainstormingComment(commentObj)
        ctx.body = setOneTaskComment
    }
    //  判断是否已填写评论 //写入指定的头脑风暴id评论之前（点击指定的头脑风暴之后触发）查看此token的学生是否已有评论
    async getStudentBrainstormingComment() {
        const {
            ctx, service, app
        } = this
        const student_token = ctx.request.body.student_token || ctx.query.student_token
        const brainstorming_id = ctx.request.body.brainstorming_id || ctx.query.brainstorming_id
        
        const getStudentBrainstormingComment = await service.brainstormingComent.getStudentBrainstormingComment(student_token, Number(brainstorming_id))
        ctx.body = getStudentBrainstormingComment
    }
}
module.exports = brainstormingController