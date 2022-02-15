
const form = document.querySelector("form");


window.addEventListener("scroll", () => {
  

  if (window.scrollY > 750) {
    logoSkillsPic.style.transform = "translateX(0px)";
  }
  else {
    logoSkillsPic.style.transform = "translateX(1000px)";
  }

  if (window.scrollY > 1500) {
      int1.style.opacity = 1;
      int2.style.opacity = 1;
      int3.style.opacity = 1;
      int4.style.opacity = 1;
    
      
  }
  else {
    int1.style.opacity = 0;
    int2.style.opacity = 0;
    int3.style.opacity = 0;
    int4.style.opacity = 0;
 
  }
  if (window.scrollY > 150) {
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
logoNav.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
});