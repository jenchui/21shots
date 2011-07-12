/*
 * jQuery Tooltips Plugin
 * http://www.evanbot.com/article/jquery-tooltips-plugin/14
 *
 * Copyright (c) 2009 Evan Byrne (http://www.evanbot.com)
 */
jQuery.fn.tooltip = function(element,offX,offY){

	if(element == null){var element = '#tooltip';}
	
	if(offX == null){var offX = 5;}
	
	if(offY == null){var offY = 5;}
	
	/*
	jQuery(this).each(function(){
		var title = jQuery(this).children('img').attr('src');
		jQuery(this).removeAttr('title').attr('tip',title);
		
		
	});*/
	
	jQuery(this).bind("mouseenter",function(){
	  jQuery(element).show();
	  jQuery('#preview').find('img').attr('src','http://demo.woothemes.com/wp-content/themes/x-switcher/img/loading-bottom.gif');
jQuery('').css('border','1px solid red');
	  //var tip = jQuery(this).attr('tip');
	  var img_url = jQuery(this).find('img').attr('alt');
		//alert(img_url);
		jQuery(this).find('img').load(img_url,function(){
			//jQuery(this).attr('src',img_url);
			jQuery(element).html('<img src="' + img_url +'" alt="" />');
		});
		
	});
	
	jQuery(this).mousemove(function(e){

			jQuery(element).css({top:e.pageY+offY,left:e.pageX+offX});
		
		
		
	});
	
	jQuery(this).bind("mouseleave",function(){
		jQuery(element).hide();
	});
	
	return this;
};