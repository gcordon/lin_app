module.exports = app => {
    const { router, controller } = app

/****后台pug模板***/
require('./router/admin')(app)
/****后台pug模板***/
    router.get('/', 'test.home')
    router.post('/api/fangkui', 'test.fangkui')
    router.redirect('/index', '/');
    router.get('/fire', 'test.fire')

    /**
     * @argument 测试
     * router.get('/home', controller.home.index)
    //  app.router.get('homepage', '/', 'home.index');
    //  app.router.post('postdata', '/post', 'home.post');
    //  app.router.get('session', '/session', 'home.session');
    //  app.router.get('user', '/user', 'home.user');
    //  app.router.get('httpclient', '/httpclient', 'home.httpclient');
     */
    // require('./controller/login') // 登陆系统
    /**
    * @augments {middleware} 中间件
    * 
    */
    // 判断用户是否登陆
    const check = app.middlewares.check(app, app, app)
    
    require('./router/student')(app) // 登陆关联路由
    /**
     * @param {获取banner图片}
     */
    router.get('/api/banner', 'banner.getBanner')

    /**
     * @param {写入总课程}
     */
    router.post('/api/courseType', 'courseType.setCourseType')
     /**
     * @param {写入类课程}
     */
    router.post('/api/courseClass', 'courseClass.setCourseClass')
    /**
     * @param {写入子课程}
     * 创建课程
     */
    router.post('/api/course', 'course.setCourse')
        // 写入指定子课程id的公告
        router.post('/api/courseNotice', 'course.setCourseNotice')
        // 写入指定子课程id的课件
        router.post('/api/courseWare', 'course.setCourseWare')
        // 结束指定子课程id
        router.post('/api/endcoursechild', 'course.endCourseChild')
        

    /**
     * @param {写入评论}
     * ******    评论的bug=》需要 notice是[] 需要comment是[] 需要courseware是[]        *****
     * @argument {commentObj} {comemnt_id:评论者 id  comemnt_title:评论标题 comemnt_content:评论内容}
     */
    router.post('/api/courseComment', 'course.setCourseComment')


    /**
     * @param {获取所有课程}
     * @param {只获取总课程和类课程}
     */
    router.get('/api/courseAll', 'courseAll.getCourseAll')
    router.get('/api/adminCourseAll', 'courseAll.adminGetCourseAll')
    router.get('/api/adminGetCourse', 'courseAll.adminGetCourse')
    // adminGetCourseAll
    // getCourseAll
    /**
     * @param {获取指定总课程下的所有子课程}
     */
    router.get('/api/courseFindChildAll', 'courseAll.getCourseFindChildAll')
    /**
    * @param {获取所有子的课程}
    */
    router.get('/api/courseChildrenAll', 'course.getAllCourse')
    /**
     * @param {获取指定总课程id下的类课程}
     */
    router.get('/api/courseClass', 'courseAll.getCourseClassAll')
    /**
     * @param {获取指定类课程id下的子课程}
     */
    router.get('/api/courseChild', 'courseAll.getCourseChildnAll')
    /**
    * @param {获取指定子课程id}
    * @argument {number} id值
    */
    router.get('/api/courseOne',  'course.getOneCourse')
    /**
     * @param {获取热门子课程}
     * 
     */
    router.get('/api/heatCourseChild', 'course.gethHeatCourseChild')

    /**
     * @param {学习指定的课程}
     */
    router.post('/api/learnCourse',  'course.setLearnCourse')

    /**
     * @param {获取我的课程}
     */
    router.get('/api/myCourse', 'course.getMyLearnCourse')
    
    /**
     * @param {关键字搜索}   * 搜索（按课程名 || 学校）
     */
    router.get('/api/keywordsearch', 'course.keywordSearch')

    /**
     * @param {获取老师} {array形式}
     * @argument {id}
     */
    router.get('/api/teacher', 'teacher.getTeacher')

    /**
     * @param {写入消息中心}
     */
    router.post('/api/setMessageCenter', 'message.setMessageCenter')
        /**
         * @param {获取消息中心}
         */
        router.get('/api/getMessageCenter', 'message.getMessageCenter')
        /**
         * @param {删除指定的消息}
         */
        router.post('/api/delMessageCenter', 'message.delMessageCenter')
/***********************{start测试}******************************** */
    // 七牛云文件上传测试
    router.get('/test', 'test.test')

    router.get('/pug', 'test.pug')
    router.post('/pug', 'test.upload')

    router.get('/socket', 'test.socket')
    router.get('/socket_a', 'test.socket_a')
    router.get('/socket_b', 'test.socket_b')
    
    // token
    router.get('/token', 'token.token')
    
    
    // socket server api
    // app.io.route('chat', app.io.controller.chat.ping);

    app.io.route('chat', app.io.controller.chat.ping);
    // app.io.of('/').route('exchange', app.io.controller.chat.exchange)
/*****************************{end测试}******************************** */



    // sequelize validate 查询
    router.post('/tfdsafasd', 'test.tfdsafasd')
    // 模糊查询
    router.get('/search/:keyword', 'test.search')
    // 表单验证
    router.post('/api/v1/validate', 'test.validate')

    /**********************蓝墨云课程api********************* */
        // 创建任务
        router.post('/api/createTask', 'task.setTask')
        // 获取指定任务id
        router.get('/api/findTask/:id', 'task.getOneTask')
        router.get('/api/findTask', 'task.getOneTask')
        // 写入指定的任务id评论 
        router.post('/api/createTaskComment', 'taskComment.setOneTaskComment')
        

         /**
         * @param {设置指定的 蓝墨云 经验}
         * @argument {}
         */
        router.post('/api/setScore', 'task.setScore')
/**************************************tstart头脑风暴**************************************** */
        // 创建头脑风暴
        router.post('/api/createBrainstorming', 'brainstorming.setBrainstorming')
        // 更新头脑风暴
        router.post('/api/updateBrainstorming', 'brainstorming.updateBrainstorming')
        // 获取指定头脑风暴id
            router.get('/api/findBrainstorming/:id', 'brainstorming.getOneBrainstorming')
            router.get('/api/findBrainstorming', 'brainstorming.getOneBrainstorming')

            //  写入指定的头脑风暴id评论之前（点击指定的头脑风暴之后触发）查看此token的学生是否已有评论
            router.get('/api/getStudentBrainstormingComment', 'brainstormingComment.getStudentBrainstormingComment')
            // 写入指定的头脑风暴id评论 
            router.post('/api/createBrainstormingComment', 'brainstormingComment.setOneBrainstormingComment')
/**************************************end头脑风暴**************************************** */

/**************************************tstart讨论**************************************** */
        // 创建答疑/讨论
        router.post('/api/createDiscuss', 'discuss.setDiscuss')
        
        // 获取指定答疑/讨论id下的消息
        router.get('/api/getDiscussMessage', 'discussComment.getDiscussMessage')

        // 写入指定的头脑风暴id评论 
            // 用于websocket
            router.post('/api/createDiscussComment', 'discussComment.setOneDiscussComment')
/**************************************end讨论**************************************** */

/**************************************start活动库**************************************** */
    // 获取指定子课程id下的所有活动
    router.get('/api/getActivityLibrary', 'activityLibrary.getActivityLibrary')
    // 导入指定子课程id下的指定活动 ()
    router.post('/api/copyActivityLibrary', 'activityLibrary.copyActivityLibrary')
/**************************************end活动库**************************************** */
        
        // 投票
        require('./router/vote')(app)

        // 蓝墨云
        require('./router/moyun')(app)
        
        //  获取notice公告
        router.get('/api/getNotice', 'notice.getNotice')
    

}