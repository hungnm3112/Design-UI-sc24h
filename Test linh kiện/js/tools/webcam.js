function startup() {
  var width = 320; // We will scale the photo width to this
  var height = 0; // This will be computed based on the input stream
  var streaming = false;
  video = document.getElementById("video");
  infoFPS = document.querySelector("div.info_FPS");
  console.log(navigator)
  
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(function (stream) {
      video.srcObject = stream;
      video.play();
    })
    .catch(function (err) {
      console.log("An error occurred: " + err);
    });

  video.addEventListener(
    "canplay",
    function (ev) {
      if (!streaming) {
        height = video.videoHeight / (video.videoWidth / width);
        video.setAttribute("width", width);
        video.setAttribute("height", height);
        streaming = true;
        document
          .getElementById("btnStart")
          .setAttribute("style", "display:none");

        videoF =  VideoFrame({
            id: "video",
            frameRate: 25,
            callback: function (frame) {              
              let currentTime = videoF.video.currentTime.toFixed(5);
              let time = currentTime - lastTime
              if(time>=1){
                lastTime=currentTime;                
                let fps = Math.round((frame-lastFrame)/time * 100) / 100
                infoFPS.innerHTML = `${fps} FPS`;
                lastFrame = frame;
              }
            },
          });  
        Change()  
      }
    },
    false
  );
}

// hàm lấy FPS
var infoFPS = null;
var videoF = null;
var lastTime = 0;
var lastFrame = 0;
function Change() {
  videoF.listen("frame");
  lastTime = videoF.video.currentTime.toFixed(5);  
  // if (videoF.video.paused) {
  //   videoF.video.play();
  //   videoF.listen("frame");
  // } else {
  //   videoF.video.pause();
  //   videoF.stopListen();
  // }
}
