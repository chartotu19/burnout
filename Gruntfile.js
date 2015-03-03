module.exports = function(grunt){

    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');


    grunt.initConfig({
    
        pkg: grunt.file.readJSON('package.json'),
        config:{
            baseDir:'app/'
        },
        jshint:{
            options:{
                all:['<%= config.baseDir%>/js/**/*.js' ]
            }
        },
        concat:{
          js:{
              src:['app/js/**/*.js'],
              dest:'app/lib.js'
          }
        }
    
    });

    grunt.registerTask('build',['concat']);

}
