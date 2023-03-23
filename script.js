let hour, minute, second, date, rotateHour, rotateMinute, rotateSecond;
const hourHand = document.querySelector(".hourHand");
const minuteHand = document.querySelector(".minuteHand");
const secondHand = document.querySelector(".secondHand");
const tickSound = new Audio("tick_sound.mov")

setInterval(()=>{
    date = new Date();
    hour = date.getHours();
    minute = date.getMinutes();
    second = date.getSeconds();
    rotateHour = (hour*30) + (minute*1/2) + (second*1/120) + "deg";
    rotateMinute = (minute*6) + (second*1/10) + "deg";
    rotateSecond = (second*6) + "deg";
    hourHand.style.setProperty("--rotate-hour", rotateHour);
    minuteHand.style.setProperty("--rotate-minute", rotateMinute);
    tickSound.play();
    secondHand.style.setProperty("--rotate-second", rotateSecond);
},1000);




// For rotation of the Hour hand
// 1hour = 30deg
// 60min = 30deg - > 1min = 1/2deg
// 60*60 sec = 30deg -> 1/120deg

// For rotation of the Minute hand
// 60min = 360deg -> 1min = 6deg
// 60sec = 6deg -> 1sec = 1/10deg

// For rotation of the Second hand 
// 60sec -> 360deg -> 1sec = 6deg