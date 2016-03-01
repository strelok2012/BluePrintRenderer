var EventNode = Class(AbstractNode, {
	constructor: function (funcObj, x, y, parentCanvas, hoverCanvas) {
		EventNode.$super.call(this, x, y, parentCanvas, hoverCanvas);
		this.function = funcObj;
		this.outputs = funcObj.outputs;
		this.delegateOutput = {};

		this.minCellWidth = 8;
		this.minCellHeight = 4;

		this.showHeader = true;

		this.angleRadius = 10;

		this.headerCellHeight = 1.5;
		if (this.function.isCustom === true) {
			this.headerCellHeight = 2.5;
			this.customText = "Custom Event";
		}
		this.cellOffset = 0.5;
		this.width = this.getCellSize() * this.minCellWidth;

		this.cellHeight = this.headerCellHeight + this.cellOffset + funcObj.outputs.length + funcObj.outputs.length * this.cellOffset + this.cellOffset;
	},
	setSVG: function () {
		this.calculateWidth();
		var headerColor = VAR_COLORS["event"];
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

		header.clipWith(rect)
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

		if (this.function.isCustom) {
			var nodeText = draw.text(this.customText);
			nodeText.translate(this.getCellSize() * 2, this.fontSize);
			nodeText.fill({color: "#a1825d"});
			nodeText.style('font-style', 'italic');
			nodeText.font({
				family: 'Roboto'
				, size: this.fontSize
				, anchor: 'start'
				, color: "#a1825d"
			});
		}



		var path = draw.path(fSymbol);
		path.translate(this.getCellSize(), 1.1 * this.getCellSize());
		path.fill({color: "#fff"});
		path.scale(1.7, 1.7);


		var dOut = draw.rect(this.circleRadius, this.circleRadius).radius(1).stroke({color: VAR_COLORS.delegateOut, width: 2});
		dOut.translate(this.width - this.getCellSize(), this.headerCellHeight * this.getCellSize() / 2 - this.circleRadius / 2);
		if (this.delegateOutput.linked)
			dOut.fill({color: VAR_COLORS.delegateOut});

		this.delegateOutput.color = VAR_COLORS.delegateOut;
		this.delegateOutput.center = {x: this.x + this.width - this.getCellSize() + this.getCellSize() / 4, y: this.y + this.getCellSize() / 2 + this.getCellSize() / 4};
		//console.log(this.outputs);

		if (!this.function.isCustom)
			this.drawPins(draw);
		else
			this.drawPins(draw, 3.5);
	}
});