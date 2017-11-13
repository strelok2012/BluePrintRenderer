import RegularNode from './RegularNode.js';
import {CONFIG} from '../config.js';
import TexturesHandler from '../Textures/Textures.js'

export default class VarNode extends RegularNode {
    constructor(node, x, y) {
        super(node, x, y);
        this.showPinText = true;
        this.inputOffset = this.cellSize * 0.2;

        this.pinRows = [];


        this.titleHeight = 0;

        this.node = node;

        this.body = new PIXI.mesh.NineSlicePlane(TexturesHandler.varNodeBodyTexture, 11, 11, 11, 11);
        this.gloss = new PIXI.mesh.NineSlicePlane(TexturesHandler.varNodeGlossTexture, 11, 11, 11, 11);
        this.shadow = new PIXI.mesh.NineSlicePlane(TexturesHandler.varNodeShadowTexture, 25, 25, 25, 25);
        this.shadowSelected = new PIXI.mesh.NineSlicePlane(TexturesHandler.varNodeShadowSelectedTexture, 21, 21, 21, 21);
        this.colorSpill = new PIXI.Sprite.from(TexturesHandler.varNodeColorSpillTexture);
        this.config = {
            body: true,
            gloss: true,
            shadow: true,
            titleHighlight: false,
            colorSpill: true
        };
    }
    draw(nodesContainer) {
        super.draw(nodesContainer);
        this.gloss.height = this.height;
    }
    initColorSpill() {
        super.initColorSpill();
        this.colorSpill.height = CONFIG.CELL_SIZE*1.75;
    }
}

