var CommentNode = Class(AbstractNode, {
	constructor: function (funcObj, x, y, drawer) {
		CommentNode.$super.call(this, x, y, drawer);
		this.funcObj = funcObj;
		this.header = funcObj.name;
		this.angleRadius = 0;
		this.headerCellHeight = 2.5;
		this.selectable = null;
	},
	calculateWidth: function () {
		this.width = parseInt(this.funcObj.width);
		this.height = parseInt(this.funcObj.height);
	},
	setSVG: function (drawer) {
		var draw = drawer.group();
                draw.style('mix-blend-mode','exclusion')
		var headerColor = null;
		var opacity = 1;
		if (this.funcObj.commentColor) {
			var cColor = this.funcObj.commentColor;
			headerColor = rgbToHex(parseFloat(cColor.R) * 255, parseFloat(cColor.G)*255, parseFloat(cColor.B)*255);
			opacity = parseFloat(cColor.A);
		}
		else {
			headerColor = '#acacac';
			opacity = 1;
		}

		var header = draw.rect(this.width-this.cellSize/2, this.height-this.cellSize/2).radius(this.angleRadius).fill({color: headerColor, opacity: opacity});
                header.translate(this.cellSize/4,this.cellSize/4)
		var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.cellSize);

		header.clipWith(rect);



		var headerText = draw.text(this.header);

		headerText.font({
			family: 'Roboto'
			, size: 1.3 * this.cellSize
			, anchor: 'start'
			, color: "#ffffff"
		});
		headerText.style('font-weight', 'bold');
		headerText.style('pointer-events', 'none');
		headerText.style('text-shadow', '2px 2px 0px rgba(0, 0, 0, 1)');
		headerText.translate(this.cellSize, this.cellSize/4);
		headerText.fill({color: "#fff"});





		var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		mainRect.fill({color: headerColor, opacity: 0.2});
		mainRect.stroke({color: '#000000', opacity: 1, width: 1});


		var selectableRect = draw.rect(this.width, this.headerCellHeight * this.cellSize).fill({color: "#fff", opacity: 0});
		;
		this.selectable = selectableRect;
		this.selectableHeight = this.headerCellHeight * this.cellSize;


		return draw;

	}
});