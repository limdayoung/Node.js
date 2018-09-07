// 경로
 
//path모듈 로딩
var pathUtil = require('path');

//parse를 이용해 파일의 정보 얻기
var parsed = pathUtil.parse('/Users/ldy/git/Node.js/ch03/sky.jpg');

//이미지 정보 : 루트, 폴더, 파일이름+확장자, 확장자, 파일이름
console.log(parsed);

//파일 이름
console.log(parsed.base);

//확장자
console.log(parsed.ext);

