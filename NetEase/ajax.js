var $ = function(id){
	return document.getElementById(id);
};

function Ajax(url,options,callback){
	var oAjax;
	if(window.XMLHttpRequest){
			oAjax=new XMLHttpRequest();
	}else{
		oAjax=new ActiveXObject('Microsoft.XMLHTTP');
	}
			   
	if(!options){ 
		url=url+"?t="+new Date().getTime();
	}else{
		url=url+'?'+serialize(options);
	}
	oAjax.open('GET',url,true);
	oAjax.send();
	oAjax.onreadystatechange=function(){
		if(oAjax.readyState==4){
			if((oAjax.status>=200&&oAjax.status<300)||(oAjax.status==304)){
			    var data = JSON.parse(oAjax.responseText);
			    if (typeof callback == 'function') {
		        	callback(data,options);
		        }
			}else {
			    alert("oAjax "+oAjax.status);   
			}
		}
	};
}
		   
// 请求参数序列化，把对象转换为例如'name1=value1&name2=value2'的格式
function serialize(data) {
	if (!data) {return '';}
	var pairs = [];
	for(var name in data){
		if (!data.hasOwnProperty(name)) {continue;}     
		if (typeof data[name] === 'function') {continue;}   
		var value = data[name].toString();
		name = encodeURIComponent(name);    
		value = encodeURIComponent(value);
		pairs.push(name + '=' + value);
	}
	return pairs.join('&');
}
