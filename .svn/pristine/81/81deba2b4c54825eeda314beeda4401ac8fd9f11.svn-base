
'use strict';
/**
 * 
 * @param {蓝墨云类选项} app 
 * 
 */

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
        NOW,
    } = app.Sequelize

    const VoteClass = app.model.define('vote_class', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        //  投票标题
        title: { type: STRING, },
        //  投票选项 （ 0单选 1 多选）
        select: { type: INTEGER, },
        //  投票序号
        sequence: { type: INTEGER, },
        //  对应的选项id
        vote_id: { type: INTEGER },
        //  对应的子课程id
        course_child_id: { type: INTEGER },
    }, {
            timestamps: false,  //去除createAt updateAt
            freezeTableName: true, //使用自定义表名//使用自定义表名
        })
    return VoteClass
}