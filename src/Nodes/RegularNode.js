import {CONFIG, VAR_COLORS, defaultTextStyle} from '../config.js';
import {TEXTURES} from '../resources.js';
import {app} from '../main.js';
import TexturesHandler from '../Textures/Textures.js';

export default class RegularNode {
    constructor(node, x, y) {
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
        this.inputOffset = this.cellSize * 0.2;
        this.pointOnNode = null;


        if (!this.config) {
            this.config = {
                body: true,
                gloss: true,
                shadow: true,
                titleHighlight: true,
                colorSpill: true
            }
        }

        this.width = CONFIG.CELL_SIZE * this.minCellWidth;
        this.height = CONFIG.CELL_SIZE * this.minCellHeight;


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

        this.shadow.visible = false;
        this.shadowSelected.visible = true;
        this.selected = true;

        var bounds = this.container.getBounds();
        var posGlobal = e.data.global;

        var onNodeX = posGlobal.x - bounds.x;
        var onNodeY = posGlobal.y - bounds.y;

        this.pointOnNode = {
            x: onNodeX,
            y: onNodeY
        };
    }
    onDragMove(e) {
        if (this.dragging) {
            var pos = e.data.getLocalPosition(this.nodesContainer);
            app.bpConfig.draggingNode = true;

            pos.x += this.width / 2 - this.pointOnNode.x;
            pos.y += this.height / 2 - this.pointOnNode.y;

            this.container.x = this.nearestCellWidth(pos.x) * CONFIG.CELL_SIZE;
            this.container.y = this.nearestCellWidth(pos.y) * CONFIG.CELL_SIZE;

            this.x = this.container.x;
            this.y = this.container.y;

            this.redrawLinks();

        }
    }
    redrawLinks() {
        for (var i = 0; i < this.pinRows.length; i++) {
            if (this.pinRows[i].output && this.pinRows[i].output.lines) {
                for (var j = 0; j < this.pinRows[i].output.lines.length; j++) {
                    this.pinRows[i].output.lines[j].redraw();
                }
            }
            if (this.pinRows[i].input && this.pinRows[i].input.backward) {
                for (var k = 0; k < this.pinRows[i].input.backward.length; k++) {
                    for (var j = 0; j < this.pinRows[i].input.backward[k].lines.length; j++) {
                        this.pinRows[i].input.backward[k].lines[j].redraw();
                    }
                }

            }
        }
    }
    onDragEnd(e) {
        this.dragging = false;
        this.eventData = null;
        this.oldPosition = null;
        app.bpConfig.draggingNode = false;
    }
    onNodeClick(e) {
        this.shadow.visible = false;
        this.shadowSelected.visible = true;
        this.selected = true;
    }
    select(e) {
        this.shadow.visible = false;
        this.shadowSelected.visible = true;
        this.selected = true;
    }
    inNode(e) {
        var bounds = this.container.getBounds();
        if (e.x >= bounds.x && e.x <= bounds.x + bounds.width) {
            if (e.y >= bounds.y && e.y <= bounds.y + bounds.height) {
                return true;
            }
        }
        return false;
    }
    init() {
        this.preparePinRows();

        this.container.x += this.width / 2;
        this.container.y += this.height / 2;

        this.x += this.width / 2;
        this.y += this.height / 2;

        this.initBody();
        this.initShadow();
        this.initGloss();
        this.initTitleHighlight();
        this.initColorSpill();
    }
    initBody() {
        if (this.config.body) {
            if (!this.body) {
                this.body = new PIXI.mesh.NineSlicePlane(TexturesHandler.bodyTexture, 14, 14, 14, 14);
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
                this.shadow = new PIXI.mesh.NineSlicePlane(TexturesHandler.shadowTexture, 21, 21, 21, 21);
            }

            if (!this.shadowSelected) {
                this.shadowSelected = new PIXI.mesh.NineSlicePlane(TexturesHandler.shadowSelectedTexture, 21, 21, 21, 21);
            }


            this.shadow.width = this.body.width + 26;
            this.shadow.height = this.body.height + 26;

            this.shadowSelected.width = this.body.width + 26;
            this.shadowSelected.height = this.body.height + 26;

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
                this.gloss = new PIXI.mesh.NineSlicePlane(TexturesHandler.glossTexture, 7, 7, 7, 7);
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
                this.titleHighlight = new PIXI.mesh.NineSlicePlane(TexturesHandler.titleHighlightTexture, 7, 7, 7, 7);
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
                this.colorSpill = new PIXI.mesh.NineSlicePlane(TexturesHandler.colorSpillTexture, 6, 6, 1, 1);
            }
            this.colorSpill.tint = this.colorTint;
            this.colorSpill.width = this.width;
            this.colorSpill.height = this.titleHeight;
            this.colorSpill.x = -this.colorSpill.width / 2;
            this.colorSpill.y = -this.body.height / 2;
        }
    }
    dropSelection() {
        this.shadow.visible = true;
        this.shadowSelected.visible = false;
        this.selected = false;
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

        var drawText = true;

        if (pin.name && (pin.name === "execute" || pin.name === "then" || pin.name === "Output_Get")) {
            drawText = false;
        } else if (this.constructor.name === 'BinaryOperatorNode' && pin.name === "Return Value") {
            drawText = false;
        }

        if (drawText) {
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
            return pin.linked ? TEXTURES.ExecPinDisconnected : TEXTURES.ExecPinDisconnected;
        }
        return pin.linked ? TEXTURES.PinConnected : TEXTURES.PinDisconnected;
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

            if (!to.backward) {
                to.backward = [];
            }

            to.backward.push(from);
            to.linked = true;
        }
    }
}

