var $ = function(id){
	return document.getElementById(id);
};
var className = function(name){
	return document.getElementsByClassName(name);
};

function setCookie(cname,cvalue,exdays) {
							    				// console.log(document.cookie);
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires=" + d.toGMTString();
	console.log(expires);
	// var newCookie = escape(cname + "=" + cvalue + expires +";");
	document.cookie = cname + "=" + cvalue;
	document.cookie = expires;
	console.log(document.cookie);
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}


