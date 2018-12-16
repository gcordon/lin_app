const Controller = require('egg').Controller

class brainstormingController extends Controller {
    /**
     * @param {} 创建头脑风暴
     */
    async setBrainstorming() {
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

        const setBrainstorming = await service.brainstorming.setBrainstorming(course_child_id, TaskObj)
        ctx.body = setBrainstorming
    }

    /**
     * @param {} 更新头脑风暴
     */
    async updateBrainstorming() {
        const {
            ctx, service, app
        } = this
        let  updateObj = null
        if (JSON.stringify(ctx.request.body) == '{}') {
            updateObj = ctx.query
        } else {
            updateObj = ctx.request.body
        }

        const updateBrainstorming = await service.brainstorming.updateBrainstorming(updateObj)
        ctx.body = updateBrainstorming
    }

    /**
     * @param {} 获取指定头脑风暴id
    */
    async getOneBrainstorming() {
        const {
            ctx, service,
        } = this
        const brainstorming_id = ctx.request.body.id || ctx.query.id || ctx.params.id
        const getOneBrainstorming = await service.brainstorming.getOneBrainstorming(brainstorming_id)
        ctx.body = getOneBrainstorming
    }

}
module.exports = brainstormingController