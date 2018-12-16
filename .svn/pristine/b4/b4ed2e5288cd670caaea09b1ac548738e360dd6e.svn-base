// 成员小组
module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
        NOW,
    } = app.Sequelize

    const MemberGroupChild = app.model.define('member_group_child', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        student_id: { type: INTEGER, },
        member_group_type_id: { type: STRING, },
        member_group_class_id: { type: STRING, },
        course_child_id: { type: INTEGER, },
        date: { type: INTEGER, },
    }, {
            timestamps: false,  //去除createAt updateAt
            freezeTableName: true, //使用自定义表名//使用自定义表名
        })
    return MemberGroupChild
}