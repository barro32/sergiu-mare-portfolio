(function ($) {
    // navigation
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
                    navObj.cache.$navHolder.find('.nav-elem').on({
                        mouseenter: function () {
                            var $this = $(this);

                            clearTimeout(navObj.cache.mouseEnterTimer);
                            navObj.cache.mouseEnterTimer = setTimeout(function () {
                                $this.addClass('active').siblings().removeClass('active');
                            }, msp.cache.timer.fast);
                        },
                        click: function () {
                            clearTimeout(navObj.cache.clickTimer);
                            navObj.cache.clickTimer = setTimeout(function () {
                                $this.addClass('active').siblings().removeClass('active');
                            }, msp.cache.timer.fast);
                        }
                    });

                    // burger menu
                    msp.cache.$header.find('.burger-menu').on('click', function () {
                        var $thisBurgerMenu = $(this);

                        // avoid multiple clicks
                        clearTimeout(navObj.cache.mobileClickTimer);
                        navObj.cache.mobileClickTimer = setTimeout(function () {
                            $thisBurgerMenu.toggleClass('open');
                            msp.cache.$header.toggleClass('shadow');
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
        msp.cache.$header.find('.nav').each(navMod);
    });
})(jQuery);