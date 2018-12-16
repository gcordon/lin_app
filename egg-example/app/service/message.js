const Service = require('egg').Service
const {
    SUCCESS,
    ERROR,
} = require('../util/util')

class MessageService extends Service {
    /**
     * 
     * @param {insertObj} 消息中心的标题、对应id，时间
     */
    async setMessageCenter(insertObj) {
        const {
            ctx
        } = this
        /********
                const isExistsMessage = await ctx.model.Message.findOne({
                    where: {
                        title: insertObj.title.toString()
                    }
                })
                if (isExistsMessage) {
                    return Object.assign(ERROR, {
                        msg: '消息中心已存在此消息！',
                        data: ''
                    })
                }
        **** */
        const insertMessage = await ctx.model.Message.create(insertObj)
        if (insertMessage) {
            return Object.assign(SUCCESS, {
                msg: '消息写入成功！',
                data: '',
            }) 
        } else {
            return Object.assign(SUCCESS, {
                msg: '消息写入失败！',
                data: '',
            }) 
        }
    }
    // 获取消息
    async getMessageCenter(limit = 'all', course_child_id) {

        const {
            ctx
        } = this
        let getMessage = null
        // 查询老师
        if (limit == 'all') {
            getMessage = await ctx.model.Message.findAll({
                attributes: ['id','title','date'],
                where: {
                    course_child_id: Number(course_child_id)
                },
            })
        } else {
            getMessage = await ctx.model.Message.findAll({
                attributes: ['id', 'title', 'date'],
                where: {
                    course_child_id: Number(course_child_id)
                },
                limit: Number(limit)
            })
        }
        
        const course = await ctx.model.Course.findOne({ where: { id: Number(course_child_id)} })
        const teacher = await ctx.model.Student.findAll({ 
            attributes: ['avatar'],
            where: { id: JSON.parse(course.dataValues.teacher_id) } 
        })
        const MesssageObj = {}
        MesssageObj['avatar'] = teacher
        MesssageObj['getMessage'] = getMessage
        if (getMessage) {
            return Object.assign(SUCCESS, {
                msg: '',
                data: MesssageObj,
            })
        }
    }

    // 删除指定的id消息
    async delMessageCenter(id) {
        const {
            ctx,
        } = this

        const destroyMessage = await ctx.model.Message.destroy({
            where: { id, }
        })
        if (destroyMessage) {
            return Object.assign(SUCCESS, {
                msg: `删除消息id${id}成功！`
            })
        } else {
            return Object.assign(ERROR, {
                msg: `删除消息id${id}失败！`
            })
        }
    }
}
module.exports = MessageService