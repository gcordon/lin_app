const Service = require('egg').Service
const {
    ERROR,
    SUCCESS,
} = require('../util/util')

class taskCommentService extends Service {
    /**
     * 
     * @param {*} commentObj 写入单个蓝墨任务评论
     * 
     */
    async setOneTaskComment(commentObj) {
        const {
            ctx
        } = this
        const create = await ctx.model.TaskComment.create(
            commentObj
        )
        if (create) {
            return Object.assign(SUCCESS, {
                msg: '写入任务评论成功！',
                data: ''
            })
        } else {
            if (create) {
                return Object.assign(SUCCESS, {
                    msg: '写入任务评论失败！',
                    data: ''
                })
            } 
        }
    }
}
module.exports = taskCommentService