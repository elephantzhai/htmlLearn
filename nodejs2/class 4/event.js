//声明事件对象
var EventEmitter = require('events').EventEmitter
var event = new EventEmitter()

//注册事件
event.on("some_event",function(){
	console.log("some_event")
})
//触发事件
setTimeout(function(){
	event.emit("some_event")
},1000)