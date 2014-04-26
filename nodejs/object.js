var website = {}
website.domainName = "elephant"
website.name = "jason"
website.email = "elephant@gmail.com"
website.age = 3
website.click = 3000

console.log(website)

website.setDemainName = function(domainName){
	this.domainName = domainName
}

website.getDomainName = function(){
	return this.domainName
}

website.setDemainName("elephantzhai")
console.log(website.getDomainName())
console.log(website)


var website1 = {
	domainName:"www.elephant.com",
	name:"jason",
	email:"elephant@gmail.com",
	age:3,
	click:3000,

	setDemainName:function(dn){
		this.domainName = dn
	},

	getDomainName:function(){
		return this.domainName
	}
}

console.log(website1)


function WebSite(domainName,name,email,age,click){
	this.domainName = domainName
	this.name = name
	this.email = email
	this.age = age
	this.click = click

	this.setDemainName = function(domainName){
		this.domainName = domainName
	}
	
	this.getDomainName = function(){
		return this.domainName
	}
}

var website3 = new WebSite("www.elephant.com","elephant","elephant@gmail.com",3,3000)
console.log(website3)

function JSWebSite(domainName,name,email,age,click){
	this.domainName = domainName
	this.name = name
	this.age = age
	this.email = email
	this.click = click
}

JSWebSite.prototype.setDemainName = function(domainName){
	this.domainName = domainName
}

JSWebSite.prototype.getDomainName = function(){
	return this.domainName
}

var website4 = new JSWebSite("www.elephant.com","elephant","elephant@gmail.com",3,3000)
console.log(website4)
website4.setDemainName("nodejs.com")
console.log(website4.getDomainName())
console.log(website4)