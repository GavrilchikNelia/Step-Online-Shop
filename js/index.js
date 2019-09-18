$(document).ready(function () {
    $("#burger").click(function () {
        $("#cross").toggle('display = block');
        $("#burger").toggle('display = none');
    });
    $("#cross").click(function () {
        $(".listOfMenu").toggle('display = inline-block');
        $("#cross").toggle('display = none');
        $("#burger").toggle('display = block');
    });
    $("#shopNow").click(function (e) {
        e.preventDefault();
    });

    $(".listNameLink").on('click', function (event) {
        event.preventDefault();
        let hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1500, function () {
            window.location.hash = hash;
        });
    });
    $(".dropdown-item").on('click', function (event) {
        $("#showing").slideToggle("slow");
        $(".navbar-toggler-icon").toggle("display = block")
        event.preventDefault();
        let hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1500, function () {
            window.location.hash = hash;
        });
    });


    $("#showbutton").click(function () {
        $("#showing").slideToggle("slow");
        $(".navbar-toggler-icon").toggle("display = none")
    });

    $("#crossBut").click(function () {
        $("#showing").slideToggle("slow");
        $(".navbar-toggler-icon").toggle("display = block")
    })


});
