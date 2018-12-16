'use strict';
/**
 * 
 * @param {投票} app 
 * 
 */

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
        NOW,
    } = app.Sequelize

    const Vote = app.model.define('vote', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        //  投票标题
        title: {
            type: STRING,
        },
        //  投票描述
        description: {
            type: STRING,
        },
        // 班课状态（wait => 未开始conduct =》进行中 end =》已结束）
        status: {
            type: STRING(30),
        },
        //  投票分数
        fraction: {
            type: INTEGER,
        },
        //  对应的子课程id
        course_child_id: {
            type: INTEGER
        },
        // 发布时间
        date: {
            type: STRING(30),
        }
    }, {
        timestamps: false, //去除createAt updateAt
        freezeTableName: true, //使用自定义表名//使用自定义表名
    })
    return Vote
}