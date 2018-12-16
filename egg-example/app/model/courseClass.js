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
    } = app.Sequelize
    const {
        ctx
    } = app
    
    const courseClass = app.model.define('course_class',{
        id:
        {
            type: INTEGER,
            primaryKey: true, // primaryKey主键
            autoIncrement: true, // autoIncrement 自动递增
        },
        //
        class_name: {
            type: STRING(30),
            allowNull: false, //不能为空
        },
        // 
        title:
        {
            type: STRING(30),
            allowNull: false, //不能为空
        },
        course_type_id: // 父课程id
        {
            type: INTEGER,
            allowNull: false, //不能为空
        },
    },{
            timestamps: false,  //去除createAt updateAt
            freezeTableName: true, //使用自定义表名
    })
    
    return courseClass
}