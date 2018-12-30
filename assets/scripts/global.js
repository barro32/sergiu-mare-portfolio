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
    msp.cache.$lightBox = msp.cache.$main.find('.light-box');

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