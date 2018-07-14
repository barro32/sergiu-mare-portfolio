// initializing the functions
$(document).ready(function(){
	var $window = $(window),
	    $portfolio = $('#portfolio'),
		$loadMoreProjects = $portfolio.find('.load-projects'),
	    $tablet_width  = 920,
	    quoteNumber = 0,
	    sir = [$('.about-me'),
		       $('.skills-description')
			];
			
	// map API
    function initMap() {
        var uluru = {lat: 51.537171, lng: 0.687101};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: uluru,
		  styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.business",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels",
    "stylers": [
      {
        "color": "#ffffff"
      },
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#5887ff"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "road.local",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#5887ff"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#334e87"
      },
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#090909"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
]
        });
		var iconBase = '/images/logoMS-MapsApi.png';
		
        var marker = new google.maps.Marker({
          position: uluru,
		  icon: iconBase,
		  map: map,
		  
	    });
    }
	
	// page-hero
    function pageHero(){
    	var $windowHeight = $(window).height();
		
		// checkin if the height of the page hero is displayed full window height
    	if($('.page-hero').find('.holder-1200').height() !== $windowHeight){
			$('.page-hero').find('.holder-1200').height($windowHeight);
		}
    }

    // navigation
    function navigation(){
    	var enterTimer,
    	    leaveTimer,
    		clickTimer,
			mobileClickTimer,
			$header = $('.header');
    	    
            // desktop navigation			
    		$header.find('.nav-list li').on({
    			mouseenter : function(){
    				
    				$this = $(this);
    				
    				if( $(window).width() < 768 ){ return;}
    				
                    clearTimeout(enterTimer);
    				enterTimer = setTimeout(function(){
    				 
    				   $this.addClass('active');
    				   $this.siblings().removeClass('active');
    				   				 
    				},300);
    			},
    			click : function(){
    				
    				if( $(window).width() > 768 ){ return;}
    				
    				clickTimer = setTimeout(function(){
    				
                      $this.addClass('active');
					  $this.siblings().removeClass('active');
    				
    				},300)
    			}
    		})
			
			// mobile navigation
			$header.find('.burger-menu').click(function(){
				
				$this =$(this);
				
				//avoid multiple clicks
				clearTimeout(mobileClickTimer);
				mobileClickTimer = setTimeout(function(){
					$this.toggleClass('open');
					$header.toggleClass('shadow');
				},300)
				
				
			})
    
	        $header.find('a').click(function(e) {
								
				$header.find('.burger-menu').removeClass('open');
			    $header.removeClass('shadow');	
				
				// Make sure this.hash has a value before overriding default behavior
                if (this.hash !== "") {
                  // Prevent default anchor click behavior
                  e.preventDefault();
                
                  // Store hash
                  var hash = $(this.hash).offset().top - 60;
				  
                  // Using jQuery's animate() method to add smooth page scroll
                  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                  $('html, body').animate({
                    scrollTop: hash
                  }, 800, function(){
                
                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                  });
                } // End if
				
            });
			
			// on scrolling down the page the active class in te navigation is updated 
			$('body > section').mouseenter(function(){
				var $this = $(this),
				    $thisId = "#" + $this.attr('id');
				
				$header.find('a[href='+$thisId+']').parent().addClass('active').siblings().removeClass('active');
				
			})
	}
     	 
    //sticky header
	function stickyHeader(){
		var $header = $('.header');
		
		if($window.scrollTop() > 0){
			$header.addClass('fixed');
		}else{
		    $header.removeClass('fixed');
		}		 
	}
	
    // writeNameOnPageHolder
	function writeText(){
		var name = "Sergiu Mare",
		    job  = "Front-End Developer",
			sirName = [],
			sirJob = [],
			$hero = $('.page-hero'),
			$heroName = $hero.find('.page-hero-message .page-hero-message-name'),
			$heroJob= $hero.find('.page-hero-message .page-hero-message-job'),
			sirName = name.split(""),
			sirJob = job.split(""),
			emptyStringName=[],
			emptyStringJob=[],
			i=0,
			j=0,
			startNameInterval;
			
			// make the braces visible
			$hero.find('span.show').addClass('visible');
		    
			// initialise the name and the job description	
			setTimeout(function(){
				startNameInterval = setInterval(function(){
					if(i < sirName.length){
						emptyStringName+=sirName[i];
			            $heroName.text(""+emptyStringName+"");
						i++;
					}else if(j < sirJob.length){
						emptyStringJob+=sirJob[j];
			            $heroJob.text(""+emptyStringJob+"");
						j++;
					}else{
						clearInterval(startNameInterval);
					}
				},150) 
		    },1000)
	}
	
	// sale the skills tile that is hover
	function skills(){
		var $skills = $(this),
		    $skillsDescription = $skills.find('.skills-full-description'),
		    $heightToInsert = $skills.find('.two-third').height(),
			mouseEnterSkillsDescription,
			mouseOutSkillsDescription,
			decriptionEnterTimer,
			decriptionOutTimer,
			$textToDisplay,
			clickTimerAccordion;
		
		// make the skill section and the description equal
		$skills.find('.one-third .skills-full-description').css({'minHeight': $heightToInsert});
		
		// make the skills to highlight on hover
		$skills.find('.skills-description .element ').on({
			mouseenter : function(){
				
				// check if the user it's on desktop
				if($window.width() < $tablet_width){
				  return;
				}
				
				var $this = $(this),
				$titleToDisplay = $this.find('h3').text(),
				$textToDisplay = $this.find('p').text();
				
				// prevent the mouseout event to trigger
				clearTimeout(mouseOutSkillsDescription);
				
				mouseEnterSkillsDescription = setTimeout(function(){
					// if th description is active then cancel the action 
					if(!$this.hasClass('active')){
					// if the description is not active ,hide it change the text and show it afterwards
					   $skillsDescription.children('div').fadeOut('fast',function(){
					   $(this).find('h3').text($titleToDisplay);
				       $(this).find('p').text($textToDisplay);
					   $skillsDescription.children('div ').fadeIn();
				    });
					
					}
					
					// make the elements active, remove the active state from the siblings()
					$this.siblings().removeClass('active');
					$this.addClass('active');
					
				},300);
				
			},mouseleave : function(){
				
				// check if the user it's on desktop
				if($window.width() < $tablet_width){
				  return;
				}
				
				var $this = $(this);
				
				// prevent the mouseenter event to trigger
				clearTimeout(mouseEnterSkillsDescription);
				
				mouseOutSkillsDescription = setTimeout(function(){
					
					$this.removeClass('active');
				},300)
				
			},click : function(){
				
				// check if the user it's on mobile
				if($window.width() > $tablet_width){
				  return;
				}
				
				var $this = $(this);

				clearTimeout(clickTimerAccordion);
				
                clickTimerAccordion = setTimeout(function(){
					$this.toggleClass('active').siblings().removeClass('active');
				    $this.find('p.hide').stop().slideToggle();
				    $this.siblings().find('p.hide').stop().slideUp();
				},300)
				
				
				
;			}
		});
		
		// make the description square highlight when one of the
		// skills is hovered
		$skills.find('.skills-description .two-third').on({
			mouseenter : function(){
				// check if the user it's on desktop
				if($window.width() < $tablet_width){
				  return;
				}
				
				var $this = $(this);
				
				// make the parent active, has an impact over the description 
				clearTimeout(decriptionOutTimer);
				decriptionEnterTimer = setTimeout(function(){
					$this.addClass('active');
				},300)
			},
			mouseleave : function(){
				
				if($window.width() < $tablet_width){
				  return;
				}
				
				var $this = $(this);
				
				clearTimeout(decriptionEnterTimer);
				decriptionOutTimer = setTimeout(function(){
					
					// remove the active class from the parent level
					$this.removeClass('active');
					
					// remove the active class from the elements inside the parent 
					$this.find('.active').removeClass('active');
				},300)
			}
		})
	    
	}
	
		
	//footer, makes the year in the footer  dynamical 
	function footer(){
		var currentYear = new Date().getFullYear();
		$('footer .year').text(currentYear);
	}
		
	// general function to apply animations
	function scrollAboveBottom(){
	     var $this = $(this);
		 
		if($window.scrollTop() <= 0){
		    $this.find('.animated.fadeInUp').removeClass('animated fadeInUp');
			return;
			
		 }else if($window.scrollTop() + $window.height() > $this.offset().top){
			
			 if($this.hasClass('about-me')){
			   $this.find('.image-element').addClass('animated fadeInUp');
			   $this.find('.text-element').addClass('animated fadeInUp');
			 }else if($this.hasClass('skills')){
			   $this.find('.skills-tiles .element').addClass('animated fadeInUp');
			 }
		 }
		
		
	}
	
	// portfolio open modal 
	function portfolio(){
		var $this = $(this),
		    $modalDescription = $this.closest('.portfolio').find('.description'),
		    openModalTimer;
		
		$this.find('button').on({
			click : function(){
				var $this = $(this),				    
			        $title = $this.data('title'),
				    $text = $this.data('info'),
				    $skills = $this.data('skills'),
				    $url = $this.data('url'),
					$id = $this.data('id');
				
				if(!$this.hasClass('load-projects')){
					   $modalDescription.find('.modal-title').text($title);
			           $modalDescription.find('.modal-text').text($text);
			           $modalDescription.find('.modal-skills').text($skills);
			           $modalDescription.find('.button').attr('href' , ''+$url+'');	
                       $modalDescription.find('.button').attr('data-id' , ''+$id+'');					   
			           
			           clearTimeout(openModalTimer)
			           openModalTimer = setTimeout(function(){
			           	$modalDescription.next().fadeIn(function(){
				  	    $modalDescription.slideDown();
			           })
			        },300)
				}else{
                    $this.closest('.holder').next().slideDown();				
				}							     
			},
			mouseenter : function(){
				
				// on devices without touch disable this feature
				if($window.width() > 1024){
					return;
				}
				
				$(this).click();
			}
		})
		
		$modalDescription.find('a.button').click(function(e){			
			e.preventDefault();
			window.location.href = $(this).attr('href');            	
		})
		
		$this.find('.description .close-button').click(function(){
			var $this = $(this),
			    closeModalTimer;
			
			clearTimeout(closeModalTimer);
			closeModalTimer = setTimeout(function(){
				$this.closest('.description').slideUp(function(){
					$this.closest('.description').next().fadeOut();
				});
			},300)
		})
		
	}
	
	function displayIframe(){
		var $portfolio = $('#portfolio'),
		    $spanHolder = $portfolio.find('span.hide');
				
		$spanHolder.removeClass();
	}
	
	
    // on resize reset the values
    $window.resize(function(){
    	pageHero();
    });
	
	$window.scroll(function(){
		var $windowScrollTop = $window.scrollTop(),
		    $windowHeight = $window.height();
		// sticky header
		stickyHeader();
		
		$('.padding-module').each(scrollAboveBottom);
		
		// changing the images in the paralax at a certain scroll
		if($windowScrollTop > ($('.skills').offset().top - $windowHeight/1.5)){
		  skills();	   
		}
		
		if($windowScrollTop > $('#portfolio').offset().top - $windowHeight){
			displayIframe();				
		}
		
    });
	
	$window.load(function(){
		 //google maps
	     if($('#map').length){
		   initMap();
         };
		 
		 // the text written on the page hero
	     $('.page-hero-message').each(writeText)
	     
		 $('.page-hero video').get(0).play();
	 })
	
	// checking if the page hero is displayed full width
	if($('.page-hero').length){
		pageHero();
	 };
	
	// the navigation
	 if($('.header').length){
		stickyHeader();
	 };
	 	 
	 // the education and work module
	 if($('.navigation').length){
		navigation();
	 };
	 
	 // the skills module
	 $('.skills').each(skills);
	 
	 // the portfolio module
	 $portfolio.each(portfolio); 
	 	 
	 //footer
	 if($('footer').length){
		footer();
	 };
	 
	 // initialise plug-in
	 $(".skills .particles").jParticle({
		 particlesNumber: 30,
		 background: "#ffffff",
	     color: "#5887FF",
		 
	 });
	 
})

    

