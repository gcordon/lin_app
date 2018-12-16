const Service = require('egg').Service
const {
    ERROR,
    SUCCESS,
} = require('../util/util')

class brainstormingCommentService extends Service {
    /**
     * 
     * @param {*} commentObj 写入单个蓝墨任务评论
     * 
     */
    async setOneBrainstormingComment(commentObj) {
        const {
            ctx
        } = this
        console.log('====================================');
        console.log(commentObj);
        console.log('====================================');
        // 学生token
        let { student_token, comment_content, brainstorming_id } = commentObj
        // 查看BrainstormingComment的student_token 是否存在
        const findStudentToken = await ctx.model.BrainstormingComment.findOne({ where: { student_token, brainstorming_id },})
        // 如果存在的话那么就是更新这个已有的评论
        if (findStudentToken) {
            
            const upadte = await ctx.model.BrainstormingComment.update({
                comment_content,
            }, {
                    where: { student_token,  }
            })

            if (upadte) {
                return Object.assign(SUCCESS, {
                    data: '',
                    msg: '更新蓝墨头脑风暴评论成功！'
                })
            } else {
                return Object.assign(ERROR, {
                    data: '',
                    msg: '更新蓝墨头脑风暴评论失败！'
                })
            }
        } else {
            const create = await ctx.model.BrainstormingComment.create(commentObj)
           
            if (create) {
                return Object.assign(SUCCESS, {
                    data: '',
                    msg: '写入蓝墨头脑风暴评论成功！'
                })
            } else {
                return Object.assign(ERROR, {
                    data: '',
                    msg: '写入蓝墨头脑风暴评论失败！'
                })
            }
        }
        
    }
    //  判断是否已填写评论 //写入指定的头脑风暴id评论之前（点击指定的头脑风暴之后触发）查看此token的学生是否已有评论
    async getStudentBrainstormingComment(student_token, brainstorming_id) {
        const {
            ctx
        } = this
        const comment = await ctx.model.BrainstormingComment.findOne({
            attributes: ['comment_content','date'],
            where: { student_token, brainstorming_id,}
        })
        if (comment) {
            return Object.assign(SUCCESS, {
                msg: `token ${student_token} 已经评论过此条信息`,
                data: comment
            })
        }
    }
}
module.exports = brainstormingCommentService