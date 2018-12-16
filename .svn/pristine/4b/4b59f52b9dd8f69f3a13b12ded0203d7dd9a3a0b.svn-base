/**
* @param {公共}
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

    const Notice = app.model.define('notice', {
        id:
            {
                type: INTEGER,
                primaryKey: true, // primaryKey主键
                autoIncrement: true, // autoIncrement 自动递增
            },
        // 公共标题
        title:
            {
                type: TEXT,
                // allowNull: false,
            },
        // 公共内容
        content: {
            type: TEXT,
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

    return Notice
}