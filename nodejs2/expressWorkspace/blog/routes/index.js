var express = require('express');
var router = express.Router();

/* GET home page. */
//root
router.get('/', function(req, res) {
  res.render('index', { title: 'Express'});
});
router.get('/u/:user', function(req, res) {
    res.render('index', { title: 'user' });
});
//发表信息
router.post('/post', function(req, res) {

});
//用户注册
router.get('/reg', function(req, res) {
    res.render('reg', { title: 'reg' });
});
//
router.post('/doReg', function(req, res) {

});
//用户登录
router.get('/login', function(req, res) {
    res.render('login', { title: 'login' });
});
//用户退出
router.post('/doLogin', function(req, res) {

});

router.get('/logout', function(req, res) {
    res.render('index', { title: 'logout' });
});

module.exports = router;
