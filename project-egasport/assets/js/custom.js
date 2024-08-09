$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,  //vong lap
        margin:10,
        nav:false, //thah dieu huong 
        autoplay: true,
        autoplayTimeout: 3000,
        dots: false,// 
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })


  });