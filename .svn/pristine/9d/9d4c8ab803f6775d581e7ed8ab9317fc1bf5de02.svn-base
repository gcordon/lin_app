const Service = require('egg').Service
const {
    ERROR,
    SUCCESS,
} = require('../util/util')
const moment = require('moment')


class DiscussCommentService extends Service {
    /**
     * 
     * @param {*} commentObj 写入单个答疑/讨论 评论
     * @argument {commentObj} 
     * @argument {discuss_id} 答疑/讨论的id (这个是DiscussComment的id，而不是discuss)
     */
    async setOneDiscussComment(commentObj, discuss_id) {
        const {
            ctx
        } = this
        // [{"student_id": 10,"content": "消息内容1","data": "时间1", },{ "student_id": 11,"content": "消息内容2","data": "时间2",},]
        let comment_find = await ctx.model.DiscussComment.findOne({
            where: { discuss_id, }
        })
        // 没有消息
        let update_comment = null
        if(comment_find.comment_content == '') {
            let commentArr = []
            commentObj['time'] = moment().format('YYYY-MM-DD HH:mm:ss')
            commentArr.push(commentObj)
            
            update_comment = await ctx.model.DiscussComment.update({
                comment_content: JSON.stringify(commentArr),
            },{
                where: {
                    discuss_id: discuss_id
                }
            })
        } else {
            // 旧发布的消息
            const old_comment = JSON.parse(comment_find.comment_content)
            commentObj['time'] = moment().format('YYYY-MM-DD HH:mm:ss')
            old_comment.push(commentObj)
            
                        console.log('=========update_comment===========================');
                        console.log('=========update_comment===========================');
                        console.log('=========update_comment===========================');
                        console.log(old_comment);
                        console.log('=========update_comment===========================');
                        console.log('=========update_comment===========================');
                        console.log('=========update_comment===========================');

            update_comment = await ctx.model.DiscussComment.update({
                comment_content: JSON.stringify(old_comment),
            }, {
                where: {
                    discuss_id: discuss_id
                }
            })

        }
        if (update_comment) {
            return Object.assign(SUCCESS, {
                data: update_comment,
                msg: '发布讨论消息成功！',
            })
        } else {
            return Object.assign(ERROR, {
                data: update_comment,
                msg: '发布讨论消息失败！',
            })
        }
    }
    /**
     * @param {} 获取指定的答疑讨论id下的消息
     */
    async getDiscussMessage(id,) {
        const {
            ctx,
        } = this
        try {
/********************start帅选数据************* */
            let comment_find_all = await ctx.model.DiscussComment.findOne({
                where: {
                    discuss_id: Number(id),
                }
            })
    
            // const student = await ctx.model.Student.findAll({
            //     where: { id: comment_find_all.dataValues.student_id }
            // })
            let a = JSON.parse(comment_find_all.dataValues.comment_content)

            a.map(async (item) => {
                const id = Number(item.student_id)
                const student = await ctx.model.Student.findAll({
                    attributes: ['id', 'name', 'avatar'],
                    where: { id: id, }
                })
                student.forEach(result => {
                    if (item.student_id == result.dataValues.id) {
                        item.avatar = result.dataValues.avatar
                        item.decide = result.dataValues.decide
                        item.name = result.dataValues.name
                    }
                })

            })
            const student_all = await ctx.model.Student.findAll({})
/********************end帅选数据************* */

            if (student_all) {
                return Object.assign(SUCCESS, {
                    data: a,
                    msg: '',
                })
            } else {
                return Object.assign(ERROR, {
                    data: '',
                    msg: '',
                })
            }
        } catch (error) {
            ctx.status = 500
            throw (error)
        }
    }

}
module.exports = DiscussCommentService