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
      },
      imagemin:{
        files:['resume/images/**/*.{png,jpg,jpeg,gif}'],
        tasks:['imagemin']
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
          // 不压缩require关键字
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
          }, 
          // {
          //   expand: true,
          //   cwd: 'static/javascript/',
          //   src: ['*.js'],
          //   dest: 'static/js/',
          //   ext: '.js'
          // }
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
      dynamic:{
        files:[{
          expand:true,
          cwd:'resume/images/',
          src:['**/*.{png,jpg,jpeg,gif}'],
          dest:'resume/img/'
        }]
      }
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