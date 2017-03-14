module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            basic_and_extras: {
                files: {
                    'dist/<%= pkg.name %>.js': [
                        "node_modules/svg.js/dist/svg.min.js",
                        "node_modules/svg.absorb.js/svg.absorb.min.js",
                        "node_modules/svg.filter.js/dist/svg.filter.min.js",
                        "dist/assets.js",
                        "src/libs/vector.js",
                        "src/libs/saveSvgAsPng.js",
                        "src/app/Globals.js",
                        "src/app/Drawers/LinksDrawer.js",
                        "src/app/Drawers/NodesDrawer.js",
                        "src/app/Drawers/InterfaceDrawer.js",
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
        },
        uglify: {
            app: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js']
                }
            }
        },
        assetenc: {
            pathToAssets: "assets",
            rootAlias: "icons",
            dst: "dist/assets.js",
            template: "src/assets/template.js"
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-encode-asset-base64');


    grunt.registerTask('default', ['assetenc','concat','uglify']);

};
