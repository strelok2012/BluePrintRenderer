import RegularNode from './RegularNode.js';
import {CONFIG, VAR_COLORS, binaryOperatorTextStyle} from '../config.js';
import TexturesHandler from '../Textures/Textures.js'

export default class BinaryOperatorNode extends RegularNode {
    constructor(node, x, y) {
        super(node, x, y);
        this.minCellWidth = 4;
        this.showPinText = true;
        this.inputOffset = this.cellSize * 0.2;

        this.pinRows = [];


        this.titleHeight = 0;

        this.node = node;

        this.body = new PIXI.mesh.NineSlicePlane(TexturesHandler.mathNodeBodyTexture, 11, 11, 11, 11);
        this.shadowSelected = new PIXI.mesh.NineSlicePlane(TexturesHandler.mathNodeShadowSelectedTexture, 21, 21, 21, 21);
        this.config = {
            body: true,
            gloss: false,
            shadow: true,
            titleHighlight: false,
            colorSpill: false
        };
    }
    init() {
        this.width = this.minCellWidth * CONFIG.CELL_SIZE;

        var text = this.node.name;
        if (text.indexOf("Boolean") !== -1) {
            text = text.replace("Boolean", "").toUpperCase();
        } else if (text.indexOf("Int") !== -1 || text.indexOf("Float") !== -1 || text.indexOf("Enum") !== -1) {
            if (text.indexOf("And") !== -1) {
                text = "&";
            } else if (text.indexOf("Or") !== -1) {
                text = "|";
            } else if (text.indexOf("Multiply") !== -1) {
                text = "x";
            } else if (text.indexOf("Equality") !== -1) {
                text = "==";
            } else if (text.indexOf("Subtract") !== -1) {
                text = "-"
            } else if (text.indexOf("Add") !== -1) {
                text = "+"
            } else if (text.indexOf("Multiply") !== -1) {
                text = "x"
            } else if (text.indexOf("Percent") !== -1) {
                text = "%"
            } else if (text.indexOf("Divide") !== -1) {
                text = "/"
            } else if (text.indexOf("Dot") !== -1) {
                text = "."
            } else if (text.indexOf("Greater") !== -1) {
                if (text.indexOf("Equal") === -1)
                    text = ">"
                else
                    text = ">="
            } else if (text.indexOf("Less") !== -1) {
                if (text.indexOf("Equal") === -1)
                    text = "<"
                else
                    text = "<="
            } else if (text.indexOf("Equal") !== -1 && text.indexOf("Not") !== -1) {
                text = "!="
            } else if (text.indexOf("Equal") !== -1) {
                text = "="
            } else if (text.indexOf("Not") !== -1) {
                text = "NOT"
            }
        }

        this.operatorText = new PIXI.Text(text, binaryOperatorTextStyle);
        if (this.operatorText.width > this.width) {
            this.width = super.nearestCellWidth(this.operatorText.width) * CONFIG.CELL_SIZE + CONFIG.CELL_SIZE / 2;
        }
        ;

        super.init();
    }
    draw(nodesContainer) {
        super.draw(nodesContainer);
        this.pinStartY = -this.body.height / 2 + CONFIG.CELL_SIZE;

        this.operatorText.anchor.set(0.5, 0.5);
        this.container.addChild(this.operatorText);
        super.drawPinRows();
    }
}

