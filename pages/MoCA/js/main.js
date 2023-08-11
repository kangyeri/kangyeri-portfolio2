$('nav ul').css({
  right:-$('nav ul gnb_mo').width()
});
$('nav ul .gnb_mo').hide();
$('.btnNav').click(function(){
  $('nav').fadeIn(500);
  $('nav').animate({
      right:0
  },500);
});
$('nav .btnClose').click(function(){
  $('nav').fadeOut(500);
  $('nav ul .gnb_mo').animate({
      right:-$('nav ul gnb_mo').width()
  },500);
});
  //main_nav control 끝




$( document ).ready( function() {
	

  
      $('.one-time').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,



      });

      $('.go').slick({
        dots: false,
        infinite: true,
        speed: 300,
        
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),

        responsive: [
          {
            breakpoint: 1200,
            settings: {
              arrows: false,
              autoplay: true,
              // centerPadding: '40px',
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          },

          {
            breakpoint: 768,
            settings: {
              dots: false,
              infinite: true,
              speed: 300,
              slidesToShow: 1,
              autoplay: true,
              autoplaySpeed: 2000,
              prevArrow: $('.prev'),
              nextArrow: $('.next'),
            }
          }
        ]

       
     



      });


      $('.autoplay').slick({
        
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        
        // responsive: [
        //   {
        //     breakpoint: 1930,
        //     settings: {
             
        //     vertical: true,
        //     slidesToShow: 4,
        //     slidesToScroll: 4,

              
              
        //     }
        //   },
        //   {
        //     breakpoint: 768,
        //     settings: {
        //       slidesToShow: 1,
        //       centerMode: true,
        //       slidesToScroll: 1,
        //       autoplay: true,
        //       autoplaySpeed: 2000,
        //       centerPadding: '40px',
              
        //     }
        //   }

         
        // ]
       
        
      });

      
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,

        responsive: [
            {
              breakpoint: 1200,
              settings: {
                arrows: false,
                autoplay: true,
                
                centerPadding: '40px',
                slidesToShow: 1
              }
            },

            {
              breakpoint: 768,
              settings: {
                arrows: false,
                autoplay: true,
                
                centerPadding: '40px',
                slidesToShow: 1
              }
            }
          ]

          

    });


  



    $(window).resize(function(){

      let winWidth = $(window).width();


      if(winWidth >= 768){

         setTimeout(function(){
          location.reload();
         },500)

      }


    })





});

