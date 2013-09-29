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

  });

  grunt.registerTask('default', ['grunticon', 'sed']);

};