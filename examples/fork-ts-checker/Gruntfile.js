'use strict';

module.exports = (grunt) => {
	grunt.initConfig({
		webpack: {
			all: require('./webpack.config')
		}
	});

	grunt.loadNpmTasks('grunt-webpack');

	grunt.registerTask('run', ['webpack']);
}
