var name = "www.elephant.com"
var age = 3;
var male = true;

console.log(typeof(name));
console.log(typeof(age));
console.log(typeof(male));
console.log(typeof(undifined));
console.log(typeof(null));

name = "jason";
if(name ==="jason"){
	console.log("yes");
}else{
	console.log("no");
}

switch(name){
	case "1111":
		console.log("1111");
	break;

	case "jason":
		console.log("jason");
	break;

	default:
		console.log("null");
}

for(var i=0;i<10;i++){
	console.log(i);
}