// route_user.js
// user路由被server.js调用

var User = require("./user.js");
var format = require("./format.js");

//新增登录账号
function addUser(req, res){//POST——增
  // var user = new User({ userId : '52',  userName : 'thw',  password : 'thw',  realName : '田红玮',  cPhoto : ''});
  var user = new User({ 
    userId : req.body.userId, 
    userName : req.body.userName, 
    password : req.body.password, 
    realName : req.body.realName, 
    cPhoto : req.body.cPhoto
  });
  user.save(function (err, response) {
      if (err) {
          console.log("Error:" + err);
          res.send(format.wrong("保存失败！", err));
      }
      else {
          console.log("Res:" + response);
          res.send(format.right("保存成功！", response));
      }
  });
};

// 查询所有账号
function getAllUser(req, res){// GET——查
    User.find(function(err, response){
        if (err) {
            console.log("Error:" + err);
          res.send(format.wrong("查询失败！", err));
        }
        else {
            console.log("Res:" + response);
          res.send(format.right("查询成功！", response));
        }
    })
}

// 修改账号密码
function updateUser(req, res){// PUT——改
    var wherestr = {'userId' : req.query.userId};
    var updatestr = {'password': req.query.password};
    
    User.update(wherestr, updatestr, function(err, response){
        if (err) {
            console.log("Error:" + err);
          res.send(format.wrong("修改失败！", err));
        }
        else {
            console.log("Res:" + response);
          res.send(format.right("修改成功！", response));
        }
    })
}

function deleteUser(req, res){// DELETE——删
    var wherestr = {'userId' : req.query.userId};
    
    User.remove(wherestr, function(err, response){
        if (err) {
            console.log("Error:" + err);
          res.send(format.wrong("删除失败！", err));
        }
        else {
            console.log("Res:" + response);
          res.send(format.right("删除成功！", response));
        }
    })
}

//.....................
// 登录接口
function login(req, res){
  if(req.query.userName === undefined || req.query.password === undefined){
    res.send(format.wrong("登录失败！缺少参数", "{}"));
  }
  var wherestr = {'userName' : req.query.userName};
  var opt = {"userId": 1, "userName": 1, "password": 1 , "realName": 1, "_id": 0};
  
  User.find(wherestr, function(err, response){
    if (err) {
      console.log("Error:" + err);
      res.send(format.wrong("登录失败！网络不流畅", err));
    }
    else {
      console.log("Res:" + response);
      console.log(response[0].password);
      //判断密码是否一致
      if(response[0].password === req.query.password){
        res.send(format.right("登录成功！", response));
      }else{
        res.send(format.wrong("登录失败！密码不正确", "{}"));
      }
    }
  })
}


module.exports = {
  addUser: addUser,
  getAllUser: getAllUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
  login: login
}