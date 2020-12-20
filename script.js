const btns = document.querySelectorAll(".story-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btn.classList.toggle("change");
    btn.nextElementSibling.classList.toggle("change");
  });
});
