// Create Canvas Context
const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
// input Values
const range = document.querySelector("#range");
const color = document.querySelector("#color");
const isHue = document.querySelector("#hue");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

color.value = `#000000`;
range.value = 10;

ctx.strokeStyle = color.value;
ctx.lineWidth = range.value;
ctx.lineJoin = "round";
ctx.lineCap = "round";

let drawWithHue = true;
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return;
  console.log(e);

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  ctx.lineWidth = range.value;

  if (!drawWithHue) {
    hue++;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    color.value = ctx.strokeStyle;

    if (hue >= 360) {
      hue = 0;
    }
    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
      direction = !direction;
    }

    if (direction) {
      ctx.lineWidth++;
      range.value = ctx.lineWidth;
    } else {
      ctx.lineWidth--;
      range.value = ctx.lineWidth;
    }
  }
}

range.addEventListener("change", () => {
  console.log(range.value);
  ctx.lineWidth = range.value;
});

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

color.addEventListener("change", () => {
  console.log(color.value);
  ctx.strokeStyle = color.value;
});

isHue.addEventListener("change", () => {
  console.log(drawWithHue);

  drawWithHue = !drawWithHue;
});

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
