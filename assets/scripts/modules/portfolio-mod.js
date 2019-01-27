(function ($) {
    function portfolioMod() {
        var $thisPortMod = $(this),
            portfolioObj = {
                cache: {
                    $portModCtas: $thisPortMod.find('.cta'),
                    toggleLightBox: {}
                },
                presentation: {
                    doneAjaxCall: function (response) {
                        var parsedResponse = typeof response === 'string' ? JSON.parse(response) : response;

                        msp.cache.$lightBox.find('.box-body').html(msp.helpers.generateTemplate('#portfolio-light-box', parsedResponse));
                    },
                    failedAjaxCall: function (response) {
                        msp.cache.$lightBox.find('.box-body').html(msp.helpers.generateTemplate('#portfolio-light-box', {
                            "title": "Work in progress",
                            "info": "At the moment I'm collecting data, please bear with me until I finalize the process."
                        }));
                    },
                    completedAjaxCall: function (response) {
                        msp.cache.$lightBox.slideDown();
                    }
                },
                events: function () {
                    portfolioObj.cache.$portModCtas.not('.avoid').on('click', function () {
                        var $thisCta = $(this),
                            url = 'server/projects-info/' + $thisCta.data('file') + '.json';

                        msp.helpers.ajaxCall('GET', url, '', portfolioObj.presentation.doneAjaxCall, portfolioObj.presentation.failedAjaxCall, portfolioObj.presentation.completedAjaxCall);
                    });

                    portfolioObj.cache.$portModCtas.filter('.load-projects').on('click', function () {
                        $thisPortMod.find('.other-projects').slideDown();
                    });

                    msp.cache.$lightBox.find('.close-button').on('click', function () {
                        msp.cache.$lightBox.slideUp();
                    });
                },
                init: function () {
                    portfolioObj.events();
                }
            };

        portfolioObj.init();
    }

    $(document).ready(function () {
        msp.cache.$main.find('.portfolio').each(portfolioMod);
    });
})(jQuery);