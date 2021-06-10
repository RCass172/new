$(document).ready(function(){

    // hides content once page is loaded
    $(".content-box").hide(),

    // once button is clicked the content will appear
    $("#show").click(function(){
      $(".content-box").show(1000),

    // removes button once the content has been shown
    $(this).remove()
});
    
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}