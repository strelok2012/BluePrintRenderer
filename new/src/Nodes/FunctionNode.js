import RegularNode from './RegularNode.js';
import {CONFIG, VAR_COLORS, defaultTextStyle} from '../config.js';
import {ICONS} from '../resources.js';

export default class FunctionNode extends RegularNode {
    constructor(node, x, y, texturesHanlder) {
        super(node, x, y, texturesHanlder);
        if (!node.isPure) {
            this.colorTint = VAR_COLORS["execFunction"];
        } else {
            this.colorTint = VAR_COLORS["pureFunction"];
        }

        if (node.isParent) {
            this.colorTint = VAR_COLORS["parent"];
        }

        if (node.color) {
            this.colorTint = this.function.color;
        }


        this.isPure = node.isPure;
        this.functionName = node.name;

        if (!this.isPure) {
            this.iconTint = VAR_COLORS["execFunction"];
        } else {
            this.iconTint = VAR_COLORS["pureFunction"];
        }

        this.icon = ICONS.FunctionIcon;

        if (this.functionName.indexOf("Make") !== -1 && this.functionName.indexOf("Array") === -1) {
            this.icon = ICONS.MakeStructIcon;
            this.iconTint = null;
        } else if (this.functionName.indexOf("Break") !== -1) {
            this.icon = ICONS.BreakStructIcon;
            this.iconTint = null;
        } else if (this.functionName.indexOf("Make Array") !== -1) {
            this.icon = ICONS.MakeArrayIcon;
            this.iconTint = null;
        }



        this.headerTextOffset = CONFIG.CELL_SIZE * 2;
    }
    draw(app) {
        super.draw(app);



        this.headerText.x = -this.body.width / 2;
        this.headerText.y = -this.body.height / 2;

        this.headerText.y += this.gloss.height / 2;
        this.headerText.x += this.headerTextOffset;

        this.headerText.anchor.set(0, 0.5);


        this.fIcon.anchor.set(0.5, 0.5);
        this.fIcon.x = -this.body.width / 2;
        this.fIcon.y = -this.body.height / 2;

        this.fIcon.y += this.gloss.height / 2;
        this.fIcon.x += CONFIG.CELL_SIZE;

        if (this.iconTint) {
            this.fIcon.tint = this.iconTint;
        }

        this.container.addChild(this.headerText);
        this.container.addChild(this.fIcon);


    }
    init() {
        this.headerText = new PIXI.Text(this.functionName/* + "(" + this.x + "," + this.y + ")"*/, defaultTextStyle);
        this.fIcon = PIXI.Sprite.fromImage(this.icon);
        this.calculateWidth();
        super.init();
    }
    calculateWidth() {
        var headerFullWidth = this.headerText.width + 2 * this.headerTextOffset;
        if (headerFullWidth > this.width) {
            this.width = super.nearestCellWidth(headerFullWidth) * CONFIG.CELL_SIZE;
        }
    }
}

