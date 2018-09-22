var http = require('http'); //http 모듈 로딩
var fs = require('fs'); //파일시스템 모듈 로딩

http.createServer(function(req, res){
    
    //사진 접근
    fs.access('./cat.jpg', function(err){
        //파일 없을 경우, 404 에러 후 종료
        if(err){
            res.statusCode = 404;
            res.end();
            return;
        }
        //있을 경우, 사진을 response 후 종료
        fs.readFile('./cat.jpg', function(err, data){
            res.end(data);
        });
    });

}).listen(3000);