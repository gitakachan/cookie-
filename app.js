let submit = document.querySelector("#submit");

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

submit.addEventListener("click", function (e) {
  // e.preventDefault();




  let id = document.querySelector("#id").value;
  let password = document.querySelector("#password").value;
  let remember = document.querySelector("#remember");

  if (remember.checked) {
    //有打勾記住帳號密碼
    setCookie("id", id, 30); //預設記住30天
    setCookie("password", password, 30);
  }
});
