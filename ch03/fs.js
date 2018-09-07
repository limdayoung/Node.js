//파일 시스템

//fs모듈 로딩
var fs = require('fs');

//비동기식 파일읽기
fs.readFile('./HiNiceToMeetYou.txt', 'UTF-8', function(err, data){
    if(err){
        console.error('File Read Error : ',err);
        return;
    }
    console.log('File : ', data);
});

//동기식 파일읽기
try{
    var data = fs.readFileSync('./HiNiceToMeetYu.txt', 'utf-8');
    console.log(data);
}catch(error){
    console.error('Error : ', error);
}
