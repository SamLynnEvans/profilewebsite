$(document).ready(function(){
	$('.circle').click(function(){
		var color = $(this).attr('id');
		$('#changer').css("background-color", color);
	});
});