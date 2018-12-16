'use strict';

const Controller = require('egg').Controller;

class CourseAllController extends Controller {
        /**
         * @param {后台获取所有的子课程}
         */
        async adminGetCourseAll() {
            const {
                ctx,
                service
            } = this
            const adminGetCourseAll = await service.courseAll.adminGetCourseAll()

            ctx.body = adminGetCourseAll
        }
        /**
         * @param {后台添加时用户获取所有的 课程 =》 总 | 类 }
         */
        async adminGetCourse() {
            const {
                ctx,
                service
            } = this
            ctx.body = adminGetCourse
        }
      /**
     * @param {获取所有的子课程}
     */
    async getCourseAll() {
        const {
            ctx, service 
        } = this
        
        const getCourseAll  = await service.courseAll.getCourseAll()

        ctx.body = getCourseAll
    }
    /**
     * @param {获取指定类课程id下的子课程}
     */
    async getCourseChildnAll() {
        const {
            ctx, service
        } = this

        ctx.set('Access-Control-Allow-Origin', '*')
        
        const course_class_id = ctx.query.course_class_id
        const CourseChildAll = await service.courseAll.CourseChildnAll(course_class_id)
        ctx.body = CourseChildAll
    }
    /**
     * @param {获取指定总课程id下的类课程}
     */
    async getCourseClassAll() {
        const {
            ctx, service
        } = this
        const course_type_id = ctx.query.course_type_id
        const CourseClassAll = await service.courseAll.CourseClassAll(course_type_id)
        ctx.body = CourseClassAll
    }
    /**
     * @param {获取指定总课程id下的所有子课程}
     */
    async getCourseFindChildAll() {
        const {
            ctx, service
        } = this
        const course_type_id = ctx.query.course_type_id
        const CourseFindChildAll = await service.courseAll.getCourseFindChildAll(course_type_id)
        ctx.body = CourseFindChildAll
        
    }
}

module.exports = CourseAllController;
