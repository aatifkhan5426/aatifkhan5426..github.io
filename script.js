/* Navigation Bar for mobile and tab*/

const navbarMenu = document.getElementById("navbar-menu");
const navbar = document.getElementById("navbar");

navbarMenu.addEventListener("click", () => {
  if (navbar.className === "navbar") {
    navbar.className += " responsive";
  } else {
    navbar.className = "navbar";
  }

});


