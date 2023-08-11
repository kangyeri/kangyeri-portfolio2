$( document ).ready( function() {
	

    // $('.fade').slick({
      
       
    //     infinite: true,
    //     speed: 500,
    //     fade: true,
    //     cssEase: 'linear',
       
        
    //   });

      
      $('.autoplay').slick({
        
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        
        
        nextArrow:$('.next'),
        prevArrow:$('.prev'),
      });
});