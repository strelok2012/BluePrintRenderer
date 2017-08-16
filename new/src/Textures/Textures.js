class TexturesHandler {
    constructor() {
        this.bodyTexture = PIXI.Texture.fromImage('assets/nodes/RegularNode_body.png');
        this.glossTexture = PIXI.Texture.fromImage('assets/nodes/RegularNode_title_gloss.png');
        this.titleHighlightTexture = PIXI.Texture.fromImage('assets/nodes/RegularNode_title_highlight.png');
        this.shadowTexture = PIXI.Texture.fromImage('assets/nodes/RegularNode_shadow.png');
        this.colorSpillTexture = PIXI.Texture.fromImage('assets/nodes/RegularNode_color_spill.png');
    }
}