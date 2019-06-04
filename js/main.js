$(document).ready(function(){

	// // Instantiate Mobile Menu

	 $('#new_id').slicknav();

	//Instantiate One page navigation

	$('.nav').onePageNav({
    currentClass: 'current',
    changeHash: false,
    scrollSpeed: 700,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing',
    begin: function() {
        //I get fired when the animation is starting
    },
    end: function() {
        //I get fired when the animation is ending
    },
    scrollChange: function($currentListItem) {
        //I get fired when you enter a section and I pass the list item of the section
    }
});

	// Instantiate MixItUp:

	$('.portfolio_area').mixItUp({
	animation: {
		duration: 500
	}
	});

	// Instantiate Scrolling or #link function:

	$(".scroll").click(function(event){		
		event.preventDefault();
		$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1500);
	});

	// Instantiate Scroll Top function:

	  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '800', // Distance from top before showing element (px)
    animation: 'slide', // Fade, slide, none
    scrollText: '<i class="fa fa-arrow-circle-up" aria-hidden="true"></i>', // Text for element
  });

	  


	  // jquery sticky_navigation//
	
		// grab the initial top offset of the navigation 
		var sticky_navigation_offset_top = $('#sticky_navigation').offset().top;
		
		// our function that decides weather the navigation bar should have "fixed" css position or not.
		var sticky_navigation = function(){
			var scroll_top = $(window).scrollTop(); // our current vertical position from the top
			
			// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
			if (scroll_top > sticky_navigation_offset_top) { 
				$('#sticky_navigation').addClass('stickyhead');
			} else {
				$('#sticky_navigation').removeClass('stickyhead'); 
			}   
		};
		
		// run our function on load //
		sticky_navigation();
		
		// and run it again every time you scroll //
		$(window).scroll(function() {
			 sticky_navigation();
		});
		//END
	  
	  

});
