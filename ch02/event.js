
//exit이라는 이름의 이벤트 등록
process.on('exit', function(code){
    console.log('exit event : ', code);
});

//exit이라는 이름의 한번만 사용가능한 이벤트 등록
process.once('exit', function(code){
    console.log('exit event with once : ',code);
});

process.emit('exit');
process.emit('exit',0);
process.emit('exit',1)