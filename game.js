const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = new Image();
player.src = "https://cdn.jsdelivr.net/gh/LemboOFF/The-Ultimate-Bomber-of-26@main/player.png";

player.onload = function() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 800, 600);
    ctx.drawImage(player, 400, 300);
}