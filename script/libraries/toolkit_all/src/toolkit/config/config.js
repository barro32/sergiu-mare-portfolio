/* config 1.0.1 */

window.toolkit.config || (window.toolkit.config = {});

window.toolkit.config = new function Config() {
	var config = {
            breakpoints: {
                MOBILE_WIDTH: 0,
                MOBILE_HEIGHT: 0,
                TABLET_WIDTH: 0,
                TABLET_HEIGHT: 0
            },
            keys: {
                TAB: 9,
                ENTER: 13,
                ESCAPE: 27,
                SPACE: 32,
                PAGEUP: 33,
                PAGEDOWN: 34,
                END: 35,
                HOME: 36,
                LEFT: 37,
                UP: 38,
                RIGHT: 39,
                DOWN: 40
            }
        };
	
	return config;
};