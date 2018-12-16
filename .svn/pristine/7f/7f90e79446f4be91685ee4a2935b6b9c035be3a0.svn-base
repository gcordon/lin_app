/**
* @param {课程子类}
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

    const course = app.model.define('task', {
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
        // 对应的父成员小组方案管理id（这是为了：任务小组划分方式设计的）
        member_group_type_id:
        {
            type: INTEGER,
            default: 0, // 默认0为没有划分小组
        },
        // 任务发布时间
        date:
        {
            type: STRING(30),
        }
    }, {
            timestamps: false,  //去除createAt updateAt
            freezeTableName: true, //使用自定义表名
        })

    return course
}