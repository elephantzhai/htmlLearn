var express = require('express');
var router = express.Router();

var crypto=require("crypto");
var User=require("../models/User");
var Post=require("../models/post")

/* GET home page. */
//root
router.get('/', function(req, res) {
    if(req.session.user){
        res.redirect("/u/"+req.session.user.name);
    }else{
        Post.find(null,function(err,posts){
            if(err){
                posts=[];
            }
            res.locals.posts = posts
            res.render("index",{
                title:"首页"
            });
        });
    }

});
router.get('/u/:user', function(req, res) {
    User.find(req.params.user,function(err,user){
        if(!user){
            req.session.error="用户不存在";
            return res.redirect("/");
        }
        Post.find(user.name,function(err,posts){
            if(err){
                req.session.error=err;
                return req.redirect("/");
            }
            res.locals.posts = posts
            res.render("user",{
                title:user.name
            })
        });
    });
});
//发表信息
router.post('/post', function(req, res) {
    var currentUser=req.session.user;
    var post=new Post(currentUser.name,req.body.post);
    post.save(function(err){
        if(err){
            req.session.error=err;
            return res.redirect("/");
        }
        req.session.success="发表成功";
        res.redirect("/u/"+currentUser.name);
    });
});
//用户注册
router.get('/reg', function(req, res) {
    res.render('reg', { title: '注册页面' });
});
//
router.post('/Reg', function(req, res) {
    //检验用户两次输入的口令是否一致
    if(req.body["password-repeat"]!=req.body['password']){
        req.session.error="两次输入的口令不一致";
        return res.redirect("/reg");
    }
    //生成口令的散列值，我们使用md5加密
    var md5=crypto.createHash('md5');
    var password=md5.update(req.body.password).digest("base64");
    //声明需要添加的用户
    var newUser=new User({
        name:req.body.username,
        password:password
    });
    User.find(newUser.name,function(err,user){
        //如果用户已经存在
        if(user){
            req.session.error="该用户已经存在";
            return res.redirect("/reg");
        }
        //如果不存在则添加用户
        newUser.save(function(err){
            if(err){
                req.session.error=err;
                return res.redirect("/reg");
            }
            req.session.user=newUser;
            req.session.success="注册成功";
            res.redirect("/");
        })
    })
});
//用户登录
router.get('/login', function(req, res) {
    res.render('login', { title: '登录页面' });
});

router.post('/login', function(req, res) {
    //将登录的密码转成md5形式
    var md5=crypto.createHash("md5");
    var password=md5.update(req.body.password).digest("base64");
    //验证用户
    User.find(req.body.username,function(err,user){
        //首先根据用户名查询是否存在
        if(!user){
            req.session.error="用户不存在";
            return res.redirect("/login");
        }
        //验证密码是否正确
        if(user.password!=password){
            req.session.error="用户密码错误";
            return res.redirect("/login");
        }
        req.session.user=user;
        req.session.success="登录成功";
        res.redirect("/u/"+user.name);
    })
});
//用户退出
router.get('/logout', function(req, res) {
    req.session.user=null;
    req.session.success="退出成功";
    res.redirect("/");
});

module.exports = router;
