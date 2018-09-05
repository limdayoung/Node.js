var fs = require('fs');

//로그파일 생성
var output = fs.createWriteStream('stdout.log');
var errorOutput = fs.createWriteStream('error.log');

var Console = require('console').Console;
var logger = new Console(output, errorOutput);

//stdout.log 에 작성됨
logger.info('info message');
logger.log('log message');

//error.log 에 작성됨
logger.warn('warning');
logger.error('error message');
