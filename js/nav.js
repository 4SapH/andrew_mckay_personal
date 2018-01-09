document.addEventListener('DOMContentLoaded', function() {


var navToggle = document.getElementsByClassName("nav-toggle");
var navSpans = navToggle[0].childNodes;
var navMenu = document.getElementsByClassName("nav-menu");
var open = false;

navToggle[0].addEventListener("click",
  function() {
    if (!open) {
      navMenu[0].style.width = "25vw";
      for (var i = 1; i < navSpans.length; i+=2) {
        navSpans[i].style.opacity = "1.0";
        navSpans[i].style.transform = "rotate(45deg)";
      }

      navSpans[3].style.opacity = "0";
      navSpans[3].style.transform = "rotate(0deg) scale(0.2, 0.2)";

      navSpans[5].style.transform = "rotate(-45deg)";
    }
    else {
      navMenu[0].style.width = "0";
      for (var i =1 ;i < navSpans.length; i+=2) {
        navSpans[i].style.opacity="1.0";
        navSpans[i].style.transform = "rotate(0)";
      }
    }
    open = !open;
  });
});
