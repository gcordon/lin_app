module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
        NOW,
    } = app.Sequelize

    const OthercourseWare = app.model.define('othercourseware', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: STRING, }, // 其他课件 标题
        type: { type: STRING, }, // 类型 (iamge, url, video)
        src: { type: STRING, }, // 保存的地址
        date: { type: STRING, }, // 发布的时间
        course_child_id: { type: INTEGER, }, // 对应的子课程id
    }, {
        timestamps: false,  //去除createAt updateAt
        freezeTableName: true, //使用自定义表名//使用自定义表名
    })
    return OthercourseWare
}