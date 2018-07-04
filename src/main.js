import Grid from './Grid/Grid.js';
import TexturesHandler from './Textures/Textures.js';
import BlueprintRenderer from './App/BlueprintRenderer.js';
import BPToNodes from './Parser/BPToNodes.js';
import LinksDrawer from './Drawers/LinksDrawer.js';

import WebFont from 'webfontloader';

export var app;
export var allNodes = [];

function preparePIXI(document, file) {
    
    app = new PIXI.Application(document.body.parentNode.clientWidth, window.innerHeight, {antialias: true});
    document.body.appendChild(app.view);

    var grid = new Grid(app, 0, 0);

    var dragging = false;

    var draggingLeft = false;
    var dragLeftStartPoint = null;

    var eventData = null;


    var mainContainer = new PIXI.Container();

    allNodes = [];

    var selectedNodes = [];

    var linksDrawer;



    var nodesLayer = new PIXI.DisplayGroup(1, true);
    var linksLayer = new PIXI.DisplayGroup(0, true);

    var linksContainer = new PIXI.Container();
    app.stage.addChild(linksContainer);


    app.renderer.plugins.interaction
            .on('pointerdown', onDragStart)
            .on('pointerup', onDragEnd)
            .on('pointerupoutside', onDragEnd)
            .on('pointermove', onDragMove);

    app.stage.addChild(mainContainer);

    var selector = new PIXI.mesh.NineSlicePlane(TexturesHandler.selector, 2, 2, 2, 2);

    selector.width = 100;
    selector.height = 100;
    selector.visible = false;

    app.stage.addChild(selector);
    app.bpConfig = {draggingNode: false};

    var render = new BlueprintRenderer();
    render.renderFromFile(file, function (nodes) {
        var nodesObjects = BPToNodes(nodes);
        for (var i = 0, l = nodesObjects.length; i < l; i++) {
            nodesObjects[i].draw(mainContainer);
            allNodes.push(nodesObjects[i]);
        }
        linksDrawer = new LinksDrawer(linksContainer, allNodes);
        var canvas = document.body.querySelector("canvas");
        disableContextMenu(canvas);
    });





    function isRightClick(e) {
        return e.which === 3;
    }

    function isLeftClick(e) {
        return e.which === 1;
    }

    function disableContextMenu(canvas) {
        canvas.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }

    function dropNodesSelection(e) {
        for (var i = 0, l = allNodes.length; i < l; i++) {
            if (allNodes[i].selected) {
                if (!allNodes[i].inNode(e.data.global)) {
                    allNodes[i].dropSelection();
                }
            }
        }
    }

    function onDragStart(event) {
        if (isRightClick(event.data.originalEvent)) {
            dragging = true;
            eventData = event.data;
        } else if (isLeftClick(event.data.originalEvent)) {
            dropNodesSelection(event);
            draggingLeft = true;
            dragLeftStartPoint = {
                x: event.data.global.x,
                y: event.data.global.y
            };
        }
    }

    function onDragEnd(event) {
        if (isRightClick(event.data.originalEvent)) {
            dragging = false;
            eventData = null;
        } else if (isLeftClick(event.data.originalEvent)) {
            draggingLeft = false;
            dragLeftStartPoint = null;
            selector.visible = false;
        }

    }

    function onDragMove(event) {
        if (dragging) {
            mainContainer.x += event.data.originalEvent.movementX;
            mainContainer.y += event.data.originalEvent.movementY;

            linksDrawer.links.x += event.data.originalEvent.movementX;
            linksDrawer.links.y += event.data.originalEvent.movementY;

            grid.redraw(event.data.originalEvent.movementX, event.data.originalEvent.movementY)
        } else if (draggingLeft) {
            if (dragLeftStartPoint && !app.bpConfig.draggingNode) {
                selector.visible = true;
                selector.x = dragLeftStartPoint.x;
                selector.y = dragLeftStartPoint.y;

                selector.width = event.data.global.x - dragLeftStartPoint.x;
                selector.height = event.data.global.y - dragLeftStartPoint.y;

                var selectorBounds = selector.getBounds();

                for (var i = 0; i < allNodes.length; i++) {
                    if (!allNodes[i].constructor.name === 'CommentNode') {
                        var bounds = allNodes[i].container.getBounds();
                        if (intersectNodeSelectable(bounds, selectorBounds)) {
                            allNodes[i].select();
                        } else {
                            allNodes[i].dropSelection();
                        }
                    }

                }
            }
        }
    }

    /*setTimeout(function () {
        let renderTexture = PIXI.RenderTexture.create(7552, 4272);
        app.renderer.render(app.stage, renderTexture, false);
        //grid.show();
        var hiddenElement = document.createElement('a');
        hiddenElement.href = app.renderer.extract.base64(renderTexture);
        hiddenElement.click();
    }, 3000);*/
}


export default function prepare(document, file) {
    WebFont.load({
        google: {
            families: ['Roboto']
        },
        active: e =>{
            preparePIXI(document, file)
        }
    });
}