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
        this.minCellHeight = 3;
        this.width = CONFIG.CELL_SIZE * this.minCellWidth;
        this.height = CONFIG.CELL_SIZE * this.minCellHeight;
        this.inputOffset = this.cellSize * 0.2;

        this.innerRowOffsetCells = 1.5;

        this.pinRows = [];

        this.colorTint = VAR_COLORS.bool;

        this.titleHeight = CONFIG.CELL_SIZE * 1.5;

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
        this.gloss.height = this.titleHeight;

        this.titleHighlight.width = this.width;
        this.titleHighlight.height = this.titleHeight;

        this.colorSpill.width = this.width;
        this.colorSpill.height = this.titleHeight;


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

        this.container.addChild(pinSprite);

        if (input.text) {
            var pinText = input.text;
            pinText.x = pinSprite.x + CONFIG.CELL_SIZE * (3 / 4);
            pinText.y = pinSprite.y;
            this.container.addChild(pinText);
        }





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
        this.container.addChild(pinSprite);

        if (output.text) {
            var pinText = output.text;

            pinText.x = pinSprite.x - CONFIG.CELL_SIZE * (3 / 4);
            pinText.y = pinSprite.y;

            this.container.addChild(pinText);
        }

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
            if ((this.node.inputs[i] && this.node.inputs[i].name !== "Output Delegate") || (this.node.outputs[i] && this.node.outputs[i].name !== "Output Delegate")) {
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
        }

        var height = this.titleHeight + CONFIG.CELL_SIZE + this.pinRows.length * CONFIG.CELL_SIZE * 1.5;

        if (this.height < height) {
            this.height = this.nearestCellWidth(height) * CONFIG.CELL_SIZE - CONFIG.CELL_SIZE / 2;
        }
    }
    preparePin(pin, isOutput) {
        var ret = {
            pin: {},
            width: 0
        };
        var pinSprite = PIXI.Sprite.fromImage(this.getPinSprite(pin));
        if (pin.type.name !== "exec") {
            pinSprite.tint = VAR_COLORS[pin.type.name];
        }

        pinSprite.anchor.set(0.5, 0.5);
        pinSprite.displayGroup = this.pinsLayer;
        ret.pin.sprite = pinSprite;

        ret.width = pinSprite.width + CONFIG.CELL_SIZE;


        if (pin.name && pin.name !== "execute" && pin.name !== "then") {
            var pinText = new PIXI.Text(pin.name, defaultTextStyle);
            pinText.anchor.set(0, 0.5);
            if (isOutput) {
                pinText.anchor.set(1, 0.5);
            }
            pinText.displayGroup = this.pinsLayer;
            ret.pin.text = pinText;

            ret.width += pinText.width + CONFIG.CELL_SIZE * (3 / 4)
        }


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
        if (pin.type.name === "exec") {
            return pin.linked ? 'assets/nodes/ExecPin_Connected.png' : 'assets/nodes/ExecPin_Disconnected.png';
        }
        return pin.linked ? 'assets/nodes/Pin_connected_VarA.png' : 'assets/nodes/Pin_disconnected_VarA.png';
    }
    nearestCellWidth(width) {
        return Math.ceil(width / CONFIG.CELL_SIZE);
    }
}

