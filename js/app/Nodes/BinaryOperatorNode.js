var BinaryOperatorNode = Class(AbstractNode, {
	constructor: function (funcObj, x, y, parentCanvas, hoverCanvas) {
		BinaryOperatorNode.$super.call(this, x, y, parentCanvas, hoverCanvas);
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
	setSVG: function () {
		this.calculateWidth();
		var draw = SVG('svgContainer').size(this.width, this.height);


		var linGradient = draw.gradient('linear', function (stop) {
			stop.at({offset: 0, color: '#a0a0a0', opacity: 1});
			stop.at({offset: 0.03, color: '#5f5f5f', opacity: 0.3});
			stop.at({offset: 0.8, color: '#636363', opacity: 0.3});
			stop.at({offset: 1, color: '#ffffff', opacity: 1});
		});
		linGradient.from(0, 1).to(0, 0);
		var text = this.function.name;
		if (text.indexOf("Boolean") !== -1) {
			text = text.replace("Boolean", "").toUpperCase();
		}
		else if (text.indexOf("Int") !== -1 || text.indexOf("Float") !== -1) {
			if (text.indexOf("And") !== -1) {
				text = "&";
			}
			else if (text.indexOf("Or") !== -1) {
				text = "|";
			}
			else if (text.indexOf("Multiply") !== -1) {
				text = "*";
			}
		}

		if (text.indexOf("Add") !== -1) {
			text = "+";
		}



		var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		opacityRect.fill(linGradient);
		var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		mainRect.fill({color: "#000", opacity: 0.5});
		mainRect.stroke({color: '#000000', opacity: 1, width: 1});

		var textSize = 35 * this.getScale();
		var nodeText = draw.text(text.toUpperCase());
		nodeText.translate(this.width / 2, this.height / 2 - textSize);
		nodeText.fill({color: "#fff", opacity: 0.3});
		nodeText.style('font-weight', 'bold');
		nodeText.font({
			family: 'Roboto'
			, size: textSize
			, anchor: 'middle'
			, color: "#ffffff"
		});

		this.drawPins(draw, 1, false);
	}
});