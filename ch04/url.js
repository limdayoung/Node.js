//url 모듈 로딩
var url = require('url');

var urlStr = 'http://idols.com/hot/q?group=EXID&name=하니&since=';
var parsed = url.parse(urlStr,true); // true를 입력하면 쿼리 문자열 객체로 파싱

//파싱된 결과
//console.log(parsed);

//파싱될 결과에서 상세검색
//console.log(parsed.protocol); //http:
//console.log(parsed.host); //idols.com

//쿼리 객체
var query = parsed.query;
console.log(query);

//쿼리 상세검색
console.log(query.group); //EXID
console.log(query.name); //하니
console.log(query.since); //


