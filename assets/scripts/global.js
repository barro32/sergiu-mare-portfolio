/*
 * ---------------------------------------- *
 * msp JavaScripts                          *
 * ---------------------------------------- *
 */

// project namespace
window.msp || (window.msp = {});

// initializing the functions
$(document).ready(function () {
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
    msp.cache.timer.long = 1000;

    // custom cache
    msp.cache.$window = $(window);
    msp.cache.$html = $('html');
    msp.cache.$head = msp.cache.$html.find('head');
    msp.cache.$body = msp.cache.$html.find('body');
    msp.cache.$header = msp.cache.$body.find('#site-header');
    msp.cache.$headerNav = msp.cache.$header.find('.nav');
    msp.cache.$footer = msp.cache.$body.find('#site-footer');
    msp.cache.$main = msp.cache.$body.find('#main');
    msp.cache.$lightBox = msp.cache.$body.find('#main').find('.light-box');

    // animate the elements that are in the viewport on load
    msp.helpers.animateElemInView();

    // scroll into the target area
    msp.helpers.scrollIntoView();

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
                if (msp.cache.$window.width() < msp.config.breakpoints.X_MEDIUM_WIDTH) {
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
                }, msp.cache.timer.fast);

            }, mouseleave: function () {

                // check if the user it's on desktop
                if (msp.cache.$window.width() < msp.config.breakpoints.X_MEDIUM_WIDTH) {
                    return;
                }

                var $this = $(this);

                // prevent the mouseenter event to trigger
                clearTimeout(mouseEnterSkillsDescription);

                mouseOutSkillsDescription = setTimeout(function () {
                    $this.removeClass('active');
                }, msp.cache.timer.fast)

            }, click: function () {

                // check if the user it's on mobile
                if (msp.cache.$window.width() > msp.config.breakpoints.X_MEDIUM_WIDTH) {
                    return;
                }

                var $this = $(this);

                clearTimeout(clickTimerAccordion);

                clickTimerAccordion = setTimeout(function () {
                    $this.toggleClass('active').siblings().removeClass('active');
                    $this.find('p.hide').stop().slideToggle();
                    $this.siblings().find('p.hide').stop().slideUp();
                }, msp.cache.timer.fast);
            }
        });

        // make the description square highlight when one of the
        // skills is hovered
        $skills.find('.skills-description .two-third').on({
            mouseenter: function () {
                // check if the user it's on desktop
                if (msp.cache.$window.width() < msp.config.breakpoints.X_MEDIUM_WIDTH) {
                    return;
                }

                var $this = $(this);

                // make the parent active, has an impact over the description 
                clearTimeout(decriptionOutTimer);
                decriptionEnterTimer = setTimeout(function () {
                    $this.addClass('active');
                }, msp.cache.timer.fast)
            },
            mouseleave: function () {

                if (msp.cache.$window.width() < msp.config.breakpoints.X_MEDIUM_WIDTH) {
                    return;
                }

                var $this = $(this);

                clearTimeout(decriptionEnterTimer);
                decriptionOutTimer = setTimeout(function () {

                    // remove the active class from the parent level
                    $this.removeClass('active');

                    // remove the active class from the elements inside the parent 
                    $this.find('.active').removeClass('active');
                }, msp.cache.timer.fast)
            }
        })
    }

    $('.skills').each(skills);

    // window events
    // -------------
    msp.cache.$window.on({
        'scroll': function () {
            msp.helpers.animateElemInView();
        },
        'load': function () {
            // the text written on the page hero
            $('.page-hero-message').each(writeText);
            $('.page-hero video').get(0).play();
        }
    });

    toolkit.scrollTimer.push(msp.helpers.fixedHeader);
});