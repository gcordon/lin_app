const Service = require('egg').Service
const {
    SUCCESS,
    ERROR,
} = require('../util/util')
const path = require('path')
const fs = require('fs')
const moment = require('moment')

class moyunService extends Service {
    // 获取班课信息
    async getMaterial(course_child_id){
        try {
            const getMaterial = await this.ctx.model.Course.findOne({
                // id 标题 导航图片 老师 学习要求 考试安排
                attributes: ['id', 'title', 'banner', 'description', 'claim', 'examgear', 'school','teacher_id'],
                where: { id: course_child_id, }
            })

            const teacher_id = getMaterial.dataValues.teacher_id
            
            const findTeacher = await this.ctx.model.Student.findAll({
                attributes: ['name'],
                where: { id: JSON.parse(teacher_id)}
            })

            getMaterial.dataValues.teacherArr = findTeacher
            
            if (getMaterial) {
                return Object.assign(SUCCESS, {
                    msg: '',
                    data: getMaterial
                })
            }
        } catch (error) {
            this.ctx.status = 500
            throw (error)
        }
    }
    // 退出班课
    async outCourse(token, course_child_id) {
        const {
            ctx, 
        } = this

        try {
            const student = await ctx.model.Student.findOne({ where: { token, } })
            const id = Number(student.dataValues.id)

            const havelearned = await ctx.model.Havelearned.destroy({ where: { student_id: id, course_child_id: Number(course_child_id), } })
            if (havelearned) {
                return Object.assign(SUCCESS, {
                    msg: `退出班课id${course_child_id}成功!`,
                    data: havelearned
                })
            } else {
                return Object.assign(ERROR, {
                    msg: `退出班课id${course_child_id}失败!`,
                    data: ''
                })
            }
        } catch (error) {
            throw (error)
            this.ctx.status = 500
        }
    }

    // 获取班课消息
    async getMessage(course_child_id) {
        const {
            ctx, 
        } = this
        const getMessage = await ctx.model.Message.findAll({ where: { course_child_id: Number(course_child_id) } })
        return Object.assign(SUCCESS, {
            data: getMessage,
        })
    }
    // 获取班课成员
    async getMember(course_child_id) {
        const {
            ctx, 
        } = this
        const havelearned = await ctx.model.Havelearned.findAll({ 
            attributes: ['student_id'],
            where: { course_child_id: Number(course_child_id)  } 
        })

        let studetArr = []
        havelearned.forEach((item, index) => {
            studetArr.push(item.dataValues.student_id)
        })

        const course = await ctx.model.Course.findOne({where:{id:Number(course_child_id)}})
        
        const notIn = JSON.parse(course.dataValues.teacher_id)
        const member = await ctx.model.Student.findAll({ 
            attributes: ['id','username','name','avatar'],
            where: { 
                id: studetArr,
                id: {
                    '$notIn': notIn,
                    '$in': studetArr,
                }
            },
        })
        return Object.assign(SUCCESS, {
            msg: '',
            member_data: member
        })
    }
    // 获取资源
    async getCourseWare(course_child_id) {
        const {
            ctx, 
        } = this
        // 总课件
        const courseware = await ctx.model.Courseware.findAll({ 
            attributes: ['id', 'title'],
            where: { 
                course_child_id: Number(course_child_id) 
            },  
            order: [
                ['sequence', 'asc']
            ],
        })
        let courseClassArr = ['courseClassArr']
        courseware.forEach(async (item, index) => {
            item.dataValues.type = 'courseware_total'
            item.dataValues.coursewareClassArr = []
            
            const courseware_id = Number(item.dataValues.id)
            // 类课程
            const courseware_class = await ctx.model.CoursewareClass.findAll({ 
                attributes: ['id', 'title'],
                where: { courseware_id, },
                order: [
                    ['sequence', 'asc']
                ], 
            })

            courseware_class.forEach(async (item2,index2) => {
                item2.dataValues.type = 'courseware_class'

                await courseClassArr.push(item2)

                item2.dataValues.coursewareChildArr = []
                
                item.dataValues.coursewareClassArr.push(item2.dataValues)

                const courseware_class_id = Number(item2.dataValues.id)
                // 子课程
                const courseware_child = await ctx.model.CoursewareChild.findAll({
                    attributes: ['id', 'title','type','src'],
                    where: { courseware_id, courseware_class_id, },
                    order: [
                        ['sequence','asc']
                    ],
                })

                /**************这里push不了************/
                // @param{bug}
                courseware_child.forEach(async (item3, index3) => {
                    item3.dataValues.type = 'courseware_child'
                    item2.dataValues.coursewareChildArr.push(item3.dataValues)
                })
                console.log(courseware_class_id)
                /**************这里push不了************/
                // @param{bug}】
            })
        })

        
        const teacher = await ctx.model.Courseware.findAll({})
        const cousewareClass = await ctx.model.CoursewareClass.findAll({})
        const cousewareChild = await ctx.model.CoursewareChild.findAll({})
        
        if (teacher && cousewareClass && cousewareChild) {
            return Object.assign(SUCCESS, {
                msg: '',
                data: {
                    // courseClassArr,
                    courseware,
                }
            })
        }
    }

    ///////////////*******************查询对应的子课程id和token身份 (1学生2老师)************* */
    async Checkdecide(course_child_id, token) {
        const {
            ctx,
        } = this
        const course = await ctx.model.Course.findOne({
            where: {
                id: Number(course_child_id)
            }
        })
        // 课程对应的学生
        const course_id = JSON.parse(course.dataValues.teacher_id) // array [1,2]形式

        const student = await ctx.model.Student.findOne({ where: { token, } })
        
        let Identity = 1
        if (student) {
            const student_id = Number(student.dataValues.id)
            if (course_id.includes(student_id)) {
                Identity = 2
            }
        }

        return Object.assign(SUCCESS, {
            msg: '',
            data: {
                Identity,
            }
        })
    }
    ///////////////*******************查询对应的子课程id和token身份 (1学生2老师)************* */
    
    // 编辑班课
    async editCourse(editObj, course_child_id) {
        const {
            ctx, 
        } = this

        try {
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
            editObj.banner = sqlAvatarPath
            /*****************end 文件上传相关****************** */
            const updateCourse = await ctx.model.Course.update(editObj, {
                    where: {
                        id: Number(course_child_id)
                    }
                })
            if (updateCourse) {
                return Object.assign(SUCCESS, {
                    msg: `编辑班课id: ${Number(course_child_id)}成功！`,
                    data: updateCourse,
                })
            } 
        } catch (error) {
            throw (error)
            ctx.status = 500
        }
    }
    // 编辑班课 (没有上传图片的)
    async NoFileAvatareditCourse(editObj, course_child_id) {
        const {
            ctx,
        } = this

        try {
            /*****************end 文件上传相关****************** */
            const update = await ctx.model.Course.update(editObj, {
                where: {
                    id: Number(course_child_id)
                }
            })
            if (update) {
                return Object.assign(ERROR, {
                    msg: `编辑班课id: ${Number(course_child_id)}成功！`,
                    data: update,
                })
            }
        } catch (error) {
            throw (error)
            ctx.status = 500
        }
    }
/*******************************************************其他课件********************************************* */
    // 写入其他课件 图片
    async setOtherCoursewareImage(editObj) {
        const { ctx } = this
        try {
            /**************start 文件上传相关*************** */
            const stream = await ctx.getFileStream()       // 上传的文件流
            const suffix = path.extname(stream.filename)   // 获取后缀
            const appPath = path.resolve(__dirname, '../') // 获取到app目录
            // 这里应该使用的是app.config 拿出相对路径才是对的
            const avatarPath = path.resolve(appPath + '/public/img/othercourseware/image') // 课程头像地址 "filePath": "E:\\eggjs\\egg\\egg-example\\app\\public\\img\\othercourseware"

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
            let sqlAvatarPath = 'public/img/othercourseware/image' + imagename
            editObj.src = sqlAvatarPath
            /*****************end 文件上传相关****************** */
            
            // 写入数据库
            const createOtherCourseWare = await ctx.model.Othercourseware.create(editObj)
            if (createOtherCourseWare) {
                return Object.assign(SUCCESS, {
                    msg: `${text} 写入其他课件 =》 图片成功 `,
                    data: ''
                })
            }
            return Object.assign(ERROR, {
                msg: `${text}  写入其他课件 =》 图片失败 `,
                data: ''
            })
        } catch (error) {
            throw (error)
            ctx.status = 500
        }
    }

    // 写入其他课件 url
    async setOtherCoursewareUrl(editObj) {
        const { ctx } = this
        try {
            // 写入数据库
            const createOtherCourseWare = await ctx.model.Othercourseware.create(editObj)
            if (createOtherCourseWare) {
                return Object.assign(SUCCESS, {
                    msg: `写入其他课件 =》 url成功 `,
                    data: ''
                })
            }
        } catch (error) {
            throw (error)
            ctx.status = 500
        }
    }

    // 写入其他课件 video
    async setOtherCoursewareVideo(editObj) {
        const { ctx } = this
        try {
            /**************start 文件上传相关*************** */
            const stream = await ctx.getFileStream()       // 上传的文件流
            const suffix = path.extname(stream.filename)   // 获取后缀
            const appPath = path.resolve(__dirname, '../') // 获取到app目录
            // 这里应该使用的是app.config 拿出相对路径才是对的
            const avatarPath = path.resolve(appPath + '/public/img/othercourseware/video') // 课程头像地址 "filePath": "E:\\eggjs\\egg\\egg-example\\app\\public\\img\\othercourseware"

            // 以当前时间戳命名
            let currentDate = moment().format('YYYY-MM-DD') + '_' + Date.now()
            const videoname = '/' + path.basename(currentDate + suffix)

            const filePath = path.resolve(avatarPath + videoname) //需要上传文件的地址

            // /**********开始本地上传文件************* */
            const ws = fs.createWriteStream(path.resolve(avatarPath + videoname))
            let text = '本地上传视频文件！'
            if (stream.pipe(ws)) {
                text = '本地上传视频成功！'
            }
            // 写入数据库时保存的课程图片地址
            let sqlAvatarPath = 'public/img/othercourseware/image' + videoname
            editObj.src = sqlAvatarPath
            /*****************end 文件上传相关****************** */

            // 写入数据库
            const createOtherCourseWare = await ctx.model.Othercourseware.create(editObj)
            if (createOtherCourseWare) {
                return Object.assign(SUCCESS, {
                    msg: `${text} 写入其他课件 =》 视频成功 `,
                    data: ''
                })
            }
            return Object.assign(ERROR, {
                msg: `${text}  写入其他课件 =》 视频失败 `,
                data: ''
            })
        } catch (error) {
            throw (error)
            ctx.status = 500
        }
    }
    // 获取其他课件
    async getOtherCourseware(course_child_id) {
        const { ctx } = this
        const getOtherCourseware = await ctx.model.Othercourseware.findAll({
            attributes: ['id', 'name', 'type', 'src', 'date'],
            where: {
                course_child_id: Number(course_child_id),
            }
        })
        let otherObj = {
            imageArr: [],
            urlArr: [],
            videoArr: [],
        }
        getOtherCourseware.map((item, index) => {
            const data = item.dataValues
            switch (data.type) {
                case 'image':
                    otherObj.imageArr.push(item)
                    break;
                case 'url':
                    otherObj.urlArr.push(item)
                    break;
                case 'video':
                    otherObj.videoArr.push(item)
                    break;
                default:
                    break;
            }
            delete data.type
        })
        return Object.assign(SUCCESS, {
            data: otherObj
        })
    }

    //  踢出指定子课程id下的指定成员id
    async delMember(destroyObj) {
        const {
            ctx,
        } = this
        try {
            const delMember = await ctx.model.Havelearned.destroy({ where: destroyObj })
            if (delMember) {
                return Object.assign(SUCCESS, {
                    msg: '移除班课成功',
                    // msg: `子课程id:${destroyObj.course_child_id} && 学生id${destroyObj.id}成功`
                })
            } else {
                return Object.assign(ERROR, {
                    msg: '移除班课失败',
                    // msg: `子课程id:${destroyObj.course_child_id} && 学生id${destroyObj.id}失败`
                })
            }
        } catch (error) {
            throw (error)
            ctx.status = 500
        }
    }

    /**
     * 
     * @param {*} type              类型 // 删除的类型  （总 || 类 || 子） (courseware_total | courseware_class | courseware_child)
     * @param {*} id                课件id
     * @param {*} course_child_id   子课程id
     */
    async delCourseware(type, id, course_child_id) {
        const { ctx, } = this
        let del_courseware = null 
        let where = { id, course_child_id }
        
        switch (type) {
            case 'courseware_total':
                del_courseware = await ctx.model.Courseware.destroy({where: where })
                break;
            case 'courseware_class':
                del_courseware = await ctx.model.CoursewareClass.destroy({ where:where })
                break;
            case 'courseware_child':
                del_courseware = await ctx.model.CoursewareChild.destroy({ where: {id,course_child_id} })
                break;
            default:
                break;
        }
        if (del_courseware) {
            return Object.assign(SUCCESS, {
                data: '',
                msg: `删除课件id:${id} 子课id:${course_child_id} 成功！`,
            })
        } else {
            return Object.assign(ERROR, {
                data: '',
                msg: `删除课件id:${id} 子课id:${course_child_id} 失败！`,
            })
        }
    }

    // 删除指定的指定其他课件id
    /**
     * 
     * @param {*} id                其他课件id
     * @param {*} course_child_id   子课程id
     */
    async delOtherCourseware(id, course_child_id) {
        const { ctx, } = this
        let where = { id, course_child_id }
        let del_othercourseware = await ctx.model.Othercourseware.destroy({ where: where })

        if (del_othercourseware) {
            return Object.assign(SUCCESS, {
                data: '',
                msg: `删除其他课件 id:${id} 子课id:${course_child_id} 成功！`,
            })
        } else {
            return Object.assign(ERROR, {
                data: '',
                msg: `删除其他课件 id:${id} 子课id:${course_child_id} 失败！`,
            })
        }
    }    
}
module.exports = moyunService