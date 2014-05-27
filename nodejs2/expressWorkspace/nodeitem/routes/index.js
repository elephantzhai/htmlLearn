var express = require('express');
var router = express.Router();
var util = require('util')

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

router.get('/list',function(req,res){
   res.render('list', { title: '片段视图',items:['elephant',1991,'ouc'] });
})


router.get('/view',function(req,res){
    res.locals({
        headers:function(req,res){
            return req.headers
        },
        inspect: function(obj) {
            return util.inspect(obj, true)
        }
    })
    // res.locals.headers = req.headers
    // res.locals.inspect = 
    // app.locals({
    //           inspect: function(obj) {
    //             return util.inspect(obj, true);
    //           }
    //         });
    // headers = req.headers
    // res.render('view', { title: 'elephant',headers:req.headers})
    res.render('view', { title: 'elephant',layout:"layout2"})
})

router.get('/view2',function(req,res){
    // res.locals({
    //     headers:function(req,res){
    //         return req.headers
    //     }
    // })
    // headers = req.headers
    // res.render('view', { title: 'elephant',headers:req.headers})
    res.locals.headers = req.headers
    res.render('view', { title: 'elephant',layout:"layout2"})
    // res.render('view2', { title: 'elephant',layout:"layout2",headers:util.inspect(req.headers,true)})
})

module.exports = router;
