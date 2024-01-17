const button = document.querySelector(".button");

window.addEventListener("scroll", e => {
  if(window.scrollY >= 0) {
    button.style.display = "flex";
  }
  if(window.scrollY === 0) {
    button.style.display = "none";
  }
})