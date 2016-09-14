var EventNode = Class(AbstractNode, {
    constructor: function (funcObj, x, y, drawer) {
        EventNode.$super.call(this, x, y, drawer);
        this.function = funcObj;
        this.outputs = funcObj.outputs;
        this.delegateOutput = {};

        //console.log("EVENT", funcObj);

        this.minCellWidth = 8;
        this.minCellHeight = 4;

        this.showHeader = true;

        this.angleRadius = 10;
        this.icon = ICONS["event"];
        this.headerCellHeight = 1.5;
        if (this.function.isCustom === true) {
            this.headerCellHeight = 2.5;
            this.customText = "Custom Event";
            this.icon = ICONS["event_custom"];
        }
        this.cellOffset = 0.5;
        this.width = this.cellSize * this.minCellWidth;
        this.hasDelegateOut = false;

        for (var i = 0; i < this.outputs.length; i++) {
            if (this.outputs[i].name.indexOf("Output Delegate") !== -1) {
                this.hasDelegateOut = true;
                break;
            }
        }
        
        if(this.function.inputKey){
            this.icon = ICONS["keyboard"];
            this.function.name = this.function.inputKey;
        }

        if (this.hasDelegateOut)
            this.cellHeight = this.headerCellHeight + this.cellOffset + (funcObj.outputs.length - 1) + (funcObj.outputs.length - 1) * this.cellOffset + this.cellOffset;
        else
            this.cellHeight = this.headerCellHeight + this.cellOffset + (funcObj.outputs.length) + (funcObj.outputs.length) * this.cellOffset + this.cellOffset;
    },
    setSVG: function (drawer) {
        var headerColor = VAR_COLORS["event"];
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
        var headerText = draw.text(this.function.name);

        headerText.font({
            family: 'Roboto'
            , size: this.fontSize
            , anchor: 'start'
            , color: "#ffffff"
        });
        headerText.style('font-weight', 'bold');
        headerText.translate(this.cellSize * 2, 0);
        headerText.fill({color: "#fff"});

        if (this.function.isCustom) {
            var nodeText = draw.text(this.customText);
            nodeText.translate(this.cellSize * 2, this.fontSize);
            nodeText.fill({color: "#a1825d"});
            nodeText.style('font-style', 'italic');
            nodeText.font({
                family: 'Roboto'
                , size: this.fontSize
                , anchor: 'start'
                , color: "#a1825d"
            });
        }



        var icon = draw.image('/icons/{0}'.format(this.icon), 16, 16).fill({color: "#fff"});
        icon.center(this.cellSize, this.headerCellHeight * this.cellSize / 2);

        if (this.hasDelegateOut) {
            var dOut = draw.rect(this.circleRadius, this.circleRadius).radius(1).stroke({color: VAR_COLORS.delegate, width: 2});
            dOut.translate(this.width - this.cellSize, this.headerCellHeight * this.cellSize / 2 - this.circleRadius / 2);
            if (this.delegateOutput.linked)
                dOut.fill({color: VAR_COLORS.delegateOut});

            this.delegateOutput.color = VAR_COLORS.delegateOut;
            for (var i = 0; i < this.outputs.length; i++) {
                if (this.outputs[i].name.indexOf("Output Delegate") !== -1) {
                    this.outputs[i].center = {x: this.x + this.width - this.cellSize + this.cellSize / 4, y: this.y + this.cellSize / 2 + this.cellSize / 4};
                    break;
                }
            }
            this.delegateOutput.center = {x: this.x + this.width - this.cellSize + this.cellSize / 4, y: this.y + this.cellSize / 2 + this.cellSize / 4};
        }
        if (!this.function.isCustom)
            this.drawPins(draw);
        else
            this.drawPins(draw, 3.5);

        return draw;
    }
});