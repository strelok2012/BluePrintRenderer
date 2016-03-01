var MacroNode = Class(AbstractNode, {
	constructor: function (funcObj, x, y, parentCanvas, hoverCanvas) {
		MacroNode.$super.call(this, x, y, parentCanvas, hoverCanvas);
		this.function = funcObj;
		this.inputs = funcObj.inputs;
		this.outputs = funcObj.outputs;

		this.minCellWidth = 10.5;
		this.minCellHeight = 2;

		this.angleRadius = 10;
		this.headerCellHeight = 1.5;
		this.cellOffset = 0.5;
		this.showHeader = true;
		this.showPinText = true;

		this.width = this.getCellSize() * this.minCellWidth;
		this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
	},
	setSVG: function () {
		this.calculateWidth();
		var headerColor = VAR_COLORS["macro"];

		var draw = SVG('svgContainer').size(this.width, this.height);


		var headerGradient = draw.gradient('linear', function (stop) {
			stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
			stop.at({offset: 1, color: headerColor, opacity: 0});
		});

		var linGradient = draw.gradient('linear', function (stop) {
			stop.at({offset: 0, color: '#a0a0a0', opacity: 1});
			stop.at({offset: 0.03, color: '#5f5f5f', opacity: 0.3});
			stop.at({offset: 0.8, color: '#636363', opacity: 0.3});
			stop.at({offset: 1, color: '#ffffff', opacity: 1});
		});
		linGradient.from(0, 1).to(0, 0);



		var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		opacityRect.fill(linGradient);
		var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		mainRect.fill({color: "#000", opacity: 0.5});
		mainRect.stroke({color: '#000000', opacity: 1, width: 1});

		var headerGradient = draw.gradient('linear', function (stop) {
			stop.at({offset: 0, color: headerColor, opacity: 1});
			stop.at({offset: 1, color: headerColor, opacity: 0});
		});
		headerGradient.from(0, 0).to(1, 0);
		var header = draw.rect(this.width, this.height).radius(this.angleRadius).fill(headerGradient);
		var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.getCellSize())

		header.clipWith(rect);
		var headerText = draw.text(this.function.name);

		headerText.font({
			family: 'Roboto'
			, size: this.getFontSize()
			, anchor: 'start'
			, color: "#ffffff"
		});
		headerText.style('font-weight', 'bold');
		headerText.translate(this.getCellSize() * 2, 0);
		headerText.fill({color: "#fff"});

		this.drawPins(draw);



	}
});