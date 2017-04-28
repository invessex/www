$(document).ready(function(){
	
	// Set navDesktop Height to 0, to stop Mac Chrome Bug
	function navDekstopHeightReset(){
		
		// Full Height
		var navFullHeight = $("#navDesktop").outerHeight();
		$("#navDesktop").attr("data-full-height", navFullHeight);
		
		$("#navDesktop").css({"height":"0px", "top":"0px"});
		
		
		//Inner Height		
		var navInnerHeight = $("#navDesktop>.nav-inner").outerHeight();
		$("#navDesktop>.nav-inner").attr("data-inner-height", navInnerHeight);		
		$("#navDesktop>.nav-inner").css({"height":"0px", "overflow":"hidden"});	
			
	};
	
	// Menu Animate Opener
	$(".btn-menu").click(function(e){
		e.preventDefault();
		//console.log("clicked");
	
		// var navHeight = $("#navDesktop").outerHeight();			
		var navFullHeight = $("#navDesktop").attr("data-full-height");			
		var navBtnHeight = $(".nav-btn>.btn-menu").outerHeight();
		var navTopOffset = navFullHeight - navBtnHeight;
				
		// If Menu Isn't Open		
		if(! $("#navDesktop").hasClass("open") ){			
						
			// Reset Hidden Heights/ Tops
			var navInnerHeight = $("#navDesktop>.nav-inner").attr("data-inner-height");
			$("#navDesktop>.nav-inner").css({"height":navInnerHeight,"overflow":"auto"});
			$("#navDesktop").css({"height":navFullHeight, "top":"-400px"});
			
			
			// Animate Open		
			$("#navDesktop").stop().animate({
				top: 0,												
			}, {duration: 800, easing: "easeInOutQuart", complete: function() {
					//console.log("complete");
					$(this).addClass("open");	
					$(".btn-menu>i").removeClass("fa-bars");	
					$(".btn-menu>i").addClass("fa-times");					
				}
			});
		
		} else {
			
			$("#navDesktop").stop().animate({
				top: -navTopOffset + "px",											
			}, {duration: 800, easing: "easeInOutQuart", complete: function() {
					//console.log("complete");
					
					$(".btn-menu>i").removeClass("fa-times");	
					$(".btn-menu>i").addClass("fa-bars");					
					
					// Clear Hidden Heights/ Tops
					var navInnerHeight = $("#navDesktop>.nav-inner").attr("data-inner-height");
					$("#navDesktop>.nav-inner").css({"height":"0px","overflow":"hidden"});
					$("#navDesktop").css({"height":"0px", "top":"0px"});	
				
					$(this).removeClass("open");
				}
			});					
			
		}
		
	});	
	
	
	// Hero and Featurette Resizing	
	function homeHeroResize(){
		
		if ($(window).width() >= 751){
			
			var	homeHeroHeight,
			introRowHeight = $(".container-hero-intro").outerHeight(),
			featuretteRowHeight = $("#heroFeaturesDesktop .inner").outerHeight();
			
			homeHeroHeight = introRowHeight + featuretteRowHeight;
			
			$("#homeHero").height(homeHeroHeight);
			$("#heroFeaturesDesktop .inner").css({"top":-featuretteRowHeight});
		
		}
		else {
			
			$("#heroFeaturesDesktop .inner").removeAttr('style');	
			$("#homeHero").removeAttr('style')	
				
		}
			
	}
	
	
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
		
		
	// Counter Function
	function counter(element){
		
		// Counters		
		var counter = $(element),
		dataDuration = parseInt($(element).attr("data-duration")),
		dataCountTo = parseInt($(element).attr("data-countTo"))
		;
		
		//console.log("Duration " + dataDuration);
		//console.log("CoutnTo " + dataCountTo);
				
		counter.counter({
			autoStart: true,
			duration: dataDuration, 
			countTo: dataCountTo,
			placeholder: 0,
			easing: "easeOutCubic",
			onStart: function() {				  
			},
			onComplete: function() {				  
			}
		});	 			
		
	}
	
	
	// Scroll Top
	$("a[href='#top']").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow"); 
		return false;
	}); 
	
	
	$("a[href='#contact-block']").click(function(){
		$('html, body').stop().animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top
		}, "slow");
		return false;
	});
	
	
	$("a[href='#caseStudies']").click(function(){
		var navBarHeight = $(".nav-bar").outerHeight();
		
		$('html, body').stop().animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - navBarHeight
		}, "slow");
		return false;
	});


	$("a[href='#placeStudies']").click(function(){
		var navBarHeight = $(".nav-bar").outerHeight();
		
		$('html, body').stop().animate({
			scrollTop: $( $.attr(this, 'href') ).offset().top - navBarHeight
		}, "slow");
		return false;
	});
	
	
	
	
	// News Filter	
	$("#newsFilters").submit(function(e){			
	
		e.preventDefault();
		
		var filterURL = $("#newsFilters option:selected").val();		
		location.href = filterURL;

	});
	
	
	
	
	
		
		
	
	// Start Waypoints			
		
	
		// Home Waypoints Counters
		$("#counters-home").waypoint(function(direction) {

			counter($(".counter-home-1"));
			counter($(".counter-home-2"));
			counter($(".counter-home-3"));
			counter($(".counter-home-4"));
			
			this.destroy();		
		},{
			offset: '80%'
		});
		
		
		// Hide Contact Bar Waypoint
		$("#contact-block").waypoint(function(direction) {
			
			if(!$(".container-contact-bar").hasClass("open")){			
				
				// Animate Open		
				$(".container-contact-bar").stop().animate({
					bottom: -100,												
				}, {duration: 300, easing: "easeInOutQuart", complete: function() {
						//console.log("complete");
						$(this).addClass("open");						
					}
				});
				
			}
			else {
				
				// Animate Open		
				$(".container-contact-bar").stop().animate({
					bottom: 0,												
				}, {duration: 300, easing: "easeInOutQuart", complete: function() {
						//console.log("complete");
						$(this).removeClass("open");	 					
					}
				});
				
			}
						
		},{
			offset: '70%'
		});
		
		
		
	// Subpages
	
	// Check for "light" Container divs next to each other	
	function checkLightContainerStack(){
	
		var pageType = $("body").attr("data-page");
		
		if(pageType=="single-pager"){
			
			$(".light").each(function(index){
								
				if ($(this).next(".light").length){
					
					$(this).addClass("adjacent-light-no-pad-b");
					$(this).next(".light").addClass("adjacent-light");
					
				}	
				
			});
					
		}		
		
	}
	
	
	// Tooltip Opt-in
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})
	
	
	
	
	
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
	
	
	
	
	//Animation Functions
	function animtedElementsNoSupport(){		
		$(".to-be-animated").addClass("no-support");
	}
	
		
		
		
		
		
	// Initialise Functions Shizzle	
	if ($(window).width() > 748){				
		
		homeHeroResize();	
		
	} 
	else {
		
		clearHeroFeaturetteMobile();
		
	}
	
	checkLightContainerStack();
	
		
		
		
		
	// Desktop Only	Funcitons
	if(!(/Android|iPhone|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
		
		// Get Nav Height as Attr
		navDekstopHeightReset();		
		
				
		function debounce(func, wait, immediate){
			var timeout;
			return function() {
				var context = this, args = arguments;
				var later = function() {
					timeout = null;
					if (!immediate) func.apply(context, args);
				};
				var callNow = immediate && !timeout;
				clearTimeout(timeout);
				timeout = setTimeout(later, wait);
				if (callNow) func.apply(context, args);
			};
		};		
					
						
		// On Window Resize Functions
		$(window).resize(function() {
			
			// Debouncers
			var pageType = $("body").attr("data-page");
			heroResizeTimer = debounce(homeHeroResize, 100);
			
			if(pageType=="homepage"){				
				heroResizeTimer();													
			}
				
		});


	}	
	else {			
	// Mobile Only Functions	
	
		var pageType = $("body").attr("data-page");
					
		if(pageType=="homepage"){	
		
			if ($(window).width() > 748){				
				homeHeroResize();			
			}			
			else {			
				clearHeroFeaturetteMobile();			
			}
	
			
		}
			
		//Orientation Change Resize
		$(window).bind('orientationchange', function(event) {
			
			var pageType = $("body").attr("data-page");
					
			if(pageType=="homepage"){				
				homeHeroResize();								
			}		
			
		});
	
	}
	
	
	
	// Window Load Functions
	$(window).load(function(){
		
		var pageType = $("body").attr("data-page");
		
		if(!(/Android|iPhone|iPod|iPad|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
			
			if ($(window).width() > 748){	
			
				if (!$("html").hasClass("ie8")){
			
					if(pageType=="homepage"){	
					
			
						// Home Hero Animation
						$(".container-home.hero>.container-hero-intro .intro").addClass("animated fadeInLeft");
						$(".col-latest-news").addClass("animated fadeInRight");
						$(".container-hero-features .inner").addClass("animated fadeIn");	
							
					
						
						//HOMEPAGE WAYPOINTS		
			
						// Home Partners Waypoints
						$("#homePartners").waypoint(function(direction) {
							$("#homePartners header.section-header").addClass("animated fadeInLeft");	
							$(".col-carousel-home-partners").addClass("animated fadeIn");				
							this.destroy();		
						},{
							offset: '70%'
						});
						
						
						// Home Counter Waypoints
						$("#homeCounters").waypoint(function(direction) {
							$("#homeCounters header.section-header").addClass("animated fadeInLeft");	
							$(".row-counters-home").addClass("animated fadeIn");			
							this.destroy();		
						},{
							offset: '70%'
						});
						
						
						// Home Sectors Waypoints
						$("#homeSectors").waypoint(function(direction) {
							$("#homeSectors header.section-header").addClass("animated fadeInLeft");	
							this.destroy();		
						},{
							offset: '70%'
						});
				
						// Home Sectors Rows Waypoints
						$(".row-home-sector").each(function(index){
							var	id = $(this).attr("id");
							
							$("#"+id).waypoint(function(direction) {
								$("#"+id).addClass("animated fadeInUp");	
								this.destroy();		
							},{
								offset: '70%'
							});
							
						});
						
						
						// Home Case Studies Waypoints
						$("#homeCaseStudies").waypoint(function(direction) {
							$("#homeCaseStudies header.section-header").addClass("animated fadeInLeft");	
							$(".row-carousel-homeCaseStudies").addClass("animated fadeInUp");		
							this.destroy();		
						},{
							offset: '70%'
						});
						
						
						// Home Case Studies Waypoints
						$("#homePlaceStudies").waypoint(function(direction) {
							$("#homePlaceStudies header.section-header").addClass("animated fadeInLeft");	
							$(".row-carousel-homePlaceStudies").addClass("animated fadeInUp");
							this.destroy();		
						},{
							offset: '70%'
						});
						
						
						// Home News Waypoints
						$("#homeNews").waypoint(function(direction) {
							$("#homeNews header.section-header").addClass("animated fadeInLeft");	
							$(".col-carousel-nav-home-news").addClass("animated fadeInUp");
							$(".col-recent-news").addClass("animated fadeInRight");	 							
							this.destroy();		
						},{
							offset: '70%'
						});
						
						
						// Home Map Waypoints
						$("#homeInfrastructureMap").waypoint(function(direction) {
							$("#homeInfrastructureMap header.section-header").addClass("animated fadeInLeft");	
							$("#home-infrastructure-map").addClass("animated fadeInUp");
							this.destroy();		
						},{
							offset: '70%'
						});
												
						
						// Home Family Tabs Waypoints
						$("#homeFamily").waypoint(function(direction) {
							$("#homeFamily header.section-header").addClass("animated fadeInLeft");	
							$(".row-tabs-family").addClass("animated fadeInUp");							
							this.destroy();		
						},{
							offset: '70%'
						});
						
						
						// Home Contact Tabs Waypoints
						$("#contact-block").waypoint(function(direction) {
							$("#contact-block header.section-header").addClass("animated fadeInLeft");	
							$(".row-contact-panels").addClass("animated fadeInUp");							
							this.destroy();		
						},{
							offset: '80%'
						});




					
					}
					else {
			
						// Subpage Hero Animations
						$(".container-subpage-hero .section-header").addClass("animated fadeInUp");	
						
						
					}
					
				}
												
			}
			else {
				
				animtedElementsNoSupport();				
				
			}
			
			
			if ($("html").hasClass("ie8")){
				
				animtedElementsNoSupport();
				
			}

			
		
		} 
		else {
		
			animtedElementsNoSupport();		
						
		}
	
		
		
		// Load Language Modal
       // $('#languageModal').modal('show');
    
			
		
			
		// Homepage Preloader
		$('#preloader').fadeOut('slow',function(){
			$(this).remove();
		});
		
		
		
		// H3 Adjacent First Child Margin Removal ( + selector not working in CSS. )
		$(".col-listing-content>.content>h3:first-child").css({"margin-top":"0px"}); 
		
	

	
	});
 
	




				
	
});
// End DOM Ready
