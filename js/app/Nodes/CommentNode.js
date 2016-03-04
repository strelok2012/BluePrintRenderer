var CommentNode = Class(AbstractNode, {
	constructor: function (funcObj, x, y, drawer) {
		CommentNode.$super.call(this, x, y, drawer);
		this.funcObj = funcObj;
		this.header = funcObj.name;
		this.angleRadius = 0;
		this.headerCellHeight = 2.5;
	},
	calculateWidth: function () {
		this.width = this.funcObj.width * this.getScale();
		this.height = this.funcObj.height * this.getScale();
	},
	setSVG: function (drawer) {
		var draw = drawer.group();


		var header = draw.rect(this.width, this.height).radius(this.angleRadius).fill({color: "#acacac", opacity: 1});
		var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.getCellSize());





		header.clipWith(rect);



		var headerText = draw.text(this.header);

		headerText.font({
			family: 'Roboto'
			, size: 1.3 * this.getCellSize()
			, anchor: 'start'
			, color: "#ffffff"
		});
		headerText.style('font-weight', 'bold');
		headerText.style('text-shadow', '2px 2px 0px rgba(0, 0, 0, 1)');
		headerText.translate(this.getCellSize(), 0);
		headerText.fill({color: "#fff"});



		var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		mainRect.fill({color: "#fff", opacity: 0.2});
		mainRect.stroke({color: '#000000', opacity: 1, width: 1});

		return draw;

	}
});