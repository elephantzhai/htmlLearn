var website = [];
website[0] = "www.elephant.com";
website[1] = "www.baidu.com";
website[2] = 3;
website[3] = 3000;
console.log(website);

var website2 = ["www1","www2","www3"]
console.log(website2);

var website3 = new Array();
website3[0] = "111"
website3[1] = "222"

console.log(website3);


var website4 = new Array();

website4.push("11")
website4.push("22")

console.log(website4);

var website5 = new Array();

website5.unshift("1");
website5.unshift("2");
website5.unshift("3");

console.log(website5);

for(var i=0;i<website5.length;i++){
	console.log(website5[i]);
}