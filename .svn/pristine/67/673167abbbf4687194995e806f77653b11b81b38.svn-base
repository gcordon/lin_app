
const Controller = require('egg').Controller
const path = require('path')

class discussController extends Controller {
    /**
     * @param {} 创建答疑讨论
     */
    async setDiscuss() {
        const {
            ctx, service, app
        } = this
        const course_child_id = ctx.request.body.course_child_id || ctx.query.course_child_id

        const title = ctx.request.body.title || ctx.query.title
        const description = ctx.request.body.description || ctx.query.description
        const fraction = ctx.request.body.fraction || ctx.query.fraction

        const TaskObj = {
            title,
            description,
            fraction: Number(fraction),
        }

        const setDiscuss = await service.discuss.setDiscuss(course_child_id, TaskObj)
        ctx.body = setDiscuss
    }

}
module.exports = discussController