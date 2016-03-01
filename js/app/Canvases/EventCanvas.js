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


		this.animTime = 0.5;
		this.animInnerTime = 0;
		this.animPartTime = 0;
		this.isScaleAnimating = false;

		this.canvasObject.addEventListener('dblclick', this, false);
		this.canvasObject.addEventListener('click', this, false);
		this.canvasObject.addEventListener('mousedown', this, false);
		this.canvasObject.addEventListener('mouseup', this, false);
		this.canvasObject.addEventListener('mousemove', this, false);
		this.canvasObject.addEventListener('mousewheel', this, false);
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
			case 'mousewheel':
				this.mousewheel(event);
				break;
		}
	},
	click: function (e) {
		this.checkClicked(e);
	},
	mousewheel: function (e) {
		console.log('wheel', this.getCoords(e), e.deltaY);
		console.log(this.nodesCanvas.canvasObject);
		var sign = e.deltaY > 0 && -1 || 1;
		if (!this.isScaleAnimating)
			this.scaleTo(Math.round((this.scale + sign * 0.5) * 100) / 100);
	},
	scaleTo: function (scale) {
		this.endScale = scale;
		console.log('END SCALE', scale);
		this.deltaScale = this.scale - scale;
		this.animInnerTime = 0;
		this.stepSum = 0;
		this.isScaleAnimating = true;
		this.nodesCanvas.scale = scale;
		this.scaleAnim();
		this.nodesCanvas.renderNodes();
	
	},
	scaleAnim: function () {
		this.animRequest = requestAnimationFrame(this.scaleAnim.bind(this));

		var now = new Date().getTime(),
				dt = now - (this.animInnerTime || now);
		this.animInnerTime = now;

		var step = (this.deltaScale * (dt / 1000)) / this.animTime;
		if (step < 0) {
			if (this.scale - step < this.endScale) {
				this.scale -= step;
				this.nodesCanvas.canvasObject.style.transform = 'scale(' + this.scale + ')';
				this.linksCanvas.canvasObject.style.transform = 'scale(' + this.scale + ')';
			}
			else {
				this.scale = this.endScale;
				this.nodesCanvas.clear();
				this.nodesCanvas.drawElements();
				this.nodesCanvas.canvasObject.style.transform = 'scale(1)';
				//this.linksCanvas.canvasObject.style.transform = 'scale(' + this.scale + ')';
				this.isScaleAnimating = false;
				cancelAnimationFrame(this.animRequest);
			}
		}
		else if (step > 0) {
			if (this.scale - step > this.endScale) {
				this.scale -= step;
				this.nodesCanvas.canvasObject.style.transform = 'scale(' + this.scale + ')';
				this.linksCanvas.canvasObject.style.transform = 'scale(' + this.scale + ')';
			}
			else {
				this.scale = this.endScale;
				this.nodesCanvas.clear();
				this.nodesCanvas.drawElements();
				this.nodesCanvas.canvasObject.style.transform = 'scale(1)';
				//this.linksCanvas.canvasObject.style.transform = 'scale(' + this.scale + ')';
				this.isScaleAnimating = false;
				cancelAnimationFrame(this.animRequest);
			}

		}
	},
	mousedown: function (e) {
		this.buttonDown = true;
		this.buttonDownPoint = this.getCoords(e);
		this.oldOrigin = this.nodesCanvas.getOrigin();
		console.log('mouse down');
	},
	mouseup: function (e) {
		this.buttonDown = false;
		this.buttonUpPoint = this.getCoords(e);
		console.log(this.buttonDownPoint, this.buttonUpPoint);
		console.log('mouse up');
	},
	mousemove: function (e) {
		if (this.buttonDown) {
			if (this.buttonDownPoint) {
				console.log('mousemove');
				var currentCoords = this.getCoords(e);
				var delta = {x: currentCoords.x - this.buttonDownPoint.x, y: currentCoords.y - this.buttonDownPoint.y};
				this.moveCanvases(delta);
			}
		}
	},
	moveCanvases: function (delta) {

		var newOrigin = {x: this.oldOrigin.x - delta.x, y: this.oldOrigin.y - delta.y};

		this.nodesCanvas.setOrigin(newOrigin);
		this.nodesCanvas.clear();

		for (var i = 0; i < this.nodesCanvas.elements.length; i++) {
			var el = this.nodesCanvas.elements[i];
			this.nodesCanvas.drawer.drawImage(el.img, el.x - newOrigin.x, el.y - newOrigin.y);
		}

		this.linksCanvas.setOrigin(newOrigin);
		this.linksCanvas.clear();

		for (var i = 0; i < this.linksCanvas.elements.length; i++) {
			var el = this.linksCanvas.elements[i];
			this.linksCanvas.drawer.drawImage(el.img, el.x - newOrigin.x, el.y - newOrigin.y);
		}


		this.hoverCanvas.setOrigin(newOrigin);
		this.hoverCanvas.clear();

		for (var i = 0; i < this.hoverCanvas.elements.length; i++) {
			var el = this.hoverCanvas.elements[i];
			this.hoverCanvas.drawer.drawImage(el.img, el.x - newOrigin.x, el.y - newOrigin.y);
		}

		this.gridCanvas.setOrigin({x: -newOrigin.x, y: -newOrigin.y});
		this.gridCanvas.clear();
		this.gridCanvas.redraw();
		//	this.linksCanvas.redraw();
	},
	getCoords: function (e) {
		var retObj = {x: 0, y: 0};
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
		retObj.x = x;
		retObj.y = y;
		return retObj;
	},
	checkClicked: function (e) {
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

		var origin = this.nodesCanvas.getOrigin();
		console.log(origin);


		var hoverDrawed = false;
		for (var i = 0; i < this.nodes.length; i++) {
			var n = this.nodes[i];
			if (x > n.x - origin.x && x < (n.x + n.width) - origin.x) {
				if (y > n.y - origin.y && y < (n.y + n.height) - origin.y) {
					if (this.nodes[i].isSelected) {
						this.nodes[i].isSelected = false;
					}
					else
					{
						for (var j = 0; j < this.nodes.length; j++) {
							this.nodes[j].isSelected = false;
						}
						this.nodes[i].isSelected = true;
						hoverDrawed = true;
					}
				}
			}
		}

		if (!hoverDrawed) {
			for (var i = 0; i < this.nodes.length; i++) {
				this.nodes[i].isSelected = false;
			}
		}

		this.hoverCanvas.drawHover();

	},
	resize: function () {
		EventCanvas.$superp.resize.call(this);
	}
});