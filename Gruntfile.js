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
				files: "_sass/*.scss",
				tasks: "sass:dist"
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("server", ["watch"]);
}