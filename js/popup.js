// chrome-extension://pdekfdkgogcakpbmffdjmlaedhblbjbc/html/popup.html
$(function(){
	/*
	$.ajax({
		url: 'http://animage.tumblr.com/tagged/',
		type: 'GET',
		cache: 'false',

		// データのロード完了時の処理
        success: function(res) {
        	alert("success");

        	content = $(res.responseText).text();
        	$("div").append(content);
        },
        fail: function() {
        	alert("alert");
        }
	})
*/
var xhr = new XMLHttpRequest;
	xhr.onload = console.log.bind(console);
	xhr.open('GET', 'http://animage.tumblr.com/tagged/%E9%AB%98%E5%9E%A3%E5%BD%A9%E9%99%BD');
	xhr.send();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			var html = xhr.responseText;
			var re = new RegExp(/src="http.*?jpg/g);
			var result = html.match(re);
			var random = Math.floor(Math.random() * result.length);
			$("div#ayahi").append("<img src='" + result[random].substring(5) + "'/>");
		}
	}
})
