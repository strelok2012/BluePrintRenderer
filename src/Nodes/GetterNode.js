import VarNode from './VarNode.js';
import {CONFIG, VAR_COLORS} from '../config.js';

export default class GetterNode extends VarNode {
    constructor(node, x, y, texturesHanlder) {
        super(node, x, y, texturesHanlder);
        this.height = CONFIG.CELL_SIZE * 2;
        var getterType = node.outputs[0].type.name;
        this.colorTint = VAR_COLORS[getterType];
    }
    draw(nodesContainer) {
        super.draw(nodesContainer);
        this.pinStartY = -this.body.height / 2 + CONFIG.CELL_SIZE*1.25;
        super.drawPinRows();
    }
}