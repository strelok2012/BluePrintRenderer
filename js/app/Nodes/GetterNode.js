var GetterNode = Class(AbstractNode, {constructor: function (getterNode, x, y, drawer) {
		GetterNode.$super.call(this, x, y, drawer);
		this.outputs = getterNode.outputs;
		this.minCellWidth = 8;
		this.cellHeight = 2;
		this.width = this.cellSize * this.minCellWidth;
	},
	setSVG: function (drawer) {
		var mainColor = VAR_COLORS[this.outputs[0].type.name];
		var draw = drawer.group();
		var radGradient = draw.gradient('radial', function (stop) {
			stop.at({offset: 0, color: mainColor, opacity: 0.74226803});
			stop.at({offset: 1, color: mainColor, opacity: 0.01});
		});

		radGradient.attr('gradientTransform', 'matrix(1,0,0,1,0,-0.5)');

		var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		opacityRect.fill(this.nodesDrawer.opacityLinearGradient);


		var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		mainRect.fill(radGradient);
		//mainRect.fill({color: "#fff", opacity: 0});
		mainRect.stroke({color: '#000000', opacity: 1, width: 1});

		/*	var imgColor = hexToRgb(mainColor);
		 var spill = draw.image('/images/varnode/VarNode_color_spill.png', this.width, this.height);
		 spill.filter(function (add) {
		 add.colorMatrix('matrix', [imgColor.r / 255, 0, 0, 0, 0
		 , 0, imgColor.g / 255, 0, 0, 0
		 , 0, 0, imgColor.b / 255, 0, 0
		 , 0, 0, 0, 1.0, 0]);
		 })*/

		this.drawPins(draw, 1);

		return draw;
	}
});