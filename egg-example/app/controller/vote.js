const Controller = require('egg').Controller
const moment = require('moment')


class VoteController extends Controller {
    
    constructor (ctx) {
        super(ctx)
    }
    /**
     * 写入指定投票id选项
     */
    // 获取参数
    async getParams(arr) {
        let ctx = this.ctx
        let pArr = {} 
        for(let i in arr) {
            let parms = arr[i]
            const p = await ctx.request.body[parms] || ctx.query[parms] || ctx.params[parms]
            pArr[parms] = p
        }
        return pArr
    }
    /**
     * 获取投票
     */
    async getVote() {
        const {
            ctx, service
        } = this
        
        // 子课程id
        const vote_id = ctx.request.body.vote_id || ctx.query.vote_id || ctx.params.vote_id
        // const isTeacher = ctx.request.body.isTeacher || ctx.query.isTeacher 
        const token = ctx.request.body.token || ctx.query.token
        const getVote = await service.vote.getVote(vote_id, token)

        ctx.body = getVote
    }

    /**
     * 写入投票
     */
    async setVote() {
        const {
            ctx,
            service
        } = this
        // 投票课程
        // 的标题
        const title = ctx.request.body.title || ctx.query.title
        // 的详细内容
        const description = ctx.request.body.description || ctx.query.description
        // 的分数
        const fraction = ctx.request.body.fraction || ctx.query.fraction
        // 对应的课程id
        const course_child_id = ctx.request.body.course_child_id || ctx.query.course_child_id

        // 投票obj {}
        const voteObj = ctx.request.body.voteObj || ctx.query.voteObj

        const voteData = {
            title,
            description,
            fraction,
            course_child_id,
            date: moment().format('YYYY-MM-DD HH:mm:ss')
        }

        const setVote = await service.vote.setVote(voteData, voteObj)
        ctx.body = setVote
    }
    // 选中投票
    async selectedVote() {
        const {
            ctx,
            service
        } = this
        // 投票obj {}

        /**
            [
                {
                    "id": 105,
                    "select": 0,
                    "vote_id": 287,
                    "vote_class_id": 327,
                    "student_token": "aa1a1bd629401c971771c06015ed9cdb",
                    "selected_arr": [411],
                    "date": "0000-00-00"
                },
                {
                    "id": 106,
                    "select": 1,
                    "vote_id": 287,
                    "vote_class_id": 328,
                    "student_token": "aa1a1bd629401c971771c06015ed9cdb",
                    "selected_arr": [414,415,416],
                    "date": "0000-00-00"
                }
            ]
         */
        const bulk_obj = ctx.request.body.bulk_obj || ctx.query.bulk_obj
        console.log('====================================');
        console.log(bulk_obj);
        console.log('====================================');
        const selectedVote = await service.vote.selectedVote(JSON.parse(bulk_obj))
        ctx.body = selectedVote
    }
}

module.exports = VoteController