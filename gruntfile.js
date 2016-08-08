module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		browserify: {
			dist: {
				files: {
					'dist/bundle.js': 'src/index.js'
				},
				options: {
					transform: [ 'babelify' ],
					watch: true
				}
			}
		},
		sass: {
			dist: {
				files: {
					'css/main.css' : 'sass/main.scss'
				}
			}
		},
		cssmin: {
		   dist: {
		      files: {
		         'css/main.min.css': ['css/main.css']
		      }
		  }
		},
		watch :{
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'cssmin']
			}
		}
	});

	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',  ['browserify', 'watch']);
}