/**
* @param {答疑/讨论}
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

    const Discuss = app.model.define('discuss', {
        id:
        {
            type: INTEGER,
            primaryKey: true, // primaryKey主键
            autoIncrement: true, // autoIncrement 自动递增
        },
        // 答疑/讨论 标题
        title:
        {
            type: STRING(30),
            // allowNull: false,
        },
        // 答疑/讨论 详情
        description: {
            type: STRING,
        },
        // 班课状态（wait => 未开始conduct =》进行中 end =》已结束）
        status:
        {
            type: STRING(30),
        },
        // 答疑/讨论 分数
        fraction:
        {
            type: INTEGER,
        },
        // 答疑/讨论 对应的子课程id
        course_child_id:
        {
            type: INTEGER,
        },
        // 答疑/讨论 发布时间
        date:
        {
            type: DATE,
        }
    }, {
            timestamps: false,  //去除createAt updateAt
            freezeTableName: true, //使用自定义表名
        })

    return Discuss
}