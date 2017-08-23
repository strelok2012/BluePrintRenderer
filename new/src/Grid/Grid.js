class Grid {
    constructor(app, x, y) {
        var tmpContainer = new PIXI.Container;
        var background = new PIXI.Graphics();
        background.beginFill(0x2a2a2a);
        var fullCellSize = 8 * CONFIG.CELL_SIZE;
        background.drawRect(0, 0, fullCellSize, fullCellSize);
        tmpContainer.addChild(background);

        this.grid = new PIXI.Graphics();
        this.gridThickness = 1;
        tmpContainer.addChild(this.grid);
        this.drawQuad();

        let renderTexture = PIXI.RenderTexture.create(fullCellSize + 1, fullCellSize + 1);
        app.renderer.render(tmpContainer, renderTexture, false);


        let newSprite = new PIXI.extras.TilingSprite(renderTexture,7552, 4272);
        app.stage.addChild(newSprite);
    }
    drawQuad() {
        var gridThickness = this.gridThickness;
        var fullCellSize = 8 * CONFIG.CELL_SIZE;
        for (var i = 0; i < fullCellSize; i += CONFIG.CELL_SIZE) {
            this.grid.lineStyle(gridThickness, 0x353535)
                    .moveTo(i, 0)
                    .lineTo(i, fullCellSize);
        }

        for (var i = 0; i < fullCellSize; i += CONFIG.CELL_SIZE) {
            this.grid.lineStyle(gridThickness, 0x353535)
                    .moveTo(0, i)
                    .lineTo(fullCellSize, i);
        }

        this.grid.lineStyle(gridThickness, 0x1c1c1c)
                .moveTo(0, 0)
                .lineTo(0, fullCellSize+1);

        this.grid.lineStyle(gridThickness, 0x1c1c1c)
                .moveTo(fullCellSize + 1, 0)
                .lineTo(fullCellSize + 1, fullCellSize+1);


        this.grid.lineStyle(gridThickness, 0x1c1c1c)
                .moveTo(0, 0)
                .lineTo(fullCellSize+1, 0);

        this.grid.lineStyle(gridThickness, 0x1c1c1c)
                .moveTo(0, fullCellSize + 1)
                .lineTo(fullCellSize+1, fullCellSize + 1);
    }
    draw() {
        var gridThickness = this.gridThickness;
        this.grid.clear();

        var fullCellSize = fullCellSize;

        for (var i = -fullCellSize; i < window.innerWidth + fullCellSize; i += CONFIG.CELL_SIZE) {
            this.grid.lineStyle(gridThickness, 0x353535)
                    .moveTo(i - this.origin.x, 0)
                    .lineTo(i - this.origin.x, window.innerHeight);
        }

        for (var i = -fullCellSize; i < window.innerHeight + fullCellSize; i += CONFIG.CELL_SIZE) {
            this.grid.lineStyle(gridThickness, 0x353535)
                    .moveTo(0, i - this.origin.y)
                    .lineTo(window.innerWidth, i - this.origin.y);
        }

        for (var i = -fullCellSize; i < window.innerWidth + fullCellSize; i += fullCellSize) {
            this.grid.lineStyle(gridThickness, 0x1c1c1c)
                    .moveTo(i - this.origin.x, 0)
                    .lineTo(i - this.origin.x, window.innerHeight);
        }


        for (var i = -fullCellSize; i < window.innerHeight + fullCellSize; i += fullCellSize) {
            this.grid.lineStyle(gridThickness, 0x1c1c1c)
                    .moveTo(0, i - this.origin.y)
                    .lineTo(window.innerWidth, i - this.origin.y);
        }
    }

    redraw(x, y) {
        this.origin.x -= x;
        this.origin.y -= y;

        if (this.origin.x > fullCellSize) {
            this.origin.x = this.origin.x - fullCellSize;
        } else if (this.origin.x < -fullCellSize) {
            this.origin.x = this.origin.x + fullCellSize;
        }

        if (this.origin.y > fullCellSize) {
            this.origin.y = this.origin.y - fullCellSize;
        } else if (this.origin.y < -fullCellSize) {
            this.origin.y = this.origin.y + fullCellSize;
        }
        this.draw();
    }
}