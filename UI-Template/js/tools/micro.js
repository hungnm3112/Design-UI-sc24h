function testMicro() {
  "use strict";
  console.log("run");
  var h = document.querySelector(".error_msg");
  var btnStart = document.querySelector("#btnStart");

  var soundAllowed = function (stream) {
    var visualizer = document.getElementById("visualizer");
    var mask = visualizer.getElementById("mask");
    var path;
    //Audio stops listening in FF without // window.persistAudioStream = stream;
    //https://bugzilla.mozilla.org/show_bug.cgi?id=965483
    //https://support.mozilla.org/en-US/questions/984179
    window.persistAudioStream = stream;
    h.innerHTML = "Thanks";
    h.setAttribute("style", "opacity: 0;");
    let audioContent = new AudioContext();
    let audioStream = audioContent.createMediaStreamSource(stream);
    let analyser = audioContent.createAnalyser();
    audioStream.connect(analyser);
    analyser.fftSize = 1024;

    let frequencyArray = new Uint8Array(analyser.frequencyBinCount);
    visualizer.setAttribute("viewBox", "0 0 255 255");

    //Through the frequencyArray has a length longer than 255, there seems to be no
    //significant data after this point. Not worth visualizing.
    for (let i = 0; i < 255; i++) {
      path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("stroke-dasharray", "4,1");
      mask.appendChild(path);
    }
    var paths = document.querySelectorAll("#visualizer path");
    let doDraw = function () {
      requestAnimationFrame(doDraw);
      analyser.getByteFrequencyData(frequencyArray);
      let adjustedLength;
      for (let i = 0; i < 255; i++) {
        adjustedLength =
          Math.floor(frequencyArray[i]) - (Math.floor(frequencyArray[i]) % 5);
        paths[i].setAttribute("d", "M " + i + ",255 l 0,-" + adjustedLength);
      }
    };
    doDraw();
  };

  var soundNotAllowed = function (error) {
    switch (error.name) {
      case "NotFoundError":
        h.innerHTML =
          "Chúng tôi không tìm thấy microphone của bạn. Bạn hãy chắc chắn rằng nó đã được kết nối và đã được bật.";
        break;
      case "NotAllowedError":
        h.innerHTML =
          "Bạn chưa cấp phép cho trình duyệt truy cập vào microphone của bạn, vui lòng tắt trình duyệt và thử lại.";
        break;
      default:
        h.innerHTML =
          "Đã có lỗi xảy ra khi kiểm tra thiết bị của bạn, hãy thử lại bằng trình duyệt khác.";
    }
    btnStart.setAttribute("style", "display:none");
    document
      .querySelector(".microphone")
      .setAttribute("style", "background-color:unset");
    console.log(error);
  };
  btnStart.setAttribute("style", "display:none");
  let detectBrowser = DetectBrowser();
  //console.log(detectBrowser)
  switch (detectBrowser) {
    case "Google Chrome":
      navigator.getUserMedia({ audio: true }, soundAllowed, soundNotAllowed);
      break;
    case "Mozilla Firefox":
      navigator.mozGetUserMedia({ audio: true }, soundAllowed, soundNotAllowed) 
      break;
    default:
      navigator.webkitGetUserMedia({ audio: true }, soundAllowed, soundNotAllowed);
      break;
  }  
}
