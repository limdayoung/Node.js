
function task1(callback) {
    console.log('Task1 시작');
    
	setTimeout(function() {
		console.log('Task1 끝');
		callback('error', 'Task1 결과'); // callback(에러, 결과)
	}, 3000);
}


function task2(callback) {
    console.log('Task2 시작');
    
	setTimeout(function() {
		console.log('Task2 끝');
		callback(null, 'Task2 결과');
	}, 2000);
}

//async 모듈 로딩
var async = require('async');
async.series([task1, task2], function(err, results) {
    
    //중간에 에러가 발생하면 task를 모두 실행시키지 않고 에러를 발생시킨다.
    if ( err ) {
		console.error('Error : ', err);
		return;
	}
	console.log('비동기 동작 모두 종료 :', results);
});
