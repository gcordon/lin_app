'use strict';

const Service = require('egg').Service
const {
    SUCCESS,
    ERROR,
} = require('../util/util')
const moment = require('moment')
const validator = require('validator')
const path = require('path')
const fs = require('fs')

class CourseService extends Service {
    /**
     * 
     * @param {课程发送的对象，存放写入课程需要的数据} course 
     */
    // 创建课程
    async setCourse(course) {
        const {
            ctx
        } = this
        try {

                /**************** start 用户的token 转换成 id *******************/
                let studentArr = course.teacher_id
                
                const student = await ctx.model.Student.findAll({
                    where: {
                        token: JSON.parse(studentArr)
                    }
                })
                course.teacher_id = null // 清空原来的teacher_id 因为只是token，需要再次到数据库帅选出id


                let studentIdArr = []
                student.forEach(item => {
                    studentIdArr.push(item.dataValues.id)
                })
                course.teacher_id = JSON.stringify(studentIdArr)
                console.log('=============6666=========', course.teacher_id, '=============6666=========', )

                // 写入到我的课程当中 


                // 写入到我的课程当中 
                // return
                /**************** end 用户的token 转换成 id *******************/

                
            
            /**************start 文件上传相关*************** */
                    const stream = await ctx.getFileStream()       // 上传的文件流
                    const suffix = path.extname(stream.filename)   // 获取后缀
                    const appPath = path.resolve(__dirname, '../') // 获取到app目录
                    const avatarPath = path.resolve(appPath + '/public/img/avatar/') // 课程头像地址 "filePath": "E:\\eggjs\\egg\\egg-example\\app\\public\\img\\avatar"

                    // 以当前时间戳命名
                    let currentDate = moment().format('YYYY-MM-DD') + '_' + Date.now()
                    const imagename = '/' + path.basename(currentDate + suffix)

                    const filePath = path.resolve(avatarPath + imagename) //需要上传文件的地址

                    // /**********开始本地上传文件************* */
                    const ws = fs.createWriteStream(path.resolve(avatarPath + imagename))
                    let text = '本地上传图片文件！'
                    if (stream.pipe(ws)) {
                        text = '本地图片上传成功！'
                    }
                    // 写入数据库时保存的课程图片地址
                    let sqlAvatarPath = 'public/img/avatar' + imagename
                    course.banner = sqlAvatarPath
            /*****************end 文件上传相关****************** */

            
            const findCourse = await ctx.model.Course.findOne({
                where: {
                    title: course.title
                }
            })
            if (findCourse) {
                return Object.assign(ERROR, {
                    data: '',
                    msg: '子课程已存在！',
                }) 
            }
            
            let courseArr = []
            for (const e in course) {
                let el = course[e]
                courseArr.push(el)
            }
            const isCoure = courseArr.some(e => {
                return e === ''
            })

            if (isCoure) {
                return Object.assign(ERROR, {
                    data: '',
                    msg: '课程信息不能为空，请重新输入！',
                })
            }
            /*************************
             *      这里的 【courseware_id，course_class_id，teacher_id】 数据表已经关联会出错，注意
             *      需要重新做
             * *********************** */
            // 写入数据库
            const createCoure = await ctx.model.Course.create(course)
            if (createCoure) {
                return Object.assign(SUCCESS, {
                    msg: '写入课程成功！',
                    data: createCoure,
                })
            } else {
                return Object.assign(ERROR, {
                    msg: '写入课程失败！',
                    data: createCoure,
                })
            }
        } catch (error) {
            ctx.status = 500
            throw (error)
        }
    }
    /**
        * @param {setCourseNotice} {写入指定子课程id的公告}
        * @param {子课程id} course_child_id
        * @param {公告对象} notice_obj
        */
    async setCourseNotice(noticeObj) {
        const {
            ctx,
        } = this
        try {
            const notice = await ctx.model.Notice.create(noticeObj)
            if (notice) {
                return Object.assign(SUCCESS, {
                    msg: '',
                    data: notice
                })
            }
        } catch (error) {
            ctx.status = 500
            throw (error)
        }
    }   

    /**
       * @param {setCourseNotice} {写入指定子课程id的课件}
       * @param {子课程id} course_child_id
        * @param {课件对象} courseware_obj
       */
    async setCourseWare(course_child_id, courseware_obj) {
        const {
            ctx,
        } = this
        try {
            JSON.parse(courseware_obj).map(async (item, index) => {
                
                // 写入总课件
                let { title, sequence, date } = item
                const bulkCreateArr = [
                    { title, sequence, course_child_id, date }
                ]
                const courseware = await ctx.model.Courseware.bulkCreate(bulkCreateArr)
                courseware.forEach(async (re) => {
                    const id = re.dataValues.id
                    if (item['coursewareClassArr']) {
                        item['coursewareClassArr'].map(async (result, index) => {
                            // 类课件中的 设置 上面 数据库 创建的新获取的 id
                            result['courseware_id'] = id
                            let { title, sequence, date, courseware_id } = result
                            // 写入类课件
                            let bulkCreateArr = [
                                { title, sequence, date, courseware_id, course_child_id }
                            ]
                            const CoursewareClass = await ctx.model.CoursewareClass.bulkCreate(bulkCreateArr)
                            /**********************写入子课件******** */
                            CoursewareClass.forEach(async (item)=> {
                                const coursewareClass_id = item.dataValues.id
                                if (result['coursewareChildArr']) {
                                    result['coursewareChildArr'].forEach(async (item) => {
                                        // console.log('====================')
                                        // console.log(coursewareClass_id)
                                        // console.log('====================')

                                        item['courseware_id'] = id
                                        item['courseware_class_id'] = coursewareClass_id

                                        let { title, type, sequence, src, courseware_id, courseware_class_id, date } = item
                                        let arrs = [
                                            { title, type, sequence, src, courseware_id, courseware_class_id, course_child_id, date },
                                        ]

                                        const coursewareChild = await ctx.model.CoursewareChild.bulkCreate(arrs)

                                    })
                                }
                            })
                            /**********************写入子课件******** */
                        })
                    }
                })
            })
            const courseWare = await ctx.model.Courseware.findAll({})
            const courseClass = await ctx.model.Courseware.findAll({})
            const courseChild = await ctx.model.Courseware.findAll({})
            if (courseWare && courseClass && courseChild) {
                return await Object.assign(SUCCESS, {
                    dat: '',
                    // data: JSON.parse(courseware_obj),
                    msg: `写入指定子课程id：${course_child_id} 课件成功`
                })
            } else {
                return await Object.assign(ERROR, {
                    dat: '',
                    // data: JSON.parse(courseware_obj),
                    msg: `写入指定子课程id：${course_child_id} 课件失败`
                })
            }

        } catch (error) {
            ctx.status = 500
            throw (error)
        }
    }   

    
    /**
     * 
     * @param {获取所有的子课程} getAllCourse
     */
    async getAllCourse() {
        const {
            ctx
        } = this
        try {
            const AllCourse = await ctx.model.Course.findAll({
                attributes: ['id','title','banner','learn_number']
            })
            
            return Object.assign(SUCCESS, {
                msg: '',
                data: AllCourse
            })
        } catch (error) {
            ctx.status = 500
            throw (error)
        }
    }
    /**
     * 
     * @param {获取指定子课程id} getOneCourse
     */
    async getOneCourse(course_child_id, token=null) {
        const {
            ctx
        } = this
        try {
            
            // 课程
            const courseOne = await ctx.model.Course.findOne({
                where: { id: course_child_id }
            })
            let courseOneData = courseOne.dataValues

            // 查询老师 => Teacher
            const findTeacher = await ctx.model.Student.findAll({
                attributes: ['id','name','avatar'],
                where: {
                    id: JSON.parse(courseOneData.teacher_id)
                }
            })
            courseOneData.teacherArr = findTeacher

            if (token == null) {
                return Object.assign(SUCCESS, {
                    data: courseOne
                })
            }
            /**
             * @param{token} 到Havelearned查询是否学习过此课程了
             */
                const st = await ctx.model.Student.findOne({
                    where: {
                        token: token
                    }
                })
                
                const havelearned = await ctx.model.Havelearned.findOne({
                    where: {
                        course_child_id: Number(course_child_id),
                        student_id: Number(st.dataValues.id),
                    }
                })
            if (!courseOne) {
                return Object.assign(SUCCESS, {
                    msg: '找不到课程',
                })
            }
            
            // 查询学习过的学生 => Havelearned
            const findStudent = await ctx.model.Havelearned.findAll({
                where: {
                    course_child_id: courseOneData.id
                }
            })
            // 查询学生 => Student
            let studentArr = []
            findStudent.forEach(async element => {
                studentArr.push(element.dataValues.student_id)
            });
            let student = await ctx.model.Student.findAll({
                attributes: ['id', 'name'],
                where: {
                    id: studentArr
                }
            })
            courseOneData.studentArr = student

            // 查询公共
            let notice = await ctx.model.Notice.findAll({
                where: {
                    course_child_id: courseOneData.id
                }
            })
            courseOneData.noticeArr = notice
            
            // 查询评论
            let comment = await ctx.model.Comment.findAll({
                where: {
                    course_child_id: courseOneData.id
                }
            })
            courseOneData.commentArr = comment
            courseOneData.checkLearn = havelearned ? 0 : 1
            return Object.assign(SUCCESS,{
                msg: '',
                data: courseOne,
            })
        } catch (error) {
            ctx.status = 500
            throw (error)
        }
    }
    /**
     *  * {写入子课程评论}
     *  {commentObj} 子课程对象
     * @argument {course_id} 这个是此子课程的id
     */
    async setCourseComment(commentObj) {
        const {
            ctx
        } = this
        try {
            let { comment_id, content, course_child_id} = commentObj
            const comment = await ctx.model.Comment.create({
                comment_id,
                content,
                course_child_id,
            })
            if (comment) {
                return Object.assign(SUCCESS, {
                    msg: '评论成功！',
                    data: comment
                })
            }


        } catch (error) {
            ctx.status = 500
            throw (error)
        }
    }
    /**
     * @param {*} LearnObj 是大的对象 =》 包含如下俩个
     * @param {*} token 学生token
     * @param {*} course_child_id 子课程id
     * @param {} 学习指定的课程
     * @param {对应的子课程id}
     */
    async setLearnCourse(LearnObj) {
        const {
            ctx,
        } = this
        try {
            const {
                token, course_child_id
            } = LearnObj
            // 查询指定token学生的id
            const findToken = await ctx.model.Student.findOne({
                where: {
                    token: token
                }
            })
            const student_id = findToken.dataValues.id

            const findStudent = await ctx.model.Havelearned.findOne({
                where: {
                    student_id,
                    course_child_id,
                }
            })
            if (findStudent) {
                return Object.assign(ERROR, {
                    msg: '此学生已经学习过此课程了！',
                    data: ''
                })
            }
            const learnCourse = await ctx.model.Havelearned.create({
                student_id,
                course_child_id,
            })
            const findCourse = await ctx.model.Course.findOne({
                where: {
                    id: Number(course_child_id)
                }
            })
            // 学习人数累加
            const inc = await findCourse.increment('learn_number')
            if (learnCourse) {
                return Object.assign(SUCCESS, {
                    data: learnCourse
                })
            }
        } catch (error) {
            ctx.status = 500
            throw (error)
        }
    }
     /**
      * 获取我的课程
      * @argument token 学生或老师的token
     */
    async getMyLearnCourse(token) {
        const {
            ctx,
        } = this
        try {
            // 查询student  token
            const student = await ctx.model.Student.findOne({
                where : {
                    token: token,
                }
            })

            const havelearned = await ctx.model.Havelearned.findAll({
                where: {
                    student_id: student.dataValues.id
                }
            })

            
            // 这里是保存课程的每个id
            let havelearnedArr = []

            // start 如果此人是老师的话，自己的课程也应该在我的课程当中
            const st = await ctx.model.Course.findAll({})
            for (let i of st) {
                if (JSON.parse(i.teacher_id).includes(student.id)) {
                    havelearnedArr.push(i.id)
                }
            }
            // end 如果此人是老师的话，自己的课程也应该在我的课程当中

            havelearned.forEach(element => {
                havelearnedArr.push(element.dataValues.course_child_id)
            });

            const course = await ctx.model.Course.findAll({
                attributes: ['id','title','banner','teacher_id'],
                where: {
                    id: havelearnedArr
                }
            })

            // 课程的老师获取
            course.forEach(async (item, index) => {
                const findTeacher = await ctx.model.Student.findAll({
                    attributes: ['name'],
                    where: {
                        id: JSON.parse(item.dataValues.teacher_id)
                    }
                })
                item.dataValues.teacherArr = findTeacher
            })
            const teacher = await ctx.model.Teacher.findOne({})
            if (course && teacher) {
                return Object.assign(SUCCESS, {
                    msg: '',
                    data: course
                })
            }
        } catch (error) {
            ctx.status = 500
            throw (error)
        }
    }
    /**
     * 获取热门课程
     */
    async gethHeatCourseChild() {
        const {
            ctx
        } = this
        const findHeatCourse = await ctx.model.Course.findAll({
            attributes: ['id','title','banner'],
            order: [
                ['learn_number', 'DESC'],
                // ['id', 'ASC'],
            ]
        })
        return Object.assign(SUCCESS, {
            msg: '',
            data: findHeatCourse,
        })
    }
    // 结束子课程
    async endCourseChild(id) {
        const {
            ctx
        } = this
        const endCourseChild = await ctx.model.Course.update({
            switch: 2, // 2是结束子课程
        },{
            where: {id,}
        })
        if (endCourseChild) {
            return Object.assign(SUCCESS, {
                msg: `结束id: ${id}子课程成功！`,
                data: ''
            })
        } else {
            return Object.assign(SUCCESS, {
                msg: `结束id: ${id}子课程失败！`,
                data: ''
            })
        }
    }
}

module.exports = CourseService
