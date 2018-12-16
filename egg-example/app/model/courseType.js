  /**
 * @param {课程总表}
 */
module.exports = app => {
  
    const {
        INTEGER,
        STRING,
        TEXT,
        NOW,
    } = app.Sequelize
    
    const courseType = app.model.define('course_type',{
        id:
        {
            type: INTEGER,
            primaryKey: true, // primaryKey主键
            autoIncrement: true, // autoIncrement 自动递增
            unique: true, 
            comment: '总课程id',
        },
        class_name: {
            type: STRING(30),
            allowNull: false, //不能为空
        },
        // class_name: // 子课程
        title: // 子课程
        {
            type: STRING(300),
        },
    },{
            timestamps: false,  //去除createAt updateAt
            freezeTableName: true, //使用自定义表名
            charset: 'utf8',
            collate: 'utf8_general_ci', // 使用utf-8编码
            // classMethods: {
            //     associate() {
            //         CartModel.belongsTo(app.model.ProductModel, { foreignKey: 'productId' });
            //     },
            // },
    })
    return courseType
}