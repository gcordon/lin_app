
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

    const VoteChild = app.model.define('vote_child', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        //  投票内容
        // title: { type: STRING, },
        //  投票内容
        content: { type: STRING, },
        //  投票序号
        sequence: { type: INTEGER, },
        //  对应的类选项id
        vote_class_id: { type: INTEGER },
        // 对应的子课程id
        course_child_id: { type: INTEGER },
        //  对应的总选项卡id
        vote_id: { type: INTEGER },
    }, {
            timestamps: false,  //去除createAt updateAt
            freezeTableName: true, //使用自定义表名//使用自定义表名
    })
    return VoteChild
}