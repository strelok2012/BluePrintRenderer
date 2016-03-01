var SVGDrawer = Class({
	constructor: function (canvas) {
		this.canvas = canvas;
	},
	draw: function ( x, y, xx, yy) {
		var self = this;
		var drawPromise = new Promise(function (resolve, reject) {
			var svgString = document.getElementById('svgContainer').innerHTML;
			var img = new Image();
			var src = 'data:image/svg+xml;base64,' + window.btoa(svgString);
			var promise = new Promise(function (resolve, reject) {
				img.onload = function () {
					resolve();
				};
				img.onerror = function (e) {
					reject();
				};
			});

			promise.then(function () {
				self.callBack(img, x, y, xx, yy);
				resolve();
			}, function () {
				self.callBack(img, x, y, xx, yy);
				reject();
			});
			img.src = src;
			document.getElementById('svgContainer').innerHTML = "";
		});

		return drawPromise;

	},
	callBack: function (img, x, y, xx, yy) {

		if (xx && yy || (xx === 0 && yy === 0)) {
			this.canvas.elements.push({img: img, x: xx, y: yy});
		}
		else {
			this.canvas.elements.push({img: img, x: x, y: y});
		}

	},
	drawImage: function (img, x, y) {
		this.canvas.getContext().drawImage(img, x, y);
	}
});
