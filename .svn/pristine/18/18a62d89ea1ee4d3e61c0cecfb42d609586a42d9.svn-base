
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

    const CoursewareClass = app.model.define('courseware_class', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        //  标题
        title: { type: STRING, },
        //  序号
        sequence: { type: INTEGER, },

        // 对应的总课件id
        courseware_id: { type: INTEGER },
        
        //  对应的子课程id
        course_child_id: { type: INTEGER },
        // 发布时间
        date: { type: DATE },
    }, {
            timestamps: false,  //去除createAt updateAt
            freezeTableName: true, //使用自定义表名//使用自定义表名
        })
    return CoursewareClass
}