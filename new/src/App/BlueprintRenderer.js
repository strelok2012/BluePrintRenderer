import BPParser from '../Parser/BPParser.js';

export default class BlueprintRenderer {
    renderFromText(bpText) {
        this.parse(bpText);
    }
    renderFromFile(bpFileName, callback) {
        var client = new XMLHttpRequest();
        var self = this;
        client.open('GET', bpFileName);
        client.onreadystatechange = function () {
            if (client.readyState === 4 && client.status === 200)
            {
                if (client.responseText)
                    self.parse(client.responseText, callback);
            }
        }
        client.send();
    }
    parse(bpText, cb) {
        var parser = new BPParser(bpText);
        this.blueprintObjects = parser.parseText();
        cb(this.blueprintObjects);
    }
}