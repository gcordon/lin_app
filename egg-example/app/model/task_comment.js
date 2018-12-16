/**
* @param {课程学生评论}
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

    const Task_comment = app.model.define('task_comment', {
        id:
        {
            type: INTEGER,
            primaryKey: true, // primaryKey主键
            autoIncrement: true, // autoIncrement 自动递增
        },
        // 课程学生评论内容
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
        // 对应的蓝墨云任务指定id
        task_id:
        {
            type: INTEGER,
        },
        // 任务评论发布时间
        date:
        {
            type: STRING(30),
        }
    }, {
            timestamps: false,  //去除createAt updateAt
            freezeTableName: true, //使用自定义表名
        })

    return Task_comment
}