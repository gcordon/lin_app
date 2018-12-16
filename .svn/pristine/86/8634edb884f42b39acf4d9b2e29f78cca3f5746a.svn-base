// module.exports = app => {
//     const mongoose = app.mongoose
//     const Schema = mongoose.Schema

//     const SignSchema = new Schema({
//         userName: { type: String, },// 账号
//         password: { type: String, },// 密码
//         email: { type: String, default: '无邮箱'},// 邮箱
//         type : { type: String, default: '0' }, // 0学生 1老师
//         create_at: { type: Date, default: Date.now(), }, // 创建时间
//         update_at: { type: Date, default: Date.now(), }, // 更新时间
//     })
    
//     return mongoose.model('Sign', SignSchema)
// }

'use strict';
/**
 * 
 * @param {学生模型} app 
 * 
 */
module.exports = app => {
    const { 
        STRING, 
        INTEGER,
        DATE,
        NOW,
    } = app.Sequelize

    const Student = app.model.define('student', {
            id: 
            {
                type : INTEGER,
                primaryKey : true, // primaryKey主键
                autoIncrement : true, // autoIncrement 自动递增
            },
            // 登陆的用户名
            username: 
            {
                type: STRING(30),
                // validate : {
                //     notEmpty: true,// 检测是否为空
                // },
            },
            // 名字
            name: 
            {
                type: STRING(30),
            },
            // 密码
            password: 
            {
                type : STRING(30),
                // validate : {
                //     notEmpty: true, //检测是否为空
                // },
            },
            // 性别
            sex:   
            {
                type: INTEGER,
            },
            school:
            {
                type: STRING(30),
            },
            // 头像
            avatar:
            {
                type: STRING(30),
            },
            // 判断是老师还是学生（1学生2老师）
            decide: {
                type: INTEGER,
            },
            token:
            {
                type: STRING(30),
            },
            email: 
            {
                type : STRING(30),
                // validate : {
                //     isEmail: true, // 检测是否是邮箱
                // },
                allowNull: true, // 是否能为空
                defaultValue: '空邮箱',
            },
            // 找回密码时发送的验证码 , (默认为'')
            token_email_code:
            {
                type: STRING(30),
            }
            // 默认会创建：createAT和updateAT

        },{
            // 是否需要增加createdAt、updatedAt、deletedAt字段
            timestamps: true,
            freezeTableName: true, //使用自定义表名
        }
    )

    return Student
}