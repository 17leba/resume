/*
 * grunt
 * http://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt/blob/master/LICENSE-MIT
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      jsmin: {
        files: ['resume/javascript/*.js', 'static/javascript/*.js'],
        tasks: ['uglify']
      },
      cssmin: {
        files: ['resume/style/*.css'],
        tasks: ['cssmin']
      }
    },
    concat: {
      dist: {
        files: {}
      }
    },
    uglify: {
      options: {
        mangle: {
          // ²»Ñ¹Ëõrequire¹Ø¼ü×Ö
          except: ['require']
        }
      },
      dynamic_mappings: {
        files: [
          // js
          {
            expand: true,
            cwd: 'resume/javascript/',
            src: ['*.js'],
            dest: 'resume/js/',
            ext: '-min.js'
          }, {
            expand: true,
            cwd: 'static/javascript/',
            src: ['*.js'],
            dest: 'static/js/',
            ext: '.js'
          }
        ]
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: 'resume/style/',
        src: ['*.css'],
        dest: 'resume/css/',
        ext: '-min.css'
      }
    },
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: {
          'resume/img/dice.png': 'resume/images/dice.png',
          'resume/img/embellish.png': 'resume/images/embellish.png',
          'resume/img/game-cover.png': 'resume/images/game-cover.png',
          'resume/img/grass-bg.png': 'resume/images/grass-bg.png',
          'resume/img/jumpers.png': 'resume/images/jumpers.png',
          'resume/img/main.png': 'resume/images/main.png',
          'resume/img/runners.png': 'resume/images/runners.png',
          'resume/img/sub-img.png': 'resume/images/sub-img.png',
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('My resume', ['uglify', 'cssmin', 'imagemin']);

  // Default task.
  grunt.registerTask('default', ['My resume']);

};