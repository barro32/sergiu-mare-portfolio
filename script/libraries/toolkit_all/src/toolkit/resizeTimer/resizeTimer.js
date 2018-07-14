/* resizeTimer 1.0.0 */

window.toolkit.resizeTimer || (window.toolkit.resizeTimer = []);

(function(){
	var resizeDelay,
		resizeHandler = function() {
			clearTimeout(resizeDelay);
			resizeDelay = setTimeout(function () {
				for (var i = 0; i < window.toolkit.resizeTimer.length; i += 1) {	
					(window.toolkit.resizeTimer[i]());   				
				}
			}, 100);
		};

	if (typeof window.addEventListener !== 'undefined') {
		window.addEventListener('resize', resizeHandler, true);
	} else if (typeof window.attachEvent !== 'undefined') {
		window.attachEvent('onresize', resizeHandler);
	} else {
		window['onresize'] = resizeHandler;
	}
}());