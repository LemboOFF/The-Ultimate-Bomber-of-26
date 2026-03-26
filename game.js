const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = new Image();
player.src = "https://lembooff.github.io/The-Ultimate-Bomber-of-26/player.png";

let x = 400;
let y = 300;
let speed = 3;

const keys = {};

document.addEventListener("keydown", function(e) {
    keys[e.key] = true;
});

document.addEventListener("keyup", function(e) {
    keys[e.key] = false;
});

function gameLoop() {
    if (keys["w"]) y -= speed;
    if (keys["s"]) y += speed;
    if (keys["a"]) x -= speed;
    if (keys["d"]) x += speed;

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 800, 600);
    ctx.drawImage(player, x, y);

    requestAnimationFrame(gameLoop);
}

player.onload = function() {
    gameLoop();
}
