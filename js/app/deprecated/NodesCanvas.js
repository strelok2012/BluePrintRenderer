var NodesCanvas = Class(AbstractCanvas, {
	constructor: function (id, nodes, width, height) {
		this.nodes = nodes;
		NodesCanvas.$super.call(this, id, width, height);
	},
	resize: function () {
		NodesCanvas.$superp.resize.call(this);
		for (var i = 0; i < this.nodes.length; i++) {
			nodes[i].isDrawed = false;
		}
		this.drawNodes();
	},
	redraw: function () {
		NodesCanvas.$superp.redraw.call(this);
		for (var i = 0; i < this.nodes.length; i++) {
			nodes[i].isDrawed = false;
		}
		this.renderShadows();
		this.renderNodes();
		this.drawElements();
	},
	getMax: function () {
		var maxX = 0;
		var maxY = 0;
		for (var i = 0; i < this.nodes.length; i++) {
			var node = nodes[i];
			if (node.getX() > maxX) {
				maxX = node.getX();
			}
			if (node.getY() > maxY)
				maxY = node.getY();
		}
		return new Vector(maxX, maxY);

	},
	draw: function () {
		for (var i = 0; i < this.nodes.length; i++) {
			nodes[i].isDrawed = false;
		}
		var nodeRender = this.render();
		var self = this;
		nodeRender.then(function () {
			self.drawElements();
		});
	},
	render: function () {
		var promises = [];
		var self = this;
		this.elements = [];
		var renderPromise = new Promise(function (resolve, reject) {
			for (var i = 0; i < this.nodes.length; i++) {
				var node = this.nodes[i];
				promises.push(node.draw(self.getContext()));
			}
			Promise.all(promises).then(
					function (values) {
						resolve();
					}
			);
		});

		return renderPromise;

	},
	renderShadows: function () {
		for (var i = 0; i < this.nodes.length; i++) {
			var node = this.nodes[i];
			if (node.isShadowDrawed) {
				continue;
			}
			node.drawShadow(this.getContext());
		}
	}
});