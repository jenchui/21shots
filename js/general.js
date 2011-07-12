jQuery(document).ready(function() {
	
	// Tooltip that uses #mytip as tooltip element with a custom offset
	// jQuery('#themes li').tooltip('#preview',20,20);
		
    jQuery('#disable').css('opacity','0.5');
	
	jQuery('.dropdown ul li:first-child a').css('border-top', '0');
	jQuery('.dropdown ul li:last-child a').css('border-bottom', 'none');
	
	// When clicking outside the menu, close it.
	jQuery('#outside').click( function() {
	
		jQuery('.list').each( function() {
		
			if ( jQuery(this).css('display') == 'block' ) {
			
				jQuery(this).slideUp();
				jQuery('.dropdown h2 a.up').removeClass('up');
			
			} // End IF Statement
		
		});
	
	});
	
	// Close the select list when an item is clicked.

	jQuery( '.list li' ).click( function() {
	
		jQuery('.list.active-list').removeClass('active-list');
		
		jQuery( '.dropdown h2 a' ).removeClass( 'up' ); 
	
	});
	
	// Close the select list when the other list is clicked.
	jQuery('.dropdown h2 a').click( function() {
	
		jQuery('.list.active-list').removeClass('active-list');
	
		jQuery(this).parents('h2').next('.list').addClass('active-list');
		
		jQuery('.list:not(.active-list)').slideUp();
		jQuery('.dropdown h2 a.up').removeClass('up'); 
	
	});
	
	//Menu Clicks
	jQuery('.dropdown h2').click(function() {
	
		if(jQuery(this).next('.list').css('display') == 'block'){
        
    		jQuery(this).next('.list').slideUp();
       		jQuery(this).children('a').removeClass('up'); 
        
   		} else {
        
     		jQuery(this).children('a').addClass('up');
			jQuery(this).next('.list').slideDown();
			
    	}
        
    	return false;
	
	}); // End Click
		

	//Auto Height Stuff
         
    var h = jQuery(window).height();
    h = h - 60;
        
	//If the User resizes the window, adjust the #container height
    jQuery(window).bind("resize", resizeWindow);
    function resizeWindow( e ) {
        var newh = jQuery(window).height();
        newh = newh - 60; 
        jQuery('#iframe').height(newh)
    };

    jQuery('#iframe').height(h);
    jQuery('#styles h2 a').text('More Styles...');
    
	jQuery("#styles ul li").click(function(){
			
		var styleURL = jQuery(this).children('a').attr('rel');
		
		jQuery('#iframe').contents().find('link[href*="/styles/"]').attr('href',styleURL);
		
	});// end click
	
	var stylesList = jQuery('#styles ul li');
	
	jQuery("#themes li").click(function(){
	
		jQuery('#styles .list')
			.add('#styles .list')
			.add('#styles .list .inside')
			.add('#styles .list li')
			.attr('style','');

	
		jQuery("#themes li").removeClass('active');
	    jQuery(this).addClass('active');
	    var relurl = jQuery(this).children('a').attr('rel');
	    var themeid = jQuery(this).attr('rel');         
        var name = jQuery(this).children('a').children().children('.name').text();
        var date = jQuery(this).children('a').children().children('.type').text();
        var type = jQuery(this).children('a').children('.type').text();
                
        stylesList.addClass('hidden');
        jQuery('#styles ul li.theme-id-' + themeid).removeClass('hidden'); 
                
	    jQuery('#themes h2 a').html(name + ' <span>' + type + '</span>');
            	  
        var buy = jQuery(this).children('a').attr('buy');
        var demo = jQuery(this).children('a').attr('demo');
            	  
	    jQuery('#purchase').attr('href',buy);
	    jQuery('#close').attr('href',demo);
	     		 
	    //Close Dropdown
	    jQuery('#themes .list').slideToggle();
				
		if(jQuery('#styles .list').css('display') == 'block'){
			jQuery('#styles .list').hide();
		}
			
	    callIframe(demo);
				
	    return false;
	    
	});     
});

//Iframe Callback Function
function callIframe(url) {
    jQuery('#iframe').attr('src', url).css('visibility','visible');


    jQuery('#disable').show();
    jQuery('#iframe').load(function() 
    {
     	
     	jQuery(this).css('visibility','visible');;
     	jQuery('#disable').hide();
     	
     	
        
    });

}