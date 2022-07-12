const panels = Array.from(document.querySelectorAll(".panel"));
function toggleOpen() {
  this.classList.toggle("open");
}

function toggleOpenActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

for (panel of panels) {
  panel.addEventListener("click", toggleOpen);
  panel.addEventListener("transitionend", toggleOpenActive);
}
