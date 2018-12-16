module.exports = app => {
    const {
        STRING,
        INTEGER,
        DATE,
        NOW,
    } = app.Sequelize

    const Admin = app.model.define('admin', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        username: { type: STRING, },
        password: { type: STRING, },
        encryption_password: {type:STRING,}
    }, {
        timestamps: false,  //去除createAt updateAt
        freezeTableName: true, //使用自定义表名//使用自定义表名
    })
    return Admin
}