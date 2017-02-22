var MacroNode = Class(AbstractNode, {
    constructor: function (funcObj, x, y, drawer) {
        MacroNode.$super.call(this, x, y, drawer);
        this.function = funcObj;
        this.inputs = funcObj.inputs;
        this.outputs = funcObj.outputs;

        this.minCellWidth = 10.5;
        this.minCellHeight = 2;

        this.angleRadius = 10;
        this.headerCellHeight = 1.5;
        this.cellOffset = 0.5;
        this.showHeader = true;
        this.showPinText = true;
        //console.log("MACRO",funcObj);


        if (this.function.name === "Branch") {
            this.icon = ICONS["branch"];
        } else if (this.function.name.indexOf("For Each") !== -1) {
            this.icon = ICONS["for_each"];
        } else if (this.function.name.indexOf("Flip") !== -1) {
            this.icon = ICONS["flip_flop"];
        } else if (this.function.name.indexOf("Valid") !== -1) {
            this.icon = ICONS["valid"];
        } else if (this.function.name.indexOf("Sequence") !== -1) {
            this.icon = ICONS["sequence"];
        } else if (this.function.name.indexOf("For Loop") !== -1) {
            this.icon = ICONS["for_loop"];
        } else {
            this.icon = ICONS["macro"];
        }

        this.width = this.cellSize * this.minCellWidth;
        this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
    },
    setSVG: function (drawer) {
        var headerColor = VAR_COLORS["macro"];

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

        header.clipWith(rect);
        var headerText = draw.text(this.function.name);

        headerText.font({
            family: 'Roboto, sans-serif'
            , size: this.fontSize
            , anchor: 'start'
            , color: "#ffffff"
        });
        headerText.style('font-weight', 'bold');
        headerText.translate(this.cellSize * 2, 0);
        headerText.fill({color: "#fff"});
        //console.log('macro');
        this.drawPins(draw);

        if (this.icon) {
            var icon = draw.image(getIcon(this.icon), 16, 16);
            icon.center(this.cellSize, this.headerCellHeight * this.cellSize / 2);
            /*icon.filter(function (add) {
             add.colorMatrix('matrix', [1.0, 0, 0, 0, 0
             , 0, 0.2, 0, 0, 0
             , 0, 0, 0.2, 0, 0
             , 0, 0, 0, 1.0, 0])
             })*/
        }

        return draw;

    }
});