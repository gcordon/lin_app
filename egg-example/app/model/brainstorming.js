/**
* @param {头脑风暴}
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

    const Brainstorming = app.model.define('brainstorming', {
        id:
        {
            type: INTEGER,
            primaryKey: true, // primaryKey主键
            autoIncrement: true, // autoIncrement 自动递增
        },
        // 任务标题
        title:
        {
            type: STRING(30),
            // allowNull: false,
        },
        // 任务详情
        description: {
            type: STRING,
        },
        // 班课状态（wait => 未开始conduct =》进行中 end =》已结束）
        status:
        {
            type: STRING(30),
        },
        // 任务分数
        fraction:
        {
            type: INTEGER,
        },
        // 任务对应的子课程id
        course_child_id:
        {
            type: INTEGER,
        },
        // 任务发布时间
        date:
        {
            type: DATE,
        }
    }, {
            timestamps: false,  //去除createAt updateAt
            freezeTableName: true, //使用自定义表名
        })

    return Brainstorming
}