var HoverCanvas = Class(AbstractCanvas, {
	constructor: function (id, nodes, width, height) {
		this.nodes = nodes;
		HoverCanvas.$super.call(this, id, width, height);
	},
	resize: function () {
		HoverCanvas.$superp.resize.call(this);
		this.drawHover();
	},
	redraw: function () {

	},
	draw: function () {

		this.getContext().clearRect(0, 0, this.width, this.height);
		var promises = [];
		for (var i = 0; i < this.nodes.length; i++) {
			var node = this.nodes[i];
			if (node.isSelected) {
				promises.push(node.drawHover());
			}

		}
		var self = this;

		Promise.all(promises).then(function () {
			self.drawElements();
		});

	}
});