// 최신 방식에서는 키보드에서 느낌표 옆에 있는 키인 백틱 ( ` ) 을 이용하여 문자열을 + 기호 없이 간단히 처리할 수 있습니다.
// 또한 백틱 ( ` ) 안에서는 여러 줄의 줄바꿈도 자유롭게 사용 가능합니다.

const id = "myId";
const url = `http://noahlog.tistory.com/login/${id}`;

const message = "줄바꿈을 하려면 \n 이 기호를 써야 했죠!";

const message = ` 줄바꿈도 마음대로
사용이 가능합니다. `;
