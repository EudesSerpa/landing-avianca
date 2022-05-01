const menuMobile = document.querySelector(".header__menu--icon-mobile");

menuMobile.addEventListener("click", () => {
  document.querySelector(".header__menu--list").classList.toggle("active");
});
