// This function will measure how far from the top of the viewport, when the right distance has been met we will add a class to the header to change the styling
$(window).on("scroll", function(){
    if($(this).scrollTop() > 100){
        $("header").addClass("scrolledHeader");
    }else{
        $("header").removeClass("scrolledHeader");
    }
});
// Slide right
function slideRight() {
    var reveals = document.querySelectorAll(".slide-right");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", slideRight);
// Slide down
function slideDown() {
    var reveals = document.querySelectorAll(".slide-down");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", slideDown);
// Slide up
function slideUp() {
    var reveals = document.querySelectorAll(".slide-up");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}
window.addEventListener("scroll", slideUp);