const indicators = document.querySelectorAll(".indicators a");

for (i of indicators) {
  function add(event) {
    const show = document.querySelector("#main-img img");
    show.setAttribute("src", this.firstElementChild.getAttribute("src"));
    event.preventDefault();
  }
  i.addEventListener("click", add);
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector("nav").style.padding = "25px";
    document.querySelector("header").style.boxShadow ="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px";
  } else {
    document.querySelector("nav").style.padding = "40px";
    document.querySelector("header").style.boxShadow = "none";
  }
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    document.querySelector(".backtop").style.display = "block";
  } else {
    document.querySelector(".backtop").style.display = "none";
  }
});

var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    document.querySelector("header").style.boxShadow ="rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px";
  }
}


// 

let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
