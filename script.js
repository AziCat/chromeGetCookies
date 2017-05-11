/**
 * 在ContentScript中不能调用chrome.*API
 * 发送请求从backgroud.js中获取cookies
 */
chrome.extension.sendRequest("getCookies", function(response) {
    console.log(response);
    //localStorage.setItem("cookies",response);
    sessionStorage.cookies = response;
});



document.addEventListener('DOMContentLoaded', function() {
  alert("init")
});
