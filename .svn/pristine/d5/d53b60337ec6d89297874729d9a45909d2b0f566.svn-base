'use strict';

const Controller = require('egg').Controller

const {
    SUCCESS,
    ERROR,
} = require('../util/util')
class CourseTypeController extends Controller {
    /**
     * 写入类课程
     */
    async setCourseClass() {
        const { 
            ctx, service,
        } = this
        // const class_name = ctx.query.class_name
        const title = ctx.query.title
        const course_type_id = ctx.query.course_type_id
        const courseClassObj = {
            class_name,
            course_type_id
        }
        const course = await service.courseClass.setCourseClass(courseClassObj)
   
        ctx.body = course
    }
   
}

module.exports = CourseTypeController
