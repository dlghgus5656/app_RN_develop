// 리스트(배열)를 순회하여 값을 꺼내 확인할 땐 다음과 같이 for 반복문을 사용했습니다.
let numbers = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// map은 리스트의 길이값을 몰라도 되며,
// for와는 반대로 리스트안에서 몇 번째에 있는 값인지 순서를 알려줍니다.

let numbers = [1, 2, 3, 4, 5, 6, 7];

numbers.map((value, i) => {
  console.log(value, i);
});

// 아래와 같다는 점 눈치 채셨나요

numbers.map(function (value, i) {
  console.log(value, i);
});

//1 0
//2 1
//3 2
//4 3
//5 4
//6 5
//7 6
