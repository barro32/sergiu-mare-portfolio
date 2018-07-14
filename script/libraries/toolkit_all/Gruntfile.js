module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			dist: {
				files: {
					'dist/toolkit.min.js': ['src/toolkit/toolkit.js', 'src/toolkit/**/*.js'],
					'dist/toolkit-legacy.min.js': ['src/toolkit-legacy/**/*.js']
				}
			}
		},
		uglify: {
			toolkit: {
				options: {
					banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n'
				},
				files: {
					'dist/toolkit.min.js': ['dist/toolkit.min.js']
				}
			},
			toolkitLegacy: {
				options: {
					banner: '/*! <%= pkg.name %> <%= pkg.version %> */\n',
					mangle: false
				},
				files: {
					'dist/toolkit-legacy.min.js': ['dist/toolkit-legacy.min.js']
				}
			}
		},
		watch: {
		    scripts: {
		        files:  ['src/toolkit/toolkit.js', 'src/toolkit/**/*.js'],
		        tasks: ['concat', 'uglify'],
		        options: {
		            spawn: false,
		        },
		    }
		}
	});
  
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat', 'uglify', 'watch']);

};