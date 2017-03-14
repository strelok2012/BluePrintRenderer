class RerouteNode extends AbstractNode {
	constructor(funcObj, x, y, drawer) {
		super(x, y, drawer);
		this.function = funcObj;
		this.inputs = funcObj.inputs;
		this.outputs = funcObj.outputs;
		this.minCellWidth = 2.5;
		this.minCellHeight = 1.5;
		this.angleRadius = 8;
		this.cellOffset = 0.5;
		this.width = this.cellSize * this.minCellWidth;
		this.cellHeight = this.cellSize * this.minCellHeight;
	}
	calculateWidth() {
		this.height = this.minCellHeight * this.cellSize;
		this.width = this.cellSize * this.minCellWidth;
	}
	drawPins(draw) {
		var cellOffset = 0.5;
		var tIn = this.outputs[0];
		var circleCenterX = this.cellSize + this.circleRadius / 2;
		var circleCenterY = cellOffset * this.cellSize;
		var pinObj = {};
		var pinDraw = draw.group();
		var pinFullLength = 0;
		var pinFullHeight = this.cellSize * 1.1;
		this.constructCircle(pinDraw, tIn, circleCenterX - this.circleRadius / 2, circleCenterY - this.circleRadius / 2);
		pinFullLength += this.circleRadius * 2.2;
		pinObj.draw = pinDraw;
		var hoverRect = pinDraw.rect(pinFullLength, pinFullHeight);
		var hoverGradient = draw.gradient('linear', function (stop) {
			stop.at({offset: 0, color: VAR_COLORS[tIn.type.name], opacity: 0});
			stop.at({offset: 0.1, color: VAR_COLORS[tIn.type.name], opacity: 0.8});
			stop.at({offset: 0.9, color: VAR_COLORS[tIn.type.name], opacity: 0.8});
			stop.at({offset: 1, color: VAR_COLORS[tIn.type.name], opacity: 0});
		});
		hoverRect.fill(hoverGradient);
		hoverRect.x(circleCenterX - this.circleRadius);
		hoverRect.cy(circleCenterY);
		hoverRect.back();
		pinObj.hover = hoverRect;
		this.inputs[0].parent = this;
		this.inputs[0].center = {x: circleCenterX - this.circleRadius / 2 + this.circleRadius / 2, y: circleCenterY - this.circleRadius / 2 + this.circleRadius / 2};
		hoverRect.hide();
		this.pins.push(pinObj);
	}
	setSVG(drawer) {
		var draw = drawer.group();
		var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		mainRect.fill({color: "#000", opacity: 0});
		//mainRect.stroke({color: '#000000', opacity: 1, width: 1});

		this.drawPins(draw);
		return draw;
	}
}