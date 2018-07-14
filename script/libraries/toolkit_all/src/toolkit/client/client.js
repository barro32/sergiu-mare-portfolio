/* client 2.1.0 */

window.toolkit.client || (window.toolkit.client = {});

window.toolkit.client = new function UserAgent () {

    var _navAgent = navigator.userAgent.toLowerCase(),
        _testElem = document.createElement('div'),
        _client = {
            iPad: 'ipad',
            iPhone: 'iphone',
            iOS: 'iphone|ipad|ipod',
            Mac: 'intel mac',
            Chrome: 'chrome',
            Firefox: 'firefox',
            IE: 'msie|rv:11',
            IE7: 'msie 7.0',
            IE8: 'msie 8.0',
            IE9: 'msie 9.0',
            IE10: 'msie 10.0',
            IE11: 'rv:11.0',
            OldIE: 'msie 7.0|msie 8.0',
            Opera: 'opera|opr',
            Android: 'android',
            Mobile: 'android|webos|iphone|ipad|ipod|blackberry|windows phone|iemobile',
            WindowsPhone: 'windows phone'
        },
        _feature = [
            'WebkitPerspective',
            'MozPerspective',
            'OPerspective',
            'msPerspective'
        ],

        /*
        * get feature and browser detection data
        *
        * @class _ctor
        * @private
        * @return {Object} feature detection data
        */
        _ctor = function () {

            var result = {},
                htmlClasses = '',
                htmlElement = document.getElementsByTagName('html')[0];

            // host object checks
            function winProps(win, t) {
                var prop = t.charAt(0).toUpperCase();
                return win['webkit' + prop] || win[t] || win['moz' + prop] || win['ms' + prop] || function (fn) { setTimeout(fn, 60); };
            }

            // standard cases
            // browser
            for (var c in _client) {
                var reg = new RegExp(_client[c], ["i"]); // as regex
                result[c] = reg.test(_navAgent);
            }

            // perspective
            for (var f in _feature) {
                if (_testElem.style[_feature[f]] !== undefined) {
                    result['Perspective'] = _feature[f];
                    result['CSSVendorPrefix'] = '-' + _feature[f].replace('Perspective', '').toLowerCase() + '-';
                    break;
                }
            }

            // special cases
            // browser
            result['Safari'] = _navAgent.indexOf('chrome') > -1 ? false : _navAgent.indexOf('safari') > -1;

            // features
            result['HighDef'] = window.devicePixelRatio > 1;

            result['RequestAnimationId'] = winProps(window, "requestAnimationFrame");
            result['CancelAnimationId'] = winProps(window, "cancelAnimationFrame");

            result['iOSVersion'] = result.iOS ? parseFloat(_navAgent.split(' os ')[1].split(' ')[0].replace('_', '.')) : undefined;

            for (var val in result) {
                if (result[val]) {
                    htmlClasses += ' ' + val.toLowerCase();
                }
            }
			
			// dir and lang attributes
            result.dir = htmlElement.getAttribute('dir');
            result.lang = htmlElement.getAttribute('lang');			

            /*
             * apply feature and user agent classes to dom
             *
             * @method domApply
             * @public
             * @return void
             */
            result.domApply = function () {
                document.documentElement.className += htmlClasses;
            };

            return result;
        };

    /*
    * feature and browser detection
    *
    * @class UserAgent as window.toolkit.client
    * @public
    */
    return new _ctor();
};
