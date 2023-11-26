$(document).ready(function(){  
    $('nav').click(function(){
        $('.sidemenu').slideToggle(700);
        $('nav').toggleClass('active')
    });

    $('.gnb li').click(function(){
    	$(this).find('.lnb').slideToggle();
    });



    var winW = $(window).width();
    var bgMain = 100;

    for(i = 0; i < bgMain; i++){
    	$('.bg_box').append('<span style="box-sizing: border-box;"></span>')
    	$('.bg_box span').eq(i).delay(i*50).animate({height:100+'%'}, 500);
    	$('.bg_box span').width((winW/bgMain)-1);
    }

})

