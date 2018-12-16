const Service = require('egg').Service
const {
    ERROR,
    SUCCESS,
} = require('../util/util')

class TeacherService extends Service {
    getOne() {
        return '获取老师'
    }
    // 获取教师
    getTeacher(teacherIdArr) {
        const {
            ctx
        } = this
        
        const teacherArr = JSON.parse(teacherIdArr)

        // async function dbFuc(db) {
        //     for (let doc in db) {
        //         const as = await ctx.model.Teacher.find({ where: { id: db[doc] }})
        //         // await console.log(db[doc])
        //         return as
        //     }
        // }
        function findTeacherPromise(arrs) {
            return new Promise(resolve=> {
                var arr = []
                for (const key in arrs) {
                    const find = ctx.model.Student.find({
                        attributes: ['id','name','username','avatar'],
                        where: { id: arrs[key] }
                    })
                    find
                        .then(es => {
                            arr.push(es.dataValues)
                            if (arr.length == arrs.length) {
                                resolve(arr)
                            }
                        })
                }
            })
        }
        
        return findTeacherPromise(teacherArr)
        
    }
}
module.exports = TeacherService
