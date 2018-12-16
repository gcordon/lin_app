module.exports = app => {
    const { router, controller } = app
    // egg-router-plus
    const newsRouter = router.namespace('/api')
    // 判断用户是否登陆
    
    newsRouter.post('/register', 'student.signRegister') // 注册
    newsRouter.post('/login', 'student.signLogin') // 登陆
    newsRouter.get('/logout', 'student.signLogout') // 退出
    
    const check = app.middlewares.check(app, app, app)
    newsRouter.post('/signEmailResetPassword', 'student.signEmailResetPassword') // 找回密码，（发送邮箱）
    newsRouter.post('/signValiteTokenEmailCode', 'student.signValiteTokenEmailCode') // 验证 验证码
    newsRouter.post('/signUpdateEmailResetPassword', 'student.signUpdateEmailResetPassword') // 找回密码，（验证验证码， 修改密码）

    newsRouter.post('/resetpassword', check , 'student.signResetPassword') // 重置密码，（无发送邮箱）
    // 前台修改头像
    newsRouter.post('/datum', 'student.setDatum') // 修改资料
    // 后台添加用户
    newsRouter.post('/avatar/:username', 'student.setAvatar') // 头像修改
    newsRouter.post('/avatar', 'student.setAvatar') // 头像修改


    newsRouter.post('/test', 'test.test') // 测试



    /****
     * @param{bug}
     * 压缩图片 （有@param{bug}）
     */
    newsRouter.get('/yasuo', 'student.yasuo') 
}