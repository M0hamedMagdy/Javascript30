const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");
const header = document.querySelector("h1");

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minutesDegrees = (mins / 60) * 360 + (seconds / 60) * 6 + 90;
  minHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + (mins / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  header.textContent = `It is ${hours - 12} : ${mins} : ${seconds} `;
}

setInterval(setDate, 1000);
