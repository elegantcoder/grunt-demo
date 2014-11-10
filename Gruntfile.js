module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          hostname: 'localhost',
          base: 'client'
        }
      }
    },
    watch: {
      html: {
        files: ['client/**/*.html'],
        tasks: [],
        options: {
          spawn: false,
          livereload: true
        },
      },
    },
  });


  grunt.registerTask('serve', [
    'connect:server',
    'watch'
  ])
};
