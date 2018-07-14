/* cache 1.0.0 */

window.toolkit.cache || (window.toolkit.cache = {});

if (typeof jQuery !== 'undefined') {
	jQuery(document).ready(function() {
		window.toolkit.cache = new function Cache() {
			var cache = {	
				$window: jQuery(window),
				$document: jQuery(document),
				$html: jQuery('html'),
				$body: jQuery('body')
			};
			
			return cache;
		};
	});
}