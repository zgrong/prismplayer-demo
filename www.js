var express = require('express');
var path = require('path')
var app = express();

var PORT = process.env.PORT ? process.env.PORT : 3300

app.use('/', express.static(path.join(__dirname, './')))

//统一错误捕获:函数的四个参数一定要写全，顺序也要写对，一个都不能少
app.use(function(err, req, res, next) {
  console.error('出错了--->'+err.stack);
  res.status(500).end('出错了，请联系管理员');
});

//5.0 开启web服务器的监听
app.listen(PORT,function () {
    console.log('测试环境服务器启动, 请访问: http://localhost:'+PORT)
})