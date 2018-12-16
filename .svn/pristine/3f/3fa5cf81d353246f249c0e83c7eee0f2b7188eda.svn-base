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
    
    const course = app.model.define('course',{
        id:
        {
            type: INTEGER,
            primaryKey: true, // primaryKey主键
            autoIncrement: true, // autoIncrement 自动递增
        },
        // 课程标题
        title:
        {
            type: STRING(30),
            // allowNull: false,
        },
        // 轮播图
        banner: {
            type: STRING,
        },
        // 简介
        description: 
        {
            type: TEXT,
        },
        // 班课状态（wait => 未开始conduct =》进行中 end =》已结束）暂时用不到
        status:
        {
            type: STRING(30),
        },
        status:
        {
            type: STRING(30),
        },
        learn_number: {
            type: INTEGER,
            default: 0,
        },
        // 课程开关（1开2结束班课）
        switch:
        {
            type: INTEGER,
            default: 1,
        },
        // 学习要求
        claim:
        {
            type: STRING(30),
        },
        // 考试安排
        examgear:
        {
            type: STRING(30),
        },
        // 学校
        school:
        {
            type: STRING(30),
        },
        
                // // 课件
                // courseware:
                // {
                //         type: STRING,
                // },
                // // 学生学习过此课程的表[]，数组存放的是student的id
                // students: {
                //     type: STRING,
                // },
        learn_number: {
            type: INTEGER,
            default: 0,
        },

        // 是否是热门课程
        popular: {
            type: INTEGER,
            default: 1, 
        },
        // 热门课程背景图
        popular_banner: {
            type: STRING,
            default: 'public/img/popular_banner/default.png	',
        },
        // 是否是推荐课程
        recommend: {
            type: INTEGER,
            default: 1, 
        },

        // 类课程id
        course_type_id: {
            type: INTEGER,
        },
        // 类课程id
        course_class_id: {
            type: INTEGER,
        },
        // 发布此课程的教师id
        teacher_id: {
            type: INTEGER,
        },
    },{
            timestamps: false,  //去除createAt updateAt
            freezeTableName: true, //使用自定义表名
            timestamps: false,  //去除createAt updateAt
            freezeTableName: true, //使用自定义表名
    })
    
    return course
}