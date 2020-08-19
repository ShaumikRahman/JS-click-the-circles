const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - document.getElementById('nav').clientHeight;

const size = 50;
const spawnzoneLeft = size * 2;
const spawnzoneRight = canvas.width - size * 2;
const spawnzoneTop = size * 2;
const spawnzoneBottom = canvas.height - size * 2;

let mousePosX;
let mousePosY;
let collisionCheckX;
let collisionCheckY;
let distance;
let numberOfCircles = 100;
let circleList = [];

document.addEventListener('keydown', function (e) {
    if (e.code == "Space") {
        location.reload();
    }
});

function getRand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < numberOfCircles; i++) {
    circleList[i] = {
        x: getRand(spawnzoneLeft, spawnzoneRight),
        y: getRand(spawnzoneTop, spawnzoneBottom)
    }
}

function drawCircle(xPos, yPos) {
    ctx.beginPath();
    ctx.arc(xPos, yPos, size, 0, 360);
    ctx.moveTo(0, 0);
    ctx.closePath();
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.strokeStyle = "red";
    ctx.stroke();
}

onclick = function (e) {
    mousePosX = e.clientX;
    mousePosY = e.clientY - document.getElementById('nav').clientHeight;

    for (let i = numberOfCircles - 1; i >= 0; --i) {
        collisionCheckX = circleList[i].x - mousePosX;
        collisionCheckY = circleList[i].y - mousePosY;
        distance = Math.sqrt(collisionCheckX * collisionCheckX + collisionCheckY * collisionCheckY);

        if (distance < size) {
            circleList.splice(i, 1);
            --numberOfCircles;
            i = -1;
        }
    }
}

function update() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (let i = 0; i < numberOfCircles; i++) {
        drawCircle(circleList[i].x, circleList[i].y);

        // onmousemove = function (e) {
        
        // }

        //console.log(`${mousePosX} and ${mousePosY}`);

    }
    requestAnimationFrame(update);
}

update();