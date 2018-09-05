function sayHello(){
    console.log('Hello World');
}

//sayHello();

//3초 뒤 실행
// setTimeout(function(){
//     sayHello();
// }, 3*1000);

//2초마다 실행
setInterval(function(){
    sayHello();
}, 2*1000);