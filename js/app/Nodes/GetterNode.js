var GetterNode = Class(AbstractNode, {constructor: function (getterNode, x, y, parentCanvas, hoverCanvas) {
		GetterNode.$super.call(this, x, y, parentCanvas, hoverCanvas);
		this.outputs = getterNode.outputs;
		this.minCellWidth = 8;
		this.cellHeight = 2;
		this.width = this.getCellSize() * this.minCellWidth;
	},
	setSVG: function () {
		var mainColor = VAR_COLORS[this.outputs[0].type.name];
		this.calculateWidth();

		var draw = SVG('svgContainer').size(this.width, this.height);
		var radGradient = draw.gradient('radial', function (stop) {
			stop.at({offset: 0, color: mainColor, opacity: 0.74226803});
			stop.at({offset: 1, color: mainColor, opacity: 0});
		});
		radGradient.attr('gradientTransform', 'matrix(1,0,0,0.7,0,' + (-this.height / 2) + ')');
		radGradient.attr('gradientUnits', 'userSpaceOnUse');

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
		mainRect.fill(radGradient);
		mainRect.stroke({color: '#000000', opacity: 1, width: 1});


		this.constructCircle(draw, this.outputs[0], this.width - this.getCircleRadius() * 2.5, this.height / 2 - this.getCircleRadius() / 2);

		var text = draw.text(this.outputs[0].name);

		text.translate(this.width - this.getCircleRadius() * 3.5, this.height / 2 - this.getFontSize());
		text.fill({color: "#fff"});
		text.font({
			family: 'Roboto'
			, size: this.getFontSize()
			, anchor: 'end'
			, color: "#ffffff"
		});
	}
});