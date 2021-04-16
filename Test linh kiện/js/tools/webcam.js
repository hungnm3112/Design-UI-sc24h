 function startup() {
  var width = 320; // We will scale the photo width to this
  var height = 0; // This will be computed based on the input stream
  var streaming = false;
  var video  = document.getElementById("video");

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
        document.getElementById("btnStart").setAttribute("style","display:none");
      }
    },
    false
  );
}
