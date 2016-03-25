var NodesDrawer = Class({
	constructor: function (drawer) {
		this.drawer = drawer;

		this.circleRadius = 8.5;

		this.fLetter = this.drawer.defs().path(fSymbol);

		this.eventArrow = this.drawer.defs().path(eventArrow);

		this.pinCircle = this.drawer.defs().circle(this.circleRadius);

		this.pinArrow = this.drawer.defs().polygon([
			[this.circleRadius * 1.5, this.circleRadius / 2],
			[this.circleRadius * 1.2, this.circleRadius / 2 - this.circleRadius / 4],
			[this.circleRadius * 1.2, this.circleRadius / 2 + this.circleRadius / 4],
			[this.circleRadius * 1.5, this.circleRadius / 2]
		]);

		this.opacityLinearGradient = this.drawer.gradient('linear', function (stop) {
			stop.at({offset: 0, color: '#a0a0a0', opacity: 1});
			stop.at({offset: 0.03, color: '#5f5f5f', opacity: 0.3});
			stop.at({offset: 0.8, color: '#636363', opacity: 0.3});
			stop.at({offset: 1, color: '#ffffff', opacity: 1});
		});
		this.opacityLinearGradient.from(0, 1).to(0, 0);


	},
	renderNodes: function (nodes) {
		var draw = this.drawer.group();
		for (var i = 0; i < nodes.length; i++) {
			var currentNode = nodes[i];
			currentNode.calculateWidth();
			currentNode.draw(this);


			var node = currentNode.allNode;

			node.translate(currentNode.x, currentNode.y);

			draw.add(node);
		}

		return draw;
	}
});