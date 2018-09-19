
function task1(callback){
    console.log('Task1 시작');
    
    setTimeout(function(){
        console.log('Task1 끝');
        callback();
    }, 3000);
}

function task2(callback){
    console.log('Task2 시작');

    setTimeout(function(){
        console.log('Task2 끝');
        callback();
    }, 2000);
}

//비동기 방식 callback으로 흐름 제어 - 하나의 task 완료 후 다음 task 실행
task1(function(){
    task2(function(){
        
    });
});