/**
* @param {反馈}
*/

module.exports = app => {
    // 总课程模型
    const {
        INTEGER,
        STRING,
        TEXT,
        NOW,
    } = app.Sequelize
    const {
        ctx
    } = app

    const suggest = app.model.define('suggest', {
        id:
        {
            type: INTEGER,
            primaryKey: true, // primaryKey主键
            autoIncrement: true, // autoIncrement 自动递增
        },
        // 反馈标题
        problem:
        {
            type: STRING(30),
            // allowNull: false,
        },
        // 反馈图
        img: {
            type: STRING,
        },
        // 联系方式
        address:
        {
            type: STRING,
        },
        // 手机型号
        md:
        {
            type: STRING(30),
        },
        // 手机系统版本
        os:
        {
            type: STRING(30),
        },
        // 反馈的时间
        date:
        {
            type: STRING,
        },

    }, {
            timestamps: false,  //去除createAt updateAt
            freezeTableName: true, //使用自定义表名
            timestamps: false,  //去除createAt updateAt
            freezeTableName: true, //使用自定义表名
        })

    return suggest
}