var CompositeNode = Class(AbstractNode, {
    constructor: function (funcObj, x, y, drawer) {
        this.minCellWidth = 8.5
        this.minCellHeight = 4;
        CompositeNode.$super.call(this, x, y, drawer);
        this.function = funcObj;

        this.inputs = funcObj.inputs;
        this.outputs = funcObj.outputs;

        // console.log(funcObj);

        this.angleRadius = 8;
        this.showHeader = true;
        this.showPinText = true;
        this.headerCellHeight = 2;
        this.cellOffset = 0.5;

        //console.log(funcObj);

        this.cellHeight = this.headerCellHeight + this.cellOffset * 3 + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
    },
    setSVG: function (drawer) {
        var headerColor = null;





        headerColor = VAR_COLORS["pureFunction"];

        var draw = drawer.group();



        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });

        var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
        var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        mainRect.fill({color: "#000", opacity: 0.5});
        mainRect.stroke({color: '#000000', opacity: 1, width: 1});
        
        
        var opRect = draw.rect(this.width*0.8, this.height*0.8).radius(this.angleRadius);
        opRect.fill({color: "#FFF", opacity: 0.1});
        opRect.translate(this.width/2-this.width*0.4, this.height/2-this.height*0.4);



        var headerText = draw.text(this.function.name);

        headerText.font({
            family: 'Roboto, sans-serif'
            , size: this.fontSize
            , anchor: 'start'
            , color: "#ffffff"
        });
        headerText.style('font-weight', 'bold');
        headerText.translate(this.cellSize * 0.5, 0);
        headerText.fill({color: "#fff"});


        var nodeText = draw.text("Collapsed graph");
        nodeText.translate(this.cellSize * 0.5, this.cellSize);
        nodeText.fill({color: "#9b9c77"});
        nodeText.style('font-style', 'italic');
        nodeText.font({
            family: 'Roboto'
            , size: this.fontSize
            , anchor: 'start'
            , color: "#9b9c77"
        });

        this.drawPins(draw,this.headerCellHeight+this.cellOffset*2);



        return draw;

    }
});