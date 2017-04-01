
/*JQUERY*/

var _window = $(window);


/*Smooth Scroll*/

$(".navbar ul li a[href^='#']").on("click", function (e) {

   // prevent default anchor click behavior
   e.preventDefault();
   // store hash
   var hash = this.hash;
   // animate
   $("html, body").animate({
       scrollTop: $(hash).offset().top + 30
     }, 600, function() {

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});



/*Back to top animation */

$("#backtotop a[href^='#']").on("click", function(event){
    event.preventDefault();

    var hash = this.hash;

    $("html, body").animate({
        scrollTop: $(hash).offset().top
    }, 400, function(){
        window.location.hash = hash;
    });
});



/*Carousel*/

$(".carousel").carousel({
    interval: false
});

$('#text').html($('.active > .carousel-caption').html());

$('.carousel').on('slid.bs.carousel', function () {
   $('#text').html($('.active > .carousel-caption').html());
   });

$(".carousel-control.right").on("click", function(){
    $("#text").animate({opacity: 0}, function(){
        $("#text").delay(130).animate({opacity: 1}, function(){
        })  
    })
});

$(".carousel-control.left").on("click", function(){
    $("#text").animate({opacity: 0}, function(){
        $("#text").delay(130).animate({opacity: 1}, function(){
        })  
    })
});









/*Page fade in*/
$(document).ready(function(){
    $("body").fadeIn(700);
    $(".naslov_levi").hide().delay(300).fadeIn(1700);
    $(".navbar-default").hide().delay(200).fadeIn(1000);
    $(".naslov_desni").hide().delay(400).fadeIn(2000);
});









