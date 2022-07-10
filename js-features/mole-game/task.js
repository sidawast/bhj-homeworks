
'use strict'
let getHole = index => document.getElementById(`hole${index}`);
let dead = document.getElementById('dead');
let lost = document.getElementById('lost');
let score = parseInt(dead.textContent);
let losts = parseInt(lost.textContent);

function checkGame(dead, lost) {
    console.log(dead, lost);
    if (dead == 10) {
        alert("Вы победили!");
        location.reload();
    } else if (lost == 5) {
        alert("Вы приграли!");
        location.reload();
    };
};

for (let index = 1; index <= 9; index++) {
    getHole(index).onclick = function () {
        if (this.className.includes('hole_has-mole')) {
            score += 1;
            dead.textContent = score;
        } else {
            losts += 1;
            lost.textContent = losts;
        };
        checkGame(score, losts);
    };
};