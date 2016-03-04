var ConverterNode = Class(AbstractNode, {
	constructor: function (funcObj, x, y, drawer) {
		ConverterNode.$super.call(this, x, y, drawer);
		this.function = funcObj;

		this.inputs = funcObj.inputs;
		this.outputs = funcObj.outputs;

		this.minCellWidth = 6;
		this.minCellHeight = 4;

		this.angleRadius = 0;

		this.cellOffset = 0.5;
		this.width = this.getCellSize() * this.minCellWidth;
		this.cellHeight = this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
	},
	calculateWidth: function () {
		this.height = this.minCellHeight * this.getCellSize();
		this.width = this.getCellSize() * this.minCellWidth;
	},
	setSVG: function (drawer) {
var draw = drawer.group();


		var linGradient = draw.gradient('linear', function (stop) {
			stop.at({offset: 0, color: '#a0a0a0', opacity: 1});
			stop.at({offset: 0.03, color: '#5f5f5f', opacity: 0.3});
			stop.at({offset: 0.8, color: '#636363', opacity: 0.3});
			stop.at({offset: 1, color: '#ffffff', opacity: 1});
		});
		linGradient.from(0, 1).to(0, 0);



		var opacityRect = draw.rect(this.width, this.height).radius(this.getAngleRadius());
		opacityRect.fill(linGradient);
		var mainRect = draw.rect(this.width, this.height).radius(this.getAngleRadius());
		mainRect.fill({color: "#000", opacity: 0.5});
		mainRect.stroke({color: '#000000', opacity: 1, width: 1});

		this.drawPins(draw, 2, false);

		var ellipseWidth = this.getCircleRadius() * 1.5;
		var ellipseHeight = this.getCircleRadius() * 2;
		var ellipse = draw.rect(ellipseWidth, ellipseHeight).radius(6);
		ellipse.translate(this.width / 2 - ellipseWidth / 2, this.height / 2 - ellipseHeight / 2);
		ellipse.fill({color: "#fff", opacity: 0.3});
		
			return draw;
	}
});