/**
* @param {答疑/讨论 学生评论}
*/

module.exports = app => {
    // 总课程模型
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

    const discuss_comment = app.model.define('discuss_comment', {
        id:
        {
            type: INTEGER,
            primaryKey: true, // primaryKey主键
            autoIncrement: true, // autoIncrement 自动递增
        },
        // 答疑/讨论 学生评论内容
        comment_content:
        {
            type: TEXT,
            // allowNull: false,
        },
        // 对应的蓝墨云 答疑/讨论 的id
        discuss_id:
        {
            type: INTEGER,
        },
        // 答疑/讨论 发布时间
        date:
        {
            type: STRING(30),
        }
    }, {
        timestamps: false,  //去除createAt updateAt
        freezeTableName: true, //使用自定义表名
    })

    return discuss_comment
}