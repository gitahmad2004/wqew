const cardwrapper = document.querySelector(".feposts");
const cardwrapperChildren = Array.from(cardwrapper.children);
const widthToScroll = cardwrapper.children[0].offsetWidth;
const arrowPov = document.querySelector("#fleft");
const arrowNext = document.querySelector("#fright");

arrowPov.onclick = function () {
    cardwrapper.scrollLeft -= widthToScroll;
    updateButtonOpacity(); 
}
arrowNext.onclick = function () {
    cardwrapper.scrollLeft += widthToScroll;
    updateButtonOpacity(); 
}


function updateButtonOpacity() {

    if (cardwrapper.scrollLeft <= 0) {
        arrowPov.style.opacity = 0.4;
        arrowPov.style.cursor = 1;
    }

    else if (cardwrapper.scrollLeft >= (cardwrapper.widthToScroll - cardwrapper.offsetWidth)) {
        arrowNext.style.opacity = 0.4;
        arrowNext.style.cursor = 1;
    }
    else {
           arrowNext.style.opacity = 1;
           arrowPov.style.opacity = 1;
    }
}





const navBtn = document.querySelector(".menu");
const navList = document.querySelector(".nav-list");

navBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});




   ScrollReveal({
     // reset:true,
     distance: "60px",
     duration: 2500,
     delay: 400,
   });
   ScrollReveal().reveal(
     " .nav-list ,.logo ,.phonenumbers , .title , .toptitle , .p , .ftitle",
     {
       delay: 500,
       origin: "left",
       interval: 200,
     }
   );
   ScrollReveal().reveal(".service , .copyright ", {
     delay: 600,
     origin: "top",
     interval: 200,
   });
   ScrollReveal().reveal(".socail", { delay: 600, origin: "right" });
   ScrollReveal().reveal(".image ,input ,textarea , .exp-area ,.exp", {
     delay: 500,
     origin: "top",
     interval: 200,
   });
   ScrollReveal().reveal("log", {
     delay: 500,
     origin: "bottom",
     interval: 200,
   });