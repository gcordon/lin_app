const Controller = require('egg').Controller
const moment = require('moment')

class moyunController extends Controller {
    /**
     * @feature 获取蓝墨云设置
     */
    async getMaterial() {
        const {
            ctx, service
        } = this

        const course_child_id = ctx.request.body.course_child_id || ctx.query.course_child_id
        const getMaterial = await service.moyun.getMaterial(course_child_id)
        ctx.body = getMaterial
    }
    // 退出班课
    async outCourse() {
        const {
            ctx, service
        } = this
        // 学生token
        const token = ctx.request.body.token || ctx.query.token
        // 子课程id
        const course_child_id = ctx.request.body.course_child_id || ctx.query.course_child_id

        const outCourse = await service.moyun.outCourse(token, course_child_id) 
        ctx.body = outCourse
    }
    // 获取班课消息
    async getMessage() {
        const {
            ctx, service
        } = this
        const course_child_id = ctx.request.body.course_child_id || ctx.query.course_child_id
        const getMessage = await service.moyun.getMessage(course_child_id)
        ctx.body = getMessage
    }
    // 获取班课成员
    async getMember() {
        const {
            ctx, service
        } = this
        const course_child_id = ctx.request.body.course_child_id || ctx.query.course_child_id
        const getMember = await service.moyun.getMember(course_child_id)
        ctx.body = getMember
    }
    // 获取资源
    async getCourseWare() {
        const {
            ctx, service
        } = this
        const course_child_id = ctx.request.body.course_child_id || ctx.query.course_child_id
        const getCourseWare = await service.moyun.getCourseWare(course_child_id)
        ctx.body = getCourseWare
    }
    ///////////////*******************查询对应的子课程id和token身份 (1学生2老师)************* */
    async Checkdecide() {
        const {
            ctx, service
        } = this
        const course_child_id = ctx.request.body.course_child_id || ctx.query.course_child_id
        const token = ctx.request.body.token || ctx.query.token
        const Checkdecide = await service.moyun.Checkdecide(course_child_id, token)
        ctx.body = Checkdecide
    }
    ///////////////*******************查询对应的子课程id和token身份 (1学生2老师)************* */
    // 编辑班课
    async editCourse() {
        const {
            ctx, service
        } = this

        // 编辑学习要求、考试安排
        const claim = ctx.request.body.claim || ctx.query.claim
        const examgear = ctx.request.body.examgear || ctx.query.examgear
        // 学校、班课名
        const school = ctx.request.body.school || ctx.query.school 
        const title = ctx.request.body.title || ctx.query.title 
        // 简介
        const description = ctx.request.body.description || ctx.query.description 
        

        // 子课程id
        const course_child_id = ctx.request.body.course_child_id || ctx.query.course_child_id
        const id = ctx.request.body.id || ctx.query.id
        const editObj = {
            school,
            title,
            claim,
            examgear,
            description
        }
        try {
            // 有上传图片的
            const editCourse = await service.moyun.editCourse(editObj, course_child_id)
            ctx.body = editCourse
        } catch (error) {
            // 没有上传图片的
            const NoFileAvatareditCourse = await service.moyun.NoFileAvatareditCourse(editObj, course_child_id || id)
            ctx.body = NoFileAvatareditCourse
        }
    }
/*******************************************************其他课件********************************************* */
    // 上传其他课件 (图片、连接、视频)
    async setOtherCoursewareImage() {
        const {
            ctx, service
        } = this
        const course_child_id = ctx.request.body.course_child_id || ctx.query.course_child_id || ''

        const name = ctx.request.body.name || ctx.query.name || ''
        const type = ctx.request.body.type || ctx.query.type || ''
        const date = moment().format('YYYY-MM-DD HH:mm:ss')
        console.log(date)
        
        switch (type) {
            case 'image':
                const othercoursewareObj = {
                    course_child_id: Number(course_child_id),
                    name,
                    type,
                    date,
                }
                const setOtherCoursewareImage = await service.moyun.setOtherCoursewareImage(othercoursewareObj)
                ctx.body = setOtherCoursewareImage
                break;

            case 'video':
                const videoObj = {
                    course_child_id: Number(course_child_id),
                    name,
                    type,
                    date,
                }
                const setOtherCoursewareVideo = await service.moyun.setOtherCoursewareVideo(videoObj)
                ctx.body = setOtherCoursewareVideo
                break;

            case 'url':
                const src = ctx.request.body.src || ctx.query.src 
                const setOtherCoursewareUrl = await service.moyun.setOtherCoursewareUrl({
                    course_child_id: Number(course_child_id),
                    name,
                    type,
                    date,
                    src,
                })
                ctx.body = setOtherCoursewareUrl
                break;

            default:
                break;
        }
        
    }
    // 获取其他课件
    async getOtherCourseware() {
        const {
            ctx, service
        } = this
        const course_child_id = ctx.request.body.course_child_id || ctx.query.course_child_id
       
        const getOtherCourseware = await service.moyun.getOtherCourseware(course_child_id)
        ctx.body = getOtherCourseware
    }

    //  踢出指定子课程id下的指定成员id
    async delMember() {
        const {
            ctx, service
        } = this
        // 子课程id
        // 学生的id
        const course_child_id = ctx.request.body.course_child_id || ctx.query.course_child_id
        const id = ctx.request.body.id || ctx.query.id
        const destroyObj = {
            course_child_id: Number(course_child_id),
            student_id: Number(id)
        }
        const delMember = await service.moyun.delMember(destroyObj)
        ctx.body = delMember
    }

    //  删除指定的蓝墨云课件（总 || 类 || 子） 
    async delCourseware() {
        const { ctx,service } = this
        const type = ctx.request.body.type || ctx.query.type // 删除的类型  （总 || 类 || 子） (courseware_total | courseware_class | courseware_child)
        const id = ctx.request.body.id || ctx.query.id // 对应的课件id
        const course_child_id = ctx.request.body.course_child_id || ctx.query.course_child_id // 对应的子课程id
        const delCourseware = await service.moyun.delCourseware(type, Number(id), Number(course_child_id))
        ctx.body = delCourseware
    }

    // 删除指定的其他课件id
    async delOtherCourseware() {
        const { ctx, service } = this
        const id = ctx.request.body.id || ctx.query.id // 对应的其他课件id
        const course_child_id = ctx.request.body.course_child_id || ctx.query.course_child_id // 对应的子课程id
        
        const delOtherCourseware = await service.moyun.delOtherCourseware( Number(id), Number(course_child_id))
        ctx.body = delOtherCourseware
    }
    async SetMemberGroup() {
        const { ctx, service } = this
        ctx.body = 'SetMemberGroup'
    }
}

module.exports = moyunController