$(document).ready(function(){

	$('img').click(function(){
		var name = $(this).attr('id');
		$('.prepended').remove();
		$('h2').prepend('<span class="prepended">' + name +' baby yeaaa</span>');

	}); 

	$('#Cumin').click(function(){
		$(this).effect('bounce', {times: 4}, 400);
	});

		
	$('#Coriander').click(function(){
		$(this).toggle("explode", 300);
		setTimeout(function(){
			$('#Coriander').toggle("explode", 300)
		}, 280);


	})

	$('#Chilli-powder').click(function(){
		$(this).addClass('rotated');
		setTimeout(function(){
			$('#Chilli-powder').removeClass('rotated')
		}, 400)
	});

	$('#Fresh-coriander').click(function(){
		$(this).addClass('large');
		setTimeout(function(){
			$('#Fresh-coriander').removeClass('large')
		}, 700)
	});

	$('#Turmeric').click(function(){
		$(this).animate({top:'+=50px'}, 500);
		setTimeout(function(){
			$('#Turmeric').animate({top:'-=50px'}, 500)
		}, 700)
	});

	$('#Asafoetida').click(function(){
	$(this).effect('slide', 400);
	});



	$('#Chillies').draggable({
		revert: true
	});

	$('#Chillies').click(function(){
		$('p').show();
		setTimeout(function(){$('p').hide()}, 600)
	});

	$('#Cinnamon').click(function(){
		$(this).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
		
	})

		$('#Fenugreek').click(function(){
		$(this).addClass('c-rotated');
		setTimeout(function(){
			$('#Fenugreek').removeClass('c-rotated')
		}, 400)
	});



	})
