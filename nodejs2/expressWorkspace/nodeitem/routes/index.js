var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ELEPHANT' });
});

router.get('/abc',function(req,res){
    res.send('abc的路径已经设置好了')
})

router.get('/elephant',function(req,res){
   res.render('elephant', { title: 'ELEPHANT' });
})

router.get('/elephant2',function(req,res){
   res.render('elephant2', { title: 'ELEPHANT2',layout:"layout2" });
})

module.exports = router;
