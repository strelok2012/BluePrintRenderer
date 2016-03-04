var LinksDrawer = Class({
	constructor: function (nodes, drawer) {
		this.nodes = nodes;
		this.controlOffset = 85;
		this.drawer = drawer;
	},
	render: function () {
		var draw = this.drawer.group();

		for (var i = 0; i < this.nodes.length; i++) {
			console.log(this.nodes[i]);
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

		return draw;


	},
	drawPath: function (draw, node, pin, link, color) {
		console.log(pin);
		var startX = node.getX() + node.width;
		var startY = pin.center.y;


		draw.path(createSmoothPath(pin.center.x, pin.center.y, startX, startY)).stroke({color: color, width: 1});

		var control1X = pin.center.x + this.controlOffset;
		var control1Y = pin.center.y;


		var control2X = link.center.x - this.controlOffset;
		var control2Y = link.center.y;



		var endX = link.parent.getX();
		var endY = link.center.y;


		var path = draw.path(createBezierPath(startX, startY, control1X, control1Y, control2X, control2Y, endX, endY));

		path.stroke({color: color, width: 1});
		path.fill({color: '#000000', opacity: 0});

		//endX+1 - for smooth drawing!!
		draw.path(createSmoothPath(endX + 1, endY, link.center.x, link.center.y)).stroke({color: color, width: 1});

	}
});