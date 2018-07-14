/* serialise 3.0.1 */

/*
 * Class library of serialise functions 
 *
 * @class Serialise
 * @namespace factory 
 * @public
 * @requires jQuery 1.10.2 (optional) access to jQuery Object serialisation is prohibited without this dependency
 */
window.toolkit.serialise || (window.toolkit.serialise = {});

window.toolkit.serialise = new function Serialise() {

	/*©*
	* @constructor _ctor
	* @private
	*/
	var _ctor = function () { },
		/*
		* given well formed json, serialise to encoded query string params
		*
		* @method _obj
		* @private
		* @param o  {Object}    json
		* @return   {String}    parsed string as query string params
		*/
		_obj = function (o) {
			var x = [];
			for (var p in o) {
				if (o.hasOwnProperty(p)) {
					x.push(encodeURIComponent(p) + '=' + encodeURIComponent(o[p]));
				}
			}
			return x.join('&');
		},
		/*
		* given query string params, deserialise to decoded key-value pairs
		*
		* @method _url
		* @private
		* @param q  {String}    query string params
		* @return   {Object}    parsed javascript object
		*/
		_url = function (q) {

			var o = {},
				oP = q.indexOf('#') != -1 ? q.split('#')[1].split('&') : q.split('?')[1].split('&');
			for (var param = 0; param < oP.length; param += 1) {
				var split = oP[param].split('=');
				o[decodeURIComponent(split[0])] = decodeURIComponent(split[1]);
			}
			return o;
		},
		/*
		* build a deep level object from a flat object with complex property addresses as keys
		*
		* @method _complexObj
		* @private
		* @param data   {Object}   flat object with property names as complex addresses
		* @returns      {Object}   parsed complex javascript object
		*/
		_complexObj = function (data) {

			var result = {};

			// recursively merge properties of two objects (a, b)
			function mergeRecursive(a, b) {
				for (var p in b) {
					try {
						if (b[p].constructor == Object) { // property in destination object set; update its value.
							a[p] = mergeRecursive(a[p], b[p]);
						} else {
							a[p] = b[p];
						}
					} catch (e) {
						a[p] = b[p]; // property in destination object not set; create it and set its value
					} 
				}
				return a;
			}

			// build deep level object from array seed
			function fromArray(seed, value) {
				var temp,
					complex = temp = {};

				for (var i = 0; i < seed.length; i += 1) {
					temp = temp[seed[i]] = (i === seed.length - 1 ? value : {});
				}

				return complex;
			}

			// iterate properties, distribute complex/simple as required
			for (var prop in data) {
				if (prop.indexOf('.') !== -1) { // is complex
					var split = prop.split('.'); // retrieve levels
					var deep = fromArray(split, data[prop]);
					result = mergeRecursive(result, deep); // merge with host
				} else {
					result[prop] = data[prop]; // simple, just add (can be overridden)
				}
			}

			return result;
		};


	// #region requires jQuery
	if (typeof jQuery !== 'undefined') {
		/*
		 * given a jquery object, serialise to key-value-pairs
		 *
		 * @method _$obj
		 * @private
		 * @param [0]   {jQuery Object} jquery object 
		 * @return      {Object}        parsed javascript object
		 */
		var _$obj = function () {
			var o = {},
				a = arguments[0].serializeArray();
			for (var i in a) {
				if (o[a[i].name] !== undefined) {
					if (!o[a[i].name].push) {
						o[a[i].name] = [o[a[i].name]];
					}
					o[a[i].name].push(a[i].value || '');
				} else {
					o[a[i].name] = a[i].value || '';
				}
			}
			return o;
		},
        /*
        * retrieve values from data decorated jQuery elements
        *
        * @method _GetDecorated
        * @private
        * @param $targetCollection  {jQuery Object}     collection to search within
        * @param attributeName      {String}            data attribute name or group name
        * @return                   {Object}            instance of clasee
        * 
        */
        _GetDecoration = function ($targetCollection, attributeName) {

            /*
             * convert camel case
             * 
             * @pure 
             */
            function camelCaseHelper(test) {
                return jQuery.map(test.split('-'), function (x, i) {
                    return (i ? x.charAt(0).toUpperCase() : x.charAt(0)) + x.slice(1).toLowerCase();
                }).join('');
            }

            /*
             * check sentinel value
             * 
             * @pure 
             */
            function sentinelVal(val, sentinel) {
                if ((val === '' || val === undefined || val === null) && sentinel) {
                    val = sentinel;
                }
                return val;
            }

            var self = this,
                attachPropertyName = camelCaseHelper(attributeName);

            /*
            * build dto from filter values, data-{attributename}
            * 
            * for selects, if rawValue data attr is true, query will comprise of option text, not selected index
            */
            $targetCollection.find('[data-' + attributeName + ']').each(function () {
                var $el = $(this),
                    data = $el.data();

                if ($el.is('select') && data.rawValue == true) {
                    self[data[attachPropertyName]] = $el.children('option:selected').text();
                } else if ($el.is(':checkbox')) { // checkbox boolean
                    self[data[attachPropertyName]] = $el.is(':checked'); // bool
                } else { // sentinel values
                    self[data[attachPropertyName]] = sentinelVal($el.val(), $el.data().sentinel); // misc
                }

                // parse Numbers
                if (data.format === 'number') {
                    self[data[attachPropertyName]] = parseFloat(self[data[attachPropertyName]].replace(/,/g, ''));
                }
            });

            /*
            * assemble part of dto using grouped data, data-{attributename}-group
            * 
            * filter groups contain an array of checked values
            * 
            */
            $targetCollection.find('[data-' + attributeName + '-group]').each(function () {

                var $group = jQuery(this),
                    data = $group.data(),
                    valueCollection = [];

                $group.children().each(function () {

                    var $el = jQuery(this).find('input[type="checkbox"]:checked, input[type="radio"]:checked'),
                        value = data.rawValue ? $el.attr('data-id') : $el.attr('name');

                    if (value !== '' && value !== undefined) {
                        if ($el.is('input[type="radio"]') && $group.data('single-value') === true) {
                            valueCollection = value;    // radio button single value
                        } else {
                            valueCollection.push(value); // checkbox group single value
                        }
                    }

                });

                if (valueCollection.length > 0) {
                    self[data[camelCaseHelper(attributeName + '-group')]] = valueCollection;
                }
            });

            return self;
        },
        /*
        * (retrieve values from data decorated jQuery elements) and set to flat object
        *
        * @method _setFilter
        * @private
        * @param $targetCollection  {jQuery Object}     collection to search within
        * @param attributeName      {String}            data attribute name or group name
        * @return                   {Object}            comprised flat object
        * 
        */
        _setFilter = function ($targetCollection, attributeName) {

            var model = {},
                parameterModel = new _GetDecoration($targetCollection, attributeName);

            for (var filter in parameterModel) {
                model[filter] = parameterModel[filter];
            }

            model = _complexObj(model); // to complex

            return model;
        }
	};
	// #endregion

	// #region requires jQuery
	if (typeof jQuery !== 'undefined') {
		_ctor.prototype.jQueryObj = _$obj;
		_ctor.prototype.jQueryData = _setFilter;
	}
	// #endregion

	_ctor.prototype.obj = _obj;
	_ctor.prototype.url = _url;
	_ctor.prototype.complex = _complexObj;

	/*
* feature and browser detection
*
* @class serialise as window.toolkit.serialise
* @public 
*/
	return new _ctor();
};