
module.exports = function(grunt) {
    return {
        autoprefixer: {
            options: {
                browsers: ['last 3 iOS versions', 'Android 2.3', 'Android 4', 'last 2 Chrome versions']
            },
            multiple_files: {
                flatten: true,
                src: 'build/css/*.css', // -> src/css/file1.css, src/css/file2.css
            }
        }
    };
};