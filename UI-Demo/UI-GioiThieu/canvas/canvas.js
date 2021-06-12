document.addEventListener("DOMContentLoaded", () => {
  //Khung cho title
  function fillTitleCatalog(canvas) {
    if (canvas.getContext) {
      let ctx = canvas.getContext("2d");
      let gradient = ctx.createLinearGradient(20, 0, 220, 0);
      // Add three color stops
      gradient.addColorStop(0, "green");
      gradient.addColorStop(0.5, "cyan");
      gradient.addColorStop(1, "green");
      //line box
      ctx.beginPath();
      ctx.moveTo(14, 20);
      ctx.lineTo(9, 150);
      ctx.lineTo(300, 150);
      ctx.lineTo(300 - 20, 20);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();
    }
  }  
  if (Checker.isMobileLK()){
    let canvasAll = Array.from(document.querySelectorAll(".c-title-branch"));
    for (let canvas of canvasAll) {   
      fillTitleCatalog(canvas);      
    }
  } else {
    let canvasAll = Array.from(document.querySelectorAll(".c-title-branch"));
    for (let canvas of canvasAll) {
      fillTitleCatalog(canvas);
    }
  }

});
