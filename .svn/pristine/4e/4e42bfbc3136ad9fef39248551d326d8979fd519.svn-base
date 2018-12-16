const Service = require('egg').Service

module.exports = app => class NoticeService extends Service {
    constructor (ctx) {
        super(ctx)
        this.notice = ctx.model.Notice
        this.course = ctx.model.Course
    }
    async getNotice() {
        const find = this.notice.findAll({
            include: [{ model: this.course, where: { id: app.Sequelize.col('id') } }]
        })
        if (find) {
            return Object.assign({
                code: 0,
                msg: '',
                data: find
            })
        }
    }
}
