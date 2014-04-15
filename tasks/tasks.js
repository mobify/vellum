
module.exports = function(grunt) {
    grunt.registerTask('vellum:build:dev', ['sass:dev', 'autoprefixer']);
    grunt.registerTask('vellum:build:prod', ['sass:prod', 'autoprefixer']);
    grunt.registerTask('vellum:build', ['vellum:build:dev']);

    grunt.registerTask('default', 'adaptive:build');
};