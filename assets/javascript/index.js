let hameburger = document.querySelector(".hameburger");
let navbar_cross = document.querySelector(".navbar_cross");
let navbar_menu = document.querySelector(".navbar_menu");

hameburger.addEventListener("click", () => {
  navbar_menu.classList.add("active");
});

navbar_cross.addEventListener("click", () => {
  navbar_menu.classList.remove("active");
});
