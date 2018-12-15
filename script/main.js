/*
 * ---------------------------------------- *
 * msp JavaScripts                          *
 * ---------------------------------------- *
 */

// project namespace
window.msp || (window.msp = {});

// initializing the functions
$(document).ready(function () {
  var $window = $(window),
    $portfolio = $('#portfolio'),
    $loadMoreProjects = $portfolio.find('.load-projects'),
    $tablet_width = 920,
    quoteNumber = 0,
    sir = [$('.about-me'),
    $('.skills-description')
    ];

  $.extend(true, msp, {
    cache: toolkit.cache,
    config: toolkit.config,
    helpers: toolkit.helpers
  });

  // custom config        
  msp.config.breakpoints.MEDIUM_WIDTH = 1200;
  msp.config.breakpoints.X_MEDIUM_WIDTH = 1024;
  msp.config.breakpoints.SMALL_WIDTH = 768;

  // custom delays
  msp.cache.timer = {};
  msp.cache.timer.veryFast = 150;
  msp.cache.timer.fast = 300;
  msp.cache.timer.moderated = 500;

  // custom cache
  msp.cache.$html = $('html');
  msp.cache.$head = msp.cache.$html.find('head');
  msp.cache.$body = msp.cache.$html.find('body');
  msp.cache.$header = msp.cache.$body.find('#site-header');
  msp.cache.$footer = msp.cache.$body.find('#site-footer');
  msp.cache.$main = msp.cache.$body.find('#main');

  //sticky header
  function stickyHeader() {
    var $header = $('.header');

    if ($window.scrollTop() > 0) {
      $header.addClass('fixed');
    } else {
      $header.removeClass('fixed');
    }
  }

  // writeNameOnPageHolder
  function writeText() {
    var name = "Sergiu Mare",
      job = "Front-End Developer",
      sirName = [],
      sirJob = [],
      $hero = $('.page-hero'),
      $heroName = $hero.find('.page-hero-message .page-hero-message-name'),
      $heroJob = $hero.find('.page-hero-message .page-hero-message-job'),
      sirName = name.split(""),
      sirJob = job.split(""),
      emptyStringName = [],
      emptyStringJob = [],
      i = 0,
      j = 0,
      startNameInterval;

    // make the braces visible
    $hero.find('span.show').addClass('visible');

    // initialise the name and the job description	
    setTimeout(function () {
      startNameInterval = setInterval(function () {
        if (i < sirName.length) {
          emptyStringName += sirName[i];
          $heroName.text("" + emptyStringName + "");
          i++;
        } else if (j < sirJob.length) {
          emptyStringJob += sirJob[j];
          $heroJob.text("" + emptyStringJob + "");
          j++;
        } else {
          clearInterval(startNameInterval);
        }
      }, 150)
    }, 1000)
  }

  // sale the skills tile that is hover
  function skills() {
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
    $skills.find('.one-third .skills-full-description').css({ 'minHeight': $heightToInsert });

    // make the skills to highlight on hover
    $skills.find('.skills-description .element ').on({
      mouseenter: function () {

        // check if the user it's on desktop
        if ($window.width() < $tablet_width) {
          return;
        }

        var $this = $(this),
          $titleToDisplay = $this.find('h3').text(),
          $textToDisplay = $this.find('p').text();

        // prevent the mouseout event to trigger
        clearTimeout(mouseOutSkillsDescription);

        mouseEnterSkillsDescription = setTimeout(function () {
          // if th description is active then cancel the action 
          if (!$this.hasClass('active')) {
            // if the description is not active ,hide it change the text and show it afterwards
            $skillsDescription.children('div').fadeOut('fast', function () {
              $(this).find('h3').text($titleToDisplay);
              $(this).find('p').text($textToDisplay);
              $skillsDescription.children('div ').fadeIn();
            });

          }

          // make the elements active, remove the active state from the siblings()
          $this.siblings().removeClass('active');
          $this.addClass('active');

        }, 300);

      }, mouseleave: function () {

        // check if the user it's on desktop
        if ($window.width() < $tablet_width) {
          return;
        }

        var $this = $(this);

        // prevent the mouseenter event to trigger
        clearTimeout(mouseEnterSkillsDescription);

        mouseOutSkillsDescription = setTimeout(function () {

          $this.removeClass('active');
        }, 300)

      }, click: function () {

        // check if the user it's on mobile
        if ($window.width() > $tablet_width) {
          return;
        }

        var $this = $(this);

        clearTimeout(clickTimerAccordion);

        clickTimerAccordion = setTimeout(function () {
          $this.toggleClass('active').siblings().removeClass('active');
          $this.find('p.hide').stop().slideToggle();
          $this.siblings().find('p.hide').stop().slideUp();
        }, 300)



          ;
      }
    });

    // make the description square highlight when one of the
    // skills is hovered
    $skills.find('.skills-description .two-third').on({
      mouseenter: function () {
        // check if the user it's on desktop
        if ($window.width() < $tablet_width) {
          return;
        }

        var $this = $(this);

        // make the parent active, has an impact over the description 
        clearTimeout(decriptionOutTimer);
        decriptionEnterTimer = setTimeout(function () {
          $this.addClass('active');
        }, 300)
      },
      mouseleave: function () {

        if ($window.width() < $tablet_width) {
          return;
        }

        var $this = $(this);

        clearTimeout(decriptionEnterTimer);
        decriptionOutTimer = setTimeout(function () {

          // remove the active class from the parent level
          $this.removeClass('active');

          // remove the active class from the elements inside the parent 
          $this.find('.active').removeClass('active');
        }, 300)
      }
    })

  }

  // general function to apply animations
  function scrollAboveBottom() {
    var $this = $(this);

    if ($window.scrollTop() <= 0) {
      $this.find('.animated.fadeInUp').removeClass('animated fadeInUp');
      return;

    } else if ($window.scrollTop() + $window.height() > $this.offset().top) {

      if ($this.hasClass('about-me')) {
        $this.find('.image-element').addClass('animated fadeInUp');
        $this.find('.text-element').addClass('animated fadeInUp');
      } else if ($this.hasClass('skills')) {
        $this.find('.skills-tiles .element').addClass('animated fadeInUp');
      }
    }


  }

  // portfolio open modal 
  function portfolio() {
    var $this = $(this),
      $modalDescription = $this.closest('.portfolio').find('.description'),
      openModalTimer;

    $this.find('button').on({
      click: function () {
        var $this = $(this),
          $title = $this.data('title'),
          $text = $this.data('info'),
          $skills = $this.data('skills'),
          $url = $this.data('url'),
          $id = $this.data('id');

        if (!$this.hasClass('load-projects')) {
          $modalDescription.find('.modal-title').text($title);
          $modalDescription.find('.modal-text').text($text);
          $modalDescription.find('.modal-skills').text($skills);
          $modalDescription.find('.button').attr('href', '' + $url + '');
          $modalDescription.find('.button').attr('data-id', '' + $id + '');

          clearTimeout(openModalTimer)
          openModalTimer = setTimeout(function () {
            $modalDescription.next().fadeIn(function () {
              $modalDescription.slideDown();
            })
          }, 300)
        } else {
          $this.closest('.holder').next().slideDown();
        }
      },
      mouseenter: function () {

        // on devices without touch disable this feature
        if ($window.width() > 1024) {
          return;
        }

        $(this).click();
      }
    })

    $modalDescription.find('a.button').click(function (e) {
      e.preventDefault();
      window.location.href = $(this).attr('href');
    })

    $this.find('.description .close-button').click(function () {
      var $this = $(this),
        closeModalTimer;

      clearTimeout(closeModalTimer);
      closeModalTimer = setTimeout(function () {
        $this.closest('.description').slideUp(function () {
          $this.closest('.description').next().fadeOut();
        });
      }, 300)
    })

  }

  function displayIframe() {
    var $portfolio = $('#portfolio'),
      $spanHolder = $portfolio.find('span.hide');

    $spanHolder.removeClass();
  }

  $window.scroll(function () {
    var $windowScrollTop = $window.scrollTop(),
      $windowHeight = $window.height();
    // sticky header
    stickyHeader();

    $('.mod').each(scrollAboveBottom);

    // changing the images in the paralax at a certain scroll
    if ($windowScrollTop > ($('.skills').offset().top - $windowHeight / 1.5)) {
      skills();
    }

    if ($windowScrollTop > $('#portfolio').offset().top - $windowHeight) {
      displayIframe();
    }

  });

  $window.load(function () {
    // the text written on the page hero
    $('.page-hero-message').each(writeText)

    $('.page-hero video').get(0).play();
  });

  // the navigation
  if ($('.header').length) {
    stickyHeader();
  };

  // the skills module
  $('.skills').each(skills);

  // the portfolio module
  $portfolio.each(portfolio);

  // initialise plug-in
  $(".skills .particles").jParticle({
    particlesNumber: 30,
    background: "#ffffff",
    color: "#5887ff",

  });

})



