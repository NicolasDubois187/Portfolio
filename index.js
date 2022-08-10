const form = document.querySelector("form");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1150) {
    logoSkillsPic.style.transform = "translateX(0px)";
  } else {
    logoSkillsPic.style.transform = "translateX(1000px)";
  }

  if (window.scrollY > 350) {
    int1.style.opacity = 1;
    int2.style.opacity = 1;
    int3.style.opacity = 1;
    int4.style.opacity = 1;
  } else {
    int1.style.opacity = 0;
    int2.style.opacity = 0;
    int3.style.opacity = 0;
    int4.style.opacity = 0;
  }
  if (window.scrollY > 150) {
    idPicture.style.opacity = 0;
  } else {
    idPicture.style.opacity = 1;
  }
  if (window.scrollY > 2600) {
    mail.style.opacity = 0.3;
    mail.style.transform = "translateY(0px)";
    linkedin.style.opacity = 0.3;
    linkedin.style.transform = "translateY(0px)";
    github.style.opacity = 0.3;
    github.style.transform = "translateY(0px)";
  } else {
    mail.style.opacity = 0;
    mail.style.transform = "translateY(500px)";
    linkedin.style.opacity = 0;
    linkedin.style.transform = "translateY(500px)";
    github.style.opacity = 0;
    github.style.transform = "translateY(500px)";
  }
});
window.addEventListener("load", () => {
  idPicture.style.opacity = 1;
});
// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   console.log();

//   if (!email.value.match(/[a-z0-9_\-\.]+@[a-z0-9_\-\.]+\.[a-z]+/i) )
//    {
//     alert(email.value + " n'est pas une adresse valide");
//   }
//   if (
//     name1.value < 1 |
//     message.value < 1
//   )
//   {
//   alert("Merci de bien renseigner les champs");
//   }

//   else {
//     alert("Message envoyé !!!");
//     name1.value = "";
//     email.value = "";
//     message.value = "";

//   }

// });
logoNav.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
mail.addEventListener("mouseover", mouseOver);
mail.addEventListener("mouseout", mouseOut);

function mouseOver() {
  mail.style.opacity = 1;
}

function mouseOut() {
  mail.style.opacity = 0.3;
}
linkedin.addEventListener("mouseover", mouseOverLink);
linkedin.addEventListener("mouseout", mouseOutLink);

function mouseOverLink() {
  linkedin.style.opacity = 1;
}

function mouseOutLink() {
  linkedin.style.opacity = 0.3;
}
github.addEventListener("mouseover", mouseOverGit);
github.addEventListener("mouseout", mouseOutGit);

function mouseOverGit() {
  github.style.opacity = 1;
}

function mouseOutGit() {
  github.style.opacity = 0.3;
}
