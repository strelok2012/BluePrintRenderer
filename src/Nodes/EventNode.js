import RegularNode from './RegularNode.js';
import {CONFIG, VAR_COLORS, defaultTextStyle, customEventTextStyle} from '../config.js';
import {ICONS, TEXTURES} from '../resources.js';

export default class EventNode extends RegularNode {
    constructor(node, x, y, texturesHanlder) {
        super(node, x, y, texturesHanlder);

        this.colorTint = VAR_COLORS["event"];
        this.functionName = node.name;

        this.icon = ICONS.EventNodeIcon;

        if (this.node.isCustom === true) {
            this.custom = true;
            this.icon = ICONS.EventNodeIconCustom;
            this.titleHeight = CONFIG.CELL_SIZE * 2.5;
            this.height += CONFIG.CELL_SIZE;
        }

        if (this.node.inputKey) {
            if (this.node.inputKey.indexOf("Mouse") !== -1)
                this.icon = ICONS.MouseEventIcon;
            else
                this.icon = ICONS.KeyboardEventIcon;
            this.functionName = this.node.inputKey;
        }

        this.headerTextOffset = CONFIG.CELL_SIZE * 2;
    }
    init() {
        this.headerText = new PIXI.Text(this.functionName, defaultTextStyle);
        this.fIcon = PIXI.Sprite.fromImage(this.icon);
        this.calculateWidth();
        super.init();
    }
    draw(app) {

        super.draw(app);



        this.headerText.x = -this.body.width / 2;
        this.headerText.y = -this.body.height / 2;

        this.headerText.y += this.gloss.height / 2;
        this.headerText.x += this.headerTextOffset;
        this.headerText.anchor.set(0, 0.5);
        if (this.custom) {
            this.headerText.anchor.set(0, 1);
        }

        this.container.addChild(this.headerText);

        if (this.custom) {
            this.customText = new PIXI.Text("Custom Event", customEventTextStyle);
            this.customText.x = -this.body.width / 2;
            this.customText.y = -this.body.height / 2;

            this.customText.y = this.headerText.y + this.headerText.height;
            this.customText.x += this.headerTextOffset;

            this.customText.anchor.set(0, 1);
            this.container.addChild(this.customText);

        }


        this.fIcon.anchor.set(0.5, 0.5);
        this.fIcon.x = -this.body.width / 2;
        this.fIcon.y = -this.body.height / 2;

        this.fIcon.y += this.gloss.height / 2;
        this.fIcon.x += CONFIG.CELL_SIZE;


        this.container.addChild(this.fIcon);

        if (this.node.outputs && this.node.outputs[0].name === "Output Delegate") {
            var delegateIcon = this.node.outputs[0].linked ? TEXTURES.DelegatePinConnected : TEXTURES.DelegatePinDisconnected;
            var delegate = PIXI.Sprite.fromImage(delegateIcon);
            delegate.tint = VAR_COLORS["delegate"];
            delegate.x = this.body.width / 2 - CONFIG.CELL_SIZE * (5 / 8);
            delegate.y = -this.body.height / 2 + CONFIG.CELL_SIZE * (5 / 8);
            delegate.anchor.set(0.5, 0.5);


            this.container.addChild(delegate);
        }
    }
    calculateWidth() {
        var headerFullWidth = this.headerText.width + 2 * this.headerTextOffset;
        if (this.node.outputs && this.node.outputs[0].name === "Output Delegate") {
            headerFullWidth += CONFIG.CELL_SIZE;
        }
        if (headerFullWidth > this.width) {
            this.width = super.nearestCellWidth(headerFullWidth) * CONFIG.CELL_SIZE;
        }


    }
}

