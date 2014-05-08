var hello = require('./singleobject')
var he1 = new hello()
he1.setName('dog')
he1.sayHello()

var he2 = new hello
he2.setName('cat')
he2.sayHello()
