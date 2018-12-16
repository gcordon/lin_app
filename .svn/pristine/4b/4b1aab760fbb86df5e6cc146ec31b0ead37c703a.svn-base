const Service = require('egg').Service
const {
    SUCCESS,
    ERROR,
} = require('../util/util')
const validator = require('validator')
const moment = require('moment')

class discussService extends Service {
    /**
     * @param {} 创建答疑/讨论
     * @argument {course_child_id}  对应的子课程id
     * @argument {TaskObj}  答疑/讨论标题、详情、分数
     */
    async setDiscuss(course_child_id, DiscussObj) {
        const {
            ctx,
        } = this
        if (!course_child_id) {
            return Object.assign(ERROR, { msg: 'setDiscuss => course_child_id 没有传递参数' })
        } else {
            // const findDiscuss = await ctx.model.Discuss.findOne({
            //     where: {
            //         title: DiscussObj.title
            //     }
            // })
            // if (findDiscuss) {
            //     return Object.assign(ERROR, {
            //         msg: '此答疑/讨论已存在',
            //         data: ''
            //     })
            // } 
            const createDiscuss = await ctx.model.Discuss.create({
                title: DiscussObj.title,
                description: DiscussObj.description,
                fraction: DiscussObj.fraction,
                course_child_id: course_child_id,
                date: moment().format('YYYY-MM-DD HH:mm:ss'),
            })
            if (createDiscuss) {
                return Object.assign(SUCCESS, {
                    msg: '',
                    data: createDiscuss
                })
            }
        }
    }

}
module.exports = discussService