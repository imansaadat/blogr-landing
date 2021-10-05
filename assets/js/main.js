/*responsive menu*/
let menu = document.querySelector(".main_menu");
let closeMenu = document.querySelector(".fa-times");
let hamMenu = document.querySelector(".fa-bars");

hamMenu.addEventListener("click", () => {
  menu.classList.add("show");
  document.documentElement.classList.add("hidden");
});

closeMenu.addEventListener("click", () => {
  menu.classList.remove("show");
  document.documentElement.classList.remove("hidden");
});
