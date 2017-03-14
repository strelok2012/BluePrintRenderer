class SetterNode extends AbstractNode {
	constructor(setterNode, x, y, drawer) {
		super(x, y, drawer);
		this.inputs = setterNode.inputs;
		this.outputs = setterNode.outputs;
		this.minCellWidth = 10;
		this.cellHeight = 5;
		this.showPinText = true;
		this.cellOffset = 0.5;

		this.width = this.cellSize * this.minCellWidth;
		this.headerCellHeight= 1.5;
		this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(setterNode.outputs.length, setterNode.inputs.length) + Math.max(setterNode.outputs.length, setterNode.inputs.length) * this.cellOffset;
	}
	setSVG(drawer) {
		var draw = drawer.group();

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
		radGradient.attr('gradientTransform', 'matrix(1,0,0,0.7,0,-0.3)');
		//radGradient.attr('gradientUnits', 'userSpaceOnUse');


		var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
		var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		mainRect.fill(radGradient);
		mainRect.stroke({color: '#000000', opacity: 1, width: 1});
		this.drawPins(draw);

		var setText = draw.text("SET");
		setText.translate(this.width / 2, 5);
		setText.fill({color: "#fff"});
		setText.style('font-weight', 'bold')
		setText.font({
			family: 'Roboto'
			, size: this.fontSize
			, anchor: 'middle'
			, color: "#ffffff"
		});

		return draw;
	}
}