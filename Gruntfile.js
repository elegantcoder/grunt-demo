module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-injector');

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
        tasks: ['injector'],
        options: {
          livereload: true
        },
      },
      styles: {
        files: ['client/**/*.css'],
        tasks: ['injector'],
        options: {
          livereload: true
        },
      },
      script: {
        files: ['client/**/*.js'],
        tasks: ['injector'],
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
    },
    injector: {
      deps: {
        files: {
          'client/index.html': ['client/**/*.js', 'client/**/*.css']
        }
      }
    }
  });

  grunt.registerTask('serve', [
    'connect:server',
    'sass',
    'injector',
    'watch'
  ])
};
