/* scrollTimer 1.0.0 */

window.toolkit.scrollTimer || (window.toolkit.scrollTimer = []);

(function(){
	var scrollDelay,
		scrollHandler = function() {
			clearTimeout(scrollDelay);
			scrollDelay = setTimeout(function () {
				for (var i = 0; i < window.toolkit.scrollTimer.length; i += 1) {	
					(window.toolkit.scrollTimer[i]());   				
				}
			}, 100);
		};

	if (typeof window.addEventListener !== 'undefined') {
		window.addEventListener('scroll', scrollHandler, true);
	} else if (typeof window.attachEvent !== 'undefined') {
		window.attachEvent('onscroll', scrollHandler);
	} else {
		window['onscroll'] = scrollHandler;
	}
}());