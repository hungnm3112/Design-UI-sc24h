function DetectBrowser() {
  let detectBrowser = null;
  // CHROME
  if (navigator.userAgent.indexOf("Chrome") != -1) {
    detectBrowser = "Google Chrome";
  }
  // FIREFOX
  else if (navigator.userAgent.indexOf("Firefox") != -1) {
    detectBrowser = "Mozilla Firefox";
  }
  // INTERNET EXPLORER
  else if (navigator.userAgent.indexOf("MSIE") != -1) {
    detectBrowser = "Internet Exploder";
  }
  // EDGE
  else if (navigator.userAgent.indexOf("Edge") != -1) {
    detectBrowser = "Internet Exploder";
  }
  // SAFARI
  else if (navigator.userAgent.indexOf("Safari") != -1) {
    detectBrowser = "Safari";
  }
  // OPERA
  else if (navigator.userAgent.indexOf("Opera") != -1) {
    detectBrowser = "Opera";
  }
  // YANDEX BROWSER
  else if (navigator.userAgent.indexOf("YaBrowser") != -1) {
    detectBrowser = "YaBrowser";
  }
  // OTHERS
  else {
    detectBrowser = "Others";
  }
  return detectBrowser;
}
