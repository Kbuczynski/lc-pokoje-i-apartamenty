const navigation = document.querySelector(".navigation"),
  menu = document.querySelector(".navigation__menu"),
  hamburger = document.querySelector(".hamburger");

const windowY = window.innerHeight,
  breakpoint = windowY * 0.2;

const handleMenu = () => {
  hamburger.classList.toggle("hamburger-transform");
  menu.classList.toggle("show-menu");
};

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  scrollY > breakpoint
    ? navigation.classList.add("fixed-navigation")
    : navigation.classList.remove("fixed-navigation");
});

hamburger.addEventListener("click", () => handleMenu());

menu.addEventListener("click", () => handleMenu());
