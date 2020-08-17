const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - document.getElementById('nav').clientHeight;

const size = 33;
const spawnzoneLeft = size * 2;
const spawnzoneRight = canvas.width - size * 2;
const spawnzoneTop = size * 2;
const spawnzoneBottom = canvas.height - size * 2;

let mousePosX;
let mousePosY;
let collisionCheckX;
let collisionCheckY;
let distance;
let numberOfCircles = 3;
let circleList = [];

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
}

function update() {
    for (let i = 0; i < numberOfCircles; i++) {
        drawCircle(circleList[i].x, circleList[i].y)

        onmousemove = function (e) {
            mousePosX = e.clientX;
            mousePosY = e.clientY - document.getElementById('nav').clientHeight;
        }

        collisionCheckX = circleList[i].x - mousePosX;
        collisionCheckY = circleList[i].y - mousePosY;
        distance = Math.sqrt(collisionCheckX * collisionCheckX + collisionCheckY * collisionCheckY);

        if (mousePosX < spawnzoneLeft || 
            mousePosX > spawnzoneRight || 
            mousePosY < spawnzoneTop || 
            mousePosY > spawnzoneBottom) {
            // out of spawn zone
        }

        //console.log(`${mousePosX} and ${mousePosY}`);

    }
    requestAnimationFrame(update);
}

update();