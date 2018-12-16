module.exports = app => {
    const { router, controller } = app
    // 判断后台admin是否登陆
    const adminCheck = app.middlewares.adminCheck(app, app, app)
    // egg-router-plus
    const newsRouter = router.namespace('/admin')
    newsRouter.get('/login', 'admin.admin.showLogin')
    newsRouter.post('/login', 'admin.admin.ajaxLogin')
    // router.get('/admin/login', controller.admin.admin.showLogin)
    // router.post('/admin/login', controller.admin.admin.ajaxLogin)
    newsRouter.get('/home', adminCheck, 'admin.admin.showHome')
    newsRouter.get('/showUser', adminCheck, 'admin.admin.showUser') // 后台显示student pug
    newsRouter.get('/showCourse', adminCheck, 'admin.admin.showCourse') // 后台显示course相关 pug
    newsRouter.get('/addCourse', adminCheck, 'admin.admin.addCourse') // 后台添加course相关 pug
    newsRouter.get('/getUser', adminCheck, 'admin.admin.getUser')  // 后台获取用户
    // 删除指定的student id
    newsRouter.post('/delUser', adminCheck, 'admin.admin.delUser')
    // 修改用户资料
    newsRouter.post('/datums', adminCheck,'admin.admin.setDatum')
    // 头像上传 =》 测试版
    newsRouter.post('/upload', 'admin.admin.upload')

    /////////////// 2018/11/19new  =>还没添加到postman中
    newsRouter.get('/showBanner', adminCheck, 'admin.admin.showBanner') // 后台显示banner pug
    // 添加用户
    newsRouter.post('/addUser',  'admin.admin.addUser')
    // newsRouter.get('/addUser', adminCheck, admin.admin.addUser)
    // 退出后台
    newsRouter.post('/logout', 'admin.admin.logout')


    // react 后台
    newsRouter.post('/login', 'admin.admin.ajaxLogin')    // 登录后台
    newsRouter.get('/getUser', 'admin.admin.getUser')  // 获取用户



}