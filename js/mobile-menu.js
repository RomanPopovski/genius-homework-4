const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelector(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");

const aboutBtnClose = document.querySelector(".about-close");
const whyBtnClose = document.querySelector(".why-close");
const prodeduresBtnClose = document.querySelector(".prodedures-close");
const locationBtnClose = document.querySelector(".location-close");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");
// const disableScroll = () => document.body.classList.toggle("is-scroll-disabled");

menuBtnOpen.addEventListener("click", toggleMenu);
menuBtnClose.addEventListener("click", toggleMenu);
aboutBtnClose.addEventListener("click", toggleMenu);
whyBtnClose.addEventListener("click", toggleMenu);
prodeduresBtnClose.addEventListener("click", toggleMenu);
locationBtnClose.addEventListener("click", toggleMenu);

// menuBtnOpen.addEventListener("click", disableScroll);
// menuBtnClose.addEventListener("click", disableScroll);
