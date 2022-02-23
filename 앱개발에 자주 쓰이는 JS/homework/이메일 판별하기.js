function checkEmail(email) {
  //이메일 정규식
  var emailRule =
    /([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if (!emailRule.test(email)) {
    console.log("이메일이 아닙니다");
  } else {
    console.log("이메일이 맞습니다");
  }
}
checkEmail("gunhee21@gmail.c");
checkEmail("gunhee21@gmail.com");
checkEmail("gunhee21#gmail.com");
checkEmail("gunhee21@gmail");

// indexOf 사용
function checkEmail(email) {
  if (email.indexOf("@") < 0) {
    console.log("이메일이 아닙니다.");
  } else {
    console.log("이메일이 맞습니다");
  }
}

checkEmail("gunhee21@gmail.com");
checkEmail("gunhee21#gmail.com");
