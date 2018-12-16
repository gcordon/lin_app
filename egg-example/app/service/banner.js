'use strict';

const Service = require('egg').Service
const {
    SUCCESS,
    ERROR,
} = require('../util/util')

class BannerService extends Service {
    /**
     * 获取导航
     */
    async getBanner() {
        const {
            ctx
        } = this
        const getBanner = await ctx.model.Course.findAll({
            // order: [
            //     ['learn_number', 'DESC'],
            // ],
            where: { popular: 2 },
            limit: 5,
            attributes: ['id','title','banner','learn_number', 'popular_banner']
        })
        // getBanner.map(e => {
        //     let banner = e.banner                              // 数据库图片默认地址
        //     let path = 'public/img/banner/'                    // 公共目录地址
        //     let padLength = banner.length + path.length // 填充的长度
        //     banner.padStart(padLength, path)

        //     e.banner = banner.padStart(banner.length + path.length, path)
        // })
        return Object.assign(SUCCESS, {
            data: getBanner,
        })
    }
}


module.exports = BannerService