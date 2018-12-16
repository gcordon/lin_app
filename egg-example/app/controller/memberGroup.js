const Controller = require('egg').Controller 

class memberGroupController extends Controller {
    /**
   * 写入指定子课程id的课件
   */
    async setMemberGroup() {
        const { ctx, service } = this

        const course_child_id = ctx.request.body.course_child_id || ctx.query.course_child_id
        const member_obj = ctx.request.body.member_obj || ctx.query.member_obj

        ctx.body = await service.memberGroup.setMemberGroup(Number(course_child_id), member_obj)
        
    }
    // 获取指定子课程id下的成员小组方案管理
    async getMemberGroup() {
        const { ctx, service } = this

        const course_child_id = ctx.request.body.course_child_id || ctx.query.course_child_id
        ctx.body = await service.memberGroup.getMemberGroup(Number(course_child_id))
    }
    // 获取指定成员方案管理id
    async getmeMberGroupOne() {
        const { ctx, service } = this
// @copy;
        const member_group_type_id = ctx.request.body.member_group_type_id || ctx.query.member_group_type_id
        ctx.body = await service.memberGroup.getmeMberGroupOne(Number(member_group_type_id))
    }

    // 删除指定成员方案管理id
    async delmeMberGroupOne() {
        const { ctx, service } = this

        const member_group_type_id = ctx.request.body.member_group_type_id || ctx.query.member_group_type_id
        ctx.body = await service.memberGroup.delmeMberGroupOne(Number(member_group_type_id))

    }
    // 删除指定成员方案管理id
    /**
     * 分别为： PUT 、 DEL 
     *         PUT 添加 到指定的小组中
     *         DEL 删除 指定的小组
     */
    async editbergroupOne() {
        const { ctx, service } = this

        const editJSON = ctx.request.body.editJSON || ctx.query.editJSON  
        ctx.body = await service.memberGroup.editbergroupOne(JSON.parse(editJSON))
    }
}
module.exports = memberGroupController
