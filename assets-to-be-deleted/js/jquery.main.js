$.noConflict();
jQuery( document ).ready(function() {
	jQuery('.hide').hide().removeClass('hide');
	
	jQuery('#slider-code').tinycarousel({ interval: true });
	
	function toggleMegaMenu(current,previous){
		
		if(!jQuery('.megamenu').hasClass('in')){
			jQuery('.megamenu').slideDown(300,function(){
				jQuery('.megamenu').addClass('in');
			});
		}
		if(typeof previous == 'undefined' && jQuery('.megamenu').hasClass('in')){ 
			jQuery('.megamenu').slideUp(300,function(){
				jQuery('.megamenu').removeClass('in');
			});
		}

	}

	function bottomPosition(selector){
		var self = jQuery('*[data-position="bottom"]')
		jQuery(self).each(function(){
			var sh = jQuery(selector).height();
			var ph = jQuery(this).parent().height();
			var h = jQuery(this).height();
			var nh = parseInt(sh - h -50);/*cant find the 50 but it works */
			jQuery(this).css({
				'position':'relative',
				'top':nh+'px'
			})
		});
	}

	function maxColumnHeight(selector){
		var maxH = 0;
		jQuery('*[data-height="'+selector+'"]').each(function(){
			var h = jQuery(this).outerHeight();
			if(h > maxH){
				maxH = h;
			};
		});
		jQuery('*[data-height="'+selector+'"]').height(maxH);
	}
	
	function maxListItemHeight(){
		var maxH = 0;
		jQuery('.pageOverviewRelatedPages li').each(function(){
			var h = jQuery(this).height();
			if(h > maxH){
				maxH = h;
			};
		});
		jQuery('.pageOverviewRelatedPages li').height(maxH);
	}	
	
	// MAIN MENU - MEGAMENU
	jQuery('a[data-target]').click(function(){
		var parent = jQuery(this).parent();
		var previous = parent.siblings('li.active').find('a').attr('data-target');
		var current = jQuery(this).attr('data-target');
		var active = jQuery(this).attr('data-segment');
		
		jQuery(".megamenu").load( "/index.php/api/subnav/"+current+'/'+active,function(responseTxt,statusTxt,xhr){
			if(statusTxt=="success"){
				jQuery('#megamenu').html('<div>'+responseTxt+'</div>');
				jQuery(parent).addClass('active').siblings().removeClass('active');
				toggleMegaMenu(current,previous);
				maxColumnHeight('siblings');
				maxListItemHeight();
				bottomPosition('.column02');
			}
		});
		
	});
	
	// SAME HEIGH COLUMNS
	jQuery(function(){
		jQuery('.matchedHeights').each(function(){
			var h = 0;
			var me = jQuery(this).find(' > div');
			
			jQuery(me).each(function(){
				var th = jQuery(me).outerHeight();						
				if(th > h){
					h = th;
				}
				jQuery(me).height(h);
			});
			
		});
	});
		
	
});
