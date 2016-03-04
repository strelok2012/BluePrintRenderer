var FunctionNode = Class(AbstractNode, {
	constructor: function (funcObj, x, y, drawer) {
		FunctionNode.$super.call(this, x, y, drawer);
		this.function = funcObj;

		this.inputs = funcObj.inputs;
		this.outputs = funcObj.outputs;

		this.minCellWidth = 10.5;
		this.minCellHeight = 2;

		this.angleRadius = 10;
		this.showHeader = true;
		this.showPinText = true;
		this.headerCellHeight = 1.5;
		this.cellOffset = 0.5;
		console.log(this.function.name);
		if (this.function.name.indexOf("_") !== -1 && this.function.name.indexOf("Get") === -1 && this.function.name.indexOf("Set") === -1 && this.function.name.indexOf("Add") === -1 && this.function.name.indexOf("K2") === -1) {
			this.angleRadius = 0;
			this.headerCellHeight = 0;
			this.minCellWidth = 5;
			this.minCellHeight = 4;
			this.showHeader = false;
			this.showPinText = false;
		}

		this.width = this.getCellSize() * this.minCellWidth;
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
		//var tmp = this.drawer;

		var draw = drawer.group();
		//var draw = tmp.nested();


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

		if (this.showHeader) {

			var headerGradient = draw.gradient('linear', function (stop) {
				stop.at({offset: 0, color: headerColor, opacity: 1});
				stop.at({offset: 1, color: headerColor, opacity: 0});
			});
			headerGradient.from(0, 0).to(1, 0);
			var header = draw.rect(this.width, this.height).radius(this.getAngleRadius()).fill(headerGradient);
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
			headerText.style('pointer-events', 'none');
			headerText.translate(this.getCellSize() * 2, 0);
			headerText.fill({color: "#fff"});

			var path = draw.path(fSymbol);
			path.translate(this.getCellSize(), 1.1 * this.getCellSize());
			if (!this.function.isPure) {
				path.fill({color: VAR_COLORS.execFunctionF});
			}
			else {
				path.fill({color: VAR_COLORS.pureFunctionF});
			}

			path.scale(1.7 * this.getScale(), 1.7 * this.getScale());
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

		return draw;

	}
});