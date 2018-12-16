// exports.keys = 'linlinlin_eggJs' //<此处改为你自己的 Cookie 安全字符串>;
// exports.mongoose = {
//     url: 'mongodb://127.0.0.1:27017/test_egg_momgodb',
//     options: {},
// };

const path = require('path');
module.exports = appInfo => {
    const config = {}
    config.keys = 'linlinlin_eggJs' //<此处改为你自己的 Cookie 安全字符串>;
    // config.mongoose = {
    //     url: 'mongodb://192.168.117.188:27017/test_egg_momgodb',
    //     options: {},
    // }
        //  token 跨域问题，关闭安全  =》 https://eggjs.org/zh-cn/core/security.html#%E5%AE%89%E5%85%A8%E5%A8%81%E8%83%81csrf%E7%9A%84%E9%98%B2%E8%8C%83
    // config.security = { // 这里这个方法是强制关闭安全
    //     csrf: false
    // };
    // egg post 跨域
        config.security = {
            csrf: {
                ignoreJSON: true,
                enable: false,   // 关闭跨域
            },
            // crsf: false // 关闭跨域
            // 白名单
            // domainWhiteList: ['http://localhost:8080'],
        };
        config.cors = {
            origin: '*',
            allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
            credentials: true,
        }
    // sequelize 配置 mysql
    config.sequelize = {
        dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        //  编码格式
        dialectOptions: {
            charset: 'utf8mb4'
        },
        database: 'egg',
        // host: '192.168.117.188',
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: '',
    }
    // // 七牛云
    config.qiniu = {
        // I ussually set the key into `~/.zshrc`, and I can get the value via `process.env.key`, It's very safe~
        ak: 'U9Qz78WtZcGlhFPqf-68V-NWuAWfLNbyjtOltGOx',
        sk: '8D7AiboR82dgUNYR5tj5BENesy-Ara5ZzsgYkHaK',
        bucket: 'cordons',
        baseUrl: 'cordon.fenxd.cn',
        zone: 'China',
        app: true, // default value
        agent: false, //default value
    }
    // 中间间的使用
    // 验证token || 验证用户登陆
    // config.middleware = ['check']
    
    /**
     * @argument 统一错误处理
     */
    // 加载 errorHandler 中间件
    config.middleware = ['errorHandler'],
    // 只对 /api 前缀的 url 路径生效
    config.errorHandler = {
        match: '/api',
    },
    
    // pug模板引擎
    config.view = {
        mapping: {
            '.pug': 'pug',
        }
    }

    // egg-multipart 文件上传
    // 这里是限制只能上传的后缀
    //  https://github.com/eggjs/egg-multipart
    config.multipart = {
        fileSize: '50mb',
        whitelist: [
            // images
            '.png',
            '.jpg', '.jpeg', // image/jpeg
            '.config',
            // video
            '.mp3',
            '.mp4',
            '.avi',
            // '.webp',
        ]
    }
    // socket
    config.io = {
        init: {},
        namespace: {
            '/': {
                connectionMiddleware: ['auth'],
                packetMiddleware: ['filter'],
            },
        },
    };

    // 
    config.oss = {
        useAgent: true,
    }
    
    return config
}