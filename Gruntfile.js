
module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/dejade.css': 'scss/main.scss'
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['scss/**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass']);
};
