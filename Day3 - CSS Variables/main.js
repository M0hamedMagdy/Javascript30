const inputs = Array.from(document.querySelectorAll(".controls input"));

function handleUpdate() {
  const suffix = this.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

for (input of inputs) {
  input.addEventListener("change", handleUpdate);
  input.addEventListener("mousemove", handleUpdate);
}
