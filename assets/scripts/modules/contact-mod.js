(function ($) {
    function contactMod() {
        var contactObj = {
            cache: {
                $thisContactMod: $(this)
            },
            events: function () {
                contactObj.cache.$thisContactMod.find('.full-submit').on('click', function () {
                    contactObj.cache.$thisContactMod.find('.contact-form').submit();
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