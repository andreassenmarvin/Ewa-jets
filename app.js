
var myVideo = document.getElementById("header")
myVideo.addEventListener("ended", function() {
    myVideo.autoplay = false;
    myVideo.load();
})

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