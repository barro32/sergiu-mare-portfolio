/* boot 4.0.1 */

window.toolkit.boot || (window.toolkit.boot = {});

window.toolkit.boot = new function () {

    this.config = {};
    this.config.global = '/Assets/scripts/libs/';
    this.config.local = '/Assets/scripts/libs/mod-js/';
    this.config.cdn = '';

    this.loadScript = function (scriptSrc, src, callback) {
        var isIe10 = navigator.appVersion.indexOf('MSIE 10') != -1;

        var script = document.createElement('script'),
            path = src ? this.config[src] : this.config.local;

        script.type = 'text/javascript';
        script.src = path + scriptSrc;
        document.body.appendChild(script);

		if (callback) {
			if (script.addEventListener && !isIe10) {
				if (callback) {
					script.addEventListener('load', function (e) { callback(); }, false);
				}
			} else if (script.attachEvent) {            
				script.attachEvent('onreadystatechange', function () {
					script.onload = script.onreadystatechange = null;
					
					if (script.readyState === 'loaded' || script.readyState === 'complete') {
						callback();
					}
				});
			}
		}

    };

    return this;

};