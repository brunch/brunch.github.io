module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    grunticon: {
      logo: {
        options: {
          src: "src/svg/",
          dest: "app/assets/images/svg/",
          svgo: true
        }
      }
    },

    sed: {
      relativePaths: {
        path: 'app/assets/images/svg/grunticon.loader.txt',
        pattern: /\/app\/assets\//g,
        replacement: '/'
      }
    },


    'gh-pages': {
      options: {
        base: 'public',
        branch: 'master',
        message: 'Auto-generated build commit'
      },
      src: ['**']
    }

  });

  grunt.registerTask('default', ['grunticon', 'sed']);

  grunt.registerTask('publish', ['gh-pages']);

};