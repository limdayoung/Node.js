//util 모듈 로딩
var util = require('util');

//숫자형식
var str1 = util.format('%d + %d = %d', 1, 2, (1+2));
console.log(str1);

//문자형식
var str2 = util.format('%s %s', 'Hello','NodeJS');
console.log(str2);