//  nav menu icon  

  function openClose() {
    var nav4 = document.querySelectorAll(".navMenu")
    for (i=0 ; i < nav4.length ; i++){
      nav4[i].classList.toggle('open')
    }
  }
  var darkNavBar = document.getElementById("openCloseDark")
  var lightNavBar = document.getElementById("openCloseLight")
  darkNavBar.addEventListener("click" , openClose)
  lightNavBar.addEventListener("click" , openClose)
// About section
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;

    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);



function imgsReveal() {
  var imgs1 = document.querySelectorAll(".imgsSection1");
  var imgs2 = document.querySelectorAll(".imgsSection2");

  for (var i = 0; i < imgs1.length; i++) {
    var windowHeight = window.innerHeight;

    visibleImgs = 160;

    var imgs1Top = imgs1[i].getBoundingClientRect().top;
    if (imgs1Top < windowHeight - visibleImgs) {
      imgs1[i].classList.add("active");
    } else {
      imgs1[i].classList.remove("active");
    }
  }
  for (var j = 0; j < imgs2.length; j++) {
    var windowHeight = window.innerHeight;
    var imgs2Top = imgs2[j].getBoundingClientRect().top;
    visibleImgs = 60;

    if (imgs2Top < windowHeight - visibleImgs) {
      imgs2[j].classList.add("active");
    } else {
      imgs2[j].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", imgsReveal);

// reveal + change background color
function revealChangeBg() {
  var reveals = document.querySelectorAll(".revealKSection");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;

    var elementVisible = 420;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
  var body = document.getElementsByTagName("body")[0];

  // trigger this function every time the user scrolls
  window.onscroll = function (event) {
    windowWidth = window.innerWidth;
    var darkNav = document.getElementById("darkNavbar");
    var lightNav = document.getElementById("lightNavbar");
    // var navMenu = document.querySelectorAll(".navMenu > span")
    var scroll = window.pageYOffset;
    if (windowWidth > 769 && windowWidth <= 992) {
      if (scroll > 300 && scroll < 2800) {
        // normal
        body.style.backgroundColor = "white";
        lightNav.style.display = "block";
        darkNav.style.display = "none";
      } else if (scroll >= 2800) {
        // dark

        body.style.backgroundColor = "#121212";
        lightNav.style.display = "none";
        darkNav.style.display = "block";
      }
    } else {
      if (scroll < 300 || scroll < 2900) { 
        // normal
        body.style.backgroundColor = "white";
        lightNav.style.display = "block";
        darkNav.style.display = "none";

      } else if (scroll >= 2900) {
        // dark
        body.style.backgroundColor = "#121212";
        lightNav.style.display = "none";
        darkNav.style.display = "block";
        
      }
    }
  };
  
}

window.addEventListener("scroll", revealChangeBg);
