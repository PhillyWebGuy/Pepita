module.exports = function(grunt) {
    'use-strict';
    var paths = {
        target: 'target'
    };
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        paths: paths,
        jshint: {
            options: { jshintrc: '.jshintrc' },
            gruntfile: { src: 'Gruntfile.js' },
            js: {
                src: [
                    'src/js/*.js'
                ]
            }
        },
        htmlhint: {
            options: { htmlhintrc: '.htmlhintrc' },
            app: { files: { src: 'src/*.html' } }
        },
        clean: {
            options: { force: true},
            target: 'target'
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/js/<%= pkg.name %>.js',
                dest: 'target/www/assets/js/<%= pkg.name %>.min.js'
            }
        },
        copy: {
            app: {
                files: [
                    {expand: true, cwd: 'src', dest: 'target/www/', src: ['index.html']},
                    {expand: true, cwd: 'node_modules/underscore', dest: 'target/www/assets/js/libs/', src: ['underscore.js']}
                ]
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-htmlhint');

    // Default task(s).
    /*grunt.registerTask('default',
        [   'clean',
            'uglify']
    );*/
    grunt.registerTask('default', [
        'hint',
        'clean:target',
        'build',
        'uglify',
        'copy:app'
    ]);
    grunt.registerTask('build', [
        'hint'/*,
        'build-html',
        'build-less',
        'build-js',
        'build-playbook'*/
    ]);
    grunt.registerTask('hint', [
        'jshint',
        'htmlhint'
    ]);

};