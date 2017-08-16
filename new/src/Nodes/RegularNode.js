class RegularNode {
    constructor(node, x, y, texturesHandler) {
        this.x = parseInt(x);
        this.y = parseInt(y);
        this.height = 0;
        this.inputs = [];
        this.outputs = [];
        this.fontSize = 14;
        this.pins = [];
        this.showPinText = true;
        this.minCellWidth = 8;
        this.minCellHeight = 4;
        this.width = CONFIG.CELL_SIZE * this.minCellWidth;
        this.height = CONFIG.CELL_SIZE * this.minCellWidth;
        this.inputOffset = this.cellSize * 0.2;

        this.innerRowOffsetCells = 1.5;

        this.pinRows = [];

        this.colorTint = VAR_COLORS.bool;

        this.node = node;

        this.body = new PIXI.mesh.NineSlicePlane(texturesHandler.bodyTexture, 14, 14, 14, 14);
        this.gloss = new PIXI.mesh.NineSlicePlane(texturesHandler.glossTexture, 7, 7, 7, 7);
        this.shadow = new PIXI.mesh.NineSlicePlane(texturesHandler.shadowTexture, 21, 21, 21, 21);
        this.titleHighlight = new PIXI.mesh.NineSlicePlane(texturesHandler.titleHighlightTexture, 7, 7, 7, 7);
        this.colorSpill = new PIXI.mesh.NineSlicePlane(texturesHandler.colorSpillTexture, 6, 6, 1, 1);

        this.container = new PIXI.Container();

        this.nodeLayer = new PIXI.DisplayGroup(0, true);
        this.pinsLayer = new PIXI.DisplayGroup(1, true);

        this.lastPinY = 0;
        
        this.preparePinRows();

    }
    draw(app) {
        this.container.x = this.x;
        this.container.y = this.y;


        this.colorSpill.tint = this.colorTint;

        var coeffX = this.width / (this.width - 20);
        var coeffY = this.height / (this.height - 20);

        this.shadow.width = this.width * coeffX;
        this.shadow.height = this.height * coeffY;

        this.body.width = this.width;
        this.body.height = this.height;



        this.gloss.width = this.width;
        this.gloss.height = 24;

        this.titleHighlight.width = this.width;
        this.titleHighlight.height = 24;

        this.colorSpill.width = this.width;
        this.colorSpill.height = 24;


        this.shadow.x = -this.shadow.width / 2;
        this.shadow.y = -this.shadow.height / 2;

        this.body.x = -this.body.width / 2;
        this.body.y = -this.body.height / 2;

        this.gloss.x = -this.gloss.width / 2;
        this.gloss.y = -this.body.height / 2;

        this.titleHighlight.x = -this.titleHighlight.width / 2;
        this.titleHighlight.y = -this.body.height / 2;

        this.colorSpill.x = -this.colorSpill.width / 2;
        this.colorSpill.y = -this.body.height / 2;

        this.container.addChild(this.shadow);
        this.container.addChild(this.body);

        this.container.addChild(this.colorSpill);
        this.container.addChild(this.gloss);
        this.container.addChild(this.titleHighlight);

        this.drawPinRows();

        app.stage.addChild(this.container);

    }
    drawPinRows() {
        for (var i = 0; i < this.pinRows.length; i++) {
            var row = this.pinRows[i];
            if (row.input) {
                this.drawInput(row.input, i);
            }
            if (row.output) {
                this.drawOutput(row.output, i);
            }
        }
    }
    drawInput(input, idx) {
        var pinSprite = input.sprite;
        var pinStartY = this.titleHighlight.y + this.titleHighlight.height + CONFIG.CELL_SIZE;

        pinSprite.x = -this.body.width / 2 + CONFIG.CELL_SIZE;
        pinSprite.y = pinStartY + idx * CONFIG.CELL_SIZE * 1.5;

        var pinText = input.text;

        pinText.x = pinSprite.x + CONFIG.CELL_SIZE * (3 / 4);
        pinText.y = pinSprite.y;

        pinText.displayGroup = this.pinsLayer;

        this.container.addChild(pinSprite);
        this.container.addChild(pinText);

        if (input.valueText) {
            var valueText = input.valueText;
            valueText.x = pinText.x + pinText.width + CONFIG.CELL_SIZE / 2;
            valueText.y = pinSprite.y;

            var valueBorder = input.valueBorder;
            valueBorder.drawRect(valueText.x - CONFIG.CELL_SIZE / 8, pinSprite.y - valueText.height / 2, valueText.width + CONFIG.CELL_SIZE / 4, valueText.height);

            this.container.addChild(valueText);
            this.container.addChild(valueBorder);
        }
    }
    drawOutput(output, idx) {
        var pinSprite = output.sprite;
        var pinStartY = this.titleHighlight.y + this.titleHighlight.height + CONFIG.CELL_SIZE;

        pinSprite.x = this.body.width / 2 - CONFIG.CELL_SIZE;
        pinSprite.y = pinStartY + idx * CONFIG.CELL_SIZE * 1.5;

        var pinText = output.text;

        pinText.x = pinSprite.x - CONFIG.CELL_SIZE * (3 / 4);
        pinText.y = pinSprite.y;

        pinText.displayGroup = this.pinsLayer;

        this.container.addChild(pinSprite);
        this.container.addChild(pinText);

        if (output.valueText) {
            var valueText = output.valueText;
            valueText.x = pinText.x + pinText.width + CONFIG.CELL_SIZE / 2;
            valueText.y = pinSprite.y;

            var valueBorder = output.valueBorder;
            valueBorder.drawRect(valueText.x - CONFIG.CELL_SIZE / 8, pinSprite.y - valueText.height / 2, valueText.width + CONFIG.CELL_SIZE / 4, valueText.height);

            this.container.addChild(valueText);
            this.container.addChild(valueBorder);
        }
    }
    preparePinRows() {
        var l = Math.max(this.node.inputs.length, this.node.outputs.length);
        var maxRowWidth = 0;
        for (var i = 0; i < l; i++) {
            var rowWidth = 0;
            if (this.node.inputs[i] || this.node.outputs[i]) {
                var newRow = {};
                if (this.node.inputs[i]) {
                    var pin = this.preparePin(this.node.inputs[i]);
                    newRow.input = pin.pin;
                    rowWidth += pin.width;
                }
                rowWidth += this.innerRowOffsetCells * CONFIG.CELL_SIZE;
                if (this.node.outputs[i]) {
                    var pin = this.preparePin(this.node.outputs[i], true);
                    newRow.output = pin.pin;
                    rowWidth += pin.width;
                }

                if (rowWidth > maxRowWidth) {
                    maxRowWidth = rowWidth;
                }

                this.pinRows.push(newRow);
            }
        }



        if (this.width < maxRowWidth) {
            this.width = this.nearestCellWidth(maxRowWidth) * CONFIG.CELL_SIZE;
            if (this.node.name === "Break Rotator") {
                console.log("WIDTH ON PREPARE", this.width, maxRowWidth);
            }
        }
    }
    preparePin(pin, isOutput) {
        var ret = {
            pin: {},
            width: 0
        };
        var pinSprite = PIXI.Sprite.fromImage(this.getPinSprite(pin));
        pinSprite.tint = VAR_COLORS[pin.type.name];
        pinSprite.anchor.set(0.5, 0.5);
        pinSprite.displayGroup = this.pinsLayer;
        ret.pin.sprite = pinSprite;

        var pinText = new PIXI.Text(pin.name, defaultTextStyle);
        pinText.anchor.set(0, 0.5);
        if (isOutput) {
            pinText.anchor.set(1, 0.5);
        }
        pinText.displayGroup = this.pinsLayer;
        ret.pin.text = pinText;

        ret.width = pinSprite.width + CONFIG.CELL_SIZE + pinText.width + CONFIG.CELL_SIZE * (3 / 4)

        if (pin.value) {
            var valueText = new PIXI.Text(pin.value, defaultTextStyle);
            valueText.anchor.set(0, 0.5);
            valueText.displayGroup = this.pinsLayer;

            var valueBorder = new PIXI.Graphics();
            valueBorder.displayGroup = this.pinsLayer;
            valueBorder.lineStyle(1, 0xFFFFFF);

            ret.pin.valueText = valueText;
            ret.pin.valueBorder = valueBorder;

            ret.width += CONFIG.CELL_SIZE / 2 + valueText.width + CONFIG.CELL_SIZE / 4;
        }

        return ret;
    }
    getPinSprite(pin) {
        return pin.linked ? 'assets/nodes/Pin_connected_VarA.png' : 'assets/nodes/Pin_disconnected_VarA.png';
    }
    nearestCellWidth(width) {
        return Math.ceil(width / CONFIG.CELL_SIZE);
    }
}

