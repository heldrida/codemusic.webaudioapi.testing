/*globals module, grunt*/

module.exports = function (grunt) {

  'use strict';

  // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            options: {
                livereload: true,
                spawn: false
            },
            html: {
                files: ['*.html']
            },
            sass: {
                files: ['sass/main.scss'],
                tasks: ['compass'],
                spawn: false
            },
            scripts: {
                files: ['js/main.js']
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    outputStyle: 'expanded'
                }
            }
        }
    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    // Default task(s)
    grunt.registerTask('default', ['watch']);

};