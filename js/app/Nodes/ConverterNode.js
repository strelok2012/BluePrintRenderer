var ConverterNode = Class(AbstractNode, {
	constructor: function (funcObj, x, y, drawer) {
		ConverterNode.$super.call(this, x, y, drawer);
		this.function = funcObj;
                
                //console.log("CONVERTER",funcObj);

		this.inputs = funcObj.inputs;
		this.outputs = funcObj.outputs;

		this.minCellWidth = 6;
		this.minCellHeight = 4;

		this.angleRadius = 0;

		this.cellOffset = 0.5;
		this.width = this.cellSize * this.minCellWidth;
		this.cellHeight = this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
	},
	calculateWidth: function () {
		this.height = this.minCellHeight * this.cellSize;
		this.width = this.cellSize * this.minCellWidth;
	},
	setSVG: function (drawer) {
		var draw = drawer.group();




		var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
		var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		mainRect.fill({color: "#000", opacity: 0.5});
		mainRect.stroke({color: '#000000', opacity: 1, width: 1});

		this.drawPins(draw, 2, false);

		var ellipseWidth = this.circleRadius * 1.5;
		var ellipseHeight = this.circleRadius * 2;
		var ellipse = draw.rect(ellipseWidth, ellipseHeight).radius(6);
		ellipse.translate(this.width / 2 - ellipseWidth / 2, this.height / 2 - ellipseHeight / 2);
		ellipse.fill({color: "#fff", opacity: 0.3});

		return draw;
	}
});