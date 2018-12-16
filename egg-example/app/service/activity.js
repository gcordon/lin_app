const {
    SUCCESS,
    ERROR,
} = require('../util/util')
module.exports = app => {
    class Service extends app.Service {
        // 查询指定子课程id下的活动
        async getActivity(course_child_id) {
            const {
                ctx, service,
            } = this
            /**
             * @argument course_child_id => {course_child_id} 对应的子课程id
             */
            const brainstorming = await ctx.model.Brainstorming.findAll({ 
                attributes: ['id', 'title', 'status', 'description', 'fraction','date'],
                where: { course_child_id, }
            })
            // const task = await ctx.model.Task.findAll({ 
            //     attributes: ['id', 'title', 'status', 'description', 'fraction','date'],
            //     where: { course_child_id, } 
            // })
            const discuss = await ctx.model.Discuss.findAll({
                attributes: ['id', 'title', 'status', 'description', 'fraction', 'date'],
                where: { course_child_id, }
            })

            const vote = await ctx.model.Vote.findAll({
                attributes: ['id', 'title', 'status', 'description', 'fraction', 'date'],
                where: {
                    course_child_id,
                }
            })

            let activityArr = []
            
            brainstorming.map(item => {
                item.dataValues.type = 'Brainstorming'
                activityArr.push(item)
            })
            // task.map(item => {
            //     item.dataValues.type = 'Task'
            //     activityArr.push(item)
            // })
            discuss.map(item => {
                item.dataValues.type = 'Discuss'
                activityArr.push(item)
            })

            vote.map(item => {
                item.dataValues.type = 'Vote'
                activityArr.push(item)
            })
            
            /**
             * @augments{bug}
             */

            let result = {
                    // wait conduct end
                allArr: [

                ],
                waitArr: [
                ],
                conductArr: [
                ],
                endArr: [
                ],
            }
            activityArr.forEach(element => {
                result['allArr'].push(element.dataValues)
                switch (element.dataValues.status) {
                    case 'wait':
                        result['waitArr'].push(element.dataValues)
                        break;
                    case 'conduct':
                        result['conductArr'].push(element.dataValues)
                        break;
                    case 'end':
                        result['endArr'].push(element.dataValues)                        
                        break;
                    default:
                        break;
                }
            });
            return Object.assign(SUCCESS,{
                data: result,
            })
            
        }
        // 改变状态
        async setActivityStatus(status) {
            const {ctx} = this
            // type 类型 （ brainstorming task)
            // id
            // 
        }
        // 获取指定子课程id下的活动=》不同的活动
        async editActivity(type, id) {
            const {
                ctx, service,
            } = this
            let editActivity = null
            if (type == 'Brainstorming') {
                editActivity = await ctx.model.Brainstorming.findOne({ 
                    where: {id,} 
                })
            } else if (type == 'Task') {
                editActivity = await ctx.model.Task.findOne({ 
                    where: { id, } 
                })
            } else if (type == 'Discuss') {
                editActivity = await ctx.model.Discuss.findOne({
                    where: { id, }
                })
            } else if (type == 'Vote') {
                editActivity = await ctx.model.Vote.findOne({
                    where: {
                        id,
                    }
                })
            }

            if (editActivity) {
                return Object.assign(SUCCESS, {
                    msg: '',
                    data: editActivity,
                })
            }
        }
        // 更新指定子课程id下的活动=》不同的活动
        async updateActivity(type, id, updateObj) {
            const {
                ctx, service,
            } = this
            let updateActivity,msg = null
            if (type == 'Brainstorming') {
                updateActivity = await ctx.model.Brainstorming.update(updateObj,{
                    where: { id, }
                })
                msg = `更新头脑风暴id${id}成功!`
            } else if (type == 'Task') {
                updateActivity = await ctx.model.Task.update(updateObj,{
                    where: { id, }
                })
                msg = `更新小组任务id${id}成功!`
            } else if (type == 'Discuss') {
                updateActivity = await ctx.model.Discuss.update(updateObj, {
                    where: { id, }
                })
                msg = `更新答疑/讨论id${id}成功!`
            } else if (type == 'Vote') {
                updateActivity = await ctx.model.Vote.update(updateObj, {
                    where: {
                        id,
                    }
                })
                msg = `更新投票id${id}成功!`
            }
            
            if (updateActivity) {
                return Object.assign(SUCCESS, { msg, data: updateActivity, })
            } else {
                return Object.assign(ERROR, { msg: '失败',data:'' })
            }
        }
        // 修改指定子课程id下的活动的状态(status) 未开始wait进行conduct结束end
        async updateActivityStatus(type, id, status) {
            const {
                ctx, service,
            } = this
            let updateActivityStatus, msg = null
            if (type == 'Brainstorming') {
                updateActivityStatus = await ctx.model.Brainstorming.update({
                    status,
                }, {
                    where: { id, }
                })
                msg = `更新头脑风暴id${id}状态成功!`
            } else if (type == 'Task') {
                updateActivityStatus = await ctx.model.Task.update({
                    status,
                }, {
                    where: { id, }
                })
                msg = `更新小组任务id${id}状态成功!`
            } else if (type == 'Discuss') {
                updateActivityStatus = await ctx.model.Discuss.update({
                    status,
                }, {
                        where: { id, }
                    })
                msg = `更新答疑/讨论id${id}状态成功!`
            } else if (type == 'Vote') {
                updateActivityStatus = await ctx.model.Vote.update({
                    status,
                }, {
                    where: {
                        id,
                    }
                })
                msg = `更新投票id${id}状态成功!`
            }

            if (updateActivityStatus) {
                return Object.assign(SUCCESS, { msg, data: updateActivityStatus, })
            } else {
                return Object.assign(ERROR, { msg: '失败', data: '' })
            }
        }
        //  删除活动
        async delactivity(type, id) {
            const {
                ctx, service,
            } = this
            let delactivity, msg = null
            if (type == 'Brainstorming') {
                delactivity = await ctx.model.Brainstorming.destroy({
                        where: { id, }
                    })
                msg = `删除头脑风暴id${id}成功!`
            } else if (type == 'Task') {
                delactivity = await ctx.model.Task.destroy({
                    where: { id, }
                })
                msg = `删除小组任务id${id}成功!`
            } else if (type == 'Discuss') {
                delactivity = await ctx.model.Discuss.destroy({
                    where: { id, }
                })
                msg = `删除答疑/讨论id${id}成功!`
            } else if (type == 'Vote') {
                delactivity = await ctx.model.Vote.destroy({
                    where: {
                        id,
                    }
                })
                msg = `删除投票d${id}成功!`
            }

            if (delactivity) {
                return Object.assign(SUCCESS, { msg, data: delactivity, })
            } else {
                return Object.assign(ERROR, { msg: '失败', data: '' })
            }
        }
    }
    
    return Service
}
