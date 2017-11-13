import {TEXTURES} from '../resources';

class TexturesHandler {
    constructor() {
        if (!this.instance) {
            this.bodyTexture = PIXI.Texture.fromImage(TEXTURES.RegularNodeBody);
            this.glossTexture = PIXI.Texture.fromImage(TEXTURES.RegularNodeTitleGloss);
            this.titleHighlightTexture = PIXI.Texture.fromImage(TEXTURES.RegularNodeTitleHightlight);
            this.shadowTexture = PIXI.Texture.fromImage(TEXTURES.RegularNodeShadow);
            this.shadowSelectedTexture = PIXI.Texture.fromImage(TEXTURES.RegularNodeShadowSelected);
            this.colorSpillTexture = PIXI.Texture.fromImage(TEXTURES.RegularNodeColorSpill);

            this.varNodeBodyTexture = PIXI.Texture.fromImage(TEXTURES.VarNodeBody);
            this.varNodeGlossTexture = PIXI.Texture.fromImage(TEXTURES.VarNodeGloss);
            this.varNodeShadowTexture = PIXI.Texture.fromImage(TEXTURES.VarNodeShadow);
            this.varNodeShadowSelectedTexture = PIXI.Texture.fromImage(TEXTURES.VarNodeShadowSelected);
            this.varNodeColorSpillTexture = PIXI.Texture.fromImage(TEXTURES.VarNodeColorSpill);

            this.mathNodeBodyTexture = PIXI.Texture.fromImage(TEXTURES.MathNodeBody);
            this.mathNodeShadowSelectedTexture = PIXI.Texture.fromImage(TEXTURES.MathNodeShadowSelected);

            this.commentNodeBody = PIXI.Texture.fromImage(TEXTURES.CommentNodeBackground);

            this.selector = PIXI.Texture.fromImage(TEXTURES.Selector);

            this.instance = this;
        }

        return this.instance;

    }
}

const instance = new TexturesHandler();

Object.freeze(instance);

export default instance;