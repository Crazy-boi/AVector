const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 300;

ctx.font = "25px Arial";

function write(s) {
    if (s instanceof AVector) {
        ctx.fillStyle = "black";
        ctx.fillText("(" + s.x + "," + s.y + ")", 10, 50);
    }
}