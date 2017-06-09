$(document).ready(function(){

	$(function() {
    //caches a jQuery object containing the header element
    var header = $("#main-nav");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 50) {
            header.addClass("nav-background");
        } else {
            header.removeClass("nav-background");
        }
    });
});
	
	
	// Hero and Featurette Resizing			
	// Clear Any Positioning or Heights for Featurettes
	function clearHeroFeaturetteMobile(){
	
		$("#heroFeaturesDesktop .inner").removeAttr('style');	
		$("#homeHero").removeAttr('style');
		
	}
	
	
	
		// Owl Carousels				
		
		//Owl Carousels Case Study Types
		function carouselTypeStudies(carousel, controlsContainer){
			
			// Owl Carousel Intialise
			$(carousel).owlCarousel({
			
				loop: true,
				margin: 30,		
				nav: true,				
				navText: [
						'<i class="fa fa-angle-left"></i>'
						,'<i class="fa fa-angle-right"></i>'
						],
				navContainer: controlsContainer,		
				mouseDrag: false, 
				touchDrag: false,
				pullDrag: false,
				responsiveClass: true,
				responsiveRefreshRate: 0,
				responsive: {
					0:{
						items: 1,
						slideBy: 1					
					},
					768:{
						items: 2,			
						slideBy: 2						
					}				
				}
			
			}); 
			
		};
		
		// Init Studies Carousels
		carouselTypeStudies(".carousel-home-place-studies",".carousel-nav-home-place-studies>.controls");
		carouselTypeStudies(".carousel-home-case-studies",".carousel-nav-home-case-studies>.controls");
	
		
		
		// Owl Carousel Intialise Home Partners
		$('.carousel-home-partners').owlCarousel({
		
			loop: true,
			autoplay: true,
			margin: 10,		
			nav: true,				
			navText: [
					'<i class="fa fa-angle-left"></i>'
					,'<i class="fa fa-angle-right"></i>'
					],
			navContainer: ".carousel-nav-home-partners>.controls",		
			mouseDrag: true,
			touchDrag: true,
			pullDrag: true,
			responsiveClass: true,
			dots: true,
			responsiveRefreshRate: 0,
			responsive: {
				0:{
					items: 1,
					slideBy: 1
				},
				768:{
					items: 3,			
					slideBy: 1						
				},
				992:{
					items: 4,			
					slideBy: 1						
				},
				1200:{
					items: 5,			
					slideBy: 1						
				}				
			}
		
		}); 
		
				
	
		//Owl Carousels Logo Types Subpages
		function carouselTypeLogos(carousel, controlsContainer){
			console.log('we getting there '+controlsContainer)
			// Owl Carousel Intialise
			$(carousel).owlCarousel({
			
				loop: true,
				margin: 10,		
				nav: true,				
				navText: [
						'<i class="fa fa-angle-left"></i>'
						,'<i class="fa fa-angle-right"></i>'
						],
				navContainer: controlsContainer,		
				mouseDrag: true, 
				touchDrag: true,
				pullDrag: true,
				dots: true,
				responsiveClass: true,
				responsiveRefreshRate: 0,
				responsive: {
					0:{
						items: 1,
						slideBy: 1
					},
					768:{
						items: 3,			
						slideBy: 1						
					},
					992:{
						items: 4,			
						slideBy: 1						
					},
					1200:{
						items: 5,			
						slideBy: 1						
					}				
				}
			
			}); 
			
		};
		
		
		// Find All Logo Carousels on Page	
		$(".carousel-logo-carousel").each(function(index) {
			var logoCarouselEntryID = $(this).attr("data-logo-carousel-entry-id");		
			
			// Init Studies Carousels
			carouselTypeLogos("#carouselLogoCarousel"+logoCarouselEntryID+".carousel-logo-carousel","#carouselNavLogoCarousel"+logoCarouselEntryID+".carousel-nav-logo-carousel>.controls");			
			
		});
		
		
		
		
		
		
		// Owl Carousel Intialise Home News
		$('.carousel-home-news').owlCarousel({
		
			loop: true,
			margin: 0,		
			nav: true,				
			navText: [
					'<i class="fa fa-angle-left"></i>'
					,'<i class="fa fa-angle-right"></i>'
					],
			navContainer: ".carousel-nav-home-news>.controls",		
			mouseDrag: true,
			touchDrag: true,
			pullDrag: true,
			responsiveClass: true,
			autoHeight : true,
			dots: true,
			responsiveRefreshRate: 0,
			responsive: {
				0:{
					items: 1,
					slideBy: 1
				}
			}
		
		}); 
		
	
				
		//Owl Carousels Case Study Types Subpages
		function carouselTypeSubpageStudies(carousel, controlsContainer){
			
			// Owl Carousel Intialise
			$(carousel).owlCarousel({
			
				loop: true,
				margin: 30,		
				nav: true,				
				navText: [
						'<i class="fa fa-angle-left"></i>'
						,'<i class="fa fa-angle-right"></i>'
						],
				navContainer: controlsContainer,		
				mouseDrag: true, 
				touchDrag: true,
				pullDrag: true,
				dots: false,
				responsiveClass: true,
				responsiveRefreshRate: 0,
				responsive: {
					0:{
						items: 1,
						slideBy: 1					
					}				
				}
			
			}); 
			
		};
		
		// Init Studies Carousels
		carouselTypeSubpageStudies(".carousel-sidebar-place-studies",".carousel-nav-sidebar-place-studies>.controls");
		carouselTypeSubpageStudies(".carousel-sidebar-case-studies",".carousel-nav-sidebar-case-studies>.controls");
		carouselTypeSubpageStudies(".carousel-sidebar-more-events",".carousel-nav-sidebar-more-events>.controls");
		carouselTypeSubpageStudies(".carousel-sidebar-services",".carousel-nav-sidebar-services>.controls");
		
		
		
		
				//Owl Carousels Case Study Types Subpages
		function carouselTypeContentAdverts(carousel, controlsContainer){
			
			// Owl Carousel Intialise
			$(carousel).owlCarousel({
			
				loop: true,
				margin: 30,		
				nav: true,				
				navText: [
						'<i class="fa fa-angle-left"></i>'
						,'<i class="fa fa-angle-right"></i>'
						],
				navContainer: controlsContainer,		
				mouseDrag: true, 
				touchDrag: true,
				pullDrag: true,
				autoHeight : true,
				dots: false,
				responsiveClass: true,
				responsiveRefreshRate: 0,
				responsive: {
					0:{
						items: 1,
						slideBy: 1					
					}				
				}
			
			}); 
			
		};
		
		carouselTypeContentAdverts(".carousel-sidebar-content-adverts",".carousel-nav-sidebar-content-adverts>.controls");




		// Owl Carousel Intialise Testimonials
		$('.carousel-testimonials').owlCarousel({
		
			loop: true,
			margin: 0,		
			nav: true,				
			navText: [
					'<i class="fa fa-angle-left"></i>'
					,'<i class="fa fa-angle-right"></i>'
					],
			navContainer: ".carousel-nav-testimonials>.controls",		
			mouseDrag: true,
			touchDrag: true,
			pullDrag: true,
			autoHeight : true,
			responsiveClass: true,
			dots: true,
			responsiveRefreshRate: 0,
			responsive: {
				0:{
					items: 1,
					slideBy: 1
				}
			}
		
		}); 

		
		
		
		
		
		
	// Swipe Functions for Owl Carousels (for thoses more than 1 item)
	
		// Home Case Studies Owl Carousel
		
		function carouselSwipe(element) {      
			//Enable swiping...
			$(element).swipe( {
			//Generic swipe handler for all directions
				swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
					
					if (direction=="left") {										
						$(this).trigger('next.owl.carousel');					
					}
					
					if (direction=="right") {										
						$(this).trigger('prev.owl.carousel');					
					}
					
				},
				//Default is 75px, set to 0 for demo so any distance triggers swipe
				threshold: 75,
				allowPageScroll: "vertical"
			});
		}


	// Start Owl Carousel Swipes			
	
		// Homepage
		carouselSwipe($(".carousel-home-case-studies"));		
		carouselSwipe($(".carousel-home-place-studies"));
		
		

	
	
	$("a[href='#contact-block']").click(function(){
		$('html, body').stop().animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, "slow");
		return false;
	});
	

	
	
	// News Filter	
	$("#newsFilters").submit(function(e){			
	
		e.preventDefault();
		
		var filterURL = $("#newsFilters option:selected").val();		
		location.href = filterURL;

	});
	
	// Form Validation
	
	// Quote Form Validation Initialise
	$("#formNavDesktopSearch").validate({
		rules: {
			keyword: {
				required: true
			}
		}	
	});	
	
	$("#formSearch").validate({
		rules: {
			keyword: {
				required: true
			}
		}	
	});	
	
	
	$("#formEventBooking").validate({
		rules: {
			email: {
				required: true
			}
		}	
	});	
	
	
	$("#formNewsletterSignup").validate({
		rules: {
			email: {
				required: true
			}
		}	
	});
	

	});	
		

		
		
		
		

					
						
		
	
