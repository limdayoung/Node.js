//util 모듈 로딩
var util = require('util');

//부모 객체
function Parents(){
}

//부모 함수
Parents.prototype.sayHello = function(){
    console.log('Hello World, from Parent Class!');
}

var obj = new Parents();
obj.sayHello();

//자식 객체
function Child(){
}

//util의 inherits 이용해 자식이 부모를 상속받음
util.inherits(Child, Parents);

var obj2 = new Child();
obj2.sayHello();