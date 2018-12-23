(function ($) {
    function navMod() {
        var $thisNav = $(this),
            navObj = {
                cache: {
                    $navHolder: $thisNav.find('.nav-holder'),
                    mouseEnterTimer: {},
                    clickTimer: {},
                    mobileClickTimer: {}
                },
                events: function () {
                    // desktop navigation			
                    navObj.cache.$navHolder.find('.nav-anchor').on({
                        mouseenter: function () {
                            var $thisNavAnchor = $(this);

                            clearTimeout(navObj.cache.mouseEnterTimer);
                            navObj.cache.mouseEnterTimer = setTimeout(function () {
                                $thisNavAnchor.parent().addClass('active').siblings().removeClass('active');
                            }, msp.cache.timer.fast);
                        },
                        click: function () {
                            var $thisNavElem = $(this);

                            clearTimeout(navObj.cache.clickTimer);
                            navObj.cache.clickTimer = setTimeout(function () {
                                $thisNavElem.addClass('active').siblings().removeClass('active');
                                msp.cache.$header.removeClass('mobile-nav');
                                msp.cache.$headerNav.removeClass('shadow');
                            }, msp.cache.timer.fast);
                        }
                    });

                    // mobile navigation
                    msp.cache.$header.find('.burger-menu').on('click', function () {
                        if (!msp.cache.$header.hasClass('mobile-nav')) {
                            navObj.cache.$navHolder.find('.nav-elem').removeClass('anim');
                        }

                        clearTimeout(navObj.cache.mobileClickTimer);
                        navObj.cache.mobileClickTimer = setTimeout(function () {
                            msp.cache.$header.toggleClass('mobile-nav');
                            msp.cache.$headerNav.toggleClass('shadow');

                            if (msp.cache.$header.hasClass('mobile-nav')) {
                                msp.helpers.animateElemInView();
                            } else {
                                navObj.cache.$navHolder.find('.nav-elem').removeClass('anim');
                            }
                        }, msp.cache.timer.fast)
                    });

                    // corelate the active nav list element with the section that is in view
                    msp.cache.$body.find('.module').on('mouseenter', function () {
                        msp.cache.$header.find('a[href= #' + $(this).attr('id') + ']').parent().addClass('active').siblings().removeClass('active');
                    });
                },
                init: function () {
                    navObj.events();
                }
            };

        navObj.init();
    };

    $(document).ready(function () {
        msp.cache.$headerNav.each(navMod);
    });
})(jQuery);