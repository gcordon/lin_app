'use strict';
/**
 * 
 * @param {蓝墨云子选项} app 
 * 
 */

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
        NOW,
    } = app.Sequelize

    const VoteChildSelected = app.model.define('vote_class_selected', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        select: {
            type: INTEGER,
        },
        // 总投票id
        vote_id: {
            type: STRING,
        },
        // 类投票id
        vote_class_id: {
            type: STRING,
        },
        //  学生的token
        student_token: {
            type: INTEGER,
        },
        //  选中的选择
        selected_arr: {
            type: INTEGER,
            defaultValues: '[]',
        },
        //  发布时间
        date: {
            type: DATE,
        },
    }, {
        timestamps: false, //去除createAt updateAt
        freezeTableName: true, //使用自定义表名//使用自定义表名
    })
    return VoteChildSelected
}