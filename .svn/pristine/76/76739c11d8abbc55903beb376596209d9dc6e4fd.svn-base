/**
* @param {头脑风暴学生评论}
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

    const brainstorming_comment = app.model.define('brainstorming_comment', {
        id:
        {
            type: INTEGER,
            primaryKey: true, // primaryKey主键
            autoIncrement: true, // autoIncrement 自动递增
        },
        // 头脑风暴学生评论内容
        comment_content:
        {
            type: STRING(30),
            // allowNull: false,
        },
        // 对应的学生token
        student_token:
        {
            type: STRING(30),
        },
        // 对应的蓝墨云头脑风暴指定id
        brainstorming_id:
        {
            type: INTEGER,
        },
        // 头脑风暴发布时间
        date:
        {
            type: STRING(30),
        }
    }, {
        timestamps: false,  //去除createAt updateAt
        freezeTableName: true, //使用自定义表名
    })

    return brainstorming_comment
}