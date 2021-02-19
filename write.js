const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 300;

const fs = 20;
let y = 2*fs;
ctx.font = fs + "px Arial";

function write(s) {
    ctx.fillStyle = "black";
    if (s instanceof AVector) {
        ctx.fillText("(" + r(s.x) + ", " + r(s.y) + ")", 10, y);
        console.log("(" + s.x + ", " + s.y + ")");
    } else if (typeof s == "number") {
        ctx.fillText("" + r(s), 10, y);
        console.log(s);
    } else return;
    y += 2*fs;
}

function r(n) {
    let d = 4;
    return Math.round(n * Math.pow(10, d)) / Math.pow(10, d);
}