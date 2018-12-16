/**
 * @param {消息中心}
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

    const message = app.model.define('message', {
        id:
        {
            type: INTEGER,
            primaryKey: true, // primaryKey主键
            autoIncrement: true, // autoIncrement 自动递增
        },
        // 消息标题
        title:
        {
            type: STRING(30),
        },
        // 消息对应的子课id
        course_child_id:
        {
            type: INTEGER,
        },
        date:
        {
            type: STRING(30)
        }
    }, {
            timestamps: false,  //去除createAt updateAt
            freezeTableName: true, //使用自定义表名
    })

    return message
}