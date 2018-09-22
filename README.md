# Node.js

## source : 티아카데미(Tacademy) https://tacademy.skplanet.com/

## Node.js API Docs : https://nodejs.org/api/

### ch01) Node.js란
    비동기 방식으로 자바 스크립트 언어를 이용해서 네트워크 애플리케이션 플랫폼 제작에 적합한 프레임워크

### ch01) 기본 모듈, 확장 모듈
    -기본 : 별도의 설치 과정 없이 사용할 수 있는 모듈로, Node.js와 함께 설치됨
    -확장 : npm으로 별도 설치

### ch02) 전역객체(global)
    global 모듈에 속하는 객체와 함수로, 모듈 로딩 과정없이 사용 가능
    ex) console, process, require, module, exports, timeout 함수, Buffer 클래스, _filename, _dirname
    
### ch02) 프로세스/ 타이머/ 콘솔/ 유틸리티/ 이벤트
    -프로세스 : 애플리케이션 프로세스 실행 정보 (실행 환경, 버전, cpu와 플랫폼 정보 등)
    -타이머 : 함수인 setTimeout()이나 setInterval() 함수를 이용해서 일정 시간 뒤에 동작하거나, 주기적으로 동작하는 기능 작성
    -콘솔 : 콘솔 화면에 로그, 실행시간 측정, 로그파일 생성
    -유틸리티 : format 이용해 형식 문자열 작성 가능, inherit 로 class간 상속 가능
    -이벤트 : EventEmitter - 등록(on), 한번만 사용(once), 강제발생(emit) 등 이벤트 정의해서 사용, 이벤트 상속하여 사용 가능

### ch03) 경로/ 파일 시스템/ 버퍼
    -경로 : 파일, 디렉토리의 경로 정보 얻기 - 루트, 폴더, 파일이름+확장자, 확장자, 파일이름
    -파일 시스템 : 파일, 디렉토리 다루기 - 읽기, 쓰기, 접근 확인, 파일 목록 얻기, 상태 얻기
    -버퍼 : 2진 데이터 다루는 타입

### ch04) 스트림/ url/ 쿼리스트링/ 클러스터
    -스트림 : 스트림을 이용한 데이터 송신, 읽기, 쓰기
    -url : url 파싱 / 쿼리스트링 : 쿼리 객체와 상세 검색
    -클러스터 : 멀티 프로세서의 장점 살려줌

### ch05) npm(모듈관리)
    npm : node와 함께 설치됨, 모듈 설치/검색/정보 보기/업데이트/삭제
    전역 설치 : 모든 프로젝트에서 사용 가능, Node.js의 중앙 라이브러리에 설치 lib/node_modules, 관리자 권한 필요. -g옵션
                유틸성 mocha, nodemon 전역 설치 권장
                작성) npm install -g 모듈이름
    지역 설치 : 프로젝트마다 설치, 현재 폴더 내 node_modules 폴더
                개발 필수 라이브러리 & 특정 버전이 필요한 경우 지역 설치 권장
                작성) npm install 모듈이름, 패키지 정보 기록) npm install 모듈이름 --save

### ch05) nodemon/ 모듈 만들기
    -nodemon : 자동으로 재시작해주는 기능, 작성) nodemon 파일명.js
    -모듈 만들기 : 모듈로 만들어 소스 코드 분리. 작성) module.exports 로딩) require('./파일명);

### ch06) 콜백/ Async/ Promise
    -콜백 : 비동기 방식 함수의 결과를 처리할 때 사용
    -Async, Promise : 비동기 동작의 흐름 제어

### ch07~8) HTTP 통신, 서버
    -통신 : 요청과 응답의 메세지(라인, 헤더, 바디), 서버 생성
    -서버 : 클라이언트의 요청(request) 분석, 서버의 응답(response) 전송
