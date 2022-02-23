// 딕셔너리에 있는 값을 꺼내 변수에 담을 때, 할당 과정을 거치기 않으면서 딕셔너리의 키 값 그대로 변수사용이 가능합니다.

//객체
let blog = {
  owner: "noah",
  url: "noahlogs.tistory.com",
  getPost() {
    console.log("ES6 문법 정리");
  },
};

//기존 할당 방식
let owner = blog.owner;
let getPost = blog.getPost();

//비구조 할당 방식
let { owner, getPost } = blog;
//각각 blog 객체의 owner , getPost() 의 데이터가 할당
//blog의 키 값과 이름이 같아야 해요!
//(예 - owner가 아니라 owner2를 넣어보세요! 아무것도 안 들어온답니다.)

// ** 앞으로 리액트 네이티브 앱을 만들며 가장 많이 사용할 방식**

//함수에서 비구조 할당 방식으로 전달된 딕셔너리 값 꺼내기
let blogFunction = ({ owner, url, getPost }) => {
  console.log(owner);
  console.log(url);
  console.log(getPost());
};

blogFunction(blog);
