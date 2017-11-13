import {CONFIG} from '../config.js';

export default class Grid {
    constructor(app, x, y) {
        this.gridThickness = 1;
        var tmpContainer = new PIXI.Container;
        var background = new PIXI.Graphics();
        background.beginFill(0x2a2a2a);
        var fullCellSize = 8 * CONFIG.CELL_SIZE;
        background.drawRect(0, 0, fullCellSize, fullCellSize);
        tmpContainer.addChild(background);

        this.app = app;

        var grid = new PIXI.Graphics();

        tmpContainer.addChild(grid);
        this.drawQuad(grid);

        let renderTexture = PIXI.RenderTexture.create(fullCellSize + 1, fullCellSize + 1);
        app.renderer.render(tmpContainer, renderTexture, false);

        this.gridSprite = new PIXI.extras.TilingSprite(renderTexture, app.renderer.width, app.renderer.height);
        app.stage.addChild(this.gridSprite);
    }
    drawQuad(grid) {
        var gridThickness = this.gridThickness;
        var fullCellSize = 8 * CONFIG.CELL_SIZE;
        for (var i = 0; i < fullCellSize; i += CONFIG.CELL_SIZE) {
            grid.lineStyle(gridThickness, 0x353535)
                    .moveTo(i, 0)
                    .lineTo(i, fullCellSize);
        }

        for (var i = 0; i < fullCellSize; i += CONFIG.CELL_SIZE) {
            grid.lineStyle(gridThickness, 0x353535)
                    .moveTo(0, i)
                    .lineTo(fullCellSize, i);
        }

        grid.lineStyle(gridThickness, 0x1c1c1c)
                .moveTo(0, 0)
                .lineTo(0, fullCellSize + 1);

        grid.lineStyle(gridThickness, 0x1c1c1c)
                .moveTo(fullCellSize + 1, 0)
                .lineTo(fullCellSize + 1, fullCellSize + 1);


        grid.lineStyle(gridThickness, 0x1c1c1c)
                .moveTo(0, 0)
                .lineTo(fullCellSize + 1, 0);

        grid.lineStyle(gridThickness, 0x1c1c1c)
                .moveTo(0, fullCellSize + 1)
                .lineTo(fullCellSize + 1, fullCellSize + 1);
    }
    redraw(x, y) {
        this.gridSprite.tilePosition.x += x;
        this.gridSprite.tilePosition.y += y;
    }
}