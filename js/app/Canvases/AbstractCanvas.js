var AbstractCanvas = Class({
	constructor: function (id, width, height) {
		this.id = id;
		this.origin = {x: 0, y: 0};
		this.canvasObject = document.getElementById(id);
		this.width = width || window.innerWidth;
		this.height = height || window.innerHeight;
		this.elements = [];
		this.canvasObject.width = this.width;
		this.canvasObject.height = this.height;
		this.drawer = new SVGDrawer(this);
		this.scale = 1;
	},
	getContext: function () {
		return this.canvasObject.getContext('2d');
	},
	setOrigin: function (point) {
		this.origin = point;
	},
	getOrigin: function () {
		return this.origin;
	},
	resize: function () {
		this.setSize(window.innerWidth, window.innerHeight);
	},
	clear: function () {
		this.getContext().clearRect(0, 0, this.width, this.height);
	},
	redraw: function () {
		this.getContext().clearRect(0, 0, this.width, this.height);
	},
	setSize: function (width, height) {
		this.width = width;
		this.height = height;

		this.canvasObject.width = width;
		this.canvasObject.height = height;
	}
});