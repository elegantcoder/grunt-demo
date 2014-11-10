module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000,
          hostname: 'localhost',
          base: ['client', '.tmp']
        }
      }
    },
    watch: {
      html: {
        files: ['client/**/*.html'],
        tasks: [],
        options: {
          livereload: true
        },
      },
      styles: {
        files: ['client/**/*.css'],
        tasks: [],
        options: {
          livereload: true
        },
      },
      sass: {
        files: ['client/**/*.scss'],
        tasks: ['sass'],
        options: {
          livereload: true
        },
      }
    },
    sass: {
      serve: {
        files: [{
          expand: true,
          cwd: 'client/styles',
          src: ['**/*.scss'],
          dest: '.tmp',
          ext: '.css'
        }]
      }
    }
  });

  grunt.registerTask('serve', [
    'connect:server',
    'sass',
    'watch'
  ])
};
