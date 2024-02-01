const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 800,
};

ScrollReveal().reveal(".header__content h1", scrollRevealOption);
ScrollReveal().reveal(".header__content .section__description", { ...scrollRevealOption, delay: 400 });
ScrollReveal().reveal(".header__content .header__btn", { ...scrollRevealOption, delay: 800 });

ScrollReveal().reveal(".about__content .section__header", scrollRevealOption);
ScrollReveal().reveal(".about__content .section__description", { ...scrollRevealOption, delay: 400 });
ScrollReveal().reveal(".about__content .about__btn", { ...scrollRevealOption, delay: 800 });

ScrollReveal().reveal(".service__card", { ...scrollRevealOption, interval: 400 });

ScrollReveal().reveal(".portfolio__card", { duration: 800, interval: 400 });
