$(document).ready(function () {
    let countProduct = 0;
    if (window.innerWidth > 768) {
        countProduct = 9;
    }

    if (window.innerWidth < 768) {
        countProduct = 4;
    }

    if (window.innerWidth < 592) {
        countProduct = 3;
    }

    // const arrImg = ["img/products/furniture/1 (1).png", "img/products/furniture/1 (2).png", "img/products/furniture/1 (1).png",
    // "img/products/furniture/1 (1).png", "img/products/furniture/1 (1).png", "img/products/furniture/1 (1).png",
    // "img/products/furniture/1 (1).png", "img/products/furniture/1 (1).png", "img/products/furniture/1 (1).png"];

    const arrImgAdd = ["img/products/furniture/10.png", "img/products/furniture/11.png", "img/products/furniture/12.png",
        "img/products/furniture/13.png", "img/products/furniture/14.png", "img/products/furniture/15.png",
        "img/products/furniture/16.png", "img/products/furniture/17.png", "img/products/furniture/18.png",
        "img/products/furniture/19.png", "img/products/furniture/20.png"];

    for (let i = 0; i < arrImgAdd.length; i++) {
        $("#furnitureProduct").append(`<div class="modal fade" id="modalInfo${10 + i}" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
        <div class="modal-content modal-furniture">
            <div class="modal-header">
                <button type="button" class="close bg-dark text-white" data-dismiss="modal"
                    aria-label="Close">
                    <span class="p-2" aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="row">
                <div class="col-12 col-sm-4 m-2"><img class="furniture-img"
                        src="${arrImgAdd[i]}" alt="">
                </div>
                <div class="col-12 col-sm-7 m-2 text-left">
                    <h4>Aenean Ru Bristique</h4>
                    <p><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star"
                            aria-hidden="true"></i><i class="far fa-star"
                            aria-hidden="true"></i><i class="far fa-star"
                            aria-hidden="true"></i><i class="far fa-star"
                            aria-hidden="true"></i>(0 reviews)
                    </p>
                    <hr>
                    <div class="d-flex">
                        <div class="pt-2 pr-1 text-muted furniture-price">&#36;160.00</div>
                        <div class="bg-dark text-white p-2 pl-3 pr-3k">&#36;120.00</div>
                    </div>
                    <hr>
                    <div class="mb-2"><a href="#"
                            class="d-inlile-block bg-warning p-2 text-white furniture-sale-link"><i
                                class="fas fa-shopping-basket"></i> ADD TO CART</a>
                        <a class="d-inlile-block link mr-2 border border-dark p-2"><i
                                class="text-dark far fa-heart"></i></a>
                    </div>
                    <h5>Quick Overview</h5>
                    <p>Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed
                        purus augue, eu euis mod tellus</p>
                    <hr>
                    <div class="row">
                        <p class="col-md-12 col-sm-6"><span class="font-weight-bold">Availability:</span> In Stock</p>
                        <p class="col-md-12 col-sm-6"><span class="font-weight-bold">Category:</span> Furniture</p>
                    </div>
                </div>
                <div class="col-12 col-md-4"></div>
                <div class="col-12 col-md-7 mb-4">
                        <hr>
                        <div class=" d-flex justify-content-center flex-wrap">
                        <a href="#"
                            class="bg-primary text-white mr-1 p-1 border border-dark"><i
                                class="text-white fab fa-facebook-f"></i>&nbsp;<span>Share</span>
                        </a>
                        <a href="#" class="text-muted mr-1 p-1 border border-dark"><i
                                class="text-danger fab fa-glide-g"></i>&nbsp;<span>Google+</span>
                        </a>
                        <a href="#" class="text-muted mr-1 p-1 border border-dark"><i
                                class="text-primary fab fa-twitter"></i>&nbsp;<span>Tweet</span>
                        </a>
                        <a href="#" class="text-muted mr-1 p-1 border border-dark"><i
                                class="text-danger fab fa-pinterest-p"></i>&nbsp;<span>Pinterest</span>
                        </a>
                        <a href="#" class="text-muted p-1 border border-dark"><i
                                class="text-success fab fa-linkedin-in"></i>&nbsp;<span>Linkedin</span>
                        </a></div></div></div></div></div></div>`);
    }

    $("#addProduct").on("click", function () {
        $("#addProduct").remove();
        for (let i = 0; i < countProduct; i++) {
            $("#furnitureProduct").append(`<div class="px-20 col-12 col-sm-6 col-lg-4 furniture-card m-sm-0 text-center p-0 mb-sm-2 pr-2">
        <div class="furniture-card-img position-relative">
        <img class="furniture-img" src="${arrImgAdd[i]}" alt="">
        <div class="d-none position-absolute furniture-sale bg-dark text-white pl-3 pr-3 pb-2">
            sale
        </div>
        <div class="d-flex position-absolute furniture-sale-item justify-content-between">
            <a href="#" class="d-inlile-block bg-dark p-2 text-white furniture-sale-link"
                data-toggle="modal" data-target="#modalInfo${10 + i}">Quick
                View</a>
            <a href="#" class="d-inlile-block bg-dark p-2 text-white furniture-sale-link"><i
                    class="fas fa-shopping-basket"></i> ADD TO CART</a>
        </div>
    </div>
    <div class="border border-light text-center p-2">
        <h4 class="text-dark m-2 furniture-card-text">Aenean Ru Bristique</h4>
        <span class="mb-3"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star"
                aria-hidden="true"></i><i class="far fa-star" aria-hidden="true"></i><i
                class="far fa-star" aria-hidden="true"></i><i class="far fa-star"
                aria-hidden="true"></i></span>
        <hr class="furniture-hr hr-size mb-3">
        <div class="d-flex m-0 justify-content-between">
            <div class="d-flex">
                <a class="d-inlile-block link mr-2 border border-dark p-2"><i
                        class="text-dark far fa-heart"></i></a>
                <a class="d-inlile-block link border border-dark p-2"><i
                        class="text-dark fas fa-exchange-alt"></i></a>
            </div>
            <div class="d-flex">
                <div class="bg-dark text-white p-2 pl-3 pr-3 furniture-card-link">&#36;120.00
                </div></div></div></div></div>`);
        }
    });

    if ($(window).width() > 768) {
        document.getElementById("carouselElem").classList.remove("carousel-item");
    }
}); 