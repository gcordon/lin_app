'use strict';

const Controller = require('egg').Controller

class TeacherController extends Controller {
    async getTeacher() {
        const {
            ctx, service
        } = this

        const teacherIdArr = ctx.query.tearcher_id
        ctx.body = await service.teacher.getTeacher(teacherIdArr)

    }
}
module.exports = TeacherController


