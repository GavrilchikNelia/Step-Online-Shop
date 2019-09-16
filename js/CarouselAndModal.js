$(document).ready(function() {
    $("#linkLoginUser").click(function() {
        // Открыть модальное окно с id="exampleModal"
        $("#modalLogIn").modal('show');
    });
});
$(document).ready(function() {
    // При клике по кнопке, с id="btnModal"
    $("#linkRegister").click(function() {
        // Открыть модальное окно с id="exampleModal"
        $("#modalRegister").modal('show');
    });
});
// tab 1
$('#myCarousel').carousel({
    interval: false
});
$('#sliderScreen').carousel({
    interval: false
});

$('#myCarousel .carousel-item').each(function(){
    let minPerSlide;
    if ($(window).width() >= 320) {
        minPerSlide = 1
    }
    if ($(window).width() >= 480) {
        minPerSlide = 3
    }
    if ($(window).width() >= 768) {
        minPerSlide = 4
    }
    if ($(window).width() >= 769) {
        minPerSlide = 1
    }
    if ($(window).width() >= 992) {
        minPerSlide = 4
    }
    let next = $(this).next();

    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (let i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});
$('#sliderScreen .carousel .carousel-item').each(function(){
    let next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child');

});

$('#myCarousel').on('slide.bs.carousel', function (event) {
    if (event.direction == 'left') $('#sliderScreen').carousel('next');
    else {
        $('#sliderScreen').carousel('prev');
        $('#sliderScreen').carousel('pause');
    }
});

$('#myCarousel .carousel-item-imgs').on('click', function() {
    event.preventDefault();
    // console.log($(this).attr('data-num'));
    let indexSlide = Number($(this).attr('data-num'));
    $('#myCarousel').carousel(indexSlide);
    $('#sliderScreen').carousel(indexSlide);
});

// tab 2
$('#myCarouselTab2').carousel({
    interval: false
});
$('#sliderScreenTab2').carousel({
    interval: false
});

$('#myCarouselTab2 .carousel-item').each(function(){
    let minPerSlide;
    if ($(window).width() >= 320) {
        minPerSlide = 1
    }
    if ($(window).width() >= 480) {
        minPerSlide = 3
    }
    if ($(window).width() >= 768) {
        minPerSlide = 4
    }
    if ($(window).width() >= 769) {
        minPerSlide = 1
    }
    if ($(window).width() >= 992) {
        minPerSlide = 4
    }
    let next = $(this).next();

    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (let i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});
$('#sliderScreenTab2 .carousel .carousel-item').each(function(){
    let next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child');

});

$('#myCarouselTab2').on('slide.bs.carousel', function (event) {
    if (event.direction == 'left') $('#sliderScreenTab2').carousel('next');
    else {
        $('#sliderScreenTab2').carousel('prev');
        $('#sliderScreenTab2').carousel('pause');
    }
});

$('#myCarouselTab2 .carousel-item-imgs').on('click', function() {
    event.preventDefault();
    // console.log($(this).attr('data-num'));
    let indexSlide = Number($(this).attr('data-num'));
    $('#myCarouselTab2').carousel(indexSlide);
    $('#sliderScreenTab2').carousel(indexSlide);
});
// tab 3
$('#myCarouselTab3').carousel({
    interval: false
});
$('#sliderScreenTab3').carousel({
    interval: false
});

$('#myCarouselTab3 .carousel-item').each(function(){
    let minPerSlide;
    if ($(window).width() >= 320) {
        minPerSlide = 1
    }
    if ($(window).width() >= 480) {
        minPerSlide = 3
    }
    if ($(window).width() >= 768) {
        minPerSlide = 4
    }
    if ($(window).width() >= 769) {
        minPerSlide = 1
    }
    if ($(window).width() >= 992) {
        minPerSlide = 4
    }
    let next = $(this).next();

    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (let i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});
$('#sliderScreenTab3 .carousel .carousel-item').each(function(){
    let next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child');

});

$('#myCarouselTab3').on('slide.bs.carousel', function (event) {
    if (event.direction == 'left') $('#sliderScreenTab3').carousel('next');
    else {
        $('#sliderScreenTab3').carousel('prev');
        $('#sliderScreenTab3').carousel('pause');
    }
});

$('#myCarouselTab3 .carousel-item-imgs').on('click', function() {
    event.preventDefault();
    // console.log($(this).attr('data-num'));
    let indexSlide = Number($(this).attr('data-num'));
    $('#myCarouselTab3').carousel(indexSlide);
    $('#sliderScreenTab3').carousel(indexSlide);
});
// tab 4
$('#myCarouselTab4').carousel({
    interval: false
});
$('#sliderScreenTab4').carousel({
    interval: false
});

$('#myCarouselTab4 .carousel-item').each(function(){
    let minPerSlide;
    if ($(window).width() >= 320) {
        minPerSlide = 1
    }
    if ($(window).width() >= 480) {
        minPerSlide = 3
    }
    if ($(window).width() >= 768) {
        minPerSlide = 4
    }
    if ($(window).width() >= 769) {
        minPerSlide = 1
    }
    if ($(window).width() >= 992) {
        minPerSlide = 4
    }
    let next = $(this).next();

    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (let i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});
$('#sliderScreenTab4 .carousel .carousel-item').each(function(){
    let next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child');

});

$('#myCarouselTab4').on('slide.bs.carousel', function (event) {
    if (event.direction == 'left') $('#sliderScreenTab4').carousel('next');
    else {
        $('#sliderScreenTab4').carousel('prev');
        $('#sliderScreenTab4').carousel('pause');
    }
});

$('#myCarouselTab4 .carousel-item-imgs').on('click', function() {
    event.preventDefault();
    // console.log($(this).attr('data-num'));
    let indexSlide = Number($(this).attr('data-num'));
    $('#myCarouselTab4').carousel(indexSlide);
    $('#sliderScreenTab4').carousel(indexSlide);
});


    if ($(window).width() >= 480) {
        $('#newsletter').attr('size', '48');
    }
    if ($(window).width() >= 481) {
        $('#newsletter').attr('size', '26');
        $('#newsletter').attr('placeholder', '           Enter your email address');
    }
    if ($(window).width() >= 575) {
        $('#newsletter').attr('size', '30');
    }
    if ($(window).width() >= 768) {
        $('#newsletter').attr('size', '62');
    }


