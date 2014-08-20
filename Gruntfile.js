module.exports = function(grunt) {

    // Project configuration
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        // Eval code live
        watch: {
            js: {
                files: ['src/scripts/main.js','Gruntfile.js'],
                tasks: ['jsbeautifier:JS','jshint']
            }
        },
        // Eval code
        jshint: {
            options: {
                'node': true,
                'curly': true,
                'eqnull': true,
                'undef': true,
                'unused': true,
                'trailing': true,
                'indent': 4,
                'newcap': true,
                'camelcase': true,
                'browser': true,
                'noempty': true,
                'nonbsp': true,
                'quotmark': true,
                'bitwise': false,
                'globals': {
                    'jQuery': true,
                    '$': true
                }
            },
            all: ['Gruntfile.js', 'src/scripts/*.js']
        },
        // Concat files
        concat: {
            main: {
                options: {
                    banner:'/*\n' +
                        '  * <%= pkg.name %> v<%= pkg.version %>\n' +
                        '  * \u00A9 Copyright <%= pkg.author %> <%= grunt.template.today("yyyy") %>\n' +
                        '  * Built on: <%= grunt.template.today("mm-dd-yyyy") %>\n' +
                        ' */\n\n'
                },
                src: ['src/scripts/*.js'],
                dest: 'build/<%=  pkg.name %>.<%= pkg.version %>.js'
            }
        },
        // Minify
        uglify: {
            minify: {
                options: {
                    compress: true,
                    mangle: true,
                    banner:'/*\n' +
                        '  * <%= pkg.name %> v<%= pkg.version %>\n' +
                        '  * \u00A9 Copyright <%= pkg.author %> <%= grunt.template.today("yyyy") %>\n' +
                        '  * Built on: <%= grunt.template.today("mm-dd-yyyy") %>\n' +
                        ' */\n\n'
                },
                files: {
                    'build/<%=  pkg.name %>.<%= pkg.version %>.min.js': ['build/<%=  pkg.name %>.<%= pkg.version %>.js'],
                }
            }
        }

    });

    // Load the Grunt plugins matching grunt-*.
    require('load-grunt-tasks')(grunt, {pattern: 'grunt-*'});

    // Register the tasks
    grunt.loadTasks('grunt/tasks');

};