import Cookies from "js-cookie";

// const TokenKey = 'Admin-Token'

export function getToken(TokenKey) {
  return Cookies.get(TokenKey);
}

export function setToken(TokenKey, token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken(TokenKey) {
  return Cookies.remove(TokenKey, { path: "" });
  // Cookies.remove('name', { path: '' })
}
/**设置cookie
 * @param {cookie名}
 * @param {cookie值}
 * @param {设置cookie域}
 * @param {过期时间（天）} [varname]
 */
function setCookie(name, value, domain, day) {
  var date = new Date();

  date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * day);
  document.cookie =
    name + "=" + value + ";expires=" + date + ";domain=" + domain + ";path=/";
}

/**
 * 获取cookie
 * @return {[type]} [description]
 */
export function getCookie(name) {
  var data = document.cookie.split(";"),
    param = {};
  for (var i = 0; i < data.length; i++) {
    param[data[i].split("=")[0].replace(/\s/, "")] = data[i].split("=")[1];
  }
  return param[name];
}

/**
 * 删除cookie
 * name: 删除cookie名
 * domain: 所在的域
 */
export function delCookie(name, domain) {
  document.cookie =
    name +
    "=" +
    getCookie(name) +
    ";expires=" +
    new Date(1) +
    ";domain=" +
    domain +
    ";path=/";
}
