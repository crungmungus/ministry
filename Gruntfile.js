module.exports = function(grunt) {
  grunt.initConfig({
    express: { 
      dev: {
        options: {
          script: 'ministry.js',
          background: false,
          debug : true
        }
      }
    },
    watch: {
      express: {
        files:  [ '*' ],
        tasks:  [ 'express:dev' ],
        options: {
          spawn: false
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.registerTask('run', ['express:dev', 'watch']);
};