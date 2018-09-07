//파일 시스템
var fs = require('fs');

var file = 'helloWorld.txt';

//파일 접근 가능 확인하기 (비동기식)
//접근모드 (접근 불가능하면 에러 발생)
// - fs.F_OK 존재 확인
// - fs.R_OK 읽기 확인
// - fs.W_OK 쓰기 확인
// - fs.X_OK 실행 확인
fs.access(file, fs.F_OK, function(err){
    if(err){
        console.error('파일 없음 : ', err);
        process.exit(1);
    }else{
        console.log('파일존재');
        
        //파일 상태 얻기 (비동기식)
        fs.stat(file, function(err, stats){
            if(err){
                console.error('File Stats Error',err);
                return;
            }

            console.log('Create : ', stats['birthtime']); //생성일
            console.log('size : ',stats['size']); //크기(byte)
            console.log('isFile : ', stats.isFile()); //파일 여부
            console.log('isDirectory : ', stats.isDirectory()); //디렉토리 여부
            console.log('isBlockDevice : ', stats.isBlockDevice());
            
            //파일 상태 확인 후 읽기
            if( stats.isFile()) {
                fs.readFile(file, function(err, data){
                    if(err){
                        console.error('File Read Error : ', err);
                        return;
                    }

                    // encoding 을 작성하지 않으면 Buffer를 String으로 변환
                    var str = data.toString('utf-8');
                    console.log('File Contents : ', str);
                });
            } 
        });
    }
});