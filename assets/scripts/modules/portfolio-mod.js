(function ($) {
    function portfolioMod() {
        var $thisPortMod = $(this);

        portfolioObj = {
            cache: {
                toggleLightBox: {}
            },
            data: {
                getJsonFile: function () {

                }
            },
            presentation: {
                doneAjaxCall: function (response) {
                    var lightBoxMarkup = msp.helpers.generateTemplate('#portfolio-light-box', response);

                    msp.cache.$lightBox.html(lightBoxMarkup).slideDown();
                },
                failedAjaxCall: function (response) {

                }
            },
            events: function () {
                $thisPortMod.find('.cta').on('click', function () {
                    var $thisCta = $(this),
                        url = 'server/projects-info/' + $thisCta.data('file') + '.json';

                    msp.helpers.ajaxCall('GET', url, '', portfolioObj.presentation.doneAjaxCall, portfolioObj.presentation.failedAjaxCall);
                });
            },
            init: function () {
                portfolioObj.events();
            }
        }

        portfolioObj.init();
    }

    $(document).ready(function () {
        msp.cache.$main.find('.portfolio').each(portfolioMod);
    });
})(jQuery);