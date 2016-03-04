var SVGDrawer = Class({
	constructor: function (canvas) {
		this.canvas = canvas;
	},
	draw: function (x, y, addToElements) {
		var self = this;
		var drawPromise = new Promise(function (resolve, reject) {
			/*var img = new Image();
			img.src = 'data:image/svg+xml;base64,' + window.btoa(document.getElementById('svgContainer').innerHTML);
			var el = {img: img, x: x, y: y};
			if (addToElements !== false)
				self.canvas.elements.push(el);*/

			//console.log('zanuliaem');
			//document.getElementById('svgContainer').innerHTML = "";
			//resolve(el);
			resolve();

		});
		return drawPromise;
	},
	drawImage: function (img, x, y) {
		this.canvas.getContext().drawImage(img, x, y);
	},
	drawElement: function (el) {
		var origin = this.canvas.getOrigin();
		this.canvas.getContext().drawImage(el.img, el.x + origin.x, el.y + origin.y);
	}
});
