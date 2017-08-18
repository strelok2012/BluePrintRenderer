class AbstractNode {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.height = 0;
        this.angleRadius = 15;
        this.circleRadius = 8.5;
        this.cellSize = 16;
        this.inputs = [];
        this.outputs = [];
        this.fontSize = 14;
        this.pins = [];
        this.showPinText = true;
        this.width = this.cellSize * this.minCellWidth;
        this.inputOffset = this.cellSize * 0.2;
    }
    draw(nodesDrawer) {
        this.nodesDrawer = nodesDrawer;
        this.drawer = nodesDrawer.drawer;
        this.hover = this.drawHover(this.drawer);
        this.hover.hide();
        //this.shadow = this.drawShadow(this.drawer);

        this.nested = this.setSVG(this.drawer);
        this.allNode = this.drawer.group();
        this.allNode.add(this.hover);
        //this.allNode.add(this.shadow);
        this.allNode.add(this.nested);
        if (this instanceof CommentNode) {
            this.selectable.style('cursor', "url('cursors/cursor_grab.png'),pointer");
        } else {
            this.allNode.style('cursor', "url('cursors/cursor_grab.png'),pointer");
        }


    }
    calculateWidth() {
        var tmpDraw = SVG('tmpSvgContainer').size(0, 0);
        this.width = this.cellSize * this.minCellWidth;
        this.height = this.cellHeight * this.cellSize;
        if (this.function && this.showHeader) {
//console.log(this.function);
            var headerTextCheck = tmpDraw.text(this.function.name);
            //console.log(this.function);
            headerTextCheck.font({
                family: 'Roboto, sans-serif'
                , size: this.fontSize
                , anchor: 'start'
                , color: "#ffffff"
            });
            var headerTextWidth = this.getTextElementWidth(headerTextCheck);
            var newWidth = this.nearestCellWidth(headerTextWidth + this.cellSize * 2.5) * this.cellSize;
            if (this.delegateOutput) {
                newWidth += this.cellSize;
            }
            if (newWidth > this.width) {

                this.width = newWidth;
            }

            if (this.function.isCustom) {
                var nodeText = tmpDraw.text(this.customText);
                nodeText.style('font-style', 'italic');
                nodeText.font({
                    family: 'Roboto, sans-serif'
                    , size: this.fontSize
                    , anchor: 'start'
                    , color: "#a1825d"
                });
                headerTextWidth = this.getTextElementWidth(nodeText);
                newWidth = this.nearestCellWidth(headerTextWidth + this.cellSize * 2.5) * this.cellSize;
                if (this.delegateOutput) {
                    newWidth += this.cellSize;
                }
                if (newWidth > this.width) {
                    this.width = newWidth;
                }
            }


        }

        var maxOutSize = this.cellSize * 2.5;
        var maxInSize = 0;
        for (var i = 0; i < this.inputs.length; i++) {
            var tIn = this.inputs[i];
            if (!tIn.linked) {
                if (tIn.type === VAR_TYPES["vector"] || tIn.type === VAR_TYPES["rotator"]) {
                    var startPosX = this.cellSize * 2.5;
                    for (var z = 0; z < tIn.value.length; z++) {
                        var text = tmpDraw.text(tIn.value[z]);
                        text.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'end'
                        });
                        var textWidth = this.getTextElementWidth(text);
                        var rect = tmpDraw.rect(textWidth + this.cellSize, this.cellSize);
                        startPosX = startPosX + rect.width() + this.cellSize * 0.2;
                    }
                    maxInSize = startPosX;
                    this.height += this.cellSize;
                } else if (tIn.type === VAR_TYPES["float"] || tIn.type === VAR_TYPES["int"] || tIn.type === VAR_TYPES["byte"]) {
                    if (tIn.value) {
                        var text = tmpDraw.text(tIn.value);
                        var inputText = tmpDraw.text(tIn.name);
                        inputText.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'start'
                            , color: "#ffffff"
                        });
                        var inputTextLength = this.getTextElementWidth(inputText)
                        var startPosX = this.cellSize + this.inputOffset + inputTextLength;
                        text.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'start'
                            , color: "#fff"
                        });
                        text.fill({color: "#fff"});
                        var textWidth = this.getTextElementWidth(text);
                        var rect = tmpDraw.rect(textWidth + this.cellSize * 0.2, this.cellSize).radius(2);
                        maxInSize = startPosX + rect.width();
                    }

                } else if (tIn.type === VAR_TYPES["actor"] || tIn.type === VAR_TYPES["object"]) {
                    if (tIn.value) {
                        var text = tmpDraw.text(tIn.value);
                        var inputText = tmpDraw.text(tIn.name);
                        inputText.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'start'
                            , color: "#ffffff"
                        });
                        var inputTextLength = this.getTextElementWidth(inputText);
                        var startPosX = this.cellSize + inputTextLength + this.inputOffset;
                        text.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'start'
                            , color: "#fff"
                        });
                        text.fill({color: "#fff"});
                        var textWidth = this.getTextElementWidth(text);
                        var rect = tmpDraw.rect(textWidth + this.cellSize * 0.2, this.cellSize).radius(2);
                        maxInSize = startPosX + rect.width();
                    }
                }


            }
        }

        if (this.showPinText) {
            for (var i = 0; i < this.inputs.length; i++) {
                var tIn = this.inputs[i];
                if (HIDDEN_PIN_NAMES.indexOf(tIn.name) === -1 && tIn.type !== VAR_TYPES["exec"]) {
                    var tInputText = tmpDraw.text(tIn.name);
                    tInputText.font({
                        family: 'Roboto, sans-serif'
                        , size: this.fontSize
                        , anchor: 'start'
                        , color: "#ffffff"
                    });
                    var size = this.getTextElementWidth(tInputText);
                    if (size > maxInSize)
                        maxInSize = size;
                }
            }


            for (var i = 0; i < this.outputs.length; i++) {
                var tOut = this.outputs[i];
                if (HIDDEN_PIN_NAMES.indexOf(tOut.name) === -1 && tOut.type !== VAR_TYPES["exec"]) {
                    var tOutText = tmpDraw.text(tOut.name);
                    tOutText.font({
                        family: 'Roboto, sans-serif'
                        , size: this.fontSize
                        , anchor: 'start'
                        , color: "#ffffff"
                    });
                    var size = this.getTextElementWidth(tOutText)
                    if (size > maxOutSize)
                        maxOutSize = size;
                }
            }

            var lineWidth = this.cellSize * 1.5 + this.circleRadius * 2 + maxInSize + maxOutSize + this.circleRadius * 2;
            //console.log("Line width",lineWidth);
            newWidth = this.nearestCellWidth(lineWidth) * this.cellSize;
            if (newWidth > this.width) {
                this.width = newWidth;
            }
        } else {
            if (maxInSize > this.width) {
                this.width = maxInSize;
            }
        }
//console.log("Drawer width",this.width,this.width/this.cellSize);
        tmpDraw.remove();
    }
    nearestCellWidth(width) {
        return Math.ceil(width / this.cellSize);
    }
    setOutputLink(from, to) {
//	
        if (from && to) {
            console.log("Setting links");
            from.linked = true;
            if (!from.links)
                from.links = [];
            from.links.push(to);
            to.linked = true;
        }
    }
    setDelegateOut(dest) {
        if (this.delegateOutput) {
            this.delegateOutput.linked = true;
            this.delegateOutput.link = dest;
            dest.linked = true;
        }
    }
    getTextElementWidth(element) {
        if (element) {
            return document.getElementById(element.node.id).getBBox().width || 0;
        } else {
            return 0;
        }

    }
    getTextElementHeight(element) {
        if (element) {
            return document.getElementById(element.node.id).getBBox().height || 0;
        } else {
            return 0;
        }

    }
    drawShadow(drawer) {
        var group = drawer.group();
        var shadow = group.rect(this.width, this.height).radius(this.angleRadius);
        shadow.fill({color: '#f06', opacity: 0.0});
        shadow.stroke({color: '#000', opacity: 0.5, width: 4});
        shadow.filter(function (add) {
            add.gaussianBlur(2);
        });
        shadow.back();
        return group;
    }
    constructArray(draw, input, x, y) {
        input.parent = this;
        input.center = {x: x + this.circleRadius / 2, y: y + this.circleRadius / 2};
        var step = this.circleRadius / 3;
        var side = this.circleRadius / 4;
        var arrayPattern = draw.pattern(this.circleRadius, this.circleRadius, function (add) {
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    if (i === 1 && j === 1 && !input.linked)
                        continue
                    add.rect(side, side).fill(VAR_COLORS[input.type.name]).translate(i * step + 0.1, j * step + 0.1);
                }
            }
        });
        var aIn = draw.rect(this.circleRadius, this.circleRadius).fill(arrayPattern);
        //aIn.fill({color: "#fff"})
        //if (input.linked)
        //	aIn.fill({color: VAR_COLORS[input.type.name]});
        aIn.translate(x, y);
    }
    constructCircle(draw, input, x, y) {
        input.parent = this;
        input.center = {x: x + this.circleRadius / 2, y: y + this.circleRadius / 2};
        if (input.type !== VAR_TYPES.delegate) {
            var pinCircle = draw.use(this.nodesDrawer.pinCircle);
            var color = VAR_COLORS[input.type.name];
            pinCircle.stroke({color: color, width: 2});
            if (input.linked)
                pinCircle.fill({color: color});
            pinCircle.translate(x, y);
            draw.use(this.nodesDrawer.pinArrow).translate(x, y).fill(color).stroke({width: 1, color: color});
        } else {
            var dIn = draw.rect(this.circleRadius, this.circleRadius).radius(1).stroke({color: VAR_COLORS[input.type.name], width: 2});
            if (input.linked)
                dIn.fill({color: VAR_COLORS[input.type.name]});
            dIn.translate(x, y);
        }

    }
    constructExecNode(draw, input, x, y) {
        var execNodeRadius = 3;
        var nodeSize = 0.8 * this.cellSize;
        input.parent = this;
        input.center = {x: x + nodeSize / 2, y: y - nodeSize / 2};
        var path = "M 0,{0} C 0,{0} 0,0 {1},0".format(execNodeRadius, execNodeRadius);
        path += "H {1}".format(execNodeRadius, nodeSize / 2);
        path += "L {0},{1}".format(nodeSize, nodeSize / 2);
        path += "L {0},{1}".format(nodeSize / 2, nodeSize);
        path += "h {0}".format(execNodeRadius - nodeSize / 2);
        path += "C {0},{1} 0,{1} 0,{2}".format(execNodeRadius, nodeSize, nodeSize - execNodeRadius);
        path += "v {0}".format(-nodeSize + 2 * execNodeRadius);
        var arrow = draw.path(path);
        var arrowPos = {x: x, y: y - 0.8 * this.cellSize};
        arrow.stroke({color: "#fff", width: 2});
        arrow.fill({color: '#000000', opacity: 0.0});
        arrow.translate(arrowPos.x, arrowPos.y);
        if (input.linked) {
            arrow.fill({color: VAR_COLORS.exec, opacity: 1});
        }

    }
    drawHover(drawer) {
        var group = drawer.group();
        var hoverRect = group.rect(this.width, this.height).radius(this.angleRadius);
        hoverRect.fill({color: '#000000', opacity: 0});
        hoverRect.stroke({color: '#f1b000', opacity: 1, width: 8});
        hoverRect.translate(0, 0);
        hoverRect.back();
        return group;
    }
    drawPins(draw, newCellOffset, newDrawText) {
        var drawText = true;
        if (newDrawText === false)
            drawText = false;
        var cellOffset = newCellOffset || 2.5;
        if (newCellOffset === 0) {
            cellOffset = 0;
        }
        for (var i = 0; i < this.inputs.length; i++) {
            var tIn = this.inputs[i];
            var circleCenterX = this.cellSize;
            var circleCenterY = cellOffset * this.cellSize;
            var textCenterY = circleCenterY;
            var vectorCenterY = circleCenterY;
            var inputTextLength = 0;
            var pinObj = {};
            if (!tIn.linked) {
                if (tIn.type === VAR_TYPES["vector"] || tIn.type === VAR_TYPES["rotator"]) {
                    circleCenterY = (cellOffset + 0.5) * this.cellSize;
                    vectorCenterY = (cellOffset + 1) * this.cellSize;
                } else if (tIn.type === VAR_TYPES["float"]) {
//console.log(tIn);
                }
            }
            var pinDraw = draw.group();
            var pinFullLength = 0;
            var pinFullHeight = this.cellSize * 1.1;
            if (tIn.type === VAR_TYPES.exec) {
                this.constructExecNode(pinDraw, tIn, circleCenterX - this.circleRadius / 2, circleCenterY + 0.8 * this.cellSize / 2);
            } else {
                if (!tIn.isArray)
                    this.constructCircle(pinDraw, tIn, circleCenterX - this.circleRadius / 2, circleCenterY - this.circleRadius / 2);
                else
                    this.constructArray(pinDraw, tIn, circleCenterX - this.circleRadius / 2, circleCenterY - this.circleRadius / 2);
            }
            pinFullLength += this.circleRadius + circleCenterX;
            if (tIn.name !== "execute" && drawText) {
                var inputText = pinDraw.text(tIn.name);
                inputText.font({
                    family: 'Roboto, sans-serif'
                    , size: this.fontSize
                    , anchor: 'start'
                    , color: "#ffffff"
                });
                inputText.translate(circleCenterX + this.circleRadius * 1.5, circleCenterY - this.fontSize);
                inputText.fill({color: "#fff"});
                inputTextLength = this.getTextElementWidth(inputText);
                pinFullLength += inputTextLength;
            }


            if (!tIn.linked) {
                if (tIn.type === VAR_TYPES["vector"] || tIn.type === VAR_TYPES["rotator"]) {
                    if (inputText)
                        inputText.translate(circleCenterX + this.circleRadius * 1.5, textCenterY - this.fontSize);
                    var startPosX = circleCenterX + this.cellSize * 1.5;
                    pinFullLength += circleCenterX;
                    for (var z = 0; z < tIn.value.length; z++) {
                        var text = pinDraw.text(tIn.value[z]);
                        var labelText;
                        switch (z) {
                            case 0:
                                labelText = "X"
                                break
                            case 1:
                                labelText = "Y"
                                break
                            case 2:
                                labelText = "Z"
                                break
                        }
                        text.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'end', color: "#fff"
                        });
                        text.fill({color: "#fff"});
                        var textWidth = this.getTextElementWidth(text);
                        var rect = pinDraw.rect(textWidth + this.cellSize, this.cellSize).radius(2);
                        rect.fill({color: "#000", opacity: 0});
                        rect.stroke({color: "#fff", width: 1});
                        rect.x(startPosX);
                        rect.cy(vectorCenterY);
                        text.translate(startPosX + textWidth + this.cellSize * 0.9, vectorCenterY - this.fontSize);
                        var label = pinDraw.text(labelText);
                        label.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'start', color: "#fff"
                        });
                        label.fill({color: "#6f716f"});
                        label.translate(startPosX + this.cellSize * 0.1, vectorCenterY - this.fontSize);
                        startPosX = startPosX + rect.width() + this.cellSize * 0.2;
                        pinFullLength += rect.width() + this.cellSize * 0.2;
                    }
                    pinFullLength -= inputTextLength;
                    cellOffset += 1;
                    pinFullHeight += this.cellSize;
                } else if (tIn.type === VAR_TYPES["float"] || tIn.type === VAR_TYPES["int"] || tIn.type === VAR_TYPES["byte"]) {
                    if (tIn.value) {
                        var text = pinDraw.text(tIn.value);
                        var startPosX = circleCenterX + this.cellSize + this.inputOffset + inputTextLength;
                        text.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize, anchor: 'start'
                            , color: "#fff"
                        });
                        text.fill({color: "#fff"});
                        var textWidth = this.getTextElementWidth(text);
                        var rect = pinDraw.rect(textWidth + this.cellSize * 0.2, this.cellSize).radius(2);
                        rect.fill({color: "#000", opacity: 0});
                        rect.stroke({color: "#fff", width: 1});
                        rect.x(startPosX);
                        rect.cy(vectorCenterY);
                        text.translate(startPosX + this.cellSize * 0.1, vectorCenterY - this.fontSize);
                        pinFullLength += rect.width();
                    }
                } else if (tIn.type === VAR_TYPES["bool"]) {
                    var startPosX = circleCenterX + this.cellSize + this.inputOffset + inputTextLength;
                    var rect = pinDraw.rect(this.cellSize * 0.8, this.cellSize * 0.8).radius(3);
                    rect.fill({color: "#292b29"});
                    rect.stroke({color: "#fff", width: 2});
                    rect.x(startPosX);
                    rect.cy(vectorCenterY);
                    if (tIn.value === true) {
                        var path = pinDraw.path(checkSymbol);
                        path.center(startPosX + rect.width() / 2, vectorCenterY);
                        path.stroke({color: "#fff", width: 5});
                        path.fill({color: "#fff", opacity: 0})
                        path.scale(0.3, 0.3);
                    }
                    pinFullLength += rect.width();
                } else if (tIn.type === VAR_TYPES["actor"] || tIn.type === VAR_TYPES["object"]) {
                    if (tIn.value) {
                        var text = pinDraw.text(tIn.value);
                        var startPosX = circleCenterX + this.cellSize + this.inputOffset + inputTextLength;
                        text.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'start', color: "#fff"
                        });
                        text.fill({color: "#fff"});
                        var textWidth = this.getTextElementWidth(text);
                        var rect = pinDraw.rect(textWidth + this.cellSize * 0.2, this.cellSize).radius(2);
                        rect.fill({color: "#000", opacity: 0});
                        rect.stroke({color: "#fff", width: 1});
                        rect.x(startPosX);
                        rect.cy(vectorCenterY);
                        text.translate(startPosX + this.cellSize * 0.1, vectorCenterY - this.fontSize);
                        pinFullLength += rect.width();
                    }

                }
            }

            pinObj.draw = pinDraw;
            var hoverRect = pinDraw.rect(pinFullLength, pinFullHeight);
            var hoverGradient = draw.gradient('linear', function (stop) {
                stop.at({offset: 0, color: VAR_COLORS[tIn.type.name], opacity: 0});
                stop.at({offset: 0.1, color: VAR_COLORS[tIn.type.name], opacity: 0.8});
                stop.at({offset: 0.9, color: VAR_COLORS[tIn.type.name], opacity: 0.8});
                stop.at({offset: 1, color: VAR_COLORS[tIn.type.name], opacity: 0});
            });
            hoverRect.fill(hoverGradient)
            hoverRect.x(circleCenterX - this.circleRadius);
            hoverRect.cy(circleCenterY);
            hoverRect.back();
            if (tIn.tooltip) {
//console.log(tIn.tooltip);
                pinDraw.element('title').words(tIn.tooltip.replace("\\n\\n", "\n\n").replace("\\n", "\n"));
            }
            pinObj.hover = hoverRect;
            hoverRect.hide();
            this.pins.push(pinObj);
            cellOffset += 1.5;
        }
        cellOffset = newCellOffset || 2.5;
        for (var i = 0; i < this.outputs.length; i++) {
            var tOut = this.outputs[i];
            if (tOut.name === "Output Delegate")
                continue
            var circleCenterX = this.width - this.cellSize;
            var circleCenterY = cellOffset * this.cellSize;
            var pinDraw = draw.group();
            var pinFullHeight = this.cellSize * 1.1;
            var pinFullLength = 0;
            if (tOut.type === VAR_TYPES.exec) {
                this.constructExecNode(pinDraw, tOut, circleCenterX - this.circleRadius / 2, circleCenterY + 0.8 * this.cellSize / 2);
            } else {
                if (!tOut.isArray)
                    this.constructCircle(pinDraw, tOut, circleCenterX - this.circleRadius / 2, circleCenterY - this.circleRadius / 2);
                else
                    this.constructArray(pinDraw, tOut, circleCenterX - this.circleRadius / 2, circleCenterY - this.circleRadius / 2);
            }
            pinFullLength += this.circleRadius + this.cellSize;
            if (tOut.name !== "then" && tOut.name !== "Output_Get" && drawText) {
                var inputText = pinDraw.text(tOut.name);
                inputText.font({
                    family: 'Roboto, sans-serif'
                    , size: this.fontSize
                    , anchor: 'end'
                    , color: "#ffffff"
                });
                inputText.translate(circleCenterX - this.circleRadius, circleCenterY - this.fontSize);
                inputText.fill({color: "#fff"});
                pinFullLength += this.getTextElementWidth(inputText);
            }
            var pinObj = {};
            pinObj.draw = pinDraw;
            var hoverRect = pinDraw.rect(pinFullLength, pinFullHeight);
            var hoverGradient = draw.gradient('linear', function (stop) {
                stop.at({offset: 0, color: VAR_COLORS[tOut.type.name], opacity: 0});
                stop.at({offset: 0.1, color: VAR_COLORS[tOut.type.name], opacity: 0.8});
                stop.at({offset: 0.9, color: VAR_COLORS[tOut.type.name], opacity: 0.8});
                stop.at({offset: 1, color: VAR_COLORS[tOut.type.name], opacity: 0});
            });
            hoverRect.fill(hoverGradient)
            hoverRect.x(this.width - pinFullLength - this.circleRadius / 2);
            hoverRect.cy(circleCenterY);
            hoverRect.back();
            pinObj.hover = hoverRect;
            if (tOut.tooltip) {
                pinDraw.element('title').words(tOut.tooltip.replace("\\n\\n", "\n\n").replace("\\n", "\n"));
            }

            hoverRect.hide();
            this.pins.push(pinObj);
            cellOffset += 1.5;
        }
    }
}