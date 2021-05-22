document.addEventListener("DOMContentLoaded", () => {  

  //Khung cho title
  function fillTitleCatalog(canvas) {    
    if (canvas.getContext) {
      let ctx = canvas.getContext("2d");
      let sizeLine = 130;
      let gradient = ctx.createLinearGradient(20, 0, 220, 0);
      // Add three color stops
      gradient.addColorStop(0, "green");
      gradient.addColorStop(0.5, "cyan");
      gradient.addColorStop(1, "green");
      //line box
      ctx.beginPath();
      ctx.moveTo(0, 150 - sizeLine);
      ctx.lineTo(0, 150);
      ctx.lineTo(300, 150);
      ctx.lineTo(300 - 20, 150 - sizeLine);
      ctx.closePath();
      ctx.fillStyle = gradient;
      ctx.fill();
    }
  }
  let canvasAll = Array.from(document.querySelectorAll(".c-title-branch"));
  for(let canvas of canvasAll){
    fillTitleCatalog(canvas);
  }
  
});
