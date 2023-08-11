

//scroll시 내용 에니메이션
$('.img, .con').css({
    top:200,
    opacity:0
});

$(window).scroll(function(){
    let sct = $(window).scrollTop();
    $('.scroll_view').each(function(index,item){
        if($(item).offset().top - sct < 400){
            $(item).find('.con').not('.on').delay(300).animate({
                top:0,
                opacity:1
            },700).addClass('on');
            $(item).find('.img').not('.on').animate({
                top:0,
                opacity:1
            },700).addClass('on');
        }
    });
 
});

$('.img, .con').css({
    top:200,
    opacity:0
});

$(window).scroll(function(){
    let sct = $(window).scrollTop();
    $('.scroll_view2').each(function(index,item){
        if($(item).offset().top - sct < 400){
            $(item).find('.con').not('.on').delay(300).animate({
                top:0,
                opacity:1
            },700).addClass('on');
            $(item).find('.img').not('.on').animate({
                top:0,
                opacity:1
            },700).addClass('on');
        }
    });
 
});
// ----- scroll시 내용 에니메이션 끝


$( document ).ready( function() {
	
    $('.multiple-items').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        
        
        responsive: [ // 반응형 웹 구현 옵션
					{  
						breakpoint: 700, //화면 사이즈 960px
						settings: {
							//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
							slidesToShow:1
						} 
					},
					
				]

    });


       // main_nav control
        // $('#main_nav ul').css({
        //     right:-$('#main_nav ul').width()
        // });

        $('#nav_toggle').click(function(){
            $('#main_nav').fadeIn(500);
            $('#main_nav ul').animate({
                right:0
            },500);
            $('#nav_toggle').fadeOut();
            $('.close').fadeIn(500);
        });
        $('.close').click(function(){
            $('#main_nav').fadeOut(500);
            $('#main_nav ul').animate({
                right:-$('#main_nav ul').width()
            },500);
            $('.close').fadeOut();
            $('#nav_toggle').fadeIn(500);
        });
        // main_nav control 끝


} ); //제이쿼리 끝



// 매거진 
  var oldsct = 0; //이전 스크롤탑값 기억할 변수
    $(window).scroll(function(){
        var sct = $(window).scrollTop();
        //스크롤 방향에 따라 헤더 보이고 감추게
        if(sct > oldsct){ //스크롤을 내리면 감추고
            $('#main_header').addClass('up');
        }else{ //스크롤을 올리면 보이고
            $('#main_header').removeClass('up');
        }
        oldsct = sct;
        // eat 배너 애니메이션
        $('.eat').each(function(index,item){
            var offtop = $(item).offset().top - sct;
            if(offtop < 500){
                $(item).addClass('on');
                $(item).find('.bg_wrap').css({
                    backgroundPositionY:90-(90*((500-offtop)/500))+'%'
                });
            }
        });
    }); //---스크롤 이벤트 끝

   


