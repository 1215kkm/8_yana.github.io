$(document).ready(function () {
    // $('.imgList li').eq(0).click(function(){
    //     $('.imgBox img').attr('src','images/main01.png')
    // })
    // $('.imgList li').eq(1).click(function(){
    //     $('.imgBox img').attr('src','images/main02.png')
    // })
    // $('.imgList li').eq(2).click(function(){
    //     $('.imgBox img').attr('src','images/main03.png')
    // })
    // $('.imgList li').eq(3).click(function(){
    //     $('.imgBox img').attr('src','images/main04.png')
    // })

    $('.imgList li').click(function () {
        var imgSrc = $(this).children('img').attr('src');
        $('.imgBox img').attr('src', imgSrc);

        $('.imgList li').removeClass('active');
        $(this).addClass('active')
    });

    var i = 0;
    $('.prod_slide button.next').click(function () {
        i = i + 1;
        console.log(i);

        $('.prod_slide button.prev').show()
        if (i >= 4) {
            $(this).hide()
        }
        $('.prod_slide ul').animate({ marginLeft: -270 * i }, 200)
    })
    $('.prod_slide button.prev').click(function () {
        i = i - 1;

        $('.prod_slide button.next').show()
        if (i <= 0) {
            $(this).hide()
        }
        $('.prod_slide ul').animate({ marginLeft: -270 * i }, 200)
    })


    var todayTop = parseInt($('#today').css('top'))

    $(window).scroll(function () {    //스크롤할때 발생함
        var scrT = $('html').scrollTop();
        console.log(scrT)

        $('#today').stop().animate({ top: scrT + todayTop })

        if (scrT > 1000) {
            $('#section2 .sale_box').fadeIn()
        } else {
            $('#section2 .sale_box').fadeOut()
        }

        if (scrT > 350) {
            $('#header').css({ position: 'fixed', top: -100, zIndex: '7', boxShadow:'0 20px 20px rgba(0,0,0,0.1)' })
            $('#visual_main, #visual_sub').css({ marginTop: '350px' })
        } else {
            $('#header').css({ position: '', top: '', zIndex: '7' })
            $('#visual_main, #visual_sub').css({ marginTop: '' })
        }
    })

    $('#today a.gotop').click(function () {
        $('html').animate({ scrollTop: 0 })
    })

})











