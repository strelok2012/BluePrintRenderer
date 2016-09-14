var ArrayFunctionNode = Class(AbstractNode, {
    constructor: function (funcObj, x, y, drawer) {
        this.minCellWidth = 8.5
        this.minCellHeight = 2;
        ArrayFunctionNode.$super.call(this, x, y, drawer);
        this.function = funcObj;

        this.inputs = funcObj.inputs;
        this.outputs = funcObj.outputs;



        this.angleRadius = 12;
        this.showHeader = true;
        this.showPinText = true;
        this.headerCellHeight = 1.5;
        this.cellOffset = 0.5;

        if (this.function.isPure || ARRAY_FUNCTION_NAMES_MAPPING[this.function.name]) {
            this.headerCellHeight = 0;
            this.minCellWidth = 5;
            this.minCellHeight = 4;
            if (ARRAY_FUNCTION_NAMES_MAPPING[this.function.name] && !ARRAY_FUNCTION_NAMES_MAPPING[this.function.name].showHeader)
                this.showHeader = false;
            this.showPinText = false;
        }

        //console.log(this.function.name, this.showHeader);

        if (this.function.name.indexOf("Make") !== -1) {
            this.icon = ICONS["make_struct"];
        } else if (this.function.name.indexOf("Break") !== -1) {
            this.icon = ICONS["break_struct"];
        } else {

        }

        if (ARRAY_FUNCTION_NAMES_MAPPING[this.function.name]) {
            this.function.name = ARRAY_FUNCTION_NAMES_MAPPING[this.function.name].text;
        }


        this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
    },
    calculateWidth: function () {
        ArrayFunctionNode.$superp.calculateWidth.call(this);
        if (this.showHeader) {
            return
        }
        var tmpDraw = SVG('tmpSvgContainer').size(0, 0);

        var text = this.function.name;
        var multiline = false;
        if (text.split(" ").length > 1)
            multiline = true;

        var textSize = 30;
        var nodeText;
        if (!multiline) {
            nodeText = tmpDraw.text(text.toUpperCase());
        } else {
            nodeText = tmpDraw.text(function (add) {
                var tmpArr = text.split(" ");
                for (var z = 0; z < tmpArr.length; z++) {
                    add.tspan(tmpArr[z].toUpperCase()).newLine();
                }
            });

        }

        nodeText.style('font-weight', 'bold');
        nodeText.font({
            family: 'Roboto'
            , size: textSize
            , anchor: 'middle'
            , color: "#ffffff"
        });

        var textWidth = this.getTextElementWidth(nodeText);
        var textHeight = this.getTextElementHeight(nodeText);
        this.width += textWidth + 2 * this.cellSize;
        this.width = this.nearestCellWidth(this.width) * this.cellSize;
        this.height = this.nearestCellWidth(this.height) * this.cellSize;

        if (textHeight > this.height) {
            this.height = this.nearestCellWidth(textHeight) * this.cellSize;
        }

        if ((this.inputs.length === 1) && (this.outputs.length === 1)) {
            this.height += this.cellSize;
        }

    },
    setSVG: function (drawer) {
        var headerColor = null;
        if (!this.function.isPure) {
            headerColor = VAR_COLORS["execFunction"];
        } else {
            headerColor = VAR_COLORS["pureFunction"];
        }

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

        if (this.showHeader) {
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
            if (!this.icon) {
                var path = draw.use(this.nodesDrawer.fLetter);
                path.translate(this.cellSize, 1.1 * this.cellSize);
                if (!this.function.isPure) {
                    path.fill({color: VAR_COLORS.execFunctionF});
                } else {
                    path.fill({color: VAR_COLORS.pureFunctionF});
                }

                path.scale(1.65, 1.65);
            } else {
                var icon = draw.image('/icons/{0}'.format(this.icon), 16, 16).fill({color: "#fff"});
                icon.center(this.cellSize, this.headerCellHeight * this.cellSize / 2);
            }
            this.drawPins(draw);

        } else {
            var text = this.function.name;
            var multiline = false;
            if (text.split(" ").length > 1)
                multiline = true;

            var arrayInput = null;
            this.inputs.forEach(function (item) {
                if (item.isArray)
                    arrayInput = item;
            });

            this.arrayRect = draw.rect(this.height - this.cellSize, this.height - this.cellSize).center(this.width / 2, this.height / 2);
            var side = (this.height - this.cellSize);
            var arrayPattern = draw.pattern(side, side, function (add) {
                add.rect(side, side).fill({color: VAR_COLORS[arrayInput.type.name], opacity: 0.35});
            });

            this.arrayRect.fill(arrayPattern);

            var textSize = 30;
            var nodeText;
            if (!multiline) {
                nodeText = draw.text(text.toUpperCase());
                nodeText.translate(this.width / 2, this.height / 2 - textSize);
                nodeText.font({
                    family: 'Roboto'
                    , size: textSize
                    , anchor: 'middle'
                    , color: "#ffffff"
                });
            } else {
                nodeText = draw.text(function (add) {
                    var tmpArr = text.split(" ");
                    for (var z = 0; z < tmpArr.length; z++) {
                        add.tspan(tmpArr[z].toUpperCase()).newLine();
                    }
                });
                var textHeight = this.getTextElementHeight(nodeText);
                //var textWidth = this.getTextElementWidth(nodeText);
                nodeText.translate(this.width/2, this.height / 2 - textSize - textHeight / 2);
                nodeText.font({
                    family: 'Roboto'
                    , size: textSize
                    , anchor: 'middle'
                    , color: "#ffffff"
                });

            }


            nodeText.fill({color: "#fff", opacity: 0.3});
            nodeText.style('font-weight', 'bold');



            if ((this.inputs.length === 1) && (this.outputs.length === 1)) {
                this.drawPins(draw, 1.5, false);
            } else {
                this.drawPins(draw, 1, false);
            }






        }

        return draw;

    }
});