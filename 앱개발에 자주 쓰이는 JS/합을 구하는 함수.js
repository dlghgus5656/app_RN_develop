function get_sum(n) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += i; // sum을 i만큼 증가시켜라. sum = sum + i 와 동일!
  }
  return sum;
}

let result = get_sum(10); // return 결과인 sum이 result에 저장
console.log(result); // 45를 출력
