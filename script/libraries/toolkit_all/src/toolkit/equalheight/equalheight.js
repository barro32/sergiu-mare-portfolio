/* equalHeight 1.0.0 */

window.toolkit.equalHeight || (window.toolkit.equalHeight = {});

window.toolkit.equalHeight = function() {
	var panels = this.children,
		heights = [];
	
	for (var i = 0; i < panels.length; i += 1) {
		panels[i].style.height = '';
	}
	
	if (panels.length > 1) {
		for (var i = 0; i < panels.length; i += 1) {
			heights.push(panels[i].clientHeight);
		}

		for (var i = 0; i < panels.length; i += 1) {
			panels[i].style.height = Math.max.apply(Math, heights) + 'px';
		}
	}
};