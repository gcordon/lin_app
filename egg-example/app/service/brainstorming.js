const Service = require('egg').Service
const {
    SUCCESS,
    ERROR,
} = require('../util/util')
const validator = require('validator')
const moment = require('moment')

class brainstormingService extends Service {
    /**
     * @param {} 创建头脑风暴
     * @argument {course_child_id}  对应的子课程id
     * @argument {TaskObj}  头脑风暴标题、详情、分数
     */
    async setBrainstorming(course_child_id, BrainstormingObj) {
        const {
            ctx,
        } = this
        if (!course_child_id) {
            return Object.assign(ERROR, { msg: 'setBrainstorming => course_child_id 没有传递参数' })
        } else {
            const findBrainstorming = await ctx.model.Brainstorming.findOne({
                where: {
                    title: BrainstormingObj.title
                }
            })
            if (findBrainstorming) {
                return Object.assign(ERROR, {
                    msg: '此头脑风暴已存在',
                    data: ''
                })
            } 
            const createBrainstorming = await ctx.model.Brainstorming.create({
                title: BrainstormingObj.title,
                description: BrainstormingObj.description,
                fraction: BrainstormingObj.fraction,
                course_child_id: course_child_id,
                date: moment().format('YYYY-MM-DD HH:mm:ss'),
            })
            if (createBrainstorming) {
                return Object.assign(SUCCESS, {
                    msg: '',
                    data: createBrainstorming
                })
            }
        }
    }
    /**
     * @param {} 更新头脑风暴
     */
    async updateBrainstorming(updateObj) {
        const {
            ctx, 
        } = this
        const updateBrainstorming = await ctx.model.Brainstorming.update(updateObj,{
            where: {
                id: Number(updateObj.id)
            }
        })
        if (updateBrainstorming) {
            return Object.assign(SUCCESS, {
                msg: `更新${updateObj.id}头脑风暴成功!`,
                data: updateBrainstorming
            })
        } else {
            return Object.assign(SUCCESS, {
                msg: `更新${updateObj.id}头脑风暴失败!`,
                data: ''
            })
        }
    }
    /**
  * @param {} 获取指定头脑暴风id
  * @argument {task_id}  对应的任务的id
  */
    async getOneBrainstorming(brainstorming_id) {
        const {
            ctx
        } = this
        // 获取指定头脑暴风id
        const findOneTask = await ctx.model.Brainstorming.findOne({
            attributes: ['id','title','description','fraction','course_child_id'],
            where: {
                id: Number(brainstorming_id)
            }
        })


        // 查询对应的子课程id
        const course_child_id = findOneTask.dataValues.course_child_id
        
        // 按照指定小组id，查询子课程id
        const findOneStudent = await ctx.model.Havelearned.findAll({
            where: {
                course_child_id: course_child_id,
            }
        })

        // 遍历学习课程 =》 找到指定子课程id =》 student_id (学生tid)   (这是在学习指定课程下的)
        let student_id_arr = []
        findOneStudent.forEach(element => {
            student_id_arr.push(element.dataValues.student_id)
        })

        const findS = await ctx.model.Student.findAll({
            attributes: ['id', 'name', 'avatar','token'],
            where: {
                "$and": {
                    id: student_id_arr
                }
            }
        })

        findOneTask.dataValues.data = findS

        var task_comment
        let arr = []
        findS.forEach(async (element, index) => {
            await arr.push(element.dataValues.token)
        });
        
        
        task_comment = await ctx.model.BrainstormingComment.findAll({
            attributes: ['id', 'comment_content', 'date', 'student_token'], // 这里的id是头脑风暴评论的id （删除这条时候使用）
            where: {
                student_token: arr,
                brainstorming_id: findOneTask.dataValues.id
            }
        })

        console.log(task_comment)
        
        findS.forEach(async (element, index) => {
            element.dataValues.comment = []
            task_comment.forEach(async (es, index) => {
                // 查询的学习过的课程的学生id表  =》 token 与&&与 头脑风暴的表 student_token 是否一致，是的话就是这个人的评论
                if (element.dataValues.token == es.dataValues.student_token) {
                    delete es.dataValues.student_token
                    delete es.dataValues.brainstorming_id
                    element.dataValues.comment.push(es.dataValues)
                }
            })
        });

        const fws = await ctx.model.BrainstormingComment.findAll({})
        if (fws) {
            return Object.assign(SUCCESS, {
                msg: '',
                data: findOneTask
            })
        }
    }
}
module.exports = brainstormingService