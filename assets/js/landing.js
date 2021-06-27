// toggle menu
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

// star rating
let $star_rating = $(".star-rating .fa");

let SetRatingStar = function () {
  return $star_rating.each(function () {
    if (
      parseInt($star_rating.siblings("input.rating-value").val()) >=
      parseInt($(this).data("rating"))
    ) {
      return $(this).removeClass("fa-star-o").addClass("fa-star");
    } else {
      return $(this).removeClass("fa-star").addClass("fa-star-o");
    }
  });
};

$star_rating.on("click", function () {
  $star_rating.siblings("input.rating-value").val($(this).data("rating"));
  return SetRatingStar();
});

SetRatingStar();
$(document).ready(function () {});
