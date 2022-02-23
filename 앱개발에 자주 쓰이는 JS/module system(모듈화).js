// export는 자바스크립트의 값, 함수, 딕셔너리(객체) 또는 자바스크립트 파일 자체를 외부로 내보내는 키워드 이고
// import는 반대로 자바스크립트 파일 안으로 가져오는 키워드 입니다.

//times, plusTwo 함수를 외부로 내보낼 준비를 합니다.
export function times(x) {
  return x * x;
}
export function plusTwo(number) {
  return number + 2;
}

//   외부의 index.js 파일에서 util.js에서 내보낸 함수들을 사용하는 모습입니다.
import { times, plusTwo } from "./util.js";
console.log(times(2));
console.log(plusTwo(3));

// util.js 파일에 export default 키워드를 앞에 둔 하나의 함수가 있다고 가정해보겠습니다
// in util.js
export default function times(x) {
  return x * x;
}
// in app.js
import k from "./util.js";
console.log(k(4)); // returns 16

// 이렇게 export default로 선언한 함수는 해당 파일에서 유일해야 하며,
// 가져올 땐 이름을 달리해서 가져와서 사용 할 수 있습니다.
