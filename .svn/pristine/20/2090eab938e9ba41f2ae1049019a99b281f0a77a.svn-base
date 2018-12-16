'use strict';

const Controller = require('egg').Controller

class NoticeController extends Controller {
    constructor(ctx) {
        super(ctx)
        this.notice = ctx.service.notice
    }
    async getNotice() {
        const notice = await this.notice.getNotice()
        this.ctx.body = notice
    }

}

module.exports = NoticeController
