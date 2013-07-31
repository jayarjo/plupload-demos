// jQuery not really required, it's here to overcome an inability to pass configuration options to the fiddle remotely
$(document).ready(function() {
	// Custom example logic
	function $(id) {
		return document.getElementById(id);	
	}

	var uploader = new plupload.Uploader({
		runtimes : 'html5,flash,silverlight,html4',
		browse_button : 'pickfiles',
		container: 'container',
		max_file_size : '10mb',
		
		// Fake server response here 
		// url : '../upload.php',
		url: "/echo/json",

		flash_swf_url : 'http://rawgithub.com/moxiecode/plupload/1.x/js/plupload.flash.cors.swf',
		silverlight_xap_url : 'http://rawgithub.com/moxiecode/plupload/1.x/js/plupload.silverlight.cors.xap',
		filters : [
			{title : "Image files", extensions : "jpg,gif,png"},
			{title : "Zip files", extensions : "zip"}
		],

		init: {
			PostInit: function() {
				$('filelist').innerHTML = '';

				$('uploadfiles').onclick = function() {
					uploader.start();
					return false;
				};
			},

			FilesAdded: function(up, files) {
				plupload.each(files, function(file) {
					$('filelist').innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b></div>';
				});
			},

			UploadProgress: function(up, file) {
				$(file.id).getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
			},

			Error: function(up, err) {
				$('console').innerHTML += "\nError #" + err.code + ": " + err.message;
			}
		}
	});

	uploader.init();
});
