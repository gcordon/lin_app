'use strict';
/**
 * 
 * @param {老师模型} app 
 * 
 */
module.exports = app => {
    const { 
        STRING, 
        INTEGER,
        DATE,
        NOW,
    } = app.Sequelize

    const Teacher = app.model.define('teacher', {
            id: 
            {
                type : INTEGER,
                primaryKey : true, // primaryKey主键
                autoIncrement : true, // autoIncrement 自动递增
            },
            name:
            {
                type: STRING(30),
                validate: {
                    notEmpty: true, //检测是否为空
                },
            },
            username: 
            {
                type: STRING(30),
                validate : {
                    notEmpty: true,// 检测是否为空
                },
            },
            password: 
            {
                type : STRING(30),
                validate : {
                    notEmpty: true, //检测是否为空
                },
            },
            email: 
            {
                type : STRING(30),
                validate : {
                    isEmail: true, // 检测是否是邮箱
                },
                allowNull: true, // 是否能为空
                defaultValue: '空邮箱',
            },
            avatar: // 头像
            {
                type: STRING(300),
            },
            token: // 头像
            {
                type: STRING(300),
            },
            school:  // 所属大学
            {
                type: STRING(100),
            },
            education: //学历
            {
                type: STRING(100),
            },
            // 默认会创建：createAT和updateAT
        },{
            // 是否需要增加createdAt、updatedAt、deletedAt字段
            timestamps: true,
            freezeTableName: true, //使用自定义表名
        }
    )

    return Teacher
}