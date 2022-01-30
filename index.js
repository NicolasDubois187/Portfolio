
const form = document.querySelector("form");

window.addEventListener("scroll", () => {
console.log(window.scrollY);

  if (window.scrollY > 400) {
    logoSkills.style.transform = "none";
  }
  if (window.scrollY > 1200) {
      int1.style.opacity = 1;
      int2.style.opacity = 1;
      int3.style.opacity = 1;
      int4.style.opacity = 1;
  }
});
window.addEventListener("load", () => {
    idPicture.style.opacity = 1;
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
});