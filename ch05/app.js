//같은 폴더 내 greeting.js 모듈 로딩
var greeting = require('./greeting');
//greeting 모듈의 hello 함수 사용
greeting.hello();



//같은 폴더 내 exercise.js 모듈 로딩
var Excersice = require('./exercise');
//생성자 함수를 통해 excersice 객체 생성
var excersice = new Excersice();
//excersice 객체의 함수 호출
excersice.run();