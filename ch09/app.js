var http = require('http');
var querystring = require('querystring');

var movieList = [{title : '스타워즈4', director : '조지루카스'}];

var server = http.createServer(function(req, res){
    
    //요청 메소드가 POST일 경우
    if(req.method.toLowerCase() == 'post'){
        addNewMovie(req, res);
    }
    //요청 메소드가 get이면 화면에 목록 출력
    else{
        showList(req, res);
    }
}).listen(3000);

//GET 요청
function showList(req, res){
    res.writeHeader(200, {'Content-Type' : 'text/html; charset=UTF-8' });
    res.write('<html>');
    res.write('<meta charset="UTF-8">');
    res.write('<body>');
    res.write('<h3>Favorite Movies</h3>');
    res.write('<div><ul>');

    movieList.forEach(function(item){
        res.write('<li>'+ item.title + '(' + item.director + ')</li>');
    }, this);

    res.write('</ul></div>');

    res.write(
        '<form method="post" action="."><h4> 새 영화 입력</h4>' +
        '<div><input type="text" name="title" placeholder="영화제목"></div>'+
        '<div><input type="text" name="director" placeholder="감독"></div>'+
        '<input type="submit" value="제출">'+
        '</form>'
        );
    res.write('</body>');
    res.write('</html>');
    res.end();
}

//POST 요청
function addNewMovie(req, res){
    var buffer = '';
    req.on('data', function(chunk){
        buffer += chunk;
    });
    req.on('end', function(){
        var query = querystring.parse(buffer); //쿼리 : title=OO&director=OO
        var title = query.title;
        var director = query.director;

        movieList.push({title : title, director : director});
        
        //새로고침 시 재전송되는 문제점 발생
        //res.end('Success');

        //PRG패턴(POST-REDIRECT-GET)으로 데이터 전송 후 페이지 이동
        res.statusCode = 302;
        res.setHeader('Location', '.'); //GET 요청
        res.end();
    });
}