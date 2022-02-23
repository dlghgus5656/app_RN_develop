// 딕셔너리를 짧게 만들어보기
// [기존 방식]

var name = "스파르타";
var job = "developer";

var user = {
  name: name,
  job: job,
};

console.log(user);
//{name: "스파르타", job: "developer"}

// [객체리터럴 방식]

var name = "스파르타";
var job = "developer";

var user = {
  name,
  job,
};

console.log(user);
//{name: "스파르타", job: "developer"}

// key: value 형태에서 단순히 변수명만 작성해주면 변수명과 동일한 필드가 생성되며,
// 그 변수값이 대입됩니다
