// Set the date we're counting down to
var countDownDate = new Date("July  20, 2021 0:0:0").getTime();
var iHours = 0 
var iMinutes = 0
var iSeconds = 0

//run first time
function firstTimeClock() {
    let now = new Date().getTime();
    let distance = countDownDate - now;    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log(document.querySelector(".clock-countdown>.s"))
    document.querySelector(".clock-countdown>.s").innerText = changeTimeText(seconds);
    document.querySelector(".clock-countdown>.m").innerText = changeTimeText(minutes);
    document.querySelector(".clock-countdown>.h").innerText = changeTimeText(hours);
    document.querySelector(".clock-countdown>.d").innerText = changeTimeText(days);
}
document.addEventListener("DOMContentLoaded", () => {
    firstTimeClock();
});
// Update the count down every 1 second
var x = setInterval(function () {
    iSeconds++;
    // Get today's date and time
    let now = new Date().getTime();
    // Find the distance between now and the count down date
    let distance = countDownDate - now;
    
    if (iSeconds === 60) {
        iMinutes++;
        iSeconds = 0;
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        document.querySelector(".clock-countdown>.m").innerText = changeTimeText(minutes);
        if (iMinutes === 60) {
            iHours++;
            iMinutes = 0;
            iSeconds = 0;
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            document.querySelector(".clock-countdown>.h").innerText = changeTimeText(hours);
            if (iHours === 24) {
                iHours = 0;
                iMinutes = 0;
                iSeconds = 0;
                let days = Math.floor(distance / (1000 * 60 * 60 * 24));
                document.querySelector(".clock-countdown>.d").innerText = changeTimeText(days);
            }
        }
    }
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelector(".clock-countdown>.s").innerText = changeTimeText(seconds);
    
  // Time calculations for days, hours, minutes and seconds
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("oclock-countdown").innerHTML = "EXPIRED";
  }
}, 1000);

function changeTimeText(time) {
    if (time < 10) {
        return `0${time}`
    }
    return time
}