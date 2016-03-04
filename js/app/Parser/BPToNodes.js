function BPToNodes(objects) {
	var minX, minY;
	minX = objects[0].nodePosX;
	minY = objects[0].nodePosY;

	for (var i = 0; i < objects.length; i++) {
		var curObj = objects[i];

		if (parseInt(curObj.nodePosX) < minX)
			minX = curObj.nodePosX;
		if (parseInt(curObj.nodePosY) < minY)
			minY = curObj.nodePosY;
	}

	for (var i = 0; i < objects.length; i++) {
		var curObj = objects[i];
		if (!curObj.nodePosY)
			curObj.nodePosY = 0;
		if (!curObj.nodePosX)
			curObj.nodePosX = 0;
		curObj.nodePosY -= minY;
		curObj.nodePosX -= minX;
	}

	var maxX = 0, maxY = 0;

	for (var i = 0; i < objects.length; i++) {
		var curObj = objects[i];

		if (curObj.nodePosY > maxY)
			maxY = curObj.nodePosY;

		if (curObj.nodePosX > maxX)
			maxX = curObj.nodePosX;
	}



	var links = [];
	for (var i = 0; i < objects.length; i++) {
		var curObj = objects[i];
		var x, y;
		var newNode;
		var nN;
		x = curObj.nodePosX;
		y = curObj.nodePosY;
		if (curObj.class.indexOf("EdGraphNode_Comment") !== -1) {
			newNode = {
				name: curObj.nodeComment,
				width: curObj.nodeWidth,
				height: curObj.nodeHeight
			};
			nN = new CommentNode(newNode, x, y);
			nodes.push(nN);
		}

	}


	for (var i = 0; i < objects.length; i++) {
		var curObj = objects[i];

		var inputs = [];
		var outputs = [];
		var x, y;
		var newNode;
		var nN;
		x = curObj.nodePosX;
		y = curObj.nodePosY;



		for (var j = 0; j < curObj.pins.length; j++) {
			var curPin = curObj.pins[j];
			var pinType = VAR_TYPES[curPin.pinSubType] && VAR_TYPES[curPin.pinSubType] || VAR_TYPES[curPin.pinType];
			if (curPin.bHidden === "True")
				continue;

			if (curPin.isOutput) {
				for (var k = 0; k < curPin.linkedTo.length; k++) {
					links.push({from: curPin.pinId, to: curPin.linkedTo[k]})
				}
			}
			var newPin = {name: curPin.pinFriendlyName && curPin.pinFriendlyName || curPin.pinText, type: pinType, id: curPin.pinId};
			if (curPin.isOutput) {
				outputs.push(newPin);
			}
			else {
				inputs.push(newPin);
			}
		}

		if (curObj.class.indexOf("K2Node_CallFunction") !== -1 || curObj.class.indexOf("K2Node_SpawnActorFromClass") !== -1 || curObj.class.indexOf("K2Node_GetInputAxisValue") !== -1) {
			if (curObj.class.indexOf("K2Node_SpawnActorFromClass") !== -1)
				curObj.nodeName = "Spawn Actor"
			newNode = {
				isPure: curObj.bIsPureFunc && curObj.bIsPureFunc === "True",
				name: curObj.nodeName,
				inputs: inputs,
				outputs: outputs
			};

			if (newNode.name.indexOf("Conv_") !== -1) {
				nN = new ConverterNode(newNode, x, y);
			}
			else {
				nN = new FunctionNode(newNode, x, y);
			}

		}
		else if (curObj.class.indexOf("EdGraphNode_Comment") !== -1) {
			continue
		}
		else if (curObj.class.indexOf("K2Node_MacroInstance") !== -1 || curObj.class.indexOf("K2Node_IfThenElse") !== -1 || curObj.class.indexOf("K2Node_ExecutionSequence") !== -1) {
			if (curObj.class.indexOf("K2Node_IfThenElse") !== -1)
				curObj.nodeName = "Branch"
			else if (curObj.class.indexOf("K2Node_ExecutionSequence") !== -1)
				curObj.nodeName = "Sequence"
			newNode = {
				name: curObj.nodeName,
				inputs: inputs,
				outputs: outputs
			};

			nN = new MacroNode(newNode, x, y);

		}
		else if (curObj.class.indexOf("K2Node_Event") !== -1 || curObj.class.indexOf("K2Node_CustomEvent") !== -1 || curObj.class.indexOf("K2Node_ComponentBoundEvent") !== -1) {

			newNode = {
				name: curObj.nodeName,
				inputs: inputs,
				outputs: outputs,
				isCustom: curObj.isCustom
			};

			nN = new EventNode(newNode, x, y);

		}
		else if (curObj.class.indexOf("K2Node_VariableGet") !== -1 || curObj.class.indexOf("K2Node_Self") !== -1) {
			newNode = {
				outputs: outputs
			};


			nN = new GetterNode(newNode, x, y);

		}
		else if (curObj.class.indexOf("Set") !== -1) {
			newNode = {
				outputs: outputs,
				inputs: inputs
			};
			nN = new SetterNode(newNode, x, y);
		}
		else if (curObj.class.indexOf("Operator") !== -1) {
			newNode = {
				name: curObj.nodeName,
				inputs: inputs,
				outputs: outputs
			};
			nN = new BinaryOperatorNode(newNode, x, y);
		}


		nodes.push(nN);
	}

	for (var i = 0; i < links.length; i++) {
		var curLink = links[i];
		var from = null;
		var to = null;
		var nodeFrom = null;
		for (var j = 0; j < nodes.length; j++) {
			if (nodes[j].outputs) {
				for (var k = 0; k < nodes[j].outputs.length; k++) {
					if (nodes[j].outputs[k].id === curLink.from) {
						from = nodes[j].outputs[k];
						nodeFrom = nodes[j];
						break;
					}
				}
			}
			if (nodes[j].inputs) {
				for (var k = 0; k < nodes[j].inputs.length; k++) {
					if (nodes[j].inputs[k].id === curLink.to) {
						to = nodes[j].inputs[k];
						break;
					}
				}
			}
		}
		nodeFrom.setOutputLink(from, to);

	}

	return nodes;
}

