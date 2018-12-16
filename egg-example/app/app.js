// 启动时创建数据库表

'use strict';

module.exports = app => {
  app.beforeStart(async function() {
    // 应用会等待这个函数执行完成才启动
    await app.model.sync();
  });
  app.beforeStart(async => {
      // 应用会等待这个函数执行完才启动
      app.cities = await app.curl('http://example.com/city.json', {
        method: 'GET',
        dataType: 'json',
      });
  })
};