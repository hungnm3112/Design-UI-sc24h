document.addEventListener("DOMContentLoaded", () => {  
  let divTop = document.querySelector(".main-top");
  let strHtml = httpGet(`https://hung.demoweb184.xyz/UI-Demo/header-template.html`);  
  divTop.innerHTML = strHtml;
  let footer = document.querySelector('div.main-bottom')
  strHtml = httpGet('https://hung.demoweb184.xyz/UI-Demo/footer-template.html')
  footer.innerHTML = strHtml;
});

/************************************        http query               **********************************/
//httpGet
function httpGet(theUrl) {
  "use strict";
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.response;
}
