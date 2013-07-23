/* global jake:true, desc:true, task:true, complete:true, require:true, console:true, process:true */
/* jshint unused:false, laxcomma:true */
var fs = require('fs')
, path = require('path')
, util = require('util')
, glob = require('glob')
, yaml = require('yamljs')
;

desc("Add demos reference to README.md.");
task("default", [], function () {

	glob("**/demo.details", function (err, files) {
		var ref = ''
		, readme = fs.readFileSync('README.md').toString();

		files.forEach(function(file) {
			var contents = fs.readFileSync(file).toString().replace(/(^[\s\S]*\-\-\-|\.\.\.[\s\S]*$)/g, '')
			, demo = yaml.parse(contents);
			ref += util.format('* [%s](%s)\n', demo.name, demo.url);
		});

		fs.writeFileSync('README.md', readme.replace(/(### Demos)[\s\S]*$/, '$1\n' + ref));
	});
});

