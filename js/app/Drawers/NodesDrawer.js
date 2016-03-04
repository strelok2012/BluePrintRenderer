var NodesDrawer = Class({
	constructor: function (nodes, drawer) {
		this.nodes = nodes;
		this.drawer = drawer;
	},
	render: function () {
		var draw = this.drawer.group();

		for (var i = 0; i < this.nodes.length; i++) {
			var currentNode = this.nodes[i];
			currentNode.calculateWidth();
			currentNode.draw(this.drawer);

			var hover = currentNode.hover;
			var shadow = currentNode.shadow;
			var nested = currentNode.nested;


			var node = this.drawer.group();
			hover.hide();
			node.add(hover);

			node.add(shadow);

			node.add(nested);

			node.translate(currentNode.x, currentNode.y);

			draw.add(node);
		}

		return draw;


	}
});