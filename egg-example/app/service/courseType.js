'use strict';

const Service = require('egg').Service
const {
    SUCCESS,
    ERROR,
} = require('../util/util')

class CourseTypeService extends Service {
    async setCourseType(course_type) {
        const {
            ctx,
        } = this
        try {
            // 写入课程
            var courseObj = {}
            const courseArr = ['计算机', '经济管理', '心理学', '外语', '文学历史', '艺术设计', '工学', '理学', '生命科学', '哲学', '法学', '教育教学',]
            courseArr.forEach( (Element, index)=> {
                courseObj[index] = Element
                // {0: "计算机", 1: "经济管理", 2: "心理学", 3: "外语", 4: "文学历史", 5: "艺术设计", 6: "工学", 7: "理学", 8: "生命科学", 9: "哲学", 10: "法学", 11: "教育教学"}
            })

            const ifCourseType = await ctx.model.CourseType.findOne({
                // where: { class_name: course_type }
                where: {
                    title: course_type
                }
            })
            if (ifCourseType) {
                return Object.assign(ERROR,{
                    data: '',
                    msg : '已存在此总课程'
                })
            }
            
            const CourseType = await ctx.model.CourseType.create({
                // class_name: course_type,
                title: course_type,
            })

            return Object.assign(SUCCESS,{
                data: course_type,
            })

        } catch (error) {
            ctx.status = 500
            throw (error)
        }
    }
}

module.exports = CourseTypeService
