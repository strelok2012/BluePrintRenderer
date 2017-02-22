module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            basic_and_extras: {
                files: {
                    'dist/<%= pkg.name %>.js': [
                        "src/new.svg.js",
                        "src/svg.absorb.js",
                        "src/svg.filter.js",
                        "src/jsface.js",
                        "src/vector.js",
                        "src/saveSvgAsPng.js",
                        "src/app/Drawers/LinksDrawer.js",
                        "src/app/Drawers/NodesDrawer.js",
                        "src/app/Drawers/InterfaceDrawer.js",
                        "src/app/Globals.js",
                        "src/app/Parser/BPParser.js",
                        "src/app/Parser/BPToNodes.js",
                        "src/app/Nodes/AbstractNode.js",
                        "src/app/Nodes/CommentNode.js",
                        "src/app/Nodes/FunctionNode.js",
                        "src/app/Nodes/GetterNode.js",
                        "src/app/Nodes/SetterNode.js",
                        "src/app/Nodes/EventNode.js",
                        "src/app/Nodes/ConverterNode.js",
                        "src/app/Nodes/BinaryOperatorNode.js",
                        "src/app/Nodes/MacroNode.js",
                        "src/app/Nodes/RerouteNode.js",
                        "src/app/Nodes/ArrayFunctionNode.js",
                        "src/app/Nodes/CastNode.js",
                        "src/app/Nodes/TimelineNode.js",
                        "src/app/Nodes/CallDelegateNode.js",
                        "src/app/Nodes/UnknownNode.js",
                        "src/app/Nodes/SelectNode.js",
                        "src/app/Nodes/CompositeNode.js",
                        "src/app/App/Config.js",
                        "src/app/App/Grid.js",
                        "src/app/App/BlueprintRenderer.js"
                    ]
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');



    grunt.registerTask('default', ['concat']);

};
