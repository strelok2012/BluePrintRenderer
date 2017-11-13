import RegularNode from './RegularNode.js';
import {CONFIG, VAR_COLORS, defaultTextStyle} from '../config.js';
import {ICONS} from '../resources.js';

export default class MacroNode extends RegularNode {
    constructor(node, x, y, texturesHanlder) {
        super(node, x, y, texturesHanlder);
        this.colorTint = VAR_COLORS["macro"];

        this.functionName = node.name;

        this.headerTextOffset = CONFIG.CELL_SIZE * 2;

        if (this.functionName === "Branch") {
            this.icon = ICONS.BranchIcon;
        } else if (this.functionName.indexOf("For Each") !== -1) {
            this.icon = ICONS.ForEachIcon;
        } else if (this.functionName.indexOf("Flip") !== -1) {
            this.icon = ICONS.FlipFlopIcon;
        } else if (this.functionName.indexOf("Valid") !== -1) {
            this.icon = ICONS.ValidIcon;
        } else if (this.functionName.indexOf("Sequence") !== -1) {
            this.icon = ICONS.SequenceIcon;
        } else if (this.functionName.indexOf("For Loop") !== -1) {
            this.icon = ICONS.ForLoopIcon;
        } else {
            this.icon = ICONS.MacroIcon;
        }
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


        this.container.addChild(this.headerText);
        this.container.addChild(this.fIcon);


    }
    init() {
        this.headerText = new PIXI.Text(this.functionName, defaultTextStyle);
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

