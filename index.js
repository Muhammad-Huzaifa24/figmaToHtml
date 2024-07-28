let menuIcon = document.getElementById("menu-icon");
let dropDown = document.getElementById("drop-down");
let shopBtn = document.getElementById("shop-btn");
let profileImg = document.getElementById("profile-img");
let cartImg = document.getElementById("cart-img");
let closeDropDown = document.getElementById("close-drop-down");

menuIcon.addEventListener("click", function () {
  dropDown.style.display = "block";
  profileImg.style.display = "none";
  cartImg.style.display = "none";
});

closeDropDown.addEventListener("click", function () {
  dropDown.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  menuIcon.addEventListener("click", function () {
    dropDown.classList.add("show");
  });

  closeDropDown.addEventListener("click", function () {
    dropDown.classList.remove("show");
  });
});
