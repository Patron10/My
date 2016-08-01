module.exports = function(grunt) {

  grunt.initConfig({
   concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.main.js'
      },
       dist: {
        src: ['css/css/*.css'],
        dest: 'css/dist/style7.css'
      }
    },
      uglify: {
          dist: {
              src: ['js/dist/script.main.js'],
              dest: 'js/dist/script.main.min.js'
          },
           dist: {
              src: ['css/dist/style7.css'],
              dest: 'css/dist/style8.css'
          }
      },
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.registerTask('default', ['concat', 'uglify']);

};