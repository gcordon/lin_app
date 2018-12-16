const Controller = require('egg').Controller
const path = require('path')

class bannerController extends Controller {
    async getBanner () {
        const { 
            ctx, service  
        } = this
        
        // const fs = require('fs')
        // const paths = this.ctx.app.baseDir + '/app/public/img/banner'
        // var bannerPath = [];
        // function getPath() {
        //     // 处理完才Promise
        //     return new Promise( (resolve, reject) => {
        //         fs.readdir(paths, function (err, files) {
        //             if (err) {
        //                 reject(err)
        //             }
        //             files.forEach(function (file) {
        //                 bannerPath.push(`${paths}/${file}`)
        //                 resolve(bannerPath)
        //             });
        //         });
        //     })
        // }
        // await getPath()
        // ctx.body = {
        //     arrays: bannerPath
        // }

        // const paths = '/public/img/banner'  
        // const imgObj = ['public/img/banner/1.jpg', 'public/img/banner/2.jpg', 'public/img/banner/3.jpg']
        // ctx.body = imgObj

        const getBanner = await service.banner.getBanner()
        ctx.body = getBanner
        
    }
}

module.exports = bannerController