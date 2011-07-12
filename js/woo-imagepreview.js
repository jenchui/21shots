/*
 * Customised jQuery image preview script, with AJAXed image loading.
 *
 * Originally written by Alen Grakalic (http://cssglobe.com)
 * 
 * for more info visit http://cssglobe.com/post/1695/easiest-tooltip-and-image-preview-using-jquery
 *
 */

this.imagePreview = function () {	

	/* Configuration
	----------------------------------------*/
		
		xOffset = 10;
		yOffset = 30;
		previewId = 'preview';
		selector = '.list li';
		delay = 1000;
		
		// these 2 variable determine popup's distance from the cursor
		// you might want to adjust to get the right result

	/* Tooltip Hover Event
	----------------------------------------*/

	jQuery( selector ).hoverIntent ({
	
		sensitivity: 7, // number = sensitivity threshold (must be 1 or higher)
		interval: 500,   // number = milliseconds of polling interval
		over: hoverOn,  // function = onMouseOver callback (required)
		timeout: 0,   // number = milliseconds delay before onMouseOut function call
		out: hoverOff    // function = onMouseOut callback (required)
    
    });
	
	/* MouseMove Event ( Moves the preview )
	----------------------------------------*/
	
	jQuery( selector ).mousemove( function( e ) {
	
		jQuery( '#' + previewId )
			.css("top",(e.pageY - xOffset) + "px")
			.css("left",(e.pageX + yOffset) + "px");
	});
			
};

this.hoverOn = function( e ) {
			
			// Remove any existing instances of the preview element.
		
			jQuery( '#' + previewId ).remove();
		
			// Find the title.
		
			this.t = jQuery( this ).find( 'span.name' ).text();
			
			// Find the image URL.
			
			this.imgUrl = jQuery( this ).find( 'img' ).attr( 'alt' );
			
			var c = (this.t != "") ? this.t : "";
			
			// Setup the preview element and make sure it's hiden to start.
			
			var previewElement = jQuery( '<p></p>' ).attr( 'id', previewId ).hide();
			
			// Load the image via AJAX and add it to the preview element when it's done.
			
			jQuery( '<img />' ).attr( 'alt', c ).attr( 'src', this.imgUrl ).load( function () {
			
				jQuery( '#' + previewId ).html( jQuery( this ) );
			
			});
			
			// Load the preview element into the DOM.
			
			jQuery( 'body' ).append( previewElement );
			
			// Set the position of the preview element to match the cursor and fade it in.
							 
			jQuery( '#' + previewId )
				.css("top",(e.pageY - xOffset) + "px")
				.css("left",(e.pageX + yOffset) + "px")
				.fadeIn("fast");
								
	    }
	    
this.hoverOff = function( e ) {
			jQuery( '#' + previewId ).fadeOut();
	    }

/* Start the script on page load.
----------------------------------------*/

jQuery(document).ready(function(){
	imagePreview();
});