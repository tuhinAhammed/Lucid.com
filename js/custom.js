$(document).ready(function () {

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 33,
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1
        },
        667: {
            items: 1
        },
        1024: {
            items: 2
        }
    }
})

// wow js here
        
    new WOW().init();

});
