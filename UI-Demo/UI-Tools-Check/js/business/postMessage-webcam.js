document.addEventListener("DOMContentLoaded", () => {
  let h = 0;
  if (isMobileLK) {
    h = 395 
  } else {
    h = 184
  }
  let clientHeight = document.querySelector('body').clientHeight
  let scrollHeight = document.querySelector('body').scrollHeight
  window.parent.postMessage(
    {
      event_id: "tools_check",
      data: {
        location: "index",
        height: `${h}em`,
        clientHeight: `${clientHeight}px`,
        scrollHeight: `${scrollHeight}px`,
      },
    },
    "https://suachualaptop24h.com/ct-kiem-tra-webcam-online.html"
  );  
})