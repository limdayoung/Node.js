# Node.js


## source : 티아카데미(Tacademy) https://tacademy.skplanet.com/



### 기본 모듈
    별도의 설치 과정 없이 사용할 수 있는 모듈로, Node.js와 함께 설치됨

### 전역객체
    global 모듈에 속하는 객체와 함수로, 모듈 로딩 과정없이 사용 가능
    ex) console, timeout, process

### 타이머
    함수인 setTimeout()이나 setInterval() 함수를 이용해서
    일정 시간 뒤에 동작하거나, 주기적으로 동작하는 기능 작성

### 콘솔
    콘솔 화면에 로그, 실행시간 측정, 로그파일 생성

### 유틸리티
    모듈 로딩 필요, 기본모듈이기 때문에 설치는 불필요
    format을 이용해 형식 문자열 작성 가능
    inherit 로 class간 상속 가능

### 이벤트
    EventEmitter - 등록(on), 한번만 사용(once), 강제발생(emit) 등
    이벤트 정의해서 사용, 이벤트를 상속받을 수 있다
