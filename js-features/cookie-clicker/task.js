const image = document.getElementById("cookie");
const clicker = document.getElementById("clicker__counter");
const clickerSpeed = document.getElementById("clicker__counterspeed");

let score = 0;
let timeArr = [];
let res = 0;

function changeSizes() {
    score += 1;
    if(score % 2 == 0) {
        image.width = 200;
        calculation(Date.now(), timeArr[timeArr.length-1])
        timeArr.push(Date.now());
    } else {
        image.width = 250;
        calculation(Date.now(), timeArr[timeArr.length-1])
        timeArr.push(Date.now());
    }

    clicker.textContent = score;
    clickerSpeed.textContent = res;
}

function calculation(a, b) {
    res = (a - b) / 1000;
}

image.onclick = changeSizes;