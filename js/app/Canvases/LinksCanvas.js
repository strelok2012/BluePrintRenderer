var LinksCanvas = Class(AbstractCanvas, {
	constructor: function (id, nodes, width, height) {
		this.nodes = nodes;
		this.controlOffset = 85;
		LinksCanvas.$super.call(this, id, width, height);
	},
	resize: function () {
		LinksCanvas.$superp.resize.call(this);
		this.drawLinks();
	},
	redraw: function () {
		LinksCanvas.$superp.redraw.call(this);
		this.drawLinks();
	},
	drawLinks: function () {
		var maxX = 0, maxY = 0;
		var maxXNode, maxYNode;
		for (var i = 0; i < this.nodes.length; i++) {
			if (this.nodes[i].getX() > maxX) {
				maxX = this.nodes[i].getX();
				maxXNode = this.nodes[i];
			}
			if (this.nodes[i].getY() > maxY) {
				maxY = this.nodes[i].getY();
				maxYNode = this.nodes[i];
			}
		}
		var draw = SVG('svgContainer').size(maxX + maxXNode.width, maxY + maxYNode.height);

		for (var i = 0; i < this.nodes.length; i++) {

			if (this.nodes[i].delegateOutput && this.nodes[i].delegateOutput.link) {
				this.drawPath(draw, this.nodes[i], this.nodes[i].delegateOutput, this.nodes[i].delegateOutput.color);
			}
			for (var j = 0; j < this.nodes[i].outputs.length; j++) {
				if (this.nodes[i].outputs[j].links) {
					var output = this.nodes[i].outputs[j];
					var color = VAR_COLORS[output.type.name];
					for (var k = 0; k < this.nodes[i].outputs[j].links.length; k++)
						this.drawPath(draw, this.nodes[i], output, this.nodes[i].outputs[j].links[k], color);
				}
			}
		}
		this.drawer.draw(0, 0);
	},
	drawPath: function (draw, node, pin, link, color) {
		var origin = this.getOrigin();
		var startX = node.getX() + node.width + origin.x;//out circle center
		var startY = pin.center.y + origin.y;//


		draw.path(createSmoothPath(pin.center.x + origin.x, pin.center.y + origin.y, startX, startY)).stroke({color: color, width: 1});

		var control1X = pin.center.x + this.controlOffset + origin.x;
		var control1Y = pin.center.y + origin.y;


		var control2X = link.center.x - this.controlOffset + origin.x;
		var control2Y = link.center.y + origin.y;



		var endX = link.parent.getX() + origin.x;
		var endY = link.center.y + origin.y;


		var path = draw.path(createBezierPath(startX, startY, control1X, control1Y, control2X, control2Y, endX, endY));

		path.stroke({color: color, width: 1});
		path.fill({color: '#000000', opacity: 0});

		//endX+1 - for smooth drawing!!
		draw.path(createSmoothPath(endX + 1, endY, link.center.x + origin.x, link.center.y + origin.y)).stroke({color: color, width: 1});

	}
});