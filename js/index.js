/*
=============
Navigation
=============
 */
const navOpen = document.querySelector(".nav__hamburger");
const navClose = document.querySelector(".close__toggle");
const menu = document.querySelector(".nav__menu");
const scrollLink = document.querySelectorAll(".scroll-link");
// const navContainer = document.querySelector(".nav__menu");

navOpen.addEventListener("click", () => {
  menu.classList.add("open");
  document.body.classList.add("active");
  menu.style.left = "0";
  menu.style.width = "30rem";
});

navClose.addEventListener("click", () => {
  menu.classList.remove("open");
  document.body.classList.remove("active");
  menu.style.left = "-30rem";
  menu.style.width = "0";
});



// Scroll To
const links = [...document.querySelectorAll(".scroll-link")];
links.map(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const fixNav = navBar.classList.contains("fix-nav");
    let position = element.offsetTop - navHeight;

    if (!fixNav) {
      position = position - navHeight;
    }

    window.scrollTo({
      top: position,
      left: 0,
    });

    navigation.classList.remove("show");
    nav.classList.remove("show");
    document.body.classList.remove("show");
  });
});

// preloader
window.addEventListener("load", () => {
  const loader = document.getElementById("pre-loader");
  setTimeout(() => {
    loader.classList.add("hide");
  }, 2000);
});

// PopUp
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
});

window.addEventListener("load", () => {
  setTimeout(() => {
    popup.classList.add("show");
  }, 2000);
});