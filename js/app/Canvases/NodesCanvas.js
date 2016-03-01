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
	draw: function () {
		for (var i = 0; i < this.nodes.length; i++) {
			nodes[i].isDrawed = false;
		}
		this.renderShadows();
		var nodeRender = this.renderNodes();
		var self = this;
		nodeRender.then(function () {
			self.drawElements();
		});
	},
	drawElements: function () {
		console.log(this.elements.length);
		for (var i = 0; i < this.elements.length; i++) {
			var el = this.elements[i];
			this.getContext().drawImage(el.img, el.x, el.y);
		}
	},
	renderNodes: function () {
		var promises = [];
		var self = this;
		this.elements = [];
		console.log('start render with scale', this.scale);
		var renderPromise = new Promise(function (resolve, reject) {
			console.log('render promise', this.nodes.length);
			for (var i = 0; i < this.nodes.length; i++) {
				var node = this.nodes[i];
				/*	if (node.isDrawed) {
				 console.log('is drawed');
				 continue;
				 }*/
				promises.push(node.draw(self.getContext()));
			}
			Promise.all(promises).then(
					function (values) {
						console.log('all rendered', self.elements.length);
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