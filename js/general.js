jQuery(document).ready(function(){

/*-----------------------------------------------------------------------------------*/
/* Portfolio Carousel (jCarouselLite) */
/*-----------------------------------------------------------------------------------*/

if ( jQuery( '.portfolio-carousel' ).length ) {
	if ( jQuery( '.portfolio-carousel .slides li' ).length > 1 ) {
		
		var visibleSlides = 5;
		var autoSpeed = parseInt( woo_slider_settings.auto );
		var slideSpeed = parseInt( woo_slider_settings.speed );
		
		// Make sure the slider doesn't freak out if there are fewer than 5 items.
		if ( jQuery( '.portfolio-carousel .slides li' ).length < 5 ) {
			visibleSlides = jQuery( '.portfolio-carousel .slides li' ).length;
		}
	
		jQuery( '.portfolio-carousel' ).jCarouselLite({
		
			btnNext: '#carousel-inner .btn-next', 
			btnPrev: '#carousel-inner .btn-prev', 
			auto: autoSpeed, 
			speed: slideSpeed, 
			visible: visibleSlides, 
			circular: false
		
		});
		
		jQuery( '#carousel-inner .btn-prev' ).addClass( 'disabled' );
		jQuery( '#carousel-inner .btn-next' ).click( function () {
			jQuery( '#carousel-inner .btn-prev.disabled' ).removeClass( 'disabled' );
		});

	}
}

/*-----------------------------------------------------------------------------------*/
/* Add alt-row styling to tables */
/*-----------------------------------------------------------------------------------*/

	jQuery( '.entry table tr:odd').addClass( 'alt-table-row' );


/*-----------------------------------------------------------------------------------*/
/* Superfish navigation dropdown */
/*-----------------------------------------------------------------------------------*/

if(jQuery().superfish) {
		jQuery( 'ul.nav').superfish({
			delay: 200,
			animation: {opacity:'show', height:'show'},
			speed: 'fast',
			dropShadows: false
		});
}


});