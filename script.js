const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight - document.getElementById('nav').clientHeight;

const size = 33;

let mousePosX;
let mousePosY;
let collisionCheckX;
let collisionCheckY;
let distance;

function drawCircle(xPos, yPos) {
    ctx.beginPath();
    ctx.arc(xPos,yPos,size,0,360);
    ctx.moveTo(0,0);
    ctx.closePath();
    ctx.fillStyle = 'white';
    ctx.fill();
}

drawCircle(200,300);

function update() {

    onmousemove = function (e) {
        mousePosX = e.clientX;
        mousePosY = e.clientY - document.getElementById('nav').clientHeight;
    }

    collisionCheckX = 200 - mousePosX;
    collisionCheckY = 300 - mousePosY;
    distance = Math.sqrt(collisionCheckX * collisionCheckX + collisionCheckY * collisionCheckY);

    if (distance < size) {
        console.log("test");
    }
    
    //console.log(`${mousePosX} and ${mousePosY}`);

    requestAnimationFrame(update);
}
update();

