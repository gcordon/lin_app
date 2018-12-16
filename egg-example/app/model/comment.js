/**
* @param {评论}
*/

module.exports = app => {
    const {
        INTEGER,
        STRING,
        TEXT,
        NOW,
        DATE,
    } = app.Sequelize
    const {
        ctx
    } = app

    const Comment = app.model.define('comment', {
        id:
        {
            type: INTEGER,
            primaryKey: true, // primaryKey主键
            autoIncrement: true, // autoIncrement 自动递增
        },
        // 评论内容
        content:
        {
            type: STRING(30),
            // allowNull: false,
        },
        // 评论者id
        comment_id: {
            type: INTEGER,
        },
        // 公共对应的子课程id
        course_child_id:
        {
            type: INTEGER,
        },
        // 公共发布时间
        date:
        {
            type: DATE,
        }
    }, {
        timestamps: false,  //去除createAt updateAt
        freezeTableName: true, //使用自定义表名
    })

    return Comment
}