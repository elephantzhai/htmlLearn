function compute(){
	console.log("I am is compute method")
}

function somethingcomplited(args){
	console.log("I am is somethingcomplite method")
	console.log(args)
}
function doSomething(args,callback){
	// somethingcomplited(args)
	// callback()
	somethingcomplited(args)
	process.nextTick(callback)
}

doSomething("12345",function onEnd(){
	compute()
})