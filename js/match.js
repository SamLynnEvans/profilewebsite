$(document).ready(function(){
	
	var clicks = 0;

	
	$(document.body).on('click', '.invisible', function(e) {
  var clicks = $(this).data('clicks');
  if (clicks) {
     alert('1')
  } else {
     alert('2')
  }
  $(this).data("clicks", !clicks);



});

});


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
		
	




