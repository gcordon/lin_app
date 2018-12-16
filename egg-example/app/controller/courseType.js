'use strict';

const Controller = require('egg').Controller

class CourseTypeController extends Controller {
    async setCourseType() {
        const { 
            ctx, service,
        } = this
        // const course_type = ctx.query.course_type
        const course_type = ctx.query.course_type
        ctx.body = await service.courseType.setCourseType(course_type)
    }
}

module.exports = CourseTypeController
