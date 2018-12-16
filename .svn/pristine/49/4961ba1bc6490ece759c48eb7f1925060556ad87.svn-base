
'use strict';
/**
 * @param {总课件} app 
 */

module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
        NOW,
    } = app.Sequelize

    const Courseware = app.model.define('courseware', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        //  标题
        title: { type: STRING, },
        //  序号
        sequence: { type: INTEGER, },
        //  对应的子课程id
        course_child_id: { type: INTEGER },
        // 发布时间
        date: { type: STRING(30) },
    }, {
            timestamps: false,  //去除createAt updateAt
            freezeTableName: true, //使用自定义表名//使用自定义表名
        })
    return Courseware
}