module.exports = function(grunt) {
    grunt.registerTask('help', function(){
        grunt.log.writeln('');
        grunt.log.writeln('►►►►►  VALID GRUNT TASK COMMANDS  ◄◄◄◄◄');
        grunt.log.writeln(' ¤___________________________________¤');
        grunt.log.writeln('│                                     │');
        grunt.log.writeln('│    Grunt build:                     │');
        grunt.log.writeln('│        Compiles & Minifies SRC      │');
        grunt.log.writeln('│                                     │');
        grunt.log.writeln('│¤___________________________________¤│');
    });
};