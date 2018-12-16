const Service = require('egg').Service
const {
    SUCCESS,
    ERROR,
} = require('../util/util')
const moment = require('moment')

class memberGroupService extends Service {

    /********************写入成员小组方案********************* */
    /**
    * @param {setCourseNotice} {写入指定子课程id的成员小组方案}
    * @param {子课程id} course_child_id
        * @param {成员小组方案对象} member_group_obj
    */
    async setMemberGroup(course_child_id, member_group_obj) {
        const {
            ctx,
        } = this
        try {
            JSON.parse(member_group_obj).map(async (item, index) => {
                item.student_id = Number(item.student_id)
                // 写入总成员小组方案
                let { title, } = item
                const bulkCreateArr = [
                    { title, course_child_id, }
                ]
                const member_group_type = await ctx.model.MemberGroupType.bulkCreate(bulkCreateArr)
                member_group_type.forEach(async (re) => {
                    const id = re.dataValues.id
                    if (item['membergroupClassArr']) {
                        item['membergroupClassArr'].map(async (result, index) => {
                            // 类成员小组方案中的 设置 上面 数据库 创建的新获取的(总成员小组方案管理的id) id
                            result['member_group_type_id'] = id
                            let { title, member_group_type_id, } = result
                            // 写入类成员小组方案
                            let bulkCreateArr = [
                                { title, member_group_type_id, course_child_id, }
                            ]
                            // 写入类成员小组方案 
                            const MemberGroupClass = await ctx.model.MemberGroupClass.bulkCreate(bulkCreateArr)
                            /**********************写入子成员小组方案******** */
                            MemberGroupClass.forEach(async (item) => {
                                const MemberGroupClass_id = item.dataValues.id
                                if (result['membergroupChildArr']) {
                                    result['membergroupChildArr'].forEach(async (item) => {
                

                                        item['member_group_type_id'] = id
                                        item['member_group_class_id'] = MemberGroupClass_id

                                        let { student_id, member_group_type_id, member_group_class_id, } = item
                                        let arrs = [
                                            { student_id, member_group_type_id, member_group_class_id, course_child_id, },
                                        ]

                                        const MemberGroupChild = await ctx.model.MemberGroupChild.bulkCreate(arrs)

                                    })
                                }
                            })
                            /**********************写入子成员小组方案******** */
                        })
                    }
                })
            })
            const MemberGroupType = await ctx.model.MemberGroupType.findAll({})
            const MemberGroupClass = await ctx.model.MemberGroupClass.findAll({})
            const MemberGroupChild = await ctx.model.MemberGroupChild.findAll({})
            if (MemberGroupType && MemberGroupClass && MemberGroupChild) {
                return Object.assign(SUCCESS, {
                    dat: '',
                    // data: JSON.parse(member_group_obj),
                    msg: `创建对应的子课程id：${course_child_id} 成员小组方案成功`
                })
            } else {
                return Object.assign(ERROR, {
                    dat: '',
                    // data: JSON.parse(member_group_obj),
                    msg: `创建对应的子课程id：${course_child_id} 成员小组方案失败`
                })
            }
        } catch (error) {
            ctx.status = 500
            throw (error)
        }
    } 


    /********************获取成员小组方案********************* */


    // 获取资源
    async getCourseWare(course_child_id) {
        const {
            ctx,
        } = this
        // 总课件
        const courseware = await ctx.model.Courseware.findAll({
            attributes: ['id', 'title'],
            where: {
                course_child_id: Number(course_child_id)
            },
            order: [
                ['sequence', 'asc']
            ],
        })
        let courseClassArr = ['courseClassArr']
        courseware.forEach(async (item, index) => {
            item.dataValues.type = 'courseware_total'
            item.dataValues.coursewareClassArr = []

            const courseware_id = Number(item.dataValues.id)
            // 类课程
            const courseware_class = await ctx.model.CoursewareClass.findAll({
                attributes: ['id', 'title'],
                where: { courseware_id, },
                order: [
                    ['sequence', 'asc']
                ],
            })

            courseware_class.forEach(async (item2, index2) => {
                item2.dataValues.type = 'courseware_class'

                await courseClassArr.push(item2)

                item2.dataValues.coursewareChildArr = []

                item.dataValues.coursewareClassArr.push(item2.dataValues)

                const courseware_class_id = Number(item2.dataValues.id)
                // 子课程
                const courseware_child = await ctx.model.CoursewareChild.findAll({
                    attributes: ['id', 'title', 'type', 'src'],
                    where: { courseware_id, courseware_class_id, },
                    order: [
                        ['sequence', 'asc']
                    ],
                })

                /**************这里push不了************/
                // @param{bug}
                courseware_child.forEach(async (item3, index3) => {
                    item3.dataValues.type = 'courseware_child'
                    item2.dataValues.coursewareChildArr.push(item3.dataValues)
                })
                console.log(courseware_class_id)
                /**************这里push不了************/
                // @param{bug}】
            })
        })


        const teacher = await ctx.model.Courseware.findAll({})
        const cousewareClass = await ctx.model.CoursewareClass.findAll({})
        const cousewareChild = await ctx.model.CoursewareChild.findAll({})

        if (teacher && cousewareClass && cousewareChild) {
            return Object.assign(SUCCESS, {
                msg: '',
                data: {
                    // courseClassArr,
                    courseware,
                }
            })
        }
    }
    // 获取指定子课程id下的成员小组方案管理
    async getMemberGroup(course_child_id) {
        const {
            ctx, service
        } = this
        const findAll = await ctx.model.MemberGroupType.findAll({
            attributes: ['id','title'],
            where: {
                course_child_id,
            }
        })
        findAll.forEach(async (item) => {
            const member_group_type_id = Number(item.dataValues.id)
            
            const member_class = await ctx.model.MemberGroupClass.findAndCountAll({
                where: { member_group_type_id: member_group_type_id}
            })
            member_class.rows.forEach(async (res) => {
                const member_group_class_id = res.dataValues.id
                const member_child = await ctx.model.MemberGroupChild.findAndCountAll({
                    where: {
                        member_group_type_id: Number(member_group_type_id),
                        // member_group_class_id: Number(member_group_class_id),  // 错误
                    }
                })
                item.dataValues.student_numer = `${member_child.count}` 
                // item.dataValues.student_numer = `${member_child.count}人已被划分小组` 
            })
            item.dataValues.group_number = `${member_class.count}` 
            // item.dataValues.group_number = `划分为${member_class.count}个小组` 
        })
        const msd = await ctx.model.MemberGroupClass.findAll({})
        const msdd = await ctx.model.MemberGroupChild.findAll({})
        if (findAll && msd && msdd) {
            return Object.assign(SUCCESS, {
                data: findAll,
                msg: '',
            })
            
        } else {
            return Object.assign(ERROR, {
                data: '',
                msg: '',
            })
        }
    }
    // 获取指定成员方案管理id
    async getmeMberGroupOne(member_group_type_id) {
        const {
            ctx
        } = this
        const memberClass = await ctx.model.MemberGroupClass.findAll({
            where: { member_group_type_id},
        })
        memberClass.forEach(async (item) => {
            const memberChild = await ctx.model.MemberGroupChild.findAndCountAll({
                attributes: ['student_id',],
                where: {  member_group_class_id: Number(item.dataValues.id) }
            })
            item.dataValues.childArr = memberChild
            memberChild.rows.map(async (re) => {
                const student = await ctx.model.Student.findAll({ 
                    attributes: ['name','avatar','id'],
                    where: { id: Number(re.dataValues.student_id)} 
                })
                re.dataValues = student
            })
        })
        const child = await ctx.model.MemberGroupChild.findAll({
            where: { member_group_type_id }
        })
        const s = await ctx.model.Student.findOne({})
        if (child && s) {
            return Object.assign(SUCCESS, {
                data: memberClass,
                msg: '',
            })
        }
    }
    // 删除指定成员方案管理id
    async delmeMberGroupOne(member_group_type_id) {
        const {
            ctx
        } = this
        const del_type = await ctx.model.MemberGroupType.destroy({
            where: {id: member_group_type_id},
        })
        const del_class = await ctx.model.MemberGroupClass.destroy({
            where: { member_group_type_id },
        })
        const del_child = await ctx.model.MemberGroupChild.destroy({
            where: { member_group_type_id },
        })
        if ( (del_type && del_class) || del_child) {
            return Object.assign(SUCCESS, {
                data: '',
                msg: `删除指定成员方案管理id ${member_group_type_id}成功！`,
            })
        } else {
            return Object.assign(ERROR, {
                data: '',
                msg: `删除指定成员方案管理id ${member_group_type_id}失败！`,
            })
        }
    }
    

    // 删除指定成员方案管理id
    async editbergroupOne(editJSON) {
        const {
            ctx
        } = this
        /**
        * editJOSN例子：
            {
                "PUT": [
                    // {student_id: 129,
                    // member_group_type_id: 60,
                    // member_group_class_id: 80,
                    // course_child_id: 35,},
                    // {student_id: 131,
                    // member_group_type_id: 60,
                    // member_group_class_id: 80,
                    // course_child_id: 35,},
                ],
                "DEL": [
                    {student_id: 111,
                    member_group_type_id: 60,
                    member_group_class_id: 80,
                    course_child_id: 35,},
                    {student_id: 112,
                    member_group_type_id: 60,
                    member_group_class_id: 80,
                    course_child_id: 35,},
                ],
            }
        */
        try {
            // 成员小组添加 和 删除
            if (editJSON['PUT'].length) {
                const create = await ctx.model.MemberGroupChild.bulkCreate(editJSON['PUT'])
            }
            if (editJSON['DEL'].length) {
                editJSON['DEL'].forEach(async (element) => {
                    const destroy = await ctx.model.MemberGroupChild.destroy({ where: element })
                });
            }
            return Object.assign(SUCCESS, {
                msg: '成员小组编辑成功!',
                data: ''
            })
        } catch (error) {
            // throw error(error)
        }
        return Object.assign(ERROR, {
            msg: '成员小组编辑失败!',
            data: ''
        })
    }

}

module.exports = memberGroupService