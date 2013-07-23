$(document).ready(function() {
	// Setup html5 version
	$("#uploader").pluploadQueue({
		// General settings
		runtimes : 'html5,flash,silverlight,html4',
		
		// Fake server response here 
		// url : '../upload.php',
		url: "/gh/get/response.html/jayarjo/plupload-demos/tree/master/2.0/ui/bundled",
		
		max_file_size : '10mb',
		chunks : {
			size: '1mb',
			send_chunk_number: false // set this to true, to send chunk and total chunk numbers instead of offset and total bytes
		},
		rename : true,
		dragdrop: true,
		filters : [
			{title : "Image files", extensions : "jpg,gif,png"},
			{title : "Zip files", extensions : "zip"}
		],

		// Resize images on clientside if we can
		resize : {width : 320, height : 240, quality : 90},

		flash_swf_url : '../../js/Moxie.swf',
		silverlight_xap_url : '../../js/Moxie.xap'
	});
});
