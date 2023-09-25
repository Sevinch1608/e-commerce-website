const openNavToggle = document.querySelector(".fa-bars");
const closeNavToggle = document.querySelector(".fa-xmark");
const navLinks = document.querySelector(".nav-links");
const navbar = document.querySelector("nav");
closeNavToggle.style.display = "none";
openNavToggle.addEventListener("click", () => {
  navLinks.classList.remove("hidden");
  navbar.classList.toggle("navbar-active");
  openNavToggle.style.display = "none";
  closeNavToggle.style.display = "inline-block";
});
closeNavToggle.addEventListener("click", () => {
  navLinks.classList.add("hidden");
  navbar.classList.toggle("navbar-active");

  openNavToggle.style.display = "inline-block";
  closeNavToggle.style.display = "none";
});