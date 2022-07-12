function playing(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  e.propertyName === "transform" ? this.classList.remove("playing") : false;
}

const keys = Array.from(document.querySelectorAll(".key"));
for (key of keys) {
  key.addEventListener("transitionend", removeTransition);
}

window.addEventListener("keydown", playing);
