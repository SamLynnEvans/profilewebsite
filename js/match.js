$(document).ready(function(){
	
	var clicks = 0;

	
	$(document.body).on('click', '.invisible', function(e) {
	
	

    if(clicks % 2 == 0){
    	$(this).removeClass('invisible');
    	var x = $(this).attr('id');
    	$('.test').append(x);
    	
    }else{
    	$(this).removeClass('invisible');
    	$('img').addClass('invisible');
    	var y = $(this).attr('id');
    	$('.test2').append(y);


    	}

    ++clicks;



});
	$('.test').click(function(){
		var p = $(this).html();
		alert(p);
		

	})

	$('.test2').click(function(){
		var t = $(this).html();
		alert(t);
		

	})

	if (p == t) { 
		var elem = document.getElementById(p);
		$(elem).addClass('visible');

	} 

var test2 = document.getElementById('pie');
	test2.addClass('visible');
});



	  /*var clicks = $('.invisible').data('clicks');
  if (clicks == 1) {
  	$(this).removeClass('invisible');
     alert('1')
  } else {
     alert('2')
     $(this).removeClass('invisible');
  }
  $(this).data("clicks", !clicks);*/
    /*if(clicks == 0){
         	$(this).removeClass('invisible');  
   	alert('1');
    } else {
        $(this).removeClass('invisible');
        alert('2');
    }
    ++clicks;*/



		/*var clicks = $(this).data('clicks');
		if (clicks) {
   	$(this).removeClass('invisible');  
   	alert('1');
  } else {
     $(this).removeClass('invisible');
     alert('2')
  }
  $(this).data("clicks", !clicks);
  		
});
	
		var clicks = 0;

    if(clicks == 0){
        // first click
    }else{
        // second clik
    }
    ++clicks;
}*/
		
	




