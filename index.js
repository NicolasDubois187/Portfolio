
const form = document.querySelector("form");


window.addEventListener("scroll", () => {
  
console.log(window.scrollY);

  if (window.scrollY > 350) {
    logoSkills.style.transform = "none";
  }
  else {
    logoSkills.style.transform = "translateX(250%)";
  }
  if (window.scrollY > 1300) {
      int1.style.opacity = 1;
      int2.style.opacity = 1;
      int3.style.opacity = 1;
      int4.style.opacity = 1;
      int5.style.opacity = 1;
      int6.style.opacity = 1;
      
  }
  else {
    int1.style.opacity = 0;
    int2.style.opacity = 0;
    int3.style.opacity = 0;
    int4.style.opacity = 0;
    int5.style.opacity = 0;
    int6.style.opacity = 0;
  }
  if (window.scrollY > 250) {
    idPicture.style.opacity = 0;
  }
  else {
    idPicture.style.opacity = 1;
  }
});
window.addEventListener("load", () => {
    idPicture.style.opacity = 1;
});
form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log();

  if (!email.value.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i) )
   {
    alert(email.value + " n'est pas une adresse valide");  
  } 
  if (
    name1.value < 1 |
    message.value < 1
  ) 
  {
  alert("Merci de bien renseigner les champs");
  }
  
  else {
    alert("Message envoyé !!!");
    name1.value = "";
    email.value = "";
    message.value = "";
    
  }

});
logo.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
});