module.exports = app => {
    class Controller extends app.Controller {
        // 查询指定子课程id下的活动
        async getActivity() {
            const {
                ctx,
                service,
            } = this
            /**
             * @argument course_child_id => {brainstorming} 对应的子课程id
             */
            const course_child_id = ctx.request.body.course_child_id || ctx.query.course_child_id
            const getActivity = await service.activity.getActivity(Number(course_child_id))
            ctx.body = getActivity
        }
        // 获取指定子课程id下的活动=》不同的活动
        async editActivity() {
            const {
                ctx,
                service,
            } = this
            const type = ctx.request.body.type || ctx.query.type // brainstorming || task || Discuss (头脑风暴 小组任务 答疑/讨论)
            const id = ctx.request.body.id || ctx.query.id // 对应的活动的id
            const editActivity = await service.activity.editActivity(type, Number(id))
            ctx.body = editActivity
        }
        // 更新指定子课程id下的活动=》不同的活动
        async updateActivity() {
            const {
                ctx,
                service,
            } = this
            const type = ctx.request.body.type || ctx.query.type // brainstorming || task (头脑风暴 小组任务)
            const id = ctx.request.body.id || ctx.query.id // 对应的活动的id
            let updateObj = null
            if (JSON.stringify(ctx.request.body) == '{}') {
                updateObj = ctx.query
            } else {
                updateObj = ctx.request.body
            }
            delete updateObj['id']
            delete updateObj['type']
            const updateActivity = await service.activity.updateActivity(type, Number(id), updateObj)
            ctx.body = updateActivity
        }
        // 修改指定子课程id下的活动的状态(status) 未开始wait经行conduct结束end
        async updateActivityStatus() {
            const {
                ctx,
                service,
            } = this
            const type = ctx.request.body.type || ctx.query.type // Brainstorming || Task (头脑风暴 小组任务)
            const id = ctx.request.body.id || ctx.query.id // 对应的活动的id
            const status = ctx.request.body.status || ctx.query.status // 修改成的状态

            const updateActivityStatus = await service.activity.updateActivityStatus(type, Number(id), status)
            ctx.body = updateActivityStatus
        }
        //   删除活动
        async delactivity() {
            const {
                ctx,
                service,
            } = this
            const type = ctx.request.body.type || ctx.query.type // Brainstorming || Task (头脑风暴 小组任务)
            const id = ctx.request.body.id || ctx.query.id // 对应的活动的id

            const delactivity = await service.activity.delactivity(type, Number(id))
            ctx.body = delactivity
        }
    }
    return Controller
}
