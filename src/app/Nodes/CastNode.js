var CastNode = Class(AbstractNode, {
	constructor: function (funcObj, x, y, drawer) {
		this.minCellWidth = 8.5
		this.minCellHeight = 2;
		CastNode.$super.call(this, x, y, drawer);
		this.function = funcObj;

		this.inputs = funcObj.inputs;
		this.outputs = funcObj.outputs;



		this.angleRadius = 10;
		this.showHeader = true;
		this.showPinText = true;
		this.headerCellHeight = 1.5;
		this.cellOffset = 0.5;

		this.icon = ICONS["dynamic_cast"];



		this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
	},
	setSVG: function (drawer) {
		var headerColor = VAR_COLORS["dynamicCast"];
		;

		var draw = drawer.group();

		var headerGradient = draw.gradient('linear', function (stop) {
			stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
			stop.at({offset: 1, color: headerColor, opacity: 0});
		});

		var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
		var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		mainRect.fill({color: "#000", opacity: 0.5});
		mainRect.stroke({color: '#000000', opacity: 1, width: 1});

		var headerGradient = draw.gradient('linear', function (stop) {
			stop.at({offset: 0, color: headerColor, opacity: 1});
			stop.at({offset: 1, color: headerColor, opacity: 0});
		});
		headerGradient.from(0, 0).to(1, 0);
		var header = draw.rect(this.width, this.height).radius(this.angleRadius).fill(headerGradient);
		var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.cellSize)

		header.clipWith(rect)

		var headerText = draw.text(this.function.name);

		headerText.font({
			family: 'Roboto'
			, size: this.fontSize
			, anchor: 'start'
			, color: "#ffffff"
		});
		headerText.style('font-weight', 'bold');
		headerText.translate(this.cellSize * 2, 0);
		headerText.fill({color: "#fff"});

		var icon = draw.image('/icons/{0}'.format(this.icon), 16, 16).fill({color: "#fff"});
		icon.center(this.cellSize, this.headerCellHeight * this.cellSize / 2);
		this.drawPins(draw);


		return draw;

	}
});