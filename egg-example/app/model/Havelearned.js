/**
 * @param {学生学习过的课程}
 */
var stduent = require('./student')
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

    const havelearned = app.model.define('havelearned', {
        id:
        {
            type: INTEGER,
            primaryKey: true, // primaryKey主键
            autoIncrement: true, // autoIncrement 自动递增
        },
        // 学生id
        student_id:
        {
            type: INTEGER,
        },
        // 经验
        experience:
        {
            type: INTEGER,
        },
        // 进度
        schedule:
        {
            type: INTEGER,
        },
        // 对应的子课程id
        course_child_id:
        {
            type: INTEGER,
        },
        // 对应的任务id
        task_id:
        {
            type: INTEGER,
        },
        // 对应的任务id经验
        task_id_experience:
        {
            type: INTEGER,
        },
        // 对应的投票id
        vote_id:
        {
            type: INTEGER,
        },
        // 对应的投票id经验
        vote_id_experience:
        {
            type: INTEGER,
        },
        // 对应的头脑风暴id
        brainstorming_id:
        {
            type: INTEGER,
        },
        // 对应的头脑风暴id经验
        brainstorming_id_experience:
        {
            type: INTEGER,
        },
        // 对应的讨论id
        discuss_id:
        {
            type: INTEGER,
        },
        // 对应的讨论id经验
        discuss_id_experience:
        {
            type: INTEGER,
        },
        // 对应的测试id
        testing_id_experience:
        {
            type: INTEGER,
        },
        // 对应的测试id经验
        testing_id_experience:
        {
            type: INTEGER,
        },
    }, {
            timestamps: false,  //去除createAt updateAt
            freezeTableName: true, //使用自定义表名
        })
        
    return havelearned
}