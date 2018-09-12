//클래스
function Excercise(){

}

//함수
Excercise.prototype.run = function(){
    console.log('run!');
}

//하나의 클래스 모듈 생성
module.exports = Excercise;