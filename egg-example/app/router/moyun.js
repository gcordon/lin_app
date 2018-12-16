module.exports = app => {
    const { router, controller } = app

    // egg-router-plus
    const newsRouter = router.namespace('/api')
    
    // 获取班课资料
    newsRouter.get('/getmaterial', 'moyun.getMaterial')
    // 退出班课
    newsRouter.post('/outcourse', 'moyun.outCourse')

    // 获取班课消息
    newsRouter.get('/getmessage', 'moyun.getMessage')
    // 获取成员
    newsRouter.get('/getmember', 'moyun.getMember')
    ///****************成员小组方案管理*** */
        // 创建成员小组方案管理
        newsRouter.post('/setmemberGroup', 'memberGroup.setMemberGroup')
        // 获取成员小组方案管理 （老师学生都一样）
        newsRouter.get('/getmembergroup','memberGroup.getMemberGroup')
        // 获取指定成员方案管理id
        newsRouter.get('/getmembergroupOne', 'memberGroup.getmeMberGroupOne')
        // 删除指定成员方案管理id
        newsRouter.post("/delmembergroupOne",'memberGroup.delmeMberGroupOne')
        // 编辑指定成员方案管理id
    newsRouter.post("/editbergroupOne", 'memberGroup.editbergroupOne')
        

    // 获取资源
    newsRouter.get('/getcourseware', 'moyun.getCourseWare')

    ///////////////*******************查询对应的子课程id和token身份 (1学生2老师)************* */
    newsRouter.get('/checkdecide', 'moyun.Checkdecide')

    // 编辑课程（学习要求、考试安排）
    newsRouter.post('/editcourse', 'moyun.editCourse')

/*****************其他课件***************** */
    // 获取其他课件
    newsRouter.get('/getothercourseware', 'moyun.getOtherCourseware')
    // 写入其他课件（图片、连接、视频 =》 用传递的参数type 来判断，再使用指定的service）
    newsRouter.post('/setothercourseware', 'moyun.setOtherCoursewareImage')
    // 删除指定的指定其他课件id
    newsRouter.post('/delothercourseware', 'moyun.delOtherCourseware')
/*****************其他课件***************** */

    /****************获取蓝墨云活动*************** */

    // 查询指定子课程id下的活动
    newsRouter.get('/getactivity', 'activity.getActivity')
    // 获取指定子课程id下的活动=》不同的活动
    newsRouter.get('/editactivity', 'activity.editActivity')
    // 更新指定子课程id下的活动=》不同的活动
    newsRouter.post('/updatectivity', 'activity.updateActivity')
    // 修改指定子课程id下的活动的状态(status) 未开始wait经行conduct结束end
    newsRouter.post('/updatectivitystatus', 'activity.updateActivityStatus')
    // 删除活动 =》 
    newsRouter.post('/delactivity', 'activity.delactivity')
    /****************获取蓝墨云活动*************** */

    // 踢出指定子课程id下的指定成员id
    newsRouter.post('/delmember', 'moyun.delMember') 


    /**
     * @name 删除指定的蓝墨云课件（总 || 类 || 子） 
     * @param{courseware_total}
     * @param{courseware_class}
     * @param{courseware_child}
     */
    newsRouter.post('/delcourseware', 'moyun.delCourseware')
} 
