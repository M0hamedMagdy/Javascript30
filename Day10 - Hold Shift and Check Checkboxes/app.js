const items = Array.from(
  document.querySelectorAll('.inbox input[type="checkbox"]')
);

let lastChecked;

function checkBoxes(e) {
  let inBetween = false;

  if (e.shiftKey && this.checked) {
    items.forEach((item) => {
      console.log(item);
      if (item === this || item === lastChecked) {
        inBetween = !inBetween;
        console.log("Starting inBetwwen");
      }
      if (inBetween) {
        item.checked = true;
      }
    });
  }
  lastChecked = this;
}

for (let item of items) {
  item.addEventListener("click", checkBoxes);
}

// this is a basic version that's need to be completed.
