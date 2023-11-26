$(document).ready(function(){  
    $('nav').click(function(){
        $('.sidemenu').slideToggle(700);
        $('nav').toggleClass('active')
    });

    $('.gnb li').click(function(){
    	$(this).find('.lnb').slideToggle();
    });


    var winW;
    var bgMain = 100;
    var widthPx;
	var percent;


    for(i = 0; i < bgMain; i++){
    	$('.bg_box').append('<span></span>')
    	$('.bg_box span').eq(i).delay(i*50).animate({height:100+'%'}, 500);
    }

	rain()

    function rain(){
    	winW = $(window).width();
    	widthPx = winW/bgMain-1;   //개당 크기 px 에서 보더 두께 1px을 빼야 합니다.
    	percent = widthPx/winW*100;
    	$('.bg_box span').width((percent)+'200%');
    }


    $(window).resize(function(){
    	rain()
    })


})












$(document).ready(function(){
     var pageUrl = window.location.href

     $('.gnb a').each(function(){
        var link = $(this).attr('href');

        if(pageUrl.indexOf(link) != -1){
            $(this).parents('.lnb').show();
        }
     })

     $('.banner_items li').mouseenter(function(){
        var liIndex = $(this).index();

        $('.banner .contents p em span').eq(liIndex).css({color:'yellow', fontWeight:'bold', fontSize:'24px'})
        .siblings().css({color:'', fontWeight:'', fontSize:''})
     })




    $(window).scroll(function(){
        var scrT = $(window).scrollTop();
        var winH = $(window).height();

        $('.banner_items li').each(function(){
            var liTop = $(this).offset().top;
            
            if(scrT >= liTop - winH*0.7){
                $(this).addClass('on')
            }           
        })
    })

})  