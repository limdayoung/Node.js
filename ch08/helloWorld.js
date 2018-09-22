//http 모듈 로딩
var http = require('http');

//server 생성
var server = http.createServer();

//client로부터 요청 받았을 때 request 이벤트 처리
server.on('request', function(req, res){

    res.write('Hello World'); //응답 메세지 작성
    res.end(); //응답 메세지 작성 종료

});

server.listen(3000);