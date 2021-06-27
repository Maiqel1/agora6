const toggler = document.querySelector(".custom-toggler");
const close = document.querySelector(".close");
const navbtn = document.querySelector(".navbar-toggler");

navbtn.addEventListener("click", toggle);

function toggle() {
  if (toggler.style.display === "none") {
    toggler.style.display = "block";
    close.style.display = "none";
  } else {
    toggler.style.display = "none";
    close.style.display = "block";
  }
}
