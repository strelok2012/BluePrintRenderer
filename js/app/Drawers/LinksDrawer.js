var LinksDrawer = Class({
	constructor: function (drawer) {
		this.controlOffset = 85;
		this.drawer = drawer;
	},
	renderNodes: function (nodes) {
		var draw = this.drawer.group();

		for (var i = 0; i < nodes.length; i++) {
			if (nodes[i].delegateOutput && nodes[i].delegateOutput.link) {
				this.drawPath(draw, nodes[i], nodes[i].delegateOutput, nodes[i].delegateOutput.color);
			}
			for (var j = 0; j < nodes[i].outputs.length; j++) {
				if (nodes[i].outputs[j].links) {
					var output = nodes[i].outputs[j];
					var color = VAR_COLORS[output.type.name];
					for (var k = 0; k < nodes[i].outputs[j].links.length; k++)
						this.drawPath(draw, nodes[i], output, nodes[i].outputs[j].links[k], color);
				}
			}
		}

		return draw;


	},
	drawPath: function (draw, node, pin, link, color) {
		var minOffset = 16;
		var startX = node.x + node.width;
		var startY = pin.center.y + node.y;

		var endX = link.parent.x;
		;
		var endY = link.center.y + link.parent.y;

		var deltaX = Math.abs(link.center.x + link.parent.x - pin.center.x - node.x);

		var cOffset = (deltaX > this.controlOffset) && this.controlOffset || Math.max(deltaX, minOffset);



		draw.path(createSmoothPath(pin.center.x + node.x, pin.center.y + node.y, startX, startY)).stroke({color: color, width: 1}).style('pointer-events', 'none');

		var control1X = pin.center.x + cOffset + node.x;
		var control1Y = pin.center.y + node.y;


		var control2X = link.center.x - cOffset + link.parent.x;
		var control2Y = link.center.y + link.parent.y;





		var path = draw.path(createBezierPath(startX, startY, control1X, control1Y, control2X, control2Y, endX, endY));
		path.style('pointer-events', 'none');

		path.stroke({color: color, width: 1});
		path.fill({color: '#000000', opacity: 0});

		//endX+1 - for smooth drawing!!
		draw.path(createSmoothPath(endX + 1, endY, link.center.x + link.parent.x, link.center.y + link.parent.y)).stroke({color: color, width: 1}).style('pointer-events', 'none');
	}
});