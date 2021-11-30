// 단어장 프로젝트 (기한 2021.11.22 ~ )

◎ 2021.11.24 // map(), filter() 개념정리 필요.

data.json에 더미 데이터를 구현하고 Day.js, DayList.js에 export함.
DayList.js :  map()함수를 이용하여 days의 모든 날에 함수를 실행하고 그곳에서
  나옷 값을 저장해 새로운 배열로 만들어줌
Day.js : worldList변수를 생성하고 filter()함수를 이용하여 day와 일치하는 word를 
  실행 -> worLlist.map()을 작성하여 불러들인 값에 key값에는 {word.id}를 주고
  원하는 값을 작성해 출력해준다.
gitbash 터미널에 npm install react-router-dom 설치
react-router-dom을 사용하는 이유는 페이지의 로딩 없이, 페이지에 필요한 컴포넌트를   
  불러와 렌더링 하여 보여주도록 도와줌. 이는 유저에게 빠르고 다이나믹함을 줌.
App.js에 'react-router-dom'로부터 {BrowserRouter, Route, Routes} import해줌



◎ 2021.11.24 // router v5 -> router v6 변경된점 확인
  (new) component가 사라지고 element로 바뀜
  (new) Route를 가진 부모 Switch가 Routes로 바뀜.
(문제발생) Routes로 변경 후 EmptyPage.js를 불러오지 못하는 상황 발생
(해결방안)  