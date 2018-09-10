//쿼리스트링 모듈 로딩
var querystring = require('querystring');

var str = 'group=EXID&name=하니&since=';
var parsed = querystring.parse(str);

//쿼리 객체
console.log(parsed);

//쿼리 상세 검색
console.log('group : ', parsed.group); //EXID
console.log('name : ', parsed.name); //하니
console.log('since : ', parsed.since); //
console.log('friend : ', parsed.friend); //undefined