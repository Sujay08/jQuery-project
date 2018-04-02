

//---------------------------------------------------Ready-----------------------------------------------------------

$(document). ready(function(){
//---------------------------------------------------TITLE------------------------------------------------------------
	$('.title').hide().show(600);

//---------------------------------------------------SPIN--------------------------------------------------------------
	$('.main').addClass("change").delay(5000).queue(function(){
		$(this).removeClass("change").dequeue();
	});

	$(".main").mouseenter(function(){
		$(this).addClass("change").delay(5000).queue(function(){
			$(this).removeClass("change").dequeue();
		});
	});

//-----------------------------------------CONTENT HAWAII----------------------------------------------------------------------
	$('button').on('mouseenter', function(){
		$(this).closest('.back-h').find('.text').addClass('red');
	});
	$('button').on('mouseleave', function(){
		$(this).closest('.back-h').find('.text').removeClass('red');
	});

	$('button').on('click', function(){
		$(this).closest('.back-h').find('.content-h').slideToggle(600);
		
	});

//---------------------------------------------CONTENT LONDON-----------------------------------------------------------------
	$('.l-btn').on('click', function(){
		$(this).closest('.back-l').find('.content-l').show(600);
		$(this).closest('.back-l').find('.li1').show(1500);
		$(this).closest('.back-l').find('.li2').show(3000);
		$(this).remove();
	});
	
//--------------------------------------------CONTENT CAPE TOWN---------------------------------------------------------
	$('button').on('click', function(){
		$(this).closest('.back-c').find('.content-c').fadeIn(3000);
		$('.ct-btn').hide();
	});

	$(window).on('scroll', function(){
		$('.content-c').fadeOut(1000);
		$('.ct-btn').fadeIn(2000);
	});
//-----------------------------------------------PARIS------------------------------------------------------------------------
	$('.content-p').on('mouseenter', function(){
		$(this).closest('.back-p').find('.paris').animate({marginTop: "-20px"});
		$(this).closest('.back-p').find('.paris').addClass('go-up');
	});

	$('.content-p').on('mouseleave', function(){
		$(this).closest('.back-p').find('.paris').animate({marginTop: "20px"});
		$(this).closest('.back-p').find('.paris').removeClass('go-up');
	});
	

});




