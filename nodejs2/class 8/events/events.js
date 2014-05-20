var events = require('events')
//实例化事件对象
var emitter = new events.EventEmitter()
//注册事件监听1
emitter.on('someEvent',function(arg1,arg2){
	console.log('Linstener1',arg1,arg2)
})
//注册事件监听2
emitter.on('someEvent',function(arg1,arg2){
	console.log('Linstener2',arg1,arg2)
})
//触发事件
emitter.emit('someEvent','elephant',1991)