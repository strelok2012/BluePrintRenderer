var CONFIG = {
    CELL_SIZE: 16
}

var VAR_COLORS = {
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
    exec: 0xfff,
    interface: 0xc9d58f,
    macro: 0xb7b4aa,
    wildcard: 0x7f7979,
    dynamicCast: 0x258489,
    timeline: 0x9d7e24,
    parent: 0x854613,
    switch_on: 0x8f9013
};

var HIDDEN_PIN_NAMES = ["Output_Get"]

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
    for_loop: "icon_Blueprint_Loop_16x.png",
    make_array: "icon_Blueprint_MakeArray_16x.png",
    flip_flop: "icon_Blueprint_FlipFlop_16x.png",
    dynamic_cast: "icon_Blueprint_Cast_16x.png",
    timeline: "icon_Blueprint_Timeline_16x.png",
    node: "icon_Blueprint_Node_16x.png",
    message: "MessageIcon.png",
    latent: "LatentIcon.png",
    valid: "icon_Blueprint_IsValid_16x.png",
    select: "icon_Blueprint_Select_16x.png",
    sequence: "icon_Blueprint_Sequence_16x.png",
    macro: "icon_Blueprint_Macro_16x.png",
    keyboard: "icon_Blueprint_KeyboardEvent_16x.png",
    switch_on: "icon_Blueprint_Switch_16x.png",
    mouse: "icon_Blueprint_MouseEvent_16x.png",
    fullscreen: "LV_FullScreen.png",
    save: "LV_Save.png"
}

var FUNCTIONS_MAPPING = {
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
        icon: ICONS["switch_on"],
        morpher: function (obj) {
            obj.color = VAR_COLORS["switch_on"];
            return obj;
        }
    },
    K2Node_SwitchEnum: {
        text: "Switch on Enum",
        icon: ICONS["switch_on"],
        morpher: function (obj) {
            obj.color = VAR_COLORS["switch_on"];
            return obj;
        }
    },
    K2Node_SwitchString: {
        text: "Switch on String",
        icon: ICONS["switch_on"],
        morpher: function (obj) {
            obj.color = VAR_COLORS["switch_on"];
            return obj;
        }
    },
    K2Node_CallParentFunction: {
        morpher: function (obj) {
            obj.name = "Parent: " + obj.name;
            obj.isParent = true;
            return obj;
        }
    },
    K2Node_AddComponent: null,
    K2Node_FormatText: {
        text: "Format Text",
        icon: ICONS["node"],
        morpher: function (obj) {
            obj.isPure = true;
            return obj;
        }
    },
    K2Node_GetInputVectorAxisValue: {
        icon: ICONS["keyboard"],
        morpher: function (obj, node) {
            obj.isPure = true;
            obj.name = "Get " + node.inputAxisKey;
            return obj;
        }
    },
    K2Node_GetDataTableRow: {
        text: "Get Data Table Row"
    }
}

var NAME_MAPPING = {
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
    "Conv_Text To String": "ToString(text)",
}

var FUNCTION_NAMES_MAPPING = {
    Array_Set: "Set Array Elem"
}

var ARRAY_FUNCTION_NAMES_MAPPING = {
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
}