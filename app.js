let submit = document.querySelector("#submit");
let id = document.querySelector("#id");
let password = document.querySelector("#password");
let remember = document.querySelector("#remember");

//set cookies
function setCookie(name, value, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);
  document.cookie = name + "=" + value + ";expires=" + date;
}

//get cookies
function getCookie(name) {
  let str = document.cookie;
  let arr = str.split("; ");
  for (let i = 0; i < arr.length; i++) {
    let nameValue = arr[i].split("=");
    if (nameValue[0] == name) {
      return nameValue[1];
    }
  }
}

//remove cookies
function removeCookie(name) {
  setCookie(name, 1, -1); //調用setCookie function，並將日期減ㄧ
}

//判斷cookie是否存在，如果存在則自動填入
if (getCookie("id")) {
  id.value = getCookie("id");
  password.value = getCookie("password");
}

submit.addEventListener("click", function () {
  //有打勾記住帳號密碼
  if (remember.checked) {
    let userId = id.value;
    let userPassword = password.value;
    setCookie("id", userId, 30); //預設記住30天
    setCookie("password", userPassword, 30);
  }
});
