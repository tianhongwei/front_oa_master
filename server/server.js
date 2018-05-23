// RESTful风格 route方式访问

// var route_user = require('./routes/route_user');
var route_user = require('./route_user');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


// 创建 application/x-www-form-urlencoded 编码解析
app.use(bodyParser.urlencoded({ extended: false }));

app.route("/user")
.post(route_user.addUser)
.get(route_user.getAllUser)
.put(route_user.updateUser)
.delete(route_user.deleteUser);

app.route("/login")
.get(route_user.login);


var server = app.listen(8081, '192.168.1.235', function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})