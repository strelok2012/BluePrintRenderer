var FunctionNode = Class(AbstractNode, {
	constructor: function (funcObj, x, y, drawer) {
		this.minCellWidth = 8.5
		this.minCellHeight = 2;
		FunctionNode.$super.call(this, x, y, drawer);
		this.function = funcObj;

		this.inputs = funcObj.inputs;
		this.outputs = funcObj.outputs;



		this.angleRadius = 10;
		this.showHeader = true;
		this.showPinText = true;
		this.headerCellHeight = 1.5;
		this.cellOffset = 0.5;
		if (this.function.name.indexOf("_") !== -1 && this.function.name.indexOf("Get") === -1 && this.function.name.indexOf("Set") === -1 && this.function.name.indexOf("Add") === -1 && this.function.name.indexOf("K2") === -1 && this.function.name.indexOf("Montage") === -1 && this.function.name.indexOf("Greater_Vector") === -1 && this.function.name.indexOf("Less_Vector") === -1) {
			this.angleRadius = 0;
			this.headerCellHeight = 0;
			this.minCellWidth = 5;
			this.minCellHeight = 4;
			this.showHeader = false;
			this.showPinText = false;
		}

		if (this.function.name.indexOf("Make") !== -1 && this.function.name.indexOf("Array") === -1) {
			this.icon = ICONS["make_struct"];
		}
		else if (this.function.name.indexOf("Break") !== -1) {
			this.icon = ICONS["break_struct"];
		}
		else if (this.function.name.indexOf("Make Array") !== -1) {
			this.icon = ICONS["make_array"];
		}


		this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
	},
	setSVG: function (drawer) {
		var headerColor = null;
		if (!this.function.isPure) {
			headerColor = VAR_COLORS["execFunction"];
		}
		else {
			headerColor = VAR_COLORS["pureFunction"];
		}

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

		if (this.showHeader) {
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
			if (!this.icon) {
				var path = draw.use(this.nodesDrawer.fLetter);
				path.translate(this.cellSize, 1.1 * this.cellSize);
				if (!this.function.isPure) {
					path.fill({color: VAR_COLORS.execFunctionF});
				}
				else {
					path.fill({color: VAR_COLORS.pureFunctionF});
				}

				path.scale(1.65, 1.65);
			}
			else {
				var icon = draw.image('/icons/{0}'.format(this.icon), 16, 16).fill({color: "#fff"});
				icon.center(this.cellSize, this.headerCellHeight * this.cellSize / 2);
			}
			this.drawPins(draw);

		}
		else {
			var text = this.function.name;
			if (text.indexOf("Subtract") !== -1) {
				text = "-"
			}
			else if (text.indexOf("Add") !== -1) {
				text = "+"
			}
			else if (text.indexOf("Multiply") !== -1) {
				text = "x"
			}
			else if (text.indexOf("Percent") !== -1) {
				text = "%"
			}
			else if (text.indexOf("Divide") !== -1) {
				text = "/"
			}
			else if (text.indexOf("Greater") !== -1) {
				text = ">"
			}
			else if (text.indexOf("Equal") !== -1 && text.indexOf("Not") !== -1) {
				text = "!="
			}
			var textSize = 35;
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

		return draw;

	}
});