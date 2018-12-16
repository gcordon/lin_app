//传递一个房间号，房间号可以是一个课程的id，每当有聊天时通过这个id进行分组识别，发送消息
//创建一个表存放消息
const Service = require('egg').Service
const {
    ERROR,
    SUCCESS,
} = require('../../util/util')
const moment = require('moment')

module.exports = app => {
    return async (ctx, next) => {

        /**
         * @argument 
         */
        // class_id 
        var id = ctx.socket.handshake.query.classId;


        //获取websocket课程房间id参数进行创建房间 join(id)))
        ctx.socket.join(id)

        // then
        
        ctx.socket.on('connect', function (data) {
            console.log('====================================');
            console.log(11111111111111);
            console.log('====================================');;
        })


        ctx.socket.on('getMessageAll', async (msg) => {

        })
        

        //用户发送消息
        ctx.socket.on('message', async (msg) => {
            let response = {
                    id,
                    userId: `${ ctx.socket.handshake.query.id }`,
                    // username: `${ ctx.socket.handshake.query.username }`,
                    msg,
            };

/********************前台传递的数据************* */
            // 学生 =》id
            let student_id = `${ctx.socket.handshake.query.id}`
            // 答疑/讨论 =》id
            let discuss_id = ctx.socket.handshake.query.classId
        
            let commentObj = {
                student_id,
                content: msg,
            }

/********************前台传递的数据************* */
/********************start写入数据库************* */
            // [{"student_id": 10,"content": "消息内容1","data": "时间1", },{ "student_id": 11,"content": "消息内容2","data": "时间2",},]
            let comment_find = await app.model.DiscussComment.findOne({
                where: { discuss_id: Number(discuss_id) }
            })
            console.log('=============')
            console.log('=============')
            console.log(!comment_find)
            console.log('=============')
            console.log('=============')
            // 没有消息
            let update_comment
            if (!comment_find) {
                let commentArr = []
                commentObj['time'] = moment().format('YYYY-MM-DD HH:mm:ss')
                commentArr.push(commentObj)

                update_comment = await ctx.model.DiscussComment.create({
                        comment_content: JSON.stringify(commentArr),
                        discuss_id: Number(discuss_id)
                    })
            } else {
                // 旧发布的消息
                const old_comment = JSON.parse(comment_find.dataValues.comment_content)
            
                commentObj['time'] = moment().format('YYYY-MM-DD HH:mm:ss')
                old_comment.push(commentObj)

                update_comment = await ctx.model.DiscussComment.update({
                    comment_content: JSON.stringify(old_comment),
                }, {
                    where: {
                        discuss_id: discuss_id
                    }
                })
            }
/********************end写入数据库************* */

/********************start帅选数据************* */
            // let comment_find_all = await app.model.DiscussComment.findOne({
            //     where: { discuss_id, }
            // })
            // // const student = await app.model.Student.findAll({
            // //     where: { id: comment_find_all.dataValues.student_id }
            // // })
            // let a = JSON.parse(comment_find_all.dataValues.comment_content)
            // a.map(async (item) => {
            //     const id = Number(item.student_id)
            //     const student = await app.model.Student.findAll({
            //         where: { id: id, }
            //     })
            //     student.forEach(result => {
            //         if (item.student_id == result.dataValues.id) {
            //             item.avatar = result.dataValues.avatar
            //             item.decide = result.dataValues.decide
            //             item.name = result.dataValues.name
            //         }
            //     })
            //     console.log(item)
            // })
            // const student_all = await app.model.Student.findAll({
            // })
/********************end帅选数据************* */

/*****返回发送的发送的内容=》用户前台appendChild()********************* */
            const current_student = await app.model.Student.findOne({
                attributes: ['id','name','avatar'],
                where: {
                    id: Number(student_id),
                }
            })
            current_student.dataValues['time'] = moment().format('YYYY-MM-DD HH:mm:ss')
            current_student.dataValues['content'] = msg
            if (current_student) {
                app.io.to(id).emit('message', current_student)
            }
/********************end帅选数据************* */

            
            //收到消息后调用广播函数（只对其他人发消息，不对于自己）
            // ctx.socket.broadcast.emit('message', `用户${ctx.socket.id}: ${msg}`)
            // ctx.socket.send(ctx.socket.handshake.query.classId)
            // app.io.to(`class ${ctx.socket.handshake.query.classId}`).emit('message', `房间号：${ctx.socket.handshake.query.classId}, 用户 ${ctx.socket.handshake.query.username} : ${msg}`);

            //表 ====>
            // class_id
            // user_id
            // message
            // time

            // table
            //  id
            //  histry  
            // 写入数据库
/*            
            console.log('app', app)
        
            console.log('用户发送的信息:', msg)
            app.io.to(id).emit('message', `房间号：${id}, 用户 ${ctx.socket.handshake.query.username} : ${msg}`);
*/
        })

        await next();
        // execute when disconnect.
        console.log('disconnection!');
    };
};