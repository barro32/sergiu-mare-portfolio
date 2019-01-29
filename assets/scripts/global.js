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

    // apply styling to all forms
    stylishForms.apply();

    // validate all sforms
    formValidation.init();

    // window events
    // -------------
    if (msp.helpers.deviceWithTouch()) {
        msp.cache.$window.on({
            'scroll': function () {
                msp.helpers.animateElemInView();
                msp.helpers.fixedHeader();
            }
        });
    } else {
        toolkit.scrollTimer.push(msp.helpers.fixedHeader);
    }
});