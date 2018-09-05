//console.time을 이용한 실행시간 측정

//시작시간
console.time('TIMER');

var sum = 0;
for(var i = 1; i < 100000; i++){
    sum +=i;
}

console.log('sum : ',sum);

//종료시간
console.timeEnd('TIMER');