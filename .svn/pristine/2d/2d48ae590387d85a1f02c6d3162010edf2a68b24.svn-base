// 成员小组
module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
        NOW,
    } = app.Sequelize

    const MemberGroupClass = app.model.define('member_group_class', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        title: { type: STRING, },
        member_group_type_id: { type: STRING, },
        course_child_id: { type: INTEGER, },
        date: { type: INTEGER, },
    }, {
            timestamps: false,  //去除createAt updateAt
            freezeTableName: true, //使用自定义表名//使用自定义表名
        })
    return MemberGroupClass
}