function startup() {
  var width = 320; // We will scale the photo width to this
  var height = 0; // This will be computed based on the input stream
  var streaming = false;
  video = document.getElementById("video");
  infoFPS = document.querySelector("div.info_FPS");

  video.addEventListener(
    "canplay",
    function (ev) {
      if (!streaming) {
        height = video.videoHeight / (video.videoWidth / width);
        video.setAttribute("width", width);
        video.setAttribute("height", height);
        streaming = true;
        infoFPS.setAttribute("style", "opacity:0.5");
        document
          .getElementById("btnStart")
          .setAttribute("style", "display:none");

        videoF = VideoFrame({
          id: "video",
          frameRate: 25,
          callback: function (frame) {
            let currentTime = videoF.video.currentTime.toFixed(5);
            let time = currentTime - lastTime;
            if (time >= 1) {
              lastTime = currentTime;
              let fps = Math.round(((frame - lastFrame) / time) * 100) / 100;
              infoFPS.innerHTML = `${fps} FPS`;
              lastFrame = frame;
            }
          },
        });
        Change();
      }
    },
    false
  );

  function startWC(stream) {
    console.log(stream)
    window.persistAudioStream = stream;
    video.srcObject = stream;
    video.play();
  }
  function errorWC(err) {
    console.log("An error occurred: " + err);
    switch (err.name) {
      case "NotFoundError":
        err.msg =
          "Chúng tôi không tìm thấy webcam/máy ảnh của bạn. Bạn hãy chắc chắn rằng nó đã được kết nối và đã được bật.";
        break;
      case "NotAllowedError":
        err.msg =
          "Bạn chưa cấp phép cho trình duyệt truy cập vào webcam/ máy ảnh của bạn, vui lòng tắt trình duyệt và thử lại.";
        break;
      default:
        err.msg =
          "Đã có lỗi xảy ra khi kiểm tra thiết bị của bạn, hãy thử lại bằng trình duyệt khác.";
    }
    errorMsg(err);
  }

  let detectBrowser = DetectBrowser();
  console.log(detectBrowser)
  switch (detectBrowser) {
    case "Google Chrome":
      navigator.mediaDevices.getUserMedia({ video: true, audio: false}).then(startWC).catch(errorWC);
      break;
    case "Mozilla Firefox":
      navigator.mozGetUserMedia({ video: true, audio: false},startWC,errorWC);
      break;
    default:
      navigator.webkitGetUserMedia({ video: true, audio: false}).then(startWC).catch(errorWC);
      break;
  }  
}

// hàm lấy FPS
var infoFPS = null;
var videoF = null;
var lastTime = 0;
var lastFrame = 0;
function Change() {
  videoF.listen("frame");
  lastTime = videoF.video.currentTime.toFixed(5);
}

function errorMsg(error) {
  document.querySelector("div.error_msg").innerHTML = `<p>${error.msg}</p>`;
  document.querySelector("#btnStart").setAttribute("style", "display:none;");
  document
    .querySelector("#video")
    .setAttribute("style", "background-color:unset;");
  if (typeof error !== "undefined") {
    console.log(error);
  }
}
