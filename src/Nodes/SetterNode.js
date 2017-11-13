import VarNode from './VarNode.js';
import {CONFIG, VAR_COLORS, defaultTextStyle} from '../config.js';

export default class SetterNode extends VarNode {
    constructor(node, x, y, texturesHanlder) {
        super(node, x, y, texturesHanlder);
        var setterType = node.inputs[1].type.name;
        this.colorTint = VAR_COLORS[setterType];
    }
    draw(nodesContainer) {
        super.draw(nodesContainer);
        this.pinStartY = -this.body.height / 2 + CONFIG.CELL_SIZE;
        super.drawPinRows();
        this.setText = new PIXI.Text("SET", defaultTextStyle);
        this.setText.anchor.set(0.5);
        this.setText.y = -this.body.height / 2 + CONFIG.CELL_SIZE;
        this.container.addChild(this.setText);
    }
}