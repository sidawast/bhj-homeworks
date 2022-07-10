let timer = document.getElementById('timer');
console.log(timer.textContent);
let arrTimer = timer.textContent.split(':');
let sec, min, hour, days;
  for (let i = 0; i < arrTimer.length; i++) {
    let item = arrTimer.length-1-i;
    if(i == 0 && i != undefined) {sec = arrTimer[item]};
    if(i == 1 && i != undefined) {min = arrTimer[item]};
    if(i == 2 && i != undefined) {
       hour = arrTimer[item];
      if(hour == undefined) {hour = 0};
    };
    if(i == 3 && i != undefined) {days = arrTimer[item]}  
    
  }

document.addEventListener('DOMContentLoaded', function() {

function countdown() {
sec -= 1;
if(sec < 0 && min > 0) {
  sec = 59;
  min -= 1;
  if(sec < 0 && hour > 0) {
    min = 59;
    hour -= 1;
  }    
}

if(timer.textContent == "00:00:00") {
    sec = 0;  
    clearInterval(timerId);
    alert('Вы победили в конкурсе!');
}
timer.textContent = ("0" + hour).slice(-2) +':' + ("0" + min).slice(-2) +':'+ ("0" + sec).slice(-2);
}

let timerId = setInterval(countdown, 1000);

})
