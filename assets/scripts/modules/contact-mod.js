(function ($) {
    function contactMod() {
        var contactObj = {
            cache: {
                $thisContactMod: $(this)
            },
            presentation: {
                reverseBlockAnim: function ($contactForm, $contactFormHolder) {
                    $animCollection = $contactFormHolder.find('.anim-mod');

                    $animCollection.each(function (index) {
                        var $thisElem = $(this),
                            $elemData = $thisElem.data();

                        setTimeout(function () {
                            $thisElem.addClass($elemData.reverseAnim);

                            if (index == ($animCollection.length - 1)) {
                                setTimeout(function () {
                                    contactObj.presentation.feedBackMessage($contactForm, $contactFormHolder);
                                }, msp.cache.timer.fast);
                            }
                        }, $elemData.delay);
                    });
                },
                feedBackMessage: function ($contactForm, $contactFormHolder) {
                    var $formFeedback = $contactFormHolder.find('.form-feedback');

                    $formFeedback.addClass('anim-mod').removeClass('hidden-accesability');
                    $contactForm.add($contactFormHolder.find('.btn-holder')).slideUp(300, function () {
                        $formFeedback.addClass('anim');
                    });
                }
            },
            events: function () {
                contactObj.cache.$thisContactMod.find('.full-submit').on('click', function () {
                    var $contactFormHolder = contactObj.cache.$thisContactMod.find('.mod-form'),
                        $contactForm = $contactFormHolder.find('.contact-form'),
                        formData = $contactForm.serialize(),
                        formDataObj = {},
                        formDataElement = '';

                    formData = formData.split('&');

                    formData.forEach(function (e, i) {
                        formDataElement = e.split('=');
                        formDataObj[formDataElement[0]] = decodeURIComponent(formDataElement[1]);
                    });

                    msp.helpers.ajaxCall('POST', 'server/contact/send-email.php', { 'formData': formDataObj },
                        function (response) {// done scenario
                            contactObj.presentation.reverseBlockAnim($contactForm, $contactFormHolder);
                        },
                        function (response) {
                            // fail scenario
                        },
                        function (response) {
                            // completed request method
                        }
                    );
                });
            },
            init: function () {
                contactObj.events();
            }
        };

        contactObj.init();
    }

    $(document).ready(function () {
        msp.cache.$main.find('.contact').each(contactMod);
    });
})(jQuery);