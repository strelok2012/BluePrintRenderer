export default class BPParser {
    constructor(text) {
        this.text = text;
        this.txt = this.text.split("\n");
    }
    getObject() {

    }
    strToObject(str, obj) {
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
            } else if (((i + 1 > str.length) || (str[i] === " ")) && currentProperty) {
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
    strToObjectParams(str, obj) {
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
    parseObject(lineCounter, stack) {
        if (this.txt[lineCounter].length === 0)
            return lineCounter;
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
    verify(txt) {
        var bCount = 0, eCount = 0;
        txt.forEach(function (str) {
            if (str.indexOf("Begin Object") !== -1) {
                bCount++;
            } else if (str.indexOf("End Object") !== -1) {
                eCount++;
            }
        });

        if (eCount === bCount)
            return true;


        return false;

    }
    parseText() {
        var txt = this.txt;
        var retObj = {};
        var objects = [];
        var res = 0;
        if (!this.verify(this.txt))
            return null;
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
                if (currentNode.FunctionReference.MemberParent)
                    currentNode["nodeParent"] = currentNode.FunctionReference.MemberParent;
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
                        if (currentNode.ComponentPropertyName)
                            currentNode["nodeName"] += " (" + currentNode.ComponentPropertyName.replace(/["']/g, "") + ")";
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
                if (currentNode["nodeName"])
                    currentNode["nodeName"] += currentNode["InputActionName"];
                else if (currentNode["Class"]) {
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
                    if (item.Class)
                        currentNode.objects.splice(j, 1);
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
                        if (currentNode.objects[k].PinType)
                            newPin.pinType = currentNode.objects[k].PinType.PinCategory;
                        if (currentNode.objects[k].PinType && currentNode.objects[k].PinType.bIsArray) {
                            newPin.isArray = true;
                        }
                        if (currentNode.objects[k].PinType && currentNode.objects[k].PinType.PinSubCategoryObject) {
                            newPin.subType = currentNode.objects[k].PinType.PinSubCategoryObject;
                            if (newPin.subType.indexOf("ScriptStruct") !== -1) {
                                var start_pos = newPin.subType.indexOf('\'') + 1;
                                var end_pos = newPin.subType.indexOf('\'', start_pos);
                                var quotesText = newPin.subType.substring(start_pos, end_pos)
                                var tmp = quotesText.split("/");
                                var subType = tmp[tmp.length - 1];
                                newPin.pinSubType = subType.split(".")[1].toLowerCase();
                            }
                        }
                        if (currentNode.objects[k].PinName) {
                            newPin.pinText = currentNode.objects[k].PinName.replace(/["']/g, "")
                            if (newPin.pinText.indexOf(" ") === -1) {
                                newPin.pinText = newPin.pinText.fromCamelCase();
                            }
                            if (newPin.pinText[0] === "b") {
                                newPin.pinText = newPin.pinText.substr(1, newPin.pinText.length - 1);
                            }
                        } else {
                            newPin.pinText = "";
                        }


                        newPin.isOutput = (currentNode.objects[k].Direction && currentNode.objects[k].Direction === "EGPD_Output") && true || false;
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
                        if (str[0] === '"')
                            currentPin[k] = currentPin[k].substr(1, currentPin[k].length - 2)

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
                    if (str[0] === '"')
                        currentNode[k] = currentNode[k].substr(1, currentNode[k].length - 2)

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
}
