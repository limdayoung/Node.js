var fs = require('fs');
var path = '.';

//디렉토리 내 파일목록 
fs.readdir(path, function(err, files){
    if( err ){
        console.error('디렉토리 읽기 에러');
        return;
    }
    console.log('디렉토리 내 파일목록(Async)\n', files);
});