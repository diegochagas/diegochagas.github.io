module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: "_sass/",
					src: ["*.scss"],
					dest: "css",
					ext: ".css"
				}]
			}
		},
		watch: {
			sass: {
				option: {
					event: ["added", "changed"]
				},
				files: [
					"_sass/*.scss",
					"_sass/**/*.scss"
				],
				tasks: "sass:dist"
			}
		},
		browserSync: {
			bsFiles: {
				src: [
					"css/index.css",
					"js/*.js",
					"views/*.html",
					"*.html"
				]
			},
			options: {
				watchTask: true,
				server: {
					baseDir: "./"
				}
			}
		},
		useminPrepare: {
			html: "dist/**/*.html"
		},
		usemin: {
			html: "dist/**/*.html"
		}

	});

	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-cssmin");
	grunt.loadNpmTasks("grunt-usemin");
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-browser-sync");

	grunt.registerTask("minifica", ["useminPrepare", "concat", "uglify", "cssmin", "usemin"]);
	grunt.registerTask("default", ["browserSync", "watch"]);
}