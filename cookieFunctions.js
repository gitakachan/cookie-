//set cookies
function setCookie(name, value, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);
  document.cookie = name + "=" + value + ";expires=" + date;
}

//setCookie("name", "Ann", 3);
//setCookie("age", "18", 1);

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
// console.log(getCookie("name"));

//remove cookies
function removeCookie(name) {
  setCookie(name, 1, -1); //調用setCookie function，並將日期減ㄧ
}
