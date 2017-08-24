jQuery(document).ready(function($){
	//open popup
	$('.cd-popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
    });
	
	$('.cd-popup-container li').on('click', function(event){
	
		$(".cd-popup-trigger span").text(($(this).text()));
		$('.cd-popup').removeClass('is-visible');
	});
});

jQuery(document).ready(function($){
	//open popup
	$('.cd-popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.cd-popuper').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popuper').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popuper') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popuper').removeClass('is-visible');
	    }
    });
	
	$('.cd-popup-containerdd li').on('click', function(event){
	
		$(".cd-popup-trigger span").text(($(this).text()));
		$('.cd-popuper').removeClass('is-visible');
	});
});

jQuery(document).ready(function($){
	//open popup
	$('.cd-popup-triggerll').on('click', function(event){
		event.preventDefault();
		$('.cd-popuped').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popuped').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popuped') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popuped').removeClass('is-visible');
	    }
    });
	
	$('.cd-popup-containerff li').on('click', function(event){
	
		$(".cd-popup-triggerll span").text(($(this).text()));
		$('.cd-popuped').removeClass('is-visible');
	});
});

jQuery(document).ready(function($){
	//open popup
	$('.cd-popup-triggeruu').on('click', function(event){
		event.preventDefault();
		$('.cd-popupes').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popupes').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popupes') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popupes').removeClass('is-visible');
	    }
    });
	
	$('.cd-popup-containerss li').on('click', function(event){
	
		$(".cd-popup-triggeruu span").text(($(this).text()));
		$('.cd-popupes').removeClass('is-visible');
	});
});


