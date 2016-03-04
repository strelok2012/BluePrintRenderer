var EventCanvas = Class(AbstractCanvas, {
	constructor: function (id, nodes, HoverCanvas, NodesCanvas, LinksCanvas, GridCanvas, width, height) {
		EventCanvas.$super.call(this, id, width, height);

		this.nodes = nodes;
		this.hoverCanvas = HoverCanvas;
		this.nodesCanvas = NodesCanvas;
		this.linksCanvas = LinksCanvas;
		this.gridCanvas = GridCanvas;

		this.buttonDown = false;
		this.buttonDownPoint = null;
		this.buttonUpPoint = null;
		this.previousOrigin = this.origin;

		this.animTime = 1;
		this.animInnerTime = 0;
		this.animPartTime = 0;
		this.isScaleAnimating = false;

		this.canvasObject.addEventListener('dblclick', this, false);
		this.canvasObject.addEventListener('click', this, false);
		this.canvasObject.addEventListener('mousedown', this, false);
		this.canvasObject.addEventListener('mouseup', this, false);
		this.canvasObject.addEventListener('mousemove', this, false);
		this.canvasObject.addEventListener('wheel', this, false);
	},
	handleEvent: function (event) {
		switch (event.type) {
			case 'click':
				this.click(event);
				break;
			case 'dblclick':
				this.dblclick(event);
				break;
			case 'mousedown':
				this.mousedown(event);
				break;
			case 'mouseup':
				this.mouseup(event);
				break;
			case 'mousemove':
				this.mousemove(event);
				break;
			case 'wheel':
				this.mousewheel(event);
				break;
		}
	},
	click: function (e) {
		this.checkClicked(e);
	},
	mousewheel: function (e) {
		var sign = e.deltaY > 0 && -1 || 1;
		this.scaleTo(Math.round((this.scale + sign * 0.4) * 100) / 100, this.getCoords(e));
	},
	scaleTo: function (scale, coords) {
		this.endScale = scale;

		var horizontalPart = coords.x / this.canvasObject.width;
		var verticalPart = coords.y / this.canvasObject.height;

		var max = this.nodesCanvas.getMax();
		this.deltaScale = this.scale - scale;
		var isDownscaling = this.deltaScale > 0;
		this.animInnerTime = 0;
		this.stepSum = 0;
		this.isScaleAnimating = true;
		globalStack.setScale(scale);


		var newViewPort = {position: null, width: 0, height: 0};

		this.oldOrigin = this.getOrigin();



		if (isDownscaling) {
			newViewPort.width = this.nodesCanvas.canvasObject.width * this.nodesCanvas.scale;
			newViewPort.height = this.nodesCanvas.canvasObject.height * this.nodesCanvas.scale;

			newViewPort.position = coords.subtract(new Vector(horizontalPart * newViewPort.width, verticalPart * newViewPort.height));
			console.log(coords, newViewPort.position);
			newViewPort.position = newViewPort.position.add(this.oldOrigin);
		}
		else {

			newViewPort.width = this.nodesCanvas.canvasObject.width / this.nodesCanvas.scale;
			newViewPort.height = this.nodesCanvas.canvasObject.height / this.nodesCanvas.scale;

			newViewPort.position = coords.subtract(new Vector(horizontalPart * newViewPort.width, verticalPart * newViewPort.height));
			newViewPort.position = newViewPort.position.add(this.oldOrigin.negative());
		}

		this.newViewPort = newViewPort;
		console.log(newViewPort);

		/*var ctx = this.getContext();
		 ctx.beginPath();
		 ctx.moveTo(coords.x, coords.y);
		 ctx.lineTo(newViewPort.position.x, coords.y);
		 ctx.stroke();
		 
		 var ctx = this.getContext();
		 ctx.rect(newViewPort.position.x, newViewPort.position.y, newViewPort.width, newViewPort.height);
		 ctx.stroke();*/




		this.deltaMove = newViewPort.position.add(this.oldOrigin);

		this.stepSum = new Vector(0, 0);
		var self = this;

		var promises = [this.nodesCanvas.render(), this.linksCanvas.render()];
		Promise.all(promises).then(
				function () {
					self.scale = self.endScale;
					if (isDownscaling) {
						self.moveCanvasesTo(newViewPort.position);
					}
					else {
						self.moveCanvasesTo(newViewPort.position.negative());
					}
					self.isScaleAnimating = false;

				});


	},
	scaleAnim: function () {

		this.animRequest = requestAnimationFrame(this.scaleAnim.bind(this));

		var now = new Date().getTime(),
				dt = now - (this.animInnerTime || now);

		this.animInnerTime = now;

		var self = this;
		var step = (this.deltaScale * (dt / 1000)) / this.animTime;
		var stepMove = new Vector((this.deltaMove.x * (dt / 1000)) / this.animTime, (this.deltaMove.y * (dt / 1000)) / this.animTime);

		this.stepSum = this.stepSum.subtract(stepMove);
		//this.stepSum = new Vector(0, 0);
		if (step < 0) {
			if (this.scale - step < this.endScale) {
				this.scale -= step;
				this.nodesCanvas.canvasObject.style.transform = 'matrix({0},0,0,{0},{1},{2})'.format(this.scale, this.stepSum.x, this.stepSum.y);
				//console.log(this.stepSum);
				this.linksCanvas.canvasObject.style.transform = 'scale(' + this.scale + ')';
			}
			else {
				this.scale = this.endScale;
				this.nodesCanvas.renderNodes().then(function () {
					self.nodesCanvas.canvasObject.style.transform = 'scale(1)';
					self.moveCanvases(self.newViewPort.position.negative());
				});

				this.isScaleAnimating = false;
				cancelAnimationFrame(this.animRequest);
			}
		}
		else if (step > 0) {
			if (this.scale - step > this.endScale) {
				this.scale -= step;
				this.nodesCanvas.canvasObject.style.transform = 'matrix({0},0,0,{0},{1},{2})'.format(this.scale, 0, 0);
				this.linksCanvas.canvasObject.style.transform = 'scale(' + this.scale + ')';
			}
			else {
				this.scale = this.endScale;
				this.nodesCanvas.renderNodes().then(function () {
					self.nodesCanvas.canvasObject.style.transform = 'scale(1)';
					self.moveCanvases(self.newViewPort.position);
				});
				this.isScaleAnimating = false;
				cancelAnimationFrame(this.animRequest);
			}

		}
	},
	mousedown: function (e) {
		this.buttonDown = true;
		this.buttonDownPoint = this.getCoords(e);
		this.oldOrigin = this.getOrigin();
		//console.log('mouse down');
	},
	mouseup: function (e) {
		this.buttonDown = false;
		this.oldOrigin = this.getCoords(e);
		//console.log('mouse up');
	},
	mousemove: function (e) {
		if (this.buttonDown) {
			if (this.buttonDownPoint) {
				//console.log('mousemove');
				var currentCoords = this.getCoords(e);
				var delta = currentCoords.subtract(this.buttonDownPoint);
				this.moveCanvases(delta);
			}
		}
	},
	moveCanvases: function (delta) {
		var newOrigin = this.oldOrigin.add(delta);
		globalStack.setOrigin(newOrigin);
		globalStack.clear();
		globalStack.draw();
		globalStack.setOrigin(new Vector(0, 0));

		this.setOrigin(newOrigin);

		/*var ctx = this.getContext();
		 ctx.beginPath();
		 ctx.arc(newOrigin.x, newOrigin.y, 20, 0, 2 * Math.PI, false);
		 ctx.fillStyle = 'green';
		 ctx.fill();
		 ctx.lineWidth = 5;
		 ctx.strokeStyle = '#003300';
		 ctx.stroke();*/

		this.gridCanvas.setOrigin(newOrigin);
		this.gridCanvas.clear();
		this.gridCanvas.redraw();


		//this.setOrigin(newOrigin);
		//	this.linksCanvas.redraw();
	},
	moveCanvasesTo: function (pointTo) {
		var newOrigin = pointTo;
		globalStack.setOrigin(newOrigin);
		globalStack.clear();
		globalStack.draw();
		globalStack.setOrigin(new Vector(0, 0));

		this.setOrigin(newOrigin);

		/*var ctx = this.getContext();
		 ctx.beginPath();
		 ctx.arc(newOrigin.x, newOrigin.y, 20, 0, 2 * Math.PI, false);
		 ctx.fillStyle = 'green';
		 ctx.fill();
		 ctx.lineWidth = 5;
		 ctx.strokeStyle = '#003300';
		 ctx.stroke();*/

		this.gridCanvas.setOrigin(newOrigin);
		this.gridCanvas.clear();
		this.gridCanvas.redraw();


		//this.setOrigin(newOrigin);
		//	this.linksCanvas.redraw();
	},
	getCoords: function (e) {
		var can = this.canvasObject;
		var x, y;
		if (e.pageX || e.pageY) {
			x = e.pageX;
			y = e.pageY;
		}
		else {
			x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}

		x -= can.offsetLeft;
		y -= can.offsetTop;

		return new Vector(x, y);
	},
	checkClicked: function (e) {
		console.log('click');
		var x;
		var y;
		var can = this.canvasObject;
		if (e.pageX || e.pageY) {
			x = e.pageX;
			y = e.pageY;
		}
		else {
			x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
			y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
		}

		x -= can.offsetLeft;
		y -= can.offsetTop;

		var origin = this.getOrigin();


		var hoverDrawed = false;
		for (var i = 0; i < this.nodes.length; i++) {
			var n = this.nodes[i];
			var nodeX = n.getX();
			var nodeY = n.getY();
			if (x > nodeX + origin.x && x < (nodeX + n.width) + origin.x) {
				if (y > nodeY + origin.y && y < (nodeY + n.height) + origin.y) {
					//here will be code for shift selecting
					n.isSelected = !n.isSelected;
					this.moveCanvasesTo(origin);

				}
			}
		}

		/*if (!hoverDrawed) {
			for (var i = 0; i < this.nodes.length; i++) {
				this.nodes[i].isSelected = false;
			}
		}*/

	},
	resize: function () {
		EventCanvas.$superp.resize.call(this);
	}
});