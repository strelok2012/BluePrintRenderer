export default class TexturesHandler {
    constructor() {
        this.bodyTexture = PIXI.Texture.fromImage('assets/nodes/RegularNode_body.png');
        this.glossTexture = PIXI.Texture.fromImage('assets/nodes/RegularNode_title_gloss.png');
        this.titleHighlightTexture = PIXI.Texture.fromImage('assets/nodes/RegularNode_title_highlight.png');
        this.shadowTexture = PIXI.Texture.fromImage('assets/nodes/RegularNode_shadow.png');
        this.shadowSelectedTexture = PIXI.Texture.fromImage('assets/nodes/RegularNode_shadow_selected.png');
        this.colorSpillTexture = PIXI.Texture.fromImage('assets/nodes/RegularNode_color_spill.png');

        this.varNodeBodyTexture = PIXI.Texture.fromImage('assets/nodes/VarNode_body.png');
        this.varNodeGlossTexture = PIXI.Texture.fromImage('assets/nodes/VarNode_gloss.png');
        this.varNodeShadowTexture = PIXI.Texture.fromImage('assets/nodes/VarNode_shadow.png');
        this.varNodeShadowSelectedTexture = PIXI.Texture.fromImage('assets/nodes/VarNode_shadow_selected.png');
        this.varNodeColorSpillTexture = PIXI.Texture.fromImage('assets/nodes/VarNode_color_spill.png');

        this.mathNodeBodyTexture = PIXI.Texture.fromImage('assets/nodes/MathNode_body.png');
        this.mathNodeShadowSelectedTexture = PIXI.Texture.fromImage('assets/nodes/MathNode_shadow_selected.png');

        this.commentNodeBody = PIXI.Texture.fromImage('assets/nodes/Comment_Background.png');

        this.selector = PIXI.Texture.fromImage('assets/Selector.png');
    }
}