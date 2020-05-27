var module1=require("./module/module1.js")
var module2=require("./module/module2.js")
var module3=require("./module/module3.js")
var uniq=require("uniq")

module1.foo();
module2()
module3.foo()

console.log(uniq([1,2,2,3,4]))