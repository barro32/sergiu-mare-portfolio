msp.helpers = {
    // check to see if element is above the window
    elemAboveTheWindow: function ($checkElement) {
        if (($checkElement.offset().top + $checkElement.height()) > msp.cache.$window.scrollTop()) {
            return true;
        }
    },
    // check if element is visible on the screen
    elemIsInView: function ($checkElement) {
        if (msp.cache.$window.scrollTop() + msp.cache.$window.height() > $checkElement.offset().top) {
            return true;
        }
    },
    // calling the scroll plugin
    scrollBarPlug: function ($starPoint, plugInObj) {
        if (msp.cache.$window.width() > msp.config.breakpoints.X_MEDIUM_WIDTH) {
            var settings = typeof plugInObj === 'undefined' ? {} : plugInObj;

            $starPoint.mCustomScrollbar(settings);
        }
    },
    // check if the device has touch screen
    deviceWithTouch: function () {
        var isTouchable;

        try {
            document.createEvent('TouchEvent');
            isTouchable = true;
        } catch (e) {
            isTouchable = false;
        }

        return isTouchable;
    },
    // populate dropdown for auto complete
    dropDownAutocomplete: function ($path, results, []) {
        var currentPlugins = '';

        // storing all needed plugins in a string
        arguments[arguments.length - 1].forEach(function (thisPlugIn) {
            currentPlugins += (' ' + thisPlugIn);
        });

        // int the plug-in
        $path.textext({
            plugins: currentPlugins
        }).bind('getSuggestions', function (e, data) {
            var list = results,
                textext = $(e.target).textext()[0],
                query = (data ? data.query : '') || '';

            $(this).trigger(
                'setSuggestions',
                { result: textext.itemManager().filter(list, query) }
            );
        });
    },
    // create an objectthat will be a blue print of a form selection 
    stringifyFilters: function ($starPoint) {
        var $filterRows = $starPoint.find('.field'),
            filtersObj = {},
            key = '',
            subKey = '',
            $subFields;

        $filterRows.each(function () {
            var $thisFilterRow = $(this),
                $fieldInputs = $thisFilterRow.find('input'),
                elementHasSubFields = $thisFilterRow.data('sub-fields');

            key = $thisFilterRow.data('name');

            if (elementHasSubFields) {
                $subFields = $filterRows.find('.sub-field');

                $subFields.each(function () {
                    var $thisSubField = $(this);

                    subKey = key + '-' + $thisSubField.data('name');
                    filtersObj[subKey] = [];
                    filtersObj[subKey].push(Number($thisSubField.find('input').val()));
                });

            } else {
                filtersObj[key] = [];

                if ($thisFilterRow.data('input') === 'text' && $fieldInputs.val().length) {
                    filtersObj[key].push($fieldInputs.val());
                } else if ($thisFilterRow.data('input') === 'checkbox') {
                    $fieldInputs.each(function (index) {
                        var $thisCheckbox = $(this),
                            filterDefaultValue = 'All ';

                        if ($thisCheckbox.prev().hasClass('checked')) {
                            filtersObj[key].push($thisCheckbox.prop('name'));
                        }

                        // if filter related properties and regions is empty on click over the CTA the default value is selected
                        if (index === ($fieldInputs.length - 1) && filtersObj[key].length === 0) {
                            filterDefaultValue += key;
                            filtersObj[key].push(filterDefaultValue);
                        }
                    });
                }
            }
        });

        // this stringfy obj will be passed as a parameter in the request
        filtersObj = JSON.stringify(filtersObj);
        return filtersObj;
    },
    // standard ajax call
    ajaxCall: function (typeOfRequest, url, data, doneMethod, failMethod, completedMethod) {
        $.ajax({
            method: typeOfRequest,
            url: url,
            data: data
        }).done(function (response) {
            doneMethod(response);
        }).fail(function (response) {
            failMethod(response);
        }).always(function () {
            completedMethod();
        });
    },
    // change the url 
    pageNewUrl: function (path) {
        var newPath = window.location.origin + path;

        // load the map page 
        document.location.replace(newPath);
    },
    // toggle the loader visibility
    toggleLoader: function () {
        var $loader = msp.cache.$main.find('.loader-mod');

        // reset the view
        msp.helpers.isContentScrolable();

        if ($loader.hasClass('anim')) {
            $loader.removeClass('anim');
        } else {
            $loader.addClass('anim');
        }
    },
    // generate markup with handlebars
    generateTemplate: function (id, data) {
        var $source = $(id).html(),
            msplate = Handlebars.compile($source),
            markup = msplate(data);

        return markup;
    },
    // check if the page content is bigger that window's height    
    isContentScrolable: function () {
        msp.cache.$html.removeClass('sp');

        // if map page is present and the page is loaded on desktop or the height of the body is smaller then the height of window  
        if ((msp.cache.$body.hasClass('map-page') && msp.cache.$window.width() > msp.config.breakpoints.X_MEDIUM_WIDTH) || (msp.cache.$body.height() < msp.cache.$window.height())) {
            msp.cache.$html.addClass('sp');
        }
    },
    // animate de elements when entering the viewport
    animateElemInView: function () {
        var $animElem = msp.cache.$body.find('.anim-mod');

        $animElem.each(function () {
            var $thisAnimElem = $(this),
                elemIsInView = msp.helpers.elemIsInView($thisAnimElem),
                $dataDelay = $thisAnimElem.data('delay'),
                parentDelay;

            function animSubElem($thisAnimElem) {
                // trigger sub-anim animation
                $thisAnimElem.find('.sub-anim-mod').not('.anim').each(function () {
                    var $thisSubAnim = $(this);

                    setTimeout(function () {
                        $thisSubAnim.addClass('anim');
                    }, $thisSubAnim.data('sub-delay'));
                })
            }

            // when there are synchronous animations on the same line
            if (elemIsInView && $thisAnimElem.data('sync')) {
                parentDelay = typeof $dataDelay === 'undefined' ? 300 : $dataDelay;

                // trigger parent animation
                setTimeout(function () {
                    $thisAnimElem.addClass('anim');
                }, parentDelay);

                // when there is only one animation on a line
            } else if (elemIsInView) {
                $thisAnimElem.addClass('anim');
            }

            // if there are sub animations
            if ($thisAnimElem.data('sub-anim')) {
                animSubElem($thisAnimElem);
            }
        });
    },
    // scroll into view and focus the area for accesability reasons
    scrollIntoView: function (id) {
        msp.cache.$body.find('a').add(msp.cache.$body.find('button[data-scroll-id]')).on('click', function () {
            var $thiCta = $(this),
                $selectedId = $thiCta[0].localName === 'button' ? $($thiCta.data('scroll-id')) : $($thiCta.attr('href'));

            if ($selectedId.length) {
                msp.cache.$body.add(msp.cache.$html).animate({
                    scrollTop: $selectedId.offset().top - msp.cache.$header.outerHeight()
                }, msp.cache.timer.long);
            }
        });
    },
    // changes state of header on window scroll
    fixedHeader: function () {
        if (msp.cache.$window.scrollTop() > msp.cache.$header.outerHeight() * 2) {
            if (!msp.cache.$header.hasClass('fixed')) {
                msp.cache.$header.removeClass('slide').addClass('fixed');
                setTimeout(function () {
                    msp.cache.$header.addClass('slide');
                }, msp.cache.timer.fast);
            }
        } else if (msp.cache.$window.scrollTop() < msp.cache.$header.outerHeight() * 2) {
            if (msp.cache.$header.hasClass('fixed')) {
                msp.cache.$header.removeClass('slide fixed');
                setTimeout(function () {
                    msp.cache.$header.addClass('slide');
                }, msp.cache.timer.fast);
            }
        }
    }
}