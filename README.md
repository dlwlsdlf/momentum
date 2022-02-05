# momentum-clone
## 목표
>구글확장프로그램 [momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca) (todo리스트) 를 클론코딩하며, 
>프론트엔드 기초인 HTML.CSS.JavaScript 를 사용함으로써 
>기초적인 문법 작동원리를 학습하고, 위치기반 날씨API, 랜덤사진API 를 사용하여 API사용법을 학습함

## 기술스택
1. HTML
2. CSS
3. JavaScript

## 구현기능
<img width="80%" src="https://user-images.githubusercontent.com/51228787/152629039-6d505b23-d298-406f-a4d1-e1d30658ae5f.png"/>

### 1. API 를 이용한 배경이미지
### 2. 시간표시
### 3. 랜덤 격언 표시
### 4. Todo리스트 입력 삭제
### 5. API를 이용한 날씨,지역 표시
--------------------------------
시간표시
Date() 를 이용하여 시간을 받아옴 00:00:00: 의 형태로 출력하기 위해
padStart() 를 사용. padStart("1번째인자","2번째인자") 1번째인자의 수 만큼 2번째인자의 문자로 문자열을 채워줌
문자열에 사용할수 있기 때문에 String()형변환을 해주어야함. Date() 객체의 시간,분,초 를 받아와 
setInterval() 함수를 이용하여 1초마다 시간을 갱신하여 출력

---------------------------

랜덤 격언 표시 
quote(격언),author(작가) 을 key 값으로 가지는 객체를 담는 배열을 생성
Math.random() 함수를 이용하여 배열의 랜덤 인덱스를 가져와, 해당 내용을 innerText로 뿌려줌

-----------------------------


