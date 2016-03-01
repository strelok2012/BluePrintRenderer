var AbstractNode = Class({
	constructor: function (x, y, parentCanvas, hoverCanvas) {
		this.parentCanvas = parentCanvas;
		this.hoverCanvas = hoverCanvas;
		this.x = x;
		this.y = y;

		this.height = 0;

		this.angleRadius = 15;
		this.circleRadius = 8.5;
		this.inputs = [];
		this.outputs = [];
		this.fontSize = 14;
		this.showPinText = true;
	},
	getScale: function () {
		return this.parentCanvas.scale;
	},
	getCellSize: function () {
		return 17 * this.getScale();
	},
	draw: function (ctx) {
		this.setSVG();
		var self = this;
		var drawPromise = new Promise(function (resolve, reject) {
			self.parentCanvas.drawer.draw(self.getX(), self.getY()).then(function () {
				self.isDrawed = true;
				resolve();
			});
		});
		return drawPromise;
	},
	getFontSize: function () {
		return this.fontSize * this.getScale();
	},
	getCircleRadius: function () {
		return this.circleRadius * this.getScale();
	},
	getX: function () {
		return this.x * this.getScale();
	},
	getY: function () {
		return this.y * this.getScale();
	},
	calculateWidth: function () {
		var tmpDraw = SVG('tmpSvgContainer').size(0, 0);
		this.width = this.getCellSize() * this.minCellWidth;
		this.height = this.cellHeight * this.getCellSize();
		console.log('calculate width for scale', this.getScale());
		if (this.function && this.showHeader) {
			var headerTextCheck = tmpDraw.text(this.function.name);
			headerTextCheck.font({
				family: 'Roboto'
				, size: this.getFontSize()
				, anchor: 'start'
				, color: "#ffffff"
			});

			var headerTextWidth = this.getTextElementWidth(headerTextCheck);
			var newWidth = this.nearestCellWidth(headerTextWidth + this.getCellSize() * 2.5) * this.getCellSize();


			if (this.delegateOutput) {
				newWidth += this.getCellSize();
			}
			if (newWidth > this.width) {

				this.width = newWidth;
			}

			if (this.function.isCustom) {
				var nodeText = tmpDraw.text(this.customText);
				nodeText.style('font-style', 'italic');
				nodeText.font({
					family: 'Roboto'
					, size: this.getFontSize()
					, anchor: 'start'
					, color: "#a1825d"
				});

				headerTextWidth = this.getTextElementWidth(nodeText);
				newWidth = this.nearestCellWidth(headerTextWidth + this.getCellSize() * 2.5) * this.getCellSize();
				if (this.delegateOutput) {
					newWidth += this.getCellSize();
				}
				if (newWidth > this.width) {
					this.width = newWidth;
				}
			}


		}

		var l = Math.min(this.inputs.length, this.outputs.length) || 1;

		if (this.showPinText) {
			var maxOutSize = 0;
			var maxInSize = 0;

			for (var i = 0; i < this.inputs.length; i++) {
				var tIn = this.inputs[i];
				var tInputText = tmpDraw.text(tIn.name);
				tInputText.font({
					family: 'Roboto'
					, size: this.getFontSize()
					, anchor: 'start'
					, color: "#ffffff"
				});

				var size = this.getTextElementWidth(tInputText)
				if (size > maxInSize)
					maxInSize = size;
			}


			for (var i = 0; i < this.outputs.length; i++) {
				var tOut = this.outputs[i];
				var tOutText = tmpDraw.text(tOut.name);
				tOutText.font({
					family: 'Roboto'
					, size: this.getFontSize()
					, anchor: 'start'
					, color: "#ffffff"
				});

				var size = this.getTextElementWidth(tOutText)
				if (size > maxOutSize)
					maxOutSize = size;
			}

			var lineWidth = this.getCellSize() + this.getCircleRadius() * 1.5 + maxInSize + maxOutSize + this.getCellSize() + this.getCircleRadius() * 1.5;
			newWidth = this.nearestCellWidth(lineWidth) * this.getCellSize();
			if (newWidth > this.width) {
				this.width = newWidth;
			}
		}
	},
	nearestCellWidth: function (width) {
		return Math.ceil(width / this.getCellSize());
	},
	setOutputLink: function (from, to) {
		//	console.log(from,to);
		if (from && to) {
			from.linked = true;
			if (!from.links)
				from.links = [];
			from.links.push(to);

			to.linked = true;
		}
	},
	setDelegateOut: function (dest) {
		if (this.delegateOutput) {
			this.delegateOutput.linked = true;
			this.delegateOutput.link = dest;

			dest.linked = true;
		}
	},
	getTextElementWidth: function (element) {
		if (element)
			return document.getElementById(element.node.id).getComputedTextLength() || 0;
		else
			return 0;
	},
	drawShadow: function () {
		var draw = SVG('svgContainer').size(this.width * 1.5, this.height * 1.5);
		var shadow = draw.rect(this.width, this.height).radius(this.angleRadius);
		shadow.fill({color: '#f06', opacity: 0.0});
		shadow.stroke({color: '#000', opacity: 0.8, width: 2});
		shadow.filter(function (add) {
			add.gaussianBlur(3);
		});
		shadow.back();
		this.parentCanvas.drawer.draw(this.getX(), this.getY());
		this.isShadowDrawed = true;
	},
	constructCircle: function (draw, input, x, y) {
		input.parent = this;
		input.center = {x: this.getX() + x + this.getCircleRadius() / 2, y: this.getY() + y + this.getCircleRadius() / 2};




		if (input.type !== VAR_TYPES.delegate) {
			var circle = draw.circle(this.getCircleRadius());
			//console.log(input);
			var color = VAR_COLORS[input.type.name];
			circle.stroke({color: color, width: 2});
			if (input.linked)
				circle.fill({color: color});
			circle.translate(x, y);

			var polyline = draw.polyline([[x + this.getCircleRadius() * 1.5, y + this.getCircleRadius() / 2], [x + this.getCircleRadius() * 1.2, y + this.getCircleRadius() / 2 - this.getCircleRadius() / 4], [x + this.getCircleRadius() * 1.2, y + this.getCircleRadius() / 2 + this.getCircleRadius() / 4], [x + this.getCircleRadius() * 1.5, y + this.getCircleRadius() / 2]]).fill(color).stroke({width: 1, color: color});
		}
		else {
			var dIn = draw.rect(this.getCircleRadius(), this.getCircleRadius()).radius(1).stroke({color: VAR_COLORS[input.type.name], width: 2});
			if (input.linked)
				dIn.fill({color: VAR_COLORS[input.type.name]});
			dIn.translate(x, y);
		}

		//var circleT = draw.circle(this.getCircleRadius());
		//circleT.fill({color: "#eee"});
		//circleT.translate(x, y);
	},
	constructExecNode: function (draw, input, x, y) {
		var execNodeRadius = 3;
		var nodeSize = 0.8 * this.getCellSize();
		input.parent = this;
		input.center = {x: this.getX() + x + nodeSize / 2, y: this.getY() + y - nodeSize / 2};



		var path = "M 0,{0} C 0,{0} 0,0 {1},0".format(execNodeRadius, execNodeRadius);
		path += "H {1}".format(execNodeRadius, nodeSize / 2);
		path += "L {0},{1}".format(nodeSize, nodeSize / 2);
		path += "L {0},{1}".format(nodeSize / 2, nodeSize);
		path += "h {0}".format(execNodeRadius - nodeSize / 2);
		path += "C {0},{1} 0,{1} 0,{2}".format(execNodeRadius, nodeSize, nodeSize - execNodeRadius);
		path += "v {0}".format(-nodeSize + 2 * execNodeRadius);
		var arrow = draw.path(path);


		var arrowPos = {x: x, y: y - 0.8 * this.getCellSize()};
		arrow.stroke({color: "#fff", width: 2});
		arrow.fill({color: '#000000', opacity: 0.0});
		arrow.translate(arrowPos.x, arrowPos.y);

		if (input.linked) {
			arrow.fill({color: VAR_COLORS.exec, opacity: 1});
		}

	},
	drawHover: function () {
		var draw = SVG('svgContainer').size(this.width, this.height);
		var hoverRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		hoverRect.fill({color: '#000000', opacity: 0});
		hoverRect.stroke({color: '#f1b000', opacity: 1, width: 4});
		var origin = this.parentCanvas.getOrigin();
		this.hoverCanvas.drawer.draw(this.getX() - origin.x, this.getY() - origin.y, this.getX(), this.getY());
	},
	drawPins: function (draw, newCellOffset, newDrawText) {
		var drawText = true;
		if (newDrawText === false)
			drawText = false;
		var cellOffset = newCellOffset || 2.5;
		for (var i = 0; i < this.inputs.length; i++) {
			var tIn = this.inputs[i];
			var circleCenterX = this.getCellSize();
			var circleCenterY = cellOffset * this.getCellSize();
			if (tIn.type === VAR_TYPES.exec) {
				this.constructExecNode(draw, tIn, circleCenterX - this.getCircleRadius() / 2, circleCenterY + 0.8 * this.getCellSize() / 2);
			}
			else {
				this.constructCircle(draw, tIn, circleCenterX - this.getCircleRadius() / 2, circleCenterY - this.getCircleRadius() / 2);
			}
			if (tIn.name !== "execute" && drawText) {
				var inputText = draw.text(tIn.name);

				inputText.font({
					family: 'Roboto'
					, size: this.getFontSize()
					, anchor: 'start'
					, color: "#ffffff"
				});
				inputText.translate(circleCenterX + this.getCircleRadius() * 1.5, circleCenterY - this.getFontSize());
				inputText.fill({color: "#fff"});
			}

			cellOffset += 1.5;
		}
		cellOffset = newCellOffset || 2.5;
		for (var i = 0; i < this.outputs.length; i++) {
			var tOut = this.outputs[i];
			var circleCenterX = this.width - this.getCellSize();
			var circleCenterY = cellOffset * this.getCellSize();
			if (tOut.type === VAR_TYPES.exec) {
				this.constructExecNode(draw, tOut, circleCenterX - this.getCircleRadius() / 2, circleCenterY + 0.8 * this.getCellSize() / 2);
			}
			else {
				this.constructCircle(draw, tOut, circleCenterX - this.getCircleRadius() / 2, circleCenterY - this.getCircleRadius() / 2);
			}
			if (tOut.name !== "then" && tOut.name !== "Output_Get" && drawText) {
				var inputText = draw.text(tOut.name);

				inputText.font({
					family: 'Roboto'
					, size: this.getFontSize()
					, anchor: 'end'
					, color: "#ffffff"
				});
				inputText.translate(circleCenterX - this.getCircleRadius(), circleCenterY - this.getFontSize());
				inputText.fill({color: "#fff"});
			}



			cellOffset += 1.5;
		}
	}
});