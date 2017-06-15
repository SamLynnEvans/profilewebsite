$(document).ready(function(){

	$('img').click(function(){
		var name = $(this).attr('id');
		$('.prepended').remove();
		$('h2').prepend('<span class="prepended">' + name +' baby yeaaa</span>');

	});

	$('#Cumin').click(function(){
		$(this).effect('bounce', {times: 4}, 400);
	});

		$('#Cumin').click(function(){
		$(this).effect('bounce', {times: 4}, 400);
	});

	$('#Cinnamon').click(function(){
		$(this).animate({ top: '+=50px'}, 500);
	});



	})
