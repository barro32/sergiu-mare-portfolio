(function ($) {
    function contactMod() {
        var contactObj = {
            cache: {
                $thisContactMod: $(this)
            },
            events: function () {
                contactObj.cache.$thisContactMod.find('.full-submit').on('click', function () {
                    var formData = contactObj.cache.$thisContactMod.find('.contact-form').serialize(),
                        formDataObj = {},
                        formDataElement = '';

                    formData = formData.split('&');

                    formData.forEach(function (e, i) {
                        formDataElement = e.split('=');
                        formDataObj[formDataElement[0]] = decodeURIComponent(formDataElement[1]);
                    });

                    msp.helpers.ajaxCall('POST', 'server/contact/send-email.php', { 'formData': formDataObj },
                        function (r) {
                            console.log(r);
                        },
                        function (r) {
                            console.log(r);
                        },
                        function () {

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