module.exports = app => {
    const { router, controller } = app
    // egg-router-plus
    const newsRouter = router.namespace('/api')
    // 创建投票
    newsRouter.post('/setVote', 'vote.setVote')
    // 获取投票
    newsRouter.get('/findVote', 'vote.getVote')
    newsRouter.get('/findVote/:id', 'vote.getVote')
    // 获取指定投票id
    // // 写入指定投票id选项
    // newsRouter.post('/createVote','vote.createVote')
    
    
    // 学生 选中投票
    newsRouter.post('/selectedVote', 'vote.selectedVote')
    
} 
