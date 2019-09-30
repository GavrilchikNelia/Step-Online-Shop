$(document).ready(function () {
    let featuresSection = document.getElementById('featuresSection');
    let topSlider = document.getElementById('topSlider');
    let stocks = document.getElementById('stocks');
    let products = document.getElementById('products');
    let furnitureGaleryCarousel = document.getElementById('furnitureGaleryCarousel');
    let blog = document.getElementById('blog');


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


           function removeClass(idName){
               idName.forEach(function(el) {
                   el.classList.remove('changeBgBorder')
               })
           }

            switch (hash) {
                case '#featuresSection' :
                    featuresSection.classList.add('changeBgBorder');
                    removeClass([topSlider, stocks, products, furnitureGaleryCarousel, blog]);
                    break;
                case '#topSlider' :
                    topSlider.classList.add('changeBgBorder');
                    removeClass([featuresSection, stocks, products, furnitureGaleryCarousel, blog]);

                    break;
                case '#stocks' :
                    stocks.classList.add('changeBgBorder');
                    removeClass([featuresSection, topSlider, products, furnitureGaleryCarousel, blog]);
                    break;
                case '#products' :
                    products.classList.add('changeBgBorder');
                    removeClass([featuresSection, topSlider, stocks, furnitureGaleryCarousel, blog]);
                    break;
                case '#furnitureGaleryCarousel' :
                    furnitureGaleryCarousel.classList.add('changeBgBorder');
                    removeClass([featuresSection, topSlider, stocks, products, blog]);
                    break;
                case '#blog' :
                    blog.classList.add('changeBgBorder');
                    removeClass([featuresSection, topSlider, stocks, products, furnitureGaleryCarousel]);
                    break;
            }

        });
    });
    $(".dropdown-item").on('click', function (event) {
        $("#showing").slideToggle("slow");
        $(".navbar-toggler-icon").toggle("display = block");
        event.preventDefault();
        let hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1500, function () {
            window.location.hash = hash;
        });
        function removeClass(idName){
            idName.forEach(function(el) {
                el.classList.remove('changeBgBorder')
            })
        }

        switch (hash) {
            case '#featuresSection' :
                featuresSection.classList.add('changeBgBorder');
                removeClass([topSlider, stocks, products, furnitureGaleryCarousel, blog]);
                break;
            case '#topSlider' :
                topSlider.classList.add('changeBgBorder');
                removeClass([featuresSection, stocks, products, furnitureGaleryCarousel, blog]);

                break;
            case '#stocks' :
                stocks.classList.add('changeBgBorder');
                removeClass([featuresSection, topSlider, products, furnitureGaleryCarousel, blog]);
                break;
            case '#products' :
                products.classList.add('changeBgBorder');
                removeClass([featuresSection, topSlider, stocks, furnitureGaleryCarousel, blog]);
                break;
            case '#furnitureGaleryCarousel' :
                furnitureGaleryCarousel.classList.add('changeBgBorder');
                removeClass([featuresSection, topSlider, stocks, products, blog]);
                break;
            case '#blog' :
                blog.classList.add('changeBgBorder');
                removeClass([featuresSection, topSlider, stocks, products, furnitureGaleryCarousel]);
                break;
        }
    });


    $("#showbutton").click(function () {
        $("#showing").slideToggle("slow");
        $(".navbar-toggler-icon").toggle("display = none")
    });

    $("#crossBut").click(function () {
        $("#showing").slideToggle("slow");
        $(".navbar-toggler-icon").toggle("display = block")
    })

    $('#plus').click(function () {
        $('#count').val(parseInt($('#count').val()) + 1);
    });
    $('#minus').on('click', function () {
        $('#count').val(parseInt($('#count').val()) - 1);
        if ($('#count').val() == 0) {
            $('#productsInBasket').remove();
        }
    });


});