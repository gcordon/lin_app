
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

    const CoursewareChild = app.model.define('courseware_child', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        //  标题
        title: { type: STRING, },
        //  类型
        type: { type: STRING, },
        //  序号
        sequence: { type: INTEGER, },
        //  课程的下载地址
        src: { type: STRING, },

        // 对应的总课件id
        courseware_id: { type: INTEGER, },
        // 对应的类课件id
        courseware_class_id: { type: INTEGER },

        //  对应的子课程id
        course_child_id: { type: INTEGER },
        // 发布时间
        date: { type: DATE },
    }, {
            timestamps: false,  //去除createAt updateAt
            freezeTableName: true, //使用自定义表名//使用自定义表名
        })
    return CoursewareChild
}