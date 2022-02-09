var myVideo = document.getElementById("header");
var explorebtn = document.querySelector(".explore-button");
var spanAnimation = document.querySelector(".span");
var children = spanAnimation.childNodes;

myVideo.addEventListener("ended", function() {
    myVideo.autoplay = false;
    myVideo.load();
})

var i = 0;
var intro = "We are  Ewa Air Jets Solutions."
var introTitle = document.getElementsByClassName("header-tag-title");
var introHead = document.querySelector("#header-tag1-paragraph");
var speed = 90;

function spanRemove() {
    spanAnimation.classList.add("span-hover");
}

function spanAppend() {
    spanAnimation.classList.remove("span-hover");
}

function typing() {
    if (i < intro.length) {
        $(introTitle).fadeIn();
        introHead.innerHTML += intro.charAt(i);
        i++;
        setTimeout(typing, speed)
    }

    else if (i = intro.length) {
        $(explorebtn).slideDown();
    }
}



$(function() {
    $("#navbar-toggler-icon").click(function () {
        $("#navbarSupportedContent").slideToggle();
        $(".form").css({"margin":"auto"})
    })

    $("#privateDropdown").click(function() {
        $("#dropdown1").slideToggle();
        $("#dropdown2").slideUp();
    })

    $("#airDropdown").click(function() {
        $("#dropdown2").slideToggle();
        $("#dropdown1").slideUp();
    })

})