
const form = document.querySelector("form");
let name1Content;
let emailContent;
let messageContent;

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

  console.log();

  if (
    name1Content.length > 1 &&
    emailContent.length > 1 &&
    messageContent.length > 1
  ) {
    alert("BINGO");
    name.value = "";
    email.value = "";
    message.value = "";
    
  } else {
    alert("Merci de bien renseigner les champs");
  }

});
logo.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
});