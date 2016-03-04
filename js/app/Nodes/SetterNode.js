var SetterNode = Class(AbstractNode, {
	constructor: function (setterNode, x, y, drawer) {
		GetterNode.$super.call(this, x, y, drawer);
		this.inputs = setterNode.inputs;
		this.outputs = setterNode.outputs;
		this.minCellWidth = 10;
		this.cellHeight = 5;

		this.width = this.getCellSize() * this.minCellWidth;
	},
	setSVG: function (drawer) {
		var draw =drawer.group();

		var mainColor = null;
		this.inputs.forEach(function (item) {
			if (item.type !== VAR_TYPES.exec) {
				mainColor = VAR_COLORS[item.type.name];
				return;
			}
		});


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



		var opacityRect = draw.rect(this.width, this.height).radius(this.getAngleRadius());
		opacityRect.fill(linGradient);
		var mainRect = draw.rect(this.width, this.height).radius(this.getAngleRadius());
		mainRect.fill(radGradient);
		mainRect.stroke({color: '#000000', opacity: 1, width: 1});
		this.drawPins(draw);

		var setText = draw.text("SET");
		setText.translate(this.width / 2, 5);
		setText.fill({color: "#fff"});
		setText.style('font-weight', 'bold')
		setText.font({
			family: 'Roboto'
			, size: this.getFontSize()
			, anchor: 'middle'
			, color: "#ffffff"
		});

		return draw;
	}
});