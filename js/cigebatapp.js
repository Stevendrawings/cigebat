
var btnResponsive = document.querySelector(".barre");
var menu = document.querySelector(".menu-content");
window.addEventListener("scroll", function(){
  var position = 0;
      position = window.scrollY;
    window.requestAnimationFrame(function(){
      if(position > 50){
        menu.style.backgroundColor = "#1dd1a1"
      } else if(position < 50){
        menu.style.backgroundColor = "transparent"
      }
    });
});

function hbg_menu(){
  var navResponsive = document.querySelector(".menuresponsive")
  if(navResponsive.className === "menu menuresponsive") {
    console.log(navResponsive.classList.add("active"))
  } else if( navResponsive.className === "menu menuresponsive active" ){
    console.log(navResponsive.classList.remove("active"))
  }
}

btnResponsive.addEventListener('click', hbg_menu)
