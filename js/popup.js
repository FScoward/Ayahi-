// chrome-extension://pdekfdkgogcakpbmffdjmlaedhblbjbc/html/popup.html
$(function(){
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
