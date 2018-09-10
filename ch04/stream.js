//파일 시스템 모듈 로딩
var fs = require('fs');

//파일 시스템의 입력스트림과 입력될 파일 생성
var os = fs.createWriteStream('./output2.txt'); ///output.txt

//finish event on
os.on('finish', function(){
    console.log('finish!');
});

// //데이터 쓰기
// os.write('1234\n');
// os.write('5678\n');
// //스트림 닫기
// os.end('9\n'); // finish event

//stdin 키보드 입력받은 값을 입력스트림과 파이프 연결하여 파일에 작성
var is = process.stdin;
is.pipe(os);