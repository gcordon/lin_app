'use strict';

const Service = require('egg').Service
const {
    SUCCESS,
    ERROR,
} = require('../util/util')

/**
 * @param {帅选总课程 && 类课程 && 子课程}
 */
class CourseAllService extends Service {
    constructor(ctx) {
        super(ctx)
        this.Course = ctx.model.Course
        this.CourseClass = ctx.model.CourseClass
        this.CourseType = ctx.model.CourseType
    }
    // #后台#获取所有的课程列表
    async adminGetCourseAll() {
        const {
            ctx
        } = this
        const type_ = 1111,
            class_ = 2222,
            child_ = 3333
        const a = await ctx.model.CourseType.findAll({
            // attributes: ['id', 'class_name']
            attributes: ['id', 'title']
        })
        const b = await ctx.model.CourseClass.findAll({
            // attributes: ['id', 'class_name', 'course_type_id']
            attributes: ['id', 'title','course_type_id']
        })
        const c = await ctx.model.Course.findAll({
            attributes: ['id', 'title','course_class_id','course_type_id']
        })
        a.map(v => {
            const d = v.dataValues
            // 赋值原来的id到old
            d.old_id = d.id
            d.id = d.id + type_
            d.pid = 0
            // d.title = d.class_name
            d.title = d.title
        })
        b.map(v => {
            const d = v.dataValues
            // old
            d.old_id = d.id
            d.old_course_type_id = d.course_type_id
            d.old_pid = d.course_type_id

            // new
            d.id = d.id + class_
            d.pid = d.course_type_id + type_
            // d.title = d.class_name
            d.title = d.title
        })
        
        c.map(v => {
            const d = v.dataValues
            // old
            d.old_id = d.id
            d.old_course_type_id = d.course_type_id
            d.old_course_class_id = d.course_class_id
            // d.old_class_name = d.class_name
            d.old_class_name = d.title
            // new
            d.id = d.id + child_
            d.pid = d.course_class_id + class_
            d.old_pid = d.course_class_id 
        })
        // course_class_id
        // course_type_id

        return Object.assign(SUCCESS, {
            data: [...a,...b,...c]
        })
    }
    // 获取所有的课程列表
    async getCourseAll() {
        const {
            ctx
        } = this
        //- 总 + 111
        //- 类 + 222
        //- 子 + 333
        // 用户后台请求 数据的pid使用
        try {
            var TypeAll = await ctx.model.CourseType.findAll({})
            var courseTypeAll = []
            for (var i = 0; i < TypeAll.length; i++) {
                courseTypeAll.push(TypeAll[i].dataValues)
            }
            var ClassAll = await ctx.model.CourseClass.findAll({
                order: [
                    ['id','DESC'],
                ]
            })
            var courseClassAll = []
            for (var i = 0; i < ClassAll.length; i++) {
                courseClassAll.push(ClassAll[i].dataValues)
            }
    /**子课程 数据添加  start*/

            var CourseAll = await ctx.model.Course.findAll({
                order: [
                    ['id','DESC'],
                ],
                // 后台展示所需
                attributes: [
                    'id', 'title', 'course_type_id', 'course_class_id'
                ]
                // 后台展示所需
            })
            var courseAllArr = []
            for (var i = 0; i < CourseAll.length; i++) {
                courseAllArr.push(CourseAll[i].dataValues)
            }
    /**子课程 数据添加  start*/


            //  数据规划（把子类课程表规划到夫课程表中，children）
            courseTypeAll.map(Element => {
                Element.children = []
            })
            courseClassAll.map(Element => {
                Element.children = []
            })
            
            await courseTypeAll.forEach((Type, index1) => {
                courseClassAll.forEach((Class, index2) => {
                    if (Type.id == Class.course_type_id) {
                        courseTypeAll[index1].children.push(Class)
                    /**子课程 数据添加  start*/

                        courseAllArr.forEach((Course,index3)=>{
                            if (Class.id == Course.course_class_id) {
                                courseClassAll[index2].children.push(Course)
                            }
                        })
                    /**子课程 数据添加  end*/

                    }
                })
            })
            return Object.assign(SUCCESS,{
                msg: '',
                data: courseTypeAll
            })
            
        } catch (error) {
            ctx.status = 500
            throw (error)
        }

    }
    /**
     * @param {CourseChildrenAll}  
     * 获取指定类课程id下的子课程
     */
    async CourseChildnAll(course_class_id) {
        const {
            ctx
        } = this
        try {
            const childrenAll = await ctx.model.Course.findAll({
                // attributes: ['id','title','banner'],
                where: { 
                    course_class_id: course_class_id 
                },
                order: [
                    ['id','DESC']
                ],
            })
            childrenAll.forEach(async (item,index) => {
                const findTeacher = await ctx.model.Student.findAll({
                    attributes: ['name'],
                    where: {
                        id : JSON.parse(item.dataValues.teacher_id)
                    }
                })
                item.dataValues.teacherArr = findTeacher
            })
            const teacher = await ctx.model.Teacher.findOne({})
            if (childrenAll && teacher) {
                return Object.assign(SUCCESS,{
                    msg: '',
                    data: childrenAll,
                })
            }

        } catch (error) {
            ctx.status = 500
            throw (error)
        }
    }
    /**
     * @param {CourseChildrenAll}  
     * 获取指定总课程id下的类课程
     */
    async CourseClassAll(course_type_id) {
        const {
            ctx
        } = this
        try {
            const ClassAll = await ctx.model.CourseClass.findAll({
                where: {
                    course_type_id: course_type_id,
                },
                order: [
                    ['id', 'DESC'],
                ],
            })
            if (ClassAll) {
                return Object.assign(SUCCESS, {
                    msg: '',
                    data: ClassAll
                })
            }
        } catch (error) {
            ctx.status = 500
            throw (error)
        }
    }
    /**
     * @param {getCourseFindChildAll}
     * 获取指定总课程id下的所有子课程
     */
    async getCourseFindChildAll(course_type_id) {
        const {
            ctx
        } = this
        try {
            
            const ChildAll = await ctx.model.Course.findAll({
                where: {
                    course_type_id: course_type_id,
                },
                attributes: ['id','title','banner', 'learn_number','teacher_id','school'],
                order: [
                    ['id', 'DESC'],
                ],
            })

            ChildAll.map(async (item, index) => {
                const teacherId = item.dataValues.teacher_id
                const teacher = await ctx.model.Student.findAll({
                    attributes: ['name'],
                    where: {
                        id: JSON.parse(teacherId)
                    }
                })
                item.dataValues.teacherArr = teacher
            })

            const findteacher = await ctx.model.Teacher.findOne()
            if (ChildAll && findteacher) {
                return Object.assign(SUCCESS, {
                    msg: '',
                    data: ChildAll
                })
            }
        } catch (error) {
            ctx.status = 500
            throw (error)
        }
    }
    
}

module.exports = CourseAllService
