'use strict';
const path = require('path');
// exports.mongoose = {
//     enable: true,
//     package: 'egg-mongoose',
// }

exports.cors = {
    enable: true,
    package: 'egg-cors',
};
/**
 * resc白名单
 */
exports.security = {
    domainWhiteList: ['http://localhost:8080'],
};

exports.session = true; // enable by default

exports.session = {
    key: 'EGG_SESS',
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true,
};
/**
 * 静态文件
 */
exports.static = {
    maxAge: 31536000,
    dir: [
        '$baseDir/app/public',
        '$baseDir/viw/public',
    ]
};

/**
 *  sequelize的 配置（mysql）
 */
exports.sequelize = {
    enable: true,
    package: "egg-sequelize"
};


// /**
//  * 七牛云
//  */
exports.qiniu = {
    enable: true,
    package: 'egg-qiniu-upload',
};

/**
 * POST参规则验证
 */
exports.validate = {
    package: 'egg-validate',
}



// pug模板引擎
exports.pug = {
    enable: true,
    package: 'egg-view-pug'
}

// socket
exports.io = {
    enable: true,
    package: 'egg-socket.io',
}

// egg-oss
exports.oss = {
    enable: true,
    package: 'egg-oss',
}

// egg-router-plus
exports.routerPlus = {
    enable: true,
    package: 'egg-router-plus'
};