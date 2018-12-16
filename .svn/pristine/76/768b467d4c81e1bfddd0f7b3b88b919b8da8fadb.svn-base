
const Service = require('egg').Service
const { 
    SUCCESS,
    ERROR,
    nowDate,
} = require('../util/util')
const moment = require('moment')


class TaskService extends Service {
    /**
     * @param {} 创建小组任务
     * @argument {course_child_id}  对应的子课程id
     * @argument {TaskObj}  课程标题、详情、分数
     */
    async setTask(course_child_id, TaskObj) {
        const {
            ctx,
        } = this

        if (!course_child_id)  {
            return Object.assign(ERROR, { msg: 'setTask => course_child_id 没有传递参数' })
        } else {
            
            const findTask = await ctx.model.Task.findOne({
                where: {
                    title: TaskObj.title,
                }
            })
            
            if (findTask) {
                return Object.assign(ERROR, {
                    msg: '此任务已存在',
                    data: ''
                })
            }
            const createTask = await ctx.model.Task.create({
                title: TaskObj.title,
                description: TaskObj.description,
                fraction: TaskObj.fraction,
                course_child_id: course_child_id,
                member_group_type_id: TaskObj.member_group_type_id,
                date: moment().format('YYYY-MM-DD HH:mm:ss')
            })
            if (createTask) {
                return Object.assign(SUCCESS, {
                    data: createTask
                })
            }
        }
    }

    /**
     * @param {} 获取指定小组任务id
     * @argument {task_id}  对应的任务的id
     */
    async getOneTask(task_id) {
        const {
            ctx
        } = this
        // 获取指定小组任务id
        const findOneTask = await ctx.model.Task.findOne({
            attributes: ['id', 'title', 'description', 'fraction', 'course_child_id', 'member_group_type_id',],
            where: {
                id: Number(task_id),
            }
        })
        // 查询对应的子课程id
        const course_child_id = findOneTask.dataValues.course_child_id
        // 父成员方案管理id
        const member_group_type_id = findOneTask.dataValues.member_group_type_id

        // 按照指定小组id，查询子课程id
        const findOneStudent = await ctx.model.Havelearned.findAll({
            where: {
                course_child_id: course_child_id,
            }
        })
        
        // 遍历学习课程 =》 找到指定子课程id =》 student_id (学生id)
        let student_id_arr = []
        findOneStudent.forEach(element => {
            student_id_arr.push(element.dataValues.student_id)
        })

        const findS = await ctx.model.Student.findAll({
            attributes: ['id','name','avatar','token'],
            where: {
                "$and": {
                    id: student_id_arr
                },
            }
        })
        findOneTask.dataValues.data = {}
        // findOneTask.dataValues.data['qita'] = findS

        // 学生评论
        var task_comment
        let arr = []
        findS.forEach(async (element, index) => {
            await arr.push(element.dataValues.token)
        });
        // 小组任务评论
        task_comment = await ctx.model.TaskComment.findAll({
            attributes: ['id', 'comment_content', 'date', 'student_token',], // 这里的id是头脑风暴评论的id （删除这条时候使用）
            where: {
                student_token: arr,
                task_id:  findOneTask.dataValues.id
            }
        })
        findS.forEach(async (element, index) => {
            task_comment.forEach(async (es, index) => {
                // 查询的学习过的课程的学生id表  =》 token 与&&与 小组任务的表 student_token 是否一致，是的话就是这个人的评论
                if (element.dataValues.token == es.dataValues.student_token) {
                    delete es.dataValues.student_token
                    delete es.dataValues.task_id
                    element.dataValues.comment = []
                    
                    element.dataValues.comment.push(es.dataValues)
                }
            })
        })
/*****************成员方案管理*********************** */
        const MemberGroupType = await ctx.model.MemberGroupType.findOne({
            where: { id: Number(member_group_type_id)}
        })
        const MemberGroupClass = await ctx.model.MemberGroupClass.findAndCountAll({
            where: { member_group_type_id: Number(MemberGroupType.dataValues.id) }
        })
        MemberGroupClass.rows.forEach(async (member) => {
            member.dataValues.childArr = []
            const child = await ctx.model.MemberGroupChild.findAll({
                where: { member_group_class_id: Number(member.dataValues.id)}
            })
            // member.dataValues.child = []
            // member.dataValues.qitaxiaozu = []
            // child.forEach(item => {           
                
            //     findS.forEach(re => {
            //         if (item.dataValues.student_id == re.dataValues.id)  {
            //             // member.dataValues.child.push(item.dataValues)
            //             member.dataValues.child.push(re.dataValues)
            //         }
            //     })
            // })
            let aArr = []
            let bArr = []
            child.forEach(async (item) => {
                const hv = await ctx.model.Havelearned.findAll({
                    attributes:['student_id'],
                    where: { 
                        course_child_id: Number(item.dataValues.course_child_id), 
                        // student_id: Number(item.dataValues.student_id) 
                    }
                })
                //  56 - 72 - 11 - 79
                console.log(item.dataValues.student_id)
                hv.forEach(it => {
                    member.dataValues.childArr.push(it.dataValues) 
                })
            })
        })
        findOneTask.dataValues.data['MemberGroupClass'] = MemberGroupClass.rows
        
/*****************成员方案管理*********************** */
        const fws = await ctx.model.TaskComment.findAll({})
        const Havelearned = await ctx.model.Havelearned.findAll({})
        if (fws && Havelearned) {
            return Object.assign(SUCCESS, {
                msg: '',
                data: findOneTask
            })
        }
    }
    /**
     * @param {setScore} 设置评分
     * @argument {student_id} 学生id
     * @argument {fraction} 分数
     * @argument {type} 类型 =》 头脑风暴或讨论等。。。。
     */
    async setScore(student_id, fraction, types ) {
        const {
            ctx,
        } = this
      
        const query = { student_id: Number(student_id)}
        const findStudentId = await ctx.model.Havelearned.findOne({
            where: query
        })

        // brainstorming
        console.log(findStudentId)
        const oldType = findStudentId.dataValues[types]
        
        let up = {}
        up[types] = types
        let typess = up[types]

        let update = {}
        update[typess] = Number(oldType) + Number(fraction)

        const score = await ctx.model.Havelearned.update(update, {
            where: {
                student_id: Number(student_id)
            }
        })
        
        return Object.assign(SUCCESS, {
            msg: '',
            data: score
        })
    }
}
module.exports = TaskService