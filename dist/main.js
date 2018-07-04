/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ARRAY_FUNCTION_NAMES_MAPPING = exports.FUNCTION_NAMES_MAPPING = exports.NAME_MAPPING = exports.FUNCTIONS_MAPPING = exports.VAR_TYPES = exports.HIDDEN_PIN_NAMES = exports.VAR_COLORS = exports.commentTextStyle = exports.customEventTextStyle = exports.binaryOperatorTextStyle = exports.defaultTextStyle = exports.CONFIG = undefined;
exports.isLetter = isLetter;
exports.componentToHex = componentToHex;
exports.rgbToHex = rgbToHex;
exports.intersectNodeSelectable = intersectNodeSelectable;

var _resources = __webpack_require__(1);

var CONFIG = exports.CONFIG = {
    CELL_SIZE: 16
};

var defaultTextStyle = exports.defaultTextStyle = new PIXI.TextStyle({
    fontFamily: 'Roboto',
    fontSize: 12,
    fill: ['#ffffff'] // gradient
});

var binaryOperatorTextStyle = exports.binaryOperatorTextStyle = new PIXI.TextStyle({
    fontFamily: 'Roboto',
    fontSize: 36,
    fill: ['#626262'] // gradient
});

var customEventTextStyle = exports.customEventTextStyle = new PIXI.TextStyle({
    fontFamily: 'Roboto',
    fontSize: 12,
    fontStyle: 'italic',
    fill: ['#a1825d'] // gradient
});

var commentTextStyle = exports.commentTextStyle = new PIXI.TextStyle({
    fontFamily: 'Roboto',
    fontSize: 16,
    fill: ['#eeeeee'], // gradient
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 2,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 2,
    fontWeight: 'bold'
});

var VAR_COLORS = exports.VAR_COLORS = {
    bool: 0x8c0202,
    byte: 0x026960,
    int: 0x1ed6a4,
    float: 0x97ef42,
    name: 0xc07bef,
    string: 0xef02c8,
    text: 0xd975a0,
    vector: 0xefbd22,
    rotator: 0x97a9ef,
    transform: 0xeb6b02,
    actor: 0x02a2e9,
    execFunction: 0x5b8fb1,
    execFunctionF: 0x79c9ff,
    pureFunction: 0x83b47c,
    pureFunctionF: 0xaaeea0,
    event: 0x8d1313,
    delegate: 0xff3838,
    object: 0x0481b7,
    class: 0x5501b3,
    struct: 0x024bab,
    exec: 0xffffff,
    interface: 0xc9d58f,
    macro: 0xb7b4aa,
    wildcard: 0x7f7979,
    dynamicCast: 0x258489,
    timeline: 0x9d7e24,
    parent: 0x854613,
    switch_on: 0x8f9013
};

var HIDDEN_PIN_NAMES = exports.HIDDEN_PIN_NAMES = ["Output_Get"];

var VAR_TYPES = exports.VAR_TYPES = {
    bool: { code: 0, name: "bool" },
    byte: { code: 1, name: "byte" },
    int: { code: 2, name: "int" },
    float: { code: 3, name: "float" },
    name: { code: 4, name: "name" },
    string: { code: 5, name: "string" },
    text: { code: 6, name: "text" },
    vector: { code: 7, name: "vector" },
    rotator: { code: 8, name: "rotator" },
    transform: { code: 9, name: "transform" },
    actor: { code: 10, name: "actor" },
    event: { code: 11, name: "delegateOut" },
    object: { code: 12, name: "object" },
    class: { code: 13, name: "class" },
    struct: { code: 14, name: "struct" },
    exec: { code: 15, name: "exec" },
    interface: { code: 16, name: "interface" },
    macro: { code: 17, name: "macro" },
    delegate: { code: 18, name: "delegate" },
    wildcard: { code: 19, name: "wildcard" }
};

var FUNCTIONS_MAPPING = exports.FUNCTIONS_MAPPING = {
    K2Node_CallFunction: null,
    K2Node_SpawnActorFromClass: {
        text: "Spawn Actor"
    },
    K2Node_GetInputAxisValue: null,
    K2Node_MakeArray: {
        text: "Make Array"
    },
    K2Node_CreateWidget: {
        text: "Construct"
    },
    K2Node_MakeStruct: {
        text: "Make Struct"
    },
    K2Node_BreakStruct: {
        text: "Break Struct"
    },
    K2Node_LatentOnlineCall: {
        async: true
    },
    K2Node_AsyncAction: {
        async: true
    },
    K2Node_LeaderboardQuery: {
        text: "Read Leaderboard Integer",
        async: true
    },
    K2Node_SwitchInteger: {
        text: "Switch on Int",
        icon: _resources.ICONS.SwitchOnIcon,
        morpher: function morpher(obj) {
            obj.color = VAR_COLORS["switch_on"];
            return obj;
        }
    },
    K2Node_SwitchEnum: {
        text: "Switch on Enum",
        icon: _resources.ICONS.SwitchOnIcon,
        morpher: function morpher(obj) {
            obj.color = VAR_COLORS["switch_on"];
            return obj;
        }
    },
    K2Node_SwitchString: {
        text: "Switch on String",
        icon: _resources.ICONS.SwitchOnIcon,
        morpher: function morpher(obj) {
            obj.color = VAR_COLORS["switch_on"];
            return obj;
        }
    },
    K2Node_CallParentFunction: {
        morpher: function morpher(obj) {
            obj.name = "Parent: " + obj.name;
            obj.isParent = true;
            return obj;
        }
    },
    K2Node_AddComponent: null,
    K2Node_FormatText: {
        text: "Format Text",
        icon: _resources.ICONS.NodeIcon,
        morpher: function morpher(obj) {
            obj.isPure = true;
            return obj;
        }
    },
    K2Node_GetInputVectorAxisValue: {
        icon: _resources.ICONS.KeyboardEventIcon,
        morpher: function morpher(obj, node) {
            obj.isPure = true;
            obj.name = "Get " + node.inputAxisKey;
            return obj;
        }
    },
    K2Node_GetDataTableRow: {
        text: "Get Data Table Row"
    }
};

var NAME_MAPPING = exports.NAME_MAPPING = {
    "K2_Destroy Actor": "DestroyActor",
    "VSize": "VectorLength",
    "K2_Get Component Location": "GetWorldLocation",
    "K2_Set Actor Relative Location": "SetActorRelativeLocation",
    "K2_Set Relative Location": "SetRelativeLocation",
    "K2_Set Actor Location": "SetActorLocation",
    "K2_Set Actor Relative Rotation": "SetActorRelativeRotation",
    "K2_Set Relative Rotation": "SetRelativeRotation",
    "K2_Set Actor Rotation": "SetActorRotation",
    "K2_Set Timer": "Set Timer by Function Name",
    "K2_Get Actor Location": "GetActorLocation",
    "K2_Get Actor Rotation": "GetActorRotation",
    "RLerp": "Lerp (Rotator)",
    "FTrunc": "Truncate",
    "Conv_Int To Text": "ToText(int)",
    "Conv_Float To Text": "ToText(float)",
    "Conv_Text To String": "ToString(text)"
};

var FUNCTION_NAMES_MAPPING = exports.FUNCTION_NAMES_MAPPING = {
    Array_Set: "Set Array Elem"
};

var ARRAY_FUNCTION_NAMES_MAPPING = exports.ARRAY_FUNCTION_NAMES_MAPPING = {
    Array_Add: {
        text: "Add"
    },
    "Array_Add Unique": {
        text: "AddUnique"
    },
    Array_Append: {
        text: "Append"
    },
    Array_Clear: {
        text: "Clear"
    },
    Array_Contains: {
        text: "Contains"
    },
    Array_Find: {
        text: "Find"
    },
    Array_Get: {
        text: "Get"
    },
    Array_Insert: {
        text: "Insert"
    },
    "Array_Last Index": {
        text: "Last Index"
    },
    Array_Length: {
        text: "Length"
    },
    Array_Remove: {
        text: "Remove Index"
    },
    "Array_Remove Item": {
        text: "Remove"
    },
    Array_Resize: {
        text: "Resize"
    },
    Array_Set: {
        text: "Set Array Elem",
        showHeader: true
    },
    Array_Shuffle: {
        text: "Shuffle"
    }
};

String.prototype.format = function () {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{' + i + '\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};

String.prototype.fromCamelCase = function () {
    var newString = '';
    for (var i = 0; i < this.length; i++) {
        newString += this[i];
        if (isLetter(this[i]) && this[i + 1] && isLetter(this[i + 1])) {
            if (this[i].toLowerCase() === this[i] && this[i + 1].toUpperCase() === this[i + 1]) {
                newString += " ";
            }
        }
    }
    return newString.trim();
};

function isLetter(c) {
    return c.toLowerCase() !== c.toUpperCase();
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(Math.floor(r)) + componentToHex(Math.floor(g)) + componentToHex(Math.floor(b));
}

function intersectNodeSelectable(node1, node2, scale, drawer, origin) {
    var s = scale || 1;
    if (node1.x + node1.width < node2.x * s || node2.x * s + node2.width * s < node1.x || node1.y + node1.height < node2.y * s || node2.y * s + node2.selectableHeight * s < node1.y) {
        return false;
    } else {
        return true;
    }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ICONS = exports.TEXTURES = undefined;

var _RegularNode_body = __webpack_require__(41);

var _RegularNode_body2 = _interopRequireDefault(_RegularNode_body);

var _RegularNode_title_gloss = __webpack_require__(42);

var _RegularNode_title_gloss2 = _interopRequireDefault(_RegularNode_title_gloss);

var _RegularNode_title_highlight = __webpack_require__(43);

var _RegularNode_title_highlight2 = _interopRequireDefault(_RegularNode_title_highlight);

var _RegularNode_shadow = __webpack_require__(44);

var _RegularNode_shadow2 = _interopRequireDefault(_RegularNode_shadow);

var _RegularNode_shadow_selected = __webpack_require__(45);

var _RegularNode_shadow_selected2 = _interopRequireDefault(_RegularNode_shadow_selected);

var _RegularNode_color_spill = __webpack_require__(46);

var _RegularNode_color_spill2 = _interopRequireDefault(_RegularNode_color_spill);

var _VarNode_body = __webpack_require__(47);

var _VarNode_body2 = _interopRequireDefault(_VarNode_body);

var _VarNode_gloss = __webpack_require__(48);

var _VarNode_gloss2 = _interopRequireDefault(_VarNode_gloss);

var _VarNode_shadow = __webpack_require__(49);

var _VarNode_shadow2 = _interopRequireDefault(_VarNode_shadow);

var _VarNode_shadow_selected = __webpack_require__(50);

var _VarNode_shadow_selected2 = _interopRequireDefault(_VarNode_shadow_selected);

var _VarNode_color_spill = __webpack_require__(51);

var _VarNode_color_spill2 = _interopRequireDefault(_VarNode_color_spill);

var _MathNode_body = __webpack_require__(52);

var _MathNode_body2 = _interopRequireDefault(_MathNode_body);

var _MathNode_shadow_selected = __webpack_require__(53);

var _MathNode_shadow_selected2 = _interopRequireDefault(_MathNode_shadow_selected);

var _Comment_Background = __webpack_require__(54);

var _Comment_Background2 = _interopRequireDefault(_Comment_Background);

var _Selector = __webpack_require__(55);

var _Selector2 = _interopRequireDefault(_Selector);

var _event = __webpack_require__(56);

var _event2 = _interopRequireDefault(_event);

var _event_custom = __webpack_require__(57);

var _event_custom2 = _interopRequireDefault(_event_custom);

var _icon_Blueprint_MouseEvent_16x = __webpack_require__(58);

var _icon_Blueprint_MouseEvent_16x2 = _interopRequireDefault(_icon_Blueprint_MouseEvent_16x);

var _icon_Blueprint_KeyboardEvent_16x = __webpack_require__(59);

var _icon_Blueprint_KeyboardEvent_16x2 = _interopRequireDefault(_icon_Blueprint_KeyboardEvent_16x);

var _DelegatePin_Connected = __webpack_require__(60);

var _DelegatePin_Connected2 = _interopRequireDefault(_DelegatePin_Connected);

var _DelegatePin_Disconnected = __webpack_require__(61);

var _DelegatePin_Disconnected2 = _interopRequireDefault(_DelegatePin_Disconnected);

var _ExecPin_Connected = __webpack_require__(62);

var _ExecPin_Connected2 = _interopRequireDefault(_ExecPin_Connected);

var _ExecPin_Disconnected = __webpack_require__(63);

var _ExecPin_Disconnected2 = _interopRequireDefault(_ExecPin_Disconnected);

var _Pin_connected_VarA = __webpack_require__(64);

var _Pin_connected_VarA2 = _interopRequireDefault(_Pin_connected_VarA);

var _Pin_disconnected_VarA = __webpack_require__(65);

var _Pin_disconnected_VarA2 = _interopRequireDefault(_Pin_disconnected_VarA);

var _icon_Blueprint_Branch_16x = __webpack_require__(66);

var _icon_Blueprint_Branch_16x2 = _interopRequireDefault(_icon_Blueprint_Branch_16x);

var _icon_Blueprint_MakeStruct_16x = __webpack_require__(67);

var _icon_Blueprint_MakeStruct_16x2 = _interopRequireDefault(_icon_Blueprint_MakeStruct_16x);

var _icon_Blueprint_BreakStruct_16x = __webpack_require__(68);

var _icon_Blueprint_BreakStruct_16x2 = _interopRequireDefault(_icon_Blueprint_BreakStruct_16x);

var _icon_Blueprint_Event_16x = __webpack_require__(69);

var _icon_Blueprint_Event_16x2 = _interopRequireDefault(_icon_Blueprint_Event_16x);

var _icon_Blueprint_ForEach_16x = __webpack_require__(70);

var _icon_Blueprint_ForEach_16x2 = _interopRequireDefault(_icon_Blueprint_ForEach_16x);

var _icon_Blueprint_Loop_16x = __webpack_require__(71);

var _icon_Blueprint_Loop_16x2 = _interopRequireDefault(_icon_Blueprint_Loop_16x);

var _icon_Blueprint_MakeArray_16x = __webpack_require__(72);

var _icon_Blueprint_MakeArray_16x2 = _interopRequireDefault(_icon_Blueprint_MakeArray_16x);

var _icon_Blueprint_FlipFlop_16x = __webpack_require__(73);

var _icon_Blueprint_FlipFlop_16x2 = _interopRequireDefault(_icon_Blueprint_FlipFlop_16x);

var _icon_Blueprint_Cast_16x = __webpack_require__(74);

var _icon_Blueprint_Cast_16x2 = _interopRequireDefault(_icon_Blueprint_Cast_16x);

var _icon_Blueprint_Timeline_16x = __webpack_require__(75);

var _icon_Blueprint_Timeline_16x2 = _interopRequireDefault(_icon_Blueprint_Timeline_16x);

var _icon_Blueprint_Node_16x = __webpack_require__(76);

var _icon_Blueprint_Node_16x2 = _interopRequireDefault(_icon_Blueprint_Node_16x);

var _MessageIcon = __webpack_require__(77);

var _MessageIcon2 = _interopRequireDefault(_MessageIcon);

var _LatentIcon = __webpack_require__(78);

var _LatentIcon2 = _interopRequireDefault(_LatentIcon);

var _icon_Blueprint_IsValid_16x = __webpack_require__(79);

var _icon_Blueprint_IsValid_16x2 = _interopRequireDefault(_icon_Blueprint_IsValid_16x);

var _icon_Blueprint_Select_16x = __webpack_require__(80);

var _icon_Blueprint_Select_16x2 = _interopRequireDefault(_icon_Blueprint_Select_16x);

var _icon_Blueprint_Sequence_16x = __webpack_require__(81);

var _icon_Blueprint_Sequence_16x2 = _interopRequireDefault(_icon_Blueprint_Sequence_16x);

var _icon_Blueprint_Macro_16x = __webpack_require__(82);

var _icon_Blueprint_Macro_16x2 = _interopRequireDefault(_icon_Blueprint_Macro_16x);

var _icon_Blueprint_Switch_16x = __webpack_require__(83);

var _icon_Blueprint_Switch_16x2 = _interopRequireDefault(_icon_Blueprint_Switch_16x);

var _LV_FullScreen = __webpack_require__(84);

var _LV_FullScreen2 = _interopRequireDefault(_LV_FullScreen);

var _LV_Save = __webpack_require__(85);

var _LV_Save2 = _interopRequireDefault(_LV_Save);

var _function = __webpack_require__(86);

var _function2 = _interopRequireDefault(_function);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TEXTURES = exports.TEXTURES = {
    RegularNodeBody: _RegularNode_body2.default,
    RegularNodeTitleGloss: _RegularNode_title_gloss2.default,
    RegularNodeTitleHightlight: _RegularNode_title_highlight2.default,
    RegularNodeShadow: _RegularNode_shadow2.default,
    RegularNodeShadowSelected: _RegularNode_shadow_selected2.default,
    RegularNodeColorSpill: _RegularNode_color_spill2.default,
    VarNodeBody: _VarNode_body2.default,
    VarNodeGloss: _VarNode_gloss2.default,
    VarNodeShadow: _VarNode_shadow2.default,
    VarNodeShadowSelected: _VarNode_shadow_selected2.default,
    VarNodeColorSpill: _VarNode_color_spill2.default,
    MathNodeBody: _MathNode_body2.default,
    MathNodeShadowSelected: _MathNode_shadow_selected2.default,
    CommentNodeBackground: _Comment_Background2.default,
    Selector: _Selector2.default,
    DelegatePinConnected: _DelegatePin_Connected2.default,
    DelegatePinDisconnected: _DelegatePin_Disconnected2.default,
    ExecPinConnected: _Pin_connected_VarA2.default,
    ExecPinDisconnected: _Pin_disconnected_VarA2.default,
    PinConnected: _Pin_connected_VarA2.default,
    PinDisconnected: _Pin_disconnected_VarA2.default
};

var ICONS = exports.ICONS = {
    EventNodeIcon: _event2.default,
    EventNodeIconCustom: _event_custom2.default,
    MouseEventIcon: _icon_Blueprint_MouseEvent_16x2.default,
    KeyboardEventIcon: _icon_Blueprint_KeyboardEvent_16x2.default,
    BranchIcon: _icon_Blueprint_Branch_16x2.default,
    MakeStructIcon: _icon_Blueprint_MakeStruct_16x2.default,
    BreakStructIcon: _icon_Blueprint_BreakStruct_16x2.default,
    EventIcon: _icon_Blueprint_Event_16x2.default,
    ForEachIcon: _icon_Blueprint_ForEach_16x2.default,
    ForLoopIcon: _icon_Blueprint_Loop_16x2.default,
    MakeArrayIcon: _icon_Blueprint_MakeArray_16x2.default,
    FlipFlopIcon: _icon_Blueprint_FlipFlop_16x2.default,
    DynamicCastIcon: _icon_Blueprint_Cast_16x2.default,
    TimelineIcon: _icon_Blueprint_Timeline_16x2.default,
    NodeIcon: _icon_Blueprint_Node_16x2.default,
    MessageIcon: _MessageIcon2.default,
    LatentIcon: _LatentIcon2.default,
    ValidIcon: _icon_Blueprint_IsValid_16x2.default,
    SelectIcon: _icon_Blueprint_Select_16x2.default,
    SequenceIcon: _icon_Blueprint_Sequence_16x2.default,
    MacroIcon: _icon_Blueprint_Macro_16x2.default,
    SwitchOnIcon: _icon_Blueprint_Switch_16x2.default,
    FullscreenIcon: _LV_FullScreen2.default,
    SaveIcon: _LV_Save2.default,
    FunctionIcon: _function2.default
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(0);

var _resources = __webpack_require__(1);

var _main = __webpack_require__(4);

var _Textures = __webpack_require__(3);

var _Textures2 = _interopRequireDefault(_Textures);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RegularNode = function () {
    function RegularNode(node, x, y) {
        _classCallCheck(this, RegularNode);

        this.x = parseInt(x);
        this.y = parseInt(y);
        this.height = 0;
        this.inputs = [];
        this.outputs = [];
        this.fontSize = 14;
        this.pins = [];
        this.showPinText = true;
        this.minCellWidth = 8;
        this.minCellHeight = 3;
        this.inputOffset = this.cellSize * 0.2;
        this.pointOnNode = null;

        if (!this.config) {
            this.config = {
                body: true,
                gloss: true,
                shadow: true,
                titleHighlight: true,
                colorSpill: true
            };
        }

        this.width = _config.CONFIG.CELL_SIZE * this.minCellWidth;
        this.height = _config.CONFIG.CELL_SIZE * this.minCellHeight;

        if (node.inputs) {
            this.inputs = node.inputs;
        }
        if (node.outputs) {
            this.outputs = node.outputs;
        }

        this.innerRowOffsetCells = 1.5;

        this.pinRows = [];

        this.colorTint = _config.VAR_COLORS.bool;

        this.titleHeight = _config.CONFIG.CELL_SIZE * 1.5;

        this.node = node;

        this.container = new PIXI.Container();
        this.container.interactive = true;
        this.container.buttonMode = true;

        this.container.x = this.x;
        this.container.y = this.y;

        var self = this;
        this.container.on('click', function (e) {
            self.onNodeClick(e);
        });

        this.container.on('mousedown', function (e) {
            self.onDragStart(e);
        });

        this.container.on('mouseup', function (e) {
            self.onDragEnd(e);
        });
        this.container.on('mouseupoutside', function (e) {
            self.onDragEnd(e);
        });
        this.container.on('mousemove', function (e) {
            self.onDragMove(e);
        });

        this.lastPinY = 0;
    }

    _createClass(RegularNode, [{
        key: 'onDragStart',
        value: function onDragStart(e) {
            this.dragging = true;
            this.eventData = e.data;
            this.oldPosition = this.container.position;

            this.shadow.visible = false;
            this.shadowSelected.visible = true;
            this.selected = true;

            var bounds = this.container.getBounds();
            var posGlobal = e.data.global;

            var onNodeX = posGlobal.x - bounds.x;
            var onNodeY = posGlobal.y - bounds.y;

            this.pointOnNode = {
                x: onNodeX,
                y: onNodeY
            };
        }
    }, {
        key: 'onDragMove',
        value: function onDragMove(e) {
            if (this.dragging) {
                var pos = e.data.getLocalPosition(this.nodesContainer);
                _main.app.bpConfig.draggingNode = true;

                pos.x += this.width / 2 - this.pointOnNode.x;
                pos.y += this.height / 2 - this.pointOnNode.y;

                this.container.x = this.nearestCellWidth(pos.x) * _config.CONFIG.CELL_SIZE;
                this.container.y = this.nearestCellWidth(pos.y) * _config.CONFIG.CELL_SIZE;

                this.x = this.container.x;
                this.y = this.container.y;

                this.redrawLinks();
            }
        }
    }, {
        key: 'redrawLinks',
        value: function redrawLinks() {
            for (var i = 0; i < this.pinRows.length; i++) {
                if (this.pinRows[i].output && this.pinRows[i].output.lines) {
                    for (var j = 0; j < this.pinRows[i].output.lines.length; j++) {
                        this.pinRows[i].output.lines[j].redraw();
                    }
                }
                if (this.pinRows[i].input && this.pinRows[i].input.backward) {
                    for (var k = 0; k < this.pinRows[i].input.backward.length; k++) {
                        for (var j = 0; j < this.pinRows[i].input.backward[k].lines.length; j++) {
                            this.pinRows[i].input.backward[k].lines[j].redraw();
                        }
                    }
                }
            }
        }
    }, {
        key: 'onDragEnd',
        value: function onDragEnd(e) {
            this.dragging = false;
            this.eventData = null;
            this.oldPosition = null;
            _main.app.bpConfig.draggingNode = false;
        }
    }, {
        key: 'onNodeClick',
        value: function onNodeClick(e) {
            this.shadow.visible = false;
            this.shadowSelected.visible = true;
            this.selected = true;
        }
    }, {
        key: 'select',
        value: function select(e) {
            this.shadow.visible = false;
            this.shadowSelected.visible = true;
            this.selected = true;
        }
    }, {
        key: 'inNode',
        value: function inNode(e) {
            var bounds = this.container.getBounds();
            if (e.x >= bounds.x && e.x <= bounds.x + bounds.width) {
                if (e.y >= bounds.y && e.y <= bounds.y + bounds.height) {
                    return true;
                }
            }
            return false;
        }
    }, {
        key: 'init',
        value: function init() {
            this.preparePinRows();

            this.container.x += this.width / 2;
            this.container.y += this.height / 2;

            this.x += this.width / 2;
            this.y += this.height / 2;

            this.initBody();
            this.initShadow();
            this.initGloss();
            this.initTitleHighlight();
            this.initColorSpill();
        }
    }, {
        key: 'initBody',
        value: function initBody() {
            if (this.config.body) {
                if (!this.body) {
                    this.body = new PIXI.mesh.NineSlicePlane(_Textures2.default.bodyTexture, 14, 14, 14, 14);
                }
                this.body.width = this.width;
                this.body.height = this.height;
                this.body.x = -this.body.width / 2;
                this.body.y = -this.body.height / 2;
            }
        }
    }, {
        key: 'initShadow',
        value: function initShadow() {
            if (this.config.shadow) {
                if (!this.shadow) {
                    this.shadow = new PIXI.mesh.NineSlicePlane(_Textures2.default.shadowTexture, 21, 21, 21, 21);
                }

                if (!this.shadowSelected) {
                    this.shadowSelected = new PIXI.mesh.NineSlicePlane(_Textures2.default.shadowSelectedTexture, 21, 21, 21, 21);
                }

                this.shadow.width = this.body.width + 26;
                this.shadow.height = this.body.height + 26;

                this.shadowSelected.width = this.body.width + 26;
                this.shadowSelected.height = this.body.height + 26;

                this.shadow.x = -this.shadow.width / 2;
                this.shadow.y = -this.shadow.height / 2;

                this.shadowSelected.x = -this.shadowSelected.width / 2;
                this.shadowSelected.y = -this.shadowSelected.height / 2;

                this.shadowSelected.visible = false;
            }
        }
    }, {
        key: 'initGloss',
        value: function initGloss() {
            if (this.config.gloss) {
                if (!this.gloss) {
                    this.gloss = new PIXI.mesh.NineSlicePlane(_Textures2.default.glossTexture, 7, 7, 7, 7);
                }
                this.gloss.width = this.width;
                this.gloss.height = this.titleHeight;
                this.gloss.x = -this.gloss.width / 2;
                this.gloss.y = -this.body.height / 2;
            }
        }
    }, {
        key: 'initTitleHighlight',
        value: function initTitleHighlight() {
            if (this.config.titleHighlight) {
                if (!this.titleHighlight) {
                    this.titleHighlight = new PIXI.mesh.NineSlicePlane(_Textures2.default.titleHighlightTexture, 7, 7, 7, 7);
                }
                this.titleHighlight.width = this.width;
                this.titleHighlight.height = this.titleHeight;

                this.titleHighlight.x = -this.titleHighlight.width / 2;
                this.titleHighlight.y = -this.body.height / 2;
            }
        }
    }, {
        key: 'initColorSpill',
        value: function initColorSpill() {
            if (this.config.colorSpill) {
                if (!this.colorSpill) {
                    this.colorSpill = new PIXI.mesh.NineSlicePlane(_Textures2.default.colorSpillTexture, 6, 6, 1, 1);
                }
                this.colorSpill.tint = this.colorTint;
                this.colorSpill.width = this.width;
                this.colorSpill.height = this.titleHeight;
                this.colorSpill.x = -this.colorSpill.width / 2;
                this.colorSpill.y = -this.body.height / 2;
            }
        }
    }, {
        key: 'dropSelection',
        value: function dropSelection() {
            this.shadow.visible = true;
            this.shadowSelected.visible = false;
            this.selected = false;
        }
    }, {
        key: 'draw',
        value: function draw(nodesContainer) {
            this.nodesContainer = nodesContainer;

            if (this.config.shadow) {
                this.container.addChild(this.shadow);
                this.container.addChild(this.shadowSelected);
            }

            if (this.config.body) {
                this.container.addChild(this.body);
            }

            if (this.config.gloss) {
                this.container.addChild(this.gloss);
            }

            if (this.config.colorSpill) {
                this.container.addChild(this.colorSpill);
            }

            if (this.config.titleHighlight) {
                this.container.addChild(this.titleHighlight);
            }

            if (this.config.titleHighlight) {
                this.pinStartY = this.titleHighlight.y + this.titleHighlight.height + _config.CONFIG.CELL_SIZE;
                this.drawPinRows();
            }

            nodesContainer.addChild(this.container);
        }
    }, {
        key: 'drawPinRows',
        value: function drawPinRows() {
            for (var i = 0; i < this.pinRows.length; i++) {
                var row = this.pinRows[i];
                if (row.input) {
                    this.drawInput(row.input, i);
                }
                if (row.output) {
                    this.drawOutput(row.output, i);
                }
            }
        }
    }, {
        key: 'drawInput',
        value: function drawInput(input, idx) {
            var pinSprite = input.sprite;
            var pinStartY = this.pinStartY;

            pinSprite.x = -this.body.width / 2 + _config.CONFIG.CELL_SIZE;
            pinSprite.y = pinStartY + idx * _config.CONFIG.CELL_SIZE * 1.5;

            this.container.addChild(pinSprite);

            if (input.text) {
                var pinText = input.text;
                pinText.x = pinSprite.x + _config.CONFIG.CELL_SIZE * (3 / 4);
                pinText.y = pinSprite.y;
                this.container.addChild(pinText);
            }

            if (input.valueText) {
                var valueText = input.valueText;
                valueText.x = pinText.x + pinText.width + _config.CONFIG.CELL_SIZE / 2;
                valueText.y = pinSprite.y;

                var valueBorder = input.valueBorder;
                valueBorder.drawRect(valueText.x - _config.CONFIG.CELL_SIZE / 8, pinSprite.y - valueText.height / 2, valueText.width + _config.CONFIG.CELL_SIZE / 4, valueText.height);

                this.container.addChild(valueText);
                this.container.addChild(valueBorder);
            }
        }
    }, {
        key: 'drawOutput',
        value: function drawOutput(output, idx) {
            var pinSprite = output.sprite;
            var pinStartY = this.pinStartY;

            pinSprite.x = this.body.width / 2 - _config.CONFIG.CELL_SIZE;
            pinSprite.y = pinStartY + idx * _config.CONFIG.CELL_SIZE * 1.5;
            this.container.addChild(pinSprite);

            if (output.text) {
                var pinText = output.text;

                pinText.x = pinSprite.x - _config.CONFIG.CELL_SIZE * (3 / 4);
                pinText.y = pinSprite.y;

                this.container.addChild(pinText);
            }

            if (output.valueText) {
                var valueText = output.valueText;
                valueText.x = pinText.x + pinText.width + _config.CONFIG.CELL_SIZE / 2;
                valueText.y = pinSprite.y;

                var valueBorder = output.valueBorder;
                valueBorder.drawRect(valueText.x - _config.CONFIG.CELL_SIZE / 8, pinSprite.y - valueText.height / 2, valueText.width + _config.CONFIG.CELL_SIZE / 4, valueText.height);

                this.container.addChild(valueText);
                this.container.addChild(valueBorder);
            }
        }
    }, {
        key: 'preparePinRows',
        value: function preparePinRows() {
            var l = Math.max(this.inputs.length, this.outputs.length);

            var maxRowWidth = 0;
            for (var i = 0; i < l; i++) {
                var rowWidth = 0;
                if (this.inputs[i] && this.inputs.name !== "Output Delegate" || this.outputs[i] && this.outputs[i].name !== "Output Delegate") {
                    var newRow = {};
                    if (this.inputs[i]) {
                        var pin = this.preparePin(this.inputs[i]);
                        newRow.input = pin.pin;
                        rowWidth += pin.width;
                    }
                    rowWidth += this.innerRowOffsetCells * _config.CONFIG.CELL_SIZE;
                    if (this.outputs[i]) {
                        var pin = this.preparePin(this.outputs[i], true);
                        newRow.output = pin.pin;
                        rowWidth += pin.width;
                    }

                    if (rowWidth > maxRowWidth) {
                        maxRowWidth = rowWidth;
                    }

                    this.pinRows.push(newRow);
                }
            }

            if (this.width < maxRowWidth) {
                this.width = this.nearestCellWidth(maxRowWidth) * _config.CONFIG.CELL_SIZE;
            }

            var height = this.titleHeight + _config.CONFIG.CELL_SIZE + this.pinRows.length * _config.CONFIG.CELL_SIZE * 1.5;

            if (this.height < height) {
                this.height = this.nearestCellWidth(height) * _config.CONFIG.CELL_SIZE - _config.CONFIG.CELL_SIZE / 2;
            }
        }
    }, {
        key: 'preparePin',
        value: function preparePin(pin, isOutput) {
            var ret = {
                pin: {
                    links: []
                },
                width: 0
            };

            //console.log(pin);
            var pinSprite = PIXI.Sprite.fromImage(this.getPinSprite(pin));
            if (pin.type.name !== "exec") {
                pinSprite.tint = _config.VAR_COLORS[pin.type.name];
            }

            if (pin.links) {
                ret.pin.links = pin.links;
            }

            ret.pin.type = pin.type;
            ret.pin.id = pin.id;

            pinSprite.anchor.set(0.5, 0.5);
            //pinSprite.displayGroup = this.pinsLayer;
            ret.pin.sprite = pinSprite;

            ret.width = pinSprite.width + _config.CONFIG.CELL_SIZE;

            var drawText = true;

            if (pin.name && (pin.name === "execute" || pin.name === "then" || pin.name === "Output_Get")) {
                drawText = false;
            } else if (this.constructor.name === 'BinaryOperatorNode' && pin.name === "Return Value") {
                drawText = false;
            }

            if (drawText) {
                var pinText = new PIXI.Text(pin.name, _config.defaultTextStyle);
                pinText.anchor.set(0, 0.5);
                if (isOutput) {
                    pinText.anchor.set(1, 0.5);
                }
                //pinText.displayGroup = this.pinsLayer;
                ret.pin.text = pinText;

                ret.width += pinText.width + _config.CONFIG.CELL_SIZE * (3 / 4);
            }

            if (pin.value) {
                var valueText = new PIXI.Text(pin.value, _config.defaultTextStyle);
                valueText.anchor.set(0, 0.5);
                //valueText.displayGroup = this.pinsLayer;

                var valueBorder = new PIXI.Graphics();
                //valueBorder.displayGroup = this.pinsLayer;
                valueBorder.lineStyle(1, 0xFFFFFF);

                ret.pin.valueText = valueText;
                ret.pin.valueBorder = valueBorder;

                ret.width += _config.CONFIG.CELL_SIZE / 2 + valueText.width + _config.CONFIG.CELL_SIZE / 4;
            }

            return ret;
        }
    }, {
        key: 'getPinSprite',
        value: function getPinSprite(pin) {
            if (pin.type.name === "exec") {
                return pin.linked ? _resources.TEXTURES.ExecPinDisconnected : _resources.TEXTURES.ExecPinDisconnected;
            }
            return pin.linked ? _resources.TEXTURES.PinConnected : _resources.TEXTURES.PinDisconnected;
        }
    }, {
        key: 'nearestCellWidth',
        value: function nearestCellWidth(width) {
            return Math.ceil(width / _config.CONFIG.CELL_SIZE);
        }
    }, {
        key: 'setOutputLink',
        value: function setOutputLink(from, to) {
            if (from && to) {
                from.linked = true;
                if (!from.links) from.links = [];
                from.links.push(to);

                if (!to.backward) {
                    to.backward = [];
                }

                to.backward.push(from);
                to.linked = true;
            }
        }
    }]);

    return RegularNode;
}();

exports.default = RegularNode;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _resources = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TexturesHandler = function TexturesHandler() {
    _classCallCheck(this, TexturesHandler);

    if (!this.instance) {
        this.bodyTexture = PIXI.Texture.fromImage(_resources.TEXTURES.RegularNodeBody);
        this.glossTexture = PIXI.Texture.fromImage(_resources.TEXTURES.RegularNodeTitleGloss);
        this.titleHighlightTexture = PIXI.Texture.fromImage(_resources.TEXTURES.RegularNodeTitleHightlight);
        this.shadowTexture = PIXI.Texture.fromImage(_resources.TEXTURES.RegularNodeShadow);
        this.shadowSelectedTexture = PIXI.Texture.fromImage(_resources.TEXTURES.RegularNodeShadowSelected);
        this.colorSpillTexture = PIXI.Texture.fromImage(_resources.TEXTURES.RegularNodeColorSpill);

        this.varNodeBodyTexture = PIXI.Texture.fromImage(_resources.TEXTURES.VarNodeBody);
        this.varNodeGlossTexture = PIXI.Texture.fromImage(_resources.TEXTURES.VarNodeGloss);
        this.varNodeShadowTexture = PIXI.Texture.fromImage(_resources.TEXTURES.VarNodeShadow);
        this.varNodeShadowSelectedTexture = PIXI.Texture.fromImage(_resources.TEXTURES.VarNodeShadowSelected);
        this.varNodeColorSpillTexture = PIXI.Texture.fromImage(_resources.TEXTURES.VarNodeColorSpill);

        this.mathNodeBodyTexture = PIXI.Texture.fromImage(_resources.TEXTURES.MathNodeBody);
        this.mathNodeShadowSelectedTexture = PIXI.Texture.fromImage(_resources.TEXTURES.MathNodeShadowSelected);

        this.commentNodeBody = PIXI.Texture.fromImage(_resources.TEXTURES.CommentNodeBackground);

        this.selector = PIXI.Texture.fromImage(_resources.TEXTURES.Selector);

        this.instance = this;
    }

    return this.instance;
};

var instance = new TexturesHandler();

Object.freeze(instance);

exports.default = instance;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.allNodes = exports.app = undefined;
exports.default = prepare;

var _Grid = __webpack_require__(40);

var _Grid2 = _interopRequireDefault(_Grid);

var _Textures = __webpack_require__(3);

var _Textures2 = _interopRequireDefault(_Textures);

var _BlueprintRenderer = __webpack_require__(87);

var _BlueprintRenderer2 = _interopRequireDefault(_BlueprintRenderer);

var _BPToNodes = __webpack_require__(89);

var _BPToNodes2 = _interopRequireDefault(_BPToNodes);

var _LinksDrawer = __webpack_require__(98);

var _LinksDrawer2 = _interopRequireDefault(_LinksDrawer);

var _webfontloader = __webpack_require__(100);

var _webfontloader2 = _interopRequireDefault(_webfontloader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = exports.app = undefined;
var allNodes = exports.allNodes = [];

function preparePIXI(document, file) {

    exports.app = app = new PIXI.Application(document.body.parentNode.clientWidth, window.innerHeight, { antialias: true });
    document.body.appendChild(app.view);

    var grid = new _Grid2.default(app, 0, 0);

    var dragging = false;

    var draggingLeft = false;
    var dragLeftStartPoint = null;

    var eventData = null;

    var mainContainer = new PIXI.Container();

    exports.allNodes = allNodes = [];

    var selectedNodes = [];

    var linksDrawer;

    var nodesLayer = new PIXI.DisplayGroup(1, true);
    var linksLayer = new PIXI.DisplayGroup(0, true);

    var linksContainer = new PIXI.Container();
    app.stage.addChild(linksContainer);

    app.renderer.plugins.interaction.on('pointerdown', onDragStart).on('pointerup', onDragEnd).on('pointerupoutside', onDragEnd).on('pointermove', onDragMove);

    app.stage.addChild(mainContainer);

    var selector = new PIXI.mesh.NineSlicePlane(_Textures2.default.selector, 2, 2, 2, 2);

    selector.width = 100;
    selector.height = 100;
    selector.visible = false;

    app.stage.addChild(selector);
    app.bpConfig = { draggingNode: false };

    var render = new _BlueprintRenderer2.default();
    render.renderFromFile(file, function (nodes) {
        var nodesObjects = (0, _BPToNodes2.default)(nodes);
        for (var i = 0, l = nodesObjects.length; i < l; i++) {
            nodesObjects[i].draw(mainContainer);
            allNodes.push(nodesObjects[i]);
        }
        linksDrawer = new _LinksDrawer2.default(linksContainer, allNodes);
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
        canvas.addEventListener('contextmenu', function (e) {
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

            grid.redraw(event.data.originalEvent.movementX, event.data.originalEvent.movementY);
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

function prepare(document, file) {
    _webfontloader2.default.load({
        google: {
            families: ['Roboto']
        },
        active: function active(e) {
            preparePIXI(document, file);
        }
    });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _RegularNode2 = __webpack_require__(2);

var _RegularNode3 = _interopRequireDefault(_RegularNode2);

var _config = __webpack_require__(0);

var _Textures = __webpack_require__(3);

var _Textures2 = _interopRequireDefault(_Textures);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var VarNode = function (_RegularNode) {
    _inherits(VarNode, _RegularNode);

    function VarNode(node, x, y) {
        _classCallCheck(this, VarNode);

        var _this = _possibleConstructorReturn(this, (VarNode.__proto__ || Object.getPrototypeOf(VarNode)).call(this, node, x, y));

        _this.showPinText = true;
        _this.inputOffset = _this.cellSize * 0.2;

        _this.pinRows = [];

        _this.titleHeight = 0;

        _this.node = node;

        _this.body = new PIXI.mesh.NineSlicePlane(_Textures2.default.varNodeBodyTexture, 11, 11, 11, 11);
        _this.gloss = new PIXI.mesh.NineSlicePlane(_Textures2.default.varNodeGlossTexture, 11, 11, 11, 11);
        _this.shadow = new PIXI.mesh.NineSlicePlane(_Textures2.default.varNodeShadowTexture, 25, 25, 25, 25);
        _this.shadowSelected = new PIXI.mesh.NineSlicePlane(_Textures2.default.varNodeShadowSelectedTexture, 21, 21, 21, 21);
        _this.colorSpill = new PIXI.Sprite.from(_Textures2.default.varNodeColorSpillTexture);
        _this.config = {
            body: true,
            gloss: true,
            shadow: true,
            titleHighlight: false,
            colorSpill: true
        };
        return _this;
    }

    _createClass(VarNode, [{
        key: 'draw',
        value: function draw(nodesContainer) {
            _get(VarNode.prototype.__proto__ || Object.getPrototypeOf(VarNode.prototype), 'draw', this).call(this, nodesContainer);
            this.gloss.height = this.height;
        }
    }, {
        key: 'initColorSpill',
        value: function initColorSpill() {
            _get(VarNode.prototype.__proto__ || Object.getPrototypeOf(VarNode.prototype), 'initColorSpill', this).call(this);
            this.colorSpill.height = _config.CONFIG.CELL_SIZE * 1.75;
        }
    }]);

    return VarNode;
}(_RegularNode3.default);

exports.default = VarNode;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(37);

__webpack_require__(39);

var _main = __webpack_require__(4);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.prepare = _main2.default;

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;/*!
 * pixi.js - v4.8.1
 * Compiled Wed, 06 Jun 2018 15:38:05 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
!function(t){if(true)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.PIXI=t()}}(function(){var t;return function(){function t(e,r,n){function i(s,a){if(!r[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return require(s,!0);if(o)return o(s,!0);var h=new Error("Cannot find module '"+s+"'");throw h.code="MODULE_NOT_FOUND",h}var l=r[s]={exports:{}};e[s][0].call(l.exports,function(t){var r=e[s][1][t];return i(r||t)},l,l.exports,t,e,r,n)}return r[s].exports}for(var o="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s]);return i}return t}()({1:[function(t,e,r){"use strict";"use restrict";function n(t){var e=32;return t&=-t,t&&e--,65535&t&&(e-=16),16711935&t&&(e-=8),252645135&t&&(e-=4),858993459&t&&(e-=2),1431655765&t&&(e-=1),e}r.INT_BITS=32,r.INT_MAX=2147483647,r.INT_MIN=-1<<31,r.sign=function(t){return(t>0)-(t<0)},r.abs=function(t){var e=t>>31;return(t^e)-e},r.min=function(t,e){return e^(t^e)&-(t<e)},r.max=function(t,e){return t^(t^e)&-(t<e)},r.isPow2=function(t){return!(t&t-1||!t)},r.log2=function(t){var e,r;return e=(t>65535)<<4,t>>>=e,r=(t>255)<<3,t>>>=r,e|=r,r=(t>15)<<2,t>>>=r,e|=r,r=(t>3)<<1,t>>>=r,(e|=r)|t>>1},r.log10=function(t){return t>=1e9?9:t>=1e8?8:t>=1e7?7:t>=1e6?6:t>=1e5?5:t>=1e4?4:t>=1e3?3:t>=100?2:t>=10?1:0},r.popCount=function(t){return t-=t>>>1&1431655765,16843009*((t=(858993459&t)+(t>>>2&858993459))+(t>>>4)&252645135)>>>24},r.countTrailingZeros=n,r.nextPow2=function(t){return t+=0===t,--t,t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,(t|=t>>>16)+1},r.prevPow2=function(t){return t|=t>>>1,t|=t>>>2,t|=t>>>4,t|=t>>>8,(t|=t>>>16)-(t>>>1)},r.parity=function(t){return t^=t>>>16,t^=t>>>8,t^=t>>>4,27030>>>(t&=15)&1};var i=new Array(256);!function(t){for(var e=0;e<256;++e){var r=e,n=e,i=7;for(r>>>=1;r;r>>>=1)n<<=1,n|=1&r,--i;t[e]=n<<i&255}}(i),r.reverse=function(t){return i[255&t]<<24|i[t>>>8&255]<<16|i[t>>>16&255]<<8|i[t>>>24&255]},r.interleave2=function(t,e){return t&=65535,t=16711935&(t|t<<8),t=252645135&(t|t<<4),t=858993459&(t|t<<2),t=1431655765&(t|t<<1),e&=65535,e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),t|e<<1},r.deinterleave2=function(t,e){return t=t>>>e&1431655765,t=858993459&(t|t>>>1),t=252645135&(t|t>>>2),t=16711935&(t|t>>>4),(t=65535&(t|t>>>16))<<16>>16},r.interleave3=function(t,e,r){return t&=1023,t=4278190335&(t|t<<16),t=251719695&(t|t<<8),t=3272356035&(t|t<<4),t=1227133513&(t|t<<2),e&=1023,e=4278190335&(e|e<<16),e=251719695&(e|e<<8),e=3272356035&(e|e<<4),e=1227133513&(e|e<<2),t|=e<<1,r&=1023,r=4278190335&(r|r<<16),r=251719695&(r|r<<8),r=3272356035&(r|r<<4),r=1227133513&(r|r<<2),t|r<<2},r.deinterleave3=function(t,e){return t=t>>>e&1227133513,t=3272356035&(t|t>>>2),t=251719695&(t|t>>>4),t=4278190335&(t|t>>>8),(t=1023&(t|t>>>16))<<22>>22},r.nextCombination=function(t){var e=t|t-1;return e+1|(~e&-~e)-1>>>n(t)+1}},{}],2:[function(t,e,r){"use strict";function n(t,e,r){r=r||2;var n=e&&e.length,o=n?e[0]*r:t.length,a=i(t,0,o,r,!0),u=[];if(!a)return u;var h,l,d,f,p,v,g;if(n&&(a=c(t,e,a,r)),t.length>80*r){h=d=t[0],l=f=t[1];for(var y=r;y<o;y+=r)p=t[y],v=t[y+1],p<h&&(h=p),v<l&&(l=v),p>d&&(d=p),v>f&&(f=v);g=Math.max(d-h,f-l),g=0!==g?1/g:0}return s(a,u,r,h,l,g),u}function i(t,e,r,n,i){var o,s;if(i===A(t,e,r,n)>0)for(o=e;o<r;o+=n)s=P(o,t[o],t[o+1],s);else for(o=r-n;o>=e;o-=n)s=P(o,t[o],t[o+1],s);return s&&T(s,s.next)&&(C(s),s=s.next),s}function o(t,e){if(!t)return t;e||(e=t);var r,n=t;do{if(r=!1,n.steiner||!T(n,n.next)&&0!==x(n.prev,n,n.next))n=n.next;else{if(C(n),(n=e=n.prev)===n.next)break;r=!0}}while(r||n!==e);return e}function s(t,e,r,n,i,c,d){if(t){!d&&c&&v(t,n,i,c);for(var f,p,g=t;t.prev!==t.next;)if(f=t.prev,p=t.next,c?u(t,n,i,c):a(t))e.push(f.i/r),e.push(t.i/r),e.push(p.i/r),C(t),t=p.next,g=p.next;else if((t=p)===g){d?1===d?(t=h(t,e,r),s(t,e,r,n,i,c,2)):2===d&&l(t,e,r,n,i,c):s(o(t),e,r,n,i,c,1);break}}}function a(t){var e=t.prev,r=t,n=t.next;if(x(e,r,n)>=0)return!1;for(var i=t.next.next;i!==t.prev;){if(_(e.x,e.y,r.x,r.y,n.x,n.y,i.x,i.y)&&x(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function u(t,e,r,n){var i=t.prev,o=t,s=t.next;if(x(i,o,s)>=0)return!1;for(var a=i.x<o.x?i.x<s.x?i.x:s.x:o.x<s.x?o.x:s.x,u=i.y<o.y?i.y<s.y?i.y:s.y:o.y<s.y?o.y:s.y,h=i.x>o.x?i.x>s.x?i.x:s.x:o.x>s.x?o.x:s.x,l=i.y>o.y?i.y>s.y?i.y:s.y:o.y>s.y?o.y:s.y,c=y(a,u,e,r,n),d=y(h,l,e,r,n),f=t.prevZ,p=t.nextZ;f&&f.z>=c&&p&&p.z<=d;){if(f!==t.prev&&f!==t.next&&_(i.x,i.y,o.x,o.y,s.x,s.y,f.x,f.y)&&x(f.prev,f,f.next)>=0)return!1;if(f=f.prevZ,p!==t.prev&&p!==t.next&&_(i.x,i.y,o.x,o.y,s.x,s.y,p.x,p.y)&&x(p.prev,p,p.next)>=0)return!1;p=p.nextZ}for(;f&&f.z>=c;){if(f!==t.prev&&f!==t.next&&_(i.x,i.y,o.x,o.y,s.x,s.y,f.x,f.y)&&x(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;p&&p.z<=d;){if(p!==t.prev&&p!==t.next&&_(i.x,i.y,o.x,o.y,s.x,s.y,p.x,p.y)&&x(p.prev,p,p.next)>=0)return!1;p=p.nextZ}return!0}function h(t,e,r){var n=t;do{var i=n.prev,o=n.next.next;!T(i,o)&&w(i,n,n.next,o)&&S(i,o)&&S(o,i)&&(e.push(i.i/r),e.push(n.i/r),e.push(o.i/r),C(n),C(n.next),n=t=o),n=n.next}while(n!==t);return n}function l(t,e,r,n,i,a){var u=t;do{for(var h=u.next.next;h!==u.prev;){if(u.i!==h.i&&b(u,h)){var l=M(u,h);return u=o(u,u.next),l=o(l,l.next),s(u,e,r,n,i,a),void s(l,e,r,n,i,a)}h=h.next}u=u.next}while(u!==t)}function c(t,e,r,n){var s,a,u,h,l,c=[];for(s=0,a=e.length;s<a;s++)u=e[s]*n,h=s<a-1?e[s+1]*n:t.length,l=i(t,u,h,n,!1),l===l.next&&(l.steiner=!0),c.push(m(l));for(c.sort(d),s=0;s<c.length;s++)f(c[s],r),r=o(r,r.next);return r}function d(t,e){return t.x-e.x}function f(t,e){if(e=p(t,e)){var r=M(e,t);o(r,r.next)}}function p(t,e){var r,n=e,i=t.x,o=t.y,s=-1/0;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){var a=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(a<=i&&a>s){if(s=a,a===i){if(o===n.y)return n;if(o===n.next.y)return n.next}r=n.x<n.next.x?n:n.next}}n=n.next}while(n!==e);if(!r)return null;if(i===s)return r.prev;var u,h=r,l=r.x,c=r.y,d=1/0;for(n=r.next;n!==h;)i>=n.x&&n.x>=l&&i!==n.x&&_(o<c?i:s,o,l,c,o<c?s:i,o,n.x,n.y)&&((u=Math.abs(o-n.y)/(i-n.x))<d||u===d&&n.x>r.x)&&S(n,t)&&(r=n,d=u),n=n.next;return r}function v(t,e,r,n){var i=t;do{null===i.z&&(i.z=y(i.x,i.y,e,r,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==t);i.prevZ.nextZ=null,i.prevZ=null,g(i)}function g(t){var e,r,n,i,o,s,a,u,h=1;do{for(r=t,t=null,o=null,s=0;r;){for(s++,n=r,a=0,e=0;e<h&&(a++,n=n.nextZ);e++);for(u=h;a>0||u>0&&n;)0!==a&&(0===u||!n||r.z<=n.z)?(i=r,r=r.nextZ,a--):(i=n,n=n.nextZ,u--),o?o.nextZ=i:t=i,i.prevZ=o,o=i;r=n}o.nextZ=null,h*=2}while(s>1);return t}function y(t,e,r,n,i){return t=32767*(t-r)*i,e=32767*(e-n)*i,t=16711935&(t|t<<8),t=252645135&(t|t<<4),t=858993459&(t|t<<2),t=1431655765&(t|t<<1),e=16711935&(e|e<<8),e=252645135&(e|e<<4),e=858993459&(e|e<<2),e=1431655765&(e|e<<1),t|e<<1}function m(t){var e=t,r=t;do{e.x<r.x&&(r=e),e=e.next}while(e!==t);return r}function _(t,e,r,n,i,o,s,a){return(i-s)*(e-a)-(t-s)*(o-a)>=0&&(t-s)*(n-a)-(r-s)*(e-a)>=0&&(r-s)*(o-a)-(i-s)*(n-a)>=0}function b(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!E(t,e)&&S(t,e)&&S(e,t)&&O(t,e)}function x(t,e,r){return(e.y-t.y)*(r.x-e.x)-(e.x-t.x)*(r.y-e.y)}function T(t,e){return t.x===e.x&&t.y===e.y}function w(t,e,r,n){return!!(T(t,e)&&T(r,n)||T(t,n)&&T(r,e))||x(t,e,r)>0!=x(t,e,n)>0&&x(r,n,t)>0!=x(r,n,e)>0}function E(t,e){var r=t;do{if(r.i!==t.i&&r.next.i!==t.i&&r.i!==e.i&&r.next.i!==e.i&&w(r,r.next,t,e))return!0;r=r.next}while(r!==t);return!1}function S(t,e){return x(t.prev,t,t.next)<0?x(t,e,t.next)>=0&&x(t,t.prev,e)>=0:x(t,e,t.prev)<0||x(t,t.next,e)<0}function O(t,e){var r=t,n=!1,i=(t.x+e.x)/2,o=(t.y+e.y)/2;do{r.y>o!=r.next.y>o&&r.next.y!==r.y&&i<(r.next.x-r.x)*(o-r.y)/(r.next.y-r.y)+r.x&&(n=!n),r=r.next}while(r!==t);return n}function M(t,e){var r=new R(t.i,t.x,t.y),n=new R(e.i,e.x,e.y),i=t.next,o=e.prev;return t.next=e,e.prev=t,r.next=i,i.prev=r,n.next=r,r.prev=n,o.next=n,n.prev=o,n}function P(t,e,r,n){var i=new R(t,e,r);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function C(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function R(t,e,r){this.i=t,this.x=e,this.y=r,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function A(t,e,r,n){for(var i=0,o=e,s=r-n;o<r;o+=n)i+=(t[s]-t[o])*(t[o+1]+t[s+1]),s=o;return i}e.exports=n,e.exports.default=n,n.deviation=function(t,e,r,n){var i=e&&e.length,o=i?e[0]*r:t.length,s=Math.abs(A(t,0,o,r));if(i)for(var a=0,u=e.length;a<u;a++){var h=e[a]*r,l=a<u-1?e[a+1]*r:t.length;s-=Math.abs(A(t,h,l,r))}var c=0;for(a=0;a<n.length;a+=3){var d=n[a]*r,f=n[a+1]*r,p=n[a+2]*r;c+=Math.abs((t[d]-t[p])*(t[f+1]-t[d+1])-(t[d]-t[f])*(t[p+1]-t[d+1]))}return 0===s&&0===c?0:Math.abs((c-s)/s)},n.flatten=function(t){for(var e=t[0][0].length,r={vertices:[],holes:[],dimensions:e},n=0,i=0;i<t.length;i++){for(var o=0;o<t[i].length;o++)for(var s=0;s<e;s++)r.vertices.push(t[i][o][s]);i>0&&(n+=t[i-1].length,r.holes.push(n))}return r}},{}],3:[function(t,e,r){"use strict";function n(){}function i(t,e,r){this.fn=t,this.context=e,this.once=r||!1}function o(){this._events=new n,this._eventsCount=0}var s=Object.prototype.hasOwnProperty,a="~";Object.create&&(n.prototype=Object.create(null),(new n).__proto__||(a=!1)),o.prototype.eventNames=function(){var t,e,r=[];if(0===this._eventsCount)return r;for(e in t=this._events)s.call(t,e)&&r.push(a?e.slice(1):e);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(t)):r},o.prototype.listeners=function(t,e){var r=a?a+t:t,n=this._events[r];if(e)return!!n;if(!n)return[];if(n.fn)return[n.fn];for(var i=0,o=n.length,s=new Array(o);i<o;i++)s[i]=n[i].fn;return s},o.prototype.emit=function(t,e,r,n,i,o){var s=a?a+t:t;if(!this._events[s])return!1;var u,h,l=this._events[s],c=arguments.length;if(l.fn){switch(l.once&&this.removeListener(t,l.fn,void 0,!0),c){case 1:return l.fn.call(l.context),!0;case 2:return l.fn.call(l.context,e),!0;case 3:return l.fn.call(l.context,e,r),!0;case 4:return l.fn.call(l.context,e,r,n),!0;case 5:return l.fn.call(l.context,e,r,n,i),!0;case 6:return l.fn.call(l.context,e,r,n,i,o),!0}for(h=1,u=new Array(c-1);h<c;h++)u[h-1]=arguments[h];l.fn.apply(l.context,u)}else{var d,f=l.length;for(h=0;h<f;h++)switch(l[h].once&&this.removeListener(t,l[h].fn,void 0,!0),c){case 1:l[h].fn.call(l[h].context);break;case 2:l[h].fn.call(l[h].context,e);break;case 3:l[h].fn.call(l[h].context,e,r);break;case 4:l[h].fn.call(l[h].context,e,r,n);break;default:if(!u)for(d=1,u=new Array(c-1);d<c;d++)u[d-1]=arguments[d];l[h].fn.apply(l[h].context,u)}}return!0},o.prototype.on=function(t,e,r){var n=new i(e,r||this),o=a?a+t:t;return this._events[o]?this._events[o].fn?this._events[o]=[this._events[o],n]:this._events[o].push(n):(this._events[o]=n,this._eventsCount++),this},o.prototype.once=function(t,e,r){var n=new i(e,r||this,!0),o=a?a+t:t;return this._events[o]?this._events[o].fn?this._events[o]=[this._events[o],n]:this._events[o].push(n):(this._events[o]=n,this._eventsCount++),this},o.prototype.removeListener=function(t,e,r,i){var o=a?a+t:t;if(!this._events[o])return this;if(!e)return 0==--this._eventsCount?this._events=new n:delete this._events[o],this;var s=this._events[o];if(s.fn)s.fn!==e||i&&!s.once||r&&s.context!==r||(0==--this._eventsCount?this._events=new n:delete this._events[o]);else{for(var u=0,h=[],l=s.length;u<l;u++)(s[u].fn!==e||i&&!s[u].once||r&&s[u].context!==r)&&h.push(s[u]);h.length?this._events[o]=1===h.length?h[0]:h:0==--this._eventsCount?this._events=new n:delete this._events[o]}return this},o.prototype.removeAllListeners=function(t){var e;return t?(e=a?a+t:t,this._events[e]&&(0==--this._eventsCount?this._events=new n:delete this._events[e])):(this._events=new n,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prototype.setMaxListeners=function(){return this},o.prefixed=a,o.EventEmitter=o,void 0!==e&&(e.exports=o)},{}],4:[function(e,r,n){!function(e){var n=/iPhone/i,i=/iPod/i,o=/iPad/i,s=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,a=/Android/i,u=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,h=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,l=/Windows Phone/i,c=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,d=/BlackBerry/i,f=/BB10/i,p=/Opera Mini/i,v=/(CriOS|Chrome)(?=.*\bMobile\b)/i,g=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,y=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),m=function(t,e){return t.test(e)},_=function(t){var e=t||navigator.userAgent,r=e.split("[FBAN");if(void 0!==r[1]&&(e=r[0]),r=e.split("Twitter"),void 0!==r[1]&&(e=r[0]),this.apple={phone:m(n,e),ipod:m(i,e),tablet:!m(n,e)&&m(o,e),device:m(n,e)||m(i,e)||m(o,e)},this.amazon={phone:m(u,e),tablet:!m(u,e)&&m(h,e),device:m(u,e)||m(h,e)},this.android={phone:m(u,e)||m(s,e),tablet:!m(u,e)&&!m(s,e)&&(m(h,e)||m(a,e)),device:m(u,e)||m(h,e)||m(s,e)||m(a,e)},this.windows={phone:m(l,e),tablet:m(c,e),device:m(l,e)||m(c,e)},this.other={blackberry:m(d,e),blackberry10:m(f,e),opera:m(p,e),firefox:m(g,e),chrome:m(v,e),device:m(d,e)||m(f,e)||m(p,e)||m(g,e)||m(v,e)},this.seven_inch=m(y,e),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window)return this},b=function(){var t=new _;return t.Class=_,t};void 0!==r&&r.exports&&"undefined"==typeof window?r.exports=_:void 0!==r&&r.exports&&"undefined"!=typeof window?r.exports=b():"function"==typeof t&&t.amd?t("isMobile",[],e.isMobile=b()):e.isMobile=b()}(this)},{}],5:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){return t._head?(t._tail._next=e,e._prev=t._tail,t._tail=e):(t._head=e,t._tail=e),e._owner=t,e}Object.defineProperty(r,"__esModule",{value:!0});var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=function(){function t(e,r,i){void 0===r&&(r=!1),n(this,t),this._fn=e,this._once=r,this._thisArg=i,this._next=this._prev=this._owner=null}return o(t,[{key:"detach",value:function(){return null!==this._owner&&(this._owner.detach(this),!0)}}]),t}(),a=function(){function t(){n(this,t),this._head=this._tail=void 0}return o(t,[{key:"handlers",value:function(){var t=!(arguments.length<=0||void 0===arguments[0])&&arguments[0],e=this._head;if(t)return!!e;for(var r=[];e;)r.push(e),e=e._next;return r}},{key:"has",value:function(t){if(!(t instanceof s))throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.");return t._owner===this}},{key:"dispatch",value:function(){var t=this._head;if(!t)return!1;for(;t;)t._once&&this.detach(t),t._fn.apply(t._thisArg,arguments),t=t._next;return!0}},{key:"add",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if("function"!=typeof t)throw new Error("MiniSignal#add(): First arg must be a Function.");return i(this,new s(t,!1,e))}},{key:"once",value:function(t){var e=arguments.length<=1||void 0===arguments[1]?null:arguments[1];if("function"!=typeof t)throw new Error("MiniSignal#once(): First arg must be a Function.");return i(this,new s(t,!0,e))}},{key:"detach",value:function(t){if(!(t instanceof s))throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.");return t._owner!==this?this:(t._prev&&(t._prev._next=t._next),t._next&&(t._next._prev=t._prev),t===this._head?(this._head=t._next,null===t._next&&(this._tail=null)):t===this._tail&&(this._tail=t._prev,this._tail._next=null),t._owner=null,this)}},{key:"detachAll",value:function(){var t=this._head;if(!t)return this;for(this._head=this._tail=null;t;)t._owner=null,t=t._next;return this}}]),t}();a.MiniSignalBinding=s,r.default=a,e.exports=r.default},{}],6:[function(t,e,r){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(t){n[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var r,a,u=n(t),h=1;h<arguments.length;h++){r=Object(arguments[h]);for(var l in r)o.call(r,l)&&(u[l]=r[l]);if(i){a=i(r);for(var c=0;c<a.length;c++)s.call(r,a[c])&&(u[a[c]]=r[a[c]])}}return u}},{}],7:[function(t,e,r){"use strict";e.exports=function(t,e){e=e||{};for(var r={key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},n=r.parser[e.strictMode?"strict":"loose"].exec(t),i={},o=14;o--;)i[r.key[o]]=n[o]||"";return i[r.q.name]={},i[r.key[12]].replace(r.q.parser,function(t,e,n){e&&(i[r.q.name][e]=n)}),i}},{}],8:[function(t,e,r){(function(t){function e(t,e){for(var r=0,n=t.length-1;n>=0;n--){var i=t[n];"."===i?t.splice(n,1):".."===i?(t.splice(n,1),r++):r&&(t.splice(n,1),r--)}if(e)for(;r--;r)t.unshift("..");return t}function n(t,e){if(t.filter)return t.filter(e);for(var r=[],n=0;n<t.length;n++)e(t[n],n,t)&&r.push(t[n]);return r}var i=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(t){return i.exec(t).slice(1)};r.resolve=function(){for(var r="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var s=o>=0?arguments[o]:t.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(r=s+"/"+r,i="/"===s.charAt(0))}return r=e(n(r.split("/"),function(t){return!!t}),!i).join("/"),(i?"/":"")+r||"."},r.normalize=function(t){var i=r.isAbsolute(t),o="/"===s(t,-1);return t=e(n(t.split("/"),function(t){return!!t}),!i).join("/"),t||i||(t="."),t&&o&&(t+="/"),(i?"/":"")+t},r.isAbsolute=function(t){return"/"===t.charAt(0)},r.join=function(){var t=Array.prototype.slice.call(arguments,0);return r.normalize(n(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},r.relative=function(t,e){function n(t){for(var e=0;e<t.length&&""===t[e];e++);for(var r=t.length-1;r>=0&&""===t[r];r--);return e>r?[]:t.slice(e,r-e+1)}t=r.resolve(t).substr(1),e=r.resolve(e).substr(1);for(var i=n(t.split("/")),o=n(e.split("/")),s=Math.min(i.length,o.length),a=s,u=0;u<s;u++)if(i[u]!==o[u]){a=u;break}for(var h=[],u=a;u<i.length;u++)h.push("..");return h=h.concat(o.slice(a)),h.join("/")},r.sep="/",r.delimiter=":",r.dirname=function(t){var e=o(t),r=e[0],n=e[1];return r||n?(n&&(n=n.substr(0,n.length-1)),r+n):"."},r.basename=function(t,e){var r=o(t)[2];return e&&r.substr(-1*e.length)===e&&(r=r.substr(0,r.length-e.length)),r},r.extname=function(t){return o(t)[3]};var s="b"==="ab".substr(-1)?function(t,e,r){return t.substr(e,r)}:function(t,e,r){return e<0&&(e=t.length+e),t.substr(e,r)}}).call(this,t("_process"))},{_process:26}],9:[function(t,e,r){var n=new ArrayBuffer(0),i=function(t,e,r,i){this.gl=t,this.buffer=t.createBuffer(),this.type=e||t.ARRAY_BUFFER,this.drawType=i||t.STATIC_DRAW,this.data=n,r&&this.upload(r),this._updateID=0};i.prototype.upload=function(t,e,r){r||this.bind();var n=this.gl;t=t||this.data,e=e||0,this.data.byteLength>=t.byteLength?n.bufferSubData(this.type,e,t):n.bufferData(this.type,t,this.drawType),this.data=t},i.prototype.bind=function(){this.gl.bindBuffer(this.type,this.buffer)},i.createVertexBuffer=function(t,e,r){return new i(t,t.ARRAY_BUFFER,e,r)},i.createIndexBuffer=function(t,e,r){return new i(t,t.ELEMENT_ARRAY_BUFFER,e,r)},i.create=function(t,e,r,n){return new i(t,e,r,n)},i.prototype.destroy=function(){this.gl.deleteBuffer(this.buffer)},e.exports=i},{}],10:[function(t,e,r){var n=t("./GLTexture"),i=function(t,e,r){this.gl=t,this.framebuffer=t.createFramebuffer(),this.stencil=null,this.texture=null,this.width=e||100,this.height=r||100};i.prototype.enableTexture=function(t){var e=this.gl;this.texture=t||new n(e),this.texture.bind(),this.bind(),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,this.texture.texture,0)},i.prototype.enableStencil=function(){if(!this.stencil){var t=this.gl;this.stencil=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,this.stencil),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,this.stencil),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,this.width,this.height)}},i.prototype.clear=function(t,e,r,n){this.bind();var i=this.gl;i.clearColor(t,e,r,n),i.clear(i.COLOR_BUFFER_BIT|i.DEPTH_BUFFER_BIT)},i.prototype.bind=function(){var t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,this.framebuffer)},i.prototype.unbind=function(){var t=this.gl;t.bindFramebuffer(t.FRAMEBUFFER,null)},i.prototype.resize=function(t,e){var r=this.gl;this.width=t,this.height=e,this.texture&&this.texture.uploadData(null,t,e),this.stencil&&(r.bindRenderbuffer(r.RENDERBUFFER,this.stencil),r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,t,e))},i.prototype.destroy=function(){var t=this.gl;this.texture&&this.texture.destroy(),t.deleteFramebuffer(this.framebuffer),this.gl=null,this.stencil=null,this.texture=null},i.createRGBA=function(t,e,r,o){var s=n.fromData(t,null,e,r);s.enableNearestScaling(),s.enableWrapClamp();var a=new i(t,e,r);return a.enableTexture(s),a.unbind(),a},i.createFloat32=function(t,e,r,o){var s=new n.fromData(t,o,e,r);s.enableNearestScaling(),s.enableWrapClamp();var a=new i(t,e,r);return a.enableTexture(s),a.unbind(),a},e.exports=i},{"./GLTexture":12}],11:[function(t,e,r){var n=t("./shader/compileProgram"),i=t("./shader/extractAttributes"),o=t("./shader/extractUniforms"),s=t("./shader/setPrecision"),a=t("./shader/generateUniformAccessObject"),u=function(t,e,r,u,h){this.gl=t,u&&(e=s(e,u),r=s(r,u)),this.program=n(t,e,r,h),this.attributes=i(t,this.program),this.uniformData=o(t,this.program),this.uniforms=a(t,this.uniformData)};u.prototype.bind=function(){return this.gl.useProgram(this.program),this},u.prototype.destroy=function(){this.attributes=null,this.uniformData=null,this.uniforms=null,this.gl.deleteProgram(this.program)},e.exports=u},{"./shader/compileProgram":17,"./shader/extractAttributes":19,"./shader/extractUniforms":20,"./shader/generateUniformAccessObject":21,"./shader/setPrecision":25}],12:[function(t,e,r){var n=function(t,e,r,n,i){this.gl=t,this.texture=t.createTexture(),this.mipmap=!1,this.premultiplyAlpha=!1,this.width=e||-1,this.height=r||-1,this.format=n||t.RGBA,this.type=i||t.UNSIGNED_BYTE};n.prototype.upload=function(t){this.bind();var e=this.gl;e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha);var r=t.videoWidth||t.width,n=t.videoHeight||t.height;n!==this.height||r!==this.width?e.texImage2D(e.TEXTURE_2D,0,this.format,this.format,this.type,t):e.texSubImage2D(e.TEXTURE_2D,0,0,0,this.format,this.type,t),this.width=r,this.height=n};var i=!1;n.prototype.uploadData=function(t,e,r){this.bind();var n=this.gl;if(t instanceof Float32Array){if(!i){if(!n.getExtension("OES_texture_float"))throw new Error("floating point textures not available");i=!0}this.type=n.FLOAT}else this.type=this.type||n.UNSIGNED_BYTE;n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),e!==this.width||r!==this.height?n.texImage2D(n.TEXTURE_2D,0,this.format,e,r,0,this.format,this.type,t||null):n.texSubImage2D(n.TEXTURE_2D,0,0,0,e,r,this.format,this.type,t||null),this.width=e,this.height=r},n.prototype.bind=function(t){var e=this.gl;void 0!==t&&e.activeTexture(e.TEXTURE0+t),e.bindTexture(e.TEXTURE_2D,this.texture)},n.prototype.unbind=function(){var t=this.gl;t.bindTexture(t.TEXTURE_2D,null)},n.prototype.minFilter=function(t){var e=this.gl;this.bind(),this.mipmap?e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t?e.LINEAR_MIPMAP_LINEAR:e.NEAREST_MIPMAP_NEAREST):e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,t?e.LINEAR:e.NEAREST)},n.prototype.magFilter=function(t){var e=this.gl;this.bind(),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,t?e.LINEAR:e.NEAREST)},n.prototype.enableMipmap=function(){var t=this.gl;this.bind(),this.mipmap=!0,t.generateMipmap(t.TEXTURE_2D)},n.prototype.enableLinearScaling=function(){this.minFilter(!0),this.magFilter(!0)},n.prototype.enableNearestScaling=function(){this.minFilter(!1),this.magFilter(!1)},n.prototype.enableWrapClamp=function(){var t=this.gl;this.bind(),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)},n.prototype.enableWrapRepeat=function(){var t=this.gl;this.bind(),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.REPEAT)},n.prototype.enableWrapMirrorRepeat=function(){var t=this.gl;this.bind(),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.MIRRORED_REPEAT),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.MIRRORED_REPEAT)},n.prototype.destroy=function(){this.gl.deleteTexture(this.texture)},n.fromSource=function(t,e,r){var i=new n(t);return i.premultiplyAlpha=r||!1,i.upload(e),i},n.fromData=function(t,e,r,i){var o=new n(t);return o.uploadData(e,r,i),o},e.exports=n},{}],13:[function(t,e,r){function n(t,e){if(this.nativeVaoExtension=null,n.FORCE_NATIVE||(this.nativeVaoExtension=t.getExtension("OES_vertex_array_object")||t.getExtension("MOZ_OES_vertex_array_object")||t.getExtension("WEBKIT_OES_vertex_array_object")),this.nativeState=e,this.nativeVaoExtension){this.nativeVao=this.nativeVaoExtension.createVertexArrayOES();var r=t.getParameter(t.MAX_VERTEX_ATTRIBS);this.nativeState={tempAttribState:new Array(r),attribState:new Array(r)}}this.gl=t,this.attributes=[],this.indexBuffer=null,this.dirty=!1}var i=t("./setVertexAttribArrays");n.prototype.constructor=n,e.exports=n,n.FORCE_NATIVE=!1,n.prototype.bind=function(){if(this.nativeVao){if(this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao),this.dirty)return this.dirty=!1,this.activate(),this;this.indexBuffer&&this.indexBuffer.bind()}else this.activate();return this},n.prototype.unbind=function(){return this.nativeVao&&this.nativeVaoExtension.bindVertexArrayOES(null),this},n.prototype.activate=function(){for(var t=this.gl,e=null,r=0;r<this.attributes.length;r++){var n=this.attributes[r];e!==n.buffer&&(n.buffer.bind(),e=n.buffer),t.vertexAttribPointer(n.attribute.location,n.attribute.size,n.type||t.FLOAT,n.normalized||!1,n.stride||0,n.start||0)}return i(t,this.attributes,this.nativeState),this.indexBuffer&&this.indexBuffer.bind(),this},n.prototype.addAttribute=function(t,e,r,n,i,o){return this.attributes.push({buffer:t,attribute:e,location:e.location,type:r||this.gl.FLOAT,normalized:n||!1,stride:i||0,start:o||0}),this.dirty=!0,this},n.prototype.addIndex=function(t){return this.indexBuffer=t,this.dirty=!0,this},n.prototype.clear=function(){return this.nativeVao&&this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao),this.attributes.length=0,this.indexBuffer=null,this},n.prototype.draw=function(t,e,r){var n=this.gl;return this.indexBuffer?n.drawElements(t,e||this.indexBuffer.data.length,n.UNSIGNED_SHORT,2*(r||0)):n.drawArrays(t,r,e||this.getSize()),this},n.prototype.destroy=function(){this.gl=null,this.indexBuffer=null,this.attributes=null,this.nativeState=null,this.nativeVao&&this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao),this.nativeVaoExtension=null,this.nativeVao=null},n.prototype.getSize=function(){var t=this.attributes[0];return t.buffer.data.length/(t.stride/4||t.attribute.size)}},{"./setVertexAttribArrays":16}],14:[function(t,e,r){var n=function(t,e){var r=t.getContext("webgl",e)||t.getContext("experimental-webgl",e);if(!r)throw new Error("This browser does not support webGL. Try using the canvas renderer");return r};e.exports=n},{}],15:[function(t,e,r){var n={createContext:t("./createContext"),setVertexAttribArrays:t("./setVertexAttribArrays"),GLBuffer:t("./GLBuffer"),GLFramebuffer:t("./GLFramebuffer"),GLShader:t("./GLShader"),GLTexture:t("./GLTexture"),VertexArrayObject:t("./VertexArrayObject"),shader:t("./shader")};void 0!==e&&e.exports&&(e.exports=n),"undefined"!=typeof window&&(window.PIXI=window.PIXI||{},window.PIXI.glCore=n)},{"./GLBuffer":9,"./GLFramebuffer":10,"./GLShader":11,"./GLTexture":12,"./VertexArrayObject":13,"./createContext":14,"./setVertexAttribArrays":16,"./shader":22}],16:[function(t,e,r){var n=function(t,e,r){var n;if(r){var i=r.tempAttribState,o=r.attribState;for(n=0;n<i.length;n++)i[n]=!1;for(n=0;n<e.length;n++)i[e[n].attribute.location]=!0;for(n=0;n<o.length;n++)o[n]!==i[n]&&(o[n]=i[n],r.attribState[n]?t.enableVertexAttribArray(n):t.disableVertexAttribArray(n))}else for(n=0;n<e.length;n++){var s=e[n];t.enableVertexAttribArray(s.attribute.location)}};e.exports=n},{}],17:[function(t,e,r){var n=function(t,e,r,n){var o=i(t,t.VERTEX_SHADER,e),s=i(t,t.FRAGMENT_SHADER,r),a=t.createProgram();if(t.attachShader(a,o),t.attachShader(a,s),n)for(var u in n)t.bindAttribLocation(a,n[u],u);return t.linkProgram(a),t.getProgramParameter(a,t.LINK_STATUS)||(console.error("Pixi.js Error: Could not initialize shader."),console.error("gl.VALIDATE_STATUS",t.getProgramParameter(a,t.VALIDATE_STATUS)),console.error("gl.getError()",t.getError()),""!==t.getProgramInfoLog(a)&&console.warn("Pixi.js Warning: gl.getProgramInfoLog()",t.getProgramInfoLog(a)),t.deleteProgram(a),a=null),t.deleteShader(o),t.deleteShader(s),a},i=function(t,e,r){var n=t.createShader(e);return t.shaderSource(n,r),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS)?n:(console.log(t.getShaderInfoLog(n)),null)};e.exports=n},{}],18:[function(t,e,r){var n=function(t,e){switch(t){case"float":return 0;case"vec2":return new Float32Array(2*e);case"vec3":return new Float32Array(3*e);case"vec4":return new Float32Array(4*e);case"int":case"sampler2D":return 0;case"ivec2":return new Int32Array(2*e);case"ivec3":return new Int32Array(3*e);case"ivec4":return new Int32Array(4*e);case"bool":return!1;case"bvec2":return i(2*e);case"bvec3":return i(3*e);case"bvec4":return i(4*e);case"mat2":return new Float32Array([1,0,0,1]);case"mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}},i=function(t){for(var e=new Array(t),r=0;r<e.length;r++)e[r]=!1;return e};e.exports=n},{}],19:[function(t,e,r){var n=t("./mapType"),i=t("./mapSize"),o=function(t,e){for(var r={},o=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES),a=0;a<o;a++){var u=t.getActiveAttrib(e,a),h=n(t,u.type);r[u.name]={type:h,size:i(h),location:t.getAttribLocation(e,u.name),pointer:s}}return r},s=function(t,e,r,n){gl.vertexAttribPointer(this.location,this.size,t||gl.FLOAT,e||!1,r||0,n||0)};e.exports=o},{"./mapSize":23,"./mapType":24}],20:[function(t,e,r){var n=t("./mapType"),i=t("./defaultValue"),o=function(t,e){for(var r={},o=t.getProgramParameter(e,t.ACTIVE_UNIFORMS),s=0;s<o;s++){var a=t.getActiveUniform(e,s),u=a.name.replace(/\[.*?\]/,""),h=n(t,a.type);r[u]={type:h,size:a.size,location:t.getUniformLocation(e,u),value:i(h,a.size)}}return r};e.exports=o},{"./defaultValue":18,"./mapType":24}],21:[function(t,e,r){function n(t,e){
return function(r){this.data[t].value=r;var n=this.data[t].location;1===e.size?a[e.type](this.gl,n,r):u[e.type](this.gl,n,r)}}function i(t,e){for(var r=e,n=0;n<t.length-1;n++){var i=r[t[n]]||{data:{}};r[t[n]]=i,r=i}return r}var o=function(t,e){var r={data:{}};r.gl=t;for(var o=Object.keys(e),a=0;a<o.length;a++){var u=o[a],h=u.split("."),l=h[h.length-1],c=i(h,r),d=e[u];c.data[l]=d,c.gl=t,Object.defineProperty(c,l,{get:s(l),set:n(l,d)})}return r},s=function(t){return function(){return this.data[t].value}},a={float:function(t,e,r){t.uniform1f(e,r)},vec2:function(t,e,r){t.uniform2f(e,r[0],r[1])},vec3:function(t,e,r){t.uniform3f(e,r[0],r[1],r[2])},vec4:function(t,e,r){t.uniform4f(e,r[0],r[1],r[2],r[3])},int:function(t,e,r){t.uniform1i(e,r)},ivec2:function(t,e,r){t.uniform2i(e,r[0],r[1])},ivec3:function(t,e,r){t.uniform3i(e,r[0],r[1],r[2])},ivec4:function(t,e,r){t.uniform4i(e,r[0],r[1],r[2],r[3])},bool:function(t,e,r){t.uniform1i(e,r)},bvec2:function(t,e,r){t.uniform2i(e,r[0],r[1])},bvec3:function(t,e,r){t.uniform3i(e,r[0],r[1],r[2])},bvec4:function(t,e,r){t.uniform4i(e,r[0],r[1],r[2],r[3])},mat2:function(t,e,r){t.uniformMatrix2fv(e,!1,r)},mat3:function(t,e,r){t.uniformMatrix3fv(e,!1,r)},mat4:function(t,e,r){t.uniformMatrix4fv(e,!1,r)},sampler2D:function(t,e,r){t.uniform1i(e,r)}},u={float:function(t,e,r){t.uniform1fv(e,r)},vec2:function(t,e,r){t.uniform2fv(e,r)},vec3:function(t,e,r){t.uniform3fv(e,r)},vec4:function(t,e,r){t.uniform4fv(e,r)},int:function(t,e,r){t.uniform1iv(e,r)},ivec2:function(t,e,r){t.uniform2iv(e,r)},ivec3:function(t,e,r){t.uniform3iv(e,r)},ivec4:function(t,e,r){t.uniform4iv(e,r)},bool:function(t,e,r){t.uniform1iv(e,r)},bvec2:function(t,e,r){t.uniform2iv(e,r)},bvec3:function(t,e,r){t.uniform3iv(e,r)},bvec4:function(t,e,r){t.uniform4iv(e,r)},sampler2D:function(t,e,r){t.uniform1iv(e,r)}};e.exports=o},{}],22:[function(t,e,r){e.exports={compileProgram:t("./compileProgram"),defaultValue:t("./defaultValue"),extractAttributes:t("./extractAttributes"),extractUniforms:t("./extractUniforms"),generateUniformAccessObject:t("./generateUniformAccessObject"),setPrecision:t("./setPrecision"),mapSize:t("./mapSize"),mapType:t("./mapType")}},{"./compileProgram":17,"./defaultValue":18,"./extractAttributes":19,"./extractUniforms":20,"./generateUniformAccessObject":21,"./mapSize":23,"./mapType":24,"./setPrecision":25}],23:[function(t,e,r){var n=function(t){return i[t]},i={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};e.exports=n},{}],24:[function(t,e,r){var n=function(t,e){if(!i){var r=Object.keys(o);i={};for(var n=0;n<r.length;++n){var s=r[n];i[t[s]]=o[s]}}return i[e]},i=null,o={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D"};e.exports=n},{}],25:[function(t,e,r){var n=function(t,e){return"precision"!==t.substring(0,9)?"precision "+e+" float;\n"+t:t};e.exports=n},{}],26:[function(t,e,r){function n(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function o(t){if(c===setTimeout)return setTimeout(t,0);if((c===n||!c)&&setTimeout)return c=setTimeout,setTimeout(t,0);try{return c(t,0)}catch(e){try{return c.call(null,t,0)}catch(e){return c.call(this,t,0)}}}function s(t){if(d===clearTimeout)return clearTimeout(t);if((d===i||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(t);try{return d(t)}catch(e){try{return d.call(null,t)}catch(e){return d.call(this,t)}}}function a(){g&&p&&(g=!1,p.length?v=p.concat(v):y=-1,v.length&&u())}function u(){if(!g){var t=o(a);g=!0;for(var e=v.length;e;){for(p=v,v=[];++y<e;)p&&p[y].run();y=-1,e=v.length}p=null,g=!1,s(t)}}function h(t,e){this.fun=t,this.array=e}function l(){}var c,d,f=e.exports={};!function(){try{c="function"==typeof setTimeout?setTimeout:n}catch(t){c=n}try{d="function"==typeof clearTimeout?clearTimeout:i}catch(t){d=i}}();var p,v=[],g=!1,y=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];v.push(new h(t,e)),1!==v.length||g||o(u)},h.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=l,f.addListener=l,f.once=l,f.off=l,f.removeListener=l,f.removeAllListeners=l,f.emit=l,f.prependListener=l,f.prependOnceListener=l,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},{}],27:[function(e,r,n){(function(e){!function(i){function o(t){throw new RangeError(L[t])}function s(t,e){for(var r=t.length,n=[];r--;)n[r]=e(t[r]);return n}function a(t,e){var r=t.split("@"),n="";return r.length>1&&(n=r[0]+"@",t=r[1]),t=t.replace(D,"."),n+s(t.split("."),e).join(".")}function u(t){for(var e,r,n=[],i=0,o=t.length;i<o;)e=t.charCodeAt(i++),e>=55296&&e<=56319&&i<o?(r=t.charCodeAt(i++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),i--)):n.push(e);return n}function h(t){return s(t,function(t){var e="";return t>65535&&(t-=65536,e+=F(t>>>10&1023|55296),t=56320|1023&t),e+=F(t)}).join("")}function l(t){return t-48<10?t-22:t-65<26?t-65:t-97<26?t-97:w}function c(t,e){return t+22+75*(t<26)-((0!=e)<<5)}function d(t,e,r){var n=0;for(t=r?B(t/M):t>>1,t+=B(t/e);t>N*S>>1;n+=w)t=B(t/N);return B(n+(N+1)*t/(t+O))}function f(t){var e,r,n,i,s,a,u,c,f,p,v=[],g=t.length,y=0,m=C,_=P;for(r=t.lastIndexOf(R),r<0&&(r=0),n=0;n<r;++n)t.charCodeAt(n)>=128&&o("not-basic"),v.push(t.charCodeAt(n));for(i=r>0?r+1:0;i<g;){for(s=y,a=1,u=w;i>=g&&o("invalid-input"),c=l(t.charCodeAt(i++)),(c>=w||c>B((T-y)/a))&&o("overflow"),y+=c*a,f=u<=_?E:u>=_+S?S:u-_,!(c<f);u+=w)p=w-f,a>B(T/p)&&o("overflow"),a*=p;e=v.length+1,_=d(y-s,e,0==s),B(y/e)>T-m&&o("overflow"),m+=B(y/e),y%=e,v.splice(y++,0,m)}return h(v)}function p(t){var e,r,n,i,s,a,h,l,f,p,v,g,y,m,_,b=[];for(t=u(t),g=t.length,e=C,r=0,s=P,a=0;a<g;++a)(v=t[a])<128&&b.push(F(v));for(n=i=b.length,i&&b.push(R);n<g;){for(h=T,a=0;a<g;++a)(v=t[a])>=e&&v<h&&(h=v);for(y=n+1,h-e>B((T-r)/y)&&o("overflow"),r+=(h-e)*y,e=h,a=0;a<g;++a)if(v=t[a],v<e&&++r>T&&o("overflow"),v==e){for(l=r,f=w;p=f<=s?E:f>=s+S?S:f-s,!(l<p);f+=w)_=l-p,m=w-p,b.push(F(c(p+_%m,0))),l=B(_/m);b.push(F(c(l,0))),s=d(r,y,n==i),r=0,++n}++r,++e}return b.join("")}function v(t){return a(t,function(t){return A.test(t)?f(t.slice(4).toLowerCase()):t})}function g(t){return a(t,function(t){return I.test(t)?"xn--"+p(t):t})}var y="object"==typeof n&&n&&!n.nodeType&&n,m="object"==typeof r&&r&&!r.nodeType&&r,_="object"==typeof e&&e;_.global!==_&&_.window!==_&&_.self!==_||(i=_);var b,x,T=2147483647,w=36,E=1,S=26,O=38,M=700,P=72,C=128,R="-",A=/^xn--/,I=/[^\x20-\x7E]/,D=/[\x2E\u3002\uFF0E\uFF61]/g,L={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},N=w-E,B=Math.floor,F=String.fromCharCode;if(b={version:"1.4.1",ucs2:{decode:u,encode:h},decode:f,encode:p,toASCII:g,toUnicode:v},"function"==typeof t&&"object"==typeof t.amd&&t.amd)t("punycode",function(){return b});else if(y&&m)if(r.exports==y)m.exports=b;else for(x in b)b.hasOwnProperty(x)&&(y[x]=b[x]);else i.punycode=b}(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],28:[function(t,e,r){"use strict";function n(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.exports=function(t,e,r,o){e=e||"&",r=r||"=";var s={};if("string"!=typeof t||0===t.length)return s;var a=/\+/g;t=t.split(e);var u=1e3;o&&"number"==typeof o.maxKeys&&(u=o.maxKeys);var h=t.length;u>0&&h>u&&(h=u);for(var l=0;l<h;++l){var c,d,f,p,v=t[l].replace(a,"%20"),g=v.indexOf(r);g>=0?(c=v.substr(0,g),d=v.substr(g+1)):(c=v,d=""),f=decodeURIComponent(c),p=decodeURIComponent(d),n(s,f)?i(s[f])?s[f].push(p):s[f]=[s[f],p]:s[f]=p}return s};var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{}],29:[function(t,e,r){"use strict";function n(t,e){if(t.map)return t.map(e);for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n));return r}var i=function(t){switch(typeof t){case"string":return t;case"boolean":return t?"true":"false";case"number":return isFinite(t)?t:"";default:return""}};e.exports=function(t,e,r,a){return e=e||"&",r=r||"=",null===t&&(t=void 0),"object"==typeof t?n(s(t),function(s){var a=encodeURIComponent(i(s))+r;return o(t[s])?n(t[s],function(t){return a+encodeURIComponent(i(t))}).join(e):a+encodeURIComponent(i(t[s]))}).join(e):a?encodeURIComponent(i(a))+r+encodeURIComponent(i(t)):""};var o=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},s=Object.keys||function(t){var e=[];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r);return e}},{}],30:[function(t,e,r){"use strict";r.decode=r.parse=t("./decode"),r.encode=r.stringify=t("./encode")},{"./decode":28,"./encode":29}],31:[function(t,e,r){"use strict";e.exports=function(t,e,r){var n,i=t.length;if(!(e>=i||0===r)){r=e+r>i?i-e:r;var o=i-r;for(n=e;n<o;++n)t[n]=t[n+r];t.length=o}}},{}],32:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=t("mini-signals"),u=n(a),h=t("parse-uri"),l=n(h),c=t("./async"),d=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(c),f=t("./Resource"),p=n(f),v=/(#[\w-]+)?$/,g=function(){function t(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;i(this,t),this.baseUrl=r,this.progress=0,this.loading=!1,this.defaultQueryString="",this._beforeMiddleware=[],this._afterMiddleware=[],this._resourcesParsing=[],this._boundLoadResource=function(t,r){return e._loadResource(t,r)},this._queue=d.queue(this._boundLoadResource,n),this._queue.pause(),this.resources={},this.onProgress=new u.default,this.onError=new u.default,this.onLoad=new u.default,this.onStart=new u.default,this.onComplete=new u.default}return t.prototype.add=function(t,e,r,n){if(Array.isArray(t)){for(var i=0;i<t.length;++i)this.add(t[i]);return this}if("object"===(void 0===t?"undefined":o(t))&&(n=e||t.callback||t.onComplete,r=t,e=t.url,t=t.name||t.key||t.url),"string"!=typeof e&&(n=r,r=e,e=t),"string"!=typeof e)throw new Error("No url passed to add resource to loader.");if("function"==typeof r&&(n=r,r=null),this.loading&&(!r||!r.parentResource))throw new Error("Cannot add resources while the loader is running.");if(this.resources[t])throw new Error('Resource named "'+t+'" already exists.');if(e=this._prepareUrl(e),this.resources[t]=new p.default(t,e,r),"function"==typeof n&&this.resources[t].onAfterMiddleware.once(n),this.loading){for(var s=r.parentResource,a=[],u=0;u<s.children.length;++u)s.children[u].isComplete||a.push(s.children[u]);var h=s.progressChunk*(a.length+1),l=h/(a.length+2);s.children.push(this.resources[t]),s.progressChunk=l;for(var c=0;c<a.length;++c)a[c].progressChunk=l;this.resources[t].progressChunk=l}return this._queue.push(this.resources[t]),this},t.prototype.pre=function(t){return this._beforeMiddleware.push(t),this},t.prototype.use=function(t){return this._afterMiddleware.push(t),this},t.prototype.reset=function(){this.progress=0,this.loading=!1,this._queue.kill(),this._queue.pause();for(var t in this.resources){var e=this.resources[t];e._onLoadBinding&&e._onLoadBinding.detach(),e.isLoading&&e.abort()}return this.resources={},this},t.prototype.load=function(t){if("function"==typeof t&&this.onComplete.once(t),this.loading)return this;if(this._queue.idle())this._onStart(),this._onComplete();else{for(var e=this._queue._tasks.length,r=100/e,n=0;n<this._queue._tasks.length;++n)this._queue._tasks[n].data.progressChunk=r;this._onStart(),this._queue.resume()}return this},t.prototype._prepareUrl=function(t){var e=(0,l.default)(t,{strictMode:!0}),r=void 0;if(r=e.protocol||!e.path||0===t.indexOf("//")?t:this.baseUrl.length&&this.baseUrl.lastIndexOf("/")!==this.baseUrl.length-1&&"/"!==t.charAt(0)?this.baseUrl+"/"+t:this.baseUrl+t,this.defaultQueryString){var n=v.exec(r)[0];r=r.substr(0,r.length-n.length),-1!==r.indexOf("?")?r+="&"+this.defaultQueryString:r+="?"+this.defaultQueryString,r+=n}return r},t.prototype._loadResource=function(t,e){var r=this;t._dequeue=e,d.eachSeries(this._beforeMiddleware,function(e,n){e.call(r,t,function(){n(t.isComplete?{}:null)})},function(){t.isComplete?r._onLoad(t):(t._onLoadBinding=t.onComplete.once(r._onLoad,r),t.load())},!0)},t.prototype._onStart=function(){this.progress=0,this.loading=!0,this.onStart.dispatch(this)},t.prototype._onComplete=function(){this.progress=100,this.loading=!1,this.onComplete.dispatch(this,this.resources)},t.prototype._onLoad=function(t){var e=this;t._onLoadBinding=null,this._resourcesParsing.push(t),t._dequeue(),d.eachSeries(this._afterMiddleware,function(r,n){r.call(e,t,n)},function(){t.onAfterMiddleware.dispatch(t),e.progress+=t.progressChunk,e.onProgress.dispatch(e,t),t.error?e.onError.dispatch(t.error,e,t):e.onLoad.dispatch(e,t),e._resourcesParsing.splice(e._resourcesParsing.indexOf(t),1),e._queue.idle()&&0===e._resourcesParsing.length&&e._onComplete()},!0)},s(t,[{key:"concurrency",get:function(){return this._queue.concurrency},set:function(t){this._queue.concurrency=t}}]),t}();r.default=g},{"./Resource":33,"./async":34,"mini-signals":5,"parse-uri":7}],33:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(){}function s(t,e,r){e&&0===e.indexOf(".")&&(e=e.substring(1)),e&&(t[e]=r)}function a(t){return t.toString().replace("object ","")}r.__esModule=!0;var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),h=t("parse-uri"),l=n(h),c=t("mini-signals"),d=n(c),f=!(!window.XDomainRequest||"withCredentials"in new XMLHttpRequest),p=null,v=function(){function t(e,r,n){if(i(this,t),"string"!=typeof e||"string"!=typeof r)throw new Error("Both name and url are required for constructing a resource.");n=n||{},this._flags=0,this._setFlag(t.STATUS_FLAGS.DATA_URL,0===r.indexOf("data:")),this.name=e,this.url=r,this.extension=this._getExtension(),this.data=null,this.crossOrigin=!0===n.crossOrigin?"anonymous":n.crossOrigin,this.loadType=n.loadType||this._determineLoadType(),this.xhrType=n.xhrType,this.metadata=n.metadata||{},this.error=null,this.xhr=null,this.children=[],this.type=t.TYPE.UNKNOWN,this.progressChunk=0,this._dequeue=o,this._onLoadBinding=null,this._boundComplete=this.complete.bind(this),this._boundOnError=this._onError.bind(this),this._boundOnProgress=this._onProgress.bind(this),this._boundXhrOnError=this._xhrOnError.bind(this),this._boundXhrOnAbort=this._xhrOnAbort.bind(this),this._boundXhrOnLoad=this._xhrOnLoad.bind(this),this._boundXdrOnTimeout=this._xdrOnTimeout.bind(this),this.onStart=new d.default,this.onProgress=new d.default,this.onComplete=new d.default,this.onAfterMiddleware=new d.default}return t.setExtensionLoadType=function(e,r){s(t._loadTypeMap,e,r)},t.setExtensionXhrType=function(e,r){s(t._xhrTypeMap,e,r)},t.prototype.complete=function(){if(this.data&&this.data.removeEventListener&&(this.data.removeEventListener("error",this._boundOnError,!1),this.data.removeEventListener("load",this._boundComplete,!1),this.data.removeEventListener("progress",this._boundOnProgress,!1),this.data.removeEventListener("canplaythrough",this._boundComplete,!1)),this.xhr&&(this.xhr.removeEventListener?(this.xhr.removeEventListener("error",this._boundXhrOnError,!1),this.xhr.removeEventListener("abort",this._boundXhrOnAbort,!1),this.xhr.removeEventListener("progress",this._boundOnProgress,!1),this.xhr.removeEventListener("load",this._boundXhrOnLoad,!1)):(this.xhr.onerror=null,this.xhr.ontimeout=null,this.xhr.onprogress=null,this.xhr.onload=null)),this.isComplete)throw new Error("Complete called again for an already completed resource.");this._setFlag(t.STATUS_FLAGS.COMPLETE,!0),this._setFlag(t.STATUS_FLAGS.LOADING,!1),this.onComplete.dispatch(this)},t.prototype.abort=function(e){if(!this.error){if(this.error=new Error(e),this.xhr)this.xhr.abort();else if(this.xdr)this.xdr.abort();else if(this.data)if(this.data.src)this.data.src=t.EMPTY_GIF;else for(;this.data.firstChild;)this.data.removeChild(this.data.firstChild);this.complete()}},t.prototype.load=function(e){var r=this;if(!this.isLoading){if(this.isComplete)return void(e&&setTimeout(function(){return e(r)},1));switch(e&&this.onComplete.once(e),this._setFlag(t.STATUS_FLAGS.LOADING,!0),this.onStart.dispatch(this),!1!==this.crossOrigin&&"string"==typeof this.crossOrigin||(this.crossOrigin=this._determineCrossOrigin(this.url)),this.loadType){case t.LOAD_TYPE.IMAGE:this.type=t.TYPE.IMAGE,this._loadElement("image");break;case t.LOAD_TYPE.AUDIO:this.type=t.TYPE.AUDIO,this._loadSourceElement("audio");break;case t.LOAD_TYPE.VIDEO:this.type=t.TYPE.VIDEO,this._loadSourceElement("video");break;case t.LOAD_TYPE.XHR:default:f&&this.crossOrigin?this._loadXdr():this._loadXhr()}}},t.prototype._hasFlag=function(t){return!!(this._flags&t)},t.prototype._setFlag=function(t,e){this._flags=e?this._flags|t:this._flags&~t},t.prototype._loadElement=function(t){this.metadata.loadElement?this.data=this.metadata.loadElement:"image"===t&&void 0!==window.Image?this.data=new Image:this.data=document.createElement(t),this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),this.metadata.skipSource||(this.data.src=this.url),this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1)},t.prototype._loadSourceElement=function(t){if(this.metadata.loadElement?this.data=this.metadata.loadElement:"audio"===t&&void 0!==window.Audio?this.data=new Audio:this.data=document.createElement(t),null===this.data)return void this.abort("Unsupported element: "+t);if(!this.metadata.skipSource)if(navigator.isCocoonJS)this.data.src=Array.isArray(this.url)?this.url[0]:this.url;else if(Array.isArray(this.url))for(var e=this.metadata.mimeType,r=0;r<this.url.length;++r)this.data.appendChild(this._createSource(t,this.url[r],Array.isArray(e)?e[r]:e));else{var n=this.metadata.mimeType;this.data.appendChild(this._createSource(t,this.url,Array.isArray(n)?n[0]:n))}this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.data.addEventListener("canplaythrough",this._boundComplete,!1),this.data.load()},t.prototype._loadXhr=function(){"string"!=typeof this.xhrType&&(this.xhrType=this._determineXhrType());var e=this.xhr=new XMLHttpRequest;e.open("GET",this.url,!0),this.xhrType===t.XHR_RESPONSE_TYPE.JSON||this.xhrType===t.XHR_RESPONSE_TYPE.DOCUMENT?e.responseType=t.XHR_RESPONSE_TYPE.TEXT:e.responseType=this.xhrType,e.addEventListener("error",this._boundXhrOnError,!1),e.addEventListener("abort",this._boundXhrOnAbort,!1),e.addEventListener("progress",this._boundOnProgress,!1),e.addEventListener("load",this._boundXhrOnLoad,!1),e.send()},t.prototype._loadXdr=function(){"string"!=typeof this.xhrType&&(this.xhrType=this._determineXhrType());var t=this.xhr=new XDomainRequest;t.timeout=5e3,t.onerror=this._boundXhrOnError,t.ontimeout=this._boundXdrOnTimeout,t.onprogress=this._boundOnProgress,t.onload=this._boundXhrOnLoad,t.open("GET",this.url,!0),setTimeout(function(){return t.send()},1)},t.prototype._createSource=function(t,e,r){r||(r=t+"/"+this._getExtension(e));var n=document.createElement("source");return n.src=e,n.type=r,n},t.prototype._onError=function(t){this.abort("Failed to load element using: "+t.target.nodeName)},t.prototype._onProgress=function(t){t&&t.lengthComputable&&this.onProgress.dispatch(this,t.loaded/t.total)},t.prototype._xhrOnError=function(){var t=this.xhr;this.abort(a(t)+" Request failed. Status: "+t.status+', text: "'+t.statusText+'"')},t.prototype._xhrOnAbort=function(){this.abort(a(this.xhr)+" Request was aborted by the user.")},t.prototype._xdrOnTimeout=function(){this.abort(a(this.xhr)+" Request timed out.")},t.prototype._xhrOnLoad=function(){var e=this.xhr,r="",n=void 0===e.status?200:e.status;if(""!==e.responseType&&"text"!==e.responseType&&void 0!==e.responseType||(r=e.responseText),0===n&&(r.length>0||e.responseType===t.XHR_RESPONSE_TYPE.BUFFER)?n=200:1223===n&&(n=204),2!=(n/100|0))return void this.abort("["+e.status+"] "+e.statusText+": "+e.responseURL);if(this.xhrType===t.XHR_RESPONSE_TYPE.TEXT)this.data=r,this.type=t.TYPE.TEXT;else if(this.xhrType===t.XHR_RESPONSE_TYPE.JSON)try{this.data=JSON.parse(r),this.type=t.TYPE.JSON}catch(t){return void this.abort("Error trying to parse loaded json: "+t)}else if(this.xhrType===t.XHR_RESPONSE_TYPE.DOCUMENT)try{if(window.DOMParser){var i=new DOMParser;this.data=i.parseFromString(r,"text/xml")}else{var o=document.createElement("div");o.innerHTML=r,this.data=o}this.type=t.TYPE.XML}catch(t){return void this.abort("Error trying to parse loaded xml: "+t)}else this.data=e.response||r;this.complete()},t.prototype._determineCrossOrigin=function(t,e){if(0===t.indexOf("data:"))return"";e=e||window.location,p||(p=document.createElement("a")),p.href=t,t=(0,l.default)(p.href,{strictMode:!0});var r=!t.port&&""===e.port||t.port===e.port,n=t.protocol?t.protocol+":":"";return t.host===e.hostname&&r&&n===e.protocol?"":"anonymous"},t.prototype._determineXhrType=function(){return t._xhrTypeMap[this.extension]||t.XHR_RESPONSE_TYPE.TEXT},t.prototype._determineLoadType=function(){return t._loadTypeMap[this.extension]||t.LOAD_TYPE.XHR},t.prototype._getExtension=function(){var t=this.url,e="";if(this.isDataUrl){var r=t.indexOf("/");e=t.substring(r+1,t.indexOf(";",r))}else{var n=t.indexOf("?"),i=t.indexOf("#"),o=Math.min(n>-1?n:t.length,i>-1?i:t.length);t=t.substring(0,o),e=t.substring(t.lastIndexOf(".")+1)}return e.toLowerCase()},t.prototype._getMimeFromXhrType=function(e){switch(e){case t.XHR_RESPONSE_TYPE.BUFFER:return"application/octet-binary";case t.XHR_RESPONSE_TYPE.BLOB:return"application/blob";case t.XHR_RESPONSE_TYPE.DOCUMENT:return"application/xml";case t.XHR_RESPONSE_TYPE.JSON:return"application/json";case t.XHR_RESPONSE_TYPE.DEFAULT:case t.XHR_RESPONSE_TYPE.TEXT:default:return"text/plain"}},u(t,[{key:"isDataUrl",get:function(){return this._hasFlag(t.STATUS_FLAGS.DATA_URL)}},{key:"isComplete",get:function(){return this._hasFlag(t.STATUS_FLAGS.COMPLETE)}},{key:"isLoading",get:function(){return this._hasFlag(t.STATUS_FLAGS.LOADING)}}]),t}();r.default=v,v.STATUS_FLAGS={NONE:0,DATA_URL:1,COMPLETE:2,LOADING:4},v.TYPE={UNKNOWN:0,JSON:1,XML:2,IMAGE:3,AUDIO:4,VIDEO:5,TEXT:6},v.LOAD_TYPE={XHR:1,IMAGE:2,AUDIO:3,VIDEO:4},v.XHR_RESPONSE_TYPE={DEFAULT:"text",BUFFER:"arraybuffer",BLOB:"blob",DOCUMENT:"document",JSON:"json",TEXT:"text"},v._loadTypeMap={gif:v.LOAD_TYPE.IMAGE,png:v.LOAD_TYPE.IMAGE,bmp:v.LOAD_TYPE.IMAGE,jpg:v.LOAD_TYPE.IMAGE,jpeg:v.LOAD_TYPE.IMAGE,tif:v.LOAD_TYPE.IMAGE,tiff:v.LOAD_TYPE.IMAGE,webp:v.LOAD_TYPE.IMAGE,tga:v.LOAD_TYPE.IMAGE,svg:v.LOAD_TYPE.IMAGE,"svg+xml":v.LOAD_TYPE.IMAGE,mp3:v.LOAD_TYPE.AUDIO,ogg:v.LOAD_TYPE.AUDIO,wav:v.LOAD_TYPE.AUDIO,mp4:v.LOAD_TYPE.VIDEO,webm:v.LOAD_TYPE.VIDEO},v._xhrTypeMap={xhtml:v.XHR_RESPONSE_TYPE.DOCUMENT,html:v.XHR_RESPONSE_TYPE.DOCUMENT,htm:v.XHR_RESPONSE_TYPE.DOCUMENT,xml:v.XHR_RESPONSE_TYPE.DOCUMENT,tmx:v.XHR_RESPONSE_TYPE.DOCUMENT,svg:v.XHR_RESPONSE_TYPE.DOCUMENT,tsx:v.XHR_RESPONSE_TYPE.DOCUMENT,gif:v.XHR_RESPONSE_TYPE.BLOB,png:v.XHR_RESPONSE_TYPE.BLOB,bmp:v.XHR_RESPONSE_TYPE.BLOB,jpg:v.XHR_RESPONSE_TYPE.BLOB,jpeg:v.XHR_RESPONSE_TYPE.BLOB,tif:v.XHR_RESPONSE_TYPE.BLOB,tiff:v.XHR_RESPONSE_TYPE.BLOB,webp:v.XHR_RESPONSE_TYPE.BLOB,tga:v.XHR_RESPONSE_TYPE.BLOB,json:v.XHR_RESPONSE_TYPE.JSON,text:v.XHR_RESPONSE_TYPE.TEXT,txt:v.XHR_RESPONSE_TYPE.TEXT,ttf:v.XHR_RESPONSE_TYPE.BUFFER,otf:v.XHR_RESPONSE_TYPE.BUFFER},v.EMPTY_GIF="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="},{"mini-signals":5,"parse-uri":7}],34:[function(t,e,r){"use strict";function n(){}function i(t,e,r,n){var i=0,o=t.length;!function s(a){if(a||i===o)return void(r&&r(a));n?setTimeout(function(){e(t[i++],s)},1):e(t[i++],s)}()}function o(t){return function(){if(null===t)throw new Error("Callback was already called.");var e=t;t=null,e.apply(this,arguments)}}function s(t,e){function r(t,e,r){if(null!=r&&"function"!=typeof r)throw new Error("task callback must be a function");if(a.started=!0,null==t&&a.idle())return void setTimeout(function(){return a.drain()},1);var i={data:t,callback:"function"==typeof r?r:n};e?a._tasks.unshift(i):a._tasks.push(i),setTimeout(function(){return a.process()},1)}function i(t){return function(){s-=1,t.callback.apply(t,arguments),null!=arguments[0]&&a.error(arguments[0],t.data),s<=a.concurrency-a.buffer&&a.unsaturated(),a.idle()&&a.drain(),a.process()}}if(null==e)e=1;else if(0===e)throw new Error("Concurrency must not be zero");var s=0,a={_tasks:[],concurrency:e,saturated:n,unsaturated:n,buffer:e/4,empty:n,drain:n,error:n,started:!1,paused:!1,push:function(t,e){r(t,!1,e)},kill:function(){s=0,a.drain=n,a.started=!1,a._tasks=[]},unshift:function(t,e){r(t,!0,e)},process:function(){for(;!a.paused&&s<a.concurrency&&a._tasks.length;){var e=a._tasks.shift();0===a._tasks.length&&a.empty(),s+=1,s===a.concurrency&&a.saturated(),t(e.data,o(i(e)))}},length:function(){return a._tasks.length},running:function(){return s},idle:function(){return a._tasks.length+s===0},pause:function(){!0!==a.paused&&(a.paused=!0)},resume:function(){if(!1!==a.paused){a.paused=!1;for(var t=1;t<=a.concurrency;t++)a.process()}}};return a}r.__esModule=!0,r.eachSeries=i,r.queue=s},{}],35:[function(t,e,r){"use strict";function n(t){for(var e="",r=0;r<t.length;){for(var n=[0,0,0],o=[0,0,0,0],s=0;s<n.length;++s)r<t.length?n[s]=255&t.charCodeAt(r++):n[s]=0;o[0]=n[0]>>2,o[1]=(3&n[0])<<4|n[1]>>4,o[2]=(15&n[1])<<2|n[2]>>6,o[3]=63&n[2];switch(r-(t.length-1)){case 2:o[3]=64,o[2]=64;break;case 1:o[3]=64}for(var a=0;a<o.length;++a)e+=i.charAt(o[a])}return e}r.__esModule=!0,r.encodeBinary=n;var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="},{}],36:[function(t,e,r){"use strict";var n=t("./Loader").default,i=t("./Resource").default,o=t("./async"),s=t("./b64");n.Resource=i,n.async=o,n.base64=s,e.exports=n,e.exports.default=n},{"./Loader":32,"./Resource":33,"./async":34,"./b64":35}],37:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(){return function(t,e){if(!t.data)return void e();if(t.xhr&&t.xhrType===a.default.XHR_RESPONSE_TYPE.BLOB)if(window.Blob&&"string"!=typeof t.data){if(0===t.data.type.indexOf("image")){var r=function(){var r=l.createObjectURL(t.data);return t.blob=t.data,t.data=new Image,t.data.src=r,t.type=a.default.TYPE.IMAGE,t.data.onload=function(){l.revokeObjectURL(r),t.data.onload=null,e()},{v:void 0}}();if("object"===(void 0===r?"undefined":o(r)))return r.v}}else{var n=t.xhr.getResponseHeader("content-type");if(n&&0===n.indexOf("image"))return t.data=new Image,t.data.src="data:"+n+";base64,"+h.default.encodeBinary(t.xhr.responseText),t.type=a.default.TYPE.IMAGE,void(t.data.onload=function(){t.data.onload=null,e()})}e()}}r.__esModule=!0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};r.blobMiddlewareFactory=i;var s=t("../../Resource"),a=n(s),u=t("../../b64"),h=n(u),l=window.URL||window.webkitURL},{"../../Resource":33,"../../b64":35}],38:[function(t,e,r){"use strict";function n(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function i(t,e,r){if(t&&h.isObject(t)&&t instanceof n)return t;var i=new n;return i.parse(t,e,r),i}function o(t){return h.isString(t)&&(t=i(t)),t instanceof n?t.format():n.prototype.format.call(t)}function s(t,e){return i(t,!1,!0).resolve(e)}function a(t,e){return t?i(t,!1,!0).resolveObject(e):e}var u=t("punycode"),h=t("./util");r.parse=i,r.resolve=s,r.resolveObject=a,r.format=o,r.Url=n;var l=/^([a-z0-9.+-]+:)/i,c=/:[0-9]*$/,d=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,f=["<",">",'"',"`"," ","\r","\n","\t"],p=["{","}","|","\\","^","`"].concat(f),v=["'"].concat(p),g=["%","/","?",";","#"].concat(v),y=["/","?","#"],m=/^[+a-z0-9A-Z_-]{0,63}$/,_=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,b={javascript:!0,"javascript:":!0},x={javascript:!0,"javascript:":!0},T={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},w=t("querystring");n.prototype.parse=function(t,e,r){if(!h.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var n=t.indexOf("?"),i=-1!==n&&n<t.indexOf("#")?"?":"#",o=t.split(i),s=/\\/g;o[0]=o[0].replace(s,"/"),t=o.join(i);var a=t;if(a=a.trim(),!r&&1===t.split("#").length){var c=d.exec(a);if(c)return this.path=a,this.href=a,this.pathname=c[1],c[2]?(this.search=c[2],this.query=e?w.parse(this.search.substr(1)):this.search.substr(1)):e&&(this.search="",this.query={}),this}var f=l.exec(a);if(f){f=f[0];var p=f.toLowerCase();this.protocol=p,a=a.substr(f.length)}if(r||f||a.match(/^\/\/[^@\/]+@[^@\/]+/)){var E="//"===a.substr(0,2);!E||f&&x[f]||(a=a.substr(2),this.slashes=!0)}if(!x[f]&&(E||f&&!T[f])){for(var S=-1,O=0;O<y.length;O++){var M=a.indexOf(y[O]);-1!==M&&(-1===S||M<S)&&(S=M)}var P,C;C=-1===S?a.lastIndexOf("@"):a.lastIndexOf("@",S),-1!==C&&(P=a.slice(0,C),a=a.slice(C+1),this.auth=decodeURIComponent(P)),S=-1;for(var O=0;O<g.length;O++){var M=a.indexOf(g[O]);-1!==M&&(-1===S||M<S)&&(S=M)}-1===S&&(S=a.length),this.host=a.slice(0,S),a=a.slice(S),this.parseHost(),this.hostname=this.hostname||"";var R="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!R)for(var A=this.hostname.split(/\./),O=0,I=A.length;O<I;O++){var D=A[O];if(D&&!D.match(m)){for(var L="",N=0,B=D.length;N<B;N++)D.charCodeAt(N)>127?L+="x":L+=D[N];if(!L.match(m)){var F=A.slice(0,O),k=A.slice(O+1),j=D.match(_);j&&(F.push(j[1]),k.unshift(j[2])),k.length&&(a="/"+k.join(".")+a),this.hostname=F.join(".");break}}}this.hostname.length>255?this.hostname="":this.hostname=this.hostname.toLowerCase(),R||(this.hostname=u.toASCII(this.hostname));var U=this.port?":"+this.port:"",X=this.hostname||"";this.host=X+U,this.href+=this.host,R&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==a[0]&&(a="/"+a))}if(!b[p])for(var O=0,I=v.length;O<I;O++){var G=v[O];if(-1!==a.indexOf(G)){var W=encodeURIComponent(G);W===G&&(W=escape(G)),a=a.split(G).join(W)}}var H=a.indexOf("#");-1!==H&&(this.hash=a.substr(H),a=a.slice(0,H));var V=a.indexOf("?");if(-1!==V?(this.search=a.substr(V),this.query=a.substr(V+1),e&&(this.query=w.parse(this.query)),a=a.slice(0,V)):e&&(this.search="",this.query={}),a&&(this.pathname=a),
T[p]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var U=this.pathname||"",Y=this.search||"";this.path=U+Y}return this.href=this.format(),this},n.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var e=this.protocol||"",r=this.pathname||"",n=this.hash||"",i=!1,o="";this.host?i=t+this.host:this.hostname&&(i=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&h.isObject(this.query)&&Object.keys(this.query).length&&(o=w.stringify(this.query));var s=this.search||o&&"?"+o||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||T[e])&&!1!==i?(i="//"+(i||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):i||(i=""),n&&"#"!==n.charAt(0)&&(n="#"+n),s&&"?"!==s.charAt(0)&&(s="?"+s),r=r.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),s=s.replace("#","%23"),e+i+r+s+n},n.prototype.resolve=function(t){return this.resolveObject(i(t,!1,!0)).format()},n.prototype.resolveObject=function(t){if(h.isString(t)){var e=new n;e.parse(t,!1,!0),t=e}for(var r=new n,i=Object.keys(this),o=0;o<i.length;o++){var s=i[o];r[s]=this[s]}if(r.hash=t.hash,""===t.href)return r.href=r.format(),r;if(t.slashes&&!t.protocol){for(var a=Object.keys(t),u=0;u<a.length;u++){var l=a[u];"protocol"!==l&&(r[l]=t[l])}return T[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r}if(t.protocol&&t.protocol!==r.protocol){if(!T[t.protocol]){for(var c=Object.keys(t),d=0;d<c.length;d++){var f=c[d];r[f]=t[f]}return r.href=r.format(),r}if(r.protocol=t.protocol,t.host||x[t.protocol])r.pathname=t.pathname;else{for(var p=(t.pathname||"").split("/");p.length&&!(t.host=p.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==p[0]&&p.unshift(""),p.length<2&&p.unshift(""),r.pathname=p.join("/")}if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var v=r.pathname||"",g=r.search||"";r.path=v+g}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var y=r.pathname&&"/"===r.pathname.charAt(0),m=t.host||t.pathname&&"/"===t.pathname.charAt(0),_=m||y||r.host&&t.pathname,b=_,w=r.pathname&&r.pathname.split("/")||[],p=t.pathname&&t.pathname.split("/")||[],E=r.protocol&&!T[r.protocol];if(E&&(r.hostname="",r.port=null,r.host&&(""===w[0]?w[0]=r.host:w.unshift(r.host)),r.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===p[0]?p[0]=t.host:p.unshift(t.host)),t.host=null),_=_&&(""===p[0]||""===w[0])),m)r.host=t.host||""===t.host?t.host:r.host,r.hostname=t.hostname||""===t.hostname?t.hostname:r.hostname,r.search=t.search,r.query=t.query,w=p;else if(p.length)w||(w=[]),w.pop(),w=w.concat(p),r.search=t.search,r.query=t.query;else if(!h.isNullOrUndefined(t.search)){if(E){r.hostname=r.host=w.shift();var S=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");S&&(r.auth=S.shift(),r.host=r.hostname=S.shift())}return r.search=t.search,r.query=t.query,h.isNull(r.pathname)&&h.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!w.length)return r.pathname=null,r.search?r.path="/"+r.search:r.path=null,r.href=r.format(),r;for(var O=w.slice(-1)[0],M=(r.host||t.host||w.length>1)&&("."===O||".."===O)||""===O,P=0,C=w.length;C>=0;C--)O=w[C],"."===O?w.splice(C,1):".."===O?(w.splice(C,1),P++):P&&(w.splice(C,1),P--);if(!_&&!b)for(;P--;P)w.unshift("..");!_||""===w[0]||w[0]&&"/"===w[0].charAt(0)||w.unshift(""),M&&"/"!==w.join("/").substr(-1)&&w.push("");var R=""===w[0]||w[0]&&"/"===w[0].charAt(0);if(E){r.hostname=r.host=R?"":w.length?w.shift():"";var S=!!(r.host&&r.host.indexOf("@")>0)&&r.host.split("@");S&&(r.auth=S.shift(),r.host=r.hostname=S.shift())}return _=_||r.host&&w.length,_&&!R&&w.unshift(""),w.length?r.pathname=w.join("/"):(r.pathname=null,r.path=null),h.isNull(r.pathname)&&h.isNull(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r},n.prototype.parseHost=function(){var t=this.host,e=c.exec(t);e&&(e=e[0],":"!==e&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},{"./util":39,punycode:27,querystring:30}],39:[function(t,e,r){"use strict";e.exports={isString:function(t){return"string"==typeof t},isObject:function(t){return"object"==typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}},{}],40:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=t("../core"),s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(o),a=t("ismobilejs"),u=n(a),h=t("./accessibleTarget"),l=n(h);s.utils.mixins.delayMixin(s.DisplayObject.prototype,l.default);var c=100,d=0,f=0,p=2,v=function(){function t(e){i(this,t),!u.default.tablet&&!u.default.phone||navigator.isCocoonJS||this.createTouchHook();var r=document.createElement("div");r.style.width=c+"px",r.style.height=c+"px",r.style.position="absolute",r.style.top=d+"px",r.style.left=f+"px",r.style.zIndex=p,this.div=r,this.pool=[],this.renderId=0,this.debug=!1,this.renderer=e,this.children=[],this._onKeyDown=this._onKeyDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),this.isActive=!1,this.isMobileAccessabillity=!1,window.addEventListener("keydown",this._onKeyDown,!1)}return t.prototype.createTouchHook=function(){var t=this,e=document.createElement("button");e.style.width="1px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.left="-1000px",e.style.zIndex=2,e.style.backgroundColor="#FF0000",e.title="HOOK DIV",e.addEventListener("focus",function(){t.isMobileAccessabillity=!0,t.activate(),document.body.removeChild(e)}),document.body.appendChild(e)},t.prototype.activate=function(){this.isActive||(this.isActive=!0,window.document.addEventListener("mousemove",this._onMouseMove,!0),window.removeEventListener("keydown",this._onKeyDown,!1),this.renderer.on("postrender",this.update,this),this.renderer.view.parentNode&&this.renderer.view.parentNode.appendChild(this.div))},t.prototype.deactivate=function(){this.isActive&&!this.isMobileAccessabillity&&(this.isActive=!1,window.document.removeEventListener("mousemove",this._onMouseMove),window.addEventListener("keydown",this._onKeyDown,!1),this.renderer.off("postrender",this.update),this.div.parentNode&&this.div.parentNode.removeChild(this.div))},t.prototype.updateAccessibleObjects=function(t){if(t.visible){t.accessible&&t.interactive&&(t._accessibleActive||this.addChild(t),t.renderId=this.renderId);for(var e=t.children,r=0;r<e.length;r++)this.updateAccessibleObjects(e[r])}},t.prototype.update=function(){if(this.renderer.renderingToScreen){this.updateAccessibleObjects(this.renderer._lastObjectRendered);var t=this.renderer.view.getBoundingClientRect(),e=t.width/this.renderer.width,r=t.height/this.renderer.height,n=this.div;n.style.left=t.left+"px",n.style.top=t.top+"px",n.style.width=this.renderer.width+"px",n.style.height=this.renderer.height+"px";for(var i=0;i<this.children.length;i++){var o=this.children[i];if(o.renderId!==this.renderId)o._accessibleActive=!1,s.utils.removeItems(this.children,i,1),this.div.removeChild(o._accessibleDiv),this.pool.push(o._accessibleDiv),o._accessibleDiv=null,i--,0===this.children.length&&this.deactivate();else{n=o._accessibleDiv;var a=o.hitArea,u=o.worldTransform;o.hitArea?(n.style.left=(u.tx+a.x*u.a)*e+"px",n.style.top=(u.ty+a.y*u.d)*r+"px",n.style.width=a.width*u.a*e+"px",n.style.height=a.height*u.d*r+"px"):(a=o.getBounds(),this.capHitArea(a),n.style.left=a.x*e+"px",n.style.top=a.y*r+"px",n.style.width=a.width*e+"px",n.style.height=a.height*r+"px",n.title!==o.accessibleTitle&&null!==o.accessibleTitle&&(n.title=o.accessibleTitle),n.getAttribute("aria-label")!==o.accessibleHint&&null!==o.accessibleHint&&n.setAttribute("aria-label",o.accessibleHint))}}this.renderId++}},t.prototype.capHitArea=function(t){t.x<0&&(t.width+=t.x,t.x=0),t.y<0&&(t.height+=t.y,t.y=0),t.x+t.width>this.renderer.width&&(t.width=this.renderer.width-t.x),t.y+t.height>this.renderer.height&&(t.height=this.renderer.height-t.y)},t.prototype.addChild=function(t){var e=this.pool.pop();e||(e=document.createElement("button"),e.style.width=c+"px",e.style.height=c+"px",e.style.backgroundColor=this.debug?"rgba(255,0,0,0.5)":"transparent",e.style.position="absolute",e.style.zIndex=p,e.style.borderStyle="none",navigator.userAgent.toLowerCase().indexOf("chrome")>-1?e.setAttribute("aria-live","off"):e.setAttribute("aria-live","polite"),navigator.userAgent.match(/rv:.*Gecko\//)?e.setAttribute("aria-relevant","additions"):e.setAttribute("aria-relevant","text"),e.addEventListener("click",this._onClick.bind(this)),e.addEventListener("focus",this._onFocus.bind(this)),e.addEventListener("focusout",this._onFocusOut.bind(this))),t.accessibleTitle&&null!==t.accessibleTitle?e.title=t.accessibleTitle:t.accessibleHint&&null!==t.accessibleHint||(e.title="displayObject "+t.tabIndex),t.accessibleHint&&null!==t.accessibleHint&&e.setAttribute("aria-label",t.accessibleHint),t._accessibleActive=!0,t._accessibleDiv=e,e.displayObject=t,this.children.push(t),this.div.appendChild(t._accessibleDiv),t._accessibleDiv.tabIndex=t.tabIndex},t.prototype._onClick=function(t){var e=this.renderer.plugins.interaction;e.dispatchEvent(t.target.displayObject,"click",e.eventData)},t.prototype._onFocus=function(t){t.target.getAttribute("aria-live","off")||t.target.setAttribute("aria-live","assertive");var e=this.renderer.plugins.interaction;e.dispatchEvent(t.target.displayObject,"mouseover",e.eventData)},t.prototype._onFocusOut=function(t){t.target.getAttribute("aria-live","off")||t.target.setAttribute("aria-live","polite");var e=this.renderer.plugins.interaction;e.dispatchEvent(t.target.displayObject,"mouseout",e.eventData)},t.prototype._onKeyDown=function(t){9===t.keyCode&&this.activate()},t.prototype._onMouseMove=function(t){0===t.movementX&&0===t.movementY||this.deactivate()},t.prototype.destroy=function(){this.div=null;for(var t=0;t<this.children.length;t++)this.children[t].div=null;window.document.removeEventListener("mousemove",this._onMouseMove),window.removeEventListener("keydown",this._onKeyDown),this.pool=null,this.children=null,this.renderer=null},t}();r.default=v,s.WebGLRenderer.registerPlugin("accessibility",v),s.CanvasRenderer.registerPlugin("accessibility",v)},{"../core":65,"./accessibleTarget":41,ismobilejs:4}],41:[function(t,e,r){"use strict";r.__esModule=!0,r.default={accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:!1,_accessibleDiv:!1}},{}],42:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t("./accessibleTarget");Object.defineProperty(r,"accessibleTarget",{enumerable:!0,get:function(){return n(i).default}});var o=t("./AccessibilityManager");Object.defineProperty(r,"AccessibilityManager",{enumerable:!0,get:function(){return n(o).default}})},{"./AccessibilityManager":40,"./accessibleTarget":41}],43:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=t("./autoDetectRenderer"),a=t("./display/Container"),u=n(a),h=t("./ticker"),l=t("./settings"),c=n(l),d=t("./const"),f=function(){function t(e,r,n,o,a){i(this,t),"number"==typeof e&&(e=Object.assign({width:e,height:r||c.default.RENDER_OPTIONS.height,forceCanvas:!!o,sharedTicker:!!a},n)),this._options=e=Object.assign({autoStart:!0,sharedTicker:!1,forceCanvas:!1,sharedLoader:!1},e),this.renderer=(0,s.autoDetectRenderer)(e),this.stage=new u.default,this._ticker=null,this.ticker=e.sharedTicker?h.shared:new h.Ticker,e.autoStart&&this.start()}return t.prototype.render=function(){this.renderer.render(this.stage)},t.prototype.stop=function(){this._ticker.stop()},t.prototype.start=function(){this._ticker.start()},t.prototype.destroy=function(t,e){if(this._ticker){var r=this._ticker;this.ticker=null,r.destroy()}this.stage.destroy(e),this.stage=null,this.renderer.destroy(t),this.renderer=null,this._options=null},o(t,[{key:"ticker",set:function(t){this._ticker&&this._ticker.remove(this.render,this),this._ticker=t,t&&t.add(this.render,this,d.UPDATE_PRIORITY.LOW)},get:function(){return this._ticker}},{key:"view",get:function(){return this.renderer.view}},{key:"screen",get:function(){return this.renderer.screen}}]),t}();r.default=f},{"./autoDetectRenderer":45,"./const":46,"./display/Container":48,"./settings":101,"./ticker":121}],44:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){if(t instanceof Array){if("precision"!==t[0].substring(0,9)){var r=t.slice(0);return r.unshift("precision "+e+" float;"),r}}else if("precision"!==t.trim().substring(0,9))return"precision "+e+" float;\n"+t;return t}r.__esModule=!0;var a=t("pixi-gl-core"),u=t("./settings"),h=function(t){return t&&t.__esModule?t:{default:t}}(u),l=function(t){function e(r,o,a,u,l){return n(this,e),i(this,t.call(this,r,s(o,l||h.default.PRECISION_VERTEX),s(a,l||h.default.PRECISION_FRAGMENT),void 0,u))}return o(e,t),e}(a.GLShader);r.default=l},{"./settings":101,"pixi-gl-core":15}],45:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e,r,n){var i=t&&t.forceCanvas;return void 0!==n&&(i=n),!i&&s.isWebGLSupported()?new l.default(t,e,r):new u.default(t,e,r)}r.__esModule=!0,r.autoDetectRenderer=i;var o=t("./utils"),s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(o),a=t("./renderers/canvas/CanvasRenderer"),u=n(a),h=t("./renderers/webgl/WebGLRenderer"),l=n(h)},{"./renderers/canvas/CanvasRenderer":77,"./renderers/webgl/WebGLRenderer":84,"./utils":125}],46:[function(t,e,r){"use strict";r.__esModule=!0;r.VERSION="4.8.1",r.PI_2=2*Math.PI,r.RAD_TO_DEG=180/Math.PI,r.DEG_TO_RAD=Math.PI/180,r.RENDERER_TYPE={UNKNOWN:0,WEBGL:1,CANVAS:2},r.BLEND_MODES={NORMAL:0,ADD:1,MULTIPLY:2,SCREEN:3,OVERLAY:4,DARKEN:5,LIGHTEN:6,COLOR_DODGE:7,COLOR_BURN:8,HARD_LIGHT:9,SOFT_LIGHT:10,DIFFERENCE:11,EXCLUSION:12,HUE:13,SATURATION:14,COLOR:15,LUMINOSITY:16,NORMAL_NPM:17,ADD_NPM:18,SCREEN_NPM:19},r.DRAW_MODES={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},r.SCALE_MODES={LINEAR:0,NEAREST:1},r.WRAP_MODES={CLAMP:0,REPEAT:1,MIRRORED_REPEAT:2},r.GC_MODES={AUTO:0,MANUAL:1},r.URL_FILE_EXTENSION=/\.(\w{3,4})(?:$|\?|#)/i,r.DATA_URI=/^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i,r.SVG_SIZE=/<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i,r.SHAPES={POLY:0,RECT:1,CIRC:2,ELIP:3,RREC:4},r.PRECISION={LOW:"lowp",MEDIUM:"mediump",HIGH:"highp"},r.TRANSFORM_MODE={STATIC:0,DYNAMIC:1},r.TEXT_GRADIENT={LINEAR_VERTICAL:0,LINEAR_HORIZONTAL:1},r.UPDATE_PRIORITY={INTERACTION:50,HIGH:25,NORMAL:0,LOW:-25,UTILITY:-50}},{}],47:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=t("../math"),o=function(){function t(){n(this,t),this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.rect=null}return t.prototype.isEmpty=function(){return this.minX>this.maxX||this.minY>this.maxY},t.prototype.clear=function(){this.updateID++,this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0},t.prototype.getRectangle=function(t){return this.minX>this.maxX||this.minY>this.maxY?i.Rectangle.EMPTY:(t=t||new i.Rectangle(0,0,1,1),t.x=this.minX,t.y=this.minY,t.width=this.maxX-this.minX,t.height=this.maxY-this.minY,t)},t.prototype.addPoint=function(t){this.minX=Math.min(this.minX,t.x),this.maxX=Math.max(this.maxX,t.x),this.minY=Math.min(this.minY,t.y),this.maxY=Math.max(this.maxY,t.y)},t.prototype.addQuad=function(t){var e=this.minX,r=this.minY,n=this.maxX,i=this.maxY,o=t[0],s=t[1];e=o<e?o:e,r=s<r?s:r,n=o>n?o:n,i=s>i?s:i,o=t[2],s=t[3],e=o<e?o:e,r=s<r?s:r,n=o>n?o:n,i=s>i?s:i,o=t[4],s=t[5],e=o<e?o:e,r=s<r?s:r,n=o>n?o:n,i=s>i?s:i,o=t[6],s=t[7],e=o<e?o:e,r=s<r?s:r,n=o>n?o:n,i=s>i?s:i,this.minX=e,this.minY=r,this.maxX=n,this.maxY=i},t.prototype.addFrame=function(t,e,r,n,i){var o=t.worldTransform,s=o.a,a=o.b,u=o.c,h=o.d,l=o.tx,c=o.ty,d=this.minX,f=this.minY,p=this.maxX,v=this.maxY,g=s*e+u*r+l,y=a*e+h*r+c;d=g<d?g:d,f=y<f?y:f,p=g>p?g:p,v=y>v?y:v,g=s*n+u*r+l,y=a*n+h*r+c,d=g<d?g:d,f=y<f?y:f,p=g>p?g:p,v=y>v?y:v,g=s*e+u*i+l,y=a*e+h*i+c,d=g<d?g:d,f=y<f?y:f,p=g>p?g:p,v=y>v?y:v,g=s*n+u*i+l,y=a*n+h*i+c,d=g<d?g:d,f=y<f?y:f,p=g>p?g:p,v=y>v?y:v,this.minX=d,this.minY=f,this.maxX=p,this.maxY=v},t.prototype.addVertices=function(t,e,r,n){for(var i=t.worldTransform,o=i.a,s=i.b,a=i.c,u=i.d,h=i.tx,l=i.ty,c=this.minX,d=this.minY,f=this.maxX,p=this.maxY,v=r;v<n;v+=2){var g=e[v],y=e[v+1],m=o*g+a*y+h,_=u*y+s*g+l;c=m<c?m:c,d=_<d?_:d,f=m>f?m:f,p=_>p?_:p}this.minX=c,this.minY=d,this.maxX=f,this.maxY=p},t.prototype.addBounds=function(t){var e=this.minX,r=this.minY,n=this.maxX,i=this.maxY;this.minX=t.minX<e?t.minX:e,this.minY=t.minY<r?t.minY:r,this.maxX=t.maxX>n?t.maxX:n,this.maxY=t.maxY>i?t.maxY:i},t.prototype.addBoundsMask=function(t,e){var r=t.minX>e.minX?t.minX:e.minX,n=t.minY>e.minY?t.minY:e.minY,i=t.maxX<e.maxX?t.maxX:e.maxX,o=t.maxY<e.maxY?t.maxY:e.maxY;if(r<=i&&n<=o){var s=this.minX,a=this.minY,u=this.maxX,h=this.maxY;this.minX=r<s?r:s,this.minY=n<a?n:a,this.maxX=i>u?i:u,this.maxY=o>h?o:h}},t.prototype.addBoundsArea=function(t,e){var r=t.minX>e.x?t.minX:e.x,n=t.minY>e.y?t.minY:e.y,i=t.maxX<e.x+e.width?t.maxX:e.x+e.width,o=t.maxY<e.y+e.height?t.maxY:e.y+e.height;if(r<=i&&n<=o){var s=this.minX,a=this.minY,u=this.maxX,h=this.maxY;this.minX=r<s?r:s,this.minY=n<a?n:a,this.maxX=i>u?i:u,this.maxY=o>h?o:h}},t}();r.default=o},{"../math":70}],48:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=t("../utils"),u=t("./DisplayObject"),h=function(t){return t&&t.__esModule?t:{default:t}}(u),l=function(t){function e(){n(this,e);var r=i(this,t.call(this));return r.children=[],r}return o(e,t),e.prototype.onChildrenChange=function(){},e.prototype.addChild=function(t){var e=arguments.length;if(e>1)for(var r=0;r<e;r++)this.addChild(arguments[r]);else t.parent&&t.parent.removeChild(t),t.parent=this,t.transform._parentID=-1,this.children.push(t),this._boundsID++,this.onChildrenChange(this.children.length-1),t.emit("added",this);return t},e.prototype.addChildAt=function(t,e){if(e<0||e>this.children.length)throw new Error(t+"addChildAt: The index "+e+" supplied is out of bounds "+this.children.length);return t.parent&&t.parent.removeChild(t),t.parent=this,t.transform._parentID=-1,this.children.splice(e,0,t),this._boundsID++,this.onChildrenChange(e),t.emit("added",this),t},e.prototype.swapChildren=function(t,e){if(t!==e){var r=this.getChildIndex(t),n=this.getChildIndex(e);this.children[r]=e,this.children[n]=t,this.onChildrenChange(r<n?r:n)}},e.prototype.getChildIndex=function(t){var e=this.children.indexOf(t);if(-1===e)throw new Error("The supplied DisplayObject must be a child of the caller");return e},e.prototype.setChildIndex=function(t,e){if(e<0||e>=this.children.length)throw new Error("The index "+e+" supplied is out of bounds "+this.children.length);var r=this.getChildIndex(t);(0,a.removeItems)(this.children,r,1),this.children.splice(e,0,t),this.onChildrenChange(e)},e.prototype.getChildAt=function(t){if(t<0||t>=this.children.length)throw new Error("getChildAt: Index ("+t+") does not exist.");return this.children[t]},e.prototype.removeChild=function(t){var e=arguments.length;if(e>1)for(var r=0;r<e;r++)this.removeChild(arguments[r]);else{var n=this.children.indexOf(t);if(-1===n)return null;t.parent=null,t.transform._parentID=-1,(0,a.removeItems)(this.children,n,1),this._boundsID++,this.onChildrenChange(n),t.emit("removed",this)}return t},e.prototype.removeChildAt=function(t){var e=this.getChildAt(t);return e.parent=null,e.transform._parentID=-1,(0,a.removeItems)(this.children,t,1),this._boundsID++,this.onChildrenChange(t),e.emit("removed",this),e},e.prototype.removeChildren=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments[1],r=t,n="number"==typeof e?e:this.children.length,i=n-r,o=void 0;if(i>0&&i<=n){o=this.children.splice(r,i);for(var s=0;s<o.length;++s)o[s].parent=null,o[s].transform&&(o[s].transform._parentID=-1);this._boundsID++,this.onChildrenChange(t);for(var a=0;a<o.length;++a)o[a].emit("removed",this);return o}if(0===i&&0===this.children.length)return[];throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},e.prototype.updateTransform=function(){this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha;for(var t=0,e=this.children.length;t<e;++t){var r=this.children[t];r.visible&&r.updateTransform()}},e.prototype.calculateBounds=function(){this._bounds.clear(),this._calculateBounds();for(var t=0;t<this.children.length;t++){var e=this.children[t];e.visible&&e.renderable&&(e.calculateBounds(),e._mask?(e._mask.calculateBounds(),this._bounds.addBoundsMask(e._bounds,e._mask._bounds)):e.filterArea?this._bounds.addBoundsArea(e._bounds,e.filterArea):this._bounds.addBounds(e._bounds))}this._lastBoundsID=this._boundsID},e.prototype._calculateBounds=function(){},e.prototype.renderWebGL=function(t){if(this.visible&&!(this.worldAlpha<=0)&&this.renderable)if(this._mask||this._filters)this.renderAdvancedWebGL(t);else{this._renderWebGL(t);for(var e=0,r=this.children.length;e<r;++e)this.children[e].renderWebGL(t)}},e.prototype.renderAdvancedWebGL=function(t){t.flush();var e=this._filters,r=this._mask;if(e){this._enabledFilters||(this._enabledFilters=[]),this._enabledFilters.length=0;for(var n=0;n<e.length;n++)e[n].enabled&&this._enabledFilters.push(e[n]);this._enabledFilters.length&&t.filterManager.pushFilter(this,this._enabledFilters)}r&&t.maskManager.pushMask(this,this._mask),this._renderWebGL(t);for(var i=0,o=this.children.length;i<o;i++)this.children[i].renderWebGL(t);t.flush(),r&&t.maskManager.popMask(this,this._mask),e&&this._enabledFilters&&this._enabledFilters.length&&t.filterManager.popFilter()},e.prototype._renderWebGL=function(t){},e.prototype._renderCanvas=function(t){},e.prototype.renderCanvas=function(t){if(this.visible&&!(this.worldAlpha<=0)&&this.renderable){this._mask&&t.maskManager.pushMask(this._mask),this._renderCanvas(t);for(var e=0,r=this.children.length;e<r;++e)this.children[e].renderCanvas(t);this._mask&&t.maskManager.popMask(t)}},e.prototype.destroy=function(e){t.prototype.destroy.call(this);var r="boolean"==typeof e?e:e&&e.children,n=this.removeChildren(0,this.children.length);if(r)for(var i=0;i<n.length;++i)n[i].destroy(e)},s(e,[{key:"width",get:function(){return this.scale.x*this.getLocalBounds().width},set:function(t){var e=this.getLocalBounds().width;this.scale.x=0!==e?t/e:1,this._width=t}},{key:"height",get:function(){return this.scale.y*this.getLocalBounds().height},set:function(t){var e=this.getLocalBounds().height;this.scale.y=0!==e?t/e:1,this._height=t}}]),e}(h.default);r.default=l,l.prototype.containerUpdateTransform=l.prototype.updateTransform},{"../utils":125,"./DisplayObject":49}],49:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("eventemitter3"),h=n(u),l=t("../const"),c=t("../settings"),d=n(c),f=t("./TransformStatic"),p=n(f),v=t("./Transform"),g=n(v),y=t("./Bounds"),m=n(y),_=t("../math"),b=function(t){function e(){i(this,e);var r=o(this,t.call(this)),n=d.default.TRANSFORM_MODE===l.TRANSFORM_MODE.STATIC?p.default:g.default;return r.tempDisplayObjectParent=null,r.transform=new n,r.alpha=1,r.visible=!0,r.renderable=!0,r.parent=null,r.worldAlpha=1,r.filterArea=null,r._filters=null,r._enabledFilters=null,r._bounds=new m.default,r._boundsID=0,r._lastBoundsID=-1,r._boundsRect=null,r._localBoundsRect=null,r._mask=null,r._destroyed=!1,r}return s(e,t),e.prototype.updateTransform=function(){this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha,this._bounds.updateID++},e.prototype._recursivePostUpdateTransform=function(){this.parent?(this.parent._recursivePostUpdateTransform(),this.transform.updateTransform(this.parent.transform)):this.transform.updateTransform(this._tempDisplayObjectParent.transform)},e.prototype.getBounds=function(t,e){return t||(this.parent?(this._recursivePostUpdateTransform(),this.updateTransform()):(this.parent=this._tempDisplayObjectParent,this.updateTransform(),this.parent=null)),this._boundsID!==this._lastBoundsID&&this.calculateBounds(),e||(this._boundsRect||(this._boundsRect=new _.Rectangle),e=this._boundsRect),this._bounds.getRectangle(e)},e.prototype.getLocalBounds=function(t){var e=this.transform,r=this.parent;this.parent=null,this.transform=this._tempDisplayObjectParent.transform,t||(this._localBoundsRect||(this._localBoundsRect=new _.Rectangle),t=this._localBoundsRect);var n=this.getBounds(!1,t);return this.parent=r,this.transform=e,n},e.prototype.toGlobal=function(t,e){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.apply(t,e)},e.prototype.toLocal=function(t,e,r,n){return e&&(t=e.toGlobal(t,r,n)),n||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.applyInverse(t,r)},e.prototype.renderWebGL=function(t){},e.prototype.renderCanvas=function(t){},e.prototype.setParent=function(t){if(!t||!t.addChild)throw new Error("setParent: Argument must be a Container");return t.addChild(this),t},e.prototype.setTransform=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,a=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0,u=arguments.length>8&&void 0!==arguments[8]?arguments[8]:0;return this.position.x=t,this.position.y=e,this.scale.x=r||1,this.scale.y=n||1,this.rotation=i,this.skew.x=o,this.skew.y=s,this.pivot.x=a,this.pivot.y=u,this},e.prototype.destroy=function(){this.removeAllListeners(),this.parent&&this.parent.removeChild(this),this.transform=null,this.parent=null,this._bounds=null,this._currentBounds=null,this._mask=null,this.filterArea=null,this.interactive=!1,this.interactiveChildren=!1,this._destroyed=!0},a(e,[{key:"_tempDisplayObjectParent",get:function(){return null===this.tempDisplayObjectParent&&(this.tempDisplayObjectParent=new e),this.tempDisplayObjectParent}},{key:"x",get:function(){return this.position.x},set:function(t){this.transform.position.x=t}},{key:"y",get:function(){return this.position.y},set:function(t){this.transform.position.y=t}},{key:"worldTransform",get:function(){return this.transform.worldTransform}},{key:"localTransform",get:function(){return this.transform.localTransform}},{key:"position",get:function(){return this.transform.position},set:function(t){this.transform.position.copy(t)}},{key:"scale",get:function(){return this.transform.scale},set:function(t){this.transform.scale.copy(t)}},{key:"pivot",get:function(){return this.transform.pivot},set:function(t){this.transform.pivot.copy(t)}},{key:"skew",get:function(){return this.transform.skew},set:function(t){this.transform.skew.copy(t)}},{key:"rotation",get:function(){return this.transform.rotation},set:function(t){this.transform.rotation=t}},{key:"worldVisible",get:function(){var t=this;do{if(!t.visible)return!1;t=t.parent}while(t);return!0}},{key:"mask",get:function(){return this._mask},set:function(t){this._mask&&(this._mask.renderable=!0,this._mask.isMask=!1),this._mask=t,this._mask&&(this._mask.renderable=!1,this._mask.isMask=!0)}},{key:"filters",get:function(){return this._filters&&this._filters.slice()},set:function(t){this._filters=t&&t.slice()}}]),e}(h.default);r.default=b,b.prototype.displayObjectUpdateTransform=b.prototype.updateTransform},{"../const":46,"../math":70,"../settings":101,"./Bounds":47,"./Transform":50,"./TransformStatic":52,eventemitter3:3}],50:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){
return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=t("../math"),u=t("./TransformBase"),h=function(t){return t&&t.__esModule?t:{default:t}}(u),l=function(t){function e(){n(this,e);var r=i(this,t.call(this));return r.position=new a.Point(0,0),r.scale=new a.Point(1,1),r.skew=new a.ObservablePoint(r.updateSkew,r,0,0),r.pivot=new a.Point(0,0),r._rotation=0,r._cx=1,r._sx=0,r._cy=0,r._sy=1,r}return o(e,t),e.prototype.updateSkew=function(){this._cx=Math.cos(this._rotation+this.skew._y),this._sx=Math.sin(this._rotation+this.skew._y),this._cy=-Math.sin(this._rotation-this.skew._x),this._sy=Math.cos(this._rotation-this.skew._x)},e.prototype.updateLocalTransform=function(){var t=this.localTransform;t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d)},e.prototype.updateTransform=function(t){var e=this.localTransform;e.a=this._cx*this.scale.x,e.b=this._sx*this.scale.x,e.c=this._cy*this.scale.y,e.d=this._sy*this.scale.y,e.tx=this.position.x-(this.pivot.x*e.a+this.pivot.y*e.c),e.ty=this.position.y-(this.pivot.x*e.b+this.pivot.y*e.d);var r=t.worldTransform,n=this.worldTransform;n.a=e.a*r.a+e.b*r.c,n.b=e.a*r.b+e.b*r.d,n.c=e.c*r.a+e.d*r.c,n.d=e.c*r.b+e.d*r.d,n.tx=e.tx*r.a+e.ty*r.c+r.tx,n.ty=e.tx*r.b+e.ty*r.d+r.ty,this._worldID++},e.prototype.setFromMatrix=function(t){t.decompose(this)},s(e,[{key:"rotation",get:function(){return this._rotation},set:function(t){this._rotation=t,this.updateSkew()}}]),e}(h.default);r.default=l},{"../math":70,"./TransformBase":51}],51:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=t("../math"),o=function(){function t(){n(this,t),this.worldTransform=new i.Matrix,this.localTransform=new i.Matrix,this._worldID=0,this._parentID=0}return t.prototype.updateLocalTransform=function(){},t.prototype.updateTransform=function(t){var e=t.worldTransform,r=this.worldTransform,n=this.localTransform;r.a=n.a*e.a+n.b*e.c,r.b=n.a*e.b+n.b*e.d,r.c=n.c*e.a+n.d*e.c,r.d=n.c*e.b+n.d*e.d,r.tx=n.tx*e.a+n.ty*e.c+e.tx,r.ty=n.tx*e.b+n.ty*e.d+e.ty,this._worldID++},t}();r.default=o,o.prototype.updateWorldTransform=o.prototype.updateTransform,o.IDENTITY=new o},{"../math":70}],52:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=t("../math"),u=t("./TransformBase"),h=function(t){return t&&t.__esModule?t:{default:t}}(u),l=function(t){function e(){n(this,e);var r=i(this,t.call(this));return r.position=new a.ObservablePoint(r.onChange,r,0,0),r.scale=new a.ObservablePoint(r.onChange,r,1,1),r.pivot=new a.ObservablePoint(r.onChange,r,0,0),r.skew=new a.ObservablePoint(r.updateSkew,r,0,0),r._rotation=0,r._cx=1,r._sx=0,r._cy=0,r._sy=1,r._localID=0,r._currentLocalID=0,r}return o(e,t),e.prototype.onChange=function(){this._localID++},e.prototype.updateSkew=function(){this._cx=Math.cos(this._rotation+this.skew._y),this._sx=Math.sin(this._rotation+this.skew._y),this._cy=-Math.sin(this._rotation-this.skew._x),this._sy=Math.cos(this._rotation-this.skew._x),this._localID++},e.prototype.updateLocalTransform=function(){var t=this.localTransform;this._localID!==this._currentLocalID&&(t.a=this._cx*this.scale._x,t.b=this._sx*this.scale._x,t.c=this._cy*this.scale._y,t.d=this._sy*this.scale._y,t.tx=this.position._x-(this.pivot._x*t.a+this.pivot._y*t.c),t.ty=this.position._y-(this.pivot._x*t.b+this.pivot._y*t.d),this._currentLocalID=this._localID,this._parentID=-1)},e.prototype.updateTransform=function(t){var e=this.localTransform;if(this._localID!==this._currentLocalID&&(e.a=this._cx*this.scale._x,e.b=this._sx*this.scale._x,e.c=this._cy*this.scale._y,e.d=this._sy*this.scale._y,e.tx=this.position._x-(this.pivot._x*e.a+this.pivot._y*e.c),e.ty=this.position._y-(this.pivot._x*e.b+this.pivot._y*e.d),this._currentLocalID=this._localID,this._parentID=-1),this._parentID!==t._worldID){var r=t.worldTransform,n=this.worldTransform;n.a=e.a*r.a+e.b*r.c,n.b=e.a*r.b+e.b*r.d,n.c=e.c*r.a+e.d*r.c,n.d=e.c*r.b+e.d*r.d,n.tx=e.tx*r.a+e.ty*r.c+r.tx,n.ty=e.tx*r.b+e.ty*r.d+r.ty,this._parentID=t._worldID,this._worldID++}},e.prototype.setFromMatrix=function(t){t.decompose(this),this._localID++},s(e,[{key:"rotation",get:function(){return this._rotation},set:function(t){this._rotation=t,this.updateSkew()}}]),e}(h.default);r.default=l},{"../math":70,"./TransformBase":51}],53:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("../display/Container"),u=n(a),h=t("../textures/RenderTexture"),l=n(h),c=t("../textures/Texture"),d=n(c),f=t("./GraphicsData"),p=n(f),v=t("../sprites/Sprite"),g=n(v),y=t("../math"),m=t("../utils"),_=t("../const"),b=t("../display/Bounds"),x=n(b),T=t("./utils/bezierCurveTo"),w=n(T),E=t("../renderers/canvas/CanvasRenderer"),S=n(E),O=void 0,M=new y.Matrix,P=new y.Point,C=new Float32Array(4),R=new Float32Array(4),A=function(t){function e(){var r=arguments.length>0&&void 0!==arguments[0]&&arguments[0];i(this,e);var n=o(this,t.call(this));return n.fillAlpha=1,n.lineWidth=0,n.nativeLines=r,n.lineColor=0,n.lineAlignment=.5,n.graphicsData=[],n.tint=16777215,n._prevTint=16777215,n.blendMode=_.BLEND_MODES.NORMAL,n.currentPath=null,n._webGL={},n.isMask=!1,n.boundsPadding=0,n._localBounds=new x.default,n.dirty=0,n.fastRectDirty=-1,n.clearDirty=0,n.boundsDirty=-1,n.cachedSpriteDirty=!1,n._spriteRect=null,n._fastRect=!1,n}return s(e,t),e.prototype.clone=function(){var t=new e;t.renderable=this.renderable,t.fillAlpha=this.fillAlpha,t.lineWidth=this.lineWidth,t.lineColor=this.lineColor,t.lineAlignment=this.lineAlignment,t.tint=this.tint,t.blendMode=this.blendMode,t.isMask=this.isMask,t.boundsPadding=this.boundsPadding,t.dirty=0,t.cachedSpriteDirty=this.cachedSpriteDirty;for(var r=0;r<this.graphicsData.length;++r)t.graphicsData.push(this.graphicsData[r].clone());return t.currentPath=t.graphicsData[t.graphicsData.length-1],t.updateLocalBounds(),t},e.prototype._quadraticCurveLength=function(t,e,r,n,i,o){var s=t-(2*r+i),a=e-(2*n+o),u=(r-2)*t*2,h=(n-2)*e*2,l=4*(s*s+a*a),c=4*(s*u+a*h),d=u*u+h*h,f=2*Math.sqrt(l+c+d),p=Math.sqrt(l),v=2*l*p,g=2*Math.sqrt(d),y=c/p;return(v*f+p*c*(f-g)+(4*d*l-c*c)*Math.log((2*p+y+f)/(y+g)))/(4*v)},e.prototype._bezierCurveLength=function(t,e,r,n,i,o,s,a){for(var u=0,h=0,l=0,c=0,d=0,f=0,p=0,v=0,g=0,y=0,m=0,_=t,b=e,x=1;x<=10;++x)h=x/10,l=h*h,c=l*h,d=1-h,f=d*d,p=f*d,v=p*t+3*f*h*r+3*d*l*i+c*s,g=p*e+3*f*h*n+3*d*l*o+c*a,y=_-v,m=b-g,_=v,b=g,u+=Math.sqrt(y*y+m*m);return u},e.prototype._segmentsCount=function(t){var r=Math.ceil(t/e.CURVES.maxLength);return r<e.CURVES.minSegments?r=e.CURVES.minSegments:r>e.CURVES.maxSegments&&(r=e.CURVES.maxSegments),r},e.prototype.lineStyle=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;if(this.lineWidth=t,this.lineColor=e,this.lineAlpha=r,this.lineAlignment=n,this.currentPath)if(this.currentPath.shape.points.length){var i=new y.Polygon(this.currentPath.shape.points.slice(-2));i.closed=!1,this.drawShape(i)}else this.currentPath.lineWidth=this.lineWidth,this.currentPath.lineColor=this.lineColor,this.currentPath.lineAlpha=this.lineAlpha,this.currentPath.lineAlignment=this.lineAlignment;return this},e.prototype.moveTo=function(t,e){var r=new y.Polygon([t,e]);return r.closed=!1,this.drawShape(r),this},e.prototype.lineTo=function(t,e){return this.currentPath.shape.points.push(t,e),this.dirty++,this},e.prototype.quadraticCurveTo=function(t,r,n,i){this.currentPath?0===this.currentPath.shape.points.length&&(this.currentPath.shape.points=[0,0]):this.moveTo(0,0);var o=this.currentPath.shape.points,s=0,a=0;0===o.length&&this.moveTo(0,0);for(var u=o[o.length-2],h=o[o.length-1],l=e.CURVES.adaptive?this._segmentsCount(this._quadraticCurveLength(u,h,t,r,n,i)):20,c=1;c<=l;++c){var d=c/l;s=u+(t-u)*d,a=h+(r-h)*d,o.push(s+(t+(n-t)*d-s)*d,a+(r+(i-r)*d-a)*d)}return this.dirty++,this},e.prototype.bezierCurveTo=function(t,r,n,i,o,s){this.currentPath?0===this.currentPath.shape.points.length&&(this.currentPath.shape.points=[0,0]):this.moveTo(0,0);var a=this.currentPath.shape.points,u=a[a.length-2],h=a[a.length-1];a.length-=2;var l=e.CURVES.adaptive?this._segmentsCount(this._bezierCurveLength(u,h,t,r,n,i,o,s)):20;return(0,w.default)(u,h,t,r,n,i,o,s,l,a),this.dirty++,this},e.prototype.arcTo=function(t,e,r,n,i){this.currentPath?0===this.currentPath.shape.points.length&&this.currentPath.shape.points.push(t,e):this.moveTo(t,e);var o=this.currentPath.shape.points,s=o[o.length-2],a=o[o.length-1],u=a-e,h=s-t,l=n-e,c=r-t,d=Math.abs(u*c-h*l);if(d<1e-8||0===i)o[o.length-2]===t&&o[o.length-1]===e||o.push(t,e);else{var f=u*u+h*h,p=l*l+c*c,v=u*l+h*c,g=i*Math.sqrt(f)/d,y=i*Math.sqrt(p)/d,m=g*v/f,_=y*v/p,b=g*c+y*h,x=g*l+y*u,T=h*(y+m),w=u*(y+m),E=c*(g+_),S=l*(g+_),O=Math.atan2(w-x,T-b),M=Math.atan2(S-x,E-b);this.arc(b+t,x+e,i,O,M,h*l>c*u)}return this.dirty++,this},e.prototype.arc=function(t,r,n,i,o){var s=arguments.length>5&&void 0!==arguments[5]&&arguments[5];if(i===o)return this;!s&&o<=i?o+=_.PI_2:s&&i<=o&&(i+=_.PI_2);var a=o-i,u=e.CURVES.adaptive?this._segmentsCount(Math.abs(a)*n):40*Math.ceil(Math.abs(a)/_.PI_2);if(0===a)return this;var h=t+Math.cos(i)*n,l=r+Math.sin(i)*n,c=this.currentPath?this.currentPath.shape.points:null;c?c[c.length-2]===h&&c[c.length-1]===l||c.push(h,l):(this.moveTo(h,l),c=this.currentPath.shape.points);for(var d=a/(2*u),f=2*d,p=Math.cos(d),v=Math.sin(d),g=u-1,y=g%1/g,m=0;m<=g;++m){var b=m+y*m,x=d+i+f*b,T=Math.cos(x),w=-Math.sin(x);c.push((p*T+v*w)*n+t,(p*-w+v*T)*n+r)}return this.dirty++,this},e.prototype.beginFill=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return this.filling=!0,this.fillColor=t,this.fillAlpha=e,this.currentPath&&this.currentPath.shape.points.length<=2&&(this.currentPath.fill=this.filling,this.currentPath.fillColor=this.fillColor,this.currentPath.fillAlpha=this.fillAlpha),this},e.prototype.endFill=function(){return this.filling=!1,this.fillColor=null,this.fillAlpha=1,this},e.prototype.drawRect=function(t,e,r,n){return this.drawShape(new y.Rectangle(t,e,r,n)),this},e.prototype.drawRoundedRect=function(t,e,r,n,i){return this.drawShape(new y.RoundedRectangle(t,e,r,n,i)),this},e.prototype.drawCircle=function(t,e,r){return this.drawShape(new y.Circle(t,e,r)),this},e.prototype.drawEllipse=function(t,e,r,n){return this.drawShape(new y.Ellipse(t,e,r,n)),this},e.prototype.drawPolygon=function(t){var e=t,r=!0;if(e instanceof y.Polygon&&(r=e.closed,e=e.points),!Array.isArray(e)){e=new Array(arguments.length);for(var n=0;n<e.length;++n)e[n]=arguments[n]}var i=new y.Polygon(e);return i.closed=r,this.drawShape(i),this},e.prototype.drawStar=function(t,e,r,n,i){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;i=i||n/2;for(var s=-1*Math.PI/2+o,a=2*r,u=_.PI_2/a,h=[],l=0;l<a;l++){var c=l%2?i:n,d=l*u+s;h.push(t+c*Math.cos(d),e+c*Math.sin(d))}return this.drawPolygon(h)},e.prototype.clear=function(){return(this.lineWidth||this.filling||this.graphicsData.length>0)&&(this.lineWidth=0,this.lineAlignment=.5,this.filling=!1,this.boundsDirty=-1,this.dirty++,this.clearDirty++,this.graphicsData.length=0),this.currentPath=null,this._spriteRect=null,this},e.prototype.isFastRect=function(){return 1===this.graphicsData.length&&this.graphicsData[0].shape.type===_.SHAPES.RECT&&!this.graphicsData[0].lineWidth},e.prototype._renderWebGL=function(t){this.dirty!==this.fastRectDirty&&(this.fastRectDirty=this.dirty,this._fastRect=this.isFastRect()),this._fastRect?this._renderSpriteRect(t):(t.setObjectRenderer(t.plugins.graphics),t.plugins.graphics.render(this))},e.prototype._renderSpriteRect=function(t){var e=this.graphicsData[0].shape;this._spriteRect||(this._spriteRect=new g.default(new d.default(d.default.WHITE)));var r=this._spriteRect;if(16777215===this.tint)r.tint=this.graphicsData[0].fillColor;else{var n=C,i=R;(0,m.hex2rgb)(this.graphicsData[0].fillColor,n),(0,m.hex2rgb)(this.tint,i),n[0]*=i[0],n[1]*=i[1],n[2]*=i[2],r.tint=(0,m.rgb2hex)(n)}r.alpha=this.graphicsData[0].fillAlpha,r.worldAlpha=this.worldAlpha*r.alpha,r.blendMode=this.blendMode,r._texture._frame.width=e.width,r._texture._frame.height=e.height,r.transform.worldTransform=this.transform.worldTransform,r.anchor.set(-e.x/e.width,-e.y/e.height),r._onAnchorUpdate(),r._renderWebGL(t)},e.prototype._renderCanvas=function(t){!0!==this.isMask&&t.plugins.graphics.render(this)},e.prototype._calculateBounds=function(){this.boundsDirty!==this.dirty&&(this.boundsDirty=this.dirty,this.updateLocalBounds(),this.cachedSpriteDirty=!0);var t=this._localBounds;this._bounds.addFrame(this.transform,t.minX,t.minY,t.maxX,t.maxY)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,P);for(var e=this.graphicsData,r=0;r<e.length;++r){var n=e[r];if(n.fill&&(n.shape&&n.shape.contains(P.x,P.y))){if(n.holes)for(var i=0;i<n.holes.length;i++){var o=n.holes[i];if(o.contains(P.x,P.y))return!1}return!0}}return!1},e.prototype.updateLocalBounds=function(){var t=1/0,e=-1/0,r=1/0,n=-1/0;if(this.graphicsData.length)for(var i=0,o=0,s=0,a=0,u=0,h=0;h<this.graphicsData.length;h++){var l=this.graphicsData[h],c=l.type,d=l.lineWidth;if(i=l.shape,c===_.SHAPES.RECT||c===_.SHAPES.RREC)o=i.x-d/2,s=i.y-d/2,a=i.width+d,u=i.height+d,t=o<t?o:t,e=o+a>e?o+a:e,r=s<r?s:r,n=s+u>n?s+u:n;else if(c===_.SHAPES.CIRC)o=i.x,s=i.y,a=i.radius+d/2,u=i.radius+d/2,t=o-a<t?o-a:t,e=o+a>e?o+a:e,r=s-u<r?s-u:r,n=s+u>n?s+u:n;else if(c===_.SHAPES.ELIP)o=i.x,s=i.y,a=i.width+d/2,u=i.height+d/2,t=o-a<t?o-a:t,e=o+a>e?o+a:e,r=s-u<r?s-u:r,n=s+u>n?s+u:n;else for(var f=i.points,p=0,v=0,g=0,y=0,m=0,b=0,x=0,T=0,w=0;w+2<f.length;w+=2)o=f[w],s=f[w+1],p=f[w+2],v=f[w+3],g=Math.abs(p-o),y=Math.abs(v-s),u=d,(a=Math.sqrt(g*g+y*y))<1e-9||(m=(u/a*y+g)/2,b=(u/a*g+y)/2,x=(p+o)/2,T=(v+s)/2,t=x-m<t?x-m:t,e=x+m>e?x+m:e,r=T-b<r?T-b:r,n=T+b>n?T+b:n)}else t=0,e=0,r=0,n=0;var E=this.boundsPadding;this._localBounds.minX=t-E,this._localBounds.maxX=e+E,this._localBounds.minY=r-E,this._localBounds.maxY=n+E},e.prototype.drawShape=function(t){this.currentPath&&this.currentPath.shape.points.length<=2&&this.graphicsData.pop(),this.currentPath=null;var e=new p.default(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.filling,this.nativeLines,t,this.lineAlignment);return this.graphicsData.push(e),e.type===_.SHAPES.POLY&&(e.shape.closed=e.shape.closed||this.filling,this.currentPath=e),this.dirty++,e},e.prototype.generateCanvasTexture=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this.getLocalBounds(),n=l.default.create(r.width,r.height,t,e);O||(O=new S.default),this.transform.updateLocalTransform(),this.transform.localTransform.copy(M),M.invert(),M.tx-=r.x,M.ty-=r.y,O.render(this,n,!0,M);var i=d.default.fromCanvas(n.baseTexture._canvasRenderTarget.canvas,t,"graphics");return i.baseTexture.resolution=e,i.baseTexture.update(),i},e.prototype.closePath=function(){var t=this.currentPath;return t&&t.shape&&t.shape.close(),this},e.prototype.addHole=function(){var t=this.graphicsData.pop();return this.currentPath=this.graphicsData[this.graphicsData.length-1],this.currentPath.addHole(t.shape),this.currentPath=null,this},e.prototype.destroy=function(e){t.prototype.destroy.call(this,e);for(var r=0;r<this.graphicsData.length;++r)this.graphicsData[r].destroy();for(var n in this._webGL)for(var i=0;i<this._webGL[n].data.length;++i)this._webGL[n].data[i].destroy();this._spriteRect&&this._spriteRect.destroy(),this.graphicsData=null,this.currentPath=null,this._webGL=null,this._localBounds=null},e}(u.default);r.default=A,A._SPRITE_TEXTURE=null,A.CURVES={adaptive:!1,maxLength:10,minSegments:8,maxSegments:2048}},{"../const":46,"../display/Bounds":47,"../display/Container":48,"../math":70,"../renderers/canvas/CanvasRenderer":77,"../sprites/Sprite":102,"../textures/RenderTexture":113,"../textures/Texture":115,"../utils":125,"./GraphicsData":54,"./utils/bezierCurveTo":56}],54:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(e,r,i,o,s,a,u,h,l){n(this,t),this.lineWidth=e,this.lineAlignment=l,this.nativeLines=u,this.lineColor=r,this.lineAlpha=i,this._lineTint=r,this.fillColor=o,this.fillAlpha=s,this._fillTint=o,this.fill=a,this.holes=[],this.shape=h,this.type=h.type}return t.prototype.clone=function(){return new t(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.fill,this.nativeLines,this.shape)},t.prototype.addHole=function(t){this.holes.push(t)},t.prototype.destroy=function(){this.shape=null,this.holes=null},t}();r.default=i},{}],55:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=t("../../renderers/canvas/CanvasRenderer"),o=function(t){return t&&t.__esModule?t:{default:t}}(i),s=t("../../const"),a=function(){function t(e){n(this,t),this.renderer=e}return t.prototype.render=function(t){var e=this.renderer,r=e.context,n=t.worldAlpha,i=t.transform.worldTransform,o=e.resolution;this._prevTint!==this.tint&&(this.dirty=!0),r.setTransform(i.a*o,i.b*o,i.c*o,i.d*o,i.tx*o,i.ty*o),t.dirty&&(this.updateGraphicsTint(t),t.dirty=!1),e.setBlendMode(t.blendMode);for(var a=0;a<t.graphicsData.length;a++){var u=t.graphicsData[a],h=u.shape,l=u._fillTint,c=u._lineTint;if(r.lineWidth=u.lineWidth,u.type===s.SHAPES.POLY){r.beginPath(),this.renderPolygon(h.points,h.closed,r);for(var d=0;d<u.holes.length;d++)this.renderPolygon(u.holes[d].points,!0,r);u.fill&&(r.globalAlpha=u.fillAlpha*n,r.fillStyle="#"+("00000"+(0|l).toString(16)).substr(-6),r.fill()),u.lineWidth&&(r.globalAlpha=u.lineAlpha*n,r.strokeStyle="#"+("00000"+(0|c).toString(16)).substr(-6),r.stroke())}else if(u.type===s.SHAPES.RECT)(u.fillColor||0===u.fillColor)&&(r.globalAlpha=u.fillAlpha*n,r.fillStyle="#"+("00000"+(0|l).toString(16)).substr(-6),r.fillRect(h.x,h.y,h.width,h.height)),u.lineWidth&&(r.globalAlpha=u.lineAlpha*n,r.strokeStyle="#"+("00000"+(0|c).toString(16)).substr(-6),r.strokeRect(h.x,h.y,h.width,h.height));else if(u.type===s.SHAPES.CIRC)r.beginPath(),r.arc(h.x,h.y,h.radius,0,2*Math.PI),r.closePath(),u.fill&&(r.globalAlpha=u.fillAlpha*n,r.fillStyle="#"+("00000"+(0|l).toString(16)).substr(-6),r.fill()),u.lineWidth&&(r.globalAlpha=u.lineAlpha*n,r.strokeStyle="#"+("00000"+(0|c).toString(16)).substr(-6),r.stroke());else if(u.type===s.SHAPES.ELIP){var f=2*h.width,p=2*h.height,v=h.x-f/2,g=h.y-p/2;r.beginPath();var y=f/2*.5522848,m=p/2*.5522848,_=v+f,b=g+p,x=v+f/2,T=g+p/2;r.moveTo(v,T),r.bezierCurveTo(v,T-m,x-y,g,x,g),r.bezierCurveTo(x+y,g,_,T-m,_,T),r.bezierCurveTo(_,T+m,x+y,b,x,b),r.bezierCurveTo(x-y,b,v,T+m,v,T),r.closePath(),u.fill&&(r.globalAlpha=u.fillAlpha*n,r.fillStyle="#"+("00000"+(0|l).toString(16)).substr(-6),r.fill()),u.lineWidth&&(r.globalAlpha=u.lineAlpha*n,r.strokeStyle="#"+("00000"+(0|c).toString(16)).substr(-6),r.stroke())}else if(u.type===s.SHAPES.RREC){var w=h.x,E=h.y,S=h.width,O=h.height,M=h.radius,P=Math.min(S,O)/2|0;M=M>P?P:M,r.beginPath(),r.moveTo(w,E+M),r.lineTo(w,E+O-M),r.quadraticCurveTo(w,E+O,w+M,E+O),r.lineTo(w+S-M,E+O),r.quadraticCurveTo(w+S,E+O,w+S,E+O-M),r.lineTo(w+S,E+M),r.quadraticCurveTo(w+S,E,w+S-M,E),r.lineTo(w+M,E),r.quadraticCurveTo(w,E,w,E+M),r.closePath(),(u.fillColor||0===u.fillColor)&&(r.globalAlpha=u.fillAlpha*n,r.fillStyle="#"+("00000"+(0|l).toString(16)).substr(-6),r.fill()),u.lineWidth&&(r.globalAlpha=u.lineAlpha*n,r.strokeStyle="#"+("00000"+(0|c).toString(16)).substr(-6),r.stroke())}}},t.prototype.updateGraphicsTint=function(t){t._prevTint=t.tint;for(var e=(t.tint>>16&255)/255,r=(t.tint>>8&255)/255,n=(255&t.tint)/255,i=0;i<t.graphicsData.length;++i){var o=t.graphicsData[i],s=0|o.fillColor,a=0|o.lineColor;o._fillTint=((s>>16&255)/255*e*255<<16)+((s>>8&255)/255*r*255<<8)+(255&s)/255*n*255,o._lineTint=((a>>16&255)/255*e*255<<16)+((a>>8&255)/255*r*255<<8)+(255&a)/255*n*255}},t.prototype.renderPolygon=function(t,e,r){r.moveTo(t[0],t[1]);for(var n=1;n<t.length/2;++n)r.lineTo(t[2*n],t[2*n+1]);e&&r.closePath()},t.prototype.destroy=function(){this.renderer=null},t}();r.default=a,o.default.registerPlugin("graphics",a)},{"../../const":46,"../../renderers/canvas/CanvasRenderer":77}],56:[function(t,e,r){"use strict";function n(t,e,r,n,i,o,s,a,u){var h=arguments.length>9&&void 0!==arguments[9]?arguments[9]:[],l=0,c=0,d=0,f=0,p=0;h.push(t,e);for(var v=1,g=0;v<=u;++v)g=v/u,l=1-g,c=l*l,d=c*l,f=g*g,p=f*g,h.push(d*t+3*c*g*r+3*l*f*i+p*s,d*e+3*c*g*n+3*l*f*o+p*a);return h}r.__esModule=!0,r.default=n},{}],57:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("../../utils"),u=t("../../const"),h=t("../../renderers/webgl/utils/ObjectRenderer"),l=n(h),c=t("../../renderers/webgl/WebGLRenderer"),d=n(c),f=t("./WebGLGraphicsData"),p=n(f),v=t("./shaders/PrimitiveShader"),g=n(v),y=t("./utils/buildPoly"),m=n(y),_=t("./utils/buildRectangle"),b=n(_),x=t("./utils/buildRoundedRectangle"),T=n(x),w=t("./utils/buildCircle"),E=n(w),S=function(t){function e(r){i(this,e);var n=o(this,t.call(this,r));return n.graphicsDataPool=[],n.primitiveShader=null,n.gl=r.gl,n.CONTEXT_UID=0,n}return s(e,t),e.prototype.onContextChange=function(){this.gl=this.renderer.gl,this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.primitiveShader=new g.default(this.gl)},e.prototype.destroy=function(){l.default.prototype.destroy.call(this);for(var t=0;t<this.graphicsDataPool.length;++t)this.graphicsDataPool[t].destroy();this.graphicsDataPool=null},e.prototype.render=function(t){var e=this.renderer,r=e.gl,n=void 0,i=t._webGL[this.CONTEXT_UID];i&&t.dirty===i.dirty||(this.updateGraphics(t),i=t._webGL[this.CONTEXT_UID]);var o=this.primitiveShader;e.bindShader(o),e.state.setBlendMode(t.blendMode);for(var s=0,u=i.data.length;s<u;s++){n=i.data[s];var h=n.shader;e.bindShader(h),h.uniforms.translationMatrix=t.transform.worldTransform.toArray(!0),h.uniforms.tint=(0,a.hex2rgb)(t.tint),h.uniforms.alpha=t.worldAlpha,e.bindVao(n.vao),n.nativeLines?r.drawArrays(r.LINES,0,n.points.length/6):n.vao.draw(r.TRIANGLE_STRIP,n.indices.length)}},e.prototype.updateGraphics=function(t){var e=this.renderer.gl,r=t._webGL[this.CONTEXT_UID];if(r||(r=t._webGL[this.CONTEXT_UID]={lastIndex:0,data:[],gl:e,clearDirty:-1,dirty:-1}),r.dirty=t.dirty,t.clearDirty!==r.clearDirty){r.clearDirty=t.clearDirty;for(var n=0;n<r.data.length;n++)this.graphicsDataPool.push(r.data[n]);r.data.length=0,r.lastIndex=0}for(var i=void 0,o=void 0,s=r.lastIndex;s<t.graphicsData.length;s++){var a=t.graphicsData[s];i=this.getWebGLData(r,0),a.nativeLines&&a.lineWidth&&(o=this.getWebGLData(r,0,!0),r.lastIndex++),a.type===u.SHAPES.POLY&&(0,m.default)(a,i,o),a.type===u.SHAPES.RECT?(0,b.default)(a,i,o):a.type===u.SHAPES.CIRC||a.type===u.SHAPES.ELIP?(0,E.default)(a,i,o):a.type===u.SHAPES.RREC&&(0,T.default)(a,i,o),r.lastIndex++}this.renderer.bindVao(null);for(var h=0;h<r.data.length;h++)i=r.data[h],i.dirty&&i.upload()},e.prototype.getWebGLData=function(t,e,r){var n=t.data[t.data.length-1];return(!n||n.nativeLines!==r||n.points.length>32e4)&&(n=this.graphicsDataPool.pop()||new p.default(this.renderer.gl,this.primitiveShader,this.renderer.state.attribsState),n.nativeLines=r,n.reset(e),t.data.push(n)),n.dirty=!0,n},e}(l.default);r.default=S,d.default.registerPlugin("graphics",S)},{"../../const":46,"../../renderers/webgl/WebGLRenderer":84,"../../renderers/webgl/utils/ObjectRenderer":94,"../../utils":125,"./WebGLGraphicsData":58,"./shaders/PrimitiveShader":59,"./utils/buildCircle":60,"./utils/buildPoly":62,"./utils/buildRectangle":63,"./utils/buildRoundedRectangle":64}],58:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=t("pixi-gl-core"),o=function(t){return t&&t.__esModule?t:{default:t}}(i),s=function(){function t(e,r,i){n(this,t),this.gl=e,this.color=[0,0,0],this.points=[],this.indices=[],this.buffer=o.default.GLBuffer.createVertexBuffer(e),this.indexBuffer=o.default.GLBuffer.createIndexBuffer(e),this.dirty=!0,this.nativeLines=!1,this.glPoints=null,this.glIndices=null,this.shader=r,this.vao=new o.default.VertexArrayObject(e,i).addIndex(this.indexBuffer).addAttribute(this.buffer,r.attributes.aVertexPosition,e.FLOAT,!1,24,0).addAttribute(this.buffer,r.attributes.aColor,e.FLOAT,!1,24,8)}return t.prototype.reset=function(){this.points.length=0,this.indices.length=0},t.prototype.upload=function(){this.glPoints=new Float32Array(this.points),this.buffer.upload(this.glPoints),this.glIndices=new Uint16Array(this.indices),this.indexBuffer.upload(this.glIndices),this.dirty=!1},t.prototype.destroy=function(){this.color=null,this.points=null,this.indices=null,this.vao.destroy(),this.buffer.destroy(),this.indexBuffer.destroy(),this.gl=null,this.buffer=null,this.indexBuffer=null,this.glPoints=null,this.glIndices=null},t}();r.default=s},{"pixi-gl-core":15}],59:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=t("../../../Shader"),a=function(t){return t&&t.__esModule?t:{default:t}}(s),u=function(t){function e(r){return n(this,e),i(this,t.call(this,r,["attribute vec2 aVertexPosition;","attribute vec4 aColor;","uniform mat3 translationMatrix;","uniform mat3 projectionMatrix;","uniform float alpha;","uniform vec3 tint;","varying vec4 vColor;","void main(void){","   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vColor = aColor * vec4(tint * alpha, alpha);","}"].join("\n"),["varying vec4 vColor;","void main(void){","   gl_FragColor = vColor;","}"].join("\n")))}return o(e,t),e}(a.default);r.default=u},{"../../../Shader":44}],60:[function(t,e,r){"use strict";function n(t,e,r){var n=t.shape,i=n.x,u=n.y,h=void 0,l=void 0;if(t.type===s.SHAPES.CIRC?(h=n.radius,l=n.radius):(h=n.width,l=n.height),0!==h&&0!==l){var c=Math.floor(30*Math.sqrt(n.radius))||Math.floor(15*Math.sqrt(n.width+n.height)),d=2*Math.PI/c;if(t.fill){var f=(0,a.hex2rgb)(t.fillColor),p=t.fillAlpha,v=f[0]*p,g=f[1]*p,y=f[2]*p,m=e.points,_=e.indices,b=m.length/6;_.push(b);for(var x=0;x<c+1;x++)m.push(i,u,v,g,y,p),m.push(i+Math.sin(d*x)*h,u+Math.cos(d*x)*l,v,g,y,p),_.push(b++,b++);_.push(b-1)}if(t.lineWidth){var T=t.points;t.points=[];for(var w=0;w<c+1;w++)t.points.push(i+Math.sin(d*-w)*h,u+Math.cos(d*-w)*l);(0,o.default)(t,e,r),t.points=T}}}r.__esModule=!0,r.default=n;var i=t("./buildLine"),o=function(t){return t&&t.__esModule?t:{default:t}}(i),s=t("../../../const"),a=t("../../../utils")},{"../../../const":46,"../../../utils":125,"./buildLine":61}],61:[function(t,e,r){"use strict";function n(t,e){var r=t.points;if(0!==r.length){var n=new o.Point(r[0],r[1]),i=new o.Point(r[r.length-2],r[r.length-1]);if(n.x===i.x&&n.y===i.y){r=r.slice(),r.pop(),r.pop(),i=new o.Point(r[r.length-2],r[r.length-1]);var a=i.x+.5*(n.x-i.x),u=i.y+.5*(n.y-i.y);r.unshift(a,u),r.push(a,u)}var h=e.points,l=e.indices,c=r.length/2,d=r.length,f=h.length/6,p=t.lineWidth/2,v=(0,s.hex2rgb)(t.lineColor),g=t.lineAlpha,y=v[0]*g,m=v[1]*g,_=v[2]*g,b=r[0],x=r[1],T=r[2],w=r[3],E=0,S=0,O=-(x-w),M=b-T,P=0,C=0,R=0,A=0,I=Math.sqrt(O*O+M*M);O/=I,M/=I,O*=p,M*=p;var D=t.lineAlignment,L=2*(1-D),N=2*D;h.push(b-O*L,x-M*L,y,m,_,g),h.push(b+O*N,x+M*N,y,m,_,g);for(var B=1;B<c-1;++B){b=r[2*(B-1)],x=r[2*(B-1)+1],T=r[2*B],w=r[2*B+1],E=r[2*(B+1)],S=r[2*(B+1)+1],O=-(x-w),M=b-T,I=Math.sqrt(O*O+M*M),O/=I,M/=I,O*=p,M*=p,P=-(w-S),C=T-E,I=Math.sqrt(P*P+C*C),P/=I,C/=I,P*=p,C*=p;var F=-M+x-(-M+w),k=-O+T-(-O+b),j=(-O+b)*(-M+w)-(-O+T)*(-M+x),U=-C+S-(-C+w),X=-P+T-(-P+E),G=(-P+E)*(-C+w)-(-P+T)*(-C+S),W=F*X-U*k;if(Math.abs(W)<.1)W+=10.1,h.push(T-O*L,w-M*L,y,m,_,g),h.push(T+O*N,w+M*N,y,m,_,g);else{var H=(k*G-X*j)/W,V=(U*j-F*G)/W;(H-T)*(H-T)+(V-w)*(V-w)>196*p*p?(R=O-P,A=M-C,I=Math.sqrt(R*R+A*A),R/=I,A/=I,R*=p,A*=p,h.push(T-R*L,w-A*L),h.push(y,m,_,g),h.push(T+R*N,w+A*N),h.push(y,m,_,g),h.push(T-R*N*L,w-A*L),h.push(y,m,_,g),d++):(h.push(T+(H-T)*L,w+(V-w)*L),h.push(y,m,_,g),h.push(T-(H-T)*N,w-(V-w)*N),h.push(y,m,_,g))}}b=r[2*(c-2)],x=r[2*(c-2)+1],T=r[2*(c-1)],w=r[2*(c-1)+1],O=-(x-w),M=b-T,I=Math.sqrt(O*O+M*M),O/=I,M/=I,O*=p,M*=p,h.push(T-O*L,w-M*L),h.push(y,m,_,g),h.push(T+O*N,w+M*N),h.push(y,m,_,g),l.push(f);for(var Y=0;Y<d;++Y)l.push(f++);l.push(f-1)}}function i(t,e){var r=0,n=t.points;if(0!==n.length){var i=e.points,o=n.length/2,a=(0,s.hex2rgb)(t.lineColor),u=t.lineAlpha,h=a[0]*u,l=a[1]*u,c=a[2]*u;for(r=1;r<o;r++){var d=n[2*(r-1)],f=n[2*(r-1)+1],p=n[2*r],v=n[2*r+1];i.push(d,f),i.push(h,l,c,u),i.push(p,v),i.push(h,l,c,u)}}}r.__esModule=!0,r.default=function(t,e,r){t.nativeLines?i(t,r):n(t,e)};var o=t("../../../math"),s=t("../../../utils")},{"../../../math":70,"../../../utils":125}],62:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e,r){t.points=t.shape.points.slice();var n=t.points;if(t.fill&&n.length>=6){for(var i=[],o=t.holes,u=0;u<o.length;u++){var l=o[u];i.push(n.length/2),n=n.concat(l.points)}var c=e.points,d=e.indices,f=n.length/2,p=(0,a.hex2rgb)(t.fillColor),v=t.fillAlpha,g=p[0]*v,y=p[1]*v,m=p[2]*v,_=(0,h.default)(n,i,2);if(!_)return;for(var b=c.length/6,x=0;x<_.length;x+=3)d.push(_[x]+b),d.push(_[x]+b),d.push(_[x+1]+b),d.push(_[x+2]+b),d.push(_[x+2]+b);for(var T=0;T<f;T++)c.push(n[2*T],n[2*T+1],g,y,m,v)}t.lineWidth>0&&(0,
s.default)(t,e,r)}r.__esModule=!0,r.default=i;var o=t("./buildLine"),s=n(o),a=t("../../../utils"),u=t("earcut"),h=n(u)},{"../../../utils":125,"./buildLine":61,earcut:2}],63:[function(t,e,r){"use strict";function n(t,e,r){var n=t.shape,i=n.x,a=n.y,u=n.width,h=n.height;if(t.fill){var l=(0,s.hex2rgb)(t.fillColor),c=t.fillAlpha,d=l[0]*c,f=l[1]*c,p=l[2]*c,v=e.points,g=e.indices,y=v.length/6;v.push(i,a),v.push(d,f,p,c),v.push(i+u,a),v.push(d,f,p,c),v.push(i,a+h),v.push(d,f,p,c),v.push(i+u,a+h),v.push(d,f,p,c),g.push(y,y,y+1,y+2,y+3,y+3)}if(t.lineWidth){var m=t.points;t.points=[i,a,i+u,a,i+u,a+h,i,a+h,i,a],(0,o.default)(t,e,r),t.points=m}}r.__esModule=!0,r.default=n;var i=t("./buildLine"),o=function(t){return t&&t.__esModule?t:{default:t}}(i),s=t("../../../utils")},{"../../../utils":125,"./buildLine":61}],64:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e,r){var n=t.shape,i=n.x,o=n.y,a=n.width,h=n.height,d=n.radius,f=[];if(f.push(i,o+d),s(i,o+h-d,i,o+h,i+d,o+h,f),s(i+a-d,o+h,i+a,o+h,i+a,o+h-d,f),s(i+a,o+d,i+a,o,i+a-d,o,f),s(i+d,o,i,o,i,o+d+1e-10,f),t.fill){for(var p=(0,c.hex2rgb)(t.fillColor),v=t.fillAlpha,g=p[0]*v,y=p[1]*v,m=p[2]*v,_=e.points,b=e.indices,x=_.length/6,T=(0,u.default)(f,null,2),w=0,E=T.length;w<E;w+=3)b.push(T[w]+x),b.push(T[w]+x),b.push(T[w+1]+x),b.push(T[w+2]+x),b.push(T[w+2]+x);for(var S=0,O=f.length;S<O;S++)_.push(f[S],f[++S],g,y,m,v)}if(t.lineWidth){var M=t.points;t.points=f,(0,l.default)(t,e,r),t.points=M}}function o(t,e,r){return t+(e-t)*r}function s(t,e,r,n,i,s){for(var a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[],u=a,h=0,l=0,c=0,d=0,f=0,p=0,v=0,g=0;v<=20;++v)g=v/20,h=o(t,r,g),l=o(e,n,g),c=o(r,i,g),d=o(n,s,g),f=o(h,c,g),p=o(l,d,g),u.push(f,p);return u}r.__esModule=!0,r.default=i;var a=t("earcut"),u=n(a),h=t("./buildLine"),l=n(h),c=t("../../../utils")},{"../../../utils":125,"./buildLine":61,earcut:2}],65:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0,r.autoDetectRenderer=r.Application=r.Filter=r.SpriteMaskFilter=r.Quad=r.RenderTarget=r.ObjectRenderer=r.WebGLManager=r.Shader=r.CanvasRenderTarget=r.TextureUvs=r.VideoBaseTexture=r.BaseRenderTexture=r.RenderTexture=r.BaseTexture=r.TextureMatrix=r.Texture=r.Spritesheet=r.CanvasGraphicsRenderer=r.GraphicsRenderer=r.GraphicsData=r.Graphics=r.TextMetrics=r.TextStyle=r.Text=r.SpriteRenderer=r.CanvasTinter=r.CanvasSpriteRenderer=r.Sprite=r.TransformBase=r.TransformStatic=r.Transform=r.Container=r.DisplayObject=r.Bounds=r.glCore=r.WebGLRenderer=r.CanvasRenderer=r.ticker=r.utils=r.settings=void 0;var o=t("./const");Object.keys(o).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(r,t,{enumerable:!0,get:function(){return o[t]}})});var s=t("./math");Object.keys(s).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(r,t,{enumerable:!0,get:function(){return s[t]}})});var a=t("pixi-gl-core");Object.defineProperty(r,"glCore",{enumerable:!0,get:function(){return i(a).default}});var u=t("./display/Bounds");Object.defineProperty(r,"Bounds",{enumerable:!0,get:function(){return i(u).default}});var h=t("./display/DisplayObject");Object.defineProperty(r,"DisplayObject",{enumerable:!0,get:function(){return i(h).default}});var l=t("./display/Container");Object.defineProperty(r,"Container",{enumerable:!0,get:function(){return i(l).default}});var c=t("./display/Transform");Object.defineProperty(r,"Transform",{enumerable:!0,get:function(){return i(c).default}});var d=t("./display/TransformStatic");Object.defineProperty(r,"TransformStatic",{enumerable:!0,get:function(){return i(d).default}});var f=t("./display/TransformBase");Object.defineProperty(r,"TransformBase",{enumerable:!0,get:function(){return i(f).default}});var p=t("./sprites/Sprite");Object.defineProperty(r,"Sprite",{enumerable:!0,get:function(){return i(p).default}});var v=t("./sprites/canvas/CanvasSpriteRenderer");Object.defineProperty(r,"CanvasSpriteRenderer",{enumerable:!0,get:function(){return i(v).default}});var g=t("./sprites/canvas/CanvasTinter");Object.defineProperty(r,"CanvasTinter",{enumerable:!0,get:function(){return i(g).default}});var y=t("./sprites/webgl/SpriteRenderer");Object.defineProperty(r,"SpriteRenderer",{enumerable:!0,get:function(){return i(y).default}});var m=t("./text/Text");Object.defineProperty(r,"Text",{enumerable:!0,get:function(){return i(m).default}});var _=t("./text/TextStyle");Object.defineProperty(r,"TextStyle",{enumerable:!0,get:function(){return i(_).default}});var b=t("./text/TextMetrics");Object.defineProperty(r,"TextMetrics",{enumerable:!0,get:function(){return i(b).default}});var x=t("./graphics/Graphics");Object.defineProperty(r,"Graphics",{enumerable:!0,get:function(){return i(x).default}});var T=t("./graphics/GraphicsData");Object.defineProperty(r,"GraphicsData",{enumerable:!0,get:function(){return i(T).default}});var w=t("./graphics/webgl/GraphicsRenderer");Object.defineProperty(r,"GraphicsRenderer",{enumerable:!0,get:function(){return i(w).default}});var E=t("./graphics/canvas/CanvasGraphicsRenderer");Object.defineProperty(r,"CanvasGraphicsRenderer",{enumerable:!0,get:function(){return i(E).default}});var S=t("./textures/Spritesheet");Object.defineProperty(r,"Spritesheet",{enumerable:!0,get:function(){return i(S).default}});var O=t("./textures/Texture");Object.defineProperty(r,"Texture",{enumerable:!0,get:function(){return i(O).default}});var M=t("./textures/TextureMatrix");Object.defineProperty(r,"TextureMatrix",{enumerable:!0,get:function(){return i(M).default}});var P=t("./textures/BaseTexture");Object.defineProperty(r,"BaseTexture",{enumerable:!0,get:function(){return i(P).default}});var C=t("./textures/RenderTexture");Object.defineProperty(r,"RenderTexture",{enumerable:!0,get:function(){return i(C).default}});var R=t("./textures/BaseRenderTexture");Object.defineProperty(r,"BaseRenderTexture",{enumerable:!0,get:function(){return i(R).default}});var A=t("./textures/VideoBaseTexture");Object.defineProperty(r,"VideoBaseTexture",{enumerable:!0,get:function(){return i(A).default}});var I=t("./textures/TextureUvs");Object.defineProperty(r,"TextureUvs",{enumerable:!0,get:function(){return i(I).default}});var D=t("./renderers/canvas/utils/CanvasRenderTarget");Object.defineProperty(r,"CanvasRenderTarget",{enumerable:!0,get:function(){return i(D).default}});var L=t("./Shader");Object.defineProperty(r,"Shader",{enumerable:!0,get:function(){return i(L).default}});var N=t("./renderers/webgl/managers/WebGLManager");Object.defineProperty(r,"WebGLManager",{enumerable:!0,get:function(){return i(N).default}});var B=t("./renderers/webgl/utils/ObjectRenderer");Object.defineProperty(r,"ObjectRenderer",{enumerable:!0,get:function(){return i(B).default}});var F=t("./renderers/webgl/utils/RenderTarget");Object.defineProperty(r,"RenderTarget",{enumerable:!0,get:function(){return i(F).default}});var k=t("./renderers/webgl/utils/Quad");Object.defineProperty(r,"Quad",{enumerable:!0,get:function(){return i(k).default}});var j=t("./renderers/webgl/filters/spriteMask/SpriteMaskFilter");Object.defineProperty(r,"SpriteMaskFilter",{enumerable:!0,get:function(){return i(j).default}});var U=t("./renderers/webgl/filters/Filter");Object.defineProperty(r,"Filter",{enumerable:!0,get:function(){return i(U).default}});var X=t("./Application");Object.defineProperty(r,"Application",{enumerable:!0,get:function(){return i(X).default}});var G=t("./autoDetectRenderer");Object.defineProperty(r,"autoDetectRenderer",{enumerable:!0,get:function(){return G.autoDetectRenderer}});var W=t("./utils"),H=n(W),V=t("./ticker"),Y=n(V),z=t("./settings"),q=i(z),K=t("./renderers/canvas/CanvasRenderer"),Z=i(K),J=t("./renderers/webgl/WebGLRenderer"),Q=i(J);r.settings=q.default,r.utils=H,r.ticker=Y,r.CanvasRenderer=Z.default,r.WebGLRenderer=Q.default},{"./Application":43,"./Shader":44,"./autoDetectRenderer":45,"./const":46,"./display/Bounds":47,"./display/Container":48,"./display/DisplayObject":49,"./display/Transform":50,"./display/TransformBase":51,"./display/TransformStatic":52,"./graphics/Graphics":53,"./graphics/GraphicsData":54,"./graphics/canvas/CanvasGraphicsRenderer":55,"./graphics/webgl/GraphicsRenderer":57,"./math":70,"./renderers/canvas/CanvasRenderer":77,"./renderers/canvas/utils/CanvasRenderTarget":79,"./renderers/webgl/WebGLRenderer":84,"./renderers/webgl/filters/Filter":86,"./renderers/webgl/filters/spriteMask/SpriteMaskFilter":89,"./renderers/webgl/managers/WebGLManager":93,"./renderers/webgl/utils/ObjectRenderer":94,"./renderers/webgl/utils/Quad":95,"./renderers/webgl/utils/RenderTarget":96,"./settings":101,"./sprites/Sprite":102,"./sprites/canvas/CanvasSpriteRenderer":103,"./sprites/canvas/CanvasTinter":104,"./sprites/webgl/SpriteRenderer":106,"./text/Text":108,"./text/TextMetrics":109,"./text/TextStyle":110,"./textures/BaseRenderTexture":111,"./textures/BaseTexture":112,"./textures/RenderTexture":113,"./textures/Spritesheet":114,"./textures/Texture":115,"./textures/TextureMatrix":116,"./textures/TextureUvs":117,"./textures/VideoBaseTexture":118,"./ticker":121,"./utils":125,"pixi-gl-core":15}],66:[function(t,e,r){"use strict";function n(t){return t<0?-1:t>0?1:0}r.__esModule=!0;var i=t("./Matrix"),o=function(t){return t&&t.__esModule?t:{default:t}}(i),s=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],a=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],u=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],h=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],l=[],c=[];!function(){for(var t=0;t<16;t++){var e=[];c.push(e);for(var r=0;r<16;r++)for(var i=n(s[t]*s[r]+u[t]*a[r]),d=n(a[t]*s[r]+h[t]*a[r]),f=n(s[t]*u[r]+u[t]*h[r]),p=n(a[t]*u[r]+h[t]*h[r]),v=0;v<16;v++)if(s[v]===i&&a[v]===d&&u[v]===f&&h[v]===p){e.push(v);break}}for(var g=0;g<16;g++){var y=new o.default;y.set(s[g],a[g],u[g],h[g],0,0),l.push(y)}}();var d={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MIRROR_HORIZONTAL:12,uX:function(t){return s[t]},uY:function(t){return a[t]},vX:function(t){return u[t]},vY:function(t){return h[t]},inv:function(t){return 8&t?15&t:7&-t},add:function(t,e){return c[t][e]},sub:function(t,e){return c[t][d.inv(e)]},rotate180:function(t){return 4^t},isVertical:function(t){return 2==(3&t)},byDirection:function(t,e){return 2*Math.abs(t)<=Math.abs(e)?e>=0?d.S:d.N:2*Math.abs(e)<=Math.abs(t)?t>0?d.E:d.W:e>0?t>0?d.SE:d.SW:t>0?d.NE:d.NW},matrixAppendRotationInv:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=l[d.inv(e)];i.tx=r,i.ty=n,t.append(i)}};r.default=d},{"./Matrix":67}],67:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=t("./Point"),s=function(t){return t&&t.__esModule?t:{default:t}}(o),a=t("../const"),u=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;n(this,t),this.a=e,this.b=r,this.c=i,this.d=o,this.tx=s,this.ty=a,this.array=null}return t.prototype.fromArray=function(t){this.a=t[0],this.b=t[1],this.c=t[3],this.d=t[4],this.tx=t[2],this.ty=t[5]},t.prototype.set=function(t,e,r,n,i,o){return this.a=t,this.b=e,this.c=r,this.d=n,this.tx=i,this.ty=o,this},t.prototype.toArray=function(t,e){this.array||(this.array=new Float32Array(9));var r=e||this.array;return t?(r[0]=this.a,r[1]=this.b,r[2]=0,r[3]=this.c,r[4]=this.d,r[5]=0,r[6]=this.tx,r[7]=this.ty,r[8]=1):(r[0]=this.a,r[1]=this.c,r[2]=this.tx,r[3]=this.b,r[4]=this.d,r[5]=this.ty,r[6]=0,r[7]=0,r[8]=1),r},t.prototype.apply=function(t,e){e=e||new s.default;var r=t.x,n=t.y;return e.x=this.a*r+this.c*n+this.tx,e.y=this.b*r+this.d*n+this.ty,e},t.prototype.applyInverse=function(t,e){e=e||new s.default;var r=1/(this.a*this.d+this.c*-this.b),n=t.x,i=t.y;return e.x=this.d*r*n+-this.c*r*i+(this.ty*this.c-this.tx*this.d)*r,e.y=this.a*r*i+-this.b*r*n+(-this.ty*this.a+this.tx*this.b)*r,e},t.prototype.translate=function(t,e){return this.tx+=t,this.ty+=e,this},t.prototype.scale=function(t,e){return this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this},t.prototype.rotate=function(t){var e=Math.cos(t),r=Math.sin(t),n=this.a,i=this.c,o=this.tx;return this.a=n*e-this.b*r,this.b=n*r+this.b*e,this.c=i*e-this.d*r,this.d=i*r+this.d*e,this.tx=o*e-this.ty*r,this.ty=o*r+this.ty*e,this},t.prototype.append=function(t){var e=this.a,r=this.b,n=this.c,i=this.d;return this.a=t.a*e+t.b*n,this.b=t.a*r+t.b*i,this.c=t.c*e+t.d*n,this.d=t.c*r+t.d*i,this.tx=t.tx*e+t.ty*n+this.tx,this.ty=t.tx*r+t.ty*i+this.ty,this},t.prototype.setTransform=function(t,e,r,n,i,o,s,a,u){return this.a=Math.cos(s+u)*i,this.b=Math.sin(s+u)*i,this.c=-Math.sin(s-a)*o,this.d=Math.cos(s-a)*o,this.tx=t-(r*this.a+n*this.c),this.ty=e-(r*this.b+n*this.d),this},t.prototype.prepend=function(t){var e=this.tx;if(1!==t.a||0!==t.b||0!==t.c||1!==t.d){var r=this.a,n=this.c;this.a=r*t.a+this.b*t.c,this.b=r*t.b+this.b*t.d,this.c=n*t.a+this.d*t.c,this.d=n*t.b+this.d*t.d}return this.tx=e*t.a+this.ty*t.c+t.tx,this.ty=e*t.b+this.ty*t.d+t.ty,this},t.prototype.decompose=function(t){var e=this.a,r=this.b,n=this.c,i=this.d,o=-Math.atan2(-n,i),s=Math.atan2(r,e),u=Math.abs(o+s);return u<1e-5||Math.abs(a.PI_2-u)<1e-5?(t.rotation=s,e<0&&i>=0&&(t.rotation+=t.rotation<=0?Math.PI:-Math.PI),t.skew.x=t.skew.y=0):(t.rotation=0,t.skew.x=o,t.skew.y=s),t.scale.x=Math.sqrt(e*e+r*r),t.scale.y=Math.sqrt(n*n+i*i),t.position.x=this.tx,t.position.y=this.ty,t},t.prototype.invert=function(){var t=this.a,e=this.b,r=this.c,n=this.d,i=this.tx,o=t*n-e*r;return this.a=n/o,this.b=-e/o,this.c=-r/o,this.d=t/o,this.tx=(r*this.ty-n*i)/o,this.ty=-(t*this.ty-e*i)/o,this},t.prototype.identity=function(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this},t.prototype.clone=function(){var e=new t;return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e},t.prototype.copy=function(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t},i(t,null,[{key:"IDENTITY",get:function(){return new t}},{key:"TEMP_MATRIX",get:function(){return new t}}]),t}();r.default=u},{"../const":46,"./Point":69}],68:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=function(){function t(e,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;n(this,t),this._x=i,this._y=o,this.cb=e,this.scope=r}return t.prototype.set=function(t,e){var r=t||0,n=e||(0!==e?r:0);this._x===r&&this._y===n||(this._x=r,this._y=n,this.cb.call(this.scope))},t.prototype.copy=function(t){this._x===t.x&&this._y===t.y||(this._x=t.x,this._y=t.y,this.cb.call(this.scope))},i(t,[{key:"x",get:function(){return this._x},set:function(t){this._x!==t&&(this._x=t,this.cb.call(this.scope))}},{key:"y",get:function(){return this._y},set:function(t){this._y!==t&&(this._y=t,this.cb.call(this.scope))}}]),t}();r.default=o},{}],69:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;n(this,t),this.x=e,this.y=r}return t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.copy=function(t){this.set(t.x,t.y)},t.prototype.equals=function(t){return t.x===this.x&&t.y===this.y},t.prototype.set=function(t,e){this.x=t||0,this.y=e||(0!==e?this.x:0)},t}();r.default=i},{}],70:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t("./Point");Object.defineProperty(r,"Point",{enumerable:!0,get:function(){return n(i).default}});var o=t("./ObservablePoint");Object.defineProperty(r,"ObservablePoint",{enumerable:!0,get:function(){return n(o).default}});var s=t("./Matrix");Object.defineProperty(r,"Matrix",{enumerable:!0,get:function(){return n(s).default}});var a=t("./GroupD8");Object.defineProperty(r,"GroupD8",{enumerable:!0,get:function(){return n(a).default}});var u=t("./shapes/Circle");Object.defineProperty(r,"Circle",{enumerable:!0,get:function(){return n(u).default}});var h=t("./shapes/Ellipse");Object.defineProperty(r,"Ellipse",{enumerable:!0,get:function(){return n(h).default}});var l=t("./shapes/Polygon");Object.defineProperty(r,"Polygon",{enumerable:!0,get:function(){return n(l).default}});var c=t("./shapes/Rectangle");Object.defineProperty(r,"Rectangle",{enumerable:!0,get:function(){return n(c).default}});var d=t("./shapes/RoundedRectangle");Object.defineProperty(r,"RoundedRectangle",{enumerable:!0,get:function(){return n(d).default}})},{"./GroupD8":66,"./Matrix":67,"./ObservablePoint":68,"./Point":69,"./shapes/Circle":71,"./shapes/Ellipse":72,"./shapes/Polygon":73,"./shapes/Rectangle":74,"./shapes/RoundedRectangle":75}],71:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=t("./Rectangle"),o=function(t){return t&&t.__esModule?t:{default:t}}(i),s=t("../../const"),a=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;n(this,t),this.x=e,this.y=r,this.radius=i,this.type=s.SHAPES.CIRC}return t.prototype.clone=function(){return new t(this.x,this.y,this.radius)},t.prototype.contains=function(t,e){if(this.radius<=0)return!1;var r=this.radius*this.radius,n=this.x-t,i=this.y-e;return n*=n,i*=i,n+i<=r},t.prototype.getBounds=function(){return new o.default(this.x-this.radius,this.y-this.radius,2*this.radius,2*this.radius)},t}();r.default=a},{"../../const":46,"./Rectangle":74}],72:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=t("./Rectangle"),o=function(t){return t&&t.__esModule?t:{default:t}}(i),s=t("../../const"),a=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;n(this,t),this.x=e,this.y=r,this.width=i,this.height=o,this.type=s.SHAPES.ELIP}return t.prototype.clone=function(){return new t(this.x,this.y,this.width,this.height)},t.prototype.contains=function(t,e){if(this.width<=0||this.height<=0)return!1;var r=(t-this.x)/this.width,n=(e-this.y)/this.height;return r*=r,n*=n,r+n<=1},t.prototype.getBounds=function(){return new o.default(this.x-this.width,this.y-this.height,this.width,this.height)},t}();r.default=a},{"../../const":46,"./Rectangle":74}],73:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=t("../Point"),o=function(t){return t&&t.__esModule?t:{default:t}}(i),s=t("../../const"),a=function(){function t(){for(var e=arguments.length,r=Array(e),i=0;i<e;i++)r[i]=arguments[i];if(n(this,t),Array.isArray(r[0])&&(r=r[0]),r[0]instanceof o.default){for(var a=[],u=0,h=r.length;u<h;u++)a.push(r[u].x,r[u].y);r=a}this.closed=!0,this.points=r,this.type=s.SHAPES.POLY}return t.prototype.clone=function(){return new t(this.points.slice())},t.prototype.close=function(){var t=this.points;t[0]===t[t.length-2]&&t[1]===t[t.length-1]||t.push(t[0],t[1])},t.prototype.contains=function(t,e){for(var r=!1,n=this.points.length/2,i=0,o=n-1;i<n;o=i++){var s=this.points[2*i],a=this.points[2*i+1],u=this.points[2*o],h=this.points[2*o+1];a>e!=h>e&&t<(e-a)/(h-a)*(u-s)+s&&(r=!r)}return r},t}();r.default=a},{"../../const":46,"../Point":69}],74:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=t("../../const"),s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0;n(this,t),this.x=Number(e),this.y=Number(r),this.width=Number(i),this.height=Number(s),this.type=o.SHAPES.RECT}return t.prototype.clone=function(){return new t(this.x,this.y,this.width,this.height)},t.prototype.copy=function(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this},t.prototype.contains=function(t,e){return!(this.width<=0||this.height<=0)&&(t>=this.x&&t<this.x+this.width&&e>=this.y&&e<this.y+this.height)},t.prototype.pad=function(t,e){t=t||0,e=e||(0!==e?t:0),this.x-=t,this.y-=e,this.width+=2*t,this.height+=2*e},t.prototype.fit=function(t){this.x<t.x&&(this.width+=this.x,this.width<0&&(this.width=0),this.x=t.x),this.y<t.y&&(this.height+=this.y,this.height<0&&(this.height=0),this.y=t.y),this.x+this.width>t.x+t.width&&(this.width=t.width-this.x,this.width<0&&(this.width=0)),this.y+this.height>t.y+t.height&&(this.height=t.height-this.y,this.height<0&&(this.height=0))},t.prototype.enlarge=function(t){var e=Math.min(this.x,t.x),r=Math.max(this.x+this.width,t.x+t.width),n=Math.min(this.y,t.y),i=Math.max(this.y+this.height,t.y+t.height);this.x=e,this.width=r-e,this.y=n,this.height=i-n},i(t,[{key:"left",get:function(){return this.x}},{key:"right",get:function(){return this.x+this.width}},{key:"top",get:function(){return this.y}},{key:"bottom",get:function(){return this.y+this.height}}],[{key:"EMPTY",get:function(){return new t(0,0,0,0)}}]),t}();r.default=s},{"../../const":46}],75:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=t("../../const"),o=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:20;n(this,t),this.x=e,this.y=r,this.width=o,this.height=s,this.radius=a,this.type=i.SHAPES.RREC}return t.prototype.clone=function(){return new t(this.x,this.y,this.width,this.height,this.radius)},t.prototype.contains=function(t,e){if(this.width<=0||this.height<=0)return!1;if(t>=this.x&&t<=this.x+this.width&&e>=this.y&&e<=this.y+this.height){if(e>=this.y+this.radius&&e<=this.y+this.height-this.radius||t>=this.x+this.radius&&t<=this.x+this.width-this.radius)return!0;var r=t-(this.x+this.radius),n=e-(this.y+this.radius),i=this.radius*this.radius;if(r*r+n*n<=i)return!0;if((r=t-(this.x+this.width-this.radius))*r+n*n<=i)return!0;if(n=e-(this.y+this.height-this.radius),r*r+n*n<=i)return!0;if((r=t-(this.x+this.radius))*r+n*n<=i)return!0}return!1},t}();r.default=o},{"../../const":46}],76:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("../utils"),h=t("../math"),l=t("../const"),c=t("../settings"),d=n(c),f=t("../display/Container"),p=n(f),v=t("../textures/RenderTexture"),g=n(v),y=t("eventemitter3"),m=n(y),_=new h.Matrix,b=function(t){function e(r,n,s,a){i(this,e);var c=o(this,t.call(this));return(0,u.sayHello)(r),"number"==typeof n&&(n=Object.assign({width:n,height:s||d.default.RENDER_OPTIONS.height},a)),n=Object.assign({},d.default.RENDER_OPTIONS,n),c.options=n,c.type=l.RENDERER_TYPE.UNKNOWN,c.screen=new h.Rectangle(0,0,n.width,n.height),c.view=n.view||document.createElement("canvas"),c.resolution=n.resolution||d.default.RESOLUTION,c.transparent=n.transparent,c.autoResize=n.autoResize||!1,c.blendModes=null,c.preserveDrawingBuffer=n.preserveDrawingBuffer,c.clearBeforeRender=n.clearBeforeRender,c.roundPixels=n.roundPixels,c._backgroundColor=0,c._backgroundColorRgba=[0,0,0,0],c._backgroundColorString="#000000",c.backgroundColor=n.backgroundColor||c._backgroundColor,c._tempDisplayObjectParent=new p.default,c._lastObjectRendered=c._tempDisplayObjectParent,c}return s(e,t),e.prototype.resize=function(t,e){this.screen.width=t,this.screen.height=e,this.view.width=t*this.resolution,this.view.height=e*this.resolution,this.autoResize&&(this.view.style.width=t+"px",this.view.style.height=e+"px")},e.prototype.generateTexture=function(t,e,r,n){n=n||t.getLocalBounds();var i=g.default.create(0|n.width,0|n.height,e,r);return _.tx=-n.x,_.ty=-n.y,this.render(t,i,!1,_,!0),i},e.prototype.destroy=function(t){t&&this.view.parentNode&&this.view.parentNode.removeChild(this.view),this.type=l.RENDERER_TYPE.UNKNOWN,this.view=null,this.screen=null,this.resolution=0,this.transparent=!1,this.autoResize=!1,this.blendModes=null,this.options=null,this.preserveDrawingBuffer=!1,this.clearBeforeRender=!1,this.roundPixels=!1,this._backgroundColor=0,this._backgroundColorRgba=null,this._backgroundColorString=null,this._tempDisplayObjectParent=null,this._lastObjectRendered=null},a(e,[{key:"width",get:function(){return this.view.width}},{key:"height",get:function(){return this.view.height}},{key:"backgroundColor",get:function(){return this._backgroundColor},set:function(t){this._backgroundColor=t,this._backgroundColorString=(0,u.hex2string)(t),(0,u.hex2rgb)(t,this._backgroundColorRgba)}}]),e}(m.default);r.default=b},{"../const":46,"../display/Container":48,"../math":70,"../settings":101,"../textures/RenderTexture":113,"../utils":125,eventemitter3:3}],77:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("../SystemRenderer"),u=n(a),h=t("./utils/CanvasMaskManager"),l=n(h),c=t("./utils/CanvasRenderTarget"),d=n(c),f=t("./utils/mapCanvasBlendModesToPixi"),p=n(f),v=t("../../utils"),g=t("../../const"),y=t("../../settings"),m=n(y),_=function(t){function e(r,n,s){i(this,e);var a=o(this,t.call(this,"Canvas",r,n,s));return a.type=g.RENDERER_TYPE.CANVAS,a.rootContext=a.view.getContext("2d",{alpha:a.transparent}),a.context=a.rootContext,a.refresh=!0,a.maskManager=new l.default(a),a.smoothProperty="imageSmoothingEnabled",a.rootContext.imageSmoothingEnabled||(a.rootContext.webkitImageSmoothingEnabled?a.smoothProperty="webkitImageSmoothingEnabled":a.rootContext.mozImageSmoothingEnabled?a.smoothProperty="mozImageSmoothingEnabled":a.rootContext.oImageSmoothingEnabled?a.smoothProperty="oImageSmoothingEnabled":a.rootContext.msImageSmoothingEnabled&&(a.smoothProperty="msImageSmoothingEnabled")),a.initPlugins(),a.blendModes=(0,p.default)(),a._activeBlendMode=null,a.renderingToScreen=!1,a.resize(a.options.width,a.options.height),a}return s(e,t),e.prototype.render=function(t,e,r,n,i){if(this.view){this.renderingToScreen=!e,this.emit("prerender");var o=this.resolution;e?(e=e.baseTexture||e,e._canvasRenderTarget||(e._canvasRenderTarget=new d.default(e.width,e.height,e.resolution),e.source=e._canvasRenderTarget.canvas,e.valid=!0),this.context=e._canvasRenderTarget.context,this.resolution=e._canvasRenderTarget.resolution):this.context=this.rootContext;var s=this.context;if(e||(this._lastObjectRendered=t),!i){var a=t.parent,u=this._tempDisplayObjectParent.transform.worldTransform;n?(n.copy(u),this._tempDisplayObjectParent.transform._worldID=-1):u.identity(),t.parent=this._tempDisplayObjectParent,t.updateTransform(),t.parent=a}s.save(),s.setTransform(1,0,0,1,0,0),s.globalAlpha=1,this._activeBlendMode=g.BLEND_MODES.NORMAL,s.globalCompositeOperation=this.blendModes[g.BLEND_MODES.NORMAL],navigator.isCocoonJS&&this.view.screencanvas&&(s.fillStyle="black",s.clear()),(void 0!==r?r:this.clearBeforeRender)&&this.renderingToScreen&&(this.transparent?s.clearRect(0,0,this.width,this.height):(s.fillStyle=this._backgroundColorString,s.fillRect(0,0,this.width,this.height)));var h=this.context;this.context=s,t.renderCanvas(this),this.context=h,s.restore(),this.resolution=o,this.emit("postrender")}},e.prototype.clear=function(t){var e=this.context;t=t||this._backgroundColorString,!this.transparent&&t?(e.fillStyle=t,e.fillRect(0,0,this.width,this.height)):e.clearRect(0,0,this.width,this.height)},e.prototype.setBlendMode=function(t){this._activeBlendMode!==t&&(this._activeBlendMode=t,this.context.globalCompositeOperation=this.blendModes[t])},e.prototype.destroy=function(e){this.destroyPlugins(),t.prototype.destroy.call(this,e),this.context=null,this.refresh=!0,this.maskManager.destroy(),this.maskManager=null,this.smoothProperty=null},e.prototype.resize=function(e,r){t.prototype.resize.call(this,e,r),this.smoothProperty&&(this.rootContext[this.smoothProperty]=m.default.SCALE_MODE===g.SCALE_MODES.LINEAR)},e.prototype.invalidateBlendMode=function(){this._activeBlendMode=this.blendModes.indexOf(this.context.globalCompositeOperation)},e}(u.default);r.default=_,v.pluginTarget.mixin(_)},{"../../const":46,"../../settings":101,"../../utils":125,"../SystemRenderer":76,"./utils/CanvasMaskManager":78,"./utils/CanvasRenderTarget":79,"./utils/mapCanvasBlendModesToPixi":81}],78:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=t("../../../const"),o=function(){function t(e){n(this,t),this.renderer=e}return t.prototype.pushMask=function(t){var e=this.renderer;e.context.save();var r=t.alpha,n=t.transform.worldTransform,i=e.resolution;e.context.setTransform(n.a*i,n.b*i,n.c*i,n.d*i,n.tx*i,n.ty*i),t._texture||(this.renderGraphicsShape(t),e.context.clip()),t.worldAlpha=r},t.prototype.renderGraphicsShape=function(t){
var e=this.renderer.context,r=t.graphicsData.length;if(0!==r){e.beginPath();for(var n=0;n<r;n++){var o=t.graphicsData[n],s=o.shape;if(o.type===i.SHAPES.POLY){var a=s.points;e.moveTo(a[0],a[1]);for(var u=1;u<a.length/2;u++)e.lineTo(a[2*u],a[2*u+1]);a[0]===a[a.length-2]&&a[1]===a[a.length-1]&&e.closePath()}else if(o.type===i.SHAPES.RECT)e.rect(s.x,s.y,s.width,s.height),e.closePath();else if(o.type===i.SHAPES.CIRC)e.arc(s.x,s.y,s.radius,0,2*Math.PI),e.closePath();else if(o.type===i.SHAPES.ELIP){var h=2*s.width,l=2*s.height,c=s.x-h/2,d=s.y-l/2,f=h/2*.5522848,p=l/2*.5522848,v=c+h,g=d+l,y=c+h/2,m=d+l/2;e.moveTo(c,m),e.bezierCurveTo(c,m-p,y-f,d,y,d),e.bezierCurveTo(y+f,d,v,m-p,v,m),e.bezierCurveTo(v,m+p,y+f,g,y,g),e.bezierCurveTo(y-f,g,c,m+p,c,m),e.closePath()}else if(o.type===i.SHAPES.RREC){var _=s.x,b=s.y,x=s.width,T=s.height,w=s.radius,E=Math.min(x,T)/2|0;w=w>E?E:w,e.moveTo(_,b+w),e.lineTo(_,b+T-w),e.quadraticCurveTo(_,b+T,_+w,b+T),e.lineTo(_+x-w,b+T),e.quadraticCurveTo(_+x,b+T,_+x,b+T-w),e.lineTo(_+x,b+w),e.quadraticCurveTo(_+x,b,_+x-w,b),e.lineTo(_+w,b),e.quadraticCurveTo(_,b,_,b+w),e.closePath()}}}},t.prototype.popMask=function(t){t.context.restore(),t.invalidateBlendMode()},t.prototype.destroy=function(){},t}();r.default=o},{"../../../const":46}],79:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=t("../../../settings"),s=function(t){return t&&t.__esModule?t:{default:t}}(o),a=function(){function t(e,r,i){n(this,t),this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.resolution=i||s.default.RESOLUTION,this.resize(e,r)}return t.prototype.clear=function(){this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},t.prototype.resize=function(t,e){this.canvas.width=t*this.resolution,this.canvas.height=e*this.resolution},t.prototype.destroy=function(){this.context=null,this.canvas=null},i(t,[{key:"width",get:function(){return this.canvas.width},set:function(t){this.canvas.width=t}},{key:"height",get:function(){return this.canvas.height},set:function(t){this.canvas.height=t}}]),t}();r.default=a},{"../../../settings":101}],80:[function(t,e,r){"use strict";function n(t){var e=document.createElement("canvas");e.width=6,e.height=1;var r=e.getContext("2d");return r.fillStyle=t,r.fillRect(0,0,6,1),e}function i(){if("undefined"==typeof document)return!1;var t=n("#ff00ff"),e=n("#ffff00"),r=document.createElement("canvas");r.width=6,r.height=1;var i=r.getContext("2d");i.globalCompositeOperation="multiply",i.drawImage(t,0,0),i.drawImage(e,2,0);var o=i.getImageData(2,0,1,1);if(!o)return!1;var s=o.data;return 255===s[0]&&0===s[1]&&0===s[2]}r.__esModule=!0,r.default=i},{}],81:[function(t,e,r){"use strict";function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,s.default)()?(t[i.BLEND_MODES.NORMAL]="source-over",t[i.BLEND_MODES.ADD]="lighter",t[i.BLEND_MODES.MULTIPLY]="multiply",t[i.BLEND_MODES.SCREEN]="screen",t[i.BLEND_MODES.OVERLAY]="overlay",t[i.BLEND_MODES.DARKEN]="darken",t[i.BLEND_MODES.LIGHTEN]="lighten",t[i.BLEND_MODES.COLOR_DODGE]="color-dodge",t[i.BLEND_MODES.COLOR_BURN]="color-burn",t[i.BLEND_MODES.HARD_LIGHT]="hard-light",t[i.BLEND_MODES.SOFT_LIGHT]="soft-light",t[i.BLEND_MODES.DIFFERENCE]="difference",t[i.BLEND_MODES.EXCLUSION]="exclusion",t[i.BLEND_MODES.HUE]="hue",t[i.BLEND_MODES.SATURATION]="saturate",t[i.BLEND_MODES.COLOR]="color",t[i.BLEND_MODES.LUMINOSITY]="luminosity"):(t[i.BLEND_MODES.NORMAL]="source-over",t[i.BLEND_MODES.ADD]="lighter",t[i.BLEND_MODES.MULTIPLY]="source-over",t[i.BLEND_MODES.SCREEN]="source-over",t[i.BLEND_MODES.OVERLAY]="source-over",t[i.BLEND_MODES.DARKEN]="source-over",t[i.BLEND_MODES.LIGHTEN]="source-over",t[i.BLEND_MODES.COLOR_DODGE]="source-over",t[i.BLEND_MODES.COLOR_BURN]="source-over",t[i.BLEND_MODES.HARD_LIGHT]="source-over",t[i.BLEND_MODES.SOFT_LIGHT]="source-over",t[i.BLEND_MODES.DIFFERENCE]="source-over",t[i.BLEND_MODES.EXCLUSION]="source-over",t[i.BLEND_MODES.HUE]="source-over",t[i.BLEND_MODES.SATURATION]="source-over",t[i.BLEND_MODES.COLOR]="source-over",t[i.BLEND_MODES.LUMINOSITY]="source-over"),t[i.BLEND_MODES.NORMAL_NPM]=t[i.BLEND_MODES.NORMAL],t[i.BLEND_MODES.ADD_NPM]=t[i.BLEND_MODES.ADD],t[i.BLEND_MODES.SCREEN_NPM]=t[i.BLEND_MODES.SCREEN],t}r.__esModule=!0,r.default=n;var i=t("../../../const"),o=t("./canUseNewCanvasBlendModes"),s=function(t){return t&&t.__esModule?t:{default:t}}(o)},{"../../../const":46,"./canUseNewCanvasBlendModes":80}],82:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=t("../../const"),o=t("../../settings"),s=function(t){return t&&t.__esModule?t:{default:t}}(o),a=function(){function t(e){n(this,t),this.renderer=e,this.count=0,this.checkCount=0,this.maxIdle=s.default.GC_MAX_IDLE,this.checkCountMax=s.default.GC_MAX_CHECK_COUNT,this.mode=s.default.GC_MODE}return t.prototype.update=function(){this.count++,this.mode!==i.GC_MODES.MANUAL&&++this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())},t.prototype.run=function(){for(var t=this.renderer.textureManager,e=t._managedTextures,r=!1,n=0;n<e.length;n++){var i=e[n];!i._glRenderTargets&&this.count-i.touched>this.maxIdle&&(t.destroyTexture(i,!0),e[n]=null,r=!0)}if(r){for(var o=0,s=0;s<e.length;s++)null!==e[s]&&(e[o++]=e[s]);e.length=o}},t.prototype.unload=function(t){var e=this.renderer.textureManager;t._texture&&t._texture._glRenderTargets&&e.destroyTexture(t._texture,!0);for(var r=t.children.length-1;r>=0;r--)this.unload(t.children[r])},t}();r.default=a},{"../../const":46,"../../settings":101}],83:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=t("pixi-gl-core"),o=t("../../const"),s=t("./utils/RenderTarget"),a=function(t){return t&&t.__esModule?t:{default:t}}(s),u=t("../../utils"),h=function(){function t(e){n(this,t),this.renderer=e,this.gl=e.gl,this._managedTextures=[]}return t.prototype.bindTexture=function(){},t.prototype.getTexture=function(){},t.prototype.updateTexture=function(t,e){var r=this.gl,n=!!t._glRenderTargets;if(!t.hasLoaded)return null;var s=this.renderer.boundTextures;if(void 0===e){e=0;for(var u=0;u<s.length;++u)if(s[u]===t){e=u;break}}s[e]=t,r.activeTexture(r.TEXTURE0+e);var h=t._glTextures[this.renderer.CONTEXT_UID];if(h)n?t._glRenderTargets[this.renderer.CONTEXT_UID].resize(t.width,t.height):h.upload(t.source);else{if(n){var l=new a.default(this.gl,t.width,t.height,t.scaleMode,t.resolution);l.resize(t.width,t.height),t._glRenderTargets[this.renderer.CONTEXT_UID]=l,h=l.texture}else h=new i.GLTexture(this.gl,null,null,null,null),h.bind(e),h.premultiplyAlpha=!0,h.upload(t.source);t._glTextures[this.renderer.CONTEXT_UID]=h,t.on("update",this.updateTexture,this),t.on("dispose",this.destroyTexture,this),this._managedTextures.push(t),t.isPowerOfTwo?(t.mipmap&&h.enableMipmap(),t.wrapMode===o.WRAP_MODES.CLAMP?h.enableWrapClamp():t.wrapMode===o.WRAP_MODES.REPEAT?h.enableWrapRepeat():h.enableWrapMirrorRepeat()):h.enableWrapClamp(),t.scaleMode===o.SCALE_MODES.NEAREST?h.enableNearestScaling():h.enableLinearScaling()}return h},t.prototype.destroyTexture=function(t,e){if(t=t.baseTexture||t,t.hasLoaded){var r=this.renderer.CONTEXT_UID,n=t._glTextures,i=t._glRenderTargets;if(n[r]&&(this.renderer.unbindTexture(t),n[r].destroy(),t.off("update",this.updateTexture,this),t.off("dispose",this.destroyTexture,this),delete n[r],!e)){var o=this._managedTextures.indexOf(t);-1!==o&&(0,u.removeItems)(this._managedTextures,o,1)}i&&i[r]&&(i[r].destroy(),delete i[r])}},t.prototype.removeAll=function(){for(var t=0;t<this._managedTextures.length;++t){var e=this._managedTextures[t];e._glTextures[this.renderer.CONTEXT_UID]&&delete e._glTextures[this.renderer.CONTEXT_UID]}},t.prototype.destroy=function(){for(var t=0;t<this._managedTextures.length;++t){var e=this._managedTextures[t];this.destroyTexture(e,!0),e.off("update",this.updateTexture,this),e.off("dispose",this.destroyTexture,this)}this._managedTextures=null},t}();r.default=h},{"../../const":46,"../../utils":125,"./utils/RenderTarget":96,"pixi-gl-core":15}],84:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("../SystemRenderer"),u=n(a),h=t("./managers/MaskManager"),l=n(h),c=t("./managers/StencilManager"),d=n(c),f=t("./managers/FilterManager"),p=n(f),v=t("./utils/RenderTarget"),g=n(v),y=t("./utils/ObjectRenderer"),m=n(y),_=t("./TextureManager"),b=n(_),x=t("../../textures/BaseTexture"),T=n(x),w=t("./TextureGarbageCollector"),E=n(w),S=t("./WebGLState"),O=n(S),M=t("./utils/mapWebGLDrawModesToPixi"),P=n(M),C=t("./utils/validateContext"),R=n(C),A=t("../../utils"),I=t("pixi-gl-core"),D=n(I),L=t("../../const"),N=0,B=function(t){function e(r,n,s){i(this,e);var a=o(this,t.call(this,"WebGL",r,n,s));return a.legacy=a.options.legacy,a.legacy&&(D.default.VertexArrayObject.FORCE_NATIVE=!0),a.type=L.RENDERER_TYPE.WEBGL,a.handleContextLost=a.handleContextLost.bind(a),a.handleContextRestored=a.handleContextRestored.bind(a),a.view.addEventListener("webglcontextlost",a.handleContextLost,!1),a.view.addEventListener("webglcontextrestored",a.handleContextRestored,!1),a._contextOptions={alpha:a.transparent,antialias:a.options.antialias,premultipliedAlpha:a.transparent&&"notMultiplied"!==a.transparent,stencil:!0,preserveDrawingBuffer:a.options.preserveDrawingBuffer,powerPreference:a.options.powerPreference},a._backgroundColorRgba[3]=a.transparent?0:1,a.maskManager=new l.default(a),a.stencilManager=new d.default(a),a.emptyRenderer=new m.default(a),a.currentRenderer=a.emptyRenderer,a.textureManager=null,a.filterManager=null,a.initPlugins(),a.options.context&&(0,R.default)(a.options.context),a.gl=a.options.context||D.default.createContext(a.view,a._contextOptions),a.CONTEXT_UID=N++,a.state=new O.default(a.gl),a.renderingToScreen=!0,a.boundTextures=null,a._activeShader=null,a._activeVao=null,a._activeRenderTarget=null,a._initContext(),a.drawModes=(0,P.default)(a.gl),a._nextTextureLocation=0,a.setBlendMode(0),a}return s(e,t),e.prototype._initContext=function(){var t=this.gl;t.isContextLost()&&t.getExtension("WEBGL_lose_context")&&t.getExtension("WEBGL_lose_context").restoreContext();var e=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);this._activeShader=null,this._activeVao=null,this.boundTextures=new Array(e),this.emptyTextures=new Array(e),this.textureManager=new b.default(this),this.filterManager=new p.default(this),this.textureGC=new E.default(this),this.state.resetToDefault(),this.rootRenderTarget=new g.default(t,this.width,this.height,null,this.resolution,!0),this.rootRenderTarget.clearColor=this._backgroundColorRgba,this.bindRenderTarget(this.rootRenderTarget);var r=new D.default.GLTexture.fromData(t,null,1,1),n={_glTextures:{}};n._glTextures[this.CONTEXT_UID]={};for(var i=0;i<e;i++){var o=new T.default;o._glTextures[this.CONTEXT_UID]=r,this.boundTextures[i]=n,this.emptyTextures[i]=o,this.bindTexture(null,i)}this.emit("context",t),this.resize(this.screen.width,this.screen.height)},e.prototype.render=function(t,e,r,n,i){if(this.renderingToScreen=!e,this.emit("prerender"),this.gl&&!this.gl.isContextLost()){if(this._nextTextureLocation=0,e||(this._lastObjectRendered=t),!i){var o=t.parent;t.parent=this._tempDisplayObjectParent,t.updateTransform(),t.parent=o}this.bindRenderTexture(e,n),this.currentRenderer.start(),(void 0!==r?r:this.clearBeforeRender)&&this._activeRenderTarget.clear(),t.renderWebGL(this),this.currentRenderer.flush(),this.textureGC.update(),this.emit("postrender")}},e.prototype.setObjectRenderer=function(t){this.currentRenderer!==t&&(this.currentRenderer.stop(),this.currentRenderer=t,this.currentRenderer.start())},e.prototype.flush=function(){this.setObjectRenderer(this.emptyRenderer)},e.prototype.resize=function(t,e){u.default.prototype.resize.call(this,t,e),this.rootRenderTarget.resize(t,e),this._activeRenderTarget===this.rootRenderTarget&&(this.rootRenderTarget.activate(),this._activeShader&&(this._activeShader.uniforms.projectionMatrix=this.rootRenderTarget.projectionMatrix.toArray(!0)))},e.prototype.setBlendMode=function(t){this.state.setBlendMode(t)},e.prototype.clear=function(t){this._activeRenderTarget.clear(t)},e.prototype.setTransform=function(t){this._activeRenderTarget.transform=t},e.prototype.clearRenderTexture=function(t,e){var r=t.baseTexture,n=r._glRenderTargets[this.CONTEXT_UID];return n&&n.clear(e),this},e.prototype.bindRenderTexture=function(t,e){var r=void 0;if(t){var n=t.baseTexture;n._glRenderTargets[this.CONTEXT_UID]||this.textureManager.updateTexture(n,0),this.unbindTexture(n),r=n._glRenderTargets[this.CONTEXT_UID],r.setFrame(t.frame)}else r=this.rootRenderTarget;return r.transform=e,this.bindRenderTarget(r),this},e.prototype.bindRenderTarget=function(t){return t!==this._activeRenderTarget&&(this._activeRenderTarget=t,t.activate(),this._activeShader&&(this._activeShader.uniforms.projectionMatrix=t.projectionMatrix.toArray(!0)),this.stencilManager.setMaskStack(t.stencilMaskStack)),this},e.prototype.bindShader=function(t,e){return this._activeShader!==t&&(this._activeShader=t,t.bind(),!1!==e&&(t.uniforms.projectionMatrix=this._activeRenderTarget.projectionMatrix.toArray(!0))),this},e.prototype.bindTexture=function(t,e,r){if(t=t||this.emptyTextures[e],t=t.baseTexture||t,t.touched=this.textureGC.count,r)e=e||0;else{for(var n=0;n<this.boundTextures.length;n++)if(this.boundTextures[n]===t)return n;void 0===e&&(this._nextTextureLocation++,this._nextTextureLocation%=this.boundTextures.length,e=this.boundTextures.length-this._nextTextureLocation-1)}var i=this.gl,o=t._glTextures[this.CONTEXT_UID];return o?(this.boundTextures[e]=t,i.activeTexture(i.TEXTURE0+e),i.bindTexture(i.TEXTURE_2D,o.texture)):this.textureManager.updateTexture(t,e),e},e.prototype.unbindTexture=function(t){var e=this.gl;t=t.baseTexture||t;for(var r=0;r<this.boundTextures.length;r++)this.boundTextures[r]===t&&(this.boundTextures[r]=this.emptyTextures[r],e.activeTexture(e.TEXTURE0+r),e.bindTexture(e.TEXTURE_2D,this.emptyTextures[r]._glTextures[this.CONTEXT_UID].texture));return this},e.prototype.createVao=function(){return new D.default.VertexArrayObject(this.gl,this.state.attribState)},e.prototype.bindVao=function(t){return this._activeVao===t?this:(t?t.bind():this._activeVao&&this._activeVao.unbind(),this._activeVao=t,this)},e.prototype.reset=function(){this.setObjectRenderer(this.emptyRenderer),this.bindVao(null),this._activeShader=null,this._activeRenderTarget=this.rootRenderTarget;for(var t=0;t<this.boundTextures.length;t++)this.boundTextures[t]=this.emptyTextures[t];return this.rootRenderTarget.activate(),this.state.resetToDefault(),this},e.prototype.handleContextLost=function(t){t.preventDefault()},e.prototype.handleContextRestored=function(){this.textureManager.removeAll(),this.filterManager.destroy(!0),this._initContext()},e.prototype.destroy=function(e){this.destroyPlugins(),this.view.removeEventListener("webglcontextlost",this.handleContextLost),this.view.removeEventListener("webglcontextrestored",this.handleContextRestored),this.textureManager.destroy(),t.prototype.destroy.call(this,e),this.uid=0,this.maskManager.destroy(),this.stencilManager.destroy(),this.filterManager.destroy(),this.maskManager=null,this.filterManager=null,this.textureManager=null,this.currentRenderer=null,this.handleContextLost=null,this.handleContextRestored=null,this._contextOptions=null,this.gl.useProgram(null),this.gl.getExtension("WEBGL_lose_context")&&this.gl.getExtension("WEBGL_lose_context").loseContext(),this.gl=null},e}(u.default);r.default=B,A.pluginTarget.mixin(B)},{"../../const":46,"../../textures/BaseTexture":112,"../../utils":125,"../SystemRenderer":76,"./TextureGarbageCollector":82,"./TextureManager":83,"./WebGLState":85,"./managers/FilterManager":90,"./managers/MaskManager":91,"./managers/StencilManager":92,"./utils/ObjectRenderer":94,"./utils/RenderTarget":96,"./utils/mapWebGLDrawModesToPixi":99,"./utils/validateContext":100,"pixi-gl-core":15}],85:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=t("./utils/mapWebGLBlendModesToPixi"),o=function(t){return t&&t.__esModule?t:{default:t}}(i),s=function(){function t(e){n(this,t),this.activeState=new Uint8Array(16),this.defaultState=new Uint8Array(16),this.defaultState[0]=1,this.stackIndex=0,this.stack=[],this.gl=e,this.maxAttribs=e.getParameter(e.MAX_VERTEX_ATTRIBS),this.attribState={tempAttribState:new Array(this.maxAttribs),attribState:new Array(this.maxAttribs)},this.blendModes=(0,o.default)(e),this.nativeVaoExtension=e.getExtension("OES_vertex_array_object")||e.getExtension("MOZ_OES_vertex_array_object")||e.getExtension("WEBKIT_OES_vertex_array_object")}return t.prototype.push=function(){var t=this.stack[this.stackIndex];t||(t=this.stack[this.stackIndex]=new Uint8Array(16)),++this.stackIndex;for(var e=0;e<this.activeState.length;e++)t[e]=this.activeState[e]},t.prototype.pop=function(){var t=this.stack[--this.stackIndex];this.setState(t)},t.prototype.setState=function(t){this.setBlend(t[0]),this.setDepthTest(t[1]),this.setFrontFace(t[2]),this.setCullFace(t[3]),this.setBlendMode(t[4])},t.prototype.setBlend=function(t){t=t?1:0,this.activeState[0]!==t&&(this.activeState[0]=t,this.gl[t?"enable":"disable"](this.gl.BLEND))},t.prototype.setBlendMode=function(t){if(t!==this.activeState[4]){this.activeState[4]=t;var e=this.blendModes[t];2===e.length?this.gl.blendFunc(e[0],e[1]):this.gl.blendFuncSeparate(e[0],e[1],e[2],e[3])}},t.prototype.setDepthTest=function(t){t=t?1:0,this.activeState[1]!==t&&(this.activeState[1]=t,this.gl[t?"enable":"disable"](this.gl.DEPTH_TEST))},t.prototype.setCullFace=function(t){t=t?1:0,this.activeState[3]!==t&&(this.activeState[3]=t,this.gl[t?"enable":"disable"](this.gl.CULL_FACE))},t.prototype.setFrontFace=function(t){t=t?1:0,this.activeState[2]!==t&&(this.activeState[2]=t,this.gl.frontFace(this.gl[t?"CW":"CCW"]))},t.prototype.resetAttributes=function(){for(var t=0;t<this.attribState.tempAttribState.length;t++)this.attribState.tempAttribState[t]=0;for(var e=0;e<this.attribState.attribState.length;e++)this.attribState.attribState[e]=0;for(var r=1;r<this.maxAttribs;r++)this.gl.disableVertexAttribArray(r)},t.prototype.resetToDefault=function(){this.nativeVaoExtension&&this.nativeVaoExtension.bindVertexArrayOES(null),this.resetAttributes();for(var t=0;t<this.activeState.length;++t)this.activeState[t]=32;this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.setState(this.defaultState)},t}();r.default=s},{"./utils/mapWebGLBlendModesToPixi":98}],86:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=t("./extractUniformsFromSrc"),a=n(s),u=t("../../../utils"),h=t("../../../const"),l=t("../../../settings"),c=n(l),d={},f=function(){function t(e,r,n){i(this,t),this.vertexSrc=e||t.defaultVertexSrc,this.fragmentSrc=r||t.defaultFragmentSrc,this._blendMode=h.BLEND_MODES.NORMAL,this.uniformData=n||(0,a.default)(this.vertexSrc,this.fragmentSrc,"projectionMatrix|uSampler"),this.uniforms={};for(var o in this.uniformData)this.uniforms[o]=this.uniformData[o].value,this.uniformData[o].type&&(this.uniformData[o].type=this.uniformData[o].type.toLowerCase());this.glShaders={},d[this.vertexSrc+this.fragmentSrc]||(d[this.vertexSrc+this.fragmentSrc]=(0,u.uid)()),this.glShaderKey=d[this.vertexSrc+this.fragmentSrc],this.padding=4,this.resolution=c.default.FILTER_RESOLUTION,this.enabled=!0,this.autoFit=!0}return t.prototype.apply=function(t,e,r,n,i){t.applyFilter(this,e,r,n)},o(t,[{key:"blendMode",get:function(){return this._blendMode},set:function(t){this._blendMode=t}}],[{key:"defaultVertexSrc",get:function(){return["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","uniform mat3 projectionMatrix;","uniform mat3 filterMatrix;","varying vec2 vTextureCoord;","varying vec2 vFilterCoord;","void main(void){","   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);","   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;","   vTextureCoord = aTextureCoord ;","}"].join("\n")}},{key:"defaultFragmentSrc",get:function(){return["varying vec2 vTextureCoord;","varying vec2 vFilterCoord;","uniform sampler2D uSampler;","uniform sampler2D filterSampler;","void main(void){","   vec4 masky = texture2D(filterSampler, vFilterCoord);","   vec4 sample = texture2D(uSampler, vTextureCoord);","   vec4 color;","   if(mod(vFilterCoord.x, 1.0) > 0.5)","   {","     color = vec4(1.0, 0.0, 0.0, 1.0);","   }","   else","   {","     color = vec4(0.0, 1.0, 0.0, 1.0);","   }","   gl_FragColor = mix(sample, masky, 0.5);","   gl_FragColor *= sample.a;","}"].join("\n")}}]),t}();r.default=f},{"../../../const":46,"../../../settings":101,"../../../utils":125,"./extractUniformsFromSrc":87}],87:[function(t,e,r){"use strict";function n(t,e,r){var n=i(t),o=i(e);return Object.assign(n,o)}function i(t){for(var e=new RegExp("^(projectionMatrix|uSampler|filterArea|filterClamp)$"),r={},n=void 0,i=t.replace(/\s+/g," ").split(/\s*;\s*/),o=0;o<i.length;o++){var s=i[o].trim();if(s.indexOf("uniform")>-1){var u=s.split(" "),h=u[1],l=u[2],c=1;l.indexOf("[")>-1&&(n=l.split(/\[|]/),l=n[0],c*=Number(n[1])),l.match(e)||(r[l]={value:a(h,c),name:l,type:h})}}return r}r.__esModule=!0,r.default=n;var o=t("pixi-gl-core"),s=function(t){return t&&t.__esModule?t:{default:t}}(o),a=s.default.shader.defaultValue},{"pixi-gl-core":15}],88:[function(t,e,r){"use strict";function n(t,e,r){var n=t.identity();return n.translate(e.x/r.width,e.y/r.height),n.scale(r.width,r.height),n}function i(t,e,r){var n=t.identity();n.translate(e.x/r.width,e.y/r.height);var i=r.width/e.width,o=r.height/e.height;return n.scale(i,o),n}function o(t,e,r,n){var i=n._texture.orig,o=t.set(r.width,0,0,r.height,e.x,e.y),a=n.worldTransform.copy(s.Matrix.TEMP_MATRIX);return a.invert(),o.prepend(a),o.scale(1/i.width,1/i.height),o.translate(n.anchor.x,n.anchor.y),o}r.__esModule=!0,r.calculateScreenSpaceMatrix=n,r.calculateNormalizedScreenSpaceMatrix=i,r.calculateSpriteMatrix=o;var s=t("../../../math")},{"../../../math":70}],89:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("../Filter"),u=n(a),h=t("../../../../math"),l=(t("path"),t("../../../../textures/TextureMatrix")),c=n(l),d=function(t){function e(r){i(this,e);var n=new h.Matrix,s=o(this,t.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 otherMatrix;\n\nvarying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n}\n","varying vec2 vMaskCoord;\nvarying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform sampler2D mask;\nuniform float alpha;\nuniform vec4 maskClamp;\n\nvoid main(void)\n{\n    float clip = step(3.5,\n        step(maskClamp.x, vMaskCoord.x) +\n        step(maskClamp.y, vMaskCoord.y) +\n        step(vMaskCoord.x, maskClamp.z) +\n        step(vMaskCoord.y, maskClamp.w));\n\n    vec4 original = texture2D(uSampler, vTextureCoord);\n    vec4 masky = texture2D(mask, vMaskCoord);\n\n    original *= (masky.r * masky.a * alpha * clip);\n\n    gl_FragColor = original;\n}\n"));return r.renderable=!1,s.maskSprite=r,s.maskMatrix=n,s}return s(e,t),e.prototype.apply=function(t,e,r){var n=this.maskSprite,i=this.maskSprite.texture;i.valid&&(i.transform||(i.transform=new c.default(i,0)),i.transform.update(),this.uniforms.mask=i,this.uniforms.otherMatrix=t.calculateSpriteMatrix(this.maskMatrix,n).prepend(i.transform.mapCoord),this.uniforms.alpha=n.worldAlpha,this.uniforms.maskClamp=i.transform.uClampFrame,t.applyFilter(this,e,r))},e}(u.default);r.default=d},{"../../../../math":70,"../../../../textures/TextureMatrix":116,"../Filter":86,path:8}],90:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var a=t("./WebGLManager"),u=n(a),h=t("../utils/RenderTarget"),l=n(h),c=t("../utils/Quad"),d=n(c),f=t("../../../math"),p=t("../../../Shader"),v=n(p),g=t("../filters/filterTransforms"),y=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(g),m=t("bit-twiddle"),_=n(m),b=function(){function t(){s(this,t),this.renderTarget=null,this.target=null,this.resolution=1,this.sourceFrame=new f.Rectangle,this.destinationFrame=new f.Rectangle,this.filters=[]}return t.prototype.clear=function(){this.filters=null,this.target=null,this.renderTarget=null},t}(),x=function(t){function e(r){s(this,e);var n=i(this,t.call(this,r));return n.gl=n.renderer.gl,n.quad=new d.default(n.gl,r.state.attribState),n.shaderCache={},n.pool={},n.filterData=null,n.managedFilters=[],n.renderer.on("prerender",n.onPrerender,n),n._screenWidth=r.view.width,n._screenHeight=r.view.height,n}return o(e,t),e.prototype.pushFilter=function(t,e){var r=this.renderer,n=this.filterData;if(!n){n=this.renderer._activeRenderTarget.filterStack;var i=new b;i.sourceFrame=i.destinationFrame=this.renderer._activeRenderTarget.size,i.renderTarget=r._activeRenderTarget,this.renderer._activeRenderTarget.filterData=n={index:0,stack:[i]},this.filterData=n}var o=n.stack[++n.index],s=n.stack[0].destinationFrame;o||(o=n.stack[n.index]=new b);var a=t.filterArea&&0===t.filterArea.x&&0===t.filterArea.y&&t.filterArea.width===r.screen.width&&t.filterArea.height===r.screen.height,u=e[0].resolution,h=0|e[0].padding,l=a?r.screen:t.filterArea||t.getBounds(!0),c=o.sourceFrame,d=o.destinationFrame;c.x=(l.x*u|0)/u,c.y=(l.y*u|0)/u,c.width=(l.width*u|0)/u,c.height=(l.height*u|0)/u,a||(n.stack[0].renderTarget.transform||e[0].autoFit&&c.fit(s),c.pad(h)),d.width=c.width,d.height=c.height;var f=this.getPotRenderTarget(r.gl,c.width,c.height,u);o.target=t,o.filters=e,o.resolution=u,o.renderTarget=f,f.setFrame(d,c),r.bindRenderTarget(f),f.clear()},e.prototype.popFilter=function(){var t=this.filterData,e=t.stack[t.index-1],r=t.stack[t.index];this.quad.map(r.renderTarget.size,r.sourceFrame).upload();var n=r.filters;if(1===n.length)n[0].apply(this,r.renderTarget,e.renderTarget,!1,r),this.freePotRenderTarget(r.renderTarget);else{var i=r.renderTarget,o=this.getPotRenderTarget(this.renderer.gl,r.sourceFrame.width,r.sourceFrame.height,r.resolution);o.setFrame(r.destinationFrame,r.sourceFrame),o.clear();var s=0;for(s=0;s<n.length-1;++s){n[s].apply(this,i,o,!0,r);var a=i;i=o,o=a}n[s].apply(this,i,e.renderTarget,!1,r),this.freePotRenderTarget(i),this.freePotRenderTarget(o)}r.clear(),0===--t.index&&(this.filterData=null)},e.prototype.applyFilter=function(t,e,r,n){var i=this.renderer,o=i.gl,s=t.glShaders[i.CONTEXT_UID];s||(t.glShaderKey?(s=this.shaderCache[t.glShaderKey])||(s=new v.default(this.gl,t.vertexSrc,t.fragmentSrc),t.glShaders[i.CONTEXT_UID]=this.shaderCache[t.glShaderKey]=s,this.managedFilters.push(t)):(s=t.glShaders[i.CONTEXT_UID]=new v.default(this.gl,t.vertexSrc,t.fragmentSrc),this.managedFilters.push(t)),i.bindVao(null),this.quad.initVao(s)),i.bindVao(this.quad.vao),i.bindRenderTarget(r),n&&(o.disable(o.SCISSOR_TEST),i.clear(),o.enable(o.SCISSOR_TEST)),r===i.maskManager.scissorRenderTarget&&i.maskManager.pushScissorMask(null,i.maskManager.scissorData),i.bindShader(s);var a=this.renderer.emptyTextures[0];this.renderer.boundTextures[0]=a,this.syncUniforms(s,t),i.state.setBlendMode(t.blendMode),o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,e.texture.texture),this.quad.vao.draw(this.renderer.gl.TRIANGLES,6,0),o.bindTexture(o.TEXTURE_2D,a._glTextures[this.renderer.CONTEXT_UID].texture)},e.prototype.syncUniforms=function(t,e){var r=e.uniformData,n=e.uniforms,i=1,o=void 0;if(t.uniforms.filterArea){o=this.filterData.stack[this.filterData.index];var s=t.uniforms.filterArea;s[0]=o.renderTarget.size.width,s[1]=o.renderTarget.size.height,s[2]=o.sourceFrame.x,s[3]=o.sourceFrame.y,t.uniforms.filterArea=s}if(t.uniforms.filterClamp){o=o||this.filterData.stack[this.filterData.index];var a=t.uniforms.filterClamp;a[0]=0,a[1]=0,a[2]=(o.sourceFrame.width-1)/o.renderTarget.size.width,a[3]=(o.sourceFrame.height-1)/o.renderTarget.size.height,t.uniforms.filterClamp=a}for(var u in r){var h=r[u].type;if("sampler2d"===h&&0!==n[u]){if(n[u].baseTexture)t.uniforms[u]=this.renderer.bindTexture(n[u].baseTexture,i);else{t.uniforms[u]=i;var l=this.renderer.gl;this.renderer.boundTextures[i]=this.renderer.emptyTextures[i],l.activeTexture(l.TEXTURE0+i),n[u].texture.bind()}i++}else if("mat3"===h)void 0!==n[u].a?t.uniforms[u]=n[u].toArray(!0):t.uniforms[u]=n[u];else if("vec2"===h)if(void 0!==n[u].x){var c=t.uniforms[u]||new Float32Array(2);c[0]=n[u].x,c[1]=n[u].y,t.uniforms[u]=c}else t.uniforms[u]=n[u];else"float"===h?t.uniforms.data[u].value!==r[u]&&(t.uniforms[u]=n[u]):t.uniforms[u]=n[u]}},e.prototype.getRenderTarget=function(t,e){var r=this.filterData.stack[this.filterData.index],n=this.getPotRenderTarget(this.renderer.gl,r.sourceFrame.width,r.sourceFrame.height,e||r.resolution);return n.setFrame(r.destinationFrame,r.sourceFrame),n},e.prototype.returnRenderTarget=function(t){this.freePotRenderTarget(t)},e.prototype.calculateScreenSpaceMatrix=function(t){var e=this.filterData.stack[this.filterData.index];return y.calculateScreenSpaceMatrix(t,e.sourceFrame,e.renderTarget.size)},e.prototype.calculateNormalizedScreenSpaceMatrix=function(t){var e=this.filterData.stack[this.filterData.index]
;return y.calculateNormalizedScreenSpaceMatrix(t,e.sourceFrame,e.renderTarget.size,e.destinationFrame)},e.prototype.calculateSpriteMatrix=function(t,e){var r=this.filterData.stack[this.filterData.index];return y.calculateSpriteMatrix(t,r.sourceFrame,r.renderTarget.size,e)},e.prototype.destroy=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=this.renderer,r=this.managedFilters;e.off("prerender",this.onPrerender,this);for(var n=0;n<r.length;n++)t||r[n].glShaders[e.CONTEXT_UID].destroy(),delete r[n].glShaders[e.CONTEXT_UID];this.shaderCache={},t?this.pool={}:this.emptyPool()},e.prototype.getPotRenderTarget=function(t,e,r,n){var i="screen";e*=n,r*=n,e===this._screenWidth&&r===this._screenHeight||(e=_.default.nextPow2(e),r=_.default.nextPow2(r),i=(65535&e)<<16|65535&r),this.pool[i]||(this.pool[i]=[]);var o=this.pool[i].pop();if(!o){var s=this.renderer.boundTextures[0];t.activeTexture(t.TEXTURE0),o=new l.default(t,e,r,null,1),t.bindTexture(t.TEXTURE_2D,s._glTextures[this.renderer.CONTEXT_UID].texture)}return o.resolution=n,o.defaultFrame.width=o.size.width=e/n,o.defaultFrame.height=o.size.height=r/n,o.filterPoolKey=i,o},e.prototype.emptyPool=function(){for(var t in this.pool){var e=this.pool[t];if(e)for(var r=0;r<e.length;r++)e[r].destroy(!0)}this.pool={}},e.prototype.freePotRenderTarget=function(t){this.pool[t.filterPoolKey].push(t)},e.prototype.onPrerender=function(){if(this._screenWidth!==this.renderer.view.width||this._screenHeight!==this.renderer.view.height){this._screenWidth=this.renderer.view.width,this._screenHeight=this.renderer.view.height;var t=this.pool.screen;if(t)for(var e=0;e<t.length;e++)t[e].destroy(!0);this.pool.screen=[]}},e}(u.default);r.default=x},{"../../../Shader":44,"../../../math":70,"../filters/filterTransforms":88,"../utils/Quad":95,"../utils/RenderTarget":96,"./WebGLManager":93,"bit-twiddle":1}],91:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("./WebGLManager"),u=n(a),h=t("../filters/spriteMask/SpriteMaskFilter"),l=n(h),c=function(t){function e(r){i(this,e);var n=o(this,t.call(this,r));return n.scissor=!1,n.scissorData=null,n.scissorRenderTarget=null,n.enableScissor=!0,n.alphaMaskPool=[],n.alphaMaskIndex=0,n}return s(e,t),e.prototype.pushMask=function(t,e){if(e.texture)this.pushSpriteMask(t,e);else if(this.enableScissor&&!this.scissor&&this.renderer._activeRenderTarget.root&&!this.renderer.stencilManager.stencilMaskStack.length&&e.isFastRect()){var r=e.worldTransform,n=Math.atan2(r.b,r.a);n=Math.round(n*(180/Math.PI)),n%90?this.pushStencilMask(e):this.pushScissorMask(t,e)}else this.pushStencilMask(e)},e.prototype.popMask=function(t,e){e.texture?this.popSpriteMask(t,e):this.enableScissor&&!this.renderer.stencilManager.stencilMaskStack.length?this.popScissorMask(t,e):this.popStencilMask(t,e)},e.prototype.pushSpriteMask=function(t,e){var r=this.alphaMaskPool[this.alphaMaskIndex];r||(r=this.alphaMaskPool[this.alphaMaskIndex]=[new l.default(e)]),r[0].resolution=this.renderer.resolution,r[0].maskSprite=e,t.filterArea=e.getBounds(!0),this.renderer.filterManager.pushFilter(t,r),this.alphaMaskIndex++},e.prototype.popSpriteMask=function(){this.renderer.filterManager.popFilter(),this.alphaMaskIndex--},e.prototype.pushStencilMask=function(t){this.renderer.currentRenderer.stop(),this.renderer.stencilManager.pushStencil(t)},e.prototype.popStencilMask=function(){this.renderer.currentRenderer.stop(),this.renderer.stencilManager.popStencil()},e.prototype.pushScissorMask=function(t,e){e.renderable=!0;var r=this.renderer._activeRenderTarget,n=e.getBounds();n.fit(r.size),e.renderable=!1,this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);var i=this.renderer.resolution;this.renderer.gl.scissor(n.x*i,(r.root?r.size.height-n.y-n.height:n.y)*i,n.width*i,n.height*i),this.scissorRenderTarget=r,this.scissorData=e,this.scissor=!0},e.prototype.popScissorMask=function(){this.scissorRenderTarget=null,this.scissorData=null,this.scissor=!1;var t=this.renderer.gl;t.disable(t.SCISSOR_TEST)},e}(u.default);r.default=c},{"../filters/spriteMask/SpriteMaskFilter":89,"./WebGLManager":93}],92:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=t("./WebGLManager"),a=function(t){return t&&t.__esModule?t:{default:t}}(s),u=function(t){function e(r){n(this,e);var o=i(this,t.call(this,r));return o.stencilMaskStack=null,o}return o(e,t),e.prototype.setMaskStack=function(t){this.stencilMaskStack=t;var e=this.renderer.gl;0===t.length?e.disable(e.STENCIL_TEST):e.enable(e.STENCIL_TEST)},e.prototype.pushStencil=function(t){this.renderer.setObjectRenderer(this.renderer.plugins.graphics),this.renderer._activeRenderTarget.attachStencilBuffer();var e=this.renderer.gl,r=this.stencilMaskStack.length;0===r&&e.enable(e.STENCIL_TEST),this.stencilMaskStack.push(t),e.colorMask(!1,!1,!1,!1),e.stencilFunc(e.EQUAL,r,this._getBitwiseMask()),e.stencilOp(e.KEEP,e.KEEP,e.INCR),this.renderer.plugins.graphics.render(t),this._useCurrent()},e.prototype.popStencil=function(){this.renderer.setObjectRenderer(this.renderer.plugins.graphics);var t=this.renderer.gl,e=this.stencilMaskStack.pop();0===this.stencilMaskStack.length?(t.disable(t.STENCIL_TEST),t.clear(t.STENCIL_BUFFER_BIT),t.clearStencil(0)):(t.colorMask(!1,!1,!1,!1),t.stencilOp(t.KEEP,t.KEEP,t.DECR),this.renderer.plugins.graphics.render(e),this._useCurrent())},e.prototype._useCurrent=function(){var t=this.renderer.gl;t.colorMask(!0,!0,!0,!0),t.stencilFunc(t.EQUAL,this.stencilMaskStack.length,this._getBitwiseMask()),t.stencilOp(t.KEEP,t.KEEP,t.KEEP)},e.prototype._getBitwiseMask=function(){return(1<<this.stencilMaskStack.length)-1},e.prototype.destroy=function(){a.default.prototype.destroy.call(this),this.stencilMaskStack.stencilStack=null},e}(a.default);r.default=u},{"./WebGLManager":93}],93:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(e){n(this,t),this.renderer=e,this.renderer.on("context",this.onContextChange,this)}return t.prototype.onContextChange=function(){},t.prototype.destroy=function(){this.renderer.off("context",this.onContextChange,this),this.renderer=null},t}();r.default=i},{}],94:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=t("../managers/WebGLManager"),a=function(t){return t&&t.__esModule?t:{default:t}}(s),u=function(t){function e(){return n(this,e),i(this,t.apply(this,arguments))}return o(e,t),e.prototype.start=function(){},e.prototype.stop=function(){this.flush()},e.prototype.flush=function(){},e.prototype.render=function(t){},e}(a.default);r.default=u},{"../managers/WebGLManager":93}],95:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=t("pixi-gl-core"),s=n(o),a=t("../../../utils/createIndicesForQuads"),u=n(a),h=function(){function t(e,r){i(this,t),this.gl=e,this.vertices=new Float32Array([-1,-1,1,-1,1,1,-1,1]),this.uvs=new Float32Array([0,0,1,0,1,1,0,1]),this.interleaved=new Float32Array(16);for(var n=0;n<4;n++)this.interleaved[4*n]=this.vertices[2*n],this.interleaved[4*n+1]=this.vertices[2*n+1],this.interleaved[4*n+2]=this.uvs[2*n],this.interleaved[4*n+3]=this.uvs[2*n+1];this.indices=(0,u.default)(1),this.vertexBuffer=s.default.GLBuffer.createVertexBuffer(e,this.interleaved,e.STATIC_DRAW),this.indexBuffer=s.default.GLBuffer.createIndexBuffer(e,this.indices,e.STATIC_DRAW),this.vao=new s.default.VertexArrayObject(e,r)}return t.prototype.initVao=function(t){this.vao.clear().addIndex(this.indexBuffer).addAttribute(this.vertexBuffer,t.attributes.aVertexPosition,this.gl.FLOAT,!1,16,0).addAttribute(this.vertexBuffer,t.attributes.aTextureCoord,this.gl.FLOAT,!1,16,8)},t.prototype.map=function(t,e){var r=0,n=0;return this.uvs[0]=r,this.uvs[1]=n,this.uvs[2]=r+e.width/t.width,this.uvs[3]=n,this.uvs[4]=r+e.width/t.width,this.uvs[5]=n+e.height/t.height,this.uvs[6]=r,this.uvs[7]=n+e.height/t.height,r=e.x,n=e.y,this.vertices[0]=r,this.vertices[1]=n,this.vertices[2]=r+e.width,this.vertices[3]=n,this.vertices[4]=r+e.width,this.vertices[5]=n+e.height,this.vertices[6]=r,this.vertices[7]=n+e.height,this},t.prototype.upload=function(){for(var t=0;t<4;t++)this.interleaved[4*t]=this.vertices[2*t],this.interleaved[4*t+1]=this.vertices[2*t+1],this.interleaved[4*t+2]=this.uvs[2*t],this.interleaved[4*t+3]=this.uvs[2*t+1];return this.vertexBuffer.upload(this.interleaved),this},t.prototype.destroy=function(){var t=this.gl;t.deleteBuffer(this.vertexBuffer),t.deleteBuffer(this.indexBuffer)},t}();r.default=h},{"../../../utils/createIndicesForQuads":123,"pixi-gl-core":15}],96:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=t("../../../math"),o=t("../../../const"),s=t("../../../settings"),a=function(t){return t&&t.__esModule?t:{default:t}}(s),u=t("pixi-gl-core"),h=function(){function t(e,r,s,h,l,c){n(this,t),this.gl=e,this.frameBuffer=null,this.texture=null,this.clearColor=[0,0,0,0],this.size=new i.Rectangle(0,0,1,1),this.resolution=l||a.default.RESOLUTION,this.projectionMatrix=new i.Matrix,this.transform=null,this.frame=null,this.defaultFrame=new i.Rectangle,this.destinationFrame=null,this.sourceFrame=null,this.stencilBuffer=null,this.stencilMaskStack=[],this.filterData=null,this.filterPoolKey="",this.scaleMode=void 0!==h?h:a.default.SCALE_MODE,this.root=c,this.root?(this.frameBuffer=new u.GLFramebuffer(e,100,100),this.frameBuffer.framebuffer=null):(this.frameBuffer=u.GLFramebuffer.createRGBA(e,100,100),this.scaleMode===o.SCALE_MODES.NEAREST?this.frameBuffer.texture.enableNearestScaling():this.frameBuffer.texture.enableLinearScaling(),this.texture=this.frameBuffer.texture),this.setFrame(),this.resize(r,s)}return t.prototype.clear=function(t){var e=t||this.clearColor;this.frameBuffer.clear(e[0],e[1],e[2],e[3])},t.prototype.attachStencilBuffer=function(){this.root||this.frameBuffer.enableStencil()},t.prototype.setFrame=function(t,e){this.destinationFrame=t||this.destinationFrame||this.defaultFrame,this.sourceFrame=e||this.sourceFrame||this.destinationFrame},t.prototype.activate=function(){var t=this.gl;this.frameBuffer.bind(),this.calculateProjection(this.destinationFrame,this.sourceFrame),this.transform&&this.projectionMatrix.append(this.transform),this.destinationFrame!==this.sourceFrame?(t.enable(t.SCISSOR_TEST),t.scissor(0|this.destinationFrame.x,0|this.destinationFrame.y,this.destinationFrame.width*this.resolution|0,this.destinationFrame.height*this.resolution|0)):t.disable(t.SCISSOR_TEST),t.viewport(0|this.destinationFrame.x,0|this.destinationFrame.y,this.destinationFrame.width*this.resolution|0,this.destinationFrame.height*this.resolution|0)},t.prototype.calculateProjection=function(t,e){var r=this.projectionMatrix;e=e||t,r.identity(),this.root?(r.a=1/t.width*2,r.d=-1/t.height*2,r.tx=-1-e.x*r.a,r.ty=1-e.y*r.d):(r.a=1/t.width*2,r.d=1/t.height*2,r.tx=-1-e.x*r.a,r.ty=-1-e.y*r.d)},t.prototype.resize=function(t,e){if(t|=0,e|=0,this.size.width!==t||this.size.height!==e){this.size.width=t,this.size.height=e,this.defaultFrame.width=t,this.defaultFrame.height=e,this.frameBuffer.resize(t*this.resolution,e*this.resolution);var r=this.frame||this.size;this.calculateProjection(r)}},t.prototype.destroy=function(){this.frameBuffer.destroy(),this.frameBuffer=null,this.texture=null},t}();r.default=h},{"../../../const":46,"../../../math":70,"../../../settings":101,"pixi-gl-core":15}],97:[function(t,e,r){"use strict";function n(t,e){var r=!e;if(r){var n=document.createElement("canvas");n.width=1,n.height=1,e=s.default.createContext(n)}for(var o=e.createShader(e.FRAGMENT_SHADER);;){var u=a.replace(/%forloop%/gi,i(t));if(e.shaderSource(o,u),e.compileShader(o),e.getShaderParameter(o,e.COMPILE_STATUS))break;t=t/2|0}return r&&e.getExtension("WEBGL_lose_context")&&e.getExtension("WEBGL_lose_context").loseContext(),t}function i(t){for(var e="",r=0;r<t;++r)r>0&&(e+="\nelse "),r<t-1&&(e+="if(test == "+r+".0){}");return e}r.__esModule=!0,r.default=n;var o=t("pixi-gl-core"),s=function(t){return t&&t.__esModule?t:{default:t}}(o),a=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join("\n")},{"pixi-gl-core":15}],98:[function(t,e,r){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e[i.BLEND_MODES.NORMAL]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.ADD]=[t.ONE,t.DST_ALPHA],e[i.BLEND_MODES.MULTIPLY]=[t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.SCREEN]=[t.ONE,t.ONE_MINUS_SRC_COLOR],e[i.BLEND_MODES.OVERLAY]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.DARKEN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.LIGHTEN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.COLOR_DODGE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.COLOR_BURN]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.HARD_LIGHT]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.SOFT_LIGHT]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.DIFFERENCE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.EXCLUSION]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.HUE]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.SATURATION]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.COLOR]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.LUMINOSITY]=[t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.NORMAL_NPM]=[t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA],e[i.BLEND_MODES.ADD_NPM]=[t.SRC_ALPHA,t.DST_ALPHA,t.ONE,t.DST_ALPHA],e[i.BLEND_MODES.SCREEN_NPM]=[t.SRC_ALPHA,t.ONE_MINUS_SRC_COLOR,t.ONE,t.ONE_MINUS_SRC_COLOR],e}r.__esModule=!0,r.default=n;var i=t("../../../const")},{"../../../const":46}],99:[function(t,e,r){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e[i.DRAW_MODES.POINTS]=t.POINTS,e[i.DRAW_MODES.LINES]=t.LINES,e[i.DRAW_MODES.LINE_LOOP]=t.LINE_LOOP,e[i.DRAW_MODES.LINE_STRIP]=t.LINE_STRIP,e[i.DRAW_MODES.TRIANGLES]=t.TRIANGLES,e[i.DRAW_MODES.TRIANGLE_STRIP]=t.TRIANGLE_STRIP,e[i.DRAW_MODES.TRIANGLE_FAN]=t.TRIANGLE_FAN,e}r.__esModule=!0,r.default=n;var i=t("../../../const")},{"../../../const":46}],100:[function(t,e,r){"use strict";function n(t){t.getContextAttributes().stencil||console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly")}r.__esModule=!0,r.default=n},{}],101:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t("./utils/maxRecommendedTextures"),o=n(i),s=t("./utils/canUploadSameBuffer"),a=n(s);r.default={TARGET_FPMS:.06,MIPMAP_TEXTURES:!0,RESOLUTION:1,FILTER_RESOLUTION:1,SPRITE_MAX_TEXTURES:(0,o.default)(32),SPRITE_BATCH_SIZE:4096,RETINA_PREFIX:/@([0-9\.]+)x/,RENDER_OPTIONS:{view:null,antialias:!1,forceFXAA:!1,autoResize:!1,transparent:!1,backgroundColor:0,clearBeforeRender:!0,preserveDrawingBuffer:!1,roundPixels:!1,width:800,height:600,legacy:!1},TRANSFORM_MODE:0,GC_MODE:0,GC_MAX_IDLE:3600,GC_MAX_CHECK_COUNT:600,WRAP_MODE:0,SCALE_MODE:0,PRECISION_VERTEX:"highp",PRECISION_FRAGMENT:"mediump",CAN_UPLOAD_SAME_BUFFER:(0,a.default)(),MESH_CANVAS_PADDING:0}},{"./utils/canUploadSameBuffer":122,"./utils/maxRecommendedTextures":127}],102:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("../math"),h=t("../utils"),l=t("../const"),c=t("../textures/Texture"),d=n(c),f=t("../display/Container"),p=n(f),v=new u.Point,g=function(t){function e(r){i(this,e);var n=o(this,t.call(this));return n._anchor=new u.ObservablePoint(n._onAnchorUpdate,n),n._texture=null,n._width=0,n._height=0,n._tint=null,n._tintRGB=null,n.tint=16777215,n.blendMode=l.BLEND_MODES.NORMAL,n.shader=null,n.cachedTint=16777215,n.texture=r||d.default.EMPTY,n.vertexData=new Float32Array(8),n.vertexTrimmedData=null,n._transformID=-1,n._textureID=-1,n._transformTrimmedID=-1,n._textureTrimmedID=-1,n.pluginName="sprite",n}return s(e,t),e.prototype._onTextureUpdate=function(){this._textureID=-1,this._textureTrimmedID=-1,this.cachedTint=16777215,this._width&&(this.scale.x=(0,h.sign)(this.scale.x)*this._width/this._texture.orig.width),this._height&&(this.scale.y=(0,h.sign)(this.scale.y)*this._height/this._texture.orig.height)},e.prototype._onAnchorUpdate=function(){this._transformID=-1,this._transformTrimmedID=-1},e.prototype.calculateVertices=function(){if(this._transformID!==this.transform._worldID||this._textureID!==this._texture._updateID){this._transformID=this.transform._worldID,this._textureID=this._texture._updateID;var t=this._texture,e=this.transform.worldTransform,r=e.a,n=e.b,i=e.c,o=e.d,s=e.tx,a=e.ty,u=this.vertexData,h=t.trim,l=t.orig,c=this._anchor,d=0,f=0,p=0,v=0;h?(f=h.x-c._x*l.width,d=f+h.width,v=h.y-c._y*l.height,p=v+h.height):(f=-c._x*l.width,d=f+l.width,v=-c._y*l.height,p=v+l.height),u[0]=r*f+i*v+s,u[1]=o*v+n*f+a,u[2]=r*d+i*v+s,u[3]=o*v+n*d+a,u[4]=r*d+i*p+s,u[5]=o*p+n*d+a,u[6]=r*f+i*p+s,u[7]=o*p+n*f+a}},e.prototype.calculateTrimmedVertices=function(){if(this.vertexTrimmedData){if(this._transformTrimmedID===this.transform._worldID&&this._textureTrimmedID===this._texture._updateID)return}else this.vertexTrimmedData=new Float32Array(8);this._transformTrimmedID=this.transform._worldID,this._textureTrimmedID=this._texture._updateID;var t=this._texture,e=this.vertexTrimmedData,r=t.orig,n=this._anchor,i=this.transform.worldTransform,o=i.a,s=i.b,a=i.c,u=i.d,h=i.tx,l=i.ty,c=-n._x*r.width,d=c+r.width,f=-n._y*r.height,p=f+r.height;e[0]=o*c+a*f+h,e[1]=u*f+s*c+l,e[2]=o*d+a*f+h,e[3]=u*f+s*d+l,e[4]=o*d+a*p+h,e[5]=u*p+s*d+l,e[6]=o*c+a*p+h,e[7]=u*p+s*c+l},e.prototype._renderWebGL=function(t){this.calculateVertices(),t.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this)},e.prototype._renderCanvas=function(t){t.plugins[this.pluginName].render(this)},e.prototype._calculateBounds=function(){var t=this._texture.trim,e=this._texture.orig;!t||t.width===e.width&&t.height===e.height?(this.calculateVertices(),this._bounds.addQuad(this.vertexData)):(this.calculateTrimmedVertices(),this._bounds.addQuad(this.vertexTrimmedData))},e.prototype.getLocalBounds=function(e){return 0===this.children.length?(this._bounds.minX=this._texture.orig.width*-this._anchor._x,this._bounds.minY=this._texture.orig.height*-this._anchor._y,this._bounds.maxX=this._texture.orig.width*(1-this._anchor._x),this._bounds.maxY=this._texture.orig.height*(1-this._anchor._y),e||(this._localBoundsRect||(this._localBoundsRect=new u.Rectangle),e=this._localBoundsRect),this._bounds.getRectangle(e)):t.prototype.getLocalBounds.call(this,e)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,v);var e=this._texture.orig.width,r=this._texture.orig.height,n=-e*this.anchor.x,i=0;return v.x>=n&&v.x<n+e&&(i=-r*this.anchor.y,v.y>=i&&v.y<i+r)},e.prototype.destroy=function(e){if(t.prototype.destroy.call(this,e),this._texture.off("update",this._onTextureUpdate,this),this._anchor=null,"boolean"==typeof e?e:e&&e.texture){var r="boolean"==typeof e?e:e&&e.baseTexture;this._texture.destroy(!!r)}this._texture=null,this.shader=null},e.from=function(t){return new e(d.default.from(t))},e.fromFrame=function(t){var r=h.TextureCache[t];if(!r)throw new Error('The frameId "'+t+'" does not exist in the texture cache');return new e(r)},e.fromImage=function(t,r,n){return new e(d.default.fromImage(t,r,n))},a(e,[{key:"width",get:function(){return Math.abs(this.scale.x)*this._texture.orig.width},set:function(t){var e=(0,h.sign)(this.scale.x)||1;this.scale.x=e*t/this._texture.orig.width,this._width=t}},{key:"height",get:function(){return Math.abs(this.scale.y)*this._texture.orig.height},set:function(t){var e=(0,h.sign)(this.scale.y)||1;this.scale.y=e*t/this._texture.orig.height,this._height=t}},{key:"anchor",get:function(){return this._anchor},set:function(t){this._anchor.copy(t)}},{key:"tint",get:function(){return this._tint},set:function(t){this._tint=t,this._tintRGB=(t>>16)+(65280&t)+((255&t)<<16)}},{key:"texture",get:function(){return this._texture},set:function(t){this._texture!==t&&(this._texture=t,this.cachedTint=16777215,this._textureID=-1,this._textureTrimmedID=-1,t&&(t.baseTexture.hasLoaded?this._onTextureUpdate():t.once("update",this._onTextureUpdate,this)))}}]),e}(p.default);r.default=g},{"../const":46,"../display/Container":48,"../math":70,"../textures/Texture":115,"../utils":125}],103:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=t("../../renderers/canvas/CanvasRenderer"),s=n(o),a=t("../../const"),u=t("../../math"),h=t("./CanvasTinter"),l=n(h),c=new u.Matrix,d=function(){function t(e){i(this,t),this.renderer=e}return t.prototype.render=function(t){var e=t._texture,r=this.renderer,n=e._frame.width,i=e._frame.height,o=t.transform.worldTransform,s=0,h=0;if(!(e.orig.width<=0||e.orig.height<=0)&&e.baseTexture.source&&(r.setBlendMode(t.blendMode),e.valid)){r.context.globalAlpha=t.worldAlpha;var d=e.baseTexture.scaleMode===a.SCALE_MODES.LINEAR;r.smoothProperty&&r.context[r.smoothProperty]!==d&&(r.context[r.smoothProperty]=d),e.trim?(s=e.trim.width/2+e.trim.x-t.anchor.x*e.orig.width,h=e.trim.height/2+e.trim.y-t.anchor.y*e.orig.height):(s=(.5-t.anchor.x)*e.orig.width,h=(.5-t.anchor.y)*e.orig.height),e.rotate&&(o.copy(c),o=c,u.GroupD8.matrixAppendRotationInv(o,e.rotate,s,h),s=0,h=0),s-=n/2,h-=i/2,r.roundPixels?(r.context.setTransform(o.a,o.b,o.c,o.d,o.tx*r.resolution|0,o.ty*r.resolution|0),s|=0,h|=0):r.context.setTransform(o.a,o.b,o.c,o.d,o.tx*r.resolution,o.ty*r.resolution);var f=e.baseTexture.resolution;16777215!==t.tint?(t.cachedTint===t.tint&&t.tintedTexture.tintId===t._texture._updateID||(t.cachedTint=t.tint,t.tintedTexture=l.default.getTintedTexture(t,t.tint)),r.context.drawImage(t.tintedTexture,0,0,n*f,i*f,s*r.resolution,h*r.resolution,n*r.resolution,i*r.resolution)):r.context.drawImage(e.baseTexture.source,e._frame.x*f,e._frame.y*f,n*f,i*f,s*r.resolution,h*r.resolution,n*r.resolution,i*r.resolution)}},t.prototype.destroy=function(){this.renderer=null},t}();r.default=d,s.default.registerPlugin("sprite",d)},{"../../const":46,"../../math":70,"../../renderers/canvas/CanvasRenderer":77,"./CanvasTinter":104}],104:[function(t,e,r){"use strict";r.__esModule=!0;var n=t("../../utils"),i=t("../../renderers/canvas/utils/canUseNewCanvasBlendModes"),o=function(t){return t&&t.__esModule?t:{default:t}}(i),s={getTintedTexture:function(t,e){var r=t._texture;e=s.roundColor(e);var n="#"+("00000"+(0|e).toString(16)).substr(-6);r.tintCache=r.tintCache||{};var i=r.tintCache[n],o=void 0;if(i){if(i.tintId===r._updateID)return r.tintCache[n];o=r.tintCache[n]}else o=s.canvas||document.createElement("canvas");if(s.tintMethod(r,e,o),o.tintId=r._updateID,s.convertTintToImage){var a=new Image;a.src=o.toDataURL(),r.tintCache[n]=a}else r.tintCache[n]=o,s.canvas=null;return o},tintWithMultiply:function(t,e,r){var n=r.getContext("2d"),i=t._frame.clone(),o=t.baseTexture.resolution;i.x*=o,i.y*=o,i.width*=o,i.height*=o,r.width=Math.ceil(i.width),r.height=Math.ceil(i.height),n.save(),n.fillStyle="#"+("00000"+(0|e).toString(16)).substr(-6),n.fillRect(0,0,i.width,i.height),n.globalCompositeOperation="multiply",n.drawImage(t.baseTexture.source,i.x,i.y,i.width,i.height,0,0,i.width,i.height),n.globalCompositeOperation="destination-atop",n.drawImage(t.baseTexture.source,i.x,i.y,i.width,i.height,0,0,i.width,i.height),n.restore()},tintWithOverlay:function(t,e,r){var n=r.getContext("2d"),i=t._frame.clone(),o=t.baseTexture.resolution;i.x*=o,i.y*=o,i.width*=o,i.height*=o,r.width=Math.ceil(i.width),r.height=Math.ceil(i.height),n.save(),n.globalCompositeOperation="copy",n.fillStyle="#"+("00000"+(0|e).toString(16)).substr(-6),n.fillRect(0,0,i.width,i.height),n.globalCompositeOperation="destination-atop",n.drawImage(t.baseTexture.source,i.x,i.y,i.width,i.height,0,0,i.width,i.height),n.restore()},tintWithPerPixel:function(t,e,r){var i=r.getContext("2d"),o=t._frame.clone(),s=t.baseTexture.resolution;o.x*=s,o.y*=s,o.width*=s,o.height*=s,r.width=Math.ceil(o.width),r.height=Math.ceil(o.height),i.save(),i.globalCompositeOperation="copy",i.drawImage(t.baseTexture.source,o.x,o.y,o.width,o.height,0,0,o.width,o.height),i.restore();for(var a=(0,n.hex2rgb)(e),u=a[0],h=a[1],l=a[2],c=i.getImageData(0,0,o.width,o.height),d=c.data,f=0;f<d.length;f+=4)d[f+0]*=u,d[f+1]*=h,d[f+2]*=l;i.putImageData(c,0,0)},roundColor:function(t){var e=s.cacheStepsPerColorChannel,r=(0,n.hex2rgb)(t);return r[0]=Math.min(255,r[0]/e*e),r[1]=Math.min(255,r[1]/e*e),r[2]=Math.min(255,r[2]/e*e),(0,n.rgb2hex)(r)},cacheStepsPerColorChannel:8,convertTintToImage:!1,canUseMultiply:(0,o.default)(),tintMethod:0};s.tintMethod=s.canUseMultiply?s.tintWithMultiply:s.tintWithPerPixel,r.default=s},{"../../renderers/canvas/utils/canUseNewCanvasBlendModes":80,"../../utils":125}],105:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(e){n(this,t),this.vertices=new ArrayBuffer(e),this.float32View=new Float32Array(this.vertices),this.uint32View=new Uint32Array(this.vertices)}return t.prototype.destroy=function(){this.vertices=null,this.positions=null,this.uvs=null,this.colors=null},t}();r.default=i},{}],106:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("../../renderers/webgl/utils/ObjectRenderer"),u=n(a),h=t("../../renderers/webgl/WebGLRenderer"),l=n(h),c=t("../../utils/createIndicesForQuads"),d=n(c),f=t("./generateMultiTextureShader"),p=n(f),v=t("../../renderers/webgl/utils/checkMaxIfStatmentsInShader"),g=n(v),y=t("./BatchBuffer"),m=n(y),_=t("../../settings"),b=n(_),x=t("../../utils"),T=t("pixi-gl-core"),w=n(T),E=t("bit-twiddle"),S=n(E),O=0,M=0,P=function(t){function e(r){i(this,e);var n=o(this,t.call(this,r));n.vertSize=5,n.vertByteSize=4*n.vertSize,n.size=b.default.SPRITE_BATCH_SIZE,n.buffers=[];for(var s=1;s<=S.default.nextPow2(n.size);s*=2)n.buffers.push(new m.default(4*s*n.vertByteSize));n.indices=(0,d.default)(n.size),n.shader=null,n.currentIndex=0,n.groups=[];for(var a=0;a<n.size;a++)n.groups[a]={textures:[],textureCount:0,ids:[],size:0,start:0,blend:0};return n.sprites=[],n.vertexBuffers=[],n.vaos=[],n.vaoMax=2,n.vertexCount=0,n.renderer.on("prerender",n.onPrerender,n),n}return s(e,t),e.prototype.onContextChange=function(){var t=this.renderer.gl;this.renderer.legacy?this.MAX_TEXTURES=1:(this.MAX_TEXTURES=Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),b.default.SPRITE_MAX_TEXTURES),this.MAX_TEXTURES=(0,g.default)(this.MAX_TEXTURES,t)),this.shader=(0,p.default)(t,this.MAX_TEXTURES),this.indexBuffer=w.default.GLBuffer.createIndexBuffer(t,this.indices,t.STATIC_DRAW),this.renderer.bindVao(null);for(var e=this.shader.attributes,r=0;r<this.vaoMax;r++){var n=this.vertexBuffers[r]=w.default.GLBuffer.createVertexBuffer(t,null,t.STREAM_DRAW),i=this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(n,e.aVertexPosition,t.FLOAT,!1,this.vertByteSize,0).addAttribute(n,e.aTextureCoord,t.UNSIGNED_SHORT,!0,this.vertByteSize,8).addAttribute(n,e.aColor,t.UNSIGNED_BYTE,!0,this.vertByteSize,12);e.aTextureId&&i.addAttribute(n,e.aTextureId,t.FLOAT,!1,this.vertByteSize,16),this.vaos[r]=i}this.vao=this.vaos[0],this.currentBlendMode=99999,this.boundTextures=new Array(this.MAX_TEXTURES)},e.prototype.onPrerender=function(){this.vertexCount=0},e.prototype.render=function(t){this.currentIndex>=this.size&&this.flush(),t._texture._uvs&&(this.sprites[this.currentIndex++]=t)},e.prototype.flush=function(){if(0!==this.currentIndex){var t=this.renderer.gl,e=this.MAX_TEXTURES,r=S.default.nextPow2(this.currentIndex),n=S.default.log2(r),i=this.buffers[n],o=this.sprites,s=this.groups,a=i.float32View,u=i.uint32View,h=this.boundTextures,l=this.renderer.boundTextures,c=this.renderer.textureGC.count,d=0,f=void 0,p=void 0,v=1,g=0,y=s[0],m=void 0,_=void 0,T=x.premultiplyBlendMode[o[0]._texture.baseTexture.premultipliedAlpha?1:0][o[0].blendMode];y.textureCount=0,y.start=0,y.blend=T,O++;var E=void 0;for(E=0;E<e;++E){var P=l[E];P._enabled!==O?(h[E]=P,P._virtalBoundId=E,P._enabled=O):h[E]=this.renderer.emptyTextures[E]}for(O++,E=0;E<this.currentIndex;++E){var C=o[E];o[E]=null,f=C._texture.baseTexture;var R=x.premultiplyBlendMode[Number(f.premultipliedAlpha)][C.blendMode];if(T!==R&&(T=R,p=null,g=e,O++),p!==f&&(p=f,f._enabled!==O)){if(g===e&&(O++,y.size=E-y.start,g=0,y=s[v++],y.blend=T,y.textureCount=0,y.start=E),f.touched=c,-1===f._virtalBoundId)for(var A=0;A<e;++A){var I=(A+M)%e,D=h[I];if(D._enabled!==O){M++,D._virtalBoundId=-1,f._virtalBoundId=I,h[I]=f;break}}f._enabled=O,y.textureCount++,y.ids[g]=f._virtalBoundId,y.textures[g++]=f}if(m=C.vertexData,_=C._texture._uvs.uvsUint32,this.renderer.roundPixels){var L=this.renderer.resolution;a[d]=(m[0]*L|0)/L,
a[d+1]=(m[1]*L|0)/L,a[d+5]=(m[2]*L|0)/L,a[d+6]=(m[3]*L|0)/L,a[d+10]=(m[4]*L|0)/L,a[d+11]=(m[5]*L|0)/L,a[d+15]=(m[6]*L|0)/L,a[d+16]=(m[7]*L|0)/L}else a[d]=m[0],a[d+1]=m[1],a[d+5]=m[2],a[d+6]=m[3],a[d+10]=m[4],a[d+11]=m[5],a[d+15]=m[6],a[d+16]=m[7];u[d+2]=_[0],u[d+7]=_[1],u[d+12]=_[2],u[d+17]=_[3];var N=Math.min(C.worldAlpha,1),B=N<1&&f.premultipliedAlpha?(0,x.premultiplyTint)(C._tintRGB,N):C._tintRGB+(255*N<<24);u[d+3]=u[d+8]=u[d+13]=u[d+18]=B,a[d+4]=a[d+9]=a[d+14]=a[d+19]=f._virtalBoundId,d+=20}if(y.size=E-y.start,b.default.CAN_UPLOAD_SAME_BUFFER)this.vertexBuffers[this.vertexCount].upload(i.vertices,0,!0);else{if(this.vaoMax<=this.vertexCount){this.vaoMax++;var F=this.shader.attributes,k=this.vertexBuffers[this.vertexCount]=w.default.GLBuffer.createVertexBuffer(t,null,t.STREAM_DRAW),j=this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(k,F.aVertexPosition,t.FLOAT,!1,this.vertByteSize,0).addAttribute(k,F.aTextureCoord,t.UNSIGNED_SHORT,!0,this.vertByteSize,8).addAttribute(k,F.aColor,t.UNSIGNED_BYTE,!0,this.vertByteSize,12);F.aTextureId&&j.addAttribute(k,F.aTextureId,t.FLOAT,!1,this.vertByteSize,16),this.vaos[this.vertexCount]=j}this.renderer.bindVao(this.vaos[this.vertexCount]),this.vertexBuffers[this.vertexCount].upload(i.vertices,0,!1),this.vertexCount++}for(E=0;E<e;++E)l[E]._virtalBoundId=-1;for(E=0;E<v;++E){for(var U=s[E],X=U.textureCount,G=0;G<X;G++)p=U.textures[G],l[U.ids[G]]!==p&&this.renderer.bindTexture(p,U.ids[G],!0),p._virtalBoundId=-1;this.renderer.state.setBlendMode(U.blend),t.drawElements(t.TRIANGLES,6*U.size,t.UNSIGNED_SHORT,6*U.start*2)}this.currentIndex=0}},e.prototype.start=function(){this.renderer.bindShader(this.shader),b.default.CAN_UPLOAD_SAME_BUFFER&&(this.renderer.bindVao(this.vaos[this.vertexCount]),this.vertexBuffers[this.vertexCount].bind())},e.prototype.stop=function(){this.flush()},e.prototype.destroy=function(){for(var e=0;e<this.vaoMax;e++)this.vertexBuffers[e]&&this.vertexBuffers[e].destroy(),this.vaos[e]&&this.vaos[e].destroy();this.indexBuffer&&this.indexBuffer.destroy(),this.renderer.off("prerender",this.onPrerender,this),t.prototype.destroy.call(this),this.shader&&(this.shader.destroy(),this.shader=null),this.vertexBuffers=null,this.vaos=null,this.indexBuffer=null,this.indices=null,this.sprites=null;for(var r=0;r<this.buffers.length;++r)this.buffers[r].destroy()},e}(u.default);r.default=P,l.default.registerPlugin("sprite",P)},{"../../renderers/webgl/WebGLRenderer":84,"../../renderers/webgl/utils/ObjectRenderer":94,"../../renderers/webgl/utils/checkMaxIfStatmentsInShader":97,"../../settings":101,"../../utils":125,"../../utils/createIndicesForQuads":123,"./BatchBuffer":105,"./generateMultiTextureShader":107,"bit-twiddle":1,"pixi-gl-core":15}],107:[function(t,e,r){"use strict";function n(t,e){var r=a;r=r.replace(/%count%/gi,e),r=r.replace(/%forloop%/gi,i(e));for(var n=new s.default(t,"precision highp float;\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec4 aColor;\nattribute float aTextureId;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvarying float vTextureId;\n\nvoid main(void){\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = aTextureCoord;\n    vTextureId = aTextureId;\n    vColor = aColor;\n}\n",r),o=[],u=0;u<e;u++)o[u]=u;return n.bind(),n.uniforms.uSamplers=o,n}function i(t){var e="";e+="\n",e+="\n";for(var r=0;r<t;r++)r>0&&(e+="\nelse "),r<t-1&&(e+="if(textureId == "+r+".0)"),e+="\n{",e+="\n\tcolor = texture2D(uSamplers["+r+"], vTextureCoord);",e+="\n}";return e+="\n",e+="\n"}r.__esModule=!0,r.default=n;var o=t("../../Shader"),s=function(t){return t&&t.__esModule?t:{default:t}}(o),a=(t("path"),["varying vec2 vTextureCoord;","varying vec4 vColor;","varying float vTextureId;","uniform sampler2D uSamplers[%count%];","void main(void){","vec4 color;","float textureId = floor(vTextureId+0.5);","%forloop%","gl_FragColor = color * vColor;","}"].join("\n"))},{"../../Shader":44,path:8}],108:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("../sprites/Sprite"),h=n(u),l=t("../textures/Texture"),c=n(l),d=t("../math"),f=t("../utils"),p=t("../const"),v=t("../settings"),g=n(v),y=t("./TextStyle"),m=n(y),_=t("./TextMetrics"),b=n(_),x=t("../utils/trimCanvas"),T=n(x),w={texture:!0,children:!1,baseTexture:!0},E=function(t){function e(r,n,s){i(this,e),s=s||document.createElement("canvas"),s.width=3,s.height=3;var a=c.default.fromCanvas(s,g.default.SCALE_MODE,"text");a.orig=new d.Rectangle,a.trim=new d.Rectangle;var u=o(this,t.call(this,a));return c.default.addToCache(u._texture,u._texture.baseTexture.textureCacheIds[0]),u.canvas=s,u.context=u.canvas.getContext("2d"),u.resolution=g.default.RESOLUTION,u._text=null,u._style=null,u._styleListener=null,u._font="",u.text=r,u.style=n,u.localStyleID=-1,u}return s(e,t),e.prototype.updateText=function(t){var e=this._style;if(this.localStyleID!==e.styleID&&(this.dirty=!0,this.localStyleID=e.styleID),this.dirty||!t){this._font=this._style.toFontString();var r=this.context,n=b.default.measureText(this._text,this._style,this._style.wordWrap,this.canvas),i=n.width,o=n.height,s=n.lines,a=n.lineHeight,u=n.lineWidths,h=n.maxLineWidth,l=n.fontProperties;this.canvas.width=Math.ceil((Math.max(1,i)+2*e.padding)*this.resolution),this.canvas.height=Math.ceil((Math.max(1,o)+2*e.padding)*this.resolution),r.scale(this.resolution,this.resolution),r.clearRect(0,0,this.canvas.width,this.canvas.height),r.font=this._font,r.strokeStyle=e.stroke,r.lineWidth=e.strokeThickness,r.textBaseline=e.textBaseline,r.lineJoin=e.lineJoin,r.miterLimit=e.miterLimit;var c=void 0,d=void 0;if(e.dropShadow){r.fillStyle=e.dropShadowColor,r.globalAlpha=e.dropShadowAlpha,r.shadowBlur=e.dropShadowBlur,e.dropShadowBlur>0&&(r.shadowColor=e.dropShadowColor);for(var f=Math.cos(e.dropShadowAngle)*e.dropShadowDistance,p=Math.sin(e.dropShadowAngle)*e.dropShadowDistance,v=0;v<s.length;v++)c=e.strokeThickness/2,d=e.strokeThickness/2+v*a+l.ascent,"right"===e.align?c+=h-u[v]:"center"===e.align&&(c+=(h-u[v])/2),e.fill&&(this.drawLetterSpacing(s[v],c+f+e.padding,d+p+e.padding),e.stroke&&e.strokeThickness&&(r.strokeStyle=e.dropShadowColor,this.drawLetterSpacing(s[v],c+f+e.padding,d+p+e.padding,!0),r.strokeStyle=e.stroke))}r.shadowBlur=0,r.globalAlpha=1,r.fillStyle=this._generateFillStyle(e,s);for(var g=0;g<s.length;g++)c=e.strokeThickness/2,d=e.strokeThickness/2+g*a+l.ascent,"right"===e.align?c+=h-u[g]:"center"===e.align&&(c+=(h-u[g])/2),e.stroke&&e.strokeThickness&&this.drawLetterSpacing(s[g],c+e.padding,d+e.padding,!0),e.fill&&this.drawLetterSpacing(s[g],c+e.padding,d+e.padding);this.updateTexture()}},e.prototype.drawLetterSpacing=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=this._style,o=i.letterSpacing;if(0===o)return void(n?this.context.strokeText(t,e,r):this.context.fillText(t,e,r));for(var s=String.prototype.split.call(t,""),a=e,u=0,h="";u<t.length;)h=s[u++],n?this.context.strokeText(h,a,r):this.context.fillText(h,a,r),a+=this.context.measureText(h).width+o},e.prototype.updateTexture=function(){var t=this.canvas;if(this._style.trim){var e=(0,T.default)(t);t.width=e.width,t.height=e.height,this.context.putImageData(e.data,0,0)}var r=this._texture,n=this._style,i=n.trim?0:n.padding,o=r.baseTexture;o.hasLoaded=!0,o.resolution=this.resolution,o.realWidth=t.width,o.realHeight=t.height,o.width=t.width/this.resolution,o.height=t.height/this.resolution,r.trim.width=r._frame.width=t.width/this.resolution,r.trim.height=r._frame.height=t.height/this.resolution,r.trim.x=-i,r.trim.y=-i,r.orig.width=r._frame.width-2*i,r.orig.height=r._frame.height-2*i,this._onTextureUpdate(),o.emit("update",o),this.dirty=!1},e.prototype.renderWebGL=function(e){this.resolution!==e.resolution&&(this.resolution=e.resolution,this.dirty=!0),this.updateText(!0),t.prototype.renderWebGL.call(this,e)},e.prototype._renderCanvas=function(e){this.resolution!==e.resolution&&(this.resolution=e.resolution,this.dirty=!0),this.updateText(!0),t.prototype._renderCanvas.call(this,e)},e.prototype.getLocalBounds=function(e){return this.updateText(!0),t.prototype.getLocalBounds.call(this,e)},e.prototype._calculateBounds=function(){this.updateText(!0),this.calculateVertices(),this._bounds.addQuad(this.vertexData)},e.prototype._onStyleChange=function(){this.dirty=!0},e.prototype._generateFillStyle=function(t,e){if(!Array.isArray(t.fill))return t.fill;if(navigator.isCocoonJS)return t.fill[0];var r=void 0,n=void 0,i=void 0,o=void 0,s=this.canvas.width/this.resolution,a=this.canvas.height/this.resolution,u=t.fill.slice(),h=t.fillGradientStops.slice();if(!h.length)for(var l=u.length+1,c=1;c<l;++c)h.push(c/l);if(u.unshift(t.fill[0]),h.unshift(0),u.push(t.fill[t.fill.length-1]),h.push(1),t.fillGradientType===p.TEXT_GRADIENT.LINEAR_VERTICAL){r=this.context.createLinearGradient(s/2,0,s/2,a),n=(u.length+1)*e.length,i=0;for(var d=0;d<e.length;d++){i+=1;for(var f=0;f<u.length;f++)o="number"==typeof h[f]?h[f]/e.length+d/e.length:i/n,r.addColorStop(o,u[f]),i++}}else{r=this.context.createLinearGradient(0,a/2,s,a/2),n=u.length+1,i=1;for(var v=0;v<u.length;v++)o="number"==typeof h[v]?h[v]:i/n,r.addColorStop(o,u[v]),i++}return r},e.prototype.destroy=function(e){"boolean"==typeof e&&(e={children:e}),e=Object.assign({},w,e),t.prototype.destroy.call(this,e),this.context=null,this.canvas=null,this._style=null},a(e,[{key:"width",get:function(){return this.updateText(!0),Math.abs(this.scale.x)*this._texture.orig.width},set:function(t){this.updateText(!0);var e=(0,f.sign)(this.scale.x)||1;this.scale.x=e*t/this._texture.orig.width,this._width=t}},{key:"height",get:function(){return this.updateText(!0),Math.abs(this.scale.y)*this._texture.orig.height},set:function(t){this.updateText(!0);var e=(0,f.sign)(this.scale.y)||1;this.scale.y=e*t/this._texture.orig.height,this._height=t}},{key:"style",get:function(){return this._style},set:function(t){t=t||{},t instanceof m.default?this._style=t:this._style=new m.default(t),this.localStyleID=-1,this.dirty=!0}},{key:"text",get:function(){return this._text},set:function(t){t=String(""===t||null===t||void 0===t?" ":t),this._text!==t&&(this._text=t,this.dirty=!0)}}]),e}(h.default);r.default=E},{"../const":46,"../math":70,"../settings":101,"../sprites/Sprite":102,"../textures/Texture":115,"../utils":125,"../utils/trimCanvas":130,"./TextMetrics":109,"./TextStyle":110}],109:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(e,r,i,o,s,a,u,h,l){n(this,t),this.text=e,this.style=r,this.width=i,this.height=o,this.lines=s,this.lineWidths=a,this.lineHeight=u,this.maxLineWidth=h,this.fontProperties=l}return t.measureText=function(e,r,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t._canvas;n=n||r.wordWrap;var o=r.toFontString(),s=t.measureFont(o),a=i.getContext("2d");a.font=o;for(var u=n?t.wordWrap(e,r,i):e,h=u.split(/(?:\r\n|\r|\n)/),l=new Array(h.length),c=0,d=0;d<h.length;d++){var f=a.measureText(h[d]).width+(h[d].length-1)*r.letterSpacing;l[d]=f,c=Math.max(c,f)}var p=c+r.strokeThickness;r.dropShadow&&(p+=r.dropShadowDistance);var v=r.lineHeight||s.fontSize+r.strokeThickness,g=Math.max(v,s.fontSize+r.strokeThickness)+(h.length-1)*(v+r.leading);return r.dropShadow&&(g+=r.dropShadowDistance),new t(e,r,p,g,h,l,v+r.leading,c,s)},t.wordWrap=function(e,r){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t._canvas,i=n.getContext("2d"),o=0,s="",a="",u={},h=r.letterSpacing,l=r.whiteSpace,c=t.collapseSpaces(l),d=t.collapseNewlines(l),f=!c,p=r.wordWrapWidth+h,v=t.tokenize(e),g=0;g<v.length;g++){var y=v[g];if(t.isNewline(y)){if(!d){a+=t.addLine(s),f=!c,s="",o=0;continue}y=" "}if(c){var m=t.isBreakingSpace(y),_=t.isBreakingSpace(s[s.length-1]);if(m&&_)continue}var b=t.getFromCache(y,h,u,i);if(b>p)if(""!==s&&(a+=t.addLine(s),s="",o=0),t.canBreakWords(y,r.breakWords))for(var x=y.split(""),T=0;T<x.length;T++){for(var w=x[T],E=1;x[T+E];){var S=x[T+E],O=w[w.length-1];if(t.canBreakChars(O,S,y,T,r.breakWords))break;w+=S,E++}T+=w.length-1;var M=t.getFromCache(w,h,u,i);M+o>p&&(a+=t.addLine(s),f=!1,s="",o=0),s+=w,o+=M}else{s.length>0&&(a+=t.addLine(s),s="",o=0);var P=g===v.length-1;a+=t.addLine(y,!P),f=!1,s="",o=0}else b+o>p&&(f=!1,a+=t.addLine(s),s="",o=0),(s.length>0||!t.isBreakingSpace(y)||f)&&(s+=y,o+=b)}return a+=t.addLine(s,!1)},t.addLine=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e=t.trimRight(e),e=r?e+"\n":e},t.getFromCache=function(t,e,r,n){var i=r[t];if(void 0===i){var o=t.length*e;i=n.measureText(t).width+o,r[t]=i}return i},t.collapseSpaces=function(t){return"normal"===t||"pre-line"===t},t.collapseNewlines=function(t){return"normal"===t},t.trimRight=function(e){if("string"!=typeof e)return"";for(var r=e.length-1;r>=0;r--){var n=e[r];if(!t.isBreakingSpace(n))break;e=e.slice(0,-1)}return e},t.isNewline=function(e){return"string"==typeof e&&t._newlines.indexOf(e.charCodeAt(0))>=0},t.isBreakingSpace=function(e){return"string"==typeof e&&t._breakingSpaces.indexOf(e.charCodeAt(0))>=0},t.tokenize=function(e){var r=[],n="";if("string"!=typeof e)return r;for(var i=0;i<e.length;i++){var o=e[i];t.isBreakingSpace(o)||t.isNewline(o)?(""!==n&&(r.push(n),n=""),r.push(o)):n+=o}return""!==n&&r.push(n),r},t.canBreakWords=function(t,e){return e},t.canBreakChars=function(t,e,r,n,i){return!0},t.measureFont=function(e){if(t._fonts[e])return t._fonts[e];var r={},n=t._canvas,i=t._context;i.font=e;var o=t.METRICS_STRING+t.BASELINE_SYMBOL,s=Math.ceil(i.measureText(o).width),a=Math.ceil(i.measureText(t.BASELINE_SYMBOL).width),u=2*a;a=a*t.BASELINE_MULTIPLIER|0,n.width=s,n.height=u,i.fillStyle="#f00",i.fillRect(0,0,s,u),i.font=e,i.textBaseline="alphabetic",i.fillStyle="#000",i.fillText(o,0,a);var h=i.getImageData(0,0,s,u).data,l=h.length,c=4*s,d=0,f=0,p=!1;for(d=0;d<a;++d){for(var v=0;v<c;v+=4)if(255!==h[f+v]){p=!0;break}if(p)break;f+=c}for(r.ascent=a-d,f=l-c,p=!1,d=u;d>a;--d){for(var g=0;g<c;g+=4)if(255!==h[f+g]){p=!0;break}if(p)break;f-=c}return r.descent=d-a,r.fontSize=r.ascent+r.descent,t._fonts[e]=r,r},t.clearMetrics=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";e?delete t._fonts[e]:t._fonts={}},t}();r.default=i;var o=document.createElement("canvas");o.width=o.height=10,i._canvas=o,i._context=o.getContext("2d"),i._fonts={},i.METRICS_STRING="|Éq",i.BASELINE_SYMBOL="M",i.BASELINE_MULTIPLIER=1.4,i._newlines=[10,13],i._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288]},{}],110:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t){return"number"==typeof t?(0,l.hex2string)(t):("string"==typeof t&&0===t.indexOf("0x")&&(t=t.replace("0x","#")),t)}function o(t){if(Array.isArray(t)){for(var e=0;e<t.length;++e)t[e]=i(t[e]);return t}return i(t)}function s(t,e){if(!Array.isArray(t)||!Array.isArray(e))return!1;if(t.length!==e.length)return!1;for(var r=0;r<t.length;++r)if(t[r]!==e[r])return!1;return!0}function a(t,e,r){for(var n in r)Array.isArray(e[n])?t[n]=e[n].slice():t[n]=e[n]}r.__esModule=!0;var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),h=t("../const"),l=t("../utils"),c={align:"left",breakWords:!1,dropShadow:!1,dropShadowAlpha:1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:"black",dropShadowDistance:5,fill:"black",fillGradientType:h.TEXT_GRADIENT.LINEAR_VERTICAL,fillGradientStops:[],fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",letterSpacing:0,lineHeight:0,lineJoin:"miter",miterLimit:10,padding:0,stroke:"black",strokeThickness:0,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100,leading:0},d=function(){function t(e){n(this,t),this.styleID=0,this.reset(),a(this,e,e)}return t.prototype.clone=function(){var e={};return a(e,this,c),new t(e)},t.prototype.reset=function(){a(this,c,c)},t.prototype.toFontString=function(){var t="number"==typeof this.fontSize?this.fontSize+"px":this.fontSize,e=this.fontFamily;Array.isArray(this.fontFamily)||(e=this.fontFamily.split(","));for(var r=e.length-1;r>=0;r--){var n=e[r].trim();/([\"\'])[^\'\"]+\1/.test(n)||(n='"'+n+'"'),e[r]=n}return this.fontStyle+" "+this.fontVariant+" "+this.fontWeight+" "+t+" "+e.join(",")},u(t,[{key:"align",get:function(){return this._align},set:function(t){this._align!==t&&(this._align=t,this.styleID++)}},{key:"breakWords",get:function(){return this._breakWords},set:function(t){this._breakWords!==t&&(this._breakWords=t,this.styleID++)}},{key:"dropShadow",get:function(){return this._dropShadow},set:function(t){this._dropShadow!==t&&(this._dropShadow=t,this.styleID++)}},{key:"dropShadowAlpha",get:function(){return this._dropShadowAlpha},set:function(t){this._dropShadowAlpha!==t&&(this._dropShadowAlpha=t,this.styleID++)}},{key:"dropShadowAngle",get:function(){return this._dropShadowAngle},set:function(t){this._dropShadowAngle!==t&&(this._dropShadowAngle=t,this.styleID++)}},{key:"dropShadowBlur",get:function(){return this._dropShadowBlur},set:function(t){this._dropShadowBlur!==t&&(this._dropShadowBlur=t,this.styleID++)}},{key:"dropShadowColor",get:function(){return this._dropShadowColor},set:function(t){var e=o(t);this._dropShadowColor!==e&&(this._dropShadowColor=e,this.styleID++)}},{key:"dropShadowDistance",get:function(){return this._dropShadowDistance},set:function(t){this._dropShadowDistance!==t&&(this._dropShadowDistance=t,this.styleID++)}},{key:"fill",get:function(){return this._fill},set:function(t){var e=o(t);this._fill!==e&&(this._fill=e,this.styleID++)}},{key:"fillGradientType",get:function(){return this._fillGradientType},set:function(t){this._fillGradientType!==t&&(this._fillGradientType=t,this.styleID++)}},{key:"fillGradientStops",get:function(){return this._fillGradientStops},set:function(t){s(this._fillGradientStops,t)||(this._fillGradientStops=t,this.styleID++)}},{key:"fontFamily",get:function(){return this._fontFamily},set:function(t){this.fontFamily!==t&&(this._fontFamily=t,this.styleID++)}},{key:"fontSize",get:function(){return this._fontSize},set:function(t){this._fontSize!==t&&(this._fontSize=t,this.styleID++)}},{key:"fontStyle",get:function(){return this._fontStyle},set:function(t){this._fontStyle!==t&&(this._fontStyle=t,this.styleID++)}},{key:"fontVariant",get:function(){return this._fontVariant},set:function(t){this._fontVariant!==t&&(this._fontVariant=t,this.styleID++)}},{key:"fontWeight",get:function(){return this._fontWeight},set:function(t){this._fontWeight!==t&&(this._fontWeight=t,this.styleID++)}},{key:"letterSpacing",get:function(){return this._letterSpacing},set:function(t){this._letterSpacing!==t&&(this._letterSpacing=t,this.styleID++)}},{key:"lineHeight",get:function(){return this._lineHeight},set:function(t){this._lineHeight!==t&&(this._lineHeight=t,this.styleID++)}},{key:"leading",get:function(){return this._leading},set:function(t){this._leading!==t&&(this._leading=t,this.styleID++)}},{key:"lineJoin",get:function(){return this._lineJoin},set:function(t){this._lineJoin!==t&&(this._lineJoin=t,this.styleID++)}},{key:"miterLimit",get:function(){return this._miterLimit},set:function(t){this._miterLimit!==t&&(this._miterLimit=t,this.styleID++)}},{key:"padding",get:function(){return this._padding},set:function(t){this._padding!==t&&(this._padding=t,this.styleID++)}},{key:"stroke",get:function(){return this._stroke},set:function(t){var e=o(t);this._stroke!==e&&(this._stroke=e,this.styleID++)}},{key:"strokeThickness",get:function(){return this._strokeThickness},set:function(t){this._strokeThickness!==t&&(this._strokeThickness=t,this.styleID++)}},{key:"textBaseline",get:function(){return this._textBaseline},set:function(t){this._textBaseline!==t&&(this._textBaseline=t,this.styleID++)}},{key:"trim",get:function(){return this._trim},set:function(t){this._trim!==t&&(this._trim=t,this.styleID++)}},{key:"whiteSpace",get:function(){return this._whiteSpace},set:function(t){this._whiteSpace!==t&&(this._whiteSpace=t,this.styleID++)}},{key:"wordWrap",get:function(){return this._wordWrap},set:function(t){this._wordWrap!==t&&(this._wordWrap=t,this.styleID++)}},{key:"wordWrapWidth",get:function(){return this._wordWrapWidth},set:function(t){this._wordWrapWidth!==t&&(this._wordWrapWidth=t,this.styleID++)}}]),t}();r.default=d},{"../const":46,"../utils":125}],111:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("./BaseTexture"),u=n(a),h=t("../settings"),l=n(h),c=function(t){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=arguments[2],a=arguments[3];i(this,e);var u=o(this,t.call(this,null,s));return u.resolution=a||l.default.RESOLUTION,u.width=Math.ceil(r),u.height=Math.ceil(n),u.realWidth=u.width*u.resolution,u.realHeight=u.height*u.resolution,u.scaleMode=void 0!==s?s:l.default.SCALE_MODE,u.hasLoaded=!0,u._glRenderTargets={},u._canvasRenderTarget=null,u.valid=!1,u}return s(e,t),e.prototype.resize=function(t,e){t=Math.ceil(t),e=Math.ceil(e),t===this.width&&e===this.height||(this.valid=t>0&&e>0,this.width=t,this.height=e,this.realWidth=this.width*this.resolution,this.realHeight=this.height*this.resolution,this.valid&&this.emit("update",this))},e.prototype.destroy=function(){t.prototype.destroy.call(this,!0),this.renderer=null},e}(u.default);r.default=c},{"../settings":101,"./BaseTexture":112}],112:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("../utils"),u=t("../settings"),h=n(u),l=t("eventemitter3"),c=n(l),d=t("../utils/determineCrossOrigin"),f=n(d),p=t("bit-twiddle"),v=n(p),g=function(t){function e(r,n,s){i(this,e);var u=o(this,t.call(this));return u.uid=(0,a.uid)(),u.touched=0,u.resolution=s||h.default.RESOLUTION,u.width=100,u.height=100,u.realWidth=100,u.realHeight=100,u.scaleMode=void 0!==n?n:h.default.SCALE_MODE,u.hasLoaded=!1,u.isLoading=!1,u.source=null,u.origSource=null,u.imageType=null,u.sourceScale=1,u.premultipliedAlpha=!0,u.imageUrl=null,u.isPowerOfTwo=!1,u.mipmap=h.default.MIPMAP_TEXTURES,u.wrapMode=h.default.WRAP_MODE,u._glTextures={},u._enabled=0,u._virtalBoundId=-1,u._destroyed=!1,u.textureCacheIds=[],r&&u.loadSource(r),u}return s(e,t),e.prototype.update=function(){"svg"!==this.imageType&&(this.realWidth=this.source.naturalWidth||this.source.videoWidth||this.source.width,this.realHeight=this.source.naturalHeight||this.source.videoHeight||this.source.height,this._updateDimensions()),this.emit("update",this)},e.prototype._updateDimensions=function(){this.width=this.realWidth/this.resolution,this.height=this.realHeight/this.resolution,this.isPowerOfTwo=v.default.isPow2(this.realWidth)&&v.default.isPow2(this.realHeight)},e.prototype.loadSource=function(t){var e=this.isLoading;this.hasLoaded=!1,this.isLoading=!1,e&&this.source&&(this.source.onload=null,this.source.onerror=null);var r=!this.source;if(this.source=t,(t.src&&t.complete||t.getContext)&&t.width&&t.height)this._updateImageType(),"svg"===this.imageType?this._loadSvgSource():this._sourceLoaded(),r&&this.emit("loaded",this);else if(!t.getContext){this.isLoading=!0;var n=this;if(t.onload=function(){if(n._updateImageType(),t.onload=null,t.onerror=null,n.isLoading){if(n.isLoading=!1,n._sourceLoaded(),"svg"===n.imageType)return void n._loadSvgSource();n.emit("loaded",n)}},t.onerror=function(){t.onload=null,t.onerror=null,n.isLoading&&(n.isLoading=!1,n.emit("error",n))},t.complete&&t.src){if(t.onload=null,t.onerror=null,"svg"===n.imageType)return void n._loadSvgSource();this.isLoading=!1,t.width&&t.height?(this._sourceLoaded(),e&&this.emit("loaded",this)):e&&this.emit("error",this)}}},e.prototype._updateImageType=function(){if(this.imageUrl){var t=(0,a.decomposeDataUri)(this.imageUrl),e=void 0;if(t&&"image"===t.mediaType){var r=t.subType.split("+")[0];if(!(e=(0,a.getUrlFileExtension)("."+r)))throw new Error("Invalid image type in data URI.")}else(e=(0,a.getUrlFileExtension)(this.imageUrl))||(e="png");this.imageType=e}},e.prototype._loadSvgSource=function(){if("svg"===this.imageType){var t=(0,a.decomposeDataUri)(this.imageUrl);t?this._loadSvgSourceUsingDataUri(t):this._loadSvgSourceUsingXhr()}},e.prototype._loadSvgSourceUsingDataUri=function(t){var e=void 0;if("base64"===t.encoding){if(!atob)throw new Error("Your browser doesn't support base64 conversions.");e=atob(t.data)}else e=t.data;this._loadSvgSourceUsingString(e)},e.prototype._loadSvgSourceUsingXhr=function(){var t=this,e=new XMLHttpRequest;e.onload=function(){if(e.readyState!==e.DONE||200!==e.status)throw new Error("Failed to load SVG using XHR.");t._loadSvgSourceUsingString(e.response)},e.onerror=function(){return t.emit("error",t)},e.open("GET",this.imageUrl,!0),e.send()},e.prototype._loadSvgSourceUsingString=function(t){var r=(0,a.getSvgSize)(t),n=r.width,i=r.height;if(!n||!i)throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");this.realWidth=Math.round(n*this.sourceScale),this.realHeight=Math.round(i*this.sourceScale),this._updateDimensions();var o=document.createElement("canvas");o.width=this.realWidth,o.height=this.realHeight,o._pixiId="canvas_"+(0,a.uid)(),o.getContext("2d").drawImage(this.source,0,0,n,i,0,0,this.realWidth,this.realHeight),this.origSource=this.source,this.source=o,e.addToCache(this,o._pixiId),this.isLoading=!1,this._sourceLoaded(),this.emit("loaded",this)},e.prototype._sourceLoaded=function(){this.hasLoaded=!0,this.update()},e.prototype.destroy=function(){this.imageUrl&&(delete a.TextureCache[this.imageUrl],this.imageUrl=null,navigator.isCocoonJS||(this.source.src="")),this.source=null,this.dispose(),e.removeFromCache(this),this.textureCacheIds=null,this._destroyed=!0},e.prototype.dispose=function(){this.emit("dispose",this)},e.prototype.updateSourceImage=function(t){this.source.src=t,this.loadSource(this.source)},e.fromImage=function(t,r,n,i){var o=a.BaseTextureCache[t];if(!o){var s=new Image;void 0===r&&0!==t.indexOf("data:")?s.crossOrigin=(0,f.default)(t):r&&(s.crossOrigin="string"==typeof r?r:"anonymous"),o=new e(s,n),o.imageUrl=t,i&&(o.sourceScale=i),o.resolution=(0,a.getResolutionOfUrl)(t),s.src=t,e.addToCache(o,t)}return o},e.fromCanvas=function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"canvas";t._pixiId||(t._pixiId=n+"_"+(0,a.uid)());var i=a.BaseTextureCache[t._pixiId];return i||(i=new e(t,r),e.addToCache(i,t._pixiId)),i},e.from=function(t,r,n){if("string"==typeof t)return e.fromImage(t,void 0,r,n);if(t instanceof HTMLImageElement){var i=t.src,o=a.BaseTextureCache[i];return o||(o=new e(t,r),o.imageUrl=i,n&&(o.sourceScale=n),o.resolution=(0,a.getResolutionOfUrl)(i),e.addToCache(o,i)),o}return t instanceof HTMLCanvasElement?e.fromCanvas(t,r):t},e.addToCache=function(t,e){e&&(-1===t.textureCacheIds.indexOf(e)&&t.textureCacheIds.push(e),a.BaseTextureCache[e]=t)},e.removeFromCache=function(t){if("string"==typeof t){var e=a.BaseTextureCache[t];if(e){var r=e.textureCacheIds.indexOf(t);return r>-1&&e.textureCacheIds.splice(r,1),delete a.BaseTextureCache[t],e}}else if(t&&t.textureCacheIds){for(var n=0;n<t.textureCacheIds.length;++n)delete a.BaseTextureCache[t.textureCacheIds[n]];return t.textureCacheIds.length=0,t}return null},e}(c.default);r.default=g},{"../settings":101,"../utils":125,"../utils/determineCrossOrigin":124,"bit-twiddle":1,eventemitter3:3}],113:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("./BaseRenderTexture"),u=n(a),h=t("./Texture"),l=n(h),c=function(t){function e(r,n){i(this,e);var s=null;if(!(r instanceof u.default)){var a=arguments[1],h=arguments[2],l=arguments[3],c=arguments[4];console.warn("Please use RenderTexture.create("+a+", "+h+") instead of the ctor directly."),s=arguments[0],n=null,r=new u.default(a,h,l,c)}var d=o(this,t.call(this,r,n));return d.legacyRenderer=s,d.valid=!0,d._updateUvs(),d}return s(e,t),e.prototype.resize=function(t,e,r){t=Math.ceil(t),e=Math.ceil(e),this.valid=t>0&&e>0,this._frame.width=this.orig.width=t,this._frame.height=this.orig.height=e,r||this.baseTexture.resize(t,e),this._updateUvs()},e.create=function(t,r,n,i){return new e(new u.default(t,r,n,i))},e}(l.default);r.default=c},{"./BaseRenderTexture":111,"./Texture":115}],114:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=t("../"),s=t("../utils"),a=function(){function t(e,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;n(this,t),this.baseTexture=e,this.textures={},this.data=r,this.resolution=this._updateResolution(i||this.baseTexture.imageUrl),this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}return i(t,null,[{key:"BATCH_SIZE",get:function(){return 1e3}}]),
t.prototype._updateResolution=function(t){var e=this.data.meta.scale,r=(0,s.getResolutionOfUrl)(t,null);return null===r&&(r=void 0!==e?parseFloat(e):1),1!==r&&(this.baseTexture.resolution=r,this.baseTexture.update()),r},t.prototype.parse=function(e){this._batchIndex=0,this._callback=e,this._frameKeys.length<=t.BATCH_SIZE?(this._processFrames(0),this._parseComplete()):this._nextBatch()},t.prototype._processFrames=function(e){for(var r=e,n=t.BATCH_SIZE,i=this.baseTexture.sourceScale;r-e<n&&r<this._frameKeys.length;){var s=this._frameKeys[r],a=this._frames[s],u=a.frame;if(u){var h=null,l=null,c=!1!==a.trimmed&&a.sourceSize?a.sourceSize:a.frame,d=new o.Rectangle(0,0,Math.floor(c.w*i)/this.resolution,Math.floor(c.h*i)/this.resolution);h=a.rotated?new o.Rectangle(Math.floor(u.x*i)/this.resolution,Math.floor(u.y*i)/this.resolution,Math.floor(u.h*i)/this.resolution,Math.floor(u.w*i)/this.resolution):new o.Rectangle(Math.floor(u.x*i)/this.resolution,Math.floor(u.y*i)/this.resolution,Math.floor(u.w*i)/this.resolution,Math.floor(u.h*i)/this.resolution),!1!==a.trimmed&&a.spriteSourceSize&&(l=new o.Rectangle(Math.floor(a.spriteSourceSize.x*i)/this.resolution,Math.floor(a.spriteSourceSize.y*i)/this.resolution,Math.floor(u.w*i)/this.resolution,Math.floor(u.h*i)/this.resolution)),this.textures[s]=new o.Texture(this.baseTexture,h,d,l,a.rotated?2:0),o.Texture.addToCache(this.textures[s],s)}r++}},t.prototype._parseComplete=function(){var t=this._callback;this._callback=null,this._batchIndex=0,t.call(this,this.textures)},t.prototype._nextBatch=function(){var e=this;this._processFrames(this._batchIndex*t.BATCH_SIZE),this._batchIndex++,setTimeout(function(){e._batchIndex*t.BATCH_SIZE<e._frameKeys.length?e._nextBatch():e._parseComplete()},0)},t.prototype.destroy=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];for(var e in this.textures)this.textures[e].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,t&&this.baseTexture.destroy(),this.baseTexture=null},t}();r.default=a},{"../":65,"../utils":125}],115:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t){t.destroy=function(){},t.on=function(){},t.once=function(){},t.emit=function(){}}r.__esModule=!0;var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),h=t("./BaseTexture"),l=n(h),c=t("./VideoBaseTexture"),d=n(c),f=t("./TextureUvs"),p=n(f),v=t("eventemitter3"),g=n(v),y=t("../math"),m=t("../utils"),_=t("../settings"),b=n(_),x=function(t){function e(r,n,s,a,u){i(this,e);var h=o(this,t.call(this));if(h.noFrame=!1,n||(h.noFrame=!0,n=new y.Rectangle(0,0,1,1)),r instanceof e&&(r=r.baseTexture),h.baseTexture=r,h._frame=n,h.trim=a,h.valid=!1,h.requiresUpdate=!1,h._uvs=null,h.orig=s||n,h._rotate=Number(u||0),!0===u)h._rotate=2;else if(h._rotate%2!=0)throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");return r.hasLoaded?(h.noFrame&&(n=new y.Rectangle(0,0,r.width,r.height),r.on("update",h.onBaseTextureUpdated,h)),h.frame=n):r.once("loaded",h.onBaseTextureLoaded,h),h._updateID=0,h.transform=null,h.textureCacheIds=[],h}return s(e,t),e.prototype.update=function(){this.baseTexture.update()},e.prototype.onBaseTextureLoaded=function(t){this._updateID++,this.noFrame?this.frame=new y.Rectangle(0,0,t.width,t.height):this.frame=this._frame,this.baseTexture.on("update",this.onBaseTextureUpdated,this),this.emit("update",this)},e.prototype.onBaseTextureUpdated=function(t){this._updateID++,this._frame.width=t.width,this._frame.height=t.height,this.emit("update",this)},e.prototype.destroy=function(t){this.baseTexture&&(t&&(m.TextureCache[this.baseTexture.imageUrl]&&e.removeFromCache(this.baseTexture.imageUrl),this.baseTexture.destroy()),this.baseTexture.off("update",this.onBaseTextureUpdated,this),this.baseTexture.off("loaded",this.onBaseTextureLoaded,this),this.baseTexture=null),this._frame=null,this._uvs=null,this.trim=null,this.orig=null,this.valid=!1,e.removeFromCache(this),this.textureCacheIds=null},e.prototype.clone=function(){return new e(this.baseTexture,this.frame,this.orig,this.trim,this.rotate)},e.prototype._updateUvs=function(){this._uvs||(this._uvs=new p.default),this._uvs.set(this._frame,this.baseTexture,this.rotate),this._updateID++},e.fromImage=function(t,r,n,i){var o=m.TextureCache[t];return o||(o=new e(l.default.fromImage(t,r,n,i)),e.addToCache(o,t)),o},e.fromFrame=function(t){var e=m.TextureCache[t];if(!e)throw new Error('The frameId "'+t+'" does not exist in the texture cache');return e},e.fromCanvas=function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"canvas";return new e(l.default.fromCanvas(t,r,n))},e.fromVideo=function(t,r){return"string"==typeof t?e.fromVideoUrl(t,r):new e(d.default.fromVideo(t,r))},e.fromVideoUrl=function(t,r){return new e(d.default.fromUrl(t,r))},e.from=function(t){if("string"==typeof t){var r=m.TextureCache[t];if(!r){return null!==t.match(/\.(mp4|webm|ogg|h264|avi|mov)$/)?e.fromVideoUrl(t):e.fromImage(t)}return r}return t instanceof HTMLImageElement?new e(l.default.from(t)):t instanceof HTMLCanvasElement?e.fromCanvas(t,b.default.SCALE_MODE,"HTMLCanvasElement"):t instanceof HTMLVideoElement?e.fromVideo(t):t instanceof l.default?new e(t):t},e.fromLoader=function(t,r,n){var i=new l.default(t,void 0,(0,m.getResolutionOfUrl)(r)),o=new e(i);return i.imageUrl=r,n||(n=r),l.default.addToCache(o.baseTexture,n),e.addToCache(o,n),n!==r&&(l.default.addToCache(o.baseTexture,r),e.addToCache(o,r)),o},e.addToCache=function(t,e){e&&(-1===t.textureCacheIds.indexOf(e)&&t.textureCacheIds.push(e),m.TextureCache[e]=t)},e.removeFromCache=function(t){if("string"==typeof t){var e=m.TextureCache[t];if(e){var r=e.textureCacheIds.indexOf(t);return r>-1&&e.textureCacheIds.splice(r,1),delete m.TextureCache[t],e}}else if(t&&t.textureCacheIds){for(var n=0;n<t.textureCacheIds.length;++n)m.TextureCache[t.textureCacheIds[n]]===t&&delete m.TextureCache[t.textureCacheIds[n]];return t.textureCacheIds.length=0,t}return null},u(e,[{key:"frame",get:function(){return this._frame},set:function(t){this._frame=t,this.noFrame=!1;var e=t.x,r=t.y,n=t.width,i=t.height,o=e+n>this.baseTexture.width,s=r+i>this.baseTexture.height;if(o||s){var a=o&&s?"and":"or",u="X: "+e+" + "+n+" = "+(e+n)+" > "+this.baseTexture.width,h="Y: "+r+" + "+i+" = "+(r+i)+" > "+this.baseTexture.height;throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: "+u+" "+a+" "+h)}this.valid=n&&i&&this.baseTexture.hasLoaded,this.trim||this.rotate||(this.orig=t),this.valid&&this._updateUvs()}},{key:"rotate",get:function(){return this._rotate},set:function(t){this._rotate=t,this.valid&&this._updateUvs()}},{key:"width",get:function(){return this.orig.width}},{key:"height",get:function(){return this.orig.height}}]),e}(g.default);r.default=x,x.EMPTY=new x(new l.default),a(x.EMPTY),a(x.EMPTY.baseTexture),x.WHITE=function(){var t=document.createElement("canvas");t.width=10,t.height=10;var e=t.getContext("2d");return e.fillStyle="white",e.fillRect(0,0,10,10),new x(new l.default(t))}(),a(x.WHITE),a(x.WHITE.baseTexture)},{"../math":70,"../settings":101,"../utils":125,"./BaseTexture":112,"./TextureUvs":117,"./VideoBaseTexture":118,eventemitter3:3}],116:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=t("../math/Matrix"),s=function(t){return t&&t.__esModule?t:{default:t}}(o),a=new s.default,u=function(){function t(e,r){n(this,t),this._texture=e,this.mapCoord=new s.default,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._lastTextureID=-1,this.clampOffset=0,this.clampMargin=void 0===r?.5:r}return t.prototype.multiplyUvs=function(t,e){void 0===e&&(e=t);for(var r=this.mapCoord,n=0;n<t.length;n+=2){var i=t[n],o=t[n+1];e[n]=i*r.a+o*r.c+r.tx,e[n+1]=i*r.b+o*r.d+r.ty}return e},t.prototype.update=function(t){var e=this._texture;if(!e||!e.valid)return!1;if(!t&&this._lastTextureID===e._updateID)return!1;this._lastTextureID=e._updateID;var r=e._uvs;this.mapCoord.set(r.x1-r.x0,r.y1-r.y0,r.x3-r.x0,r.y3-r.y0,r.x0,r.y0);var n=e.orig,i=e.trim;i&&(a.set(n.width/i.width,0,0,n.height/i.height,-i.x/i.width,-i.y/i.height),this.mapCoord.append(a));var o=e.baseTexture,s=this.uClampFrame,u=this.clampMargin/o.resolution,h=this.clampOffset;return s[0]=(e._frame.x+u+h)/o.width,s[1]=(e._frame.y+u+h)/o.height,s[2]=(e._frame.x+e._frame.width-u+h)/o.width,s[3]=(e._frame.y+e._frame.height-u+h)/o.height,this.uClampOffset[0]=h/o.realWidth,this.uClampOffset[1]=h/o.realHeight,!0},i(t,[{key:"texture",get:function(){return this._texture},set:function(t){this._texture=t,this._lastTextureID=-1}}]),t}();r.default=u},{"../math/Matrix":67}],117:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=t("../math/GroupD8"),o=function(t){return t&&t.__esModule?t:{default:t}}(i),s=function(){function t(){n(this,t),this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,this.y3=1,this.uvsUint32=new Uint32Array(4)}return t.prototype.set=function(t,e,r){var n=e.width,i=e.height;if(r){var s=t.width/2/n,a=t.height/2/i,u=t.x/n+s,h=t.y/i+a;r=o.default.add(r,o.default.NW),this.x0=u+s*o.default.uX(r),this.y0=h+a*o.default.uY(r),r=o.default.add(r,2),this.x1=u+s*o.default.uX(r),this.y1=h+a*o.default.uY(r),r=o.default.add(r,2),this.x2=u+s*o.default.uX(r),this.y2=h+a*o.default.uY(r),r=o.default.add(r,2),this.x3=u+s*o.default.uX(r),this.y3=h+a*o.default.uY(r)}else this.x0=t.x/n,this.y0=t.y/i,this.x1=(t.x+t.width)/n,this.y1=t.y/i,this.x2=(t.x+t.width)/n,this.y2=(t.y+t.height)/i,this.x3=t.x/n,this.y3=(t.y+t.height)/i;this.uvsUint32[0]=(65535*this.y0&65535)<<16|65535*this.x0&65535,this.uvsUint32[1]=(65535*this.y1&65535)<<16|65535*this.x1&65535,this.uvsUint32[2]=(65535*this.y2&65535)<<16|65535*this.x2&65535,this.uvsUint32[3]=(65535*this.y3&65535)<<16|65535*this.x3&65535},t}();r.default=s},{"../math/GroupD8":66}],118:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function a(t,e){e||(e="video/"+t.substr(t.lastIndexOf(".")+1));var r=document.createElement("source");return r.src=t,r.type=e,r}r.__esModule=!0;var u=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),h=t("./BaseTexture"),l=n(h),c=t("../utils"),d=t("../ticker"),f=t("../const"),p=t("../utils/determineCrossOrigin"),v=n(p),g=function(t){function e(r,n){if(i(this,e),!r)throw new Error("No video source element specified.");(r.readyState===r.HAVE_ENOUGH_DATA||r.readyState===r.HAVE_FUTURE_DATA)&&r.width&&r.height&&(r.complete=!0);var s=o(this,t.call(this,r,n));return s.width=r.videoWidth,s.height=r.videoHeight,s._autoUpdate=!0,s._isAutoUpdating=!1,s.autoPlay=!0,s.update=s.update.bind(s),s._onCanPlay=s._onCanPlay.bind(s),r.addEventListener("play",s._onPlayStart.bind(s)),r.addEventListener("pause",s._onPlayStop.bind(s)),s.hasLoaded=!1,s.__loaded=!1,s._isSourceReady()?s._onCanPlay():(r.addEventListener("canplay",s._onCanPlay),r.addEventListener("canplaythrough",s._onCanPlay)),s}return s(e,t),e.prototype._isSourcePlaying=function(){var t=this.source;return t.currentTime>0&&!1===t.paused&&!1===t.ended&&t.readyState>2},e.prototype._isSourceReady=function(){return 3===this.source.readyState||4===this.source.readyState},e.prototype._onPlayStart=function(){this.hasLoaded||this._onCanPlay(),!this._isAutoUpdating&&this.autoUpdate&&(d.shared.add(this.update,this,f.UPDATE_PRIORITY.HIGH),this._isAutoUpdating=!0)},e.prototype._onPlayStop=function(){this._isAutoUpdating&&(d.shared.remove(this.update,this),this._isAutoUpdating=!1)},e.prototype._onCanPlay=function(){this.hasLoaded=!0,this.source&&(this.source.removeEventListener("canplay",this._onCanPlay),this.source.removeEventListener("canplaythrough",this._onCanPlay),this.width=this.source.videoWidth,this.height=this.source.videoHeight,this.__loaded||(this.__loaded=!0,this.emit("loaded",this)),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&this.source.play())},e.prototype.destroy=function(){this._isAutoUpdating&&d.shared.remove(this.update,this),this.source&&this.source._pixiId&&(l.default.removeFromCache(this.source._pixiId),delete this.source._pixiId,this.source.pause(),this.source.src="",this.source.load()),t.prototype.destroy.call(this)},e.fromVideo=function(t,r){t._pixiId||(t._pixiId="video_"+(0,c.uid)());var n=c.BaseTextureCache[t._pixiId];return n||(n=new e(t,r),l.default.addToCache(n,t._pixiId)),n},e.fromUrl=function(t,r,n){var i=document.createElement("video");i.setAttribute("webkit-playsinline",""),i.setAttribute("playsinline","");var o=Array.isArray(t)?t[0].src||t[0]:t.src||t;if(void 0===n&&0!==o.indexOf("data:")?i.crossOrigin=(0,v.default)(o):n&&(i.crossOrigin="string"==typeof n?n:"anonymous"),Array.isArray(t))for(var s=0;s<t.length;++s)i.appendChild(a(t[s].src||t[s],t[s].mime));else i.appendChild(a(o,t.mime));return i.load(),e.fromVideo(i,r)},u(e,[{key:"autoUpdate",get:function(){return this._autoUpdate},set:function(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isAutoUpdating?(d.shared.remove(this.update,this),this._isAutoUpdating=!1):this._autoUpdate&&!this._isAutoUpdating&&(d.shared.add(this.update,this,f.UPDATE_PRIORITY.HIGH),this._isAutoUpdating=!0))}}]),e}(l.default);r.default=g,g.fromUrls=g.fromUrl},{"../const":46,"../ticker":121,"../utils":125,"../utils/determineCrossOrigin":124,"./BaseTexture":112}],119:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=t("../settings"),a=n(s),u=t("../const"),h=t("./TickerListener"),l=n(h),c=function(){function t(){var e=this;i(this,t),this._head=new l.default(null,null,1/0),this._requestId=null,this._maxElapsedMS=100,this.autoStart=!1,this.deltaTime=1,this.elapsedMS=1/a.default.TARGET_FPMS,this.lastTime=-1,this.speed=1,this.started=!1,this._tick=function(t){e._requestId=null,e.started&&(e.update(t),e.started&&null===e._requestId&&e._head.next&&(e._requestId=requestAnimationFrame(e._tick)))}}return t.prototype._requestIfNeeded=function(){null===this._requestId&&this._head.next&&(this.lastTime=performance.now(),this._requestId=requestAnimationFrame(this._tick))},t.prototype._cancelIfNeeded=function(){null!==this._requestId&&(cancelAnimationFrame(this._requestId),this._requestId=null)},t.prototype._startIfPossible=function(){this.started?this._requestIfNeeded():this.autoStart&&this.start()},t.prototype.add=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u.UPDATE_PRIORITY.NORMAL;return this._addListener(new l.default(t,e,r))},t.prototype.addOnce=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u.UPDATE_PRIORITY.NORMAL;return this._addListener(new l.default(t,e,r,!0))},t.prototype._addListener=function(t){var e=this._head.next,r=this._head;if(e){for(;e;){if(t.priority>e.priority){t.connect(r);break}r=e,e=e.next}t.previous||t.connect(r)}else t.connect(r);return this._startIfPossible(),this},t.prototype.remove=function(t,e){for(var r=this._head.next;r;)r=r.match(t,e)?r.destroy():r.next;return this._head.next||this._cancelIfNeeded(),this},t.prototype.start=function(){this.started||(this.started=!0,this._requestIfNeeded())},t.prototype.stop=function(){this.started&&(this.started=!1,this._cancelIfNeeded())},t.prototype.destroy=function(){this.stop();for(var t=this._head.next;t;)t=t.destroy(!0);this._head.destroy(),this._head=null},t.prototype.update=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:performance.now(),e=void 0;if(t>this.lastTime){e=this.elapsedMS=t-this.lastTime,e>this._maxElapsedMS&&(e=this._maxElapsedMS),this.deltaTime=e*a.default.TARGET_FPMS*this.speed;for(var r=this._head,n=r.next;n;)n=n.emit(this.deltaTime);r.next||this._cancelIfNeeded()}else this.deltaTime=this.elapsedMS=0;this.lastTime=t},o(t,[{key:"FPS",get:function(){return 1e3/this.elapsedMS}},{key:"minFPS",get:function(){return 1e3/this._maxElapsedMS},set:function(t){var e=Math.min(Math.max(0,t)/1e3,a.default.TARGET_FPMS);this._maxElapsedMS=1/e}}]),t}();r.default=c},{"../const":46,"../settings":101,"./TickerListener":120}],120:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];n(this,t),this.fn=e,this.context=r,this.priority=i,this.once=o,this.next=null,this.previous=null,this._destroyed=!1}return t.prototype.match=function(t,e){return e=e||null,this.fn===t&&this.context===e},t.prototype.emit=function(t){this.fn&&(this.context?this.fn.call(this.context,t):this.fn(t));var e=this.next;return this.once&&this.destroy(!0),this._destroyed&&(this.next=null),e},t.prototype.connect=function(t){this.previous=t,t.next&&(t.next.previous=this),this.next=t.next,t.next=this},t.prototype.destroy=function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this._destroyed=!0,this.fn=null,this.context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);var e=this.next;return this.next=t?null:e,this.previous=null,e},t}();r.default=i},{}],121:[function(t,e,r){"use strict";r.__esModule=!0,r.Ticker=r.shared=void 0;var n=t("./Ticker"),i=function(t){return t&&t.__esModule?t:{default:t}}(n),o=new i.default;o.autoStart=!0,o.destroy=function(){},r.shared=o,r.Ticker=i.default},{"./Ticker":119}],122:[function(t,e,r){"use strict";function n(){return!(!!navigator.platform&&/iPad|iPhone|iPod/.test(navigator.platform))}r.__esModule=!0,r.default=n},{}],123:[function(t,e,r){"use strict";function n(t){for(var e=6*t,r=new Uint16Array(e),n=0,i=0;n<e;n+=6,i+=4)r[n+0]=i+0,r[n+1]=i+1,r[n+2]=i+2,r[n+3]=i+0,r[n+4]=i+2,r[n+5]=i+3;return r}r.__esModule=!0,r.default=n},{}],124:[function(t,e,r){"use strict";function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location;if(0===t.indexOf("data:"))return"";e=e||window.location,s||(s=document.createElement("a")),s.href=t,t=o.default.parse(s.href);var r=!t.port&&""===e.port||t.port===e.port;return t.hostname===e.hostname&&r&&t.protocol===e.protocol?"":"anonymous"}r.__esModule=!0,r.default=n;var i=t("url"),o=function(t){return t&&t.__esModule?t:{default:t}}(i),s=void 0},{url:38}],125:[function(t,e,r){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}function o(){return++U}function s(t,e){return e=e||[],e[0]=(t>>16&255)/255,e[1]=(t>>8&255)/255,e[2]=(255&t)/255,e}function a(t){return t=t.toString(16),"#"+(t="000000".substr(0,6-t.length)+t)}function u(t){return(255*t[0]<<16)+(255*t[1]<<8)+(255*t[2]|0)}function h(t,e){var r=S.default.RETINA_PREFIX.exec(t);return r?parseFloat(r[1]):void 0!==e?e:1}function l(t){var e=w.DATA_URI.exec(t);if(e)return{mediaType:e[1]?e[1].toLowerCase():void 0,subType:e[2]?e[2].toLowerCase():void 0,charset:e[3]?e[3].toLowerCase():void 0,encoding:e[4]?e[4].toLowerCase():void 0,data:e[5]}}function c(t){var e=w.URL_FILE_EXTENSION.exec(t);if(e)return e[1].toLowerCase()}function d(t){var e=w.SVG_SIZE.exec(t),r={};return e&&(r[e[1]]=Math.round(parseFloat(e[3])),r[e[5]]=Math.round(parseFloat(e[7]))),r}function f(){X=!0}function p(t){if(!X){if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var e=["\n %c %c %c PixiJS "+w.VERSION+" - ✰ "+t+" ✰  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ \n\n","background: #ff66a5; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff66a5; background: #030307; padding:5px 0;","background: #ff66a5; padding:5px 0;","background: #ffc3dc; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;"];window.console.log.apply(console,e)}else window.console&&window.console.log("PixiJS "+w.VERSION+" - "+t+" - http://www.pixijs.com/");X=!0}}function v(){var t={stencil:!0,failIfMajorPerformanceCaveat:!0};try{if(!window.WebGLRenderingContext)return!1;var e=document.createElement("canvas"),r=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),n=!(!r||!r.getContextAttributes().stencil);if(r){var i=r.getExtension("WEBGL_lose_context");i&&i.loseContext()}return r=null,n}catch(t){return!1}}function g(t){return 0===t?0:t<0?-1:1}function y(){var t=void 0;for(t in G)G[t].destroy();for(t in W)W[t].destroy()}function m(){var t=void 0;for(t in G)delete G[t];for(t in W)delete W[t]}function _(t,e){return H[e?1:0][t]}function b(t,e){if(1===e)return(255*e<<24)+t;if(0===e)return 0;var r=t>>16&255,n=t>>8&255,i=255&t;return r=r*e+.5|0,n=n*e+.5|0,i=i*e+.5|0,(255*e<<24)+(r<<16)+(n<<8)+i}function x(t,e,r,n){return r=r||new Float32Array(4),n||void 0===n?(r[0]=t[0]*e,r[1]=t[1]*e,r[2]=t[2]*e):(r[0]=t[0],r[1]=t[1],r[2]=t[2]),r[3]=e,r}function T(t,e,r,n){return r=r||new Float32Array(4),r[0]=(t>>16&255)/255,r[1]=(t>>8&255)/255,r[2]=(255&t)/255,(n||void 0===n)&&(r[0]*=e,r[1]*=e,r[2]*=e),r[3]=e,r}r.__esModule=!0,r.premultiplyBlendMode=r.BaseTextureCache=r.TextureCache=r.earcut=r.mixins=r.pluginTarget=r.EventEmitter=r.removeItems=r.isMobile=void 0,r.uid=o,r.hex2rgb=s,r.hex2string=a,r.rgb2hex=u,r.getResolutionOfUrl=h,r.decomposeDataUri=l,r.getUrlFileExtension=c,r.getSvgSize=d,r.skipHello=f,r.sayHello=p,r.isWebGLSupported=v,r.sign=g,r.destroyTextureCache=y,r.clearTextureCache=m,r.correctBlendMode=_,r.premultiplyTint=b,r.premultiplyRgba=x,r.premultiplyTintToRgba=T;var w=t("../const"),E=t("../settings"),S=i(E),O=t("eventemitter3"),M=i(O),P=t("./pluginTarget"),C=i(P),R=t("./mixin"),A=n(R),I=t("ismobilejs"),D=n(I),L=t("remove-array-items"),N=i(L),B=t("./mapPremultipliedBlendModes"),F=i(B),k=t("earcut"),j=i(k),U=0,X=!1;r.isMobile=D,r.removeItems=N.default,r.EventEmitter=M.default,r.pluginTarget=C.default,r.mixins=A,r.earcut=j.default;var G=r.TextureCache=Object.create(null),W=r.BaseTextureCache=Object.create(null),H=r.premultiplyBlendMode=(0,F.default)()},{"../const":46,"../settings":101,"./mapPremultipliedBlendModes":126,"./mixin":128,"./pluginTarget":129,earcut:2,eventemitter3:3,ismobilejs:4,"remove-array-items":31}],126:[function(t,e,r){"use strict";function n(){for(var t=[],e=[],r=0;r<32;r++)t[r]=r,e[r]=r;t[i.BLEND_MODES.NORMAL_NPM]=i.BLEND_MODES.NORMAL,t[i.BLEND_MODES.ADD_NPM]=i.BLEND_MODES.ADD,t[i.BLEND_MODES.SCREEN_NPM]=i.BLEND_MODES.SCREEN,e[i.BLEND_MODES.NORMAL]=i.BLEND_MODES.NORMAL_NPM,e[i.BLEND_MODES.ADD]=i.BLEND_MODES.ADD_NPM,e[i.BLEND_MODES.SCREEN]=i.BLEND_MODES.SCREEN_NPM;var n=[];return n.push(e),n.push(t),n}r.__esModule=!0,r.default=n;var i=t("../const")},{"../const":46}],127:[function(t,e,r){"use strict";function n(t){return o.default.tablet||o.default.phone?4:t}r.__esModule=!0,r.default=n;var i=t("ismobilejs"),o=function(t){return t&&t.__esModule?t:{default:t}}(i)},{ismobilejs:4}],128:[function(t,e,r){"use strict";function n(t,e){if(t&&e)for(var r=Object.keys(e),n=0;n<r.length;++n){var i=r[n];Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}}function i(t,e){s.push(t,e)}function o(){for(var t=0;t<s.length;t+=2)n(s[t],s[t+1]);s.length=0}r.__esModule=!0,r.mixin=n,r.delayMixin=i,r.performMixins=o;var s=[]},{}],129:[function(t,e,r){"use strict";function n(t){t.__plugins={},t.registerPlugin=function(e,r){t.__plugins[e]=r},t.prototype.initPlugins=function(){this.plugins=this.plugins||{};for(var e in t.__plugins)this.plugins[e]=new t.__plugins[e](this)},t.prototype.destroyPlugins=function(){for(var t in this.plugins)this.plugins[t].destroy(),this.plugins[t]=null;this.plugins=null}}r.__esModule=!0,r.default={mixin:function(t){n(t)}}},{}],130:[function(t,e,r){"use strict";function n(t){var e=t.width,r=t.height,n=t.getContext("2d"),i=n.getImageData(0,0,e,r),o=i.data,s=o.length,a={top:null,left:null,right:null,bottom:null},u=void 0,h=void 0,l=void 0;for(u=0;u<s;u+=4)0!==o[u+3]&&(h=u/4%e,l=~~(u/4/e),null===a.top&&(a.top=l),null===a.left?a.left=h:h<a.left&&(a.left=h),null===a.right?a.right=h+1:a.right<h&&(a.right=h+1),null===a.bottom?a.bottom=l:a.bottom<l&&(a.bottom=l));return e=a.right-a.left,r=a.bottom-a.top+1,{height:r,width:e,data:n.getImageData(a.left,a.top,e,r)}}r.__esModule=!0,r.default=n},{}],131:[function(t,e,r){"use strict";function n(t){if(!o[t]){var e=(new Error).stack;void 0===e?console.warn("Deprecation Warning: ",t):(e=e.split("\n").splice(3).join("\n"),console.groupCollapsed?(console.groupCollapsed("%cDeprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",t),console.warn(e),console.groupEnd()):(console.warn("Deprecation Warning: ",t),console.warn(e))),o[t]=!0}}function i(t){var e=t.mesh,r=t.particles,i=t.extras,o=t.filters,s=t.prepare,a=t.loaders,u=t.interaction;Object.defineProperties(t,{SpriteBatch:{get:function(){throw new ReferenceError("SpriteBatch does not exist any more, please use the new ParticleContainer instead.")}},AssetLoader:{get:function(){throw new ReferenceError("The loader system was overhauled in PixiJS v3, please see the new PIXI.loaders.Loader class.")}},Stage:{get:function(){return n("You do not need to use a PIXI Stage any more, you can simply render any container."),t.Container}},DisplayObjectContainer:{get:function(){return n("DisplayObjectContainer has been shortened to Container, please use Container from now on."),t.Container}},Strip:{get:function(){return n("The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on."),e.Mesh}},Rope:{get:function(){return n("The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on."),e.Rope}},ParticleContainer:{get:function(){return n("The ParticleContainer class has been moved to particles.ParticleContainer, please use particles.ParticleContainer from now on."),r.ParticleContainer}},MovieClip:{get:function(){return n("The MovieClip class has been moved to extras.AnimatedSprite, please use extras.AnimatedSprite."),i.AnimatedSprite}},TilingSprite:{get:function(){return n("The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on."),i.TilingSprite}},BitmapText:{get:function(){return n("The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on."),i.BitmapText}},blendModes:{get:function(){return n("The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on."),t.BLEND_MODES}},scaleModes:{get:function(){return n("The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on."),t.SCALE_MODES}},BaseTextureCache:{get:function(){return n("The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on."),t.utils.BaseTextureCache}},TextureCache:{get:function(){return n("The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on."),t.utils.TextureCache}},math:{get:function(){return n("The math namespace is deprecated, please access members already accessible on PIXI."),t}},AbstractFilter:{get:function(){return n("AstractFilter has been renamed to Filter, please use PIXI.Filter"),t.Filter}},TransformManual:{get:function(){return n("TransformManual has been renamed to TransformBase, please update your pixi-spine"),t.TransformBase}},TARGET_FPMS:{get:function(){return n("PIXI.TARGET_FPMS has been deprecated, please use PIXI.settings.TARGET_FPMS"),t.settings.TARGET_FPMS},set:function(e){n("PIXI.TARGET_FPMS has been deprecated, please use PIXI.settings.TARGET_FPMS"),t.settings.TARGET_FPMS=e}},FILTER_RESOLUTION:{get:function(){return n("PIXI.FILTER_RESOLUTION has been deprecated, please use PIXI.settings.FILTER_RESOLUTION"),t.settings.FILTER_RESOLUTION},set:function(e){n("PIXI.FILTER_RESOLUTION has been deprecated, please use PIXI.settings.FILTER_RESOLUTION"),t.settings.FILTER_RESOLUTION=e}},RESOLUTION:{get:function(){return n("PIXI.RESOLUTION has been deprecated, please use PIXI.settings.RESOLUTION"),t.settings.RESOLUTION},set:function(e){n("PIXI.RESOLUTION has been deprecated, please use PIXI.settings.RESOLUTION"),t.settings.RESOLUTION=e}},MIPMAP_TEXTURES:{get:function(){return n("PIXI.MIPMAP_TEXTURES has been deprecated, please use PIXI.settings.MIPMAP_TEXTURES"),t.settings.MIPMAP_TEXTURES},set:function(e){n("PIXI.MIPMAP_TEXTURES has been deprecated, please use PIXI.settings.MIPMAP_TEXTURES"),t.settings.MIPMAP_TEXTURES=e}},SPRITE_BATCH_SIZE:{get:function(){return n("PIXI.SPRITE_BATCH_SIZE has been deprecated, please use PIXI.settings.SPRITE_BATCH_SIZE"),t.settings.SPRITE_BATCH_SIZE},set:function(e){n("PIXI.SPRITE_BATCH_SIZE has been deprecated, please use PIXI.settings.SPRITE_BATCH_SIZE"),t.settings.SPRITE_BATCH_SIZE=e}},SPRITE_MAX_TEXTURES:{get:function(){return n("PIXI.SPRITE_MAX_TEXTURES has been deprecated, please use PIXI.settings.SPRITE_MAX_TEXTURES"),t.settings.SPRITE_MAX_TEXTURES},set:function(e){n("PIXI.SPRITE_MAX_TEXTURES has been deprecated, please use PIXI.settings.SPRITE_MAX_TEXTURES"),t.settings.SPRITE_MAX_TEXTURES=e}},RETINA_PREFIX:{get:function(){return n("PIXI.RETINA_PREFIX has been deprecated, please use PIXI.settings.RETINA_PREFIX"),t.settings.RETINA_PREFIX},set:function(e){n("PIXI.RETINA_PREFIX has been deprecated, please use PIXI.settings.RETINA_PREFIX"),t.settings.RETINA_PREFIX=e}},DEFAULT_RENDER_OPTIONS:{get:function(){return n("PIXI.DEFAULT_RENDER_OPTIONS has been deprecated, please use PIXI.settings.DEFAULT_RENDER_OPTIONS"),t.settings.RENDER_OPTIONS}}});for(var h=[{parent:"TRANSFORM_MODE",target:"TRANSFORM_MODE"},{parent:"GC_MODES",target:"GC_MODE"},{parent:"WRAP_MODES",target:"WRAP_MODE"},{parent:"SCALE_MODES",target:"SCALE_MODE"},{
parent:"PRECISION",target:"PRECISION_FRAGMENT"}],l=0;l<h.length;l++)!function(e){var r=h[e];Object.defineProperty(t[r.parent],"DEFAULT",{get:function(){return n("PIXI."+r.parent+".DEFAULT has been deprecated, please use PIXI.settings."+r.target),t.settings[r.target]},set:function(e){n("PIXI."+r.parent+".DEFAULT has been deprecated, please use PIXI.settings."+r.target),t.settings[r.target]=e}})}(l);Object.defineProperties(t.settings,{PRECISION:{get:function(){return n("PIXI.settings.PRECISION has been deprecated, please use PIXI.settings.PRECISION_FRAGMENT"),t.settings.PRECISION_FRAGMENT},set:function(e){n("PIXI.settings.PRECISION has been deprecated, please use PIXI.settings.PRECISION_FRAGMENT"),t.settings.PRECISION_FRAGMENT=e}}}),i.AnimatedSprite&&Object.defineProperties(i,{MovieClip:{get:function(){return n("The MovieClip class has been renamed to AnimatedSprite, please use AnimatedSprite from now on."),i.AnimatedSprite}}}),i&&Object.defineProperties(i,{TextureTransform:{get:function(){return n("The TextureTransform class has been renamed to TextureMatrix, please use PIXI.TextureMatrix from now on."),t.TextureMatrix}}}),t.DisplayObject.prototype.generateTexture=function(t,e,r){return n("generateTexture has moved to the renderer, please use renderer.generateTexture(displayObject)"),t.generateTexture(this,e,r)},t.Graphics.prototype.generateTexture=function(t,e){return n("graphics generate texture has moved to the renderer. Or to render a graphics to a texture using canvas please use generateCanvasTexture"),this.generateCanvasTexture(t,e)},t.GroupD8.isSwapWidthHeight=function(e){return n("GroupD8.isSwapWidthHeight was renamed to GroupD8.isVertical"),t.GroupD8.isVertical(e)},t.RenderTexture.prototype.render=function(t,e,r,i){this.legacyRenderer.render(t,this,r,e,!i),n("RenderTexture.render is now deprecated, please use renderer.render(displayObject, renderTexture)")},t.RenderTexture.prototype.getImage=function(t){return n("RenderTexture.getImage is now deprecated, please use renderer.extract.image(target)"),this.legacyRenderer.extract.image(t)},t.RenderTexture.prototype.getBase64=function(t){return n("RenderTexture.getBase64 is now deprecated, please use renderer.extract.base64(target)"),this.legacyRenderer.extract.base64(t)},t.RenderTexture.prototype.getCanvas=function(t){return n("RenderTexture.getCanvas is now deprecated, please use renderer.extract.canvas(target)"),this.legacyRenderer.extract.canvas(t)},t.RenderTexture.prototype.getPixels=function(t){return n("RenderTexture.getPixels is now deprecated, please use renderer.extract.pixels(target)"),this.legacyRenderer.pixels(t)},t.Sprite.prototype.setTexture=function(t){this.texture=t,n("setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;")},i.BitmapText&&(i.BitmapText.prototype.setText=function(t){this.text=t,n("setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';")}),t.Text.prototype.setText=function(t){this.text=t,n("setText is now deprecated, please use the text property, e.g : myText.text = 'my text';")},t.Text.calculateFontProperties=function(e){return n("Text.calculateFontProperties is now deprecated, please use the TextMetrics.measureFont"),t.TextMetrics.measureFont(e)},Object.defineProperties(t.Text,{fontPropertiesCache:{get:function(){return n("Text.fontPropertiesCache is deprecated"),t.TextMetrics._fonts}},fontPropertiesCanvas:{get:function(){return n("Text.fontPropertiesCanvas is deprecated"),t.TextMetrics._canvas}},fontPropertiesContext:{get:function(){return n("Text.fontPropertiesContext is deprecated"),t.TextMetrics._context}}}),t.Text.prototype.setStyle=function(t){this.style=t,n("setStyle is now deprecated, please use the style property, e.g : myText.style = style;")},t.Text.prototype.determineFontProperties=function(e){return n("determineFontProperties is now deprecated, please use TextMetrics.measureFont method"),t.TextMetrics.measureFont(e)},t.Text.getFontStyle=function(e){return n("getFontStyle is now deprecated, please use TextStyle.toFontString() instead"),e=e||{},e instanceof t.TextStyle||(e=new t.TextStyle(e)),e.toFontString()},Object.defineProperties(t.TextStyle.prototype,{font:{get:function(){n("text style property 'font' is now deprecated, please use the 'fontFamily', 'fontSize', 'fontStyle', 'fontVariant' and 'fontWeight' properties from now on");var t="number"==typeof this._fontSize?this._fontSize+"px":this._fontSize;return this._fontStyle+" "+this._fontVariant+" "+this._fontWeight+" "+t+" "+this._fontFamily},set:function(t){n("text style property 'font' is now deprecated, please use the 'fontFamily','fontSize',fontStyle','fontVariant' and 'fontWeight' properties from now on"),t.indexOf("italic")>1?this._fontStyle="italic":t.indexOf("oblique")>-1?this._fontStyle="oblique":this._fontStyle="normal",t.indexOf("small-caps")>-1?this._fontVariant="small-caps":this._fontVariant="normal";var e=t.split(" "),r=-1;this._fontSize=26;for(var i=0;i<e.length;++i)if(e[i].match(/(px|pt|em|%)/)){r=i,this._fontSize=e[i];break}this._fontWeight="normal";for(var o=0;o<r;++o)if(e[o].match(/(bold|bolder|lighter|100|200|300|400|500|600|700|800|900)/)){this._fontWeight=e[o];break}if(r>-1&&r<e.length-1){this._fontFamily="";for(var s=r+1;s<e.length;++s)this._fontFamily+=e[s]+" ";this._fontFamily=this._fontFamily.slice(0,-1)}else this._fontFamily="Arial";this.styleID++}}}),t.Texture.prototype.setFrame=function(t){this.frame=t,n("setFrame is now deprecated, please use the frame property, e.g: myTexture.frame = frame;")},t.Texture.addTextureToCache=function(e,r){t.Texture.addToCache(e,r),n("Texture.addTextureToCache is deprecated, please use Texture.addToCache from now on.")},t.Texture.removeTextureFromCache=function(e){return n("Texture.removeTextureFromCache is deprecated, please use Texture.removeFromCache from now on. Be aware that Texture.removeFromCache does not automatically its BaseTexture from the BaseTextureCache. For that, use BaseTexture.removeFromCache"),t.BaseTexture.removeFromCache(e),t.Texture.removeFromCache(e)},Object.defineProperties(o,{AbstractFilter:{get:function(){return n("AstractFilter has been renamed to Filter, please use PIXI.Filter"),t.AbstractFilter}},SpriteMaskFilter:{get:function(){return n("filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter from now on."),t.SpriteMaskFilter}},VoidFilter:{get:function(){return n("VoidFilter has been renamed to AlphaFilter, please use PIXI.filters.AlphaFilter"),o.AlphaFilter}}}),t.utils.uuid=function(){return n("utils.uuid() is deprecated, please use utils.uid() from now on."),t.utils.uid()},t.utils.canUseNewCanvasBlendModes=function(){return n("utils.canUseNewCanvasBlendModes() is deprecated, please use CanvasTinter.canUseMultiply from now on"),t.CanvasTinter.canUseMultiply};var c=!0;if(Object.defineProperty(t.utils,"_saidHello",{set:function(t){t&&(n("PIXI.utils._saidHello is deprecated, please use PIXI.utils.skipHello()"),this.skipHello()),c=t},get:function(){return c}}),s.BasePrepare&&(s.BasePrepare.prototype.register=function(t,e){return n("renderer.plugins.prepare.register is now deprecated, please use renderer.plugins.prepare.registerFindHook & renderer.plugins.prepare.registerUploadHook"),t&&this.registerFindHook(t),e&&this.registerUploadHook(e),this}),s.canvas&&Object.defineProperty(s.canvas,"UPLOADS_PER_FRAME",{set:function(){n("PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been removed. Please set renderer.plugins.prepare.limiter.maxItemsPerFrame on your renderer")},get:function(){return n("PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been removed. Please use renderer.plugins.prepare.limiter"),NaN}}),s.webgl&&Object.defineProperty(s.webgl,"UPLOADS_PER_FRAME",{set:function(){n("PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been removed. Please set renderer.plugins.prepare.limiter.maxItemsPerFrame on your renderer")},get:function(){return n("PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been removed. Please use renderer.plugins.prepare.limiter"),NaN}}),a.Loader){var d=a.Resource,f=a.Loader;Object.defineProperties(d.prototype,{isJson:{get:function(){return n("The isJson property is deprecated, please use `resource.type === Resource.TYPE.JSON`."),this.type===d.TYPE.JSON}},isXml:{get:function(){return n("The isXml property is deprecated, please use `resource.type === Resource.TYPE.XML`."),this.type===d.TYPE.XML}},isImage:{get:function(){return n("The isImage property is deprecated, please use `resource.type === Resource.TYPE.IMAGE`."),this.type===d.TYPE.IMAGE}},isAudio:{get:function(){return n("The isAudio property is deprecated, please use `resource.type === Resource.TYPE.AUDIO`."),this.type===d.TYPE.AUDIO}},isVideo:{get:function(){return n("The isVideo property is deprecated, please use `resource.type === Resource.TYPE.VIDEO`."),this.type===d.TYPE.VIDEO}}}),Object.defineProperties(f.prototype,{before:{get:function(){return n("The before() method is deprecated, please use pre()."),this.pre}},after:{get:function(){return n("The after() method is deprecated, please use use()."),this.use}}})}u.interactiveTarget&&Object.defineProperty(u.interactiveTarget,"defaultCursor",{set:function(t){n("Property defaultCursor has been replaced with 'cursor'. "),this.cursor=t},get:function(){return n("Property defaultCursor has been replaced with 'cursor'. "),this.cursor}}),u.InteractionManager&&(Object.defineProperty(u.InteractionManager,"defaultCursorStyle",{set:function(t){n("Property defaultCursorStyle has been replaced with 'cursorStyles.default'. "),this.cursorStyles.default=t},get:function(){return n("Property defaultCursorStyle has been replaced with 'cursorStyles.default'. "),this.cursorStyles.default}}),Object.defineProperty(u.InteractionManager,"currentCursorStyle",{set:function(t){n("Property currentCursorStyle has been removed.See the currentCursorMode property, which works differently."),this.currentCursorMode=t},get:function(){return n("Property currentCursorStyle has been removed.See the currentCursorMode property, which works differently."),this.currentCursorMode}}))}r.__esModule=!0,r.default=i;var o={}},{}],132:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=t("../../core"),o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(i),s=new o.Rectangle,a=function(){function t(e){n(this,t),this.renderer=e,e.extract=this}return t.prototype.image=function(t){var e=new Image;return e.src=this.base64(t),e},t.prototype.base64=function(t){return this.canvas(t).toDataURL()},t.prototype.canvas=function(t){var e=this.renderer,r=void 0,n=void 0,i=void 0,a=void 0;t&&(a=t instanceof o.RenderTexture?t:e.generateTexture(t)),a?(r=a.baseTexture._canvasRenderTarget.context,n=a.baseTexture._canvasRenderTarget.resolution,i=a.frame):(r=e.rootContext,i=s,i.width=this.renderer.width,i.height=this.renderer.height);var u=i.width*n,h=i.height*n,l=new o.CanvasRenderTarget(u,h),c=r.getImageData(i.x*n,i.y*n,u,h);return l.context.putImageData(c,0,0),l.canvas},t.prototype.pixels=function(t){var e=this.renderer,r=void 0,n=void 0,i=void 0,a=void 0;return t&&(a=t instanceof o.RenderTexture?t:e.generateTexture(t)),a?(r=a.baseTexture._canvasRenderTarget.context,n=a.baseTexture._canvasRenderTarget.resolution,i=a.frame):(r=e.rootContext,i=s,i.width=e.width,i.height=e.height),r.getImageData(0,0,i.width*n,i.height*n).data},t.prototype.destroy=function(){this.renderer.extract=null,this.renderer=null},t}();r.default=a,o.CanvasRenderer.registerPlugin("extract",a)},{"../../core":65}],133:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t("./webgl/WebGLExtract");Object.defineProperty(r,"webgl",{enumerable:!0,get:function(){return n(i).default}});var o=t("./canvas/CanvasExtract");Object.defineProperty(r,"canvas",{enumerable:!0,get:function(){return n(o).default}})},{"./canvas/CanvasExtract":132,"./webgl/WebGLExtract":134}],134:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=t("../../core"),o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(i),s=new o.Rectangle,a=function(){function t(e){n(this,t),this.renderer=e,e.extract=this}return t.prototype.image=function(t){var e=new Image;return e.src=this.base64(t),e},t.prototype.base64=function(t){return this.canvas(t).toDataURL()},t.prototype.canvas=function(t){var e=this.renderer,r=void 0,n=void 0,i=void 0,a=!1,u=void 0,h=!1;t&&(t instanceof o.RenderTexture?u=t:(u=this.renderer.generateTexture(t),h=!0)),u?(r=u.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID],n=r.resolution,i=u.frame,a=!1):(r=this.renderer.rootRenderTarget,n=r.resolution,a=!0,i=s,i.width=r.size.width,i.height=r.size.height);var l=i.width*n,c=i.height*n,d=new o.CanvasRenderTarget(l,c);if(r){e.bindRenderTarget(r);var f=new Uint8Array(4*l*c),p=e.gl;p.readPixels(i.x*n,i.y*n,l,c,p.RGBA,p.UNSIGNED_BYTE,f);var v=d.context.getImageData(0,0,l,c);v.data.set(f),d.context.putImageData(v,0,0),a&&(d.context.scale(1,-1),d.context.drawImage(d.canvas,0,-c))}return h&&u.destroy(!0),d.canvas},t.prototype.pixels=function(t){var e=this.renderer,r=void 0,n=void 0,i=void 0,a=void 0,u=!1;t&&(t instanceof o.RenderTexture?a=t:(a=this.renderer.generateTexture(t),u=!0)),a?(r=a.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID],n=r.resolution,i=a.frame):(r=this.renderer.rootRenderTarget,n=r.resolution,i=s,i.width=r.size.width,i.height=r.size.height);var h=i.width*n,l=i.height*n,c=new Uint8Array(4*h*l);if(r){e.bindRenderTarget(r);var d=e.gl;d.readPixels(i.x*n,i.y*n,h,l,d.RGBA,d.UNSIGNED_BYTE,c)}return u&&a.destroy(!0),c},t.prototype.destroy=function(){this.renderer.extract=null,this.renderer=null},t}();r.default=a,o.WebGLRenderer.registerPlugin("extract",a)},{"../../core":65}],135:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=t("../core"),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(a),h=function(t){function e(r,o){n(this,e);var s=i(this,t.call(this,r[0]instanceof u.Texture?r[0]:r[0].texture));return s._textures=null,s._durations=null,s.textures=r,s._autoUpdate=!1!==o,s.animationSpeed=1,s.loop=!0,s.onComplete=null,s.onFrameChange=null,s.onLoop=null,s._currentTime=0,s.playing=!1,s}return o(e,t),e.prototype.stop=function(){this.playing&&(this.playing=!1,this._autoUpdate&&u.ticker.shared.remove(this.update,this))},e.prototype.play=function(){this.playing||(this.playing=!0,this._autoUpdate&&u.ticker.shared.add(this.update,this,u.UPDATE_PRIORITY.HIGH))},e.prototype.gotoAndStop=function(t){this.stop();var e=this.currentFrame;this._currentTime=t,e!==this.currentFrame&&this.updateTexture()},e.prototype.gotoAndPlay=function(t){var e=this.currentFrame;this._currentTime=t,e!==this.currentFrame&&this.updateTexture(),this.play()},e.prototype.update=function(t){var e=this.animationSpeed*t,r=this.currentFrame;if(null!==this._durations){var n=this._currentTime%1*this._durations[this.currentFrame];for(n+=e/60*1e3;n<0;)this._currentTime--,n+=this._durations[this.currentFrame];var i=Math.sign(this.animationSpeed*t);for(this._currentTime=Math.floor(this._currentTime);n>=this._durations[this.currentFrame];)n-=this._durations[this.currentFrame]*i,this._currentTime+=i;this._currentTime+=n/this._durations[this.currentFrame]}else this._currentTime+=e;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):r!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<r?this.onLoop():this.animationSpeed<0&&this.currentFrame>r&&this.onLoop()),this.updateTexture())},e.prototype.updateTexture=function(){this._texture=this._textures[this.currentFrame],this._textureID=-1,this.cachedTint=16777215,this.onFrameChange&&this.onFrameChange(this.currentFrame)},e.prototype.destroy=function(e){this.stop(),t.prototype.destroy.call(this,e)},e.fromFrames=function(t){for(var r=[],n=0;n<t.length;++n)r.push(u.Texture.fromFrame(t[n]));return new e(r)},e.fromImages=function(t){for(var r=[],n=0;n<t.length;++n)r.push(u.Texture.fromImage(t[n]));return new e(r)},s(e,[{key:"totalFrames",get:function(){return this._textures.length}},{key:"textures",get:function(){return this._textures},set:function(t){if(t[0]instanceof u.Texture)this._textures=t,this._durations=null;else{this._textures=[],this._durations=[];for(var e=0;e<t.length;e++)this._textures.push(t[e].texture),this._durations.push(t[e].time)}this.gotoAndStop(0),this.updateTexture()}},{key:"currentFrame",get:function(){var t=Math.floor(this._currentTime)%this._textures.length;return t<0&&(t+=this._textures.length),t}}]),e}(u.Sprite);r.default=h},{"../core":65}],136:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("../core"),h=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(u),l=t("../core/math/ObservablePoint"),c=n(l),d=t("../core/utils"),f=t("../core/settings"),p=n(f),v=function(t){function e(r){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(this,e);var s=o(this,t.call(this));return s._textWidth=0,s._textHeight=0,s._glyphs=[],s._font={tint:void 0!==n.tint?n.tint:16777215,align:n.align||"left",name:null,size:0},s.font=n.font,s._text=r,s._maxWidth=0,s._maxLineHeight=0,s._letterSpacing=0,s._anchor=new c.default(function(){s.dirty=!0},s,0,0),s.dirty=!1,s.updateText(),s}return s(e,t),e.prototype.updateText=function(){for(var t=e.fonts[this._font.name],r=this._font.size/t.size,n=new h.Point,i=[],o=[],s=this.text.replace(/(?:\r\n|\r)/g,"\n"),a=s.length,u=this._maxWidth*t.size/this._font.size,l=null,c=0,d=0,f=0,p=-1,v=0,g=0,y=0,m=0;m<a;m++){var _=s.charCodeAt(m),b=s.charAt(m);if(/(?:\s)/.test(b)&&(p=m,v=c),"\r"!==b&&"\n"!==b){var x=t.chars[_];x&&(l&&x.kerning[l]&&(n.x+=x.kerning[l]),i.push({texture:x.texture,line:f,charCode:_,position:new h.Point(n.x+x.xOffset+this._letterSpacing/2,n.y+x.yOffset)}),n.x+=x.xAdvance+this._letterSpacing,c=n.x,y=Math.max(y,x.yOffset+x.texture.height),l=_,-1!==p&&u>0&&n.x>u&&(++g,h.utils.removeItems(i,1+p-g,1+m-p),m=p,p=-1,o.push(v),d=Math.max(d,v),f++,n.x=0,n.y+=t.lineHeight,l=null))}else o.push(c),d=Math.max(d,c),++f,++g,n.x=0,n.y+=t.lineHeight,l=null}var T=s.charAt(s.length-1);"\r"!==T&&"\n"!==T&&(/(?:\s)/.test(T)&&(c=v),o.push(c),d=Math.max(d,c));for(var w=[],E=0;E<=f;E++){var S=0;"right"===this._font.align?S=d-o[E]:"center"===this._font.align&&(S=(d-o[E])/2),w.push(S)}for(var O=i.length,M=this.tint,P=0;P<O;P++){var C=this._glyphs[P];C?C.texture=i[P].texture:(C=new h.Sprite(i[P].texture),this._glyphs.push(C)),C.position.x=(i[P].position.x+w[i[P].line])*r,C.position.y=i[P].position.y*r,C.scale.x=C.scale.y=r,C.tint=M,C.parent||this.addChild(C)}for(var R=O;R<this._glyphs.length;++R)this.removeChild(this._glyphs[R]);if(this._textWidth=d*r,this._textHeight=(n.y+t.lineHeight)*r,0!==this.anchor.x||0!==this.anchor.y)for(var A=0;A<O;A++)this._glyphs[A].x-=this._textWidth*this.anchor.x,this._glyphs[A].y-=this._textHeight*this.anchor.y;this._maxLineHeight=y*r},e.prototype.updateTransform=function(){this.validate(),this.containerUpdateTransform()},e.prototype.getLocalBounds=function(){return this.validate(),t.prototype.getLocalBounds.call(this)},e.prototype.validate=function(){this.dirty&&(this.updateText(),this.dirty=!1)},e.registerFont=function(t,r){var n={},i=t.getElementsByTagName("info")[0],o=t.getElementsByTagName("common")[0],s=t.getElementsByTagName("page"),a=(0,d.getResolutionOfUrl)(s[0].getAttribute("file"),p.default.RESOLUTION),u={};n.font=i.getAttribute("face"),n.size=parseInt(i.getAttribute("size"),10),n.lineHeight=parseInt(o.getAttribute("lineHeight"),10)/a,n.chars={},r instanceof h.Texture&&(r=[r]);for(var l=0;l<s.length;l++){var c=s[l].getAttribute("id"),f=s[l].getAttribute("file");u[c]=r instanceof Array?r[l]:r[f]}for(var v=t.getElementsByTagName("char"),g=0;g<v.length;g++){var y=v[g],m=parseInt(y.getAttribute("id"),10),_=y.getAttribute("page")||0,b=new h.Rectangle(parseInt(y.getAttribute("x"),10)/a+u[_].frame.x/a,parseInt(y.getAttribute("y"),10)/a+u[_].frame.y/a,parseInt(y.getAttribute("width"),10)/a,parseInt(y.getAttribute("height"),10)/a);n.chars[m]={xOffset:parseInt(y.getAttribute("xoffset"),10)/a,yOffset:parseInt(y.getAttribute("yoffset"),10)/a,xAdvance:parseInt(y.getAttribute("xadvance"),10)/a,kerning:{},texture:new h.Texture(u[_].baseTexture,b),page:_}}for(var x=t.getElementsByTagName("kerning"),T=0;T<x.length;T++){var w=x[T],E=parseInt(w.getAttribute("first"),10)/a,S=parseInt(w.getAttribute("second"),10)/a,O=parseInt(w.getAttribute("amount"),10)/a;n.chars[S]&&(n.chars[S].kerning[E]=O)}return e.fonts[n.font]=n,n},a(e,[{key:"tint",get:function(){return this._font.tint},set:function(t){this._font.tint="number"==typeof t&&t>=0?t:16777215,this.dirty=!0}},{key:"align",get:function(){return this._font.align},set:function(t){this._font.align=t||"left",this.dirty=!0}},{key:"anchor",get:function(){return this._anchor},set:function(t){"number"==typeof t?this._anchor.set(t):this._anchor.copy(t)}},{key:"font",get:function(){return this._font},set:function(t){t&&("string"==typeof t?(t=t.split(" "),this._font.name=1===t.length?t[0]:t.slice(1).join(" "),this._font.size=t.length>=2?parseInt(t[0],10):e.fonts[this._font.name].size):(this._font.name=t.name,this._font.size="number"==typeof t.size?t.size:parseInt(t.size,10)),this.dirty=!0)}},{key:"text",get:function(){return this._text},set:function(t){t=t.toString()||" ",this._text!==t&&(this._text=t,this.dirty=!0)}},{key:"maxWidth",get:function(){return this._maxWidth},set:function(t){this._maxWidth!==t&&(this._maxWidth=t,this.dirty=!0)}},{key:"maxLineHeight",get:function(){return this.validate(),this._maxLineHeight}},{key:"textWidth",get:function(){return this.validate(),this._textWidth}},{key:"letterSpacing",get:function(){return this._letterSpacing},set:function(t){this._letterSpacing!==t&&(this._letterSpacing=t,this.dirty=!0)}},{key:"textHeight",get:function(){return this.validate(),this._textHeight}}]),e}(h.Container);r.default=v,v.fonts={}},{"../core":65,"../core/math/ObservablePoint":68,"../core/settings":101,"../core/utils":125}],137:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=t("../core"),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(a),h=t("../core/sprites/canvas/CanvasTinter"),l=function(t){return t&&t.__esModule?t:{default:t}}(h),c=new u.Point,d=function(t){function e(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;n(this,e);var a=i(this,t.call(this,r));return a.tileTransform=new u.TransformStatic,a._width=o,a._height=s,a._canvasPattern=null,a.uvTransform=r.transform||new u.TextureMatrix(r),a.pluginName="tilingSprite",a.uvRespectAnchor=!1,a}return o(e,t),e.prototype._onTextureUpdate=function(){this.uvTransform&&(this.uvTransform.texture=this._texture),this.cachedTint=16777215},e.prototype._renderWebGL=function(t){var e=this._texture;e&&e.valid&&(this.tileTransform.updateLocalTransform(),this.uvTransform.update(),t.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this))},e.prototype._renderCanvas=function(t){var e=this._texture;if(e.baseTexture.hasLoaded){var r=t.context,n=this.worldTransform,i=t.resolution,o=e.baseTexture,s=o.resolution,a=this.tilePosition.x/this.tileScale.x%e._frame.width*s,h=this.tilePosition.y/this.tileScale.y%e._frame.height*s;if(this._textureID!==this._texture._updateID||this.cachedTint!==this.tint){this._textureID=this._texture._updateID;var c=new u.CanvasRenderTarget(e._frame.width,e._frame.height,s);16777215!==this.tint?(this.tintedTexture=l.default.getTintedTexture(this,this.tint),c.context.drawImage(this.tintedTexture,0,0)):c.context.drawImage(o.source,-e._frame.x*s,-e._frame.y*s),this.cachedTint=this.tint,this._canvasPattern=c.context.createPattern(c.canvas,"repeat")}r.globalAlpha=this.worldAlpha,r.setTransform(n.a*i,n.b*i,n.c*i,n.d*i,n.tx*i,n.ty*i),t.setBlendMode(this.blendMode),r.fillStyle=this._canvasPattern,r.scale(this.tileScale.x/s,this.tileScale.y/s);var d=this.anchor.x*-this._width,f=this.anchor.y*-this._height;this.uvRespectAnchor?(r.translate(a,h),r.fillRect(-a+d,-h+f,this._width/this.tileScale.x*s,this._height/this.tileScale.y*s)):(r.translate(a+d,h+f),r.fillRect(-a,-h,this._width/this.tileScale.x*s,this._height/this.tileScale.y*s))}},e.prototype._calculateBounds=function(){var t=this._width*-this._anchor._x,e=this._height*-this._anchor._y,r=this._width*(1-this._anchor._x),n=this._height*(1-this._anchor._y);this._bounds.addFrame(this.transform,t,e,r,n)},e.prototype.getLocalBounds=function(e){return 0===this.children.length?(this._bounds.minX=this._width*-this._anchor._x,this._bounds.minY=this._height*-this._anchor._y,this._bounds.maxX=this._width*(1-this._anchor._x),this._bounds.maxY=this._height*(1-this._anchor._y),e||(this._localBoundsRect||(this._localBoundsRect=new u.Rectangle),e=this._localBoundsRect),this._bounds.getRectangle(e)):t.prototype.getLocalBounds.call(this,e)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,c);var e=this._width,r=this._height,n=-e*this.anchor._x;if(c.x>=n&&c.x<n+e){var i=-r*this.anchor._y;if(c.y>=i&&c.y<i+r)return!0}return!1},e.prototype.destroy=function(e){t.prototype.destroy.call(this,e),this.tileTransform=null,this.uvTransform=null},e.from=function(t,r,n){return new e(u.Texture.from(t),r,n)},e.fromFrame=function(t,r,n){var i=u.utils.TextureCache[t];if(!i)throw new Error('The frameId "'+t+'" does not exist in the texture cache '+this);return new e(i,r,n)},e.fromImage=function(t,r,n,i,o){return new e(u.Texture.fromImage(t,i,o),r,n)},s(e,[{key:"clampMargin",get:function(){return this.uvTransform.clampMargin},set:function(t){this.uvTransform.clampMargin=t,this.uvTransform.update(!0)}},{key:"tileScale",get:function(){return this.tileTransform.scale},set:function(t){this.tileTransform.scale.copy(t)}},{key:"tilePosition",get:function(){return this.tileTransform.position},set:function(t){this.tileTransform.position.copy(t)}},{key:"width",get:function(){return this._width},set:function(t){this._width=t}},{key:"height",get:function(){return this._height},set:function(t){this._height=t}}]),e}(u.Sprite);r.default=d},{"../core":65,"../core/sprites/canvas/CanvasTinter":104}],138:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=t("../core"),s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(o),a=t("../core/textures/Texture"),u=n(a),h=t("../core/textures/BaseTexture"),l=n(h),c=t("../core/utils"),d=s.DisplayObject,f=new s.Matrix;d.prototype._cacheAsBitmap=!1,d.prototype._cacheData=!1;var p=function t(){i(this,t),this.textureCacheId=null,this.originalRenderWebGL=null,this.originalRenderCanvas=null,this.originalCalculateBounds=null,this.originalGetLocalBounds=null,this.originalUpdateTransform=null,this.originalHitTest=null,this.originalDestroy=null,this.originalMask=null,this.originalFilterArea=null,this.sprite=null};Object.defineProperties(d.prototype,{cacheAsBitmap:{get:function(){return this._cacheAsBitmap},set:function(t){if(this._cacheAsBitmap!==t){this._cacheAsBitmap=t;var e=void 0;t?(this._cacheData||(this._cacheData=new p),e=this._cacheData,e.originalRenderWebGL=this.renderWebGL,e.originalRenderCanvas=this.renderCanvas,e.originalUpdateTransform=this.updateTransform,e.originalCalculateBounds=this._calculateBounds,e.originalGetLocalBounds=this.getLocalBounds,e.originalDestroy=this.destroy,e.originalContainsPoint=this.containsPoint,e.originalMask=this._mask,e.originalFilterArea=this.filterArea,this.renderWebGL=this._renderCachedWebGL,this.renderCanvas=this._renderCachedCanvas,this.destroy=this._cacheAsBitmapDestroy):(e=this._cacheData,e.sprite&&this._destroyCachedDisplayObject(),this.renderWebGL=e.originalRenderWebGL,this.renderCanvas=e.originalRenderCanvas,this._calculateBounds=e.originalCalculateBounds,this.getLocalBounds=e.originalGetLocalBounds,this.destroy=e.originalDestroy,this.updateTransform=e.originalUpdateTransform,this.containsPoint=e.originalContainsPoint,this._mask=e.originalMask,this.filterArea=e.originalFilterArea)}}}}),d.prototype._renderCachedWebGL=function(t){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObject(t),this._cacheData.sprite._transformID=-1,this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._renderWebGL(t))},d.prototype._initCachedDisplayObject=function(t){if(!this._cacheData||!this._cacheData.sprite){var e=this.alpha;this.alpha=1,t.currentRenderer.flush();var r=this.getLocalBounds().clone();if(this._filters){var n=this._filters[0].padding;r.pad(n)}var i=t._activeRenderTarget,o=t.filterManager.filterStack,a=s.RenderTexture.create(0|r.width,0|r.height),h="cacheAsBitmap_"+(0,c.uid)()
;this._cacheData.textureCacheId=h,l.default.addToCache(a.baseTexture,h),u.default.addToCache(a,h);var d=f;d.tx=-r.x,d.ty=-r.y,this.transform.worldTransform.identity(),this.renderWebGL=this._cacheData.originalRenderWebGL,t.render(this,a,!0,d,!0),t.bindRenderTarget(i),t.filterManager.filterStack=o,this.renderWebGL=this._renderCachedWebGL,this.updateTransform=this.displayObjectUpdateTransform,this._mask=null,this.filterArea=null;var p=new s.Sprite(a);p.transform.worldTransform=this.transform.worldTransform,p.anchor.x=-r.x/r.width,p.anchor.y=-r.y/r.height,p.alpha=e,p._bounds=this._bounds,this._calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._cacheData.sprite=p,this.transform._parentID=-1,this.parent?this.updateTransform():(this.parent=t._tempDisplayObjectParent,this.updateTransform(),this.parent=null),this.containsPoint=p.containsPoint.bind(p)}},d.prototype._renderCachedCanvas=function(t){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObjectCanvas(t),this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite.renderCanvas(t))},d.prototype._initCachedDisplayObjectCanvas=function(t){if(!this._cacheData||!this._cacheData.sprite){var e=this.getLocalBounds(),r=this.alpha;this.alpha=1;var n=t.context,i=s.RenderTexture.create(0|e.width,0|e.height),o="cacheAsBitmap_"+(0,c.uid)();this._cacheData.textureCacheId=o,l.default.addToCache(i.baseTexture,o),u.default.addToCache(i,o);var a=f;this.transform.localTransform.copy(a),a.invert(),a.tx-=e.x,a.ty-=e.y,this.renderCanvas=this._cacheData.originalRenderCanvas,t.render(this,i,!0,a,!1),t.context=n,this.renderCanvas=this._renderCachedCanvas,this._calculateBounds=this._calculateCachedBounds,this._mask=null,this.filterArea=null;var h=new s.Sprite(i);h.transform.worldTransform=this.transform.worldTransform,h.anchor.x=-e.x/e.width,h.anchor.y=-e.y/e.height,h._bounds=this._bounds,h.alpha=r,this.parent?this.updateTransform():(this.parent=t._tempDisplayObjectParent,this.updateTransform(),this.parent=null),this.updateTransform=this.displayObjectUpdateTransform,this._cacheData.sprite=h,this.containsPoint=h.containsPoint.bind(h)}},d.prototype._calculateCachedBounds=function(){this._cacheData.sprite._calculateBounds()},d.prototype._getCachedLocalBounds=function(){return this._cacheData.sprite.getLocalBounds()},d.prototype._destroyCachedDisplayObject=function(){this._cacheData.sprite._texture.destroy(!0),this._cacheData.sprite=null,l.default.removeFromCache(this._cacheData.textureCacheId),u.default.removeFromCache(this._cacheData.textureCacheId),this._cacheData.textureCacheId=null},d.prototype._cacheAsBitmapDestroy=function(t){this.cacheAsBitmap=!1,this.destroy(t)}},{"../core":65,"../core/textures/BaseTexture":112,"../core/textures/Texture":115,"../core/utils":125}],139:[function(t,e,r){"use strict";var n=t("../core"),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(n);i.DisplayObject.prototype.name=null,i.Container.prototype.getChildByName=function(t){for(var e=0;e<this.children.length;e++)if(this.children[e].name===t)return this.children[e];return null}},{"../core":65}],140:[function(t,e,r){"use strict";var n=t("../core"),i=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(n);i.DisplayObject.prototype.getGlobalPosition=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new i.Point,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.parent?this.parent.toGlobal(this.position,t,e):(t.x=this.position.x,t.y=this.position.y),t}},{"../core":65}],141:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0,r.BitmapText=r.TilingSpriteRenderer=r.TilingSprite=r.AnimatedSprite=void 0;var i=t("./AnimatedSprite");Object.defineProperty(r,"AnimatedSprite",{enumerable:!0,get:function(){return n(i).default}});var o=t("./TilingSprite");Object.defineProperty(r,"TilingSprite",{enumerable:!0,get:function(){return n(o).default}});var s=t("./webgl/TilingSpriteRenderer");Object.defineProperty(r,"TilingSpriteRenderer",{enumerable:!0,get:function(){return n(s).default}});var a=t("./BitmapText");Object.defineProperty(r,"BitmapText",{enumerable:!0,get:function(){return n(a).default}}),t("./cacheAsBitmap"),t("./getChildByName"),t("./getGlobalPosition")},{"./AnimatedSprite":135,"./BitmapText":136,"./TilingSprite":137,"./cacheAsBitmap":138,"./getChildByName":139,"./getGlobalPosition":140,"./webgl/TilingSpriteRenderer":142}],142:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=t("../../core"),a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(s),u=t("../../core/const"),h=(t("path"),new a.Matrix),l=function(t){function e(r){n(this,e);var o=i(this,t.call(this,r));return o.shader=null,o.simpleShader=null,o.quad=null,o}return o(e,t),e.prototype.onContextChange=function(){var t=this.renderer.gl;this.shader=new a.Shader(t,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n","varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\nuniform mat3 uMapCoord;\nuniform vec4 uClampFrame;\nuniform vec2 uClampOffset;\n\nvoid main(void)\n{\n    vec2 coord = mod(vTextureCoord - uClampOffset, vec2(1.0, 1.0)) + uClampOffset;\n    coord = (uMapCoord * vec3(coord, 1.0)).xy;\n    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);\n\n    vec4 sample = texture2D(uSampler, coord);\n    gl_FragColor = sample * uColor;\n}\n"),this.simpleShader=new a.Shader(t,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n","varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform vec4 uColor;\n\nvoid main(void)\n{\n    vec4 sample = texture2D(uSampler, vTextureCoord);\n    gl_FragColor = sample * uColor;\n}\n"),this.renderer.bindVao(null),this.quad=new a.Quad(t,this.renderer.state.attribState),this.quad.initVao(this.shader)},e.prototype.render=function(t){var e=this.renderer,r=this.quad;e.bindVao(r.vao);var n=r.vertices;n[0]=n[6]=t._width*-t.anchor.x,n[1]=n[3]=t._height*-t.anchor.y,n[2]=n[4]=t._width*(1-t.anchor.x),n[5]=n[7]=t._height*(1-t.anchor.y),t.uvRespectAnchor&&(n=r.uvs,n[0]=n[6]=-t.anchor.x,n[1]=n[3]=-t.anchor.y,n[2]=n[4]=1-t.anchor.x,n[5]=n[7]=1-t.anchor.y),r.upload();var i=t._texture,o=i.baseTexture,s=t.tileTransform.localTransform,l=t.uvTransform,c=o.isPowerOfTwo&&i.frame.width===o.width&&i.frame.height===o.height;c&&(o._glTextures[e.CONTEXT_UID]?c=o.wrapMode!==u.WRAP_MODES.CLAMP:o.wrapMode===u.WRAP_MODES.CLAMP&&(o.wrapMode=u.WRAP_MODES.REPEAT));var d=c?this.simpleShader:this.shader;e.bindShader(d);var f=i.width,p=i.height,v=t._width,g=t._height;h.set(s.a*f/v,s.b*f/g,s.c*p/v,s.d*p/g,s.tx/v,s.ty/g),h.invert(),c?h.prepend(l.mapCoord):(d.uniforms.uMapCoord=l.mapCoord.toArray(!0),d.uniforms.uClampFrame=l.uClampFrame,d.uniforms.uClampOffset=l.uClampOffset),d.uniforms.uTransform=h.toArray(!0),d.uniforms.uColor=a.utils.premultiplyTintToRgba(t.tint,t.worldAlpha,d.uniforms.uColor,o.premultipliedAlpha),d.uniforms.translationMatrix=t.transform.worldTransform.toArray(!0),d.uniforms.uSampler=e.bindTexture(i),e.setBlendMode(a.utils.correctBlendMode(t.blendMode,o.premultipliedAlpha)),r.vao.draw(this.renderer.gl.TRIANGLES,6,0)},e}(a.ObjectRenderer);r.default=l,a.WebGLRenderer.registerPlugin("tilingSprite",l)},{"../../core":65,"../../core/const":46,path:8}],143:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=t("../../core"),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(a),h=(t("path"),function(t){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;n(this,e);var o=i(this,t.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\n\nuniform sampler2D uSampler;\nuniform float uAlpha;\n\nvoid main(void)\n{\n   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n"));return o.alpha=r,o.glShaderKey="alpha",o}return o(e,t),s(e,[{key:"alpha",get:function(){return this.uniforms.uAlpha},set:function(t){this.uniforms.uAlpha=t}}]),e}(u.Filter));r.default=h},{"../../core":65,path:8}],144:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("../../core"),h=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(u),l=t("./BlurXFilter"),c=n(l),d=t("./BlurYFilter"),f=n(d),p=function(t){function e(r,n,s,a){i(this,e);var u=o(this,t.call(this));return u.blurXFilter=new c.default(r,n,s,a),u.blurYFilter=new f.default(r,n,s,a),u.padding=0,u.resolution=s||h.settings.RESOLUTION,u.quality=n||4,u.blur=r||8,u}return s(e,t),e.prototype.apply=function(t,e,r){var n=t.getRenderTarget(!0);this.blurXFilter.apply(t,e,n,!0),this.blurYFilter.apply(t,n,r,!1),t.returnRenderTarget(n)},a(e,[{key:"blur",get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t,this.padding=2*Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))}},{key:"quality",get:function(){return this.blurXFilter.quality},set:function(t){this.blurXFilter.quality=this.blurYFilter.quality=t}},{key:"blurX",get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t,this.padding=2*Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))}},{key:"blurY",get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t,this.padding=2*Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))}},{key:"blendMode",get:function(){return this.blurYFilter._blendMode},set:function(t){this.blurYFilter._blendMode=t}}]),e}(h.Filter);r.default=p},{"../../core":65,"./BlurXFilter":145,"./BlurYFilter":146}],145:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("../../core"),h=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(u),l=t("./generateBlurVertSource"),c=n(l),d=t("./generateBlurFragSource"),f=n(d),p=t("./getMaxBlurKernelSize"),v=n(p),g=function(t){function e(r,n,s,a){i(this,e),a=a||5;var u=(0,c.default)(a,!0),l=(0,f.default)(a),d=o(this,t.call(this,u,l));return d.resolution=s||h.settings.RESOLUTION,d._quality=0,d.quality=n||4,d.strength=r||8,d.firstRun=!0,d}return s(e,t),e.prototype.apply=function(t,e,r,n){if(this.firstRun){var i=t.renderer.gl,o=(0,v.default)(i);this.vertexSrc=(0,c.default)(o,!0),this.fragmentSrc=(0,f.default)(o),this.firstRun=!1}if(this.uniforms.strength=1/r.size.width*(r.size.width/e.size.width),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,1===this.passes)t.applyFilter(this,e,r,n);else{for(var s=t.getRenderTarget(!0),a=e,u=s,h=0;h<this.passes-1;h++){t.applyFilter(this,a,u,!0);var l=u;u=a,a=l}t.applyFilter(this,a,r,n),t.returnRenderTarget(s)}},a(e,[{key:"blur",get:function(){return this.strength},set:function(t){this.padding=2*Math.abs(t),this.strength=t}},{key:"quality",get:function(){return this._quality},set:function(t){this._quality=t,this.passes=t}}]),e}(h.Filter);r.default=g},{"../../core":65,"./generateBlurFragSource":147,"./generateBlurVertSource":148,"./getMaxBlurKernelSize":149}],146:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=t("../../core"),h=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(u),l=t("./generateBlurVertSource"),c=n(l),d=t("./generateBlurFragSource"),f=n(d),p=t("./getMaxBlurKernelSize"),v=n(p),g=function(t){function e(r,n,s,a){i(this,e),a=a||5;var u=(0,c.default)(a,!1),l=(0,f.default)(a),d=o(this,t.call(this,u,l));return d.resolution=s||h.settings.RESOLUTION,d._quality=0,d.quality=n||4,d.strength=r||8,d.firstRun=!0,d}return s(e,t),e.prototype.apply=function(t,e,r,n){if(this.firstRun){var i=t.renderer.gl,o=(0,v.default)(i);this.vertexSrc=(0,c.default)(o,!1),this.fragmentSrc=(0,f.default)(o),this.firstRun=!1}if(this.uniforms.strength=1/r.size.height*(r.size.height/e.size.height),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,1===this.passes)t.applyFilter(this,e,r,n);else{for(var s=t.getRenderTarget(!0),a=e,u=s,h=0;h<this.passes-1;h++){t.applyFilter(this,a,u,!0);var l=u;u=a,a=l}t.applyFilter(this,a,r,n),t.returnRenderTarget(s)}},a(e,[{key:"blur",get:function(){return this.strength},set:function(t){this.padding=2*Math.abs(t),this.strength=t}},{key:"quality",get:function(){return this._quality},set:function(t){this._quality=t,this.passes=t}}]),e}(h.Filter);r.default=g},{"../../core":65,"./generateBlurFragSource":147,"./generateBlurVertSource":148,"./getMaxBlurKernelSize":149}],147:[function(t,e,r){"use strict";function n(t){for(var e=i[t],r=e.length,n=o,s="",a="gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;",u=void 0,h=0;h<t;h++){var l=a.replace("%index%",h);u=h,h>=r&&(u=t-h-1),l=l.replace("%value%",e[u]),s+=l,s+="\n"}return n=n.replace("%blur%",s),n=n.replace("%size%",t)}r.__esModule=!0,r.default=n;var i={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},o=["varying vec2 vBlurTexCoords[%size%];","uniform sampler2D uSampler;","void main(void)","{","    gl_FragColor = vec4(0.0);","    %blur%","}"].join("\n")},{}],148:[function(t,e,r){"use strict";function n(t,e){var r=Math.ceil(t/2),n=i,o="",s=void 0;s=e?"vBlurTexCoords[%index%] = aTextureCoord + vec2(%sampleIndex% * strength, 0.0);":"vBlurTexCoords[%index%] = aTextureCoord + vec2(0.0, %sampleIndex% * strength);";for(var a=0;a<t;a++){var u=s.replace("%index%",a);u=u.replace("%sampleIndex%",a-(r-1)+".0"),o+=u,o+="\n"}return n=n.replace("%blur%",o),n=n.replace("%size%",t)}r.__esModule=!0,r.default=n;var i=["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","uniform float strength;","uniform mat3 projectionMatrix;","varying vec2 vBlurTexCoords[%size%];","void main(void)","{","gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);","%blur%","}"].join("\n")},{}],149:[function(t,e,r){"use strict";function n(t){for(var e=t.getParameter(t.MAX_VARYING_VECTORS),r=15;r>e;)r-=2;return r}r.__esModule=!0,r.default=n},{}],150:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=t("../../core"),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(a),h=(t("path"),function(t){function e(){n(this,e);var r=i(this,t.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","varying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float m[20];\nuniform float uAlpha;\n\nvoid main(void)\n{\n    vec4 c = texture2D(uSampler, vTextureCoord);\n\n    if (uAlpha == 0.0) {\n        gl_FragColor = c;\n        return;\n    }\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (c.a > 0.0) {\n      c.rgb /= c.a;\n    }\n\n    vec4 result;\n\n    result.r = (m[0] * c.r);\n        result.r += (m[1] * c.g);\n        result.r += (m[2] * c.b);\n        result.r += (m[3] * c.a);\n        result.r += m[4];\n\n    result.g = (m[5] * c.r);\n        result.g += (m[6] * c.g);\n        result.g += (m[7] * c.b);\n        result.g += (m[8] * c.a);\n        result.g += m[9];\n\n    result.b = (m[10] * c.r);\n       result.b += (m[11] * c.g);\n       result.b += (m[12] * c.b);\n       result.b += (m[13] * c.a);\n       result.b += m[14];\n\n    result.a = (m[15] * c.r);\n       result.a += (m[16] * c.g);\n       result.a += (m[17] * c.b);\n       result.a += (m[18] * c.a);\n       result.a += m[19];\n\n    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);\n\n    // Premultiply alpha again.\n    rgb *= result.a;\n\n    gl_FragColor = vec4(rgb, result.a);\n}\n"));return r.uniforms.m=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],r.alpha=1,r}return o(e,t),e.prototype._loadMatrix=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t;e&&(this._multiply(r,this.uniforms.m,t),r=this._colorMatrix(r)),this.uniforms.m=r},e.prototype._multiply=function(t,e,r){return t[0]=e[0]*r[0]+e[1]*r[5]+e[2]*r[10]+e[3]*r[15],t[1]=e[0]*r[1]+e[1]*r[6]+e[2]*r[11]+e[3]*r[16],t[2]=e[0]*r[2]+e[1]*r[7]+e[2]*r[12]+e[3]*r[17],t[3]=e[0]*r[3]+e[1]*r[8]+e[2]*r[13]+e[3]*r[18],t[4]=e[0]*r[4]+e[1]*r[9]+e[2]*r[14]+e[3]*r[19]+e[4],t[5]=e[5]*r[0]+e[6]*r[5]+e[7]*r[10]+e[8]*r[15],t[6]=e[5]*r[1]+e[6]*r[6]+e[7]*r[11]+e[8]*r[16],t[7]=e[5]*r[2]+e[6]*r[7]+e[7]*r[12]+e[8]*r[17],t[8]=e[5]*r[3]+e[6]*r[8]+e[7]*r[13]+e[8]*r[18],t[9]=e[5]*r[4]+e[6]*r[9]+e[7]*r[14]+e[8]*r[19]+e[9],t[10]=e[10]*r[0]+e[11]*r[5]+e[12]*r[10]+e[13]*r[15],t[11]=e[10]*r[1]+e[11]*r[6]+e[12]*r[11]+e[13]*r[16],t[12]=e[10]*r[2]+e[11]*r[7]+e[12]*r[12]+e[13]*r[17],t[13]=e[10]*r[3]+e[11]*r[8]+e[12]*r[13]+e[13]*r[18],t[14]=e[10]*r[4]+e[11]*r[9]+e[12]*r[14]+e[13]*r[19]+e[14],t[15]=e[15]*r[0]+e[16]*r[5]+e[17]*r[10]+e[18]*r[15],t[16]=e[15]*r[1]+e[16]*r[6]+e[17]*r[11]+e[18]*r[16],t[17]=e[15]*r[2]+e[16]*r[7]+e[17]*r[12]+e[18]*r[17],t[18]=e[15]*r[3]+e[16]*r[8]+e[17]*r[13]+e[18]*r[18],t[19]=e[15]*r[4]+e[16]*r[9]+e[17]*r[14]+e[18]*r[19]+e[19],t},e.prototype._colorMatrix=function(t){var e=new Float32Array(t);return e[4]/=255,e[9]/=255,e[14]/=255,e[19]/=255,e},e.prototype.brightness=function(t,e){var r=[t,0,0,0,0,0,t,0,0,0,0,0,t,0,0,0,0,0,1,0];this._loadMatrix(r,e)},e.prototype.greyscale=function(t,e){var r=[t,t,t,0,0,t,t,t,0,0,t,t,t,0,0,0,0,0,1,0];this._loadMatrix(r,e)},e.prototype.blackAndWhite=function(t){var e=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.hue=function(t,e){t=(t||0)/180*Math.PI;var r=Math.cos(t),n=Math.sin(t),i=Math.sqrt,o=1/3,s=i(o),a=r+(1-r)*o,u=o*(1-r)-s*n,h=o*(1-r)+s*n,l=o*(1-r)+s*n,c=r+o*(1-r),d=o*(1-r)-s*n,f=o*(1-r)-s*n,p=o*(1-r)+s*n,v=r+o*(1-r),g=[a,u,h,0,0,l,c,d,0,0,f,p,v,0,0,0,0,0,1,0];this._loadMatrix(g,e)},e.prototype.contrast=function(t,e){var r=(t||0)+1,n=-.5*(r-1),i=[r,0,0,0,n,0,r,0,0,n,0,0,r,0,n,0,0,0,1,0];this._loadMatrix(i,e)},e.prototype.saturate=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments[1],r=2*t/3+1,n=-.5*(r-1),i=[r,n,n,0,0,n,r,n,0,0,n,n,r,0,0,0,0,0,1,0];this._loadMatrix(i,e)},e.prototype.desaturate=function(){this.saturate(-1)},e.prototype.negative=function(t){var e=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.sepia=function(t){var e=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.technicolor=function(t){var e=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.polaroid=function(t){var e=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.toBGR=function(t){var e=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.kodachrome=function(t){var e=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.browni=function(t){var e=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.vintage=function(t){var e=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.colorTone=function(t,e,r,n,i){t=t||.2,e=e||.15,r=r||16770432,n=n||3375104;var o=(r>>16&255)/255,s=(r>>8&255)/255,a=(255&r)/255,u=(n>>16&255)/255,h=(n>>8&255)/255,l=(255&n)/255,c=[.3,.59,.11,0,0,o,s,a,t,0,u,h,l,e,0,o-u,s-h,a-l,0,0];this._loadMatrix(c,i)},e.prototype.night=function(t,e){t=t||.1;var r=[-2*t,-t,0,0,0,-t,0,t,0,0,0,t,2*t,0,0,0,0,0,1,0];this._loadMatrix(r,e)},e.prototype.predator=function(t,e){var r=[11.224130630493164*t,-4.794486999511719*t,-2.8746118545532227*t,0*t,.40342438220977783*t,-3.6330697536468506*t,9.193157196044922*t,-2.951810836791992*t,0*t,-1.316135048866272*t,-3.2184197902679443*t,-4.2375030517578125*t,7.476448059082031*t,0*t,.8044459223747253*t,0,0,0,1,0];this._loadMatrix(r,e)},e.prototype.lsd=function(t){var e=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(e,t)},e.prototype.reset=function(){var t=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(t,!1)},s(e,[{key:"matrix",get:function(){return this.uniforms.m},set:function(t){this.uniforms.m=t}},{key:"alpha",get:function(){return this.uniforms.uAlpha},set:function(t){this.uniforms.uAlpha=t}}]),e}(u.Filter));r.default=h,h.prototype.grayscale=h.prototype.greyscale},{"../../core":65,path:8}],151:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=t("../../core"),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(a),h=(t("path"),function(t){function e(r,o){n(this,e);var s=new u.Matrix;r.renderable=!1;var a=i(this,t.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 filterMatrix;\n\nvarying vec2 vTextureCoord;\nvarying vec2 vFilterCoord;\n\nvoid main(void)\n{\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;\n   vTextureCoord = aTextureCoord;\n}","varying vec2 vFilterCoord;\nvarying vec2 vTextureCoord;\n\nuniform vec2 scale;\n\nuniform sampler2D uSampler;\nuniform sampler2D mapSampler;\n\nuniform vec4 filterArea;\nuniform vec4 filterClamp;\n\nvoid main(void)\n{\n  vec4 map =  texture2D(mapSampler, vFilterCoord);\n\n  map -= 0.5;\n  map.xy *= scale / filterArea.xy;\n\n  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), filterClamp.xy, filterClamp.zw));\n}\n"));return a.maskSprite=r,a.maskMatrix=s,a.uniforms.mapSampler=r._texture,a.uniforms.filterMatrix=s,a.uniforms.scale={x:1,y:1},null!==o&&void 0!==o||(o=20),a.scale=new u.Point(o,o),a}return o(e,t),e.prototype.apply=function(t,e,r){this.uniforms.filterMatrix=t.calculateSpriteMatrix(this.maskMatrix,this.maskSprite),this.uniforms.scale.x=this.scale.x,this.uniforms.scale.y=this.scale.y,t.applyFilter(this,e,r)},s(e,[{key:"map",get:function(){return this.uniforms.mapSampler},set:function(t){this.uniforms.mapSampler=t}}]),e}(u.Filter));r.default=h},{"../../core":65,path:8}],152:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=t("../../core"),a=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(s),u=(t("path"),function(t){function e(){return n(this,e),
i(this,t.call(this,"\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec4 filterArea;\n\nvarying vec2 vTextureCoord;\n\nvec2 mapCoord( vec2 coord )\n{\n    coord *= filterArea.xy;\n    coord += filterArea.zw;\n\n    return coord;\n}\n\nvec2 unmapCoord( vec2 coord )\n{\n    coord -= filterArea.zw;\n    coord /= filterArea.xy;\n\n    return coord;\n}\n\nvoid texcoords(vec2 fragCoord, vec2 resolution,\n               out vec2 v_rgbNW, out vec2 v_rgbNE,\n               out vec2 v_rgbSW, out vec2 v_rgbSE,\n               out vec2 v_rgbM) {\n    vec2 inverseVP = 1.0 / resolution.xy;\n    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n    v_rgbM = vec2(fragCoord * inverseVP);\n}\n\nvoid main(void) {\n\n   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n   vTextureCoord = aTextureCoord;\n\n   vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n   texcoords(fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}",'varying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform vec4 filterArea;\n\n/**\n Basic FXAA implementation based on the code on geeks3d.com with the\n modification that the texture2DLod stuff was removed since it\'s\n unsupported by WebGL.\n \n --\n \n From:\n https://github.com/mitsuhiko/webgl-meincraft\n \n Copyright (c) 2011 by Armin Ronacher.\n \n Some rights reserved.\n \n Redistribution and use in source and binary forms, with or without\n modification, are permitted provided that the following conditions are\n met:\n \n * Redistributions of source code must retain the above copyright\n notice, this list of conditions and the following disclaimer.\n \n * Redistributions in binary form must reproduce the above\n copyright notice, this list of conditions and the following\n disclaimer in the documentation and/or other materials provided\n with the distribution.\n \n * The names of the contributors may not be used to endorse or\n promote products derived from this software without specific\n prior written permission.\n \n THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\n */\n\n#ifndef FXAA_REDUCE_MIN\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#endif\n#ifndef FXAA_REDUCE_MUL\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#endif\n#ifndef FXAA_SPAN_MAX\n#define FXAA_SPAN_MAX     8.0\n#endif\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n          vec2 v_rgbNW, vec2 v_rgbNE,\n          vec2 v_rgbSW, vec2 v_rgbSE,\n          vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n    \n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n    \n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n    \n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n                  dir * rcpDirMin)) * inverseVP;\n    \n    vec3 rgbA = 0.5 * (\n                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n    \n    float lumaB = dot(rgbB, luma);\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    return color;\n}\n\nvoid main() {\n\n      vec2 fragCoord = vTextureCoord * filterArea.xy;\n\n      vec4 color;\n\n    color = fxaa(uSampler, fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n\n      gl_FragColor = color;\n}\n'))}return o(e,t),e}(a.Filter));r.default=u},{"../../core":65,path:8}],153:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t("./fxaa/FXAAFilter");Object.defineProperty(r,"FXAAFilter",{enumerable:!0,get:function(){return n(i).default}});var o=t("./noise/NoiseFilter");Object.defineProperty(r,"NoiseFilter",{enumerable:!0,get:function(){return n(o).default}});var s=t("./displacement/DisplacementFilter");Object.defineProperty(r,"DisplacementFilter",{enumerable:!0,get:function(){return n(s).default}});var a=t("./blur/BlurFilter");Object.defineProperty(r,"BlurFilter",{enumerable:!0,get:function(){return n(a).default}});var u=t("./blur/BlurXFilter");Object.defineProperty(r,"BlurXFilter",{enumerable:!0,get:function(){return n(u).default}});var h=t("./blur/BlurYFilter");Object.defineProperty(r,"BlurYFilter",{enumerable:!0,get:function(){return n(h).default}});var l=t("./colormatrix/ColorMatrixFilter");Object.defineProperty(r,"ColorMatrixFilter",{enumerable:!0,get:function(){return n(l).default}});var c=t("./alpha/AlphaFilter");Object.defineProperty(r,"AlphaFilter",{enumerable:!0,get:function(){return n(c).default}})},{"./alpha/AlphaFilter":143,"./blur/BlurFilter":144,"./blur/BlurXFilter":145,"./blur/BlurYFilter":146,"./colormatrix/ColorMatrixFilter":150,"./displacement/DisplacementFilter":151,"./fxaa/FXAAFilter":152,"./noise/NoiseFilter":154}],154:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=t("../../core"),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(a),h=(t("path"),function(t){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Math.random();n(this,e);var s=i(this,t.call(this,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}","precision highp float;\n\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\n\nuniform float uNoise;\nuniform float uSeed;\nuniform sampler2D uSampler;\n\nfloat rand(vec2 co)\n{\n    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n}\n\nvoid main()\n{\n    vec4 color = texture2D(uSampler, vTextureCoord);\n    float randomValue = rand(gl_FragCoord.xy * uSeed);\n    float diff = (randomValue - 0.5) * uNoise;\n\n    // Un-premultiply alpha before applying the color matrix. See issue #3539.\n    if (color.a > 0.0) {\n        color.rgb /= color.a;\n    }\n\n    color.r += diff;\n    color.g += diff;\n    color.b += diff;\n\n    // Premultiply alpha again.\n    color.rgb *= color.a;\n\n    gl_FragColor = color;\n}\n"));return s.noise=r,s.seed=o,s}return o(e,t),s(e,[{key:"noise",get:function(){return this.uniforms.uNoise},set:function(t){this.uniforms.uNoise=t}},{key:"seed",get:function(){return this.uniforms.uSeed},set:function(t){this.uniforms.uSeed=t}}]),e}(u.Filter));r.default=h},{"../../core":65,path:8}],155:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=t("../core"),s=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(o),a=function(){function t(){n(this,t),this.global=new s.Point,this.target=null,this.originalEvent=null,this.identifier=null,this.isPrimary=!1,this.button=0,this.buttons=0,this.width=0,this.height=0,this.tiltX=0,this.tiltY=0,this.pointerType=null,this.pressure=0,this.rotationAngle=0,this.twist=0,this.tangentialPressure=0}return t.prototype.getLocalPosition=function(t,e,r){return t.worldTransform.applyInverse(r||this.global,e)},t.prototype.copyEvent=function(t){t.isPrimary&&(this.isPrimary=!0),this.button=t.button,this.buttons=Number.isInteger(t.buttons)?t.buttons:t.which,this.width=t.width,this.height=t.height,this.tiltX=t.tiltX,this.tiltY=t.tiltY,this.pointerType=t.pointerType,this.pressure=t.pressure,this.rotationAngle=t.rotationAngle,this.twist=t.twist||0,this.tangentialPressure=t.tangentialPressure||0},t.prototype.reset=function(){this.isPrimary=!1},i(t,[{key:"pointerId",get:function(){return this.identifier}}]),t}();r.default=a},{"../core":65}],156:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(){n(this,t),this.stopped=!1,this.target=null,this.currentTarget=null,this.type=null,this.data=null}return t.prototype.stopPropagation=function(){this.stopped=!0},t.prototype.reset=function(){this.stopped=!1,this.currentTarget=null,this.target=null},t}();r.default=i},{}],157:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=t("../core"),h=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(u),l=t("./InteractionData"),c=n(l),d=t("./InteractionEvent"),f=n(d),p=t("./InteractionTrackingData"),v=n(p),g=t("eventemitter3"),y=n(g),m=t("./interactiveTarget"),_=n(m);h.utils.mixins.delayMixin(h.DisplayObject.prototype,_.default);var b=1,x={target:null,data:{global:null}},T=function(t){function e(r,n){i(this,e);var s=o(this,t.call(this));return n=n||{},s.renderer=r,s.autoPreventDefault=void 0===n.autoPreventDefault||n.autoPreventDefault,s.interactionFrequency=n.interactionFrequency||10,s.mouse=new c.default,s.mouse.identifier=b,s.mouse.global.set(-999999),s.activeInteractionData={},s.activeInteractionData[b]=s.mouse,s.interactionDataPool=[],s.eventData=new f.default,s.interactionDOMElement=null,s.moveWhenInside=!1,s.eventsAdded=!1,s.mouseOverRenderer=!1,s.supportsTouchEvents="ontouchstart"in window,s.supportsPointerEvents=!!window.PointerEvent,s.onPointerUp=s.onPointerUp.bind(s),s.processPointerUp=s.processPointerUp.bind(s),s.onPointerCancel=s.onPointerCancel.bind(s),s.processPointerCancel=s.processPointerCancel.bind(s),s.onPointerDown=s.onPointerDown.bind(s),s.processPointerDown=s.processPointerDown.bind(s),s.onPointerMove=s.onPointerMove.bind(s),s.processPointerMove=s.processPointerMove.bind(s),s.onPointerOut=s.onPointerOut.bind(s),s.processPointerOverOut=s.processPointerOverOut.bind(s),s.onPointerOver=s.onPointerOver.bind(s),s.cursorStyles={default:"inherit",pointer:"pointer"},s.currentCursorMode=null,s.cursor=null,s._tempPoint=new h.Point,s.resolution=1,s.setTargetElement(s.renderer.view,s.renderer.resolution),s}return s(e,t),e.prototype.hitTest=function(t,e){return x.target=null,x.data.global=t,e||(e=this.renderer._lastObjectRendered),this.processInteractive(x,e,null,!0),x.target},e.prototype.setTargetElement=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.removeEvents(),this.interactionDOMElement=t,this.resolution=e,this.addEvents()},e.prototype.addEvents=function(){this.interactionDOMElement&&(h.ticker.shared.add(this.update,this,h.UPDATE_PRIORITY.INTERACTION),window.navigator.msPointerEnabled?(this.interactionDOMElement.style["-ms-content-zooming"]="none",this.interactionDOMElement.style["-ms-touch-action"]="none"):this.supportsPointerEvents&&(this.interactionDOMElement.style["touch-action"]="none"),this.supportsPointerEvents?(window.document.addEventListener("pointermove",this.onPointerMove,!0),this.interactionDOMElement.addEventListener("pointerdown",this.onPointerDown,!0),this.interactionDOMElement.addEventListener("pointerleave",this.onPointerOut,!0),this.interactionDOMElement.addEventListener("pointerover",this.onPointerOver,!0),window.addEventListener("pointercancel",this.onPointerCancel,!0),window.addEventListener("pointerup",this.onPointerUp,!0)):(window.document.addEventListener("mousemove",this.onPointerMove,!0),this.interactionDOMElement.addEventListener("mousedown",this.onPointerDown,!0),this.interactionDOMElement.addEventListener("mouseout",this.onPointerOut,!0),this.interactionDOMElement.addEventListener("mouseover",this.onPointerOver,!0),window.addEventListener("mouseup",this.onPointerUp,!0)),this.supportsTouchEvents&&(this.interactionDOMElement.addEventListener("touchstart",this.onPointerDown,!0),this.interactionDOMElement.addEventListener("touchcancel",this.onPointerCancel,!0),this.interactionDOMElement.addEventListener("touchend",this.onPointerUp,!0),this.interactionDOMElement.addEventListener("touchmove",this.onPointerMove,!0)),this.eventsAdded=!0)},e.prototype.removeEvents=function(){this.interactionDOMElement&&(h.ticker.shared.remove(this.update,this),window.navigator.msPointerEnabled?(this.interactionDOMElement.style["-ms-content-zooming"]="",this.interactionDOMElement.style["-ms-touch-action"]=""):this.supportsPointerEvents&&(this.interactionDOMElement.style["touch-action"]=""),this.supportsPointerEvents?(window.document.removeEventListener("pointermove",this.onPointerMove,!0),this.interactionDOMElement.removeEventListener("pointerdown",this.onPointerDown,!0),this.interactionDOMElement.removeEventListener("pointerleave",this.onPointerOut,!0),this.interactionDOMElement.removeEventListener("pointerover",this.onPointerOver,!0),window.removeEventListener("pointercancel",this.onPointerCancel,!0),window.removeEventListener("pointerup",this.onPointerUp,!0)):(window.document.removeEventListener("mousemove",this.onPointerMove,!0),this.interactionDOMElement.removeEventListener("mousedown",this.onPointerDown,!0),this.interactionDOMElement.removeEventListener("mouseout",this.onPointerOut,!0),this.interactionDOMElement.removeEventListener("mouseover",this.onPointerOver,!0),window.removeEventListener("mouseup",this.onPointerUp,!0)),this.supportsTouchEvents&&(this.interactionDOMElement.removeEventListener("touchstart",this.onPointerDown,!0),this.interactionDOMElement.removeEventListener("touchcancel",this.onPointerCancel,!0),this.interactionDOMElement.removeEventListener("touchend",this.onPointerUp,!0),this.interactionDOMElement.removeEventListener("touchmove",this.onPointerMove,!0)),this.interactionDOMElement=null,this.eventsAdded=!1)},e.prototype.update=function(t){if(this._deltaTime+=t,!(this._deltaTime<this.interactionFrequency)&&(this._deltaTime=0,this.interactionDOMElement)){if(this.didMove)return void(this.didMove=!1);this.cursor=null;for(var e in this.activeInteractionData)if(this.activeInteractionData.hasOwnProperty(e)){var r=this.activeInteractionData[e];if(r.originalEvent&&"touch"!==r.pointerType){var n=this.configureInteractionEventForDOMEvent(this.eventData,r.originalEvent,r);this.processInteractive(n,this.renderer._lastObjectRendered,this.processPointerOverOut,!0)}}this.setCursorMode(this.cursor)}},e.prototype.setCursorMode=function(t){if(t=t||"default",this.currentCursorMode!==t){this.currentCursorMode=t;var e=this.cursorStyles[t];if(e)switch(void 0===e?"undefined":a(e)){case"string":this.interactionDOMElement.style.cursor=e;break;case"function":e(t);break;case"object":Object.assign(this.interactionDOMElement.style,e)}else"string"!=typeof t||Object.prototype.hasOwnProperty.call(this.cursorStyles,t)||(this.interactionDOMElement.style.cursor=t)}},e.prototype.dispatchEvent=function(t,e,r){r.stopped||(r.currentTarget=t,r.type=e,t.emit(e,r),t[e]&&t[e](r))},e.prototype.mapPositionToPoint=function(t,e,r){var n=void 0;n=this.interactionDOMElement.parentElement?this.interactionDOMElement.getBoundingClientRect():{x:0,y:0,width:0,height:0};var i=navigator.isCocoonJS?this.resolution:1/this.resolution;t.x=(e-n.left)*(this.interactionDOMElement.width/n.width)*i,t.y=(r-n.top)*(this.interactionDOMElement.height/n.height)*i},e.prototype.processInteractive=function(t,e,r,n,i){if(!e||!e.visible)return!1;var o=t.data.global;i=e.interactive||i;var s=!1,a=i,u=!0;if(e.hitArea?(n&&(e.worldTransform.applyInverse(o,this._tempPoint),e.hitArea.contains(this._tempPoint.x,this._tempPoint.y)?s=!0:(n=!1,u=!1)),a=!1):e._mask&&n&&(e._mask.containsPoint(o)||(n=!1,u=!1)),u&&e.interactiveChildren&&e.children)for(var h=e.children,l=h.length-1;l>=0;l--){var c=h[l],d=this.processInteractive(t,c,r,n,a);if(d){if(!c.parent)continue;a=!1,d&&(t.target&&(n=!1),s=!0)}}return i&&(n&&!t.target&&!e.hitArea&&e.containsPoint&&e.containsPoint(o)&&(s=!0),e.interactive&&(s&&!t.target&&(t.target=e),r&&r(t,e,!!s))),s},e.prototype.onPointerDown=function(t){if(!this.supportsTouchEvents||"touch"!==t.pointerType){var e=this.normalizeToPointerData(t);this.autoPreventDefault&&e[0].isNormalized&&t.preventDefault();for(var r=e.length,n=0;n<r;n++){var i=e[n],o=this.getInteractionDataForPointerId(i),s=this.configureInteractionEventForDOMEvent(this.eventData,i,o);if(s.data.originalEvent=t,this.processInteractive(s,this.renderer._lastObjectRendered,this.processPointerDown,!0),this.emit("pointerdown",s),"touch"===i.pointerType)this.emit("touchstart",s);else if("mouse"===i.pointerType||"pen"===i.pointerType){var a=2===i.button;this.emit(a?"rightdown":"mousedown",this.eventData)}}}},e.prototype.processPointerDown=function(t,e,r){var n=t.data,i=t.data.identifier;if(r)if(e.trackedPointers[i]||(e.trackedPointers[i]=new v.default(i)),this.dispatchEvent(e,"pointerdown",t),"touch"===n.pointerType)this.dispatchEvent(e,"touchstart",t);else if("mouse"===n.pointerType||"pen"===n.pointerType){var o=2===n.button;o?e.trackedPointers[i].rightDown=!0:e.trackedPointers[i].leftDown=!0,this.dispatchEvent(e,o?"rightdown":"mousedown",t)}},e.prototype.onPointerComplete=function(t,e,r){for(var n=this.normalizeToPointerData(t),i=n.length,o=t.target!==this.interactionDOMElement?"outside":"",s=0;s<i;s++){var a=n[s],u=this.getInteractionDataForPointerId(a),h=this.configureInteractionEventForDOMEvent(this.eventData,a,u);if(h.data.originalEvent=t,this.processInteractive(h,this.renderer._lastObjectRendered,r,e||!o),this.emit(e?"pointercancel":"pointerup"+o,h),"mouse"===a.pointerType||"pen"===a.pointerType){var l=2===a.button;this.emit(l?"rightup"+o:"mouseup"+o,h)}else"touch"===a.pointerType&&(this.emit(e?"touchcancel":"touchend"+o,h),this.releaseInteractionDataForPointerId(a.pointerId,u))}},e.prototype.onPointerCancel=function(t){this.supportsTouchEvents&&"touch"===t.pointerType||this.onPointerComplete(t,!0,this.processPointerCancel)},e.prototype.processPointerCancel=function(t,e){var r=t.data,n=t.data.identifier;void 0!==e.trackedPointers[n]&&(delete e.trackedPointers[n],this.dispatchEvent(e,"pointercancel",t),"touch"===r.pointerType&&this.dispatchEvent(e,"touchcancel",t))},e.prototype.onPointerUp=function(t){this.supportsTouchEvents&&"touch"===t.pointerType||this.onPointerComplete(t,!1,this.processPointerUp)},e.prototype.processPointerUp=function(t,e,r){var n=t.data,i=t.data.identifier,o=e.trackedPointers[i],s="touch"===n.pointerType,a="mouse"===n.pointerType||"pen"===n.pointerType,u=!1;if(a){var h=2===n.button,l=v.default.FLAGS,c=h?l.RIGHT_DOWN:l.LEFT_DOWN,d=void 0!==o&&o.flags&c;r?(this.dispatchEvent(e,h?"rightup":"mouseup",t),d&&(this.dispatchEvent(e,h?"rightclick":"click",t),u=!0)):d&&this.dispatchEvent(e,h?"rightupoutside":"mouseupoutside",t),o&&(h?o.rightDown=!1:o.leftDown=!1)}r?(this.dispatchEvent(e,"pointerup",t),s&&this.dispatchEvent(e,"touchend",t),o&&(a&&!u||this.dispatchEvent(e,"pointertap",t),s&&(this.dispatchEvent(e,"tap",t),o.over=!1))):o&&(this.dispatchEvent(e,"pointerupoutside",t),s&&this.dispatchEvent(e,"touchendoutside",t)),o&&o.none&&delete e.trackedPointers[i]},e.prototype.onPointerMove=function(t){if(!this.supportsTouchEvents||"touch"!==t.pointerType){var e=this.normalizeToPointerData(t);"mouse"!==e[0].pointerType&&"pen"!==e[0].pointerType||(this.didMove=!0,this.cursor=null);for(var r=e.length,n=0;n<r;n++){var i=e[n],o=this.getInteractionDataForPointerId(i),s=this.configureInteractionEventForDOMEvent(this.eventData,i,o);s.data.originalEvent=t;var a="touch"!==i.pointerType||this.moveWhenInside;this.processInteractive(s,this.renderer._lastObjectRendered,this.processPointerMove,a),this.emit("pointermove",s),"touch"===i.pointerType&&this.emit("touchmove",s),"mouse"!==i.pointerType&&"pen"!==i.pointerType||this.emit("mousemove",s)}"mouse"===e[0].pointerType&&this.setCursorMode(this.cursor)}},e.prototype.processPointerMove=function(t,e,r){var n=t.data,i="touch"===n.pointerType,o="mouse"===n.pointerType||"pen"===n.pointerType;o&&this.processPointerOverOut(t,e,r),this.moveWhenInside&&!r||(this.dispatchEvent(e,"pointermove",t),i&&this.dispatchEvent(e,"touchmove",t),o&&this.dispatchEvent(e,"mousemove",t))},e.prototype.onPointerOut=function(t){if(!this.supportsTouchEvents||"touch"!==t.pointerType){var e=this.normalizeToPointerData(t),r=e[0];"mouse"===r.pointerType&&(this.mouseOverRenderer=!1,this.setCursorMode(null));var n=this.getInteractionDataForPointerId(r),i=this.configureInteractionEventForDOMEvent(this.eventData,r,n);i.data.originalEvent=r,this.processInteractive(i,this.renderer._lastObjectRendered,this.processPointerOverOut,!1),this.emit("pointerout",i),"mouse"===r.pointerType||"pen"===r.pointerType?this.emit("mouseout",i):this.releaseInteractionDataForPointerId(n.identifier)}},e.prototype.processPointerOverOut=function(t,e,r){var n=t.data,i=t.data.identifier,o="mouse"===n.pointerType||"pen"===n.pointerType,s=e.trackedPointers[i];r&&!s&&(s=e.trackedPointers[i]=new v.default(i)),void 0!==s&&(r&&this.mouseOverRenderer?(s.over||(s.over=!0,this.dispatchEvent(e,"pointerover",t),o&&this.dispatchEvent(e,"mouseover",t)),o&&null===this.cursor&&(this.cursor=e.cursor)):s.over&&(s.over=!1,this.dispatchEvent(e,"pointerout",this.eventData),o&&this.dispatchEvent(e,"mouseout",t),s.none&&delete e.trackedPointers[i]))},e.prototype.onPointerOver=function(t){var e=this.normalizeToPointerData(t),r=e[0],n=this.getInteractionDataForPointerId(r),i=this.configureInteractionEventForDOMEvent(this.eventData,r,n);i.data.originalEvent=r,"mouse"===r.pointerType&&(this.mouseOverRenderer=!0),this.emit("pointerover",i),"mouse"!==r.pointerType&&"pen"!==r.pointerType||this.emit("mouseover",i)},e.prototype.getInteractionDataForPointerId=function(t){var e=t.pointerId,r=void 0;return e===b||"mouse"===t.pointerType?r=this.mouse:this.activeInteractionData[e]?r=this.activeInteractionData[e]:(r=this.interactionDataPool.pop()||new c.default,r.identifier=e,this.activeInteractionData[e]=r),r.copyEvent(t),r},e.prototype.releaseInteractionDataForPointerId=function(t){var e=this.activeInteractionData[t];e&&(delete this.activeInteractionData[t],e.reset(),this.interactionDataPool.push(e))},e.prototype.configureInteractionEventForDOMEvent=function(t,e,r){return t.data=r,this.mapPositionToPoint(r.global,e.clientX,e.clientY),navigator.isCocoonJS&&"touch"===e.pointerType&&(r.global.x=r.global.x/this.resolution,r.global.y=r.global.y/this.resolution),"touch"===e.pointerType&&(e.globalX=r.global.x,e.globalY=r.global.y),r.originalEvent=e,t.reset(),t},e.prototype.normalizeToPointerData=function(t){var e=[];if(this.supportsTouchEvents&&t instanceof TouchEvent)for(var r=0,n=t.changedTouches.length;r<n;r++){var i=t.changedTouches[r];void 0===i.button&&(i.button=t.touches.length?1:0),void 0===i.buttons&&(i.buttons=t.touches.length?1:0),void 0===i.isPrimary&&(i.isPrimary=1===t.touches.length&&"touchstart"===t.type),void 0===i.width&&(i.width=i.radiusX||1),void 0===i.height&&(i.height=i.radiusY||1),void 0===i.tiltX&&(i.tiltX=0),void 0===i.tiltY&&(i.tiltY=0),void 0===i.pointerType&&(i.pointerType="touch"),void 0===i.pointerId&&(i.pointerId=i.identifier||0),void 0===i.pressure&&(i.pressure=i.force||.5),i.twist=0,i.tangentialPressure=0,void 0===i.layerX&&(i.layerX=i.offsetX=i.clientX),void 0===i.layerY&&(i.layerY=i.offsetY=i.clientY),i.isNormalized=!0,e.push(i)}else!(t instanceof MouseEvent)||this.supportsPointerEvents&&t instanceof window.PointerEvent?e.push(t):(void 0===t.isPrimary&&(t.isPrimary=!0),void 0===t.width&&(t.width=1),void 0===t.height&&(t.height=1),void 0===t.tiltX&&(t.tiltX=0),void 0===t.tiltY&&(t.tiltY=0),void 0===t.pointerType&&(t.pointerType="mouse"),void 0===t.pointerId&&(t.pointerId=b),void 0===t.pressure&&(t.pressure=.5),t.twist=0,t.tangentialPressure=0,t.isNormalized=!0,e.push(t));return e},e.prototype.destroy=function(){this.removeEvents(),this.removeAllListeners(),this.renderer=null,this.mouse=null,this.eventData=null,this.interactionDOMElement=null,this.onPointerDown=null,this.processPointerDown=null,this.onPointerUp=null,this.processPointerUp=null,this.onPointerCancel=null,this.processPointerCancel=null,this.onPointerMove=null,this.processPointerMove=null,this.onPointerOut=null,this.processPointerOverOut=null,this.onPointerOver=null,this._tempPoint=null},e}(y.default);r.default=T,h.WebGLRenderer.registerPlugin("interaction",T),h.CanvasRenderer.registerPlugin("interaction",T)},{"../core":65,"./InteractionData":155,"./InteractionEvent":156,"./InteractionTrackingData":158,"./interactiveTarget":160,eventemitter3:3}],158:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=function(){function t(e){n(this,t),this._pointerId=e,this._flags=t.FLAGS.NONE}return t.prototype._doSet=function(t,e){this._flags=e?this._flags|t:this._flags&~t},i(t,[{key:"pointerId",get:function(){return this._pointerId}},{key:"flags",get:function(){return this._flags},set:function(t){this._flags=t}},{key:"none",get:function(){return this._flags===this.constructor.FLAGS.NONE}},{key:"over",get:function(){return 0!=(this._flags&this.constructor.FLAGS.OVER)},set:function(t){this._doSet(this.constructor.FLAGS.OVER,t)}},{key:"rightDown",get:function(){return 0!=(this._flags&this.constructor.FLAGS.RIGHT_DOWN)},set:function(t){this._doSet(this.constructor.FLAGS.RIGHT_DOWN,t)}},{key:"leftDown",get:function(){return 0!=(this._flags&this.constructor.FLAGS.LEFT_DOWN)},set:function(t){this._doSet(this.constructor.FLAGS.LEFT_DOWN,t)}}]),t}();r.default=o,o.FLAGS=Object.freeze({NONE:0,OVER:1,LEFT_DOWN:2,RIGHT_DOWN:4})},{}],159:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t("./InteractionData");Object.defineProperty(r,"InteractionData",{enumerable:!0,get:function(){return n(i).default}});var o=t("./InteractionManager");Object.defineProperty(r,"InteractionManager",{enumerable:!0,get:function(){return n(o).default}});var s=t("./interactiveTarget");Object.defineProperty(r,"interactiveTarget",{enumerable:!0,get:function(){return n(s).default}});var a=t("./InteractionTrackingData");Object.defineProperty(r,"InteractionTrackingData",{enumerable:!0,get:function(){return n(a).default}});var u=t("./InteractionEvent");Object.defineProperty(r,"InteractionEvent",{enumerable:!0,get:function(){return n(u).default}})},{"./InteractionData":155,"./InteractionEvent":156,"./InteractionManager":157,"./InteractionTrackingData":158,"./interactiveTarget":160}],160:[function(t,e,r){"use strict";r.__esModule=!0,r.default={interactive:!1,interactiveChildren:!0,hitArea:null,get buttonMode(){return"pointer"===this.cursor},set buttonMode(t){t?this.cursor="pointer":"pointer"===this.cursor&&(this.cursor=null)},cursor:null,get trackedPointers(){return void 0===this._trackedPointers&&(this._trackedPointers={}),this._trackedPointers},_trackedPointers:void 0}},{}],161:[function(t,e,r){"use strict";function n(t,e){t.bitmapFont=a.BitmapText.registerFont(t.data,e)}r.__esModule=!0,r.parse=n,r.default=function(){return function(t,e){if(!t.data||t.type!==s.Resource.TYPE.XML)return void e();if(0===t.data.getElementsByTagName("page").length||0===t.data.getElementsByTagName("info").length||null===t.data.getElementsByTagName("info")[0].getAttribute("face"))return void e();var r=t.isDataUrl?"":o.dirname(t.url);t.isDataUrl&&("."===r&&(r=""),this.baseUrl&&r&&"/"===this.baseUrl.charAt(this.baseUrl.length-1)&&(r+="/")),(r=r.replace(this.baseUrl,""))&&"/"!==r.charAt(r.length-1)&&(r+="/");for(var i=t.data.getElementsByTagName("page"),a={},u=function(r){a[r.metadata.pageFile]=r.texture,
Object.keys(a).length===i.length&&(n(t,a),e())},h=0;h<i.length;++h){var l=i[h].getAttribute("file"),c=r+l,d=!1;for(var f in this.resources)if(this.resources[f].url===c){this.resources[f].metadata.pageFile=l,u(this.resources[f]),d=!0;break}if(!d){var p={crossOrigin:t.crossOrigin,loadType:s.Resource.LOAD_TYPE.IMAGE,metadata:Object.assign({pageFile:l},t.metadata.imageMetadata),parentResource:t};this.add(c,p,u)}}}};var i=t("path"),o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(i),s=t("resource-loader"),a=t("../extras")},{"../extras":141,path:8,"resource-loader":36}],162:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0,r.shared=r.Resource=r.textureParser=r.getResourcePath=r.spritesheetParser=r.parseBitmapFontData=r.bitmapFontParser=r.Loader=void 0;var i=t("./bitmapFontParser");Object.defineProperty(r,"bitmapFontParser",{enumerable:!0,get:function(){return n(i).default}}),Object.defineProperty(r,"parseBitmapFontData",{enumerable:!0,get:function(){return i.parse}});var o=t("./spritesheetParser");Object.defineProperty(r,"spritesheetParser",{enumerable:!0,get:function(){return n(o).default}}),Object.defineProperty(r,"getResourcePath",{enumerable:!0,get:function(){return o.getResourcePath}});var s=t("./textureParser");Object.defineProperty(r,"textureParser",{enumerable:!0,get:function(){return n(s).default}});var a=t("resource-loader");Object.defineProperty(r,"Resource",{enumerable:!0,get:function(){return a.Resource}});var u=t("../core/Application"),h=n(u),l=t("./loader"),c=n(l);r.Loader=c.default;var d=new c.default;d.destroy=function(){},r.shared=d;var f=h.default.prototype;f._loader=null,Object.defineProperty(f,"loader",{get:function(){if(!this._loader){var t=this._options.sharedLoader;this._loader=t?d:new c.default}return this._loader}}),f._parentDestroy=f.destroy,f.destroy=function(t,e){this._loader&&(this._loader.destroy(),this._loader=null),this._parentDestroy(t,e)}},{"../core/Application":43,"./bitmapFontParser":161,"./loader":163,"./spritesheetParser":164,"./textureParser":165,"resource-loader":36}],163:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("resource-loader"),u=n(a),h=t("resource-loader/lib/middlewares/parsing/blob"),l=t("eventemitter3"),c=n(l),d=t("./textureParser"),f=n(d),p=t("./spritesheetParser"),v=n(p),g=t("./bitmapFontParser"),y=n(g),m=function(t){function e(r,n){i(this,e);var s=o(this,t.call(this,r,n));c.default.call(s);for(var a=0;a<e._pixiMiddleware.length;++a)s.use(e._pixiMiddleware[a]());return s.onStart.add(function(t){return s.emit("start",t)}),s.onProgress.add(function(t,e){return s.emit("progress",t,e)}),s.onError.add(function(t,e,r){return s.emit("error",t,e,r)}),s.onLoad.add(function(t,e){return s.emit("load",t,e)}),s.onComplete.add(function(t,e){return s.emit("complete",t,e)}),s}return s(e,t),e.addPixiMiddleware=function(t){e._pixiMiddleware.push(t)},e.prototype.destroy=function(){this.removeAllListeners(),this.reset()},e}(u.default);r.default=m;for(var _ in c.default.prototype)m.prototype[_]=c.default.prototype[_];m._pixiMiddleware=[h.blobMiddlewareFactory,f.default,v.default,y.default];var b=u.default.Resource;b.setExtensionXhrType("fnt",b.XHR_RESPONSE_TYPE.DOCUMENT)},{"./bitmapFontParser":161,"./spritesheetParser":164,"./textureParser":165,eventemitter3:3,"resource-loader":36,"resource-loader/lib/middlewares/parsing/blob":37}],164:[function(t,e,r){"use strict";function n(t,e){return t.isDataUrl?t.data.meta.image:s.default.resolve(t.url.replace(e,""),t.data.meta.image)}r.__esModule=!0,r.default=function(){return function(t,e){var r=t.name+"_image";if(!t.data||t.type!==i.Resource.TYPE.JSON||!t.data.frames||this.resources[r])return void e();var o={crossOrigin:t.crossOrigin,metadata:t.metadata.imageMetadata,parentResource:t},s=n(t,this.baseUrl);this.add(r,s,o,function(r){if(r.error)return void e(r.error);var n=new a.Spritesheet(r.texture.baseTexture,t.data,t.url);n.parse(function(){t.spritesheet=n,t.textures=n.textures,e()})})}},r.getResourcePath=n;var i=t("resource-loader"),o=t("url"),s=function(t){return t&&t.__esModule?t:{default:t}}(o),a=t("../core")},{"../core":65,"resource-loader":36,url:38}],165:[function(t,e,r){"use strict";r.__esModule=!0,r.default=function(){return function(t,e){t.data&&t.type===n.Resource.TYPE.IMAGE&&(t.texture=o.default.fromLoader(t.data,t.url,t.name)),e()}};var n=t("resource-loader"),i=t("../core/textures/Texture"),o=function(t){return t&&t.__esModule?t:{default:t}}(i)},{"../core/textures/Texture":115,"resource-loader":36}],166:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=t("../core"),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(a),h=t("../core/textures/Texture"),l=function(t){return t&&t.__esModule?t:{default:t}}(h),c=new u.Point,d=new u.Polygon,f=function(t){function e(r,o,s,a,h){n(this,e);var c=i(this,t.call(this));return c._texture=r||l.default.EMPTY,c.uvs=s||new Float32Array([0,0,1,0,1,1,0,1]),c.vertices=o||new Float32Array([0,0,100,0,100,100,0,100]),c.indices=a||new Uint16Array([0,1,3,2]),c.dirty=0,c.indexDirty=0,c.vertexDirty=0,c.autoUpdate=!0,c.blendMode=u.BLEND_MODES.NORMAL,c.canvasPadding=u.settings.MESH_CANVAS_PADDING,c.drawMode=h||e.DRAW_MODES.TRIANGLE_MESH,c.shader=null,c.tintRgb=new Float32Array([1,1,1]),c._glDatas={},c._uvTransform=new u.TextureMatrix(c._texture),c.uploadUvTransform=!1,c.pluginName="mesh",c}return o(e,t),e.prototype._renderWebGL=function(t){this.refresh(),t.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this)},e.prototype._renderCanvas=function(t){this.refresh(),t.plugins[this.pluginName].render(this)},e.prototype._onTextureUpdate=function(){this._uvTransform.texture=this._texture,this.refresh()},e.prototype.multiplyUvs=function(){this.uploadUvTransform||this._uvTransform.multiplyUvs(this.uvs)},e.prototype.refresh=function(t){this.autoUpdate&&this.vertexDirty++,this._uvTransform.update(t)&&this._refresh()},e.prototype._refresh=function(){},e.prototype._calculateBounds=function(){this._bounds.addVertices(this.transform,this.vertices,0,this.vertices.length)},e.prototype.containsPoint=function(t){if(!this.getBounds().contains(t.x,t.y))return!1;this.worldTransform.applyInverse(t,c);for(var r=this.vertices,n=d.points,i=this.indices,o=this.indices.length,s=this.drawMode===e.DRAW_MODES.TRIANGLES?3:1,a=0;a+2<o;a+=s){var u=2*i[a],h=2*i[a+1],l=2*i[a+2];if(n[0]=r[u],n[1]=r[u+1],n[2]=r[h],n[3]=r[h+1],n[4]=r[l],n[5]=r[l+1],d.contains(c.x,c.y))return!0}return!1},e.prototype.destroy=function(e){for(var r in this._glDatas){var n=this._glDatas[r];n.destroy?n.destroy():(n.vertexBuffer&&(n.vertexBuffer.destroy(),n.vertexBuffer=null),n.indexBuffer&&(n.indexBuffer.destroy(),n.indexBuffer=null),n.uvBuffer&&(n.uvBuffer.destroy(),n.uvBuffer=null),n.vao&&(n.vao.destroy(),n.vao=null))}this._glDatas=null,t.prototype.destroy.call(this,e)},s(e,[{key:"texture",get:function(){return this._texture},set:function(t){this._texture!==t&&(this._texture=t,t&&(t.baseTexture.hasLoaded?this._onTextureUpdate():t.once("update",this._onTextureUpdate,this)))}},{key:"tint",get:function(){return u.utils.rgb2hex(this.tintRgb)},set:function(t){this.tintRgb=u.utils.hex2rgb(t,this.tintRgb)}}]),e}(u.Container);r.default=f,f.DRAW_MODES={TRIANGLE_MESH:0,TRIANGLES:1}},{"../core":65,"../core/textures/Texture":115}],167:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=t("./Plane"),u=function(t){return t&&t.__esModule?t:{default:t}}(a),h=10,l=function(t){function e(r,o,s,a,u){n(this,e);var l=i(this,t.call(this,r,4,4));return l._origWidth=r.orig.width,l._origHeight=r.orig.height,l._width=l._origWidth,l._height=l._origHeight,l._leftWidth=void 0!==o?o:h,l._rightWidth=void 0!==a?a:h,l._topHeight=void 0!==s?s:h,l._bottomHeight=void 0!==u?u:h,l.refresh(!0),l}return o(e,t),e.prototype.updateHorizontalVertices=function(){var t=this.vertices,e=this._topHeight+this._bottomHeight,r=this._height>e?1:this._height/e;t[9]=t[11]=t[13]=t[15]=this._topHeight*r,t[17]=t[19]=t[21]=t[23]=this._height-this._bottomHeight*r,t[25]=t[27]=t[29]=t[31]=this._height},e.prototype.updateVerticalVertices=function(){var t=this.vertices,e=this._leftWidth+this._rightWidth,r=this._width>e?1:this._width/e;t[2]=t[10]=t[18]=t[26]=this._leftWidth*r,t[4]=t[12]=t[20]=t[28]=this._width-this._rightWidth*r,t[6]=t[14]=t[22]=t[30]=this._width},e.prototype._renderCanvas=function(t){var e=t.context;e.globalAlpha=this.worldAlpha,t.setBlendMode(this.blendMode);var r=this.worldTransform,n=t.resolution;t.roundPixels?e.setTransform(r.a*n,r.b*n,r.c*n,r.d*n,r.tx*n|0,r.ty*n|0):e.setTransform(r.a*n,r.b*n,r.c*n,r.d*n,r.tx*n,r.ty*n);var i=this._texture.baseTexture,o=i.source,s=i.width*i.resolution,a=i.height*i.resolution;this.drawSegment(e,o,s,a,0,1,10,11),this.drawSegment(e,o,s,a,2,3,12,13),this.drawSegment(e,o,s,a,4,5,14,15),this.drawSegment(e,o,s,a,8,9,18,19),this.drawSegment(e,o,s,a,10,11,20,21),this.drawSegment(e,o,s,a,12,13,22,23),this.drawSegment(e,o,s,a,16,17,26,27),this.drawSegment(e,o,s,a,18,19,28,29),this.drawSegment(e,o,s,a,20,21,30,31)},e.prototype.drawSegment=function(t,e,r,n,i,o,s,a){var u=this.uvs,h=this.vertices,l=(u[s]-u[i])*r,c=(u[a]-u[o])*n,d=h[s]-h[i],f=h[a]-h[o];l<1&&(l=1),c<1&&(c=1),d<1&&(d=1),f<1&&(f=1),t.drawImage(e,u[i]*r,u[o]*n,l,c,h[i],h[o],d,f)},e.prototype._refresh=function(){t.prototype._refresh.call(this);var e=this.uvs,r=this._texture;this._origWidth=r.orig.width,this._origHeight=r.orig.height;var n=1/this._origWidth,i=1/this._origHeight;e[0]=e[8]=e[16]=e[24]=0,e[1]=e[3]=e[5]=e[7]=0,e[6]=e[14]=e[22]=e[30]=1,e[25]=e[27]=e[29]=e[31]=1,e[2]=e[10]=e[18]=e[26]=n*this._leftWidth,e[4]=e[12]=e[20]=e[28]=1-n*this._rightWidth,e[9]=e[11]=e[13]=e[15]=i*this._topHeight,e[17]=e[19]=e[21]=e[23]=1-i*this._bottomHeight,this.updateHorizontalVertices(),this.updateVerticalVertices(),this.dirty++,this.multiplyUvs()},s(e,[{key:"width",get:function(){return this._width},set:function(t){this._width=t,this._refresh()}},{key:"height",get:function(){return this._height},set:function(t){this._height=t,this._refresh()}},{key:"leftWidth",get:function(){return this._leftWidth},set:function(t){this._leftWidth=t,this._refresh()}},{key:"rightWidth",get:function(){return this._rightWidth},set:function(t){this._rightWidth=t,this._refresh()}},{key:"topHeight",get:function(){return this._topHeight},set:function(t){this._topHeight=t,this._refresh()}},{key:"bottomHeight",get:function(){return this._bottomHeight},set:function(t){this._bottomHeight=t,this._refresh()}}]),e}(u.default);r.default=l},{"./Plane":168}],168:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=t("./Mesh"),a=function(t){return t&&t.__esModule?t:{default:t}}(s),u=function(t){function e(r,o,s){n(this,e);var u=i(this,t.call(this,r));return u._ready=!0,u.verticesX=o||10,u.verticesY=s||10,u.drawMode=a.default.DRAW_MODES.TRIANGLES,u.refresh(),u}return o(e,t),e.prototype._refresh=function(){for(var t=this._texture,e=this.verticesX*this.verticesY,r=[],n=[],i=[],o=[],s=this.verticesX-1,a=this.verticesY-1,u=t.width/s,h=t.height/a,l=0;l<e;l++){var c=l%this.verticesX,d=l/this.verticesX|0;r.push(c*u,d*h),i.push(c/s,d/a)}for(var f=s*a,p=0;p<f;p++){var v=p%s,g=p/s|0,y=g*this.verticesX+v,m=g*this.verticesX+v+1,_=(g+1)*this.verticesX+v,b=(g+1)*this.verticesX+v+1;o.push(y,m,_),o.push(m,b,_)}this.vertices=new Float32Array(r),this.uvs=new Float32Array(i),this.colors=new Float32Array(n),this.indices=new Uint16Array(o),this.dirty++,this.indexDirty++,this.multiplyUvs()},e.prototype._onTextureUpdate=function(){a.default.prototype._onTextureUpdate.call(this),this._ready&&this.refresh()},e}(a.default);r.default=u},{"./Mesh":166}],169:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=t("./Mesh"),a=function(t){return t&&t.__esModule?t:{default:t}}(s),u=function(t){function e(r,o){n(this,e);var s=i(this,t.call(this,r));return s.points=o,s.vertices=new Float32Array(4*o.length),s.uvs=new Float32Array(4*o.length),s.colors=new Float32Array(2*o.length),s.indices=new Uint16Array(2*o.length),s.autoUpdate=!0,s.refresh(),s}return o(e,t),e.prototype._refresh=function(){var t=this.points;if(!(t.length<1)&&this._texture._uvs){this.vertices.length/4!==t.length&&(this.vertices=new Float32Array(4*t.length),this.uvs=new Float32Array(4*t.length),this.colors=new Float32Array(2*t.length),this.indices=new Uint16Array(2*t.length));var e=this.uvs,r=this.indices,n=this.colors;e[0]=0,e[1]=0,e[2]=0,e[3]=1,n[0]=1,n[1]=1,r[0]=0,r[1]=1;for(var i=t.length,o=1;o<i;o++){var s=4*o,a=o/(i-1);e[s]=a,e[s+1]=0,e[s+2]=a,e[s+3]=1,s=2*o,n[s]=1,n[s+1]=1,s=2*o,r[s]=s,r[s+1]=s+1}this.dirty++,this.indexDirty++,this.multiplyUvs(),this.refreshVertices()}},e.prototype.refreshVertices=function(){var t=this.points;if(!(t.length<1))for(var e=t[0],r=void 0,n=0,i=0,o=this.vertices,s=t.length,a=0;a<s;a++){var u=t[a],h=4*a;r=a<t.length-1?t[a+1]:u,i=-(r.x-e.x),n=r.y-e.y;var l=10*(1-a/(s-1));l>1&&(l=1);var c=Math.sqrt(n*n+i*i),d=this._texture.height/2;n/=c,i/=c,n*=d,i*=d,o[h]=u.x+n,o[h+1]=u.y+i,o[h+2]=u.x-n,o[h+3]=u.y-i,e=u}},e.prototype.updateTransform=function(){this.autoUpdate&&this.refreshVertices(),this.containerUpdateTransform()},e}(a.default);r.default=u},{"./Mesh":166}],170:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=t("../../core"),o=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(i),s=t("../Mesh"),a=function(t){return t&&t.__esModule?t:{default:t}}(s),u=function(){function t(e){n(this,t),this.renderer=e}return t.prototype.render=function(t){var e=this.renderer,r=e.context,n=t.worldTransform,i=e.resolution;e.roundPixels?r.setTransform(n.a*i,n.b*i,n.c*i,n.d*i,n.tx*i|0,n.ty*i|0):r.setTransform(n.a*i,n.b*i,n.c*i,n.d*i,n.tx*i,n.ty*i),e.context.globalAlpha=t.worldAlpha,e.setBlendMode(t.blendMode),t.drawMode===a.default.DRAW_MODES.TRIANGLE_MESH?this._renderTriangleMesh(t):this._renderTriangles(t)},t.prototype._renderTriangleMesh=function(t){for(var e=t.vertices.length/2,r=0;r<e-2;r++){var n=2*r;this._renderDrawTriangle(t,n,n+2,n+4)}},t.prototype._renderTriangles=function(t){for(var e=t.indices,r=e.length,n=0;n<r;n+=3){var i=2*e[n],o=2*e[n+1],s=2*e[n+2];this._renderDrawTriangle(t,i,o,s)}},t.prototype._renderDrawTriangle=function(t,e,r,n){var i=this.renderer.context,o=t.uvs,s=t.vertices,a=t._texture;if(a.valid){var u=a.baseTexture,h=u.source,l=u.width,c=u.height,d=void 0,f=void 0,p=void 0,v=void 0,g=void 0,y=void 0;if(t.uploadUvTransform){var m=t._uvTransform.mapCoord;d=(o[e]*m.a+o[e+1]*m.c+m.tx)*u.width,f=(o[r]*m.a+o[r+1]*m.c+m.tx)*u.width,p=(o[n]*m.a+o[n+1]*m.c+m.tx)*u.width,v=(o[e]*m.b+o[e+1]*m.d+m.ty)*u.height,g=(o[r]*m.b+o[r+1]*m.d+m.ty)*u.height,y=(o[n]*m.b+o[n+1]*m.d+m.ty)*u.height}else d=o[e]*u.width,f=o[r]*u.width,p=o[n]*u.width,v=o[e+1]*u.height,g=o[r+1]*u.height,y=o[n+1]*u.height;var _=s[e],b=s[r],x=s[n],T=s[e+1],w=s[r+1],E=s[n+1],S=t.canvasPadding/this.renderer.resolution;if(S>0){var O=S/Math.abs(t.worldTransform.a),M=S/Math.abs(t.worldTransform.d),P=(_+b+x)/3,C=(T+w+E)/3,R=_-P,A=T-C,I=Math.sqrt(R*R+A*A);_=P+R/I*(I+O),T=C+A/I*(I+M),R=b-P,A=w-C,I=Math.sqrt(R*R+A*A),b=P+R/I*(I+O),w=C+A/I*(I+M),R=x-P,A=E-C,I=Math.sqrt(R*R+A*A),x=P+R/I*(I+O),E=C+A/I*(I+M)}i.save(),i.beginPath(),i.moveTo(_,T),i.lineTo(b,w),i.lineTo(x,E),i.closePath(),i.clip();var D=d*g+v*p+f*y-g*p-v*f-d*y,L=_*g+v*x+b*y-g*x-v*b-_*y,N=d*b+_*p+f*x-b*p-_*f-d*x,B=d*g*x+v*b*p+_*f*y-_*g*p-v*f*x-d*b*y,F=T*g+v*E+w*y-g*E-v*w-T*y,k=d*w+T*p+f*E-w*p-T*f-d*E,j=d*g*E+v*w*p+T*f*y-T*g*p-v*f*E-d*w*y;i.transform(L/D,F/D,N/D,k/D,B/D,j/D),i.drawImage(h,0,0,l*u.resolution,c*u.resolution,0,0,l,c),i.restore(),this.renderer.invalidateBlendMode()}},t.prototype.renderMeshFlat=function(t){var e=this.renderer.context,r=t.vertices,n=r.length/2;e.beginPath();for(var i=1;i<n-2;++i){var o=2*i,s=r[o],a=r[o+1],u=r[o+2],h=r[o+3],l=r[o+4],c=r[o+5];e.moveTo(s,a),e.lineTo(u,h),e.lineTo(l,c)}e.fillStyle="#FF0000",e.fill(),e.closePath()},t.prototype.destroy=function(){this.renderer=null},t}();r.default=u,o.CanvasRenderer.registerPlugin("mesh",u)},{"../../core":65,"../Mesh":166}],171:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t("./Mesh");Object.defineProperty(r,"Mesh",{enumerable:!0,get:function(){return n(i).default}});var o=t("./webgl/MeshRenderer");Object.defineProperty(r,"MeshRenderer",{enumerable:!0,get:function(){return n(o).default}});var s=t("./canvas/CanvasMeshRenderer");Object.defineProperty(r,"CanvasMeshRenderer",{enumerable:!0,get:function(){return n(s).default}});var a=t("./Plane");Object.defineProperty(r,"Plane",{enumerable:!0,get:function(){return n(a).default}});var u=t("./NineSlicePlane");Object.defineProperty(r,"NineSlicePlane",{enumerable:!0,get:function(){return n(u).default}});var h=t("./Rope");Object.defineProperty(r,"Rope",{enumerable:!0,get:function(){return n(h).default}})},{"./Mesh":166,"./NineSlicePlane":167,"./Plane":168,"./Rope":169,"./canvas/CanvasMeshRenderer":170,"./webgl/MeshRenderer":172}],172:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("../../core"),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(a),h=t("pixi-gl-core"),l=n(h),c=t("../Mesh"),d=n(c),f=(t("path"),u.Matrix.IDENTITY),p=function(t){function e(r){i(this,e);var n=o(this,t.call(this,r));return n.shader=null,n}return s(e,t),e.prototype.onContextChange=function(){var t=this.renderer.gl;this.shader=new u.Shader(t,"attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\n\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\nuniform mat3 uTransform;\n\nvarying vec2 vTextureCoord;\n\nvoid main(void)\n{\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n\n    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;\n}\n","varying vec2 vTextureCoord;\nuniform vec4 uColor;\n\nuniform sampler2D uSampler;\n\nvoid main(void)\n{\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;\n}\n")},e.prototype.render=function(t){var e=this.renderer,r=e.gl,n=t._texture;if(n.valid){var i=t._glDatas[e.CONTEXT_UID];i||(e.bindVao(null),i={shader:this.shader,vertexBuffer:l.default.GLBuffer.createVertexBuffer(r,t.vertices,r.STREAM_DRAW),uvBuffer:l.default.GLBuffer.createVertexBuffer(r,t.uvs,r.STREAM_DRAW),indexBuffer:l.default.GLBuffer.createIndexBuffer(r,t.indices,r.STATIC_DRAW),vao:null,dirty:t.dirty,indexDirty:t.indexDirty,vertexDirty:t.vertexDirty},i.vao=new l.default.VertexArrayObject(r).addIndex(i.indexBuffer).addAttribute(i.vertexBuffer,i.shader.attributes.aVertexPosition,r.FLOAT,!1,8,0).addAttribute(i.uvBuffer,i.shader.attributes.aTextureCoord,r.FLOAT,!1,8,0),t._glDatas[e.CONTEXT_UID]=i),e.bindVao(i.vao),t.dirty!==i.dirty&&(i.dirty=t.dirty,i.uvBuffer.upload(t.uvs)),t.indexDirty!==i.indexDirty&&(i.indexDirty=t.indexDirty,i.indexBuffer.upload(t.indices)),t.vertexDirty!==i.vertexDirty&&(i.vertexDirty=t.vertexDirty,i.vertexBuffer.upload(t.vertices)),e.bindShader(i.shader),i.shader.uniforms.uSampler=e.bindTexture(n),e.state.setBlendMode(u.utils.correctBlendMode(t.blendMode,n.baseTexture.premultipliedAlpha)),i.shader.uniforms.uTransform&&(t.uploadUvTransform?i.shader.uniforms.uTransform=t._uvTransform.mapCoord.toArray(!0):i.shader.uniforms.uTransform=f.toArray(!0)),i.shader.uniforms.translationMatrix=t.worldTransform.toArray(!0),i.shader.uniforms.uColor=u.utils.premultiplyRgba(t.tintRgb,t.worldAlpha,i.shader.uniforms.uColor,n.baseTexture.premultipliedAlpha);var o=t.drawMode===d.default.DRAW_MODES.TRIANGLE_MESH?r.TRIANGLE_STRIP:r.TRIANGLES;i.vao.draw(o,t.indices.length,0)}},e}(u.ObjectRenderer);r.default=p,u.WebGLRenderer.registerPlugin("mesh",p)},{"../../core":65,"../Mesh":166,path:8,"pixi-gl-core":15}],173:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=t("../core"),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(a),h=t("../core/utils"),l=function(t){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1500,o=arguments[1],s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:16384,a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];n(this,e);var h=i(this,t.call(this));return s>16384&&(s=16384),s>r&&(s=r),h._properties=[!1,!0,!1,!1,!1],h._maxSize=r,h._batchSize=s,h._glBuffers={},h._bufferUpdateIDs=[],h._updateID=0,h.interactiveChildren=!1,h.blendMode=u.BLEND_MODES.NORMAL,h.autoResize=a,h.roundPixels=!0,h.baseTexture=null,h.setProperties(o),h._tint=0,h.tintRgb=new Float32Array(4),h.tint=16777215,h}return o(e,t),e.prototype.setProperties=function(t){t&&(this._properties[0]="vertices"in t||"scale"in t?!!t.vertices||!!t.scale:this._properties[0],this._properties[1]="position"in t?!!t.position:this._properties[1],this._properties[2]="rotation"in t?!!t.rotation:this._properties[2],this._properties[3]="uvs"in t?!!t.uvs:this._properties[3],this._properties[4]="tint"in t||"alpha"in t?!!t.tint||!!t.alpha:this._properties[4])},e.prototype.updateTransform=function(){this.displayObjectUpdateTransform()},e.prototype.renderWebGL=function(t){var e=this;this.visible&&!(this.worldAlpha<=0)&&this.children.length&&this.renderable&&(this.baseTexture||(this.baseTexture=this.children[0]._texture.baseTexture,this.baseTexture.hasLoaded||this.baseTexture.once("update",function(){return e.onChildrenChange(0)})),t.setObjectRenderer(t.plugins.particle),t.plugins.particle.render(this))},e.prototype.onChildrenChange=function(t){for(var e=Math.floor(t/this._batchSize);this._bufferUpdateIDs.length<e;)this._bufferUpdateIDs.push(0);this._bufferUpdateIDs[e]=++this._updateID},e.prototype.renderCanvas=function(t){if(this.visible&&!(this.worldAlpha<=0)&&this.children.length&&this.renderable){var e=t.context,r=this.worldTransform,n=!0,i=0,o=0,s=0,a=0;t.setBlendMode(this.blendMode),e.globalAlpha=this.worldAlpha,this.displayObjectUpdateTransform();for(var u=0;u<this.children.length;++u){var h=this.children[u];if(h.visible){var l=h._texture.frame;if(e.globalAlpha=this.worldAlpha*h.alpha,h.rotation%(2*Math.PI)==0)n&&(e.setTransform(r.a,r.b,r.c,r.d,r.tx*t.resolution,r.ty*t.resolution),n=!1),i=h.anchor.x*(-l.width*h.scale.x)+h.position.x+.5,o=h.anchor.y*(-l.height*h.scale.y)+h.position.y+.5,s=l.width*h.scale.x,a=l.height*h.scale.y;else{n||(n=!0),h.displayObjectUpdateTransform();var c=h.worldTransform;t.roundPixels?e.setTransform(c.a,c.b,c.c,c.d,c.tx*t.resolution|0,c.ty*t.resolution|0):e.setTransform(c.a,c.b,c.c,c.d,c.tx*t.resolution,c.ty*t.resolution),i=h.anchor.x*-l.width+.5,o=h.anchor.y*-l.height+.5,s=l.width,a=l.height}var d=h._texture.baseTexture.resolution;e.drawImage(h._texture.baseTexture.source,l.x*d,l.y*d,l.width*d,l.height*d,i*t.resolution,o*t.resolution,s*t.resolution,a*t.resolution)}}}},e.prototype.destroy=function(e){if(t.prototype.destroy.call(this,e),this._buffers)for(var r=0;r<this._buffers.length;++r)this._buffers[r].destroy();this._properties=null,this._buffers=null,this._bufferUpdateIDs=null},s(e,[{key:"tint",get:function(){return this._tint},set:function(t){this._tint=t,(0,h.hex2rgb)(t,this.tintRgb)}}]),e}(u.Container);r.default=l},{"../core":65,"../core/utils":125}],174:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t("./ParticleContainer");Object.defineProperty(r,"ParticleContainer",{enumerable:!0,get:function(){return n(i).default}});var o=t("./webgl/ParticleRenderer");Object.defineProperty(r,"ParticleRenderer",{enumerable:!0,get:function(){return n(o).default}})},{"./ParticleContainer":173,"./webgl/ParticleRenderer":176}],175:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var o=t("pixi-gl-core"),s=n(o),a=t("../../core/utils/createIndicesForQuads"),u=n(a),h=function(){function t(e,r,n,o){i(this,t),this.gl=e,this.size=o,this.dynamicProperties=[],this.staticProperties=[];for(var s=0;s<r.length;++s){var a=r[s];a={attribute:a.attribute,size:a.size,uploadFunction:a.uploadFunction,unsignedByte:a.unsignedByte,offset:a.offset},n[s]?this.dynamicProperties.push(a):this.staticProperties.push(a)}this.staticStride=0,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.dynamicStride=0,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this._updateID=0,this.initBuffers()}return t.prototype.initBuffers=function(){var t=this.gl,e=0;this.indices=(0,u.default)(this.size),this.indexBuffer=s.default.GLBuffer.createIndexBuffer(t,this.indices,t.STATIC_DRAW),this.dynamicStride=0;for(var r=0;r<this.dynamicProperties.length;++r){var n=this.dynamicProperties[r];n.offset=e,e+=n.size,this.dynamicStride+=n.size}var i=new ArrayBuffer(this.size*this.dynamicStride*4*4);this.dynamicData=new Float32Array(i),this.dynamicDataUint32=new Uint32Array(i),this.dynamicBuffer=s.default.GLBuffer.createVertexBuffer(t,i,t.STREAM_DRAW);var o=0;this.staticStride=0;for(var a=0;a<this.staticProperties.length;++a){var h=this.staticProperties[a];h.offset=o,o+=h.size,this.staticStride+=h.size}var l=new ArrayBuffer(this.size*this.staticStride*4*4);this.staticData=new Float32Array(l),this.staticDataUint32=new Uint32Array(l),this.staticBuffer=s.default.GLBuffer.createVertexBuffer(t,l,t.STATIC_DRAW),this.vao=new s.default.VertexArrayObject(t).addIndex(this.indexBuffer);for(var c=0;c<this.dynamicProperties.length;++c){var d=this.dynamicProperties[c];d.unsignedByte?this.vao.addAttribute(this.dynamicBuffer,d.attribute,t.UNSIGNED_BYTE,!0,4*this.dynamicStride,4*d.offset):this.vao.addAttribute(this.dynamicBuffer,d.attribute,t.FLOAT,!1,4*this.dynamicStride,4*d.offset)}for(var f=0;f<this.staticProperties.length;++f){var p=this.staticProperties[f];p.unsignedByte?this.vao.addAttribute(this.staticBuffer,p.attribute,t.UNSIGNED_BYTE,!0,4*this.staticStride,4*p.offset):this.vao.addAttribute(this.staticBuffer,p.attribute,t.FLOAT,!1,4*this.staticStride,4*p.offset)}},t.prototype.uploadDynamic=function(t,e,r){for(var n=0;n<this.dynamicProperties.length;n++){var i=this.dynamicProperties[n];i.uploadFunction(t,e,r,i.unsignedByte?this.dynamicDataUint32:this.dynamicData,this.dynamicStride,i.offset)}this.dynamicBuffer.upload()},t.prototype.uploadStatic=function(t,e,r){for(var n=0;n<this.staticProperties.length;n++){var i=this.staticProperties[n];i.uploadFunction(t,e,r,i.unsignedByte?this.staticDataUint32:this.staticData,this.staticStride,i.offset)}this.staticBuffer.upload()},t.prototype.destroy=function(){this.dynamicProperties=null,this.dynamicBuffer.destroy(),this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this.staticProperties=null,this.staticBuffer.destroy(),this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null},t}();r.default=h},{"../../core/utils/createIndicesForQuads":123,
"pixi-gl-core":15}],176:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var a=t("../../core"),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(a),h=t("./ParticleShader"),l=n(h),c=t("./ParticleBuffer"),d=n(c),f=t("../../core/utils"),p=function(t){function e(r){i(this,e);var n=o(this,t.call(this,r));return n.shader=null,n.indexBuffer=null,n.properties=null,n.tempMatrix=new u.Matrix,n.CONTEXT_UID=0,n}return s(e,t),e.prototype.onContextChange=function(){var t=this.renderer.gl;this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.shader=new l.default(t),this.properties=[{attribute:this.shader.attributes.aVertexPosition,size:2,uploadFunction:this.uploadVertices,offset:0},{attribute:this.shader.attributes.aPositionCoord,size:2,uploadFunction:this.uploadPosition,offset:0},{attribute:this.shader.attributes.aRotation,size:1,uploadFunction:this.uploadRotation,offset:0},{attribute:this.shader.attributes.aTextureCoord,size:2,uploadFunction:this.uploadUvs,offset:0},{attribute:this.shader.attributes.aColor,size:1,unsignedByte:!0,uploadFunction:this.uploadTint,offset:0}]},e.prototype.start=function(){this.renderer.bindShader(this.shader)},e.prototype.render=function(t){var e=t.children,r=t._maxSize,n=t._batchSize,i=this.renderer,o=e.length;if(0!==o){o>r&&(o=r);var s=t._glBuffers[i.CONTEXT_UID];s||(s=t._glBuffers[i.CONTEXT_UID]=this.generateBuffers(t));var a=e[0]._texture.baseTexture;this.renderer.setBlendMode(u.utils.correctBlendMode(t.blendMode,a.premultipliedAlpha));var h=i.gl,l=t.worldTransform.copy(this.tempMatrix);l.prepend(i._activeRenderTarget.projectionMatrix),this.shader.uniforms.projectionMatrix=l.toArray(!0),this.shader.uniforms.uColor=u.utils.premultiplyRgba(t.tintRgb,t.worldAlpha,this.shader.uniforms.uColor,a.premultipliedAlpha),this.shader.uniforms.uSampler=i.bindTexture(a);for(var c=!1,d=0,f=0;d<o;d+=n,f+=1){var p=o-d;if(p>n&&(p=n),f>=s.length){if(!t.autoResize)break;s.push(this._generateOneMoreBuffer(t))}var v=s[f];v.uploadDynamic(e,d,p);var g=t._bufferUpdateIDs[f]||0;c=c||v._updateID<g,c&&(v._updateID=t._updateID,v.uploadStatic(e,d,p)),i.bindVao(v.vao),v.vao.draw(h.TRIANGLES,6*p)}}},e.prototype.generateBuffers=function(t){for(var e=this.renderer.gl,r=[],n=t._maxSize,i=t._batchSize,o=t._properties,s=0;s<n;s+=i)r.push(new d.default(e,this.properties,o,i));return r},e.prototype._generateOneMoreBuffer=function(t){var e=this.renderer.gl,r=t._batchSize,n=t._properties;return new d.default(e,this.properties,n,r)},e.prototype.uploadVertices=function(t,e,r,n,i,o){for(var s=0,a=0,u=0,h=0,l=0;l<r;++l){var c=t[e+l],d=c._texture,f=c.scale.x,p=c.scale.y,v=d.trim,g=d.orig;v?(a=v.x-c.anchor.x*g.width,s=a+v.width,h=v.y-c.anchor.y*g.height,u=h+v.height):(s=g.width*(1-c.anchor.x),a=g.width*-c.anchor.x,u=g.height*(1-c.anchor.y),h=g.height*-c.anchor.y),n[o]=a*f,n[o+1]=h*p,n[o+i]=s*f,n[o+i+1]=h*p,n[o+2*i]=s*f,n[o+2*i+1]=u*p,n[o+3*i]=a*f,n[o+3*i+1]=u*p,o+=4*i}},e.prototype.uploadPosition=function(t,e,r,n,i,o){for(var s=0;s<r;s++){var a=t[e+s].position;n[o]=a.x,n[o+1]=a.y,n[o+i]=a.x,n[o+i+1]=a.y,n[o+2*i]=a.x,n[o+2*i+1]=a.y,n[o+3*i]=a.x,n[o+3*i+1]=a.y,o+=4*i}},e.prototype.uploadRotation=function(t,e,r,n,i,o){for(var s=0;s<r;s++){var a=t[e+s].rotation;n[o]=a,n[o+i]=a,n[o+2*i]=a,n[o+3*i]=a,o+=4*i}},e.prototype.uploadUvs=function(t,e,r,n,i,o){for(var s=0;s<r;++s){var a=t[e+s]._texture._uvs;a?(n[o]=a.x0,n[o+1]=a.y0,n[o+i]=a.x1,n[o+i+1]=a.y1,n[o+2*i]=a.x2,n[o+2*i+1]=a.y2,n[o+3*i]=a.x3,n[o+3*i+1]=a.y3,o+=4*i):(n[o]=0,n[o+1]=0,n[o+i]=0,n[o+i+1]=0,n[o+2*i]=0,n[o+2*i+1]=0,n[o+3*i]=0,n[o+3*i+1]=0,o+=4*i)}},e.prototype.uploadTint=function(t,e,r,n,i,o){for(var s=0;s<r;++s){var a=t[e+s],u=a._texture.baseTexture.premultipliedAlpha,h=a.alpha,l=h<1&&u?(0,f.premultiplyTint)(a._tintRGB,h):a._tintRGB+(255*h<<24);n[o]=l,n[o+i]=l,n[o+2*i]=l,n[o+3*i]=l,o+=4*i}},e.prototype.destroy=function(){this.renderer.gl&&this.renderer.gl.deleteBuffer(this.indexBuffer),t.prototype.destroy.call(this),this.shader.destroy(),this.indices=null,this.tempMatrix=null},e}(u.ObjectRenderer);r.default=p,u.WebGLRenderer.registerPlugin("particle",p)},{"../../core":65,"../../core/utils":125,"./ParticleBuffer":175,"./ParticleShader":177}],177:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}r.__esModule=!0;var s=t("../../core/Shader"),a=function(t){return t&&t.__esModule?t:{default:t}}(s),u=function(t){function e(r){return n(this,e),i(this,t.call(this,r,["attribute vec2 aVertexPosition;","attribute vec2 aTextureCoord;","attribute vec4 aColor;","attribute vec2 aPositionCoord;","attribute float aRotation;","uniform mat3 projectionMatrix;","uniform vec4 uColor;","varying vec2 vTextureCoord;","varying vec4 vColor;","void main(void){","   float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);","   float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);","   vec2 v = vec2(x, y);","   v = v + aPositionCoord;","   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);","   vTextureCoord = aTextureCoord;","   vColor = aColor * uColor;","}"].join("\n"),["varying vec2 vTextureCoord;","varying vec4 vColor;","uniform sampler2D uSampler;","void main(void){","  vec4 color = texture2D(uSampler, vTextureCoord) * vColor;","  gl_FragColor = color;","}"].join("\n")))}return o(e,t),e}(a.default);r.default=u},{"../../core/Shader":44}],178:[function(t,e,r){"use strict";Math.sign||(Math.sign=function(t){return t=Number(t),0===t||isNaN(t)?t:t>0?1:-1})},{}],179:[function(t,e,r){"use strict";Number.isInteger||(Number.isInteger=function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t})},{}],180:[function(t,e,r){"use strict";var n=t("object-assign"),i=function(t){return t&&t.__esModule?t:{default:t}}(n);Object.assign||(Object.assign=i.default)},{"object-assign":6}],181:[function(t,e,r){"use strict";t("./Object.assign"),t("./requestAnimationFrame"),t("./Math.sign"),t("./Number.isInteger"),window.ArrayBuffer||(window.ArrayBuffer=Array),window.Float32Array||(window.Float32Array=Array),window.Uint32Array||(window.Uint32Array=Array),window.Uint16Array||(window.Uint16Array=Array)},{"./Math.sign":178,"./Number.isInteger":179,"./Object.assign":180,"./requestAnimationFrame":182}],182:[function(t,e,r){(function(t){"use strict";if(Date.now&&Date.prototype.getTime||(Date.now=function(){return(new Date).getTime()}),!t.performance||!t.performance.now){var e=Date.now();t.performance||(t.performance={}),t.performance.now=function(){return Date.now()-e}}for(var r=Date.now(),n=["ms","moz","webkit","o"],i=0;i<n.length&&!t.requestAnimationFrame;++i){var o=n[i];t.requestAnimationFrame=t[o+"RequestAnimationFrame"],t.cancelAnimationFrame=t[o+"CancelAnimationFrame"]||t[o+"CancelRequestAnimationFrame"]}t.requestAnimationFrame||(t.requestAnimationFrame=function(t){if("function"!=typeof t)throw new TypeError(t+"is not a function");var e=Date.now(),n=16+r-e;return n<0&&(n=0),r=e,setTimeout(function(){r=Date.now(),t(performance.now())},n)}),t.cancelAnimationFrame||(t.cancelAnimationFrame=function(t){return clearTimeout(t)})}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],183:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){var r=!1;if(t&&t._textures&&t._textures.length)for(var n=0;n<t._textures.length;n++)if(t._textures[n]instanceof d.Texture){var i=t._textures[n].baseTexture;-1===e.indexOf(i)&&(e.push(i),r=!0)}return r}function o(t,e){return t instanceof d.BaseTexture&&(-1===e.indexOf(t)&&e.push(t),!0)}function s(t,e){if(t._texture&&t._texture instanceof d.Texture){var r=t._texture.baseTexture;return-1===e.indexOf(r)&&e.push(r),!0}return!1}function a(t,e){return e instanceof d.Text&&(e.updateText(!0),!0)}function u(t,e){if(e instanceof d.TextStyle){var r=e.toFontString();return d.TextMetrics.measureFont(r),!0}return!1}function h(t,e){if(t instanceof d.Text){-1===e.indexOf(t.style)&&e.push(t.style),-1===e.indexOf(t)&&e.push(t);var r=t._texture.baseTexture;return-1===e.indexOf(r)&&e.push(r),!0}return!1}function l(t,e){return t instanceof d.TextStyle&&(-1===e.indexOf(t)&&e.push(t),!0)}r.__esModule=!0;var c=t("../core"),d=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(c),f=t("./limiters/CountLimiter"),p=function(t){return t&&t.__esModule?t:{default:t}}(f),v=d.ticker.shared;d.settings.UPLOADS_PER_FRAME=4;var g=function(){function t(e){var r=this;n(this,t),this.limiter=new p.default(d.settings.UPLOADS_PER_FRAME),this.renderer=e,this.uploadHookHelper=null,this.queue=[],this.addHooks=[],this.uploadHooks=[],this.completes=[],this.ticking=!1,this.delayedTick=function(){r.queue&&r.prepareItems()},this.registerFindHook(h),this.registerFindHook(l),this.registerFindHook(i),this.registerFindHook(o),this.registerFindHook(s),this.registerUploadHook(a),this.registerUploadHook(u)}return t.prototype.upload=function(t,e){"function"==typeof t&&(e=t,t=null),t&&this.add(t),this.queue.length?(e&&this.completes.push(e),this.ticking||(this.ticking=!0,v.addOnce(this.tick,this,d.UPDATE_PRIORITY.UTILITY))):e&&e()},t.prototype.tick=function(){setTimeout(this.delayedTick,0)},t.prototype.prepareItems=function(){for(this.limiter.beginFrame();this.queue.length&&this.limiter.allowedToUpload();){var t=this.queue[0],e=!1;if(t&&!t._destroyed)for(var r=0,n=this.uploadHooks.length;r<n;r++)if(this.uploadHooks[r](this.uploadHookHelper,t)){this.queue.shift(),e=!0;break}e||this.queue.shift()}if(this.queue.length)v.addOnce(this.tick,this,d.UPDATE_PRIORITY.UTILITY);else{this.ticking=!1;var i=this.completes.slice(0);this.completes.length=0;for(var o=0,s=i.length;o<s;o++)i[o]()}},t.prototype.registerFindHook=function(t){return t&&this.addHooks.push(t),this},t.prototype.registerUploadHook=function(t){return t&&this.uploadHooks.push(t),this},t.prototype.add=function(t){for(var e=0,r=this.addHooks.length;e<r&&!this.addHooks[e](t,this.queue);e++);if(t instanceof d.Container)for(var n=t.children.length-1;n>=0;n--)this.add(t.children[n]);return this},t.prototype.destroy=function(){this.ticking&&v.remove(this.tick,this),this.ticking=!1,this.addHooks=null,this.uploadHooks=null,this.renderer=null,this.completes=null,this.queue=null,this.limiter=null,this.uploadHookHelper=null},t}();r.default=g},{"../core":65,"./limiters/CountLimiter":186}],184:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){if(e instanceof u.BaseTexture){var r=e.source,n=0===r.width?t.canvas.width:Math.min(t.canvas.width,r.width),i=0===r.height?t.canvas.height:Math.min(t.canvas.height,r.height);return t.ctx.drawImage(r,0,0,n,i,0,0,t.canvas.width,t.canvas.height),!0}return!1}r.__esModule=!0;var a=t("../../core"),u=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(a),h=t("../BasePrepare"),l=function(t){return t&&t.__esModule?t:{default:t}}(h),c=16,d=function(t){function e(r){n(this,e);var o=i(this,t.call(this,r));return o.uploadHookHelper=o,o.canvas=document.createElement("canvas"),o.canvas.width=c,o.canvas.height=c,o.ctx=o.canvas.getContext("2d"),o.registerUploadHook(s),o}return o(e,t),e.prototype.destroy=function(){t.prototype.destroy.call(this),this.ctx=null,this.canvas=null},e}(l.default);r.default=d,u.CanvasRenderer.registerPlugin("prepare",d)},{"../../core":65,"../BasePrepare":183}],185:[function(t,e,r){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}r.__esModule=!0;var i=t("./webgl/WebGLPrepare");Object.defineProperty(r,"webgl",{enumerable:!0,get:function(){return n(i).default}});var o=t("./canvas/CanvasPrepare");Object.defineProperty(r,"canvas",{enumerable:!0,get:function(){return n(o).default}});var s=t("./BasePrepare");Object.defineProperty(r,"BasePrepare",{enumerable:!0,get:function(){return n(s).default}});var a=t("./limiters/CountLimiter");Object.defineProperty(r,"CountLimiter",{enumerable:!0,get:function(){return n(a).default}});var u=t("./limiters/TimeLimiter");Object.defineProperty(r,"TimeLimiter",{enumerable:!0,get:function(){return n(u).default}})},{"./BasePrepare":183,"./canvas/CanvasPrepare":184,"./limiters/CountLimiter":186,"./limiters/TimeLimiter":187,"./webgl/WebGLPrepare":188}],186:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(e){n(this,t),this.maxItemsPerFrame=e,this.itemsLeft=0}return t.prototype.beginFrame=function(){this.itemsLeft=this.maxItemsPerFrame},t.prototype.allowedToUpload=function(){return this.itemsLeft-- >0},t}();r.default=i},{}],187:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}r.__esModule=!0;var i=function(){function t(e){n(this,t),this.maxMilliseconds=e,this.frameStart=0}return t.prototype.beginFrame=function(){this.frameStart=Date.now()},t.prototype.allowedToUpload=function(){return Date.now()-this.frameStart<this.maxMilliseconds},t}();r.default=i},{}],188:[function(t,e,r){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function s(t,e){return e instanceof l.BaseTexture&&(e._glTextures[t.CONTEXT_UID]||t.textureManager.updateTexture(e),!0)}function a(t,e){return e instanceof l.Graphics&&((e.dirty||e.clearDirty||!e._webGL[t.plugins.graphics.CONTEXT_UID])&&t.plugins.graphics.updateGraphics(e),!0)}function u(t,e){return t instanceof l.Graphics&&(e.push(t),!0)}r.__esModule=!0;var h=t("../../core"),l=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}(h),c=t("../BasePrepare"),d=function(t){return t&&t.__esModule?t:{default:t}}(c),f=function(t){function e(r){n(this,e);var o=i(this,t.call(this,r));return o.uploadHookHelper=o.renderer,o.registerFindHook(u),o.registerUploadHook(s),o.registerUploadHook(a),o}return o(e,t),e}(d.default);r.default=f,l.WebGLRenderer.registerPlugin("prepare",f)},{"../../core":65,"../BasePrepare":183}],189:[function(t,e,r){(function(e){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e.default=t,e}r.__esModule=!0,r.loader=r.prepare=r.particles=r.mesh=r.loaders=r.interaction=r.filters=r.extras=r.extract=r.accessibility=void 0;var i=t("./polyfill");Object.keys(i).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(r,t,{enumerable:!0,get:function(){return i[t]}})});var o=t("./core");Object.keys(o).forEach(function(t){"default"!==t&&"__esModule"!==t&&Object.defineProperty(r,t,{enumerable:!0,get:function(){return o[t]}})});var s=t("./deprecation"),a=function(t){return t&&t.__esModule?t:{default:t}}(s),u=t("./accessibility"),h=n(u),l=t("./extract"),c=n(l),d=t("./extras"),f=n(d),p=t("./filters"),v=n(p),g=t("./interaction"),y=n(g),m=t("./loaders"),_=n(m),b=t("./mesh"),x=n(b),T=t("./particles"),w=n(T),E=t("./prepare"),S=n(E);o.utils.mixins.performMixins();var O=_.shared||null;r.accessibility=h,r.extract=c,r.extras=f,r.filters=v,r.interaction=y,r.loaders=_,r.mesh=x,r.particles=w,r.prepare=S,r.loader=O,"function"==typeof a.default&&(0,a.default)(r),e.PIXI=r}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./accessibility":42,"./core":65,"./deprecation":131,"./extract":133,"./extras":141,"./filters":153,"./interaction":159,"./loaders":162,"./mesh":171,"./particles":174,"./polyfill":181,"./prepare":185}]},{},[189])(189)});
//# sourceMappingURL=pixi.min.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(38)))

/***/ }),
/* 38 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


PIXI.DISPLAY_FLAG = {
    AUTO_CHILDREN: 0,
    AUTO_CONTAINER: 1,
    AUTO_OBJECT: 2,
    MANUAL_CONTAINER: 3
};
var WebGLRenderer = PIXI.WebGLRenderer;
var CanvasRenderer = PIXI.CanvasRenderer;
Object.assign(PIXI.Container.prototype, {
    displayList: null,
    displayChildren: null,
    displayParent: null,
    updateTransform: function updateTransform() {
        if (!this.visible) {
            return;
        }
        this.containerUpdateTransform();
        if (this.displayList) {
            this.displayList.update(this);
        }
    },
    renderCanvas: function renderCanvas(renderer) {
        if (!this.visible) {
            this.displayOrder = 0;
            return;
        }
        this.displayOrder = renderer.incDisplayOrder();
        if (this.worldAlpha <= 0 || !this.renderable) {
            return;
        }
        if (this.displayList) {
            this.displayList.renderCanvas(this, renderer);
            return;
        }
        this.containerRenderCanvas(renderer);
    },
    renderWebGL: function renderWebGL(renderer) {
        if (!this.visible) {
            this.displayOrder = 0;
            return;
        }
        this.displayOrder = renderer.incDisplayOrder();
        if (this.worldAlpha <= 0 || !this.renderable) {
            return;
        }
        if (this.displayList) {
            this.displayList.renderWebGL(this, renderer);
            return;
        }
        this.containerRenderWebGL(renderer);
    },
    containerRenderWebGL: PIXI.Container.prototype.renderWebGL,
    containerRenderCanvas: PIXI.Container.prototype.renderCanvas
});
var __extends = undefined && undefined.__extends || function (d, b) {
    for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
    }function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var pixi_display;
(function (pixi_display) {
    var utils = PIXI.utils;
    var DisplayGroup = function (_super) {
        __extends(DisplayGroup, _super);
        function DisplayGroup(zIndex, sorting) {
            _super.call(this);
            this.currentIndex = 0;
            this.zIndex = 0;
            this.enableSort = false;
            this.computedChildren = [];
            this.currentDisplayList = null;
            this.currentIndex = 0;
            this.zIndex = zIndex || 0;
            this.enableSort = !!sorting;
            if (typeof sorting === 'function') {
                this.on('add', sorting);
            }
        }
        DisplayGroup.compareZOrder = function (a, b) {
            if (a.zOrder < b.zOrder) {
                return 1;
            }
            if (a.zOrder > b.zOrder) {
                return -1;
            }
            return a.updateOrder - b.updateOrder;
        };
        ;
        DisplayGroup.prototype.clear = function () {
            var list = this.computedChildren;
            for (var i = 0; i < list.length; i++) {
                var children = list[i].displayChildren;
                if (children && children.length > 0) {
                    for (var j = 0; j < children.length; j++) {
                        children[j].displayParent = null;
                    }
                    children.length = 0;
                }
                list[i].displayParent = null;
            }
            list.length = 0;
            this.currentDisplayList = null;
            this.currentIndex = 0;
        };
        ;
        DisplayGroup.prototype.add = function (displayObject) {
            displayObject.displayOrder = this.computedChildren.length;
            this.emit('add', displayObject);
            this.computedChildren.push(displayObject);
        };
        ;
        DisplayGroup.prototype.update = function () {
            this.emit('update');
            if (this.enableSort && this.computedChildren.length > 1) {
                this.computedChildren.sort(DisplayGroup.compareZOrder);
            }
        };
        ;
        DisplayGroup.prototype.renderWebGL = function (parentContainer, renderer) {
            var list = this.computedChildren;
            for (var j = 0; j < list.length; j++) {
                var container = list[j];
                if (container.displayFlag) {
                    container.renderWebGL(renderer);
                } else {
                    container.displayOrder = renderer.incDisplayOrder();
                    container._renderWebGL(renderer);
                    var children = container.displayChildren;
                    if (children && children.length) {
                        for (var k = 0; k < children.length; k++) {
                            var child = children[k];
                            child.displayOrder = renderer.incDisplayOrder();
                            if (child.displayFlag) {
                                child.renderWebGL(renderer);
                            } else {
                                child._renderWebGL(renderer);
                            }
                        }
                    }
                }
            }
        };
        ;
        DisplayGroup.prototype.renderCanvas = function (parentContainer, renderer) {
            var list = this.computedChildren;
            for (var j = 0; j < list.length; j++) {
                var container = list[j];
                if (container.displayFlag) {
                    container.renderCanvas(renderer);
                } else {
                    container.displayOrder = renderer.incDisplayOrder();
                    container._renderCanvas(renderer);
                    var children = container.displayChildren;
                    if (children && children.length) {
                        for (var k = 0; k < children.length; k++) {
                            var child = children[k];
                            child.displayOrder = renderer.incDisplayOrder();
                            if (child.displayFlag) {
                                child.renderCanvas(renderer);
                            } else {
                                child._renderCanvas(renderer);
                            }
                        }
                    }
                }
            }
        };
        ;
        return DisplayGroup;
    }(utils.EventEmitter);
    pixi_display.DisplayGroup = DisplayGroup;
})(pixi_display || (pixi_display = {}));
var pixi_display;
(function (pixi_display) {
    var utils = PIXI.utils;
    var DisplayList = function (_super) {
        __extends(DisplayList, _super);
        function DisplayList() {
            _super.call(this);
            this.container = null;
            this.totalElements = 0;
            this.displayGroups = [];
            this.defaultDisplayGroup = new pixi_display.DisplayGroup(0, false);
        }
        DisplayList.prototype.clear = function () {
            var list = this.displayGroups;
            for (var i = 0; i < list.length; i++) {
                list[i].clear();
            }
            list.length = 0;
            this.totalElements = 0;
            this.container = null;
        };
        ;
        DisplayList.prototype.destroy = function () {
            this.clear();
        };
        ;
        DisplayList.compareZIndex = function (a, b) {
            if (a.zIndex !== b.zIndex) {
                return a.zIndex - b.zIndex;
            }
            return a.currentIndex - b.currentIndex;
        };
        ;
        DisplayList.prototype._addRecursive = function (displayObject, parent) {
            var container = displayObject;
            if (!container.visible || !container.renderable) {
                return;
            }
            var groups = this.displayGroups;
            var group = parent.displayGroup;
            container.updateOrder = this.totalElements++;
            if (container.displayGroup) {
                group = container.displayGroup;
                if (!group.currentDisplayList) {
                    group.currentDisplayList = this;
                    group.currentIndex = groups.length;
                    groups.push(group);
                }
                group.add(container);
                container.displayParent = container;
            } else {
                container.displayParent = parent;
                if (!parent.displayChildren) {
                    parent.displayChildren = [];
                }
                parent.displayChildren.push(container);
            }
            if (container.displayFlag !== PIXI.DISPLAY_FLAG.MANUAL_CONTAINER) {
                var children = container.children;
                if (children && children.length > 0) {
                    if (container._mask || container._filters && container._filters.length || container.displayList) {
                        container.displayFlag = PIXI.DISPLAY_FLAG.AUTO_CONTAINER;
                    } else {
                        container.displayFlag = PIXI.DISPLAY_FLAG.AUTO_CHILDREN;
                        for (var i = 0; i < children.length; i++) {
                            this._addRecursive(children[i], container.displayParent);
                        }
                    }
                } else {
                    container.displayFlag = PIXI.DISPLAY_FLAG.AUTO_OBJECT;
                }
            }
        };
        ;
        DisplayList.prototype.update = function (parentContainer) {
            this.clear();
            var tempGroup = parentContainer.displayGroup;
            this.displayGroups.push(this.defaultDisplayGroup);
            this.defaultDisplayGroup.add(parentContainer);
            this.container = parentContainer;
            var children = parentContainer.children;
            var i = 0;
            for (i = 0; i < children.length; i++) {
                this._addRecursive(children[i], parentContainer);
            }
            var groups = this.displayGroups;
            groups.sort(DisplayList.compareZIndex);
            for (i = 0; i < groups.length; i++) {
                groups[i].currentIndex = i;
                groups[i].update();
            }
            this.emit('afterUpdate');
        };
        ;
        DisplayList.prototype.renderWebGL = function (parentContainer, renderer) {
            parentContainer.displayFlag = PIXI.DISPLAY_FLAG.AUTO_CHILDREN;
            var groups = this.displayGroups;
            for (var i = 0; i < groups.length; i++) {
                var group = groups[i];
                group.renderWebGL(parentContainer, renderer);
            }
        };
        ;
        DisplayList.prototype.renderCanvas = function (parentContainer, renderer) {
            var groups = this.displayGroups;
            for (var i = 0; i < groups.length; i++) {
                var group = groups[i];
                group.renderCanvas(parentContainer, renderer);
            }
        };
        ;
        return DisplayList;
    }(utils.EventEmitter);
    pixi_display.DisplayList = DisplayList;
})(pixi_display || (pixi_display = {}));
Object.assign(PIXI.DisplayObject.prototype, {
    displayGroup: null,
    displayFlag: PIXI.DISPLAY_FLAG.AUTO_CHILDREN,
    displayParent: null,
    zOrder: 0,
    updateOrder: 0,
    displayOrder: 0
});
var pixi_display;
(function (pixi_display) {
    var InteractionManager = PIXI.interaction.InteractionManager;
    Object.assign(InteractionManager.prototype, {
        _queue: [[], []],
        _displayProcessInteractive: function _displayProcessInteractive(point, displayObject, hitTestOrder, interactive) {
            if (!displayObject || !displayObject.visible) {
                return 0;
            }
            var hit = 0,
                interactiveParent = interactive = displayObject.interactive || interactive;
            if (displayObject.hitArea) {
                interactiveParent = false;
            }
            var mask = displayObject._mask;
            if (hitTestOrder < Infinity && mask) {
                if (!mask.containsPoint(point)) {
                    hitTestOrder = Infinity;
                }
            }
            if (hitTestOrder < Infinity && displayObject.filterArea) {
                if (!displayObject.filterArea.contains(point.x, point.y)) {
                    hitTestOrder = Infinity;
                }
            }
            var children = displayObject.children;
            if (displayObject.interactiveChildren && children) {
                for (var i = children.length - 1; i >= 0; i--) {
                    var child = children[i];
                    var hitChild = this._displayProcessInteractive(point, child, hitTestOrder, interactiveParent);
                    if (hitChild) {
                        if (!child.parent) {
                            continue;
                        }
                        hit = hitChild;
                        hitTestOrder = hitChild;
                    }
                }
            }
            if (interactive) {
                if (hitTestOrder < displayObject.displayOrder) {
                    if (displayObject.hitArea) {
                        displayObject.worldTransform.applyInverse(point, this._tempPoint);
                        if (displayObject.hitArea.contains(this._tempPoint.x, this._tempPoint.y)) {
                            hit = displayObject.displayOrder;
                        }
                    } else if (displayObject.containsPoint) {
                        if (displayObject.containsPoint(point)) {
                            hit = displayObject.displayOrder;
                        }
                    }
                }
                if (displayObject.interactive) {
                    this._queueAdd(displayObject, hit);
                }
            }
            return hit;
        },
        processInteractive: function processInteractive(strangeStuff, displayObject, func, hitTest, interactive) {
            var interactionEvent = null;
            var point = null;
            if (strangeStuff.data && strangeStuff.data.global) {
                interactionEvent = strangeStuff;
                point = interactionEvent.data.global;
            } else {
                point = strangeStuff;
            }
            this._startInteractionProcess();
            this._displayProcessInteractive(point, displayObject, hitTest ? 0 : Infinity, false);
            this._finishInteractionProcess(interactionEvent, func);
        },
        _startInteractionProcess: function _startInteractionProcess() {
            this._eventDisplayOrder = 1;
            if (!this._queue) {
                this._queue = [[], []];
            }
            this._queue[0].length = 0;
            this._queue[1].length = 0;
        },
        _queueAdd: function _queueAdd(displayObject, order) {
            var queue = this._queue;
            if (order < this._eventDisplayOrder) {
                queue[0].push(displayObject);
            } else {
                if (order > this._eventDisplayOrder) {
                    this._eventDisplayOrder = order;
                    var q = queue[1];
                    for (var i = 0; i < q.length; i++) {
                        queue[0].push(q[i]);
                    }
                    queue[1].length = 0;
                }
                queue[1].push(displayObject);
            }
        },
        _finishInteractionProcess: function _finishInteractionProcess(event, func) {
            var queue = this._queue;
            var q = queue[0];
            var i = 0;
            for (; i < q.length; i++) {
                if (event) {
                    func(event, q[i], false);
                } else {
                    func(q[i], false);
                }
            }
            q = queue[1];
            for (i = 0; i < q.length; i++) {
                if (event) {
                    if (!event.target) {
                        event.target = q[i];
                    }
                    func(event, q[i], true);
                } else {
                    func(q[i], true);
                }
            }
        }
    });
})(pixi_display || (pixi_display = {}));
Object.assign(WebGLRenderer.prototype, {
    _lastDisplayOrder: 0,
    incDisplayOrder: function incDisplayOrder() {
        return ++this._lastDisplayOrder;
    },
    _oldRender: WebGLRenderer.prototype.render,
    render: function render(displayObject, renderTexture, clear, transform, skipUpdateTransform) {
        if (!renderTexture) {
            this._lastDisplayOrder = 0;
        }
        this._oldRender(displayObject, renderTexture, clear, transform, skipUpdateTransform);
    }
});
Object.assign(CanvasRenderer.prototype, {
    _lastDisplayOrder: 0,
    incDisplayOrder: function incDisplayOrder() {
        return ++this._lastDisplayOrder;
    },
    _oldRender: CanvasRenderer.prototype.render,
    render: function render(displayObject, renderTexture, clear, transform, skipUpdateTransform) {
        if (!renderTexture) {
            this._lastDisplayOrder = 0;
        }
        this._oldRender(displayObject, renderTexture, clear, transform, skipUpdateTransform);
    }
});
Object.assign(PIXI, {
    display: pixi_display,
    DisplayGroup: pixi_display.DisplayGroup,
    DisplayList: pixi_display.DisplayList
});
//# sourceMappingURL=pixi-display.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Grid = function () {
    function Grid(app, x, y) {
        _classCallCheck(this, Grid);

        this.gridThickness = 1;
        var tmpContainer = new PIXI.Container();
        var background = new PIXI.Graphics();
        background.beginFill(0x2a2a2a);
        var fullCellSize = 8 * _config.CONFIG.CELL_SIZE;
        background.drawRect(0, 0, fullCellSize, fullCellSize);
        tmpContainer.addChild(background);

        this.app = app;

        var grid = new PIXI.Graphics();

        tmpContainer.addChild(grid);
        this.drawQuad(grid);

        var renderTexture = PIXI.RenderTexture.create(fullCellSize + 1, fullCellSize + 1);
        app.renderer.render(tmpContainer, renderTexture, false);

        this.gridSprite = new PIXI.extras.TilingSprite(renderTexture, app.renderer.width, app.renderer.height);
        app.stage.addChild(this.gridSprite);
    }

    _createClass(Grid, [{
        key: 'drawQuad',
        value: function drawQuad(grid) {
            var gridThickness = this.gridThickness;
            var fullCellSize = 8 * _config.CONFIG.CELL_SIZE;
            for (var i = 0; i < fullCellSize; i += _config.CONFIG.CELL_SIZE) {
                grid.lineStyle(gridThickness, 0x353535).moveTo(i, 0).lineTo(i, fullCellSize);
            }

            for (var i = 0; i < fullCellSize; i += _config.CONFIG.CELL_SIZE) {
                grid.lineStyle(gridThickness, 0x353535).moveTo(0, i).lineTo(fullCellSize, i);
            }

            grid.lineStyle(gridThickness, 0x1c1c1c).moveTo(0, 0).lineTo(0, fullCellSize + 1);

            grid.lineStyle(gridThickness, 0x1c1c1c).moveTo(fullCellSize + 1, 0).lineTo(fullCellSize + 1, fullCellSize + 1);

            grid.lineStyle(gridThickness, 0x1c1c1c).moveTo(0, 0).lineTo(fullCellSize + 1, 0);

            grid.lineStyle(gridThickness, 0x1c1c1c).moveTo(0, fullCellSize + 1).lineTo(fullCellSize + 1, fullCellSize + 1);
        }
    }, {
        key: 'redraw',
        value: function redraw(x, y) {
            this.gridSprite.tilePosition.x += x;
            this.gridSprite.tilePosition.y += y;
        }
    }]);

    return Grid;
}();

exports.default = Grid;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAhUExURQoNCistKxATECUnJSAiIBYZFhsdGwAAAAAAAAAAAAAAAOjIRBEAAAALdFJOU9HR0dHR0dHTAVGex6ZpjwAAAK1JREFUWMPt11EOhCAMRdFHW4V2/wuWYlzA8EjGGG5N/OKkv0XredSJwvMt+nOIlolM4Ak4rExmXUCbf59Cg0shEkcYA1gAygAK1EJVE1BiOqDEe9UE8j/XswHTNwCjGoASs2YDFjiJSeCkGoAR35oN/g0cVN8AhCqBg5klG2yggmoAQsyaDTawgQ1s4CUAmSA4IODUEtX75Ug1Tl8iv49v4n0Cef7j9+sf9/l/Aed4IrnfN4JwAAAAAElFTkSuQmCC"

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAZCAMAAAC2NtjTAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAbUExURVNTU729vaCgoNjY2HZ2doiIiGZmZkxpcdTU1K7KlVoAAAAJdFJOUzMyMzMzMzMAFxm0sm0AAABFSURBVDjL7cy5DQAgDAPAmDf7T4wEQvSxixTcAGeTZJrAa4C/oAbdANEAJ3CE+Q5A0ASFkCToBE3QCJpgEJIERvhBjmABmNMS8Vi8MHEAAAAASUVORK5CYII="

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAWCAMAAABHYGoGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURUxpcf////////////////////////OxEb8AAAAHdFJOUwBzEDNbBj00d388AAAAP0lEQVQ4y+2QMQIAMAQDNQn/f3In7cxkcJPlgpjNwKlTRPTvQ4HqToSe40LnbCgnovc4mAHd6lL0bgBsWZY5XJVrAI0nbaM4AAAAAElFTkSuQmCC"

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUxpcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOV/WOUAAAARdFJOUwALQVYvAiMGDhahaR58jk45xwbQmwAAAYBJREFUWMPtl82ShCAMhEf5X1B4/6fdDjgXCZCqmdOufdOp/kwyFmlfr0eP/rAMK6HVTTXHNPe2bZ4VfpgzTHW7yTOMqwwz9OPRi04NChkQqj+41ZBcGBCa36/H7AcEQ/7k1gCXiNADnPMhWMkfbUPwzvEFaMmrotkSAAjJygA2hR5AHSRdJIBCJXQ9UAdW7xLAri310AHQQZEBSu2BAeiSJYBMPdwBpo1ADvC3KRIAI5AB6hB4gJIA1AN4AA/gXwAEIcJNAWENCDNAFiyGMjzS6FCNyxJCZA/V97GuVoQQFXusvxeLikeerGibj6hGi6UNIcbjPH8GOs8jxjxYbdcQUAIIJ28/j+PqoF+u13rfQWgIRrDDv/Pr/QoYpRKA4BSrv/ABAz1siDhEyIoYjJTK5EfE2fqI00oAAQgwALkLN3fYyc+GrBbzaA66FEB64bam/udBMaRkweBlbRr7G4EQYADSK5Eb9m0WlglBjIG8n4Xtz+P+5x8c3ScPd/Vt/QJWBiKEEzBzTwAAAABJRU5ErkJggg=="

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACoUExURUxpcQAAAAAAAAAAAHxOAAAAAAAAAAsHABILACEYAAYDAAAAAAAAANyHAOSVANd6AOujAOWbAAAAAPGvAPGvAOSVANBwAMFjAOyrAHxAAKpVAO2oANN0AOqlAOukAMVqAL1kALRgAH9DAMxpAIJCAO2nAM5pAPKxAO+sAM9sAO6pANFuAOukAPGvAOWXANqBAN6LAOKRAOieANV4ANJzAM1nANyGANh8AE6m5q8AAAAmdFJOUwAvFhEaDCIHAQRCUxrw8PDxKDmHwjjI0VJJp8P2ldCclGUs7nrG5bK9cQAAAclJREFUWMPtl2lvgkAURWWfoaggO+5LW1ur3dv//8/6Zh6JiTPDYFISPnj8xrv3+FASYDC4caMDaBEnj0qSuKDN/fioJW6oR8mxBUmk7IfHVoRyAyHJviUJIbJ+vG9NLDGQ6PkKIiIuUNSzaar+ldNpHSqEFQiZ4+ieNP3NpDbMRQFdvHDS5gslxdSCkssFPJyEuks1xJx3sQIh9nUC+1JA7Q+OXoA5m/ZScILPSCcYYU4QePaJoxdgzvZ6KHjn6AWY66XgjTPUCYaY66Xgh6MXYK4LwStHL8Bcd4KxTjBWCn45egHmuhB8cvQCzPVS8MWZ6QQzzIkCJ8dJ1NyPMJU7omCJo6z55pphaikRrA9I1nR7z+rQWhBQZ3O4go0j3Fgca/XUmpUlEwR5234eSASeY5bbh1ZsS9PxJAIrKPM2/byEBQQBOwfTNapvLZXhmuwMBAFbwTX8XZWry3m18w0XF7h8SKK1wZj4/p0C358YdZ+Kj3kgYAammIBEBA5DnfUlCzABN5igAIccGAUm74sCNMBZgCJgEgkwMC3YX9oHARjYEuCwTCkwcPjXQ1/6uI4K5lDi1XWieGNAB7PI4COirJ8dZxoO/ht/qTq7bamCe8IAAAAASUVORK5CYII="

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAgCAMAAACVQ462AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAG/UExURQAAAO3t7c3Nzebm5gAAAI6Ojtzc3AAAAPn5+VFRUenp6U5OTnBwcO/v76ysrMHBwb29vX9/f7GxsZ6enu3t7fDw8PLy8tHR0dfX17a2tmZmZubm5qOjo1paWuHh4VVVVe3t7YSEhF1dXVZWVsbGxujo6GFhYerq6mRkZJWVlXV1dXp6egAAANvb29ra2svLy/f39/b29pubm4mJiWtra6WlpfT09Pf3976+vsfHxwAAAPf39+Li4lBQUPn5+VNTU3p6evv7+8/Pz/n5+fv7+8bGxvn5+VlZWV1dXfLy8vf3919fX7u7u25ubq2trYWFhZKSku3t7ebm5vj4+E5OTpCQkOTk5JiYmK6urt7e3uTk5IKCgmtra4KCgnV1ddfX13JyclhYWNHR0ZOTk9vb23Nzc52dnaamptXV1bOzs729vczMzL6+vgAAAOfn55CQkGpqamFhYXh4eN7e3n9/f6ioqJubm8TExL29vbOzs7a2ttPT02hoaLi4uOrq6r6+vtXV1crKytLS0oiIiJ+fn6WlpaamppSUlNHR0eHh4cLCwo6OjqCgoMvLy9ra2rCwsNDQ0MbGxufn5319fcjIyInNmPcAAACVdFJOUwSEjocHpIkBAsIHxLIOmZGTq5aeCxaDjYuVtwScvYjAEqi7vpAao4W4oa+sGB8kMCEcn6S0VW88Qn4STSq8LbaCQClVNDYnsKtgZLk8k4tvZnk7R8GVMVxKdoabrI2kOJu1RH6Ci4h2WVldTIEMSYujspJEeWZxdYpRfmeacm5MfFV4gZKXgZyJa2RxYYVObHJpWqCKgSkhUwAABB9JREFUSMeNVf0/mnsYfmxe8lYZrZ7ESoxKIUROyTabVZs5TbYiFh01EnK8n1Ih8hJmf/Cu7/fp5ZFz9jnXD3z9cF2u+37u+7qZKg7M/0HVv4Dh0ct/i/9QYCg94ngOlD1CJwc8ysr+BEwmk8PhsL9588fnV6+Gxt/1digZ0JUOyu7sfFoCr7cV8Hrx8D7kE4Hx0Xe9EiUxZgcd5NbWylLIKPAIBAJEIB4v8ofGR3v7JPXguwgdbJlMCjwBpNL8i0J6fn4eCHg8nng8brfTAnIG+pQQKLcTfqUMhHbRA4g54PXz5/V1IuHxZDJ2ngFSQRNaH+fo7SIxyz7jQ0iBB7u3t2c2m1OpTCbz40eOTysgAmse8EFnWaFQoVA08mE04ofi9PR0cvIgHN69vT08hMDnvAG0oIlZW/MQvpgVKhqNGk3FY2jOzk5OTiBxsLt7eBgKRSKRIWIAH1FSX8OsjSQI/5lQYdRU9KtUDaVQqfr73W738nL6IBa7uwiFslSAGlA21TAjIynKb9RUqBp0Wm1dCbRane7+ftbtXl9OB2MXK8lkNrLlco3yBMxPRPAPvk5bNyCXy7uKwF/ygbm5+fn7Wd/6+lIweLOyklzdgsAM+KiACHSbYUBhBB/0LmdbSxFtgHNzc3NuY/5b1He8tLSzvf09ubq45ZqZoQbqa2qY7m6zSAwD/Q3aATno6hd8qNUtfufE+5cb36gCEThaXVxcmLH0ooWooBkCYXyBRmJA7gS9+iGsapvNTxWi0bHjy6mr7/tHiwsLFgsqUNYXBE5pBfK2FvBrC6iunp6etlqpwMt/Pv419jcEBvePhmHAYOigFfxWoLaWE7AVBD5NfRncHx5+22Mx6KmBRyW8KCjg9zTl8x0Qga/DH972vNbrJbSCZtpENtfELtIEfhesVr6BsU85gZ7XMCChBgQln5F+RXURNlv+/+cNDH4lBnIVNBOBkkHqcjrb8vD7/RMTPD6vgg6uAgERSEnJKuVGuW5ggEwjBUZo8z3oG/Cf58PAh4IBKsBbJuxSg664DnMEGxuYoY/RMfAvp748NiB4sM5YZuwjt5A6nW6eACMY9fmOjy85fr4DaGFOIB8oYhYmFLlE6KeYpfD56BbsXF0NDu5zBgz6ggFBMdJERILLJKPRiBQ5Qwq41wFC39nGEGMI8waKAky5qeypl2YqUpRluSREip0QLAPpYDCIJcISHJEh5IZI2VQQYEzPc7GMYG0nUcyyJF0nCdJp0G9uEAMrZA2HF7gpLhrgBLi7Ukk1EO6QESGH98LhgwPEWCx2cUFyhKwxXSO9hC9QRQSKp0lGzgsOyfX1NYJ8F7i7QxAmwd9adIFvMfT1SfJDIBCQ40oF6HHENWylBw6XLJFIpFK3JMgRxKFsNkuDbIYGQW6PCL/qF/pRgLKjDerhAAAAAElFTkSuQmCC"

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAcCAMAAADm+0lgAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURQoNCkxpcSEjIQAAABIVEhcZFxweHCcpJywuLA0QDQwNDAMDAwQFBAEBAQAAAAABAAAAAAAAABESEQAAAARiQC8AAAAUdFJOU2kAadFpaWlpaWmBj6HBOLRVF3QsNiIwFQAAAOdJREFUOMullUuSwyAMBUXwjI0+IPD97xrhxEnNrGypN169LmEKPUgnXYlbvkBj0v6JwftbSRjHsl1gGchC9Y+go+B2Cwv0r6ASrdtNVnoNMQU14+oAc30JOrnyZqB+CJB9+cfKOAVVHm6kmoDQL0BK0OU3gHQoHBFwAcafAMggIyIYArksAUqOC2SUAHYExojAfuJg8FN4wN4CAmg7pIb+AbDZW9DACE3ncyby5omOfWALyZc/VtJcaSouA4qeS1Wz4xSU9bvWK929C2zvZjiLRdmK5aIErVhY/zVTSjtca7bZbbB/Yk/T4x2sA+lYEAAAAABJRU5ErkJggg=="

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAcCAMAAADm+0lgAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB7UExURUxpcff399ra2jY2Nra2tsjIyAAAAH9/f5GRkaOjowAAAAAAAAAAAElJSQAAAPPz87e3t2xsbPf392lpad7e3u3t7fPz87W1td/f31tbW+7u7urq6u3t7fz8/Pf394aGhtjY2Obm5paWlsHBwUpKSo6Ojrm5uYODg6enpzPuZk4AAAApdFJOUwCWWQJZWSNZWVkMFAdbG456W80Qc1x4Py1FEamD37Ywlbp0li9aXG5uhg/elwAAAORJREFUOMutk9kOgjAQRdEBl3aYsoOyKeDy/19oikrcEmDqSZr05Z7eCYNl/Y19nCi1GEcVSZztv+JZEpRlpaLlKHGSV1WRfijioFTODKLCyV7iEAX52Z5HZKcwCJzgsJ2Nt02f+fp42DDwTvU9H17zNQvPD3vB7sj88L6/6wv4LXd1GldX6Br27rlupydoDdbX1cczFVwMBcLkD5RaAPw8mApQCxD5AqHnB34FkP3jgl1ByPsg3AqPAnoS4OXlcOMYQBBYBgaQBG9tEGY+L98DSCQQJkkAUBLhj60iWk2CSKL1N24kyBI364dJJgAAAABJRU5ErkJggg=="

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUxpcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOV/WOUAAAARdFJOUwBCUDETIhsCDAZoKnqdijlc5OBSIwAAAepJREFUWMPtl31zgyAMxqcGELDq9/+0S4hY1yaQbne73a75y1aeHw/hLX58vOMd/z/CEd9Sxod4gcPi+SEYYpWz4P7n+VcfcciFduFAGOQQ5bcReoiiB1BbBIAmIZTuoWURigmNwPrmIAMTdAPgYzvJ0YNmgfXQmyVQCYH0LvbmOToiBM2A6680p1hgA9AHgGKBDLg89wFzdiBMBBuYYh8QJ9FCAeTNsN3CliVAGcE0WLb7MElj4BFYAWRBAOTNBuAxiIDRAhg1gLMD3BMgcA5tAM5i+KMAy0JqAix7oQnwfYBvAqY+YGoCDFkcRUBdSKl7okASF1JdynvXAjZp7IVhT500+rTrmwmTsKfUnMk5IUDezkcW05Jalye+HuUDJdQkYJNZ739JNQVBPlTJwroot4PDV8WAeK7zsU5pXNZVmk1IK+opheKxfrdQCLdldBcfzo3LrehVA8fVlk/CU1R91m5XtoCDIAIi1q/qdSl6HIByudbblQmIIMYZ+DNd9K0CweEoCoIYZ6QiR/+kn7Uap5Q4RNgIsROEA59JvlV9bBZZ/kDg3r7HcMh9s8iqZZ53iJi2jSgl8HFCOXYPlkKREMTISOHAR0e9g71WJQZCanhSW+SXYhsewlps/7zcvzAevzh+85PnhfgE81EiL3t2P5cAAAAASUVORK5CYII="

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADYUExURUxpcQAAAAAAAAAAAAAAAAAAAAgEABEMAAAAAAAAAAAAAAAAAAQCAOypANBzAAAAAO6qAOOVANyGAOymAAAAAOCNANR1ACERAPCtAOedAOyoAPGwANaLANFyAKNYAIFBANR1AOypAO2oANNzAOyqAMZlAIlIALleALteAO2nAOecAOSXALFmAMl1ANiBAFEqAM1uAJ5QAK1bAM9qAPKyAM1oAN2IAPCuANBtANJxAOSWAPGwAO2oANR2AOecAO+rAOCNAOKRANuDAOqhANd7ANl/AO+tAOykAIu8CJMAAAAzdFJOUwAJEiwMGCABAgYNQE9LxSbfBig6MxU7O7XEhswS322Ge2HAqx7nZ83erHjsW5HtT+uyO44hL5AAAAK/SURBVFjD7ZdZV9swEIUTL5KlxHYSO/vihOzsnNKWQukGLf//H1UzUlgi2XLPgXP6wH0Knns/jyZCdiqVd73r7dQMB8Ph5aOGw0HY/If4rHdpUG9WMh42bnLUCEvEF72bAvUW9tt/LpSlCRr+URoOkoQ+Xk6SwXBXCWlR/rvUtqUXW1tVzCfQRQMdjcRcT1R5kUOgtPcVdDDKu8PoAA09Ss35UOYLdkxTEkIjgdLGg1CjXTTltvSYAJTOoPaQFH/NCZpmBgIN+ndCW9tG2YKrH1C9gRFU7lo2QAttI60FGoTfhPr2vd4HXxjogAEUDu2AQ/ANdABDcmIHJNgpo/sNsKNrobYd0AbfEdtrQQDg+nWJY6eJRg3AJKDMgSMBbB9Q/QkqA0Bj9fUB3g9QGQAavdcGBIx/ApUBoJGz4P8D/AKV2UhoNABO4XqZrQy+UwMg+i3UsQM64IsMgBMoTO2AKfhODIDje6HIDojAd7wPEBuJQOHefqShjRh2ohPdCs1tgDm4IkcHVJ0JlG4tY+ygaeIY/hsdfwy1cfGDRXp8A4Bxf/IFFBU92iK0THyuHSiBGAKR5Sj/4aoMRIxAPxPFGrrnaBjnzKEzxvJ5F1awf66LIXCfrK6k5qYXjLkqrojPxQj0c91z/HiiTFfRtPMM0upMo11lEvv6CuQauEPi1fJDoZarmDi8agDIKRD3bF2UX5+5RE5AfzwHDBZB3DRbfszRMksh7zG9AdUCR0ItW5vi66yGeW5sAAhMEuK0W6tnF5vNU3azucjqtW4ayzzLeUcKdgRXIGr1F6qJuLvLB3mvaUDwHES4KUB26qapi3HHy88rAjbhExILiKCAxIc4JsSXt8/PA0E2wR1kPJdIO1zdvuhlWRAAgQygSMFnkYZ4cf4JgRCPK3kYLhNXCMV4KUzTSjlRqUBJ/fk2v+/+Atixq8wekOkvAAAAAElFTkSuQmCC"

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAAAcCAMAAACXr+e7AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA8UExURf///////////////////0xpcf////////////////////////////////////////////////////////Fj88YAAAAUdFJOUwkCHmUOAAYBGRQiWXB/j59LKj4z76meNAAAAoVJREFUSMed1ut6gyAMBmAPVEFtV9v7v9dBSCAJoXWLP/Y8rYe3XwJuuBk1GrVcKuPC2/ca4JHLMgzOuRD8NG3bdp7v9/v1ej1j7fs+z/MR657qYRd8d48nxXPjFXu8MF7/irc5z3jDafLehxDiM9wQi5FXQKz5Zw5g8FMinEB4cQIT/Dx+RMUPCuQAR1Y8SUEMpRgXSgoQZAhe5UCGQtCAKmGMmRhZ8eaKILIoiJHagQgKQuXw+GxQip0rMAvfyQIRCyJqN979ZnxJokTx5FH0sshTMawr9APm0sNcGu0QQ9nMBB/OQ7UDk0gIloWIAhCUBEXBG6IXR2d53OvyYOuDBYFRTHYUElGWaOkIZ5ADNXdZBwo4gXLISaglUqOAdix1n8iK0hLWFIQkC2iIdNzp85kThCHd0W6IQmA/iiIx6mhkRoWowm93TcB5yEHwKBCR1we0YyyIRlGWSXWAJR1H/lM+zGfpHDZWdhI2ghQ4oZaiLU1gi5Mppmav6CK4giE+MfaZIZ5/RMRdc4W9Qrwoh1IOBhbKR2JSGpW+CR7Pg4c4epIo+bZND84vsIoYO4hQy3eLneRQMaTDQuCra7UQy/gZ4fNhxIAHGUIvCSOIBqEM8FOcVFyJgiVRns4No+qGmUQdBscMIOgqYFwqIphJqP+/bIRpCJdywLao0VQz8SWJUSM0gT1rgkVcyk+No07FJQNPojEYq2Lqlh6NRrFYBoGoI8EMri/YytFEQmHohizWRLQIFoTcHjhhM0vEIbK4EIRoR0mC5sG1QWyWAgMRDVFbhSIIAyCMKIZ2KmsjviQhg3BmL0ZuKIjVXKI0FnIopIPmwltB2BuEzAERF2v9Urf/1i/96mq1C9ElQQAAAABJRU5ErkJggg=="

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURQoNCiosKhsdGxEUESMlIwAAAOoC0TkAAAAGdFJOU9HR0dHR05YLaDkAAABiSURBVFjD7c9RCsAgDATRmNX7X7lRKj3ACELZybePNQYsRkMZMLCBTq6AjlrA/QU/ABJcAUne5xmAZOAFBG4CAgNUQDmgCQh+QeILDHAgwBUQqAWQCWcWGDBgwIABAx8AewDHbxlHKFlnsgAAAABJRU5ErkJggg=="

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABmUExURUxpcQAAAOylAAAAAAAAAAEAAAAAAAMCAAAAAHdHAAAAAIxUANWXAOKRANh+AAAAANBxAAAAANmKAMtnAAIBAGI3AM1oAPGwANBsAPCtAO6pANd9ANN0AOCNANyFAOebAOqiAOOUAEABBtYAAAAWdFJOUwAv8EEXDCIBBhtTFhDx8RL0OUneZh+Joj6HAAABSElEQVRYw+3Wf2vCMBDG8TZNTFzU/pIt27qtvv83ubvYyWhyzQUqFPHrf3rPB0EFi+LZs1XrxBs70UWAjD0I4f7wntVhi8BHVhQglFn+rIwScUBPgEl92mYCdAiM8BDp7wsAYxQYMQ7gD+eAzgf0DLB5gF0dMPYH4wD+0Jo7Acc0cCSAfR6wD4ELxgH84SaBL4wD+MPHBL4xDuAPKeCUBk7bBT4xDuAPHxQY4MEDhigwYBzAH1JAkwaaLQOOC7go4LBGpvay8YckcJZ6MXmmAOuysncAXrMKAO0BxxrjVfj/wPQ5b6A3IdBlCH03B1BQqpa7smyr6oWoqtqy3MlaqWCPwFVAogUkDJ6G+XUfAyYBCDDiwUvyb68LQgACjWjwUk3tEQABCDAQiVTjGua4DwEvIIEGmZnmOvpD0zeDTtPzf8athSdX6xe8HG4gtxGrKgAAAABJRU5ErkJggg=="

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABECAMAAABAkGBQAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAADlBaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA0LjEtYzAzNiA0Ni4yNzY3MjAsIE1vbiBGZWIgMTkgMjAwNyAyMjo0MDowOCAgICAgICAgIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eGFwPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPHhhcDpDcmVhdGVEYXRlPjIwMTMtMDMtMjlUMjA6NTk6MTEtMDQ6MDA8L3hhcDpDcmVhdGVEYXRlPgogICAgICAgICA8eGFwOk1vZGlmeURhdGU+MjAxMy0xMC0wOFQyMjoyMjozNS0wNDowMDwveGFwOk1vZGlmeURhdGU+CiAgICAgICAgIDx4YXA6TWV0YWRhdGFEYXRlPjIwMTMtMTAtMDhUMjI6MjI6MzUtMDQ6MDA8L3hhcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4YXA6Q3JlYXRvclRvb2w+QWRvYmUgUGhvdG9zaG9wIENTMyBXaW5kb3dzPC94YXA6Q3JlYXRvclRvb2w+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIj4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHBob3Rvc2hvcDpJQ0NQcm9maWxlPnNSR0IgSUVDNjE5NjYtMi4xPC9waG90b3Nob3A6SUNDUHJvZmlsZT4KICAgICAgICAgPHBob3Rvc2hvcDpIaXN0b3J5Lz4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhhcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIj4KICAgICAgICAgPHhhcE1NOkluc3RhbmNlSUQ+dXVpZDpBQTYwNzZGRTg4MzBFMzExQkE2Q0FGQTA3QjM1QzQzQTwveGFwTU06SW5zdGFuY2VJRD4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIj4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOk5hdGl2ZURpZ2VzdD4yNTYsMjU3LDI1OCwyNTksMjYyLDI3NCwyNzcsMjg0LDUzMCw1MzEsMjgyLDI4MywyOTYsMzAxLDMxOCwzMTksNTI5LDUzMiwzMDYsMjcwLDI3MSwyNzIsMzA1LDMxNSwzMzQzMjs1MDJGNEQ1MzIyNEVDRUUxRTIzNTYxOEVDOTcwOEQyMTwvdGlmZjpOYXRpdmVEaWdlc3Q+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xMDA8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+Njg8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6TmF0aXZlRGlnZXN0PjM2ODY0LDQwOTYwLDQwOTYxLDM3MTIxLDM3MTIyLDQwOTYyLDQwOTYzLDM3NTEwLDQwOTY0LDM2ODY3LDM2ODY4LDMzNDM0LDMzNDM3LDM0ODUwLDM0ODUyLDM0ODU1LDM0ODU2LDM3Mzc3LDM3Mzc4LDM3Mzc5LDM3MzgwLDM3MzgxLDM3MzgyLDM3MzgzLDM3Mzg0LDM3Mzg1LDM3Mzg2LDM3Mzk2LDQxNDgzLDQxNDg0LDQxNDg2LDQxNDg3LDQxNDg4LDQxNDkyLDQxNDkzLDQxNDk1LDQxNzI4LDQxNzI5LDQxNzMwLDQxOTg1LDQxOTg2LDQxOTg3LDQxOTg4LDQxOTg5LDQxOTkwLDQxOTkxLDQxOTkyLDQxOTkzLDQxOTk0LDQxOTk1LDQxOTk2LDQyMDE2LDAsMiw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwyMCwyMiwyMywyNCwyNSwyNiwyNywyOCwzMDs4MzVBODZGNUU5MzA4NDEyRThFQkI5QkY2NTgxOTFDNTwvZXhpZjpOYXRpdmVEaWdlc3Q+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+kOtRoQAAAAlQTFRF////////////jkrl/gAAAAN0Uk5TTEEutkLD8QAAADtJREFUWMPt2TEBADAMw7Ck/EEXRbdHJiAAzvS8SXNeIRAIBAKBQCAQCAQCgUAgEAgEAoFAID+QF7tpAbbzAVEeJfPKAAAAAElFTkSuQmCC"

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAGUExURUxpcf///5rihw8AAAABdFJOUwBA5thmAAAAFUlEQVQY02NgZECF6ACb2HBSgeZ/ABEAAB9oGNPNAAAAAElFTkSuQmCC"

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA5UExURUxpcf///////////////////////////////////////////////////////////////////////9URaEsAAAASdFJOUwDqVAtDZwkEbdRy9DjjhA3Jl0XZ7GAAAAB1SURBVBjTXY/bFoUgCEQhwQtqevr/jz2zKkvjSTbjwBCd1UQcTeWNOfq3D5Z/1mMYfbN8CEmKbcz5AKAtXRpvuaZUMACBj4NebymII4Feh/nOQqV+gFdev4CspnjouhaL9DysxycONPvWNUzhtNY5HEgpt/4PXUQEXmtF8J0AAAAASUVORK5CYII="

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUxpcf////////////////////z8/P////////////////////////////v7+/////////////////////7+/v///////9PElHIAAAAWdFJOUwBy0URl6gMLbAb0P1fjKddLhMk0H5cdVNl8AAAAhElEQVQY01WPWQLDIAgFUZElLjEx9f5HrWZpLH8OAzwBzmIXGKZi471MRM3yMbvo21+ao2IfR41vzQGV9XJ6P1nrjoPjOpzhCzEiZjpJ6D5CFiAF3XyAkAaoCEAXYPEdsPmNgOJYWnLmeB9WvM/aJxpjDwZuf8N3Z4tT9EFSkv/v1nq/vw4JBeFpPdoYAAAAAElFTkSuQmCC"

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAERUExURUxpcSEjJQoLDQAAADg5OgAAAAAAABcZG4+bpQAAAFJTVRseIWp4hNXY25WVl1tbXcTU47XH12dnaNTj8U1NTrKytIWUopKhrZSTlSwxN7fEz6WutgAAAXV1d4mMkICSonuCiLq9wZevwrq6u5WVlrO6vw4RFI6jswAAANPT1MvN0Ojo6tXV1p+foMnJyuXw+P///9rq9dLb5LvH0b7I0bjCyvX9/dbf6c7V3Nby9Zado+71+cnP1drj7dbl8sji8LPCzbbF0rzAwsTP28HCxOjo6sDN1urt8YKIjamqq8TIzczLzcfV3drc4OHn7624wd/j6czu89Dm8svX5MjT3rrR5YqSmK+7x42erXmBh42Pkp+ibRcAAAAvdFJOUwCuWUIPHRgGDU89n+fF0yTlz0Xrjfig3E93xopsH/fqKvb8zHKgXP444HzroSjQ72xfpQAAAL9JREFUGNM9j9UWgkAARDEAsbu7210JBRQJu7v+/0NEF5y3uQ93zmDYN51219N0YP84W2ClAo/d7PaGCF5vwFVMUJ4twFLgxF7eACUdrFRO5FKoZwosO1/eaXqbNJTCgWUYhlbkGPkD8c3uuO99E0LLwemwPxiPIYR+BHyRkU4GEoQB5CC9a530JZ6PGrNhldGulzM/SSApac2y9FybnHJpAgGbRXjIyq1ooYw3BOVyP2tuF4WbZ0jcVrXW8Z/hA4K9HB5u8cRUAAAAAElFTkSuQmCC"

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAE+UExURUxpcQAAAAAAAPP2+AEDBAAAAH6Che/y9AAAAAABAert8KmwtNzg48PJzeDn7NLZ3sHIzI6SlcfP05SboNHZ4Pz8/dDQ0cjIyaWlp3WCi5Sfptvg5d/k56amp+zw8paeoqKprgABAaKwuZijqoiRlt3h5ZCXnLu+wJqeom5wcZulq7a5u66xswIDBXd+gwQFBQAAAMnP1FtbXK+ytDtDSI6Oj8PQ2aWyui81OQAAAJ+fn7rGz11mbMfP1ff6/LbDy3R2eCIlJ9rg5cTL0IyXnrO2uc3O0Gxub83T142YoPX4+nd2d9Xf5qOvt6SzvCswNKOrsD0/Qujs7qWzvPj7/VZaXVleYq6ytXF0dZaanKauswAAAJGYm3l6e2JkZbvBxfv+//z//////+zz+Ojv9Pj8//T4/Pf6/uPr8e/2+nAynPkAAABgdFJOUwAMc/9YAwf9GivU1OPe/PXw4fgNTDYeMCFJjqz7Q/fJ1yHS1LLsvIzXweHt7lDgQjWmH2xSP+HJfX0xSxPLueVtlc+4yeDvLuvQ3Un24d2hzES+4M2SxtqR3dtu5MOl8Zx6aXAAAADoSURBVBjTNY5FdgNBFMT+MKMhZmYMMyd2mJm7e9D3v0BgHO1KC70CSMmnclO+zzZvtxfglxnGcxUGGV2MspEQAvdaQMbIQ3N/IrVSuaxd3FWKO8sZiLipq1pDVQ9i/FScIawriOzDP3nHOS9N/K1o8Uv53cNqtXbSaRytJxIxSDKBW8wJx62CoI0DJg7Jgu8oAqo/eVgzkR+H+ZwTlvTQbOnha8+dbACfXlzdu3p8twYD6yWT3vzJUhJLtwn+6mHyTHHAzdJr9NsHwWYXkzYrAidKUln8NOyOZdsPIjX9JrHscNjvlwG+Acc/J1fp96B0AAAAAElFTkSuQmCC"

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAADrYaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTMtMDktMTJUMTQ6NTg6MzUrMDE6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDEzLTA5LTEyVDE0OjU4OjM1KzAxOjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxMy0wOS0xMlQxNDo1ODozNSswMTowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6NGJiZmNmMjctMjJhZS1lNTRhLWFkMzUtNDUxYzI4YzJjNmI1PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjE2NWM3OWI0LTdkZDEtMjA0NC1hYTMxLTVjY2I4ODE5N2EzNzwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjE2NWM3OWI0LTdkZDEtMjA0NC1hYTMxLTVjY2I4ODE5N2EzNzwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDoxNjVjNzliNC03ZGQxLTIwNDQtYWEzMS01Y2NiODgxOTdhMzc8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTMtMDktMTJUMTQ6NTg6MzUrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjRiYmZjZjI3LTIyYWUtZTU0YS1hZDM1LTQ1MWMyOGMyYzZiNTwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxMy0wOS0xMlQxNDo1ODozNSswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICAgICA8cmRmOkJhZz4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjQ0RUY5Q0RERTcxM0UzMTFBQUEwRDA3Q0M5OTJFOUE3PC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOkJhZz4KICAgICAgICAgPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjExPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjExPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz54Vn5HAAAADFBMVEX////////////////1pQ5zAAAAA3RSTlPmSUrgqzQOAAAAIElEQVQI12NgZGCGAAZGBhgTyEEwgRxqsZHNZ4LbywQAVeYBTunh2dQAAAAASUVORK5CYII="

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAADrYaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTMtMDktMTJUMTQ6NTc6NTYrMDE6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDEzLTA5LTEyVDE0OjU3OjU2KzAxOjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxMy0wOS0xMlQxNDo1Nzo1NiswMTowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6YTQ2NjkyZjItNDkwMy1lMDRkLWJkMjYtZWRkYjgxMTcyYWY3PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOmNiZTNiY2I0LTQ5NTItNzU0YS05ZTg0LTViOTQwMDhhOTk1MTwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOmNiZTNiY2I0LTQ5NTItNzU0YS05ZTg0LTViOTQwMDhhOTk1MTwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpjYmUzYmNiNC00OTUyLTc1NGEtOWU4NC01Yjk0MDA4YTk5NTE8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTMtMDktMTJUMTQ6NTc6NTYrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmE0NjY5MmYyLTQ5MDMtZTA0ZC1iZDI2LWVkZGI4MTE3MmFmNzwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxMy0wOS0xMlQxNDo1Nzo1NiswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICAgICA8cmRmOkJhZz4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjQ0RUY5Q0RERTcxM0UzMTFBQUEwRDA3Q0M5OTJFOUE3PC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOkJhZz4KICAgICAgICAgPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjExPC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjExPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz5vgBboAAAAGFBMVEXs7Oyio6Kio6IgISD///8qKyqjpKOio6JqXyYkAAAAA3RSTlP9fX8dQU9LAAAAOElEQVQI132NSQ4AIAjEwGH5/48dIRJPzqlNSBEV64nKRQoxHIAHxewgpRi9L7/3WZ3s6PTX/F0bbNIBqD8gB1AAAAAASUVORK5CYII="

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAMAAAAVv241AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURcnJyUxpceXl5ZmZmf///4AVco4AAAADdFJOU1YA3B0iCCMAAAA9SURBVAjXdc9JDgAwCAJAqvz/zXXpQg/lNolBxZAAnkHDjaS14KyUNkoHqYuQIPSBjmmBVq+les5zqL4wAdDAAf0g349DAAAAAElFTkSuQmCC"

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAMAAAAVv241AAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAYUExURf///wAAAExpcf///87Ozv///+7u7v///9vEVVMAAAAHdFJOU00aAOVf7U4uAOatAAAASElEQVQI123PQQ7AIAhE0U/BcP8bV1DrLMruBQIDjxSMzBwseJgZ3iKtKpILo3TQvQ/Vuyj9Q8eQBbqadbTjxI6Dz6C+g+oLL6tpAZ+WeZkZAAAAAElFTkSuQmCC"

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAALCAMAAACXmSduAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAEWhaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA0LjIuMi1jMDYzIDUzLjM1MjYyNCwgMjAwOC8wNy8zMC0xODoxMjoxOCAgICAgICAgIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ1M0IFdpbmRvd3M8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTMtMDUtMDlUMTU6MzM6MjYtMDQ6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNC0wMi0xMVQxNjo0ODozMy0wNTowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTQtMDItMTFUMTY6NDg6MzMtMDU6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIj4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHBob3Rvc2hvcDpJQ0NQcm9maWxlPnNSR0IgSUVDNjE5NjYtMi4xPC9waG90b3Nob3A6SUNDUHJvZmlsZT4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyI+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6RTcwNjk2MDA2NjkzRTMxMUFEQzQ5MzFGOUJGMzlENDE8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPnhtcC5kaWQ6QTZFNTQ5NUI0MzkzRTMxMUI4ODJGQUVBNEREQ0QyNUE8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDpBNkU1NDk1QjQzOTNFMzExQjg4MkZBRUE0RERDRDI1QTwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpBNkU1NDk1QjQzOTNFMzExQjg4MkZBRUE0RERDRDI1QTwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0wMi0xMVQxMjo0MjozNi0wNTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENTNCBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y29udmVydGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpwYXJhbWV0ZXJzPmZyb20gaW1hZ2UvcG5nIHRvIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3A8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOkE3RTU0OTVCNDM5M0UzMTFCODgyRkFFQTRERENEMjVBPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAyLTExVDEyOjQyOjM2LTA1OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M0IFdpbmRvd3M8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOkU2MDY5NjAwNjY5M0UzMTFBREM0OTMxRjlCRjM5RDQxPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAyLTExVDE2OjQ4OjMzLTA1OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M0IFdpbmRvd3M8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+ZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+Y29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOkU3MDY5NjAwNjY5M0UzMTFBREM0OTMxRjlCRjM5RDQxPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAyLTExVDE2OjQ4OjMzLTA1OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M0IFdpbmRvd3M8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHhtcE1NOkRlcml2ZWRGcm9tIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgPHN0UmVmOmluc3RhbmNlSUQ+eG1wLmlpZDpFNjA2OTYwMDY2OTNFMzExQURDNDkzMUY5QkYzOUQ0MTwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDpBNkU1NDk1QjQzOTNFMzExQjg4MkZBRUE0RERDRDI1QTwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOkE2RTU0OTVCNDM5M0UzMTFCODgyRkFFQTRERENEMjVBPC9zdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8dGlmZjpOYXRpdmVEaWdlc3Q+MjU2LDI1NywyNTgsMjU5LDI2MiwyNzQsMjc3LDI4NCw1MzAsNTMxLDI4MiwyODMsMjk2LDMwMSwzMTgsMzE5LDUyOSw1MzIsMzA2LDI3MCwyNzEsMjcyLDMwNSwzMTUsMzM0MzI7ODFCMzYyMjUyNEVDNDBGNkMzRDY5MEJCMkQwQ0EyODk8L3RpZmY6TmF0aXZlRGlnZXN0PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTU8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MTE8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6TmF0aXZlRGlnZXN0PjM2ODY0LDQwOTYwLDQwOTYxLDM3MTIxLDM3MTIyLDQwOTYyLDQwOTYzLDM3NTEwLDQwOTY0LDM2ODY3LDM2ODY4LDMzNDM0LDMzNDM3LDM0ODUwLDM0ODUyLDM0ODU1LDM0ODU2LDM3Mzc3LDM3Mzc4LDM3Mzc5LDM3MzgwLDM3MzgxLDM3MzgyLDM3MzgzLDM3Mzg0LDM3Mzg1LDM3Mzg2LDM3Mzk2LDQxNDgzLDQxNDg0LDQxNDg2LDQxNDg3LDQxNDg4LDQxNDkyLDQxNDkzLDQxNDk1LDQxNzI4LDQxNzI5LDQxNzMwLDQxOTg1LDQxOTg2LDQxOTg3LDQxOTg4LDQxOTg5LDQxOTkwLDQxOTkxLDQxOTkyLDQxOTkzLDQxOTk0LDQxOTk1LDQxOTk2LDQyMDE2LDAsMiw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwyMCwyMiwyMywyNCwyNSwyNiwyNywyOCwzMDtFMjAyNjYxQ0Q1MjVBNUM5NUQwNEM5QjU0MERBRTM2RDwvZXhpZjpOYXRpdmVEaWdlc3Q+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+mUsOagAAAC1QTFRF////////////TGlx////////////////////////////////////////////GIxUBQAAAA90Uk5T/vT6AGfJywZesZKVNEsYc2FbFQAAAFtJREFUCNc9jkkOwDAIA22WZm3//9xCktaHSDMRYKjaRfAyXYEOigjAsdk2itDqE+wLU3j1ouDPvNEUS2SICVSQRzD/S8wvEY/XVnL/F5sl7/eD/fRR8+jnp98LpjIB50LK5MMAAAAASUVORK5CYII="

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAALCAMAAACXmSduAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAEWhaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA0LjIuMi1jMDYzIDUzLjM1MjYyNCwgMjAwOC8wNy8zMC0xODoxMjoxOCAgICAgICAgIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ1M0IFdpbmRvd3M8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTMtMDUtMDlUMTU6MzM6MjYtMDQ6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNC0wMi0xMVQxNjo0ODoxNi0wNTowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTQtMDItMTFUMTY6NDg6MTYtMDU6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIj4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHBob3Rvc2hvcDpJQ0NQcm9maWxlPnNSR0IgSUVDNjE5NjYtMi4xPC9waG90b3Nob3A6SUNDUHJvZmlsZT4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyI+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6RTUwNjk2MDA2NjkzRTMxMUFEQzQ5MzFGOUJGMzlENDE8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEb2N1bWVudElEPnhtcC5kaWQ6QTRFNTQ5NUI0MzkzRTMxMUI4ODJGQUVBNEREQ0QyNUE8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDpBNEU1NDk1QjQzOTNFMzExQjg4MkZBRUE0RERDRDI1QTwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpBNEU1NDk1QjQzOTNFMzExQjg4MkZBRUE0RERDRDI1QTwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0wMi0xMVQxMjo0MjoyNS0wNTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENTNCBXaW5kb3dzPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y29udmVydGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpwYXJhbWV0ZXJzPmZyb20gaW1hZ2UvcG5nIHRvIGFwcGxpY2F0aW9uL3ZuZC5hZG9iZS5waG90b3Nob3A8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOkE1RTU0OTVCNDM5M0UzMTFCODgyRkFFQTRERENEMjVBPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAyLTExVDEyOjQyOjI1LTA1OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M0IFdpbmRvd3M8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOkU0MDY5NjAwNjY5M0UzMTFBREM0OTMxRjlCRjM5RDQxPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAyLTExVDE2OjQ4OjE2LTA1OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M0IFdpbmRvd3M8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+ZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmRlcml2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+Y29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmc8L3N0RXZ0OnBhcmFtZXRlcnM+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOkU1MDY5NjAwNjY5M0UzMTFBREM0OTMxRjlCRjM5RDQxPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTAyLTExVDE2OjQ4OjE2LTA1OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ1M0IFdpbmRvd3M8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHhtcE1NOkRlcml2ZWRGcm9tIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgPHN0UmVmOmluc3RhbmNlSUQ+eG1wLmlpZDpFNDA2OTYwMDY2OTNFMzExQURDNDkzMUY5QkYzOUQ0MTwvc3RSZWY6aW5zdGFuY2VJRD4KICAgICAgICAgICAgPHN0UmVmOmRvY3VtZW50SUQ+eG1wLmRpZDpBNEU1NDk1QjQzOTNFMzExQjg4MkZBRUE0RERDRDI1QTwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgICAgPHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOkE0RTU0OTVCNDM5M0UzMTFCODgyRkFFQTRERENEMjVBPC9zdFJlZjpvcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDwveG1wTU06RGVyaXZlZEZyb20+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8dGlmZjpOYXRpdmVEaWdlc3Q+MjU2LDI1NywyNTgsMjU5LDI2MiwyNzQsMjc3LDI4NCw1MzAsNTMxLDI4MiwyODMsMjk2LDMwMSwzMTgsMzE5LDUyOSw1MzIsMzA2LDI3MCwyNzEsMjcyLDMwNSwzMTUsMzM0MzI7Qzg1MjZCRTg1RThFRTYyOEFFNTZCOEExNjVDMkNFNUY8L3RpZmY6TmF0aXZlRGlnZXN0PgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTU8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MTE8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6TmF0aXZlRGlnZXN0PjM2ODY0LDQwOTYwLDQwOTYxLDM3MTIxLDM3MTIyLDQwOTYyLDQwOTYzLDM3NTEwLDQwOTY0LDM2ODY3LDM2ODY4LDMzNDM0LDMzNDM3LDM0ODUwLDM0ODUyLDM0ODU1LDM0ODU2LDM3Mzc3LDM3Mzc4LDM3Mzc5LDM3MzgwLDM3MzgxLDM3MzgyLDM3MzgzLDM3Mzg0LDM3Mzg1LDM3Mzg2LDM3Mzk2LDQxNDgzLDQxNDg0LDQxNDg2LDQxNDg3LDQxNDg4LDQxNDkyLDQxNDkzLDQxNDk1LDQxNzI4LDQxNzI5LDQxNzMwLDQxOTg1LDQxOTg2LDQxOTg3LDQxOTg4LDQxOTg5LDQxOTkwLDQxOTkxLDQxOTkyLDQxOTkzLDQxOTk0LDQxOTk1LDQxOTk2LDQyMDE2LDAsMiw0LDUsNiw3LDgsOSwxMCwxMSwxMiwxMywxNCwxNSwxNiwxNywxOCwyMCwyMiwyMywyNCwyNSwyNiwyNywyOCwzMDtFMjAyNjYxQ0Q1MjVBNUM5NUQwNEM5QjU0MERBRTM2RDwvZXhpZjpOYXRpdmVEaWdlc3Q+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+P56vBQAAAFRQTFRFTGlxKioq////0tLS8vLy/v7+8fHxBAQEAQEB/Pz8BgYGzMzM////4ODg4eHhb29va2tr////CgoKnp6e////////y8vLoaGh09PT////////////imVv1wAAABx0Uk5TAIr8hLXYxICAzoC7Wp3AoKAFgLSxO7u0gxgJyUsWScAAAAB1SURBVAjXTY5ZEsMgDENtg1kMCQQKSdv737NOmulUf88aSwIAY5nYGri1RDf7dHH5oolrxYB1jSY/la2rEkLw1dn8fgHwRK8ccHKmxwbUxV/qNIgycMLroP44fetKE5FW9F/xzC/YsGj+2O7+tKdfP8Dxv+8DvnoFHHaHTxUAAAAASUVORK5CYII="

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACHUExURUxpccrKygAAALu7u21tbcHBwfn5+QAAAH5+fgAAANDQ0OXl5cbGxsjIyAAAABsbGwAAAN/f3+Dg4AAAAAQEBOnp6ZycnLOzs/z8/LW1tb6+vv///4iIiLS0tAAAALi4uK6urtTU1OHh4QAAAEtLSysrK8jIyDQ0NIyMjIqKirS0tAsLC////74IqPcAAAAsdFJOUwBZeyUJNvNPAx+Evo5tVzwvkKMTZ86oPvlpPvQUQkGvE3abmFiororLmeuviXQjegAAAIRJREFUGNN9jtkSgjAQBJcA2YQrQRAvFA/w3P//PohBDWUV89ZTtT0L8EvkO+Cn+Zn46ThikJNNJCzHFHuhxxehZUgoMfVXUa+Xjg1W25Q2brEbXPvZ4u/kLRXygFl2YSjH2TtDpdoSdWH2dfmcPCYkvprp66DZ7dFciVeq+IiNtOoGaQ8y1AtTokkGoQAAAABJRU5ErkJggg=="

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADGUExURUxpcSxFg0BhpwAAABUVFQAAAAAAAAAAAFFTXAAAACY/ewAAACUuRHBxcQ4UI8jIyamsrcTExMLP1q2xsj9dnLzAwgAAAEZnrThOf0pstI+Pj39/fwAAAEJtsBUVFa2ur7/BwcbGxt/f3S1FfaenpyIvUTxOdjc3NzpWj0JgpNfX1/r6+urq6ldZWoyPknl8f9HRzwAAAFJUUyIvSxchO////2Oa42ee522l6kByyz9uylKJ112V30p3z0F2x0SAzjVasD5sygUIwsIAAAA1dFJOUwDr5kgYal2JA2T5UhEKK6t2kU9l43By3yXGpT9a7ZVPn17F0slVcJ/ismH7lb+zqrx2hY5nIXmAEAAAAJxJREFUGNNdjtcSgjAQRSNBJYjUAPbee1siApb//ylDmHGC5+2eubN7ERqPUBkH7KEri6YF4MtCcwC8UsO2Ju7fmUUYriilSrtV5Hl257AoShRNiHXGGI9pmjwNIW7vz4MTx69+0UBXXdcrnKkp3m52pwsJapxeQ82FD3A81wtwXvFge6hyCCGi0YXZco+lVWpnEBBT3qliA2m/9AUe8Q9H1H3EXwAAAABJRU5ErkJggg=="

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAADPUExURUxpcSxFg6ampqCgoA0OD0FjqBcZIAAAAAAAAAgKEAQEBAAAAOfn5kZorT49Od3d3T9dniY/eQUFBxofLPn5+BodJDxOdiIvUdnZ2cfGxEJgpDlOfdPT05qamkNDRNra2vDw8CIvS9bW1pKSkqampkpstAAAAAAAACZAfyIiItXV1QAAAOnp6f39/UJtsKampuDg4BkYF9LS0i1FfVxcXFRUVKOjo+vr62NjZf///2ac5j9uymCX4Wui6W6n60d80VKJ10Byy0p2yjVasEF2x4hI00YAAAA5dFJOUwDrHgZM4xSDGWIrd7feCu3j9yJm/nFwVcKZsifchDiAG45CF6fGOlX7iPBi5eDtyfeP7NJNqGP1hA76HPoAAACbSURBVBjTVc/XEoIwEEDRVQgovdoVe+89GJr6/98kITNOOE/JTR52Af4m40CrAmdgYlwKUg/jIXc3Wrg/Lf3Q2gACPTR0HSHLQrMue2i+oziOopCkiIVOEuYIIemXBffzorIs2TtzhZaRvbQruYuvqgs2gFinnr4CRhFEmTp5Z/EucEG9eY8dC1AruEe8lfhJr4e1qZSW28grB34zUA/jP23WGwAAAABJRU5ErkJggg=="

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAA5UExURUxpcf///////////////////////////////////////////////////////////////////////9URaEsAAAASdFJOUwDqVAtDZwkEbdRy9DjjhA3Jl0XZ7GAAAAB1SURBVBjTXY/bFoUgCEQhwQtqevr/jz2zKkvjSTbjwBCd1UQcTeWNOfq3D5Z/1mMYfbN8CEmKbcz5AKAtXRpvuaZUMACBj4NebymII4Feh/nOQqV+gFdev4CspnjouhaL9DysxycONPvWNUzhtNY5HEgpt/4PXUQEXmtF8J0AAAAASUVORK5CYII="

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURUxpcf///wAAAAAAAP///wAAAAAAAP////r6+v///wAAAA0NDf///////wAAAPn5+f///////////wAAAAAAAAAAAPr6+gAAAP///////////////wAAAMDAwPv7+9HR0a6urtPT0////////////////////////zI1CccAAAAndFJOUwDeegolMEnvR/iDjOU/Ypq0G2IiJ1ROGc8w8nhzydeWs96/cA41qgJyZOEAAACcSURBVBjTjYxHEoMwEARHQrKQRMYkk53m/z802FRxdc9lt2t3gJ1XJGqcqDh+09Z5rH5rZrljH9Zmm8rFNt8MGRURKXKkNIVSGaPuqQrDFII9ELf3bn/vKWAYnvUhzX+iKXUiqzIom11MHOVAR089yJETFjINmirRAeqUXOBXEkfI1cP5ucX1G9PO3kFLlxwXVeKkBgJ9wZHLVvQBYkgOKJTf9b8AAAAASUVORK5CYII="

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACEUExURUxpcf///////wAAAP///////////wAAAP///ycnJ////wAAAP7+/rq6uv////////////////////////////v7+////////////////+Dg4AAAAOzs7A4ODgAAAMDAwAAAAP///wAAAHh4eP///////////////////9zc3IeHh////0LO0yYAAAArdFJOUwBJIwvv3j97+BV5btRpMidiG+PntfPyxZaX0UCilJGjZOwhoKpwDrICV45qzCuYAAAAm0lEQVQY042Pxw6DQBBDhy2wyy4dQg8t3f//f4EoSpByyTuNpbEtE/1HmEpnJyPXPUE5iRu9JMsVNtRZqZwRJXK9DwJI4wyQCVUQMYuuyMILiwUqkvCJ3LIMN7sPSQJr/u0d70CQRf3tq2HXL3RBsCyP4B50WP26wY5Gk9cPdhJFUQgx2aH3yBzHWWvOudZ6Ho+GeGu8D6blPzufTSkNo/FLpjYAAAAASUVORK5CYII="

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABaUExURUxpcQAAAI2PkUxMTMLP1q2xssjIyQAAAFZWVsTHyKmsrSUlJcTExN/f3Xl8f9HRzwAAAOrq6gAAAFdZWvr6+q2urzc3NxUVFX9/f6enpwAAAL/BwcbGxv///6l9ipUAAAAddFJOUwBHrA5PZat9BGt2GZHFqrwrlWS/+0+flT/Jcp9eWZFvIAAAAGJJREFUGNOVjkcOgDAMBB1K4pDQe9n/fxMJAjhHVnvxyCMtHTvF8SjGTALWgI2AB3IJ0kKXGQGhTwBz9yXGhL4fPxS2bR0UcylsgSpScgyJVBasU6/EUpfMW9fI7U6lxN95AgxfB9XCSG5LAAAAAElFTkSuQmCC"

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABdUExURUxpcf///wAAAP///////wAAAP///////////////wAAAP///wAAAP///////////wAAAAAAAPLy8v///wAAAAAAAJ+fnwAAAAAAAP///7a2tvr6+unp6VBQUP///3N+CJgAAAAedFJOUwBVh8wzLojed+6Ou3qZqhEHakciQG6/FF1mj/PNoioTkSsAAACLSURBVBjTbY/ZEoQgDAQRxYCAAp57zf9/piTu1r7IA51Q9FSi1O0ZYYUdeuHk4KXo0QktgJkLai+jJY9HZfM3LSJHuelnziCOGi+DTapxFo30YsZ6EV0fvJNXX75DzIh70IdzEd2iDQ9RQj6GN9Aug+FICmtSYQOe0hdsuWL/4CW9SmtOzEVrc7v4CbRjB71aYqoOAAAAAElFTkSuQmCC"

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAASUExURUBAQExpcf///////+rq6uDg4OjBD4kAAAADdFJOU4AAgPb7XH4AAABKSURBVBjTpY9JDsAwCANNsP//5RaDckhPUbkwGhAL4gj8EsCIhkAuWBSY0qZEEbCcS/AlScmuBES6g5wOzQyxZ+wtmi3fO25/eQCnawFBwFcUqQAAAABJRU5ErkJggg=="

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAzUExURUxpcf////////////////////////////////////////////////////////////////Hv/K4AAAARdFJOUwD5Z8MTCizVxqB64n1UOzrHE5MGtgAAAHtJREFUGNNtj9sOxCAIRMELA2q1//+1q7Jt2uzyQMLAwIHoT2RpYEaT7HUKWk8zrRrS7gfE0kV6iQhrRjQeicwoHVFlCq2WOQlMb6ltCjg7uUBDV2ZbRjBgYnwLhluA9gvILb50A/lSP7vq79kNNnIeF9hG1wf673Pv+ABH3AQ1wjSBFAAAAABJRU5ErkJggg=="

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACrUExURZuRb6yqkMi9mwAAALGqizIqFff35gICAPn56cW5lvPz46OghI1+VgAAAL2wjN/YvqyccpqHW6+wmAAAAMDAqsfLu3BrSqSTacC0keXhzKilid7ZwdDIq7OjfPLz4by/qZ6LXwgIALa5osLGtJCCW3VqRKCYd83Rw6+vl8fLubCvlbKqi8nDquzv49HNtMjDqe3w5urt48rFrMfCqMbBpu7z6srGrsbApMzOvWSgAU0AAAAsdFJOU+eo0zitEOc769XjpjEd07RoRtsDV24aVNTioMyyg9/xOjTo77mX5YuP86ld6X44RQAAAJJJREFUGNNdyOcSgjAAA+BIrYjsIW5xrwOKjNb3fzLbkxP0+5FcAnesjKSJtI2wKLIsKxSVzRWr4tnTTOH+H+vfI4K1NE1zoDykG4WvGYahaTLnjuMMKTZ538uCV6ad8h7DS1m7ZPNjjBljrJKYwhMdfl11+GGPnaiFEPUHD2xYgpdfeUBBT+hczhShTQjRW8QO37MYIfXA9lcsAAAAAElFTkSuQmCC"

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAF6UExURUxpcQgIBxsfIYSLkhwcHCcsMB0fIUxYXggICBIUFQAAAHOQpzY7PRoaGQoKCoKJkAAAAAAAAAAAAAgICB4dHQcHBwAAAHSatmaGnay/wszi4xAPDwwMDAcHB36Fi1JZXBEREXCUrlpxg9bp8G2Qqj9UYsHU3Vt1id3w9jpOXgcHB3+GjaGutpqjqRQUE2xzdnR7gWeJomeEmVJldFh2i9ns9cze5uP8/K/Av0dfcNns90ddbwAAABcXF73N13+GjZ2qso+Xn6i0v3F3fI+doWVvcj9FRy8xM9vv/3KWsdzx/+D0/3KVruP4/97z/+v//+P6/3OYs+f//+L2/3GTq+X9/+f7/+T7/3SZtdru/4enwJC209Hm8JCyy3WYstnt+3Wbt3OOoneeu5C10ZCzzpe92ZfA3pC419bp9trv9pa61Y6vyZa40d3y+vD//83h66/G0uH3/MLY4Yusxp+70Jiyw4SkvYuktn6ctK/M3b7a6qPK5czp9arP5zLJsr8AAABIdFJOUwCFCvLcGjQEyxR7/ifXJvFtVmW+28R17ciBiUwts/Dl2edWzdlIxaPXeKnxtKuN7vCmjSqJw8eIj2u7qkHHtd+zv758ttvh26FiP1YAAAH2SURBVDjL1ZNZc5NQAIUhlqSYmEVNE5ulqdbum/u+txogFwKUJQ2yJVVIG7N1V/+79wJJOmrHZ78BXs43h8PcAcP+O27PZTL3iEvjyH0VYs/evSR/kDV1nVdV03wY+mv9rE5RlM7zqmlnY3/EoQWdqlSgwUNUO/Pstzyc1SselO+Y9gJ5MV+KUjuQkQIle268lXih7/hUxjWUyS8FWyPzh4P9/c+IZrPZaNQb9fpXxM9bgbAonx80DxCtVmsP8QXy/ce3p8ErFmXBPRvsejVeByzZO1c4bjoQ7shAlrXD09PjXZ/jwVmbEwThyVAAEFnun1hRy7Ki0eiRxgmSJAnDhscyACIAQq9rHXW7J1ZfEiQFClwwEnsERARQ3I6oKGzflRSPkTAvMwzM25rDsDTNMlqnJ1UR0xFfeM5ARFczYIxgjI5bhbOUrbhvvIYNjOP4adl7alqvCoTtpH8gbzmm7Rh0eQzNOlobcB9xKERCoVXZMGrlWg3d6PIU2nG5GTyOYSRBrgIDxRdBhiHO4GF4lLHYe04U0U6GZZkA9NWAGwof1tbevSkWV1YSicQVj0SiuLm5sfEJCSEyng/n1l9dQ9wcMTFRKpUm18NoJBHP5/Dl5UKhcAOSTqcnh6RxTyBJIv8yl0qlrkOSyeQU5KrHVCr+75/tF7gfpCi1sUILAAAAAElFTkSuQmCC"

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB+UExURUxpcQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYGBgAAAAAAAAAAABYWFgAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAMfHx+3t7ff395+fn4GBga+vr1BQUFpaWjIyMnBwcM/Pz7q6ukVFRZKSkt/f36enpwmTPiQAAAAYdFJOUwAvuY0XAxEeHAlD0fqu4yb8d2jE3O2dWiGyHpYAAAFCSURBVDjLnZPpcoMwDITrI6zMFY4cbgIEyP3+L1jAToDE6Uy7vzyjz7K8kr6+/qKFUmrxMaokjEh6LqoLLzPBcy5SBkj1mpzAovBS3c+Hqg4jH+TN0wMiqQptVSabJaaEIsbbvR5VNAGDnJbHa3v92yLVij1zeBLiYuO7B6CPOaBsfvjJI/8I6DYDDd+VBH7V78AhtoV2HwwLB6DbLah3AEhr7QKqzVBFB0RXJ3AKMLwB5AcncIsNQAh2E2CQ9cQAEvl5BAaZ835tAA9RqV26BcaqBYmjEygjwDjlJ06gSQcfeq+DsyO+D58NlVnrAGphX+jHhb9X0bfiORHE4tePnELfNtOk8NfX+f1kO4n3XrCgPo31NbEPOZt9r+vp+lL2c1Pcm1DMZ9bOFcuiVdeHFU8ZSedmEZHZLPVxN39fzn/qB7n9Mv6k6gJbAAAAAElFTkSuQmCC"

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUxpcQAAAP///wAAAP///////wAAAP///wAAAP///wAAAP///////wAAAAAAAP///////////////wAAAAAAAImJif///9Is1pEAAAAWdFJOUwBJlqxK7iE8ist4Ey97Z7giWNxVBHDnvoiVAAAAWklEQVQY042PSQ6AMAwDW7qlO6v//1REJSA5IOGbR7aVKPVPIQLRMo+h5QErYlYT3O1noIyY3GGJS7kDloMOJ3wBgjxELu6aqLVE2wsOwFdDomK05y1f08efJyRyA/U/x3SCAAAAAElFTkSuQmCC"

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABpUExURUxpcdfYO9fYQtzdWN7eXwAAANbXOAAAAAAAANbXOwAAAAAAANXWNujpk9naSdjZUg4ODgMDA9XWNtXWNuHidLu7Zefoj9/fZtXWNtXWNgsLCwAAAMvMPwAAAAAAAAAAANXWN9PUMNTVNVaWzJ0AAAAgdFJOUwDv/O/pXPg6Hv5MPUsl+vIqB90vwypD3zK/LSP4MHkPPzsgOQAAAH1JREFUGNOFjlkOwzAIBYkdxyZulu579fD9DxnjNKlUVep8ABrBE0T/6Wrl/BGnoTdG8LWG36LabVbBWg2abLoDA5KYagugIToOuYsw2X4WhVROGNV+EXPo9bKEJml9eM8jSwbb9YXbQ4X1ulHsPUavhNa5lxtVhYJ/upiDJmooCCBnkgtzAAAAAElFTkSuQmCC"

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB1UExURUxpcQAAAP///wAAAP///wICAvPz8////////wAAAP///////////wUFBQAAAAAAAO/v7zIyMuDg4P///////wAAAP///////////yEhIfPz88XFxf///////////66urv///9PT0+Tk5AAAAAAAAAAAAP///5y9vTwAAAAmdFJOUwBRBQTmR/Xs8DnetMkWKiLtIN3EDTD4odEK18yAbJK6DNbqb107LI6jDgAAAJBJREFUGNONj8kOwjAMRN3EieNuabov7CD//ycSCioIcWDkyzzLMzLAH1INOSLYIWKarkRclmWwp54of4GvG8FP17YnIaXUBhpEkTSmDc6NhwiGPJd+ri6wWGuPplszyDOAjjMVRfQs9npL2Btj+LHXhVgTAkyh7Er9rJUKR8B3+VzX9QLVudwIJ1HM7H+9egd8tQcxnsWWSgAAAABJRU5ErkJggg=="

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAE4UExURUxpcWd3oENQcXiGpw4SGAAAAFBefBQYIxYbJhkeLA4RGgAAAAMEBgQFB2h7l19vkAAAADtEXQcJDH2Ns6Kx2kpaegAAAAAAAGRxlTA5UZSizIaWw3OEsT1HXSUqOTA4T4aVxF9sjxMXIHGArHWFrVdlilFfgFJef42Zuau53pWhxKq53ae131toiZam0XeFrbXD4UJOb42dxHyMtFNghGl6o4qZw2h0lXSBpmGBn5qp2HSBqBASGYqZxnuKuI2cypam2JGg0WJwllxrkyEmNkFKZm99pG17ooSRvRkfK2d1nZShxpmo0Z2s1X6NswUGCQsOFVhjhFxsln+MuCEnOE1Xd52s3rfE56+95Jqq277L6Zen2bzJ6MjT7LbD46a14Z+w3pOl1pCh08HO6qGx34ubzXyMu6Cw3bex0TQAAABWdFJOUwBbXJYXcV4JBQIPbWIkkHJ2PUWf/RY4L4Mk8tqytK+m59mK8qZFbkfC/tPi9ZDK6eNOxmB1IvmYoEj03YP67+v39cuwRaDHa/Fm8N/04s6HlqZK3lHCs0Y1mAAAAO9JREFUGNNNj9V6wlAQhDdETg5JsOJWoNTdnSoVoN4eSYgCff9HaAI3naud+Wb3/xZgKnFnPQn/NWc7CsCiOnOH+wfJkbMnCGYbhXZ5a4NuK9S0KbVHS2EQP2bsKJ1WVkzTEXPRxomb5bsAODFcjUXnqmdeYjOa8NrwAeXg2iP+KeCoWqTZlwpUbsgkNqM9MkbLUCo1yJ2aSaXyWGSD/mtI6ZJgvqDJ8kXZrRkSGPe3Preqwmfxyr18RipodSuYcGJZ3pjwTksDFK/13rsNP/j6eBqfZwoAkv6my03+25LrTX36HZIA/XQWvpGRlzD8AV3TJh0EZZxzAAAAAElFTkSuQmCC"

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACEUExURUxpcQAAAAAAAP///////wAAAA0NDf////////////////////39/QAAAAICAvj4+AAAAPr6+v///////////////wAAAAYGBgYGBuTk5PX19c3NzRQUFBAQEBQUFP///////////////6CgoAAAAJycnOHh4fn5+QAAANTU1Pv7+////93MhYIAAAArdFJOUwAaO8CxIyr46/Ll27liB/QQ/jAThktMSED0+/wXY34kzKSUFjTUvvRU/fQNJhNlAAAAlElEQVQY023NVxKDMAwEUNu4iWYbCB3Sq+5/v5iSDJnJ/umNtCJkEx3tyE80qlmOPI45z3mAiGoCwDCMDvsg8gATKFhPDOps3lArhEG2dKltc6G1QgAo8hVOMxhzO/shXcx3yKouL6JMEjnBC/pE9NRaUTHqZ9q24zgMD/upTe/onGtk+n0UN8+uu8rNa8oYqwX5nzecgAiSNI5TewAAAABJRU5ErkJggg=="

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURUxpcUx+nUZ0kjY1NWFtgdve30lieDk5OODj5DQ2OOrs7jg5OjU2N+vt7V5pe299lkhWZOLm53mJpUp3kk1+mjk4ODY2Njk7QDk8RDVATDg8RFVhd15shE9VYYaXuERpf1CIp0FogSwrKkx8l0ZOXe7v70RLWCEhIT1abFBabRsqNU9XZkRujUV3lSAgIEBFUA4MCktUZhYlLktUY2V0j2dziGZyh1didH+Qrpitz4qdv4ygw4uSmVBrh9TU08bGxcDAwNbW1rOzs7m4uNnZ2bGxsaO54ru6utLS0r6+vszMzK2trb28vMvLy8jIyK+vroicwomexOTk44yiybe3t4ebv8TExIyhxjE3Q4CSs0FKWuLi4p+z2ougxdzc3KOjo6i/57W1taenpr7U9CsxO11rhFljdaC44j5GVJ+136urqs3OzZGky5+fn6i/4k9acGt6lbrP7Jyy2URNX6zC5cjh+tDQ0N3d3c/PziguOMHCwkxYbSQpMBsgKYGWuJir0qyyvFdlfWV0kHBwbnaHpy8xNYWawN/f3zxZc+Xn51JfdJyqwnKPsBASFaa85tfz/9Lt+Zycm/f+/5mu1CAkLKS521BPT4+Qk6u/3p+y0pOnzYWYvHmLq4uev6mpqS0zPaWlpcnJyWmJqAkJCImIh8rf8CQkJJaWlYuMjKast8nj9OP6//D2+kZQY32PsXyQtarB67jS9a7G6ev1/15+nOfx/0dHR3B1fnmUtqKioZaku2NxjImWqP7//8HS66i51JKlyH5+fklRYFBZZ3CAnbrL5nyImbTF3HOEotnm+TQ8S0VifT8+Pbe7wGVvfoCPpQIBAdTi+bTL71d4lsXNz8fX5Ovu7g4ODXd8hufq6q61wVJwjHCDop6ux259m+Xt97C9z93q8ZyipsDY8G5xdEpVaUxrh0ZMV+Hx8mloZzhAUL7Ey6/C1VZfbX6Mo77I2GOEo3yAicXQ02Jlatnf3aKqsY6csXl5e296i9vj7d3r/q6xtqOsvRQYHy0sLFZsho1oXOwAAADFdFJOUwCzwhFso18EpkukJTSw/o9TrqKJkwgaX3CMgN/uRLl9n3JBp7WzqGhp0eQ60Hd6l7jF1cH0hHtNr+DK1lfg///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Vv0UNQAABLJJREFUOMuV1XdUE3cAwHFaRKBYqm2xOLqsaGuH3fslIWdyudxBEsggwRASyQ4QswwJsgqIUPYKG2TLELBAWYpskCHWvfce3euvXnIh4nt9vvb7173f+/x+73f3fnfn5PSf+9rFxcXNze0ZW9i12wq0Z235+PisWILBL9o7QiMidDpdx9Gj7dscbbe3TV/8Dga/4gRFY1UEVVQE2YvO24nV0hZjh1+WegYEBAQHB2xpjJ7+But24V1fisFoVCpnpvJjnsbgK61i/fz8/OTDB1FHDlEoOGu+0Nx4J9r+zrKorQ7ITZVKpRn01J1HCkjsKj8/Kpp/uHhfRltomyYhauv3iyCZLB19KJuGQcgfraqqigD+VhQa+jj8nBspJ5PlHTnNYyLEVIUFmjL1oRkZobl9KHwKg8/HRMpzNVK5LudiPwG3xZbvsSw9mYzCWHHY1m8fwWL1hEaq0Q1cTAsJsLU7U49uR57IfxyaJ1Jl5+RyeVGaNvyEDY53kNHtqM1qbnyFxgFLrot31g0nSjniqeqa08Fou+P6VGS5WpsXlWCFb2DwObosqq4hW3IugZeeBAbvQgvG/ZSgutCSd3K6ezHkJxUcAsB6iTY9qd53h7VdFNIp8fW8k10CYXeQZs9rdshIyiYSicyGurpCgBJibYcSpHXnVXeFM5mKU7EOyE8SEEloNQ0kosH2dEKoQkBU0JWNDhPjcve8iMFPOEnZJIAIwzSagmjwtUkqSsoF1iFaXOwC/DQwLBswIbTyykoFYvC1ZQBosKJcRBOSFI2xP75gh5ywcII/WygKF5DwRpwN4tgkkaCnXAgBcGPxdwsrcipEeDwegQUwiKdixwznB1jnIWyTEIX2FZcEVojYJhMkpDEJJn8DxUChGAx+CFwJAxCbjcSpHsGwHjYEQYS7MwQIbzTY8oeINCaCDkJnVD+8aof0+/dmEBC6vP8gCLGN1vNvVJpA5SUmhKCdCVyAS5Nn/7YwkVr9wOR5gK2kKqlUpR9yLCcrDUBAEInjnH3XDunmvzrHa9sD83Nq0/B+tnOL/zmztmlvGgAQ4syqs69jcDnDXDTQ1B7IZ1iOjxQare8C/niWLjm/6Wov89bYVPENB4zcN3o1kMHhJ7Sk31birfVy+IxkS2btrSyzTHXjTQx+Ro/kMhioUw+lVx/Cm9DwPamtHEZyRE5TmVamOmyHL9MjW/kMPquPl15dAKN3ij4U0rV4Lp+ebMlN1PIGDy91wFIOg8GaCzpSUEgCmEwmAML1v8Rz6awSeimPx1kEJ1gsenFmlucf9QqiNWFlYc1sKQsdTZTxOCl2+DYrvkVrlojV9/bONSisB5NEFNRc0R+ls1iMxDs8fspyO6Qf+N1TMjzEk0lSr4FCEg2G4fAr2/O5XG5MycgdbdkC9LjAitVIIyIiLAcvXW5ubj5xOvhXXD9PdnNo+L5EEsYrS1m1btlKLycnV3fv1ZvXf7Bm7ccjpa0lg0WW0QO1kwcOnu/tH/tzVnLzQUnKpvffW+fs+EK7Oq/0WOb+kveqDevfWrNWncgtGyzKt+i261pTPtzo4frvn3UvZ+uc1Zs3fITO8dzk7vrkv4CrjXuv3ujl9H/6B1xNJMblMB/vAAAAAElFTkSuQmCC"

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAJYUExURUxpcU5kjwAAAAAAAAAAAAAAAAAAABgdLAsOFAAAAQ8THAAAAAAAAAAAAGV7tEZZgFRmlEJUeAAAAAAAAAAAAQAAADdCYpan2OHh4V1wp2qAvVJklV99q1RolmBxogAAAAAAAT9OdEVVgp2u3X2Mu/j4+NfX1/r6+t3d3WZ7smyCvMbGxl93qVRkkmJ0qODh5Gh/txoaGgAAAHaNyTAwMAQEBGtrbEBNc39/gAsNE1dpnU9hkHyPxWp0mZGg0/////Hx8fDw8MbGxvHx8XSJw0VFRvr6+llrnv///2h4p1paW0pag97e3/39/dPT1TRAYMbGxqWy1HGBtKmopbu6t2F1rTI8WZOSkamvv191rIyRnJ+enmB1q1JklmJ9rOPj4xASHCs1TnCFwbC+5oSVxaq447G/60pVfnKIwpak0W9+r/////7+/vv7/Pj4+Gl/uv39/vv7+2d9ufn5+muBvG6Ev2h/ve7u7vT09WuCwebm5+jo6vHw7uzs7XGGwXuQyfr49mqBvnaLxm2Ew3GIyGJ5ufPy8erq65an4fb293uR0HSLzGV9vV52tIyf23OIxHaNzoCU0nCGxM/U4rG82+jq8W2Fxu7r6mF4tqy20bG71cbM3GZ7tYib2ISX0+/w9IGVzKi12p6s0pus5eLk7Pf18Zinzl12uZCi3aKw1oibzr3H446g0b7G2tve6dLZ64ucycrQ36241LG70WJ6vau54u/y+8vS69je8Nba5MbN5eDm9JOjzbbA36ay0ldvsqSwz7e/1KS06Ky86md+u/z89X+W3IOVxg67koYAAABrdFJOUwAiLoeAeI4IA5kPSz1t4hBgMCVjlFfH/bbO9dQ3QYQaRkvg/bSkq7yb2OyRTndtxvGnF/Otn8bT0J/v6Jd87qyauKHE8LjHvI6Rwc38yfef8JWd4Olbxdbz+eLd+anoypvBf+G/2uFx/fy7d4R2gwAAAxFJREFUOMvF1OVbWlEcwHELUDGxN50dm93turu764XIxSsXuIpcShoBEYcidnctdLaLf2vnEvcyH9n2bt/Xn9+Pe87Dc7y8/m/hNTU3L2RnZ51IzzqVkX48NiP2ZGZmbP7pc1ef579997qWgEfaf3ysP7hPu3t7bwj4quCpRxjzPi2NgLnPkj3COlotCfPUxYMeoFlZl3qLgGFGQ6oH+FU5vHuRhGrNH+DwEQLeNWhiPMAvE0o3mKwGkMk8ELYrlbkEzDHIYphMNvsAOG+bUOaRGw2ymYYGNoi5f+/nvvaJMAImaLpmmhrwcLsftrtBWdcUq7Gp0UnZbmvXjDZbDvmnAJDPYrEc1G5dXzGt7rMlEDC+QzrQz8JlUyOI0Ew77IsnN0oBVIFYhG5wVL9hMBpJ6C1FsX4+nsM2OSzQzE6NcSCchIdQzMx35lps58xBjRrzdod6s0glEjkES0V8BntShhX/BtGFocnBzo3pNdP83IjZ3N/PV7Hw3x+SYWdCCRhYgIq5Wu3K+PjKihaV6iXYwNTM+hiY7MQk2DEShhaIQdr1ns3tobGFn5hEKES4Wi4qRVEwFOIGQ8RcLrdt8bt1YWzMJFe0jMytmkybHARB9HrJURoBaSFcCILarKKlce340iiPJ5DL+aIRIR6A/m7wGw5nR3vaOG1L8tbWVh7Ac0JEiCBCSRz5ANDixDAMW5xQoABS0cpbRezp3eFhLgxBlh35kgWydAtaFHg8E0eMcDhIx3kS+tuhbkewrIN03R9a8ACEOCBEdpmeFORDc8FeGNYtC7p1MIDNzXa5CIYhiNNRTvHzjShyrLyOwuB6ANzSbW0DiKew9uKwtyOa4kfxcZyclpTysLoq5YFoZLZzyKpwQQs4IdwrBTAq0HkYum8lNZJaUlZx//adG9euNPN44CIXtWKOHfoFM1yHYdAjgsGXUCMDAkpLCwtLzl4qq3j8KKW66gkq1dyjJNHcHlN/WmCiTxA9Ckz4UqmRYASv8mV0+YuoxAOfX3yC4Rzx8wVDwT5/fbL9A4sYQa47/Nd+AQJ0zVP87qPCAAAAAElFTkSuQmCC"

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABFUExURUxpcf///////////////////////////////////////////////////////////////////////////////////////4aDdakAAAAWdFJOUwBciThL1Bj89OzbEgTG5pYlsnzJrW79262YAAAAY0lEQVQY01WO2w7AIAhD0angZe7e///UzWSJ0LfTlFKiKZ+7dM1YKcbJibFQWKZxQlScUogouzJcYcihI43hNFMAV2NsyIbp+lYYZXjDdcyyndLmhmd03upc0s6inhaWHNMPL6F9Ay0eFsjqAAAAAElFTkSuQmCC"

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _BPParser = __webpack_require__(88);

var _BPParser2 = _interopRequireDefault(_BPParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BlueprintRenderer = function () {
    function BlueprintRenderer() {
        _classCallCheck(this, BlueprintRenderer);
    }

    _createClass(BlueprintRenderer, [{
        key: 'renderFromText',
        value: function renderFromText(bpText) {
            this.parse(bpText);
        }
    }, {
        key: 'renderFromFile',
        value: function renderFromFile(bpFileName, callback) {
            var client = new XMLHttpRequest();
            var self = this;
            client.open('GET', bpFileName);
            client.onreadystatechange = function () {
                if (client.readyState === 4 && client.status === 200) {
                    if (client.responseText) self.parse(client.responseText, callback);
                }
            };
            client.send();
        }
    }, {
        key: 'parse',
        value: function parse(bpText, cb) {
            var parser = new _BPParser2.default(bpText);
            this.blueprintObjects = parser.parseText();
            cb(this.blueprintObjects);
        }
    }]);

    return BlueprintRenderer;
}();

exports.default = BlueprintRenderer;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BPParser = function () {
    function BPParser(text) {
        _classCallCheck(this, BPParser);

        this.text = text;
        this.txt = this.text.split("\n");
    }

    _createClass(BPParser, [{
        key: "getObject",
        value: function getObject() {}
    }, {
        key: "strToObject",
        value: function strToObject(str, obj) {
            var retObj = {};
            str = str.replace("Begin Object", "");
            str = str.replace("End Object", "");
            str = str.trim();
            var accum = "";
            var currentProperty = null;
            var currentValue = null;
            var retObj = {};
            for (var i = 0; i <= str.length; i++) {
                if (str[i] === "=") {
                    currentProperty = accum;
                    retObj[currentProperty] = null;
                    accum = "";
                } else if ((i + 1 > str.length || str[i] === " ") && currentProperty) {
                    currentValue = accum;
                    retObj[currentProperty] = currentValue;

                    currentProperty = null;
                    currentValue = null;
                    accum = "";
                } else {
                    accum += str[i];
                }
            }
            return retObj;
        }
    }, {
        key: "strToObjectParams",
        value: function strToObjectParams(str, obj) {
            str = str.trim();
            var left = str.substr(0, str.indexOf('='));
            var right = str.substr(str.indexOf('=') + 1);
            if (right[0] === "(") {
                obj[left] = {};
                right = right.replace("(", "");
                right = right.replace(")", "");
                var tArray = right.split(",");
                for (var i = 0; i < tArray.length; i++) {
                    var final = tArray[i].trim().split("=");
                    obj[left][final[0]] = final[1];
                }
            } else {
                obj[left] = right;
            }
        }
    }, {
        key: "parseObject",
        value: function parseObject(lineCounter, stack) {
            if (this.txt[lineCounter].length === 0) return lineCounter;
            var obj = this.strToObject(this.txt[lineCounter]);
            stack.push(obj);
            lineCounter++;
            while (lineCounter < this.txt.length) {
                var str = this.txt[lineCounter];
                if (str.indexOf("Begin Object") !== -1) {
                    if (!obj.objects) {
                        obj.objects = [];
                    }
                    lineCounter = this.parseObject(lineCounter, obj.objects);
                } else if (str.indexOf("End Object") !== -1) {
                    break;
                } else {
                    this.strToObjectParams(str, obj);
                }
                lineCounter++;
            }

            return lineCounter;
        }
    }, {
        key: "verify",
        value: function verify(txt) {
            var bCount = 0,
                eCount = 0;
            txt.forEach(function (str) {
                if (str.indexOf("Begin Object") !== -1) {
                    bCount++;
                } else if (str.indexOf("End Object") !== -1) {
                    eCount++;
                }
            });

            if (eCount === bCount) return true;

            return false;
        }
    }, {
        key: "parseText",
        value: function parseText() {
            var txt = this.txt;
            var retObj = {};
            var objects = [];
            var res = 0;
            if (!this.verify(this.txt)) return null;
            while (res < this.txt.length) {
                res = this.parseObject(res, objects);
                res++;
            }
            var original = objects;
            var work = JSON.parse(JSON.stringify(objects));

            for (var i = 0; i < work.length; i++) {
                var currentNode = work[i];

                if (currentNode.FunctionReference) {
                    currentNode["nodeName"] = currentNode.FunctionReference.MemberName.replace(/["']/g, "");
                    currentNode["nodeName"] = currentNode["nodeName"].fromCamelCase();
                    if (currentNode.FunctionReference.MemberParent) currentNode["nodeParent"] = currentNode.FunctionReference.MemberParent;
                    delete currentNode.FunctionReference;
                } else if (currentNode.ProxyFactoryFunctionName) {
                    currentNode["nodeName"] = currentNode.ProxyFactoryFunctionName.replace(/["']/g, "");
                    currentNode["nodeName"] = currentNode["nodeName"].fromCamelCase();
                    if (currentNode.ProxyClass) {
                        currentNode["nodeName"] += " for ";
                        var forClass = currentNode.ProxyClass.split(".")[1].split("_")[0].fromCamelCase();
                        currentNode["nodeName"] += forClass;
                    }

                    delete currentNode.ProxyFactoryFunctionName;
                } else if (currentNode.MacroGraphReference) {
                    //	console.log(currentNode.MacroGraphReference.MacroGraph);
                    var tmp = currentNode.MacroGraphReference.MacroGraph.replace(/["']/g, "");
                    if (tmp.split(":").length > 1) {
                        currentNode["nodeName"] = tmp.split(":")[1].fromCamelCase();
                    } else {
                        currentNode["nodeName"] = tmp.fromCamelCase();
                    }
                    delete currentNode.MacroGraphReference;
                } else if (currentNode.EventReference) {
                    if (!currentNode.InputAxisName && !currentNode.AxisKey) {
                        if (!currentNode.DelegatePropertyName) {
                            currentNode["nodeName"] = currentNode.EventReference.MemberName.replace(/["']/g, "").replace("Receive", "");
                            currentNode["nodeName"] = "Event " + currentNode["nodeName"];
                        } else {
                            currentNode["nodeName"] = currentNode.DelegatePropertyName.replace(/["']/g, "");
                            if (currentNode.ComponentPropertyName) currentNode["nodeName"] += " (" + currentNode.ComponentPropertyName.replace(/["']/g, "") + ")";
                        }
                    } else if (currentNode.InputAxisName) {
                        currentNode["nodeName"] = currentNode.InputAxisName.replace(/["']/g, "");
                        currentNode["nodeName"] = "InputAxis " + currentNode["nodeName"];
                    } else if (currentNode.AxisKey) {
                        currentNode["nodeName"] = currentNode.AxisKey.replace(/["']/g, "");
                        currentNode["nodeName"] = "InputAxis " + currentNode["nodeName"];
                    }
                    delete currentNode.EventReference;
                } else if (currentNode.DelegateReference) {

                    currentNode["nodeName"] = "Call " + currentNode.DelegateReference.MemberName.replace(/["']/g, "");
                    //console.log(currentNode["nodeName"]);
                    //delete currentNode.DelegateReference;
                }

                if (!currentNode["nodeName"] && currentNode.CustomFunctionName) {
                    currentNode["nodeName"] = currentNode.CustomFunctionName;
                    currentNode.isCustom = true;
                }

                if (currentNode["InputActionName"]) {
                    if (currentNode["nodeName"]) currentNode["nodeName"] += currentNode["InputActionName"];else if (currentNode["Class"]) {
                        currentNode["Class"] += currentNode["InputActionName"].replace(/["']/g, "").fromCamelCase();
                    }
                }
                var pinCounter = 0;
                currentNode.pins = [];
                while (currentNode["Pins({0})".format(pinCounter)]) {
                    currentNode.pins.push(currentNode["Pins({0})".format(pinCounter)]);
                    delete currentNode["Pins({0})".format(pinCounter)];
                    pinCounter++;
                }
                if (currentNode.objects) {
                    for (var j = currentNode.objects.length - 1; j >= 0; j--) {
                        var item = currentNode.objects[j];
                        if (item.Class) currentNode.objects.splice(j, 1);
                    }
                }
                //assert(currentNode.pins.length === currentNode.objects.length,"currentNode.pins.length !== currentNode.objects.length");
                var tmpPins = [];
                for (var j = 0; j < currentNode.pins.length; j++) {
                    var currentPin = currentNode.pins[j];
                    for (var k = 0; k < currentNode.objects.length; k++) {
                        //HERE PROBLEM!!!
                        //console.log(currentNode.objects[k]);
                        var objName = currentNode.objects[k].Name.replace(/["']/g, "");
                        if (currentPin.indexOf(objName) !== -1) {
                            var newPin = {};
                            newPin = currentNode.objects[k];
                            newPin.pinId = parseInt(currentNode.objects[k].Name.split("_")[1].replace(/["']/g, ""));
                            if (currentNode.objects[k].PinType) newPin.pinType = currentNode.objects[k].PinType.PinCategory;
                            if (currentNode.objects[k].PinType && currentNode.objects[k].PinType.bIsArray) {
                                newPin.isArray = true;
                            }
                            if (currentNode.objects[k].PinType && currentNode.objects[k].PinType.PinSubCategoryObject) {
                                newPin.subType = currentNode.objects[k].PinType.PinSubCategoryObject;
                                if (newPin.subType.indexOf("ScriptStruct") !== -1) {
                                    var start_pos = newPin.subType.indexOf('\'') + 1;
                                    var end_pos = newPin.subType.indexOf('\'', start_pos);
                                    var quotesText = newPin.subType.substring(start_pos, end_pos);
                                    var tmp = quotesText.split("/");
                                    var subType = tmp[tmp.length - 1];
                                    newPin.pinSubType = subType.split(".")[1].toLowerCase();
                                }
                            }
                            if (currentNode.objects[k].PinName) {
                                newPin.pinText = currentNode.objects[k].PinName.replace(/["']/g, "");
                                if (newPin.pinText.indexOf(" ") === -1) {
                                    newPin.pinText = newPin.pinText.fromCamelCase();
                                }
                                if (newPin.pinText[0] === "b") {
                                    newPin.pinText = newPin.pinText.substr(1, newPin.pinText.length - 1);
                                }
                            } else {
                                newPin.pinText = "";
                            }

                            newPin.isOutput = currentNode.objects[k].Direction && currentNode.objects[k].Direction === "EGPD_Output" && true || false;
                            newPin.linkedTo = [];
                            pinCounter = 0;
                            while (currentNode.objects[k]["LinkedTo({0})".format(pinCounter)]) {
                                var lTo = currentNode.objects[k]["LinkedTo({0})".format(pinCounter)];
                                var lToA = lTo.split("_");
                                newPin.linkedTo.push(parseInt(lToA[lToA.length - 1]));
                                delete currentNode.objects[k]["LinkedTo({0})".format(pinCounter)];
                                pinCounter++;
                            }

                            delete newPin.Direction;
                            delete newPin.PinName;
                            //delete newPin.Name;
                            delete newPin.PinType;
                            tmpPins.push(newPin);
                            break;
                        }
                    }
                }

                currentNode.pins = tmpPins;
                delete currentNode.objects;

                for (var j = 0; j < currentNode.pins.length; j++) {
                    var currentPin = currentNode.pins[j];
                    for (var k in currentPin) {
                        if (k.length > 1) {
                            var str = currentPin[k];
                            if (str[0] === '"') currentPin[k] = currentPin[k].substr(1, currentPin[k].length - 2);

                            if (k[0].toUpperCase() === k[0]) {
                                var newName = k.substr(0, 1).toLowerCase() + k.substr(1, k.length - 1);
                                currentPin[newName] = currentPin[k];
                                delete currentPin[k];
                            }
                        }
                    }
                }

                for (var k in currentNode) {
                    if (k.length > 1) {
                        var str = currentNode[k];
                        if (str[0] === '"') currentNode[k] = currentNode[k].substr(1, currentNode[k].length - 2);

                        if (k[0].toUpperCase() === k[0]) {
                            var newName = k.substr(0, 1).toLowerCase() + k.substr(1, k.length - 1);
                            currentNode[newName] = currentNode[k];
                            delete currentNode[k];
                        }
                    }
                }
            }
            //console.log(work);
            return work;
        }
    }]);

    return BPParser;
}();

exports.default = BPParser;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = BPToNodes;

var _vector = __webpack_require__(90);

var _vector2 = _interopRequireDefault(_vector);

var _CommentNode = __webpack_require__(91);

var _CommentNode2 = _interopRequireDefault(_CommentNode);

var _EventNode = __webpack_require__(92);

var _EventNode2 = _interopRequireDefault(_EventNode);

var _FunctionNode = __webpack_require__(93);

var _FunctionNode2 = _interopRequireDefault(_FunctionNode);

var _MacroNode = __webpack_require__(94);

var _MacroNode2 = _interopRequireDefault(_MacroNode);

var _GetterNode = __webpack_require__(95);

var _GetterNode2 = _interopRequireDefault(_GetterNode);

var _SetterNode = __webpack_require__(96);

var _SetterNode2 = _interopRequireDefault(_SetterNode);

var _BinaryOperatorNode = __webpack_require__(97);

var _BinaryOperatorNode2 = _interopRequireDefault(_BinaryOperatorNode);

var _config = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function BPToNodes(objects) {
    var origin = origin || new _vector2.default(0, 0);
    var minX, minY;
    var newNodes = [];
    for (var i = 0; i < objects.length; i++) {
        if (objects[i].nodePosX && objects[i].nodePosY) {
            minX = objects[i].nodePosX;
            minY = objects[i].nodePosY;
            break;
        }
    }

    for (var i = 0; i < objects.length; i++) {
        var curObj = objects[i];
        if (parseInt(curObj.nodePosX) < minX) minX = curObj.nodePosX;
        if (parseInt(curObj.nodePosY) < minY) minY = curObj.nodePosY;
    }

    for (var i = 0; i < objects.length; i++) {
        var curObj = objects[i];
        if (!curObj.nodePosY) curObj.nodePosY = 0;
        if (!curObj.nodePosX) curObj.nodePosX = 0;
        curObj.nodePosY -= minY;
        curObj.nodePosX -= minX;

        curObj.nodePosY += origin.y;
        curObj.nodePosX += origin.x;
    }

    var maxX = 0,
        maxY = 0;

    for (var i = 0; i < objects.length; i++) {
        var curObj = objects[i];

        if (parseInt(curObj.nodePosY) + parseInt(curObj.nodeHeight) > maxY) maxY = parseInt(curObj.nodePosY) + parseInt(curObj.nodeHeight);

        if (parseInt(curObj.nodePosX) + parseInt(curObj.nodeWidth) > maxX) maxX = parseInt(curObj.nodePosX) + parseInt(curObj.nodeWidth);
    }

    var links = [];
    for (var i = 0; i < objects.length; i++) {
        var curObj = objects[i];
        var x, y;
        var newNode = null;
        var nN;
        x = curObj.nodePosX;
        y = curObj.nodePosY;
        if (curObj.class && curObj.class.indexOf("EdGraphNode_Comment") !== -1) {
            newNode = {
                name: curObj.nodeComment,
                width: curObj.nodeWidth,
                height: curObj.nodeHeight
            };
            if (curObj.commentColor) newNode.commentColor = curObj.commentColor;
            nN = new _CommentNode2.default(newNode, x, y);
            newNodes.push(nN);
        }
    }

    for (var i = 0; i < objects.length; i++) {
        var curObj = objects[i];
        var inputs = [];
        var outputs = [];
        var x, y;
        var newNode = null;
        var nN = null;
        x = curObj.nodePosX;
        y = curObj.nodePosY;

        if (curObj.pins.length === 0) {
            //console.log('empty pins');
            continue;
        }

        for (var j = 0; j < curObj.pins.length; j++) {
            var curPin = curObj.pins[j];
            var pinType = _config.VAR_TYPES[curPin.pinSubType] && _config.VAR_TYPES[curPin.pinSubType] || _config.VAR_TYPES[curPin.pinType];
            if (curPin.bHidden === "True") continue;

            if (curPin.isOutput) {
                for (var k = 0; k < curPin.linkedTo.length; k++) {
                    links.push({ from: curPin.pinId, to: curPin.linkedTo[k] });
                }
            }
            var newPin = {
                name: curPin.pinFriendlyName && curPin.pinFriendlyName || curPin.pinText,
                type: pinType,
                id: curPin.pinId
            };

            if (curPin.pinFriendlyName && curPin.pinFriendlyName.indexOf("NSLOCTEXT") !== -1) {
                var tmp = curPin.pinFriendlyName.replace("NSLOCTEXT(", "").replace(")", "");
                var tmpArr = tmp.split(",");
                newPin.name = tmpArr[tmpArr.length - 1].replace(/["']/g, "");
            }

            if (curPin.pinToolTip) {
                newPin.tooltip = curPin.pinToolTip;
            }

            if (curPin.isArray) newPin.isArray = true;
            if (curPin.linkedTo.length > 0) newPin.linked = true;else newPin.linked = false;

            if (!newPin.linked && !curPin.isOutput) {
                if (newPin.type === _config.VAR_TYPES["vector"] || newPin.type === _config.VAR_TYPES["rotator"]) {
                    var tmpValue = curPin.defaultValue && curPin.defaultValue || curPin.autogeneratedDefaultValue;
                    if (tmpValue) {
                        var vect = tmpValue.split(",");
                        for (var z = 0; z < vect.length; z++) {
                            vect[z] = parseFloat(vect[z]).toFixed(1);
                        }
                    } else {
                        vect[0] = 0.0;
                        vect[1] = 0.0;
                        vect[2] = 0.0;
                    }

                    newPin.value = vect;
                } else if (newPin.type === _config.VAR_TYPES["float"] || newPin.type === _config.VAR_TYPES["int"] || newPin.type === _config.VAR_TYPES["byte"]) {
                    newPin.value = curPin.defaultValue && curPin.defaultValue || curPin.autogeneratedDefaultValue;
                    //newPin.value = parseFloat(newPin.value).toFixed(1);
                } else if (newPin.type === _config.VAR_TYPES["bool"]) {
                    newPin.value = curPin.defaultValue && curPin.defaultValue || curPin.autogeneratedDefaultValue;
                    if (newPin.value === "true") newPin.value = true;else newPin.value = false;
                    //newPin.value = parseFloat(newPin.value).toFixed(1);
                } else if (newPin.type === _config.VAR_TYPES["actor"] || newPin.type === _config.VAR_TYPES["object"]) {
                    if (curPin.pinText === "self") {
                        newPin.value = "self";
                    }
                }
            }

            if (curPin.isOutput) {
                outputs.push(newPin);
            } else {
                inputs.push(newPin);
            }
        }

        if (!curObj.class || inputs.length === 0 && outputs.length === 0) {
            continue;
        }

        if (typeof _config.FUNCTIONS_MAPPING[curObj.class] !== "undefined") {
            var async = false;
            if (_config.FUNCTIONS_MAPPING[curObj.class] !== null) {
                if (_config.FUNCTIONS_MAPPING[curObj.class].text) {
                    curObj.nodeName = _config.FUNCTIONS_MAPPING[curObj.class].text;
                }

                if (_config.FUNCTIONS_MAPPING[curObj.class].async) {
                    async = true;
                }
            }
            newNode = {
                isPure: curObj.bIsPureFunc && curObj.bIsPureFunc === "True",
                name: curObj.nodeName,
                inputs: inputs,
                outputs: outputs
            };

            if (_config.FUNCTIONS_MAPPING[curObj.class] !== null) {
                if (_config.FUNCTIONS_MAPPING[curObj.class].async) {
                    newNode.async = true;
                }
                if (_config.FUNCTIONS_MAPPING[curObj.class].icon) {
                    newNode.icon = _config.FUNCTIONS_MAPPING[curObj.class].icon;
                }

                if (_config.FUNCTIONS_MAPPING[curObj.class].morpher) {
                    _config.FUNCTIONS_MAPPING[curObj.class].morpher(newNode, curObj);
                    //console.log("After morpher",newNode);
                }
            }

            if (curObj.class.indexOf("K2Node_MakeArray") !== -1) newNode.isPure = true;

            if (newNode.name.indexOf("Conv_") !== -1 && newNode.name.indexOf("Int To Text") === -1 && newNode.name.indexOf("Float To Text") === -1) {
                //nN = new ConverterNode(newNode, x, y);
            } else if (newNode.name.indexOf("_") !== -1 && newNode.name.indexOf("Get") === -1 && newNode.name.indexOf("Conv") === -1 && newNode.name.indexOf("Set") === -1 && newNode.name.indexOf("Add") === -1 && newNode.name.indexOf("K2") === -1 && newNode.name.indexOf("Montage") === -1 && newNode.name.indexOf("Greater_Vector") === -1 && newNode.name.indexOf("Less_Vector") === -1) {
                nN = new _BinaryOperatorNode2.default(newNode, x, y);
            } else {
                nN = new _FunctionNode2.default(newNode, x, y);
            }
        } else if (curObj.class.indexOf("K2Node_DynamicCast") !== -1) {
            var tmpArr = curObj.targetType.split(".");
            var name = "Cast to " + tmpArr[tmpArr.length - 1].replace("_C", "").replace(/["']/g, "");
            newNode = {
                name: name,
                inputs: inputs,
                outputs: outputs
            };

            //nN = new CastNode(newNode, x, y);
        } else if (curObj.class.indexOf("K2Node_Timeline") !== -1) {
            newNode = {
                name: curObj.timelineName,
                inputs: inputs,
                outputs: outputs
            };

            //nN = new TimelineNode(newNode, x, y);
        } else if (curObj.class.indexOf("K2Node_CallDelegate") !== -1) {
            // console.log(curObj);
            newNode = {
                name: curObj.nodeName,
                inputs: inputs,
                outputs: outputs
            };

            //nN = new CallDelegateNode(newNode, x, y);
        } else if (curObj.class.indexOf("K2Node_CallArrayFunction") !== -1) {
            newNode = {
                isPure: curObj.bIsPureFunc && curObj.bIsPureFunc === "True",
                name: curObj.nodeName,
                inputs: inputs,
                outputs: outputs
            };
            if (curObj.nodeName.indexOf("_Set") !== -1) {
                nN = new _FunctionNode2.default(newNode, x, y);
            } else {
                //nN = new ArrayFunctionNode(newNode, x, y);
            }
        } else if (curObj.class.indexOf("EdGraphNode_Comment") !== -1) {
            continue;
        } else if (curObj.class.indexOf("K2Node_MacroInstance") !== -1 || curObj.class.indexOf("K2Node_IfThenElse") !== -1 || curObj.class.indexOf("K2Node_ExecutionSequence") !== -1) {
            if (curObj.class.indexOf("K2Node_IfThenElse") !== -1) curObj.nodeName = "Branch";else if (curObj.class.indexOf("K2Node_ExecutionSequence") !== -1) curObj.nodeName = "Sequence";
            newNode = {
                name: curObj.nodeName,
                inputs: inputs,
                outputs: outputs
            };

            nN = new _MacroNode2.default(newNode, x, y);
        } else if (curObj.class.indexOf("K2Node_Event") !== -1 || curObj.class.indexOf("K2Node_CustomEvent") !== -1 || curObj.class.indexOf("K2Node_ComponentBoundEvent") !== -1 || curObj.class.indexOf("K2Node_InputTouch") !== -1 || curObj.class.indexOf("K2Node_InputAction") !== -1 || curObj.class.indexOf("K2Node_InputAxisEvent") !== -1 || curObj.class.indexOf("K2Node_InputKey") !== -1) {
            if (curObj.class && curObj.class.indexOf("K2Node") !== -1) curObj.class = curObj.class.replace("K2Node_", "");
            curObj.class = curObj.class.fromCamelCase();
            //console.log("EVENT", curObj);
            newNode = {
                name: curObj.nodeName && curObj.nodeName || curObj.class,
                inputs: inputs,
                outputs: outputs,
                isCustom: curObj.isCustom
            };

            if (curObj.class === "Input Key") {
                newNode.inputKey = curObj.inputKey;
            }

            nN = new _EventNode2.default(newNode, x, y);
        } else if (curObj.class.indexOf("K2Node_VariableGet") !== -1 || curObj.class.indexOf("K2Node_Self") !== -1) {
            newNode = {
                outputs: outputs
            };

            nN = new _GetterNode2.default(newNode, x, y);
        } else if (curObj.class.indexOf("Set") !== -1) {
            newNode = {
                outputs: outputs,
                inputs: inputs
            };
            nN = new _SetterNode2.default(newNode, x, y);
        } else if (curObj.class.indexOf("Operator") !== -1 || curObj.class.indexOf("K2Node_EnumEquality") !== -1) {
            newNode = {
                name: curObj.nodeName && curObj.nodeName || curObj.class,
                inputs: inputs,
                outputs: outputs
            };
            nN = new _BinaryOperatorNode2.default(newNode, x, y);
        } else if (curObj.class.indexOf("K2Node_Knot") !== -1) {
            //console.log('KNIT');
            newNode = {
                name: curObj.nodeName && curObj.nodeName || curObj.class,
                inputs: inputs,
                outputs: outputs
            };
            //nN = new RerouteNode(newNode, x, y);
        } else if (curObj.class.indexOf("K2Node_Select") !== -1) {
            newNode = {
                name: "Select",
                inputs: inputs,
                outputs: outputs
            };
            //nN = new SelectNode(newNode, x, y);
        } else if (curObj.class.indexOf("K2Node_Composite") !== -1) {
            newNode = {
                name: curObj.boundGraph.replace("EdGraph", "").replace(/["']/g, ""),
                inputs: inputs,
                outputs: outputs
            };
            //nN = new CompositeNode(newNode, x, y);
        } else {
            newNode = {
                name: curObj.nodeName && curObj.nodeName || curObj.class || curObj.name,
                inputs: inputs,
                outputs: outputs
            };
            if (curObj.class.indexOf("Material") === -1) console.log("Unknown Node", curObj);
            //nN = new UnknownNode(newNode, x, y);
        }

        if (nN) {
            newNodes.push(nN);
            nN = null;
            newNode = null;
        }
    }

    for (var i = 0; i < newNodes.length; i++) {
        newNodes[i].init();
    }

    for (var i = 0; i < links.length; i++) {
        var curLink = links[i];
        var from = null;
        var to = null;
        var nodeFrom = null;

        for (var j = 0; j < newNodes.length; j++) {
            for (var z = 0; z < newNodes[j].pinRows.length; z++) {
                var row = newNodes[j].pinRows[z];
                if (row.output && row.output.id === curLink.from) {
                    nodeFrom = newNodes[j];
                    from = row.output;
                }
                if (row.input && row.input.id === curLink.to) {
                    to = row.input;
                    to.parent = newNodes[j];
                }
            }
        }

        if (nodeFrom) {
            if (to) {
                nodeFrom.setOutputLink(from, to);
            }
        }
    }

    return newNodes;
}

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
function Vector(x, y) {
	this.x = x || 0;
	this.y = y || 0;
}

Vector.prototype = {
	negative: function negative() {
		return new Vector(-this.x, -this.y);
	},
	add: function add(v) {
		if (v instanceof Vector) return new Vector(this.x + v.x, this.y + v.y);else return new Vector(this.x + v, this.y + v);
	},
	subtract: function subtract(v) {
		if (v instanceof Vector) return new Vector(this.x - v.x, this.y - v.y);else return new Vector(this.x - v, this.y - v);
	},
	multiply: function multiply(v) {
		if (v instanceof Vector) return new Vector(this.x * v.x, this.y * v.y);else return new Vector(this.x * v, this.y * v);
	},
	divide: function divide(v) {
		if (v instanceof Vector) return new Vector(this.x / v.x, this.y / v.y);else return new Vector(this.x / v, this.y / v);
	},
	equals: function equals(v) {
		return this.x == v.x && this.y == v.y;
	},
	dot: function dot(v) {
		return this.x * v.x + this.y * v.y;
	},
	length: function length() {
		return Math.sqrt(this.dot(this));
	},
	unit: function unit() {
		return this.divide(this.length());
	},
	min: function min() {
		return Math.min(this.x, this.y);
	},
	max: function max() {
		return Math.max(this.x, this.y);
	},
	angleTo: function angleTo(a) {
		return Math.acos(this.dot(a) / (this.length() * a.length()));
	},
	toArray: function toArray(n) {
		return [this.x, this.y].slice(0, n || 2);
	},
	clone: function clone() {
		return new Vector(this.x, this.y);
	},
	init: function init(x, y, z) {
		this.x = x;
		this.y = y;
		return this;
	}
};

Vector.negative = function (a, b) {
	b.x = -a.x;
	b.y = -a.y;
	return b;
};
Vector.add = function (a, b, c) {
	if (b instanceof Vector) {
		c.x = a.x + b.x;
		c.y = a.y + b.y;
	} else {
		c.x = a.x + b;
		c.y = a.y + b;
	}
	return c;
};
Vector.subtract = function (a, b, c) {
	if (b instanceof Vector) {
		c.x = a.x - b.x;
		c.y = a.y - b.y;
	} else {
		c.x = a.x - b;
		c.y = a.y - b;
	}
	return c;
};
Vector.multiply = function (a, b, c) {
	if (b instanceof Vector) {
		c.x = a.x * b.x;
		c.y = a.y * b.y;
	} else {
		c.x = a.x * b;
		c.y = a.y * b;
	}
	return c;
};
Vector.divide = function (a, b, c) {
	if (b instanceof Vector) {
		c.x = a.x / b.x;
		c.y = a.y / b.y;
	} else {
		c.x = a.x / b;
		c.y = a.y / b;
	}
	return c;
};

Vector.unit = function (a, b) {
	var length = a.length();
	b.x = a.x / length;
	b.y = a.y / length;
	return b;
};

Vector.min = function (a, b) {
	return new Vector(Math.min(a.x, b.x), Math.min(a.y, b.y));
};
Vector.max = function (a, b) {
	return new Vector(Math.max(a.x, b.x), Math.max(a.y, b.y));
};
Vector.lerp = function (a, b, fraction) {
	return b.subtract(a).multiply(fraction).add(a);
};
Vector.fromArray = function (a) {
	return new Vector(a[0], a[1]);
};

exports.default = Vector;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RegularNode = __webpack_require__(2);

var _RegularNode2 = _interopRequireDefault(_RegularNode);

var _Textures = __webpack_require__(3);

var _Textures2 = _interopRequireDefault(_Textures);

var _config = __webpack_require__(0);

var _main = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CommentNode = function () {
    function CommentNode(node, x, y) {
        _classCallCheck(this, CommentNode);

        this.x = parseInt(x);
        this.y = parseInt(y);

        this.affectedNodes = [];

        this.body = new PIXI.Sprite.from(_Textures2.default.commentNodeBody);
        this.shadowSelected = new PIXI.mesh.NineSlicePlane(_Textures2.default.shadowSelectedTexture, 21, 21, 21, 21);

        this.pinRows = [];

        this.width = node.width;
        this.height = node.height;

        this.titleHeight = _config.CONFIG.CELL_SIZE * 2.5;

        this.node = node;

        this.container = new PIXI.Container();

        this.container.x = this.x;
        this.container.y = this.y;
    }

    _createClass(CommentNode, [{
        key: 'onDragStart',
        value: function onDragStart(e) {
            this.dragging = true;
            this.eventData = e.data;
            this.oldPosition = this.container.position;

            this.shadowSelected.visible = true;
            this.selected = true;

            var bounds = this.gloss.getBounds();
            var posGlobal = e.data.global;

            var onNodeX = posGlobal.x - bounds.x;
            var onNodeY = posGlobal.y - bounds.y;

            this.pointOnNode = {
                x: onNodeX,
                y: onNodeY
            };

            var containerBounds = this.container.getBounds();

            for (var i = 0; i < _main.allNodes.length; i++) {
                var bounds = _main.allNodes[i].container.getBounds();
                if (bounds.x >= containerBounds.x && bounds.x <= containerBounds.x + containerBounds.width) {
                    if (bounds.y >= containerBounds.y && bounds.y <= containerBounds.y + containerBounds.height) {
                        this.affectedNodes.push(_main.allNodes[i]);
                    }
                }
            }
        }
    }, {
        key: 'onDragMove',
        value: function onDragMove(e) {
            if (this.dragging) {
                var pos = e.data.getLocalPosition(this.nodesContainer);
                _main.app.bpConfig.draggingNode = true;

                pos.x += -this.pointOnNode.x;
                pos.y += -this.pointOnNode.y;

                var deltaX = this.container.x - this.nearestCellWidth(pos.x) * _config.CONFIG.CELL_SIZE;
                var deltaY = this.container.y - this.nearestCellWidth(pos.y) * _config.CONFIG.CELL_SIZE;

                for (var i = 0; i < this.affectedNodes.length; i++) {
                    this.affectedNodes[i].container.x -= deltaX;
                    this.affectedNodes[i].container.y -= deltaY;
                    this.affectedNodes[i].x -= deltaX;
                    this.affectedNodes[i].y -= deltaY;

                    if (this.affectedNodes[i].redrawLinks) this.affectedNodes[i].redrawLinks();
                }

                this.container.x = this.nearestCellWidth(pos.x) * _config.CONFIG.CELL_SIZE;
                this.container.y = this.nearestCellWidth(pos.y) * _config.CONFIG.CELL_SIZE;

                this.x = this.container.x;
                this.y = this.container.y;
            }
        }
    }, {
        key: 'onDragEnd',
        value: function onDragEnd(e) {
            this.dragging = false;
            this.eventData = null;
            this.oldPosition = null;
            this.affectedNodes = [];
            _main.app.bpConfig.draggingNode = false;
        }
    }, {
        key: 'onNodeClick',
        value: function onNodeClick(e) {
            this.shadowSelected.visible = true;
            this.selected = true;
        }
    }, {
        key: 'dropSelection',
        value: function dropSelection() {
            this.shadowSelected.visible = false;
            this.selected = false;
        }
    }, {
        key: 'inNode',
        value: function inNode(e) {
            var bounds = this.gloss.getBounds();
            if (e.x >= bounds.x && e.x <= bounds.x + bounds.width) {
                if (e.y >= bounds.y && e.y <= bounds.y + bounds.height) {
                    return true;
                }
            }
            return false;
        }
    }, {
        key: 'init',
        value: function init() {}
    }, {
        key: 'draw',
        value: function draw(nodesContainer) {

            this.nodesContainer = nodesContainer;

            this.body.width = this.width;
            this.body.height = this.height;
            this.body.blendMode = PIXI.BLEND_MODES.SCREEN;

            var headerColor, opacity;

            if (this.node.commentColor) {
                var cColor = this.node.commentColor;
                headerColor = (0, _config.rgbToHex)(parseFloat(cColor.R) * 255, parseFloat(cColor.G) * 255, parseFloat(cColor.B) * 255);
                opacity = parseFloat(cColor.A);
            } else {
                headerColor = '#acacac';
                opacity = 1;
            }

            this.body.tint = parseInt(headerColor.replace(/^#/, ''), 16);
            this.body.alpha = 0.2;

            this.shadowSelected.width = this.body.width + 26;
            this.shadowSelected.height = this.body.height + 26;

            this.container.addChild(this.shadowSelected);

            this.shadowSelected.x = -13;
            this.shadowSelected.y = -13;

            this.shadowSelected.visible = false;

            this.container.addChild(this.body);

            this.gloss = new PIXI.mesh.NineSlicePlane(_Textures2.default.glossTexture, 7, 7, 7, 7);
            this.gloss.blendMode = PIXI.BLEND_MODES.SCREEN;

            this.gloss.aplha = opacity;
            this.gloss.width = this.width;
            this.gloss.height = this.titleHeight;

            this.gloss.tint = parseInt(headerColor.replace(/^#/, ''), 16);
            this.gloss.interactive = true;
            this.gloss.buttonMode = true;

            var self = this;

            this.gloss.on('click', function (e) {
                self.onNodeClick(e);
            });

            this.gloss.on('mousedown', function (e) {
                self.onDragStart(e);
            });

            this.gloss.on('mouseup', function (e) {
                self.onDragEnd(e);
            });
            this.gloss.on('mouseupoutside', function (e) {
                self.onDragEnd(e);
            });
            this.gloss.on('mousemove', function (e) {
                self.onDragMove(e);
            });

            this.container.addChild(this.gloss);

            this.headerText = new PIXI.Text(this.node.name, _config.commentTextStyle);
            this.headerText.anchor.set(0, 0.5);

            this.headerText.x = _config.CONFIG.CELL_SIZE * 0.5;
            this.headerText.y = this.gloss.height / 2;

            this.container.addChild(this.headerText);
            nodesContainer.addChild(this.container);
        }
    }, {
        key: 'nearestCellWidth',
        value: function nearestCellWidth(width) {
            return Math.ceil(width / _config.CONFIG.CELL_SIZE);
        }
    }]);

    return CommentNode;
}();

exports.default = CommentNode;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _RegularNode2 = __webpack_require__(2);

var _RegularNode3 = _interopRequireDefault(_RegularNode2);

var _config = __webpack_require__(0);

var _resources = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EventNode = function (_RegularNode) {
    _inherits(EventNode, _RegularNode);

    function EventNode(node, x, y, texturesHanlder) {
        _classCallCheck(this, EventNode);

        var _this = _possibleConstructorReturn(this, (EventNode.__proto__ || Object.getPrototypeOf(EventNode)).call(this, node, x, y, texturesHanlder));

        _this.colorTint = _config.VAR_COLORS["event"];
        _this.functionName = node.name;

        _this.icon = _resources.ICONS.EventNodeIcon;

        if (_this.node.isCustom === true) {
            _this.custom = true;
            _this.icon = _resources.ICONS.EventNodeIconCustom;
            _this.titleHeight = _config.CONFIG.CELL_SIZE * 2.5;
            _this.height += _config.CONFIG.CELL_SIZE;
        }

        if (_this.node.inputKey) {
            if (_this.node.inputKey.indexOf("Mouse") !== -1) _this.icon = _resources.ICONS.MouseEventIcon;else _this.icon = _resources.ICONS.KeyboardEventIcon;
            _this.functionName = _this.node.inputKey;
        }

        _this.headerTextOffset = _config.CONFIG.CELL_SIZE * 2;
        return _this;
    }

    _createClass(EventNode, [{
        key: 'init',
        value: function init() {
            this.headerText = new PIXI.Text(this.functionName, _config.defaultTextStyle);
            this.fIcon = PIXI.Sprite.fromImage(this.icon);
            this.calculateWidth();
            _get(EventNode.prototype.__proto__ || Object.getPrototypeOf(EventNode.prototype), 'init', this).call(this);
        }
    }, {
        key: 'draw',
        value: function draw(app) {

            _get(EventNode.prototype.__proto__ || Object.getPrototypeOf(EventNode.prototype), 'draw', this).call(this, app);

            this.headerText.x = -this.body.width / 2;
            this.headerText.y = -this.body.height / 2;

            this.headerText.y += this.gloss.height / 2;
            this.headerText.x += this.headerTextOffset;
            this.headerText.anchor.set(0, 0.5);
            if (this.custom) {
                this.headerText.anchor.set(0, 1);
            }

            this.container.addChild(this.headerText);

            if (this.custom) {
                this.customText = new PIXI.Text("Custom Event", _config.customEventTextStyle);
                this.customText.x = -this.body.width / 2;
                this.customText.y = -this.body.height / 2;

                this.customText.y = this.headerText.y + this.headerText.height;
                this.customText.x += this.headerTextOffset;

                this.customText.anchor.set(0, 1);
                this.container.addChild(this.customText);
            }

            this.fIcon.anchor.set(0.5, 0.5);
            this.fIcon.x = -this.body.width / 2;
            this.fIcon.y = -this.body.height / 2;

            this.fIcon.y += this.gloss.height / 2;
            this.fIcon.x += _config.CONFIG.CELL_SIZE;

            this.container.addChild(this.fIcon);

            if (this.node.outputs && this.node.outputs[0].name === "Output Delegate") {
                var delegateIcon = this.node.outputs[0].linked ? _resources.TEXTURES.DelegatePinConnected : _resources.TEXTURES.DelegatePinDisconnected;
                var delegate = PIXI.Sprite.fromImage(delegateIcon);
                delegate.tint = _config.VAR_COLORS["delegate"];
                delegate.x = this.body.width / 2 - _config.CONFIG.CELL_SIZE * (5 / 8);
                delegate.y = -this.body.height / 2 + _config.CONFIG.CELL_SIZE * (5 / 8);
                delegate.anchor.set(0.5, 0.5);

                this.container.addChild(delegate);
            }
        }
    }, {
        key: 'calculateWidth',
        value: function calculateWidth() {
            var headerFullWidth = this.headerText.width + 2 * this.headerTextOffset;
            if (this.node.outputs && this.node.outputs[0].name === "Output Delegate") {
                headerFullWidth += _config.CONFIG.CELL_SIZE;
            }
            if (headerFullWidth > this.width) {
                this.width = _get(EventNode.prototype.__proto__ || Object.getPrototypeOf(EventNode.prototype), 'nearestCellWidth', this).call(this, headerFullWidth) * _config.CONFIG.CELL_SIZE;
            }
        }
    }]);

    return EventNode;
}(_RegularNode3.default);

exports.default = EventNode;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _RegularNode2 = __webpack_require__(2);

var _RegularNode3 = _interopRequireDefault(_RegularNode2);

var _config = __webpack_require__(0);

var _resources = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FunctionNode = function (_RegularNode) {
    _inherits(FunctionNode, _RegularNode);

    function FunctionNode(node, x, y, texturesHanlder) {
        _classCallCheck(this, FunctionNode);

        var _this = _possibleConstructorReturn(this, (FunctionNode.__proto__ || Object.getPrototypeOf(FunctionNode)).call(this, node, x, y, texturesHanlder));

        if (!node.isPure) {
            _this.colorTint = _config.VAR_COLORS["execFunction"];
        } else {
            _this.colorTint = _config.VAR_COLORS["pureFunction"];
        }

        if (node.isParent) {
            _this.colorTint = _config.VAR_COLORS["parent"];
        }

        if (node.color) {
            _this.colorTint = _this.function.color;
        }

        _this.isPure = node.isPure;
        _this.functionName = node.name;

        if (!_this.isPure) {
            _this.iconTint = _config.VAR_COLORS["execFunction"];
        } else {
            _this.iconTint = _config.VAR_COLORS["pureFunction"];
        }

        _this.icon = _resources.ICONS.FunctionIcon;

        if (_this.functionName.indexOf("Make") !== -1 && _this.functionName.indexOf("Array") === -1) {
            _this.icon = _resources.ICONS.MakeStructIcon;
            _this.iconTint = null;
        } else if (_this.functionName.indexOf("Break") !== -1) {
            _this.icon = _resources.ICONS.BreakStructIcon;
            _this.iconTint = null;
        } else if (_this.functionName.indexOf("Make Array") !== -1) {
            _this.icon = _resources.ICONS.MakeArrayIcon;
            _this.iconTint = null;
        }

        _this.headerTextOffset = _config.CONFIG.CELL_SIZE * 2;
        return _this;
    }

    _createClass(FunctionNode, [{
        key: 'draw',
        value: function draw(app) {
            _get(FunctionNode.prototype.__proto__ || Object.getPrototypeOf(FunctionNode.prototype), 'draw', this).call(this, app);

            this.headerText.x = -this.body.width / 2;
            this.headerText.y = -this.body.height / 2;

            this.headerText.y += this.gloss.height / 2;
            this.headerText.x += this.headerTextOffset;

            this.headerText.anchor.set(0, 0.5);

            this.fIcon.anchor.set(0.5, 0.5);
            this.fIcon.x = -this.body.width / 2;
            this.fIcon.y = -this.body.height / 2;

            this.fIcon.y += this.gloss.height / 2;
            this.fIcon.x += _config.CONFIG.CELL_SIZE;

            if (this.iconTint) {
                this.fIcon.tint = this.iconTint;
            }

            this.container.addChild(this.headerText);
            this.container.addChild(this.fIcon);
        }
    }, {
        key: 'init',
        value: function init() {
            this.headerText = new PIXI.Text(this.functionName /* + "(" + this.x + "," + this.y + ")"*/, _config.defaultTextStyle);
            this.fIcon = PIXI.Sprite.fromImage(this.icon);
            this.calculateWidth();
            _get(FunctionNode.prototype.__proto__ || Object.getPrototypeOf(FunctionNode.prototype), 'init', this).call(this);
        }
    }, {
        key: 'calculateWidth',
        value: function calculateWidth() {
            var headerFullWidth = this.headerText.width + 2 * this.headerTextOffset;
            if (headerFullWidth > this.width) {
                this.width = _get(FunctionNode.prototype.__proto__ || Object.getPrototypeOf(FunctionNode.prototype), 'nearestCellWidth', this).call(this, headerFullWidth) * _config.CONFIG.CELL_SIZE;
            }
        }
    }]);

    return FunctionNode;
}(_RegularNode3.default);

exports.default = FunctionNode;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _RegularNode2 = __webpack_require__(2);

var _RegularNode3 = _interopRequireDefault(_RegularNode2);

var _config = __webpack_require__(0);

var _resources = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MacroNode = function (_RegularNode) {
    _inherits(MacroNode, _RegularNode);

    function MacroNode(node, x, y, texturesHanlder) {
        _classCallCheck(this, MacroNode);

        var _this = _possibleConstructorReturn(this, (MacroNode.__proto__ || Object.getPrototypeOf(MacroNode)).call(this, node, x, y, texturesHanlder));

        _this.colorTint = _config.VAR_COLORS["macro"];

        _this.functionName = node.name;

        _this.headerTextOffset = _config.CONFIG.CELL_SIZE * 2;

        if (_this.functionName === "Branch") {
            _this.icon = _resources.ICONS.BranchIcon;
        } else if (_this.functionName.indexOf("For Each") !== -1) {
            _this.icon = _resources.ICONS.ForEachIcon;
        } else if (_this.functionName.indexOf("Flip") !== -1) {
            _this.icon = _resources.ICONS.FlipFlopIcon;
        } else if (_this.functionName.indexOf("Valid") !== -1) {
            _this.icon = _resources.ICONS.ValidIcon;
        } else if (_this.functionName.indexOf("Sequence") !== -1) {
            _this.icon = _resources.ICONS.SequenceIcon;
        } else if (_this.functionName.indexOf("For Loop") !== -1) {
            _this.icon = _resources.ICONS.ForLoopIcon;
        } else {
            _this.icon = _resources.ICONS.MacroIcon;
        }
        return _this;
    }

    _createClass(MacroNode, [{
        key: 'draw',
        value: function draw(app) {
            _get(MacroNode.prototype.__proto__ || Object.getPrototypeOf(MacroNode.prototype), 'draw', this).call(this, app);

            this.headerText.x = -this.body.width / 2;
            this.headerText.y = -this.body.height / 2;

            this.headerText.y += this.gloss.height / 2;
            this.headerText.x += this.headerTextOffset;

            this.headerText.anchor.set(0, 0.5);

            this.fIcon.anchor.set(0.5, 0.5);
            this.fIcon.x = -this.body.width / 2;
            this.fIcon.y = -this.body.height / 2;

            this.fIcon.y += this.gloss.height / 2;
            this.fIcon.x += _config.CONFIG.CELL_SIZE;

            this.container.addChild(this.headerText);
            this.container.addChild(this.fIcon);
        }
    }, {
        key: 'init',
        value: function init() {
            this.headerText = new PIXI.Text(this.functionName, _config.defaultTextStyle);
            this.fIcon = PIXI.Sprite.fromImage(this.icon);
            this.calculateWidth();
            _get(MacroNode.prototype.__proto__ || Object.getPrototypeOf(MacroNode.prototype), 'init', this).call(this);
        }
    }, {
        key: 'calculateWidth',
        value: function calculateWidth() {
            var headerFullWidth = this.headerText.width + 2 * this.headerTextOffset;
            if (headerFullWidth > this.width) {
                this.width = _get(MacroNode.prototype.__proto__ || Object.getPrototypeOf(MacroNode.prototype), 'nearestCellWidth', this).call(this, headerFullWidth) * _config.CONFIG.CELL_SIZE;
            }
        }
    }]);

    return MacroNode;
}(_RegularNode3.default);

exports.default = MacroNode;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _VarNode2 = __webpack_require__(5);

var _VarNode3 = _interopRequireDefault(_VarNode2);

var _config = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GetterNode = function (_VarNode) {
    _inherits(GetterNode, _VarNode);

    function GetterNode(node, x, y, texturesHanlder) {
        _classCallCheck(this, GetterNode);

        var _this = _possibleConstructorReturn(this, (GetterNode.__proto__ || Object.getPrototypeOf(GetterNode)).call(this, node, x, y, texturesHanlder));

        _this.height = _config.CONFIG.CELL_SIZE * 2;
        var getterType = node.outputs[0].type.name;
        _this.colorTint = _config.VAR_COLORS[getterType];
        return _this;
    }

    _createClass(GetterNode, [{
        key: 'draw',
        value: function draw(nodesContainer) {
            _get(GetterNode.prototype.__proto__ || Object.getPrototypeOf(GetterNode.prototype), 'draw', this).call(this, nodesContainer);
            this.pinStartY = -this.body.height / 2 + _config.CONFIG.CELL_SIZE * 1.25;
            _get(GetterNode.prototype.__proto__ || Object.getPrototypeOf(GetterNode.prototype), 'drawPinRows', this).call(this);
        }
    }]);

    return GetterNode;
}(_VarNode3.default);

exports.default = GetterNode;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _VarNode2 = __webpack_require__(5);

var _VarNode3 = _interopRequireDefault(_VarNode2);

var _config = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SetterNode = function (_VarNode) {
    _inherits(SetterNode, _VarNode);

    function SetterNode(node, x, y, texturesHanlder) {
        _classCallCheck(this, SetterNode);

        var _this = _possibleConstructorReturn(this, (SetterNode.__proto__ || Object.getPrototypeOf(SetterNode)).call(this, node, x, y, texturesHanlder));

        var setterType = node.inputs[1].type.name;
        _this.colorTint = _config.VAR_COLORS[setterType];
        return _this;
    }

    _createClass(SetterNode, [{
        key: 'draw',
        value: function draw(nodesContainer) {
            _get(SetterNode.prototype.__proto__ || Object.getPrototypeOf(SetterNode.prototype), 'draw', this).call(this, nodesContainer);
            this.pinStartY = -this.body.height / 2 + _config.CONFIG.CELL_SIZE;
            _get(SetterNode.prototype.__proto__ || Object.getPrototypeOf(SetterNode.prototype), 'drawPinRows', this).call(this);
            this.setText = new PIXI.Text("SET", _config.defaultTextStyle);
            this.setText.anchor.set(0.5);
            this.setText.y = -this.body.height / 2 + _config.CONFIG.CELL_SIZE;
            this.container.addChild(this.setText);
        }
    }]);

    return SetterNode;
}(_VarNode3.default);

exports.default = SetterNode;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _RegularNode2 = __webpack_require__(2);

var _RegularNode3 = _interopRequireDefault(_RegularNode2);

var _config = __webpack_require__(0);

var _Textures = __webpack_require__(3);

var _Textures2 = _interopRequireDefault(_Textures);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BinaryOperatorNode = function (_RegularNode) {
    _inherits(BinaryOperatorNode, _RegularNode);

    function BinaryOperatorNode(node, x, y) {
        _classCallCheck(this, BinaryOperatorNode);

        var _this = _possibleConstructorReturn(this, (BinaryOperatorNode.__proto__ || Object.getPrototypeOf(BinaryOperatorNode)).call(this, node, x, y));

        _this.minCellWidth = 4;
        _this.showPinText = true;
        _this.inputOffset = _this.cellSize * 0.2;

        _this.pinRows = [];

        _this.titleHeight = 0;

        _this.node = node;

        _this.body = new PIXI.mesh.NineSlicePlane(_Textures2.default.mathNodeBodyTexture, 11, 11, 11, 11);
        _this.shadowSelected = new PIXI.mesh.NineSlicePlane(_Textures2.default.mathNodeShadowSelectedTexture, 21, 21, 21, 21);
        _this.config = {
            body: true,
            gloss: false,
            shadow: true,
            titleHighlight: false,
            colorSpill: false
        };
        return _this;
    }

    _createClass(BinaryOperatorNode, [{
        key: 'init',
        value: function init() {
            this.width = this.minCellWidth * _config.CONFIG.CELL_SIZE;

            var text = this.node.name;
            if (text.indexOf("Boolean") !== -1) {
                text = text.replace("Boolean", "").toUpperCase();
            } else if (text.indexOf("Int") !== -1 || text.indexOf("Float") !== -1 || text.indexOf("Enum") !== -1) {
                if (text.indexOf("And") !== -1) {
                    text = "&";
                } else if (text.indexOf("Or") !== -1) {
                    text = "|";
                } else if (text.indexOf("Multiply") !== -1) {
                    text = "x";
                } else if (text.indexOf("Equality") !== -1) {
                    text = "==";
                } else if (text.indexOf("Subtract") !== -1) {
                    text = "-";
                } else if (text.indexOf("Add") !== -1) {
                    text = "+";
                } else if (text.indexOf("Multiply") !== -1) {
                    text = "x";
                } else if (text.indexOf("Percent") !== -1) {
                    text = "%";
                } else if (text.indexOf("Divide") !== -1) {
                    text = "/";
                } else if (text.indexOf("Dot") !== -1) {
                    text = ".";
                } else if (text.indexOf("Greater") !== -1) {
                    if (text.indexOf("Equal") === -1) text = ">";else text = ">=";
                } else if (text.indexOf("Less") !== -1) {
                    if (text.indexOf("Equal") === -1) text = "<";else text = "<=";
                } else if (text.indexOf("Equal") !== -1 && text.indexOf("Not") !== -1) {
                    text = "!=";
                } else if (text.indexOf("Equal") !== -1) {
                    text = "=";
                } else if (text.indexOf("Not") !== -1) {
                    text = "NOT";
                }
            }

            this.operatorText = new PIXI.Text(text, _config.binaryOperatorTextStyle);
            if (this.operatorText.width > this.width) {
                this.width = _get(BinaryOperatorNode.prototype.__proto__ || Object.getPrototypeOf(BinaryOperatorNode.prototype), 'nearestCellWidth', this).call(this, this.operatorText.width) * _config.CONFIG.CELL_SIZE + _config.CONFIG.CELL_SIZE / 2;
            }
            ;

            _get(BinaryOperatorNode.prototype.__proto__ || Object.getPrototypeOf(BinaryOperatorNode.prototype), 'init', this).call(this);
        }
    }, {
        key: 'draw',
        value: function draw(nodesContainer) {
            _get(BinaryOperatorNode.prototype.__proto__ || Object.getPrototypeOf(BinaryOperatorNode.prototype), 'draw', this).call(this, nodesContainer);
            this.pinStartY = -this.body.height / 2 + _config.CONFIG.CELL_SIZE;

            this.operatorText.anchor.set(0.5, 0.5);
            this.container.addChild(this.operatorText);
            _get(BinaryOperatorNode.prototype.__proto__ || Object.getPrototypeOf(BinaryOperatorNode.prototype), 'drawPinRows', this).call(this);
        }
    }]);

    return BinaryOperatorNode;
}(_RegularNode3.default);

exports.default = BinaryOperatorNode;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(0);

var _Link = __webpack_require__(99);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LinksDrawer = function () {
    function LinksDrawer(container, nodes) {
        _classCallCheck(this, LinksDrawer);

        this.links = new PIXI.Container();
        this.nodes = nodes;
        container.addChild(this.links);
        this.draw();
    }

    _createClass(LinksDrawer, [{
        key: 'draw',
        value: function draw() {
            for (var i = 0, l = this.nodes.length; i < l; i++) {
                var node = this.nodes[i];
                for (var j = 0; j < node.pinRows.length; j++) {
                    if (node.pinRows[j].output) {
                        var color = _config.VAR_COLORS[node.pinRows[j].output.type.name];
                        for (var k = 0; k < node.pinRows[j].output.links.length; k++) {
                            var linkObj = new _Link2.default(node, node.pinRows[j].output, node.pinRows[j].output.links[k], color);
                            linkObj.draw();
                            this.links.addChild(linkObj.line);
                            if (!node.pinRows[j].output.lines) {
                                node.pinRows[j].output.lines = [];
                            }
                            node.pinRows[j].output.lines.push(linkObj);
                        }
                    }
                }
            }
        }
    }, {
        key: 'drawPath',
        value: function drawPath(node, pin, link, color) {
            var line = new PIXI.Graphics();
            var minOffset = 16;
            var startX = node.x + pin.sprite.x;
            //console.log(node);
            var startY = node.y + pin.sprite.y;

            var endX = link.parentX + link.sprite.x;
            ;
            var endY = link.parentY + link.sprite.y;

            //console.log(startX, startY, endX, endY);

            this.links.addChild(line);

            var deltaX = Math.abs(link.sprite.x + link.parentX - pin.sprite.x - node.x);

            var cOffset = deltaX > this.controlOffset && this.controlOffset || Math.max(deltaX, minOffset);

            var control1X = pin.sprite.x + cOffset + node.x;
            var control1Y = pin.sprite.y + node.y;

            var control2X = link.sprite.x - cOffset + link.parentX;
            var control2Y = link.sprite.y + link.parentY;

            line.lineStyle(this.linkThickness, color).moveTo(startX, startY).bezierCurveTo(control1X, control1Y, control2X, control2Y, endX, endY);
            return line;
        }
    }]);

    return LinksDrawer;
}();

exports.default = LinksDrawer;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Link = function () {
    function Link(node, pin, link, color) {
        _classCallCheck(this, Link);

        this.line = new PIXI.Graphics();
        this.linkThickness = 1;
        this.pin = pin;
        this.link = link;
        this.color = color;
        this.minOffset = 16;
        this.node = node;
    }

    _createClass(Link, [{
        key: "draw",
        value: function draw() {
            var startX = this.node.x + this.pin.sprite.x;
            //console.log(node);
            var startY = this.node.y + this.pin.sprite.y;

            var endX = this.link.parent.x + this.link.sprite.x;
            ;
            var endY = this.link.parent.y + this.link.sprite.y;

            //console.log(startX, startY, endX, endY);


            var deltaX = Math.abs(this.link.sprite.x + this.link.parent.x - this.pin.sprite.x - this.node.x);

            var cOffset = deltaX > this.controlOffset && this.controlOffset || Math.max(deltaX, this.minOffset);

            var control1X = this.pin.sprite.x + cOffset + this.node.x;
            var control1Y = this.pin.sprite.y + this.node.y;

            var control2X = this.link.sprite.x - cOffset + this.link.parent.x;
            var control2Y = this.link.sprite.y + this.link.parent.y;

            this.line.lineStyle(this.linkThickness, this.color).moveTo(startX, startY).bezierCurveTo(control1X, control1Y, control2X, control2Y, endX, endY);
        }
    }, {
        key: "redraw",
        value: function redraw() {
            this.line.clear();
            this.draw();
        }
    }]);

    return Link;
}();

exports.default = Link;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* Web Font Loader v1.6.28 - (c) Adobe Systems, Google. License: Apache 2.0 */(function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba;return p.apply(null,arguments)}var q=Date.now||function(){return+new Date};function ca(a,b){this.a=a;this.o=b||a;this.c=this.o.document}var da=!!window.FontFace;function t(a,b,c,d){b=a.c.createElement(b);if(c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));d&&b.appendChild(a.c.createTextNode(d));return b}function u(a,b,c){a=a.c.getElementsByTagName(b)[0];a||(a=document.documentElement);a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}
function w(a,b,c){b=b||[];c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}b=[];for(e=0;e<d.length;e+=1){f=!1;for(g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}
function ea(a){return a.o.location.hostname||a.a.location.hostname}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0;d()},b.onerror=function(){e=!0;g=Error("Stylesheet failed to load");d()}):setTimeout(function(){e=!0;d()},0);u(a,"head",b)}
function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))};e.appendChild(f);setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5E3);return f}return null};function B(){this.a=0;this.c=null}function C(a){a.a++;return function(){a.a--;D(a)}}function E(a,b){a.c=b;D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)};function F(a){this.a=a||"-"}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)};function G(a,b){this.c=a;this.f=4;this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function fa(a){return H(a)+" "+(a.f+"00")+" 300px "+I(a.c)}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";"o"===a.a?b="oblique":"i"===a.a&&(b="italic");return b}
function ga(a){var b=4,c="n",d=null;a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10))));return c+b};function ha(a,b){this.c=a;this.f=a.o.document.documentElement;this.h=b;this.a=new F("-");this.j=!1!==b.events;this.g=!1!==b.classes}function ia(a){a.g&&w(a.f,[a.a.c("wf","loading")]);K(a,"loading")}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive"));w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){if(a.j&&a.h[b])if(c)a.h[b](c.c,J(c));else a.h[b]()};function ja(){this.c={}}function ka(a,b,c){var d=[],e;for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d};function M(a,b){this.c=a;this.f=b;this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";"+("font-style:"+H(a)+";font-weight:"+(a.f+"00")+";")};function P(a,b,c,d,e,f){this.g=a;this.j=b;this.a=d;this.c=c;this.f=e||3E3;this.h=f||void 0}P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){function f(){q()-c>=b.f?e():a.fonts.load(fa(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}f()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null);b.g(b.a)},function(){b.j(b.a)})};function Q(a,b,c,d,e,f,g){this.v=a;this.B=b;this.c=c;this.a=d;this.s=g||"BESbswy";this.f={};this.w=e||3E3;this.u=f||null;this.m=this.j=this.h=this.g=null;this.g=new M(this.c,this.s);this.h=new M(this.c,this.s);this.j=new M(this.c,this.s);this.m=new M(this.c,this.s);a=new G(this.a.c+",serif",J(this.a));a=O(a);this.g.a.style.cssText=a;a=new G(this.a.c+",sans-serif",J(this.a));a=O(a);this.h.a.style.cssText=a;a=new G("serif",J(this.a));a=O(a);this.j.a.style.cssText=a;a=new G("sans-serif",J(this.a));a=
O(a);this.m.a.style.cssText=a;N(this.g);N(this.h);N(this.j);N(this.m)}var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth;this.f["sans-serif"]=this.m.a.offsetWidth;this.A=q();U(this)};
function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var b=a.g.a.offsetWidth,c=a.h.a.offsetWidth,d;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c));d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):ma(a):V(a,a.v)}function ma(a){setTimeout(p(function(){U(this)},a),50)}function V(a,b){setTimeout(p(function(){v(this.g.a);v(this.h.a);v(this.j.a);v(this.m.a);b(this.a)},a),0)};function W(a,b,c){this.c=a;this.a=b;this.f=0;this.m=this.j=!1;this.s=c}var X=null;W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]);K(b,"fontactive",a);this.m=!0;na(this)};
W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive"));w(b.f,d,e)}K(b,"fontinactive",a);na(this)};function na(a){0==--a.f&&a.j&&(a.m?(a=a.a,a.g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))};function oa(a){this.j=a;this.a=new ja;this.h=0;this.f=this.g=!0}oa.prototype.load=function(a){this.c=new ca(this.j,a.context||this.j);this.g=!1!==a.events;this.f=!1!==a.classes;pa(this,new ha(this.c,a),a)};
function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||null||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length;f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]);K(r,"fontloading",x);r=null;if(null===X)if(window.FontFace){var x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent),xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);
X=x?42<parseInt(x[1],10):xa?!1:!0}else X=!1;X?r=new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):r=new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n);l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function pa(a,b,c){var d=[],e=c.timeout;ia(b);var d=ka(a.a,c,a.c),f=new W(a.c,b,e);a.h=d.length;b=0;for(c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})};function ra(a,b){this.c=a;this.a=b}
ra.prototype.load=function(a){function b(){if(f["__mti_fntLst"+d]){var c=f["__mti_fntLst"+d](),e=[],h;if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+
d]=function(){return c.a},b())}).id="__MonotypeAPIScript__"+d}else a([])};function sa(a,b){this.c=a;this.a=b}sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;b=0;for(c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];b=0;for(c=e.length;b<c;b++)if(d=e[b].split(":"),d[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};function ta(a,b){a?this.c=a:this.c=ua;this.a=[];this.f=[];this.g=b||""}var ua="https://fonts.googleapis.com/css";function va(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":");a.a.push(e.join(f))}}
function wa(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));b=a.c+"?family="+c.join("%7C");0<a.f.length&&(b+="&subset="+a.f.join(","));0<a.g.length&&(b+="&text="+encodeURIComponent(a.g));return b};function ya(a){this.f=a;this.a=[];this.c={}}
var za={latin:"BESbswy","latin-ext":"\u00e7\u00f6\u00fc\u011f\u015f",cyrillic:"\u0439\u044f\u0416",greek:"\u03b1\u03b2\u03a3",khmer:"\u1780\u1781\u1782",Hanuman:"\u1780\u1781\u1782"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},
Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;
function Da(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;var m=d[1];g=[];if(m)for(var m=m.split(","),h=m.length,l=0;l<h;l++){var k;k=m[l];if(k.match(/^[\w-]+$/)){var n=Ca.exec(k.toLowerCase());if(null==n)k="";else{k=n[2];k=null==k||""==k?"n":Ba[k];n=n[1];if(null==n||""==n)n="4";else var r=Aa[n],n=r?r:isNaN(n)?"4":n.substr(0,1);k=[k,n].join("")}}else k="";k&&g.push(k)}0<g.length&&(f=g);3==d.length&&(d=d[2],g=[],d=d?d.split(","):
g,0<d.length&&(d=za[d[0]])&&(a.c[e]=d))}a.c[e]||(d=za[e])&&(a.c[e]=d);for(d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}};function Ea(a,b){this.c=a;this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};Ea.prototype.load=function(a){var b=new B,c=this.c,d=new ta(this.a.api,this.a.text),e=this.a.families;va(d,e);var f=new ya(e);Da(f);z(c,wa(d),C(b));E(b,function(){a(f.a,f.c,Fa)})};function Ga(a,b){this.c=a;this.a=b}Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2E3):a([])};function Ha(a,b){this.c=a;this.f=b;this.a=[]}Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+ea(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)};Y.a.c.fontdeck=function(a,b){return new Ha(b,a)};Y.a.c.monotype=function(a,b){return new ra(b,a)};Y.a.c.typekit=function(a,b){return new Ga(b,a)};Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)}; true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return Z}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"undefined"!==typeof module&&module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig));}());


/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map