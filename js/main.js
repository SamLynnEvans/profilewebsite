$(document).ready(function(){
	var Learn = ('.jumbotron');

	$('.mynav').localScroll({duration:800}); 
	$(Learn).localScroll({duration:800}); 


 var $btn = $('.btn');

$btn.click(function(){
  $(this).addClass('clicked');
  setTimeout(function(){
    $btn.removeClass('clicked');}, 1000);
  });


  $(document).scroll(function () {
   var targetH  = $('.break').offset().top;
    var $nav = $(".menu");
    var position = $(this).scrollTop();
  var targetA = $('#about').offset().top;
   var targetH  = $('.break').offset().top;
  var aboutNav = ('ul li:nth-child(3) a');
  var homeNav = ('ul li:first-child a');
  var portfolioNav = ('ul li:nth-child(2) a');
  var $firstrow = $('#first-row');
  var $secondrow = $('#second-row');
  var $thirdrow = $('#third-row');
  var secondrow_top = $secondrow.offset().top;
  var thirdrow_top= $thirdrow.offset().top; 

   var viewportWidth = $(window).width();
    
    if (viewportWidth < 1100) {
      
    $nav.toggleClass('scrolled', position > $nav.height());

  } else {$nav.toggleClass('scrolled', targetH  - position <= 50 );};
    

    $firstrow.toggleClass('rowHL', targetH  - position <= 50);
    $secondrow.toggleClass('rowHL', secondrow_top  - position <= 300);
    $thirdrow.toggleClass('rowHL', thirdrow_top  - position <= 300);


    

  if (position >= targetA) {
  	$('a').removeClass('active');
  	$(aboutNav).addClass('active');
  }
 
   if (position < targetH) {
  	$('a').removeClass('active');
  	$(homeNav).addClass('active');
  }
 
	if (targetH  - position <= 50 && position < targetA) {
		$('a').removeClass('active');
  	$(portfolioNav).addClass('active');	
    
    
    } 
	 

 

});



});



