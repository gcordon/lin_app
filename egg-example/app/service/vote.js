const Service = require('egg').Service
const {
    ERROR,
    SUCCESS,
} = require('../util/util')
const moment = require('moment')


class VoteService extends Service {
    /**
     * 获取投票
     * @param {*} isTeacher是否老师
     * @param {*} id 总投票id
     * @param {*} token 学生或老师的token
     */
    async getVote(vote_id, token, ) {
    const {
        ctx
    } = this
/*********************start学生数据选中**************** */
            const where_ = token ?  `
                where: {
                    vote_id,
                    student_token: token ? toekn : null, // 老师的话就没有token 参数
                }
            ` : `
                where: {
                    vote_id,
                }
            `
            const find_ = token ? ctx.model.VoteClassSelected.findAll({
                where_
            }):
            ctx.model.VoteClassSelected.findAndCountAll({
                where_
            })
            const getVoteSelected = await find_

/*********************end学生数据选中**************** */
/**
 * @argument 第一种情况 （老师查看投票） =》 
 * 显示 1. 显示某子类已提交的总人数
 * 显示 2. 显示某个选项的选择这个的人数
 * 
 *  @argument 第一种情况（ 学生查看投票） = 》 *
 * 显示 1. 显示“我”已选择的子类的选项
 */
    // var course_child_id = Number(course_child_id)
    const getVote = await ctx.model.Vote.findAll({
        where: {
            id: vote_id,
        }
    })
    // 获取类vote
        let getVoteArr = []
        getVote.map(v => {
            getVoteArr.push(v.id)
        })
        const getVoteClass = await ctx.model.VoteClass.findAll({
            where: {
                vote_id: getVoteArr
            }
        })
        getVoteClass.map(v => {
            v.dataValues.children = []
        })
    // 获取子vote
        let getVoteChildArr = []
        getVoteClass.map(v => {
            getVoteChildArr.push(v.id)
        })
        const getChild = await ctx.model.VoteChild.findAll({
            where: {
                vote_id: getVoteArr,
                vote_class_id: getVoteChildArr,
            }
        })
        for (let i of getChild) {
            for (let i_class of getVoteClass) {
                if (i.vote_class_id == i_class.id) {
                    i_class.dataValues.children.push(i)
                }
/*********************start学生数据选中**************** */
                // 学生获取
                if (token) {
                    for (let c_value of i_class.dataValues.children) {
                        c_value.dataValues.is_selected = 0 // 默认不选中
                        // console.log(c_value)
                        for (let s_value of getVoteSelected) {
                            let selected_arr = JSON.parse(s_value.selected_arr) 
                            for (let a of selected_arr) {
                                if (c_value.id === a) {
                                    c_value.dataValues.is_selected = 1
                                }
                            }
                        }
                    }
                // 老师获取
                } else {
                    for (let c_value of i_class.dataValues.children) {
                        c_value.dataValues.count_selected = 0 // 选择此项的人数
                        for (let s_value of getVoteSelected.rows) {
                            let selected_arr = JSON.parse(s_value.selected_arr)
                            for (let a of selected_arr) {
                                if (c_value.id === a) {
                                    c_value.dataValues.count_selected += 1
                                }
                            }
                        }
                    }
                }
/*********************end学生数据选中**************** */

            }
        }

        if (getVote && getVoteClass && getChild) {
            return Object.assign(SUCCESS, {
                data: getVoteClass
            })
        } else {
            return Object.assign(ERROR, {
                msg: '投票获取失败',
                data: '',
            })
        }
        
    }
    // 
    // voteDate 是vote之类的
    // voteObj 是投票对象 =》 有voteClass和voteChild
    async setVote(voteData, voteObj) {
        const {
            ctx,
        } = this
        try {
            // 创建vote数据
            const vote = await ctx.model.Vote.create(voteData)
            // 创建voteClass数据
            console.log(voteObj)
            const voteObj_a = JSON.parse(voteObj)
            voteObj_a.map(v => {
                v.date = ''
            })
            voteObj_a.map(v => {
                delete v.children;
                v.vote_id = vote.id
                v.course_child_id = voteData.course_child_id
                v.date = moment().format('YYYY-MM-DD HH:mm:ss')
            })

            const voteClass = await ctx.model.VoteClass.bulkCreate(voteObj_a) // bulkCreate需要的是一个数组
            // 创建voteChild数据
            let voteChild;
            const voteObj_b = JSON.parse(voteObj)
            for (const iterator in voteObj_b) {
                voteObj_b[iterator].children.map(v => {
                    v.vote_class_id = voteClass[iterator].id
                    v.vote_id = vote.id
                    v.course_child_id = voteData.course_child_id
                })
                let voteChild = await ctx.model.VoteChild.bulkCreate(voteObj_b[iterator].children)
            }
            return Object.assign(SUCCESS, {
                msg: '投票添加成功',
            })
        } catch (error) {
            return Object.assign(ERROR, {
                msg: '投票添加失败',
            })
        }
    }
    async selectedVote(bulk) {
        const {
            ctx
        } = this
        /**
         * 完成
         * @argument 第一种情况： 本身数据库没有选
         * 
         * 还没做
         * @argument 第二种情况： 本身数据库已选择， 但是提交的跟数据库的一致 === 》不修改原先的数据
         * 
         * 完成
         * @argument 第三种情况： 本身数据库已选择， 但是提交的跟数据库的不一致===》查询这个数据&&更新selected_arr
         * 
         */
        try {
            // @argument 第一种情况： 本身数据库没有选
            //检测学生默认 已选择=》未选择的话赋值
            let f_arr = [];
            for (let i = 0; i < Object.keys(bulk[0]).length; i++) {
                if (bulk[i]) {
                    bulk[i].date = moment().format('YYYY-MM-DD HH:mm:ss')
                    bulk[i].selected_arr = JSON.stringify(bulk[i].selected_arr)
                    // const find_or_create = await ctx.model.VoteClassSelected.findOrCreate({
                    //     where: bulk[i]
                    // })
                    let f = await ctx.model.VoteClassSelected.find({
                        where: {
                            student_token: bulk[i].student_token,
                            vote_id: bulk[i].vote_id,
                            vote_class_id: bulk[i].vote_class_id,
                        }
                    })
                    f_arr.push(f)
                    // 如果没有此 selected投票 =》 创建
                    if (!f) {
                        await ctx.model.VoteClassSelected.create(bulk[i])
                    }
                    // 有的话更新
                    else {
                        await ctx.model.VoteClassSelected.update({
                                selected_arr: bulk[i].selected_arr // 只更新选择的项
                            }
                            // bulk[i]
                            , {
                                where: {
                                    student_token: bulk[i].student_token,
                                    vote_id: bulk[i].vote_id,
                                    vote_class_id: bulk[i].vote_class_id,
                                }
                            })
                    }

                }
            }
            return Object.assign(SUCCESS, {
                msg: '投票提交成功！'
            })
        } catch (error) {
            return Object.assign(ERROR, {
                msg: '投票提交失败！'
            })
        } finally {
            console.log('selectedVote', '投票提交server中~~~')
        }
    }
}
module.exports = VoteService