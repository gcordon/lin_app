'use strict';

const Service = require('egg').Service
const {
    SUCCESS,
    ERROR,
} = require('../util/util')

class CourseClassService extends Service {
    /**
     * 
     * @param {子课程数据库对应的数据} courseClassObj 
     */
    async setCourseClass(courseClassObj) {
        const {
            ctx,
        } = this
        try {
            const findTitle = await ctx.model.CourseClass.findOne({
                where: {
                    // class_name: courseClassObj.class_name
                    title: courseClassObj.title
                }
            })
            if (findTitle) {
                return Object.assign(SUCCESS, {
                    msg: '类课程已存在',
                    data: '',
                }) 
            }
            // 创建子课程
            const CourseClass = await ctx.model.CourseClass.create({
                // class_name: courseClassObj.class_name,  // 课程名
                title: courseClassObj.title,  // 课程名
                course_type_id: courseClassObj.course_type_id, // 父课程id,
                courseTypeId : 3
            })

            return Object.assign(SUCCESS, {
                msg: '',
                data: CourseClass,
            })

        } catch (error) {
            ctx.status = 500
            throw (error)
        }
    }
   

}

module.exports = CourseClassService
