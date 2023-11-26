$(document).ready(function(){
	$('.section3 .name').each(function(){
	   var nameText = $(this).text();
	   var nameLength = nameText.length;
 
	   $(this).text(nameText.substr(0,1)+'*'+nameText.substr(2,1))
	})
 
 
	var zero = 0;
	$(window).scroll(function(){
	   var scrT = $(window).scrollTop(),
		  winW = $(window).width(),
		  winH = $(window).height(),
		  docH = $(document).height()
 
 
	   if(scrT > zero){
		  $('header').hide();
	   } else {
		  $('header').show().css({position:'fixed', top:0});
	   } 
 
	   if(scrT <= 0) {
		  $('header').show().css({position:'', top:0, background:''});
	   }
 
	   zero = scrT
 
 
	   //비디오부분 페럴랙스
	   $('#visual video').css({marginTop:scrT/3, opacity:1-scrT/800});
	   $('.textbox').css({marginTop:scrT/2});
 
	   
		 $('.bar').css({width:(scrT * winW) / (docH - winH)});
	})
 
 
	/*$(window).on('scroll',function(){
	   var scrT = $(window).scrollTop();
 
	   if(scrT){
		  $('header').hide();
	   }
	})*/
 
 
 
	//section2 배경 이미지 변경
	$('.section2 .story_box img').click(function(){
	   var imgSrc = $(this).attr('src');
	   $('.section2').css({backgroundImage:'url("'+imgSrc+'")'});
	   return false;
	})
 
 
 
	//이미지 롤링
	var i = 0;
	$('.list_img > ul').eq(i).css({border:'3px solid black', boxSizing:'border-box'});
	
	function rollingImg(){
	   i++;
 
	   if(i >= 4){
		  i=0;
	   }
 
	   $('.list_img > ul').css({border:'1px solid #999', boxSizing:'border-box'})
	   $('.list_img > ul').eq(i).css({border:'3px solid black', boxSizing:'border-box'});
 
	   var listSrc = $('.list_img > ul').eq(i).find('.thumb img').attr('src');
	   $('.big_img img').attr('src',listSrc);
 
	}
 
	var autoRolling = setInterval(function(){
	   rollingImg();
	},2000)
 
 
	$('.list_img > ul').mouseenter(function(){
	   clearInterval(autoRolling);
 
	   i = $(this).index();
 
	   $('.list_img > ul').css({border:0})
	   $('.list_img > ul').eq(i).css({border:'3px solid black', boxSizing:'border-box'});
 
	   var listSrc = $('.list_img > ul').eq(i).find('.thumb img').attr('src');
	   $('.big_img img').attr('src',listSrc);
	})
 
	$('.list_img > ul').mouseleave(function(){
	   autoRolling = setInterval(function(){
		  rollingImg();
	   },2000)
	})
 
 
 
 
 
 
	//모바일메뉴
	$('.hamberg').click(function(){
	   $('.modal').fadeToggle();
	   $('.m_gnb').toggleClass('on');
	   $('body').toggleClass('on');
	   $('.hamberg').toggleClass('on');
	});
 
	var gnbCont = $('.gnb').html();
	$('header').append('<div class="m_gnb"></div>');
	$('.m_gnb').html(gnbCont);
 
	$('.m_gnb li').click(function(){
	   $(this).find('.lnb').slideDown().parent().siblings().find('.lnb').slideUp();
	});
 
	
	//윈도우창 사이즈 조절시
	/*$(window).resize(function(){
	   if( $(window).width() > 750  ){
		  lnbWidth()
	   } else {
		  $('.lnb').css({width:'100%'})
	   }
	})
 
	//새로고침시
	if( $(window).width() > 750  ){
	   lnbWidth()
	}*/
 
 
	// function lnbWidth(){
	   //lnb 자동너비
	   $('.gnb > li').mouseenter(function(){
 
		  var totalWidth = 0;
		  $('.lnb li').each(function(){
			 //totalWidth = totalWidth + Math.ceil($(this).outerWidth(true));
			 totalWidth += Math.ceil($(this).outerWidth(true));
			 console.log(totalWidth);
		  });
		  $('.gnb .lnb').css({width:totalWidth});
 
	   })
	// }
	
	
 })