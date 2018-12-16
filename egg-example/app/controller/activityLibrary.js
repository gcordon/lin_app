
const Controller = require('egg').Controller
const path = require('path')
const {
    SUCCESS,
    ERROR,
} = require('../util/util')

class activityLibraryController extends Controller {
    constructor(ctx) {
        super(ctx)
    }
    // 获取指定子课程id下的所有活动
    async getActivityLibrary() {
        const {
            ctx
        } = this
        const course_child_id = ctx.request.body.course_child_id || ctx.query.course_child_id
        
        const taskAll = await ctx.model.Task.findAll({
            attributes: ['id','date'],
            course_child_id: Number(course_child_id),
        })
        const brainstormingAll = await ctx.model.Brainstorming.findAll({
            attributes: ['id', 'date'],
            course_child_id: Number(course_child_id),
        })
        const discussAll = await ctx.model.Discuss.findAll({
            attributes: ['id', 'date'],
            course_child_id: Number(course_child_id),
        })
        const activityAll = {}
        activityAll['Task'] = taskAll
        activityAll['Brainstorming'] = brainstormingAll
        activityAll['Discuss'] = discussAll

        console.log('sequelize',this.config.sequelize)
        ctx.body = activityAll
    }
    copyMysql(old_sqlname, new_sqlname, id){

        let sql = null
        if (old_sqlname == 'task') {
            sql = `INSERT INTO 
            ${old_sqlname}
                (title, description, fraction, course_child_id, member_group_type_id, date) 
            SELECT 
                title, description, fraction, course_child_id, member_group_type_id, date
                FROM ${new_sqlname} 
            WHERE id = ${id}`
        } else {
            sql = `INSERT INTO 
            ${old_sqlname}
                (title, description, fraction, course_child_id, date) 
            SELECT 
                title, description, fraction, course_child_id, date
                FROM ${new_sqlname} 
            WHERE id = ${id}`
        }
        return sql;
    }
    // 导入活动库
    async copyActivityLibrary() {
        // task 5
        // br  9
        const {
            ctx,
        } = this
        let activity_library_obj = ctx.request.body.activity_library_obj || ctx.query.activity_library_obj
        activity_library_obj = JSON.parse(activity_library_obj)
        if (activity_library_obj) {
            activity_library_obj.map(item => { item.type = item.type.toLowerCase() })
        }

        // 复制表
        let copyArr = []
        let copy = null
        activity_library_obj.forEach(async (element) => {
            const sql = this.copyMysql(element.type, element.type, element.id)
            copy = await this.app.model.query(sql, { type: 'SELECT' })
        })
        
        
        ctx.body = Object.assign(SUCCESS, {
            data: '',
            msg: '',
        })
        
    }
}

module.exports = activityLibraryController