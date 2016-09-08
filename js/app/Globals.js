var CONFIG = {
    GRID_STEP: 16,
    GRID_COEFF: 3
}

var VAR_TYPES = {
    bool: {code: 0, name: "bool"},
    byte: {code: 1, name: "byte"},
    int: {code: 2, name: "int"},
    float: {code: 3, name: "float"},
    name: {code: 4, name: "name"},
    string: {code: 5, name: "string"},
    text: {code: 6, name: "text"},
    vector: {code: 7, name: "vector"},
    rotator: {code: 8, name: "rotator"},
    transform: {code: 9, name: "transform"},
    actor: {code: 10, name: "actor"},
    event: {code: 11, name: "delegateOut"},
    object: {code: 12, name: "object"},
    class: {code: 13, name: "class"},
    struct: {code: 14, name: "struct"},
    exec: {code: 15, name: "exec"},
    interface: {code: 16, name: "interface"},
    macro: {code: 17, name: "macro"},
    delegate: {code: 18, name: "delegate"},
    wildcard: {code: 19, name: "wildcard"}
};

var ICONS = {
    branch: "icon_Blueprint_Branch_16x.png",
    make_struct: "icon_Blueprint_MakeStruct_16x.png",
    break_struct: "icon_Blueprint_BreakStruct_16x.png",
    event_custom: "icon_Blueprint_CustomEvent_16x.png",
    event: "icon_Blueprint_Event_16x.png",
    for_each: "icon_Blueprint_ForEach_16x.png",
    make_array: "icon_Blueprint_MakeArray_16x.png",
    flip_flop: "icon_Blueprint_FlipFlop_16x.png",
    dynamic_cast: "icon_Blueprint_Cast_16x.png",
    timeline: "icon_Blueprint_Timeline_16x.png",
    node: "icon_Blueprint_Node_16x.png",
    message: "MessageIcon.png",
    latent: "LatentIcon.png",
    valid: "icon_Blueprint_IsValid_16x.png"
}

var VAR_COLORS = {
    bool: "#8c0202",
    byte: "#026960",
    int: "#1ed6a4",
    float: "#97ef42",
    name: "#c07bef",
    string: "#ef02c8",
    text: "#d975a0",
    vector: "#efbd22",
    rotator: "#97a9ef",
    transform: "#eb6b02",
    actor: "#02a2e9",
    execFunction: "#5b8fb1",
    execFunctionF: "#79c9ff",
    pureFunction: "#83b47c",
    pureFunctionF: "#aaeea0",
    event: "#8d1313",
    delegate: "#ff3838",
    object: "#0481b7",
    class: "#5501b3",
    struct: "#024bab",
    exec: "#fff",
    interface: "#c9d58f",
    macro: "#b7b4aa",
    wildcard: "#7f7979",
    dynamicCast: "#258489",
    timeline: "#9d7e24"
};


var createBezierPathT = function (startX, startY, control1X, control1Y, control2X, control2Y, endX, endY) {
    return 'C ' + control1X + ',' + control1Y + ', ' + control2X + ',' + control2Y + ', ' + endX + ',' + endY;
};


var fSymbol = "m 0,0 q -0.63477,0 -1.06201,-0.15259 l 0,-1.47705 q 0.37231,0.12818 0.7019,0.12818 0.83008,0 1.04981,-1.0376 l 1.13525,-5.3772 -1.02539,0 0.177,-0.90942 1.15357,-0.48828 0.10986,-0.5127 q 0.25024,-1.15967 0.84228,-1.69067 0.59815,-0.53711 1.67237,-0.53711 0.79956,0 1.43432,0.29907 l -0.48828,1.36719 q -0.42114,-0.18921 -0.81176,-0.18921 -0.34791,0 -0.56153,0.24414 -0.21362,0.24414 -0.28686,0.64087 l -0.0732,0.37842 1.33667,0 -0.29907,1.3977 -1.34277,0 -1.19629,5.65186 q -0.46997,2.2644 -2.46582,2.2644 z"

var eventArrow = "m19.666 0.0000015532c-0.635-0.00071-1.272 0.24199-1.759 0.72851l-17.174 17.13c-0.97546 0.97305-0.97718 2.5424-0.004 3.5176l17.131 17.164c0.97328 0.97523 2.5421 0.97695 3.5176 0.004l17.174-17.131c0.97545-0.97304 0.97718-2.5424 0.004-3.5176l-17.132-17.163c-0.486-0.4881-1.122-0.7322-1.758-0.73291zm-0.972 4.8379c0-1.4496 3.7208 1.7531 7.7668 5.4192s8.417 7.7958 8.417 9.2839c0 1.4882-4.3711 5.2806-8.417 9.1575-4.046 3.8769-7.7668 7.8382-7.7668 5.5456v-9.8848h-8.3514v-4.8184-4.8164h8.3514z";

var checkSymbol = "M 41.272753,92.252341 52.470676,104.29345 71.57596,74.519064"

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
}

function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        if (typeof Error !== "undefined") {
            throw new Error(message);
        }
        throw message; // Fallback
    }
}


function isLetter(c) {
    return c.toLowerCase() !== c.toUpperCase();
}


var createBezierPath = function (startX, startY, control1X, control1Y, control2X, control2Y, endX, endY) {
    return 'M ' + startX + ',' + startY + ' C ' + control1X + ',' + control1Y + ', ' + control2X + ',' + control2Y + ', ' + endX + ',' + endY;
};

var createSmoothPath = function (startX, startY, endX, endY) {
    return 'M ' + startX + ',' + startY + ' S ' + startX + ',' + startY + ' ' + endX + ',' + endY;
};


function intersectNode(node1, node2, scale, drawer, origin) {
    var s = scale || 1;
    if (node1.x + node1.width < node2.x * s || node2.x * s + node2.width * s < node1.x || node1.y + node1.height < node2.y * s || node2.y * s + node2.height * s < node1.y) {
        return false;
    } else {
        return true;
    }
}

function intersectNodeSelectable(node1, node2, scale, drawer, origin) {
    var s = scale || 1;
    if (node1.x + node1.width < node2.x * s || node2.x * s + node2.width * s < node1.x || node1.y + node1.height < node2.y * s || node2.y * s + node2.selectableHeight * s < node1.y) {
        return false;
    } else {
        return true;
    }
}

function inNode(node1, node2) {
    if (node2.x >= node1.x &&
            node2.x + node2.width <= node1.x + node1.width &&
            node2.y >= node1.y &&
            node2.y + node2.height <= node1.height + node1.y) {
        return true;
    } else
        return false;
}


function deepCopy(obj) {
    if (Object.prototype.toString.call(obj) === '[object Array]') {
        var out = [], i = 0, len = obj.length;
        for (; i < len; i++) {
            out[i] = arguments.callee(obj[i]);
        }
        return out;
    }
    if (typeof obj === 'object') {
        var out = {}, i;
        for (i in obj) {
            out[i] = arguments.callee(obj[i]);
        }
        return out;
    }
    return obj;
}

var varNodeGlossSize = [64, 28];

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(Math.floor(r)) + componentToHex(Math.floor(g)) + componentToHex(Math.floor(b));
}

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}