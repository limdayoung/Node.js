var fs = require('fs');

//파일 생성 및 데이터 저장
fs.writeFile('textData.txt', 'Hello World', function(err){
    if (err){
        console.error('파일 저장 실패 : ', err);
        return;
    }
    console.log('파일 저장 성공');
});