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


        if (!this.config) {
            this.config = {
                body: true,
                gloss: true,
                shadow: true,
                titleHighlight: true,
                colorSpill: true
            }
        }


        if (node.inputs) {
            this.inputs = node.inputs;
        }
        if (node.outputs) {
            this.outputs = node.outputs;
        }


        this.innerRowOffsetCells = 1.5;

        this.pinRows = [];

        this.colorTint = VAR_COLORS.bool;

        this.titleHeight = CONFIG.CELL_SIZE * 1.5;

        this.node = node;

        this.container = new PIXI.Container();
        this.container.interactive = true;
        this.container.buttonMode = true;

        this.container.x = this.x;
        this.container.y = this.y;


        var self = this;
        this.container.on('click', function (e) {
            self.onNodeClick(e);
        });

        this.container.on('mousedown', function (e) {
            self.onDragStart(e);
        });

        this.container.on('mouseup', function (e) {
            self.onDragEnd(e);
        });
        this.container.on('mouseupoutside', function (e) {
            self.onDragEnd(e);
        })
        this.container.on('mousemove', function (e) {
            self.onDragMove(e);
        });


        this.lastPinY = 0;
    }
    onDragStart(e) {
        this.dragging = true;
        this.eventData = e.data;
        this.oldPosition = this.container.position;
    }
    onDragMove(e) {
        if (this.dragging) {
            var pos = e.data.getLocalPosition(this.nodesContainer);
            this.container.x = this.nearestCellWidth(pos.x) * CONFIG.CELL_SIZE;
            this.container.y = this.nearestCellWidth(pos.y) * CONFIG.CELL_SIZE;

            this.x = this.container.x;
            this.y = this.container.y;

            for (var i = 0; i < this.pinRows.length; i++) {
                if (this.pinRows[i].output && this.pinRows[i].output.lines) {
                    for (var j = 0; j < this.pinRows[i].output.lines.length; j++) {
                        this.pinRows[i].output.lines[j].redraw();
                    }
                }
                if (this.pinRows[i].input && this.pinRows[i].input.backward && this.pinRows[i].input.backward.lines) {
                    for (var j = 0; j < this.pinRows[i].input.backward.lines.length; j++) {
                        console.log("Backward redraw");
                        this.pinRows[i].input.backward.lines[j].redraw();
                    }
                }
            }
        }
    }
    init() {
        this.preparePinRows();
        this.initBody();
        this.initShadow();
        this.initGloss();
        this.initTitleHighlight();
        this.initColorSpill();
    }
    initBody() {
        if (this.config.body) {
            if (!this.body) {
                this.body = new PIXI.mesh.NineSlicePlane(texturesHandler.bodyTexture, 14, 14, 14, 14);
            }
            this.body.width = this.width;
            this.body.height = this.height;
            this.body.x = -this.body.width / 2;
            this.body.y = -this.body.height / 2;
        }
    }
    initShadow() {
        if (this.config.shadow) {
            if (!this.shadow) {
                this.shadow = new PIXI.mesh.NineSlicePlane(texturesHandler.shadowTexture, 21, 21, 21, 21);
            }

            if (!this.shadowSelected) {
                this.shadowSelected = new PIXI.mesh.NineSlicePlane(texturesHandler.shadowSelectedTexture, 21, 21, 21, 21);
            }

            var coeffX = this.width / (this.width - 19);
            var coeffY = this.height / (this.height - 19);

            this.shadow.width = this.width * coeffX;
            this.shadow.height = this.height * coeffY;

            this.shadowSelected.width = this.width * coeffX;
            this.shadowSelected.height = this.height * coeffY;

            this.shadow.x = -this.shadow.width / 2;
            this.shadow.y = -this.shadow.height / 2;

            this.shadowSelected.x = -this.shadowSelected.width / 2;
            this.shadowSelected.y = -this.shadowSelected.height / 2;

            this.shadowSelected.visible = false;
        }
    }
    initGloss() {
        if (this.config.gloss) {
            if (!this.gloss) {
                this.gloss = new PIXI.mesh.NineSlicePlane(texturesHandler.glossTexture, 7, 7, 7, 7);
            }
            this.gloss.width = this.width;
            this.gloss.height = this.titleHeight;
            this.gloss.x = -this.gloss.width / 2;
            this.gloss.y = -this.body.height / 2;
        }

    }
    initTitleHighlight() {
        if (this.config.titleHighlight) {
            if (!this.titleHighlight) {
                this.titleHighlight = new PIXI.mesh.NineSlicePlane(texturesHandler.titleHighlightTexture, 7, 7, 7, 7);
            }
            this.titleHighlight.width = this.width;
            this.titleHighlight.height = this.titleHeight;

            this.titleHighlight.x = -this.titleHighlight.width / 2;
            this.titleHighlight.y = -this.body.height / 2;
        }
    }
    initColorSpill() {
        if (this.config.colorSpill) {
            if (!this.colorSpill) {
                this.colorSpill = new PIXI.mesh.NineSlicePlane(texturesHandler.colorSpillTexture, 6, 6, 1, 1);
            }
            this.colorSpill.tint = this.colorTint;
            this.colorSpill.width = this.width;
            this.colorSpill.height = this.titleHeight;
            this.colorSpill.x = -this.colorSpill.width / 2;
            this.colorSpill.y = -this.body.height / 2;
        }
    }
    onDragEnd(e) {
        this.dragging = false;
        this.eventData = null;
        this.oldPosition = null;
    }
    onNodeClick(e) {
        this.shadow.visible = false;
        this.shadowSelected.visible = true;
    }
    draw(nodesContainer) {
        this.nodesContainer = nodesContainer;

        if (this.config.shadow) {
            this.container.addChild(this.shadow);
            this.container.addChild(this.shadowSelected);
        }

        if (this.config.body) {
            this.container.addChild(this.body);
        }

        if (this.config.gloss) {
            this.container.addChild(this.gloss);
        }

        if (this.config.colorSpill) {
            this.container.addChild(this.colorSpill);
        }

        if (this.config.titleHighlight) {
            this.container.addChild(this.titleHighlight);
        }


        if (this.config.titleHighlight) {
            this.pinStartY = this.titleHighlight.y + this.titleHighlight.height + CONFIG.CELL_SIZE;
            this.drawPinRows();
        }




        nodesContainer.addChild(this.container);

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
        var pinStartY = this.pinStartY;

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
        var pinStartY = this.pinStartY;

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
        var l = Math.max(this.inputs.length, this.outputs.length);

        var maxRowWidth = 0;
        for (var i = 0; i < l; i++) {
            var rowWidth = 0;
            if ((this.inputs[i] && this.inputs.name !== "Output Delegate") || (this.outputs[i] && this.outputs[i].name !== "Output Delegate")) {
                var newRow = {};
                if (this.inputs[i]) {
                    var pin = this.preparePin(this.inputs[i]);
                    newRow.input = pin.pin;
                    rowWidth += pin.width;
                }
                rowWidth += this.innerRowOffsetCells * CONFIG.CELL_SIZE;
                if (this.outputs[i]) {
                    var pin = this.preparePin(this.outputs[i], true);
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
            pin: {
                links: []
            },
            width: 0
        };

        //console.log(pin);
        var pinSprite = PIXI.Sprite.fromImage(this.getPinSprite(pin));
        if (pin.type.name !== "exec") {
            pinSprite.tint = VAR_COLORS[pin.type.name];
        }

        if (pin.links) {
            ret.pin.links = pin.links;
        }

        ret.pin.type = pin.type;
        ret.pin.id = pin.id;




        pinSprite.anchor.set(0.5, 0.5);
        //pinSprite.displayGroup = this.pinsLayer;
        ret.pin.sprite = pinSprite;

        ret.width = pinSprite.width + CONFIG.CELL_SIZE;


        if (pin.name && pin.name !== "execute" && pin.name !== "then" && pin.name !== "Output_Get") {
            var pinText = new PIXI.Text(pin.name, defaultTextStyle);
            pinText.anchor.set(0, 0.5);
            if (isOutput) {
                pinText.anchor.set(1, 0.5);
            }
            //pinText.displayGroup = this.pinsLayer;
            ret.pin.text = pinText;

            ret.width += pinText.width + CONFIG.CELL_SIZE * (3 / 4)
        }


        if (pin.value) {
            var valueText = new PIXI.Text(pin.value, defaultTextStyle);
            valueText.anchor.set(0, 0.5);
            //valueText.displayGroup = this.pinsLayer;

            var valueBorder = new PIXI.Graphics();
            //valueBorder.displayGroup = this.pinsLayer;
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
    setOutputLink(from, to) {
        if (from && to) {
            from.linked = true;
            if (!from.links)
                from.links = [];
            from.links.push(to);
            to.backward = from;
            to.linked = true;
        }
    }
}

