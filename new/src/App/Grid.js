class Grid {
    constructor(drawer, drawerWidth, drawerHeight) {
        var gridStep = CONFIG["GRID_STEP"];
        var gridPattern = null;
        var grid = drawer.group();
        this.gridPattern = null;

        gridPattern = drawer.pattern(gridStep * 8, gridStep * 8, function (add) {
            add.rect(136, 136).fill('#262626');
            for (var i = 1; i < 8; i++) {
                add.line(i * gridStep, 0, i * gridStep, gridStep * 8).stroke({width: 1, color: '#343434'});
                add.line(0, i * gridStep, gridStep * 8, i * gridStep).stroke({width: 1, color: '#343434'});
            }

            add.line(0, 0, 0, gridStep * 8).stroke({width: 1, color: '#161616'});
            add.line(0, 0, gridStep * 8, 0).stroke({width: 1, color: '#161616'});
        });
        grid.rect(drawerWidth, drawerHeight).fill(gridPattern);
        grid.back();
        grid.style('pointer-events', 'none');

        this.gridPattern = gridPattern;
    }
    updatePattern(x, y, scale) {
        this.gridPattern.x(x / scale);
        this.gridPattern.y(y / scale);
    }
    updatePatternScale(newScale) {
        this.gridPattern.scale(newScale);
    }
}