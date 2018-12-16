const Controller = require('egg').Controller
const {
    SUCCESS,
    ERROR,
    nowDate,
} = require('../util/util')

class TaskController extends Controller {
    /**
     * @param {} 创建小组任务
     */
    async setTask() {
        const {
            ctx, service, app
        } = this
        const course_child_id = ctx.request.body.course_child_id || ctx.query.course_child_id

        const title = ctx.request.body.title || ctx.query.title
        const description = ctx.request.body.description || ctx.query.description
        const fraction = ctx.request.body.fraction || ctx.query.fraction

        const member_group_type_id = ctx.request.body.member_group_type_id || ctx.query.member_group_type_id

        const TaskObj = {
            title,
            description,
            fraction,
            member_group_type_id,
        }
        
        const insertTask = await service.task.setTask(course_child_id, TaskObj)
        ctx.body = insertTask
    }

    /**
     * @param {} 获取指定小组id任务
     */
    async getOneTask() {
        const {
            ctx, service
        } = this
        const task_id = ctx.request.body.id || ctx.query.id || ctx.params.id
        const getOneTask = await service.task.getOneTask(Number(task_id))
        ctx.body = getOneTask
    }
    async setScore() {
        const {
            ctx, service
        } = this
        const student_id = ctx.request.body.student_id || ctx.query.student_id 
        const fraction = ctx.request.body.fraction || ctx.query.fraction 
        const types = ctx.request.body.type || ctx.query.type 
        const getOneTask = await service.task.setScore(student_id, fraction, types)

        ctx.body = getOneTask
    }
}


module.exports = TaskController
