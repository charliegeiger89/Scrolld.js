module.exports = function(grunt) {
    grunt.registerTask('build', function(){
        grunt.log.writeln('');
        grunt.task.run( ['concat', 'uglify'] );
        grunt.log.writeln(' ¤___________________________________¤');
        grunt.log.writeln('│                                     │');
        grunt.log.writeln('│         BUILDING & MINIFYING        │');
        grunt.log.writeln('│                                     │');
        grunt.log.writeln('│¤___________________________________¤│');
    });
};