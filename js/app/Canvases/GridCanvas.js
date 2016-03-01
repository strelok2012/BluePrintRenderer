

var GridCanvas = Class(AbstractCanvas, {
	constructor: function (id, width, height) {
		GridCanvas.$super.call(this, id, width, height);
	},
	resize: function () {
		GridCanvas.$superp.resize.call(this);
		this.drawGrid();
	},
	redraw: function () {
		this.drawGrid();
	},
	drawGrid: function () {
		//14 columns every
		var ctx = this.getContext();
		var width = this.width;
		var height = this.height;
		var gridStep = 17;
		var origin = this.getOrigin();

		var x = origin.x;
		var y = origin.y;
		for (var p = x % gridStep; p < width; p += gridStep) {
			ctx.beginPath();
			ctx.moveTo(p, 0);
			ctx.lineTo(p, height);
			ctx.strokeStyle = '#343434';
			ctx.stroke();
		}
		for (var p = y % gridStep; p < height; p += gridStep) {
			ctx.beginPath();
			ctx.moveTo(0, p);
			ctx.lineTo(width, p);
			ctx.strokeStyle = '#343434';
			ctx.stroke();
		}


		for (var p = x % (gridStep * 8); p < width; p += gridStep * 8) {
			ctx.beginPath();
			ctx.moveTo(p, 0);
			ctx.lineTo(p, height);
			ctx.strokeStyle = '#161616';
			ctx.stroke();
		}

		for (var p = y % (gridStep * 8); p < width; p += gridStep * 8) {
			ctx.beginPath();
			ctx.moveTo(0, p);
			ctx.lineTo(width, p);
			ctx.strokeStyle = '#161616';
			ctx.stroke();
		}
	}
});