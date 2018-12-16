'use strict';

const Controller = require('egg').Controller;
const path = require('path')
const fs = require('fs')
const moment = require('moment')
const {
    SUCCESS,
    ERROR,
} = require('../util/util')

class CourseController extends Controller {
    /**
     * 写入子课程
     */
    async setCourse() {
        const {
            ctx, service
        } = this
        /**
         * title子课程名
         * avata 头像 （需要上传）
         * description简介
         * claim学习要求
         * examgear考试安排
         * course_type_id 总课程id
         * course_class_id 类课程id
         * teacher_id 对应的创建此课程的老师id
         * 
         */
        console.log('====================================');
        console.log(ctx.query);
        console.log(ctx.request.body);
        console.log('====================================');
        const {
            title, description, school, claim, examgear, course_class_id, course_type_id, teacher_id,
        } = ctx.query
        const course = {
            title, 
            school,
            description,
            claim,  //学习要求
            examgear, // 考试安排
            course_class_id: Number(course_class_id),
            course_type_id: Number(course_type_id),
            teacher_id,
        }
        ctx.body = await service.course.setCourse(course)
    }
    /**
     * 写入指定子课程id的公告
     */
    async setCourseNotice() {
        const {
            ctx, service
        } = this
        ctx.body = 1
        // 子课程id
        // 评论者id id &&  评论内容 && 对应的子课程id
        const title = ctx.query.title || ctx.require.body.title
        const content = ctx.query.content || ctx.require.body.content
        const course_child_id = ctx.query.course_child_id || ctx.require.body.course_child_id
        const noticeObj = {
            title,
            content,
            course_child_id: Number(course_child_id),
        }
        
        const findCourseNotice = await service.course.setCourseNotice(noticeObj)
        ctx.body = findCourseNotice
    }
    /**
     * 写入指定子课程id的课件
     */
    async setCourseWare() {
        const { ctx, service } = this
        const createRule = {
            // course_child_id: { type: 'number' },
        }

        
        // 校验参数
        ctx.validate(createRule);

        const course_child_id = ctx.request.body.course_child_id || ctx.query.course_child_id
        const courseware_obj = ctx.request.body.courseware || ctx.query.courseware
        
        ctx.body = await service.course.setCourseWare(Number(course_child_id), courseware_obj)

        // // 子课程id
        // const course_child_id = ctx.query.course_child_id
        // const courseware_obj = ctx.query.courseware_obj

        // const findCourseCourseware = await service.course.setCourseWare(course_child_id, courseware_obj)
        // ctx.body = findCourseCourseware
    }
    /**
     *  获取所有的子课程
     */
    async getAllCourse() {
        const {
            ctx, service
        } = this
        ctx.body = await service.course.getAllCourse()
    }
    /**
     *  指定获取的课程  按id查询
     * @param {id} 课程的id
     */
    async getOneCourse() {
        const {
            ctx, service,
        } = this

        const course_child_id = ctx.query.course_child_id || ctx.request.body.course_child_id
        const token = ctx.query.token || ctx.request.body.token
        ctx.body = await service.course.getOneCourse(course_child_id, token)
    }
    /**
     * {写入子课程评论}
     *  {commentObj} 子课程对象
     */
    async setCourseComment() {
        const {
            ctx, service,
        } = this
        // 评论者id id &&  评论内容 && 对应的子课程id
        const comment_id = ctx.query.comment_id || ctx.require.body.comment_id
        const content = ctx.query.content || ctx.require.body.content
        const course_child_id = ctx.query.course_child_id || ctx.require.body.course_child_id

        const commentObj = {
            comment_id: Number(comment_id),
            content,
            course_child_id,
        }
        ctx.body = await service.course.setCourseComment(commentObj)
    }
    /**
     * {student学习指定的课程}
     * {student_id} 学习此课程的学生id  push 进去数组
     * {course_id} 此课程的id
     */
    async setLearnCourse() {
        const {
            ctx, service
        } = this

        const token = ctx.query.token || ctx.request.body.token
        const course_child_id = ctx.query.course_child_id || ctx.request.body.course_child_id
        const LearnObj = {
            token: token,
            course_child_id: Number(course_child_id),
        }
        ctx.body = await service.course.setLearnCourse(LearnObj)
    }
    /**
      * 获取我的课程
     */
    async getMyLearnCourse() {
        const {
            ctx, service
        } = this
        // token 和 username
        const token = ctx.query.token || ctx.request.body.token
        ctx.body = await service.course.getMyLearnCourse(token)
    }
    /**
     * 获取热门课程
     */
    async gethHeatCourseChild() {
        const {
            ctx, service
        } = this
        ctx.body = await service.course.gethHeatCourseChild()
    }
    /**
     * @param {关键字搜索}   * 搜索（按课程名 || 学校）
     */
    async keywordSearch() {
        const { ctx, app } = this
        try {
            const Op = app.Sequelize.Op;
            const keyword = ctx.request.body.keyword || ctx.query.keyword
            const search = await ctx.model.Course.findAndCountAll({
                where: {
                    [Op.or]: [
                        { title: { $like: '%' + keyword + '%' } },
                        { school: { $like: '%' + keyword + '%' } },
                    ]
                },
                attributes: ['title', 'id', 'banner', 'learn_number', 'school','teacher_id'],
            })

            search.rows.map( async (result) => {
                result.dataValues.teacherArr = []
                const teacherArr = result.dataValues.teacher_id
                const findTeacher = await ctx.model.Student.findAll({
                    attributes: ['name','avatar'],
                    where: {
                        id: JSON.parse(teacherArr),
                    }
                })
                findTeacher.forEach(item => {
                    result.dataValues.teacherArr.push(item.dataValues)
                })
            })

            const teacher = await ctx.model.Student.findOne()
            
            if (search && teacher) {
                ctx.body = Object.assign(SUCCESS, {
                    data: search,
                })
            } else {
                ctx.body = Object.assign(ERROR, {
                    msg: '',
                    data: '',
                })
            }
        } catch (error) {
            throw (error)
            this.ctx.status = 500
        }
    }
    // 结束子课程
    async endCourseChild() {
        const {
            ctx, service
        } = this
        const id = ctx.request.body.id || ctx.query.id
        ctx.body = await service.course.endCourseChild(Number(id))
    }
}

module.exports = CourseController;
