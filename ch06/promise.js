function task1(fullfill, reject) { //성공, 에러
    console.log('Task1 시작');
    
	setTimeout(function() {
        console.log('Task1 끝');
        
		fullfill('Task1 결과');
		//reject('Error msg');
	}, 200);
}

//fullfill : 성공
function fullfilled(result) {
console.log('fullfilled : ', result);
}

//reject : 에러
function rejected(err) {
console.log('rejected : ', err);
}

//promise 이후의 동작 then
new Promise(task1).then(fullfilled, rejected);