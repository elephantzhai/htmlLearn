function add(domanName,name,email,age,click){
	var website = []
	website[0] = domanName
	website[1] = name
	website[2] = email
	website[3] = age
	website[4] = click

	return website
}

var domanName = "www.elephant.com"
var name = "elephant"
var email = "elephant@gmail.com"
var age = 3
var click = 3000

var website = add(domanName,name,email,age,click)

console.log(website)

var remove = function(domanName){
	console.log(domanName)
	return domanName
}

remove(domanName)

function output(domanName,name,email,age,click){
	console.log(domanName+"|"+name+"|"+email+"|"+age+"|"+click)
}

function read(callback,domanName,name,email,age,click){
	console.log("read");
	callback(domanName,name,email,age,click)
}

read(output,domanName,name,email,age,click)

function Website(d,n,e,a,c){
	var myDomanName,myName,myEmail,myAge,myClick

	function set(domanName,name,email,age,click){
		myDomanName = domanName
		myName = name
		myEmail = email
		myAge = age
		myClick = click
	}
	set(d,n,e,a,c)

	return [myDomanName,myName,myEmail,myAge,myClick]
}

var website = Website(domanName,name,email,age,click);
console.log(website)