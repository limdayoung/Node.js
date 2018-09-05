
//이벤트 예외 처리
process.on('uncaughtException', function(code){
    console.log('uncaughtException');
})
sayHello();