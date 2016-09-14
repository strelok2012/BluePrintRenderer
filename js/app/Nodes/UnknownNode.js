var UnknownNode = Class(AbstractNode, {constructor: function (funcObj, x, y, drawer) {
        this.minCellWidth = 8.5
        this.minCellHeight = 2;
        UnknownNode.$super.call(this, x, y, drawer);
        this.function = funcObj;

        this.inputs = funcObj.inputs;
        this.outputs = funcObj.outputs;



        this.angleRadius = 8;
        this.showHeader = true;
        this.showPinText = true;
        this.headerCellHeight = 1.5;
        this.cellOffset = 0.5;

        this.name = "Unknown node";//funcObj.name;


        this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
    },
    setSVG: function (drawer) {
        var headerColor = null;

        headerColor = VAR_COLORS["execFunction"];


        var draw = drawer.group();



        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });

        var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
        var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        mainRect.fill({color: "#000", opacity: 0.5});
        mainRect.stroke({color: '#000000', opacity: 1, width: 1});

        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 1});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });
        headerGradient.from(0, 0).to(1, 0);
        var header = draw.rect(this.width, this.height).radius(this.angleRadius).fill(headerGradient);
        var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.cellSize)

        header.clipWith(rect)

        var headerText = draw.text(this.name);

        headerText.font({
            family: 'Roboto, sans-serif'
            , size: this.fontSize
            , anchor: 'start'
            , color: "#ffffff"
        });
        headerText.style('font-weight', 'bold');
        headerText.translate(this.cellSize * 2, 0);
        headerText.fill({color: "#fff"});

        this.drawPins(draw);

        return draw;

    }
});