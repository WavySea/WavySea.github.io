(function(){
	 // eslint no-eval: 0; 
	var $ = function(classname){
		return document.getElementsByClassName(classname);
	};
	var id = function(id){
		return document.getElementById(id);
	};
	function introduction(){
		var intro = document.createElement('div');
		intro.style.cssText="margin-top:50px; color:rgb(18,53,85)";
		intro.innerHTML="欢迎浏览我的毕业物品，网站使用规则如下：<p>请点击左侧导航栏选择相应产品类别；</p><p>在清单中你将会看到产品列表；</p> <p>点击喜欢的产品名字将会看到这个产品更详细的产品信息或图片展示,再次点击产品名称，详细信息自动收起；</p><p>如果你对某个产品感兴趣，请点击产品详细说明最下面的『我想购买』来邮件和我联系，也欢迎和我砍价或交流想法哦~</p>";
		intro.id="intro";
		var btn = document.createElement('button');
		btn.innerHTML = "OK";
		btn.style.cssText="height:40px; width:70px;";
		intro.appendChild(btn);
		var ul = id('sale_list');
		$('things')[0].insertBefore(intro,ul);
		btn.addEventListener('click',function(){
			intro.style.display = "none";
			console.log("run");	
			// setCategoryClick("electronic");
			getCategory(setThingsListClick);
		},false);
	}

	var hasClass = function (targetClass, ele) {
		return ele.className.match(targetClass);
	    
	};
	var formatData = function(name){
		return mydata[name];
	};

	function getCategory(callback){
		var category;
		$('sidebar')[0].addEventListener('click',function(e){
			console.log("getCategory: "+e.target.className.split(" ",1));
			category = e.target.className.split(" ",1);
			console.log("设置了eventlistener: "+category);
			if (id('selected') !== null && hasClass(category,id('selected')) === null ){
					id('selected').id = "unselected";
					$(category)[0].id = "selected";
				// console.log(id('unselected'));
				
			} 
			if (id('selected')===null) {
				$(category)[0].id = "selected";
			}
			// console.log("执行判断sale_list中是否为空或重复的代码 第二个判断值为: ", id('sale_list').childNodes[1].className.match(category)!==null);
			// var mydata = JSON.parse(mydata);
			if (id('sale_list').childNodes.length!==1) {
				// var jsonSentence = "mydata."+category+".length";
				id('sale_list').innerHTML = "";
			}
			var dataCategory = formatData(category);
			// console.log( dataLength[0].price);
			for (var i = 0; i < dataCategory.length; i++) {
				var new_product = document.createElement('li');
				new_product.innerHTML = dataCategory[i].name + "        价格："+dataCategory[i].price;
				new_product.id = dataCategory[i].id;
				new_product.className = category+" items";
				id('sale_list').appendChild(new_product);
			}
			callback(category);		
		},false);

		
	}


	function setThingsListClick(category){
		id("sale_list").addEventListener('click',function(event){
			console.log(event.target.childNodes);
			if (event.target.childNodes.length !== 1) {
					event.target.removeChild(event.target.childNodes[1]);
			}else{
				var dataCategory = formatData(category);
				console.log("取到的category"+category);
				for (var i = 0; i < dataCategory.length; i++) {
					if (event.target.id===dataCategory[i].id) {
						
						// console.log(dataCategory[i].pic_url[2].pic03);
						var p_description = document.createElement('div');
						p_description.innerHTML = "<br><img src=\""+dataCategory[i].pic_url[0].pic01 +"\">"+"<br><img src=\""+dataCategory[i].pic_url[1].pic02 +"\">"+"<br><img src=\""+dataCategory[i].pic_url[2].pic03 +"\">"+"<br>" + "产品描述：<div class=\"description\">" + dataCategory[i].description +"</div>"+ "<br><br>";
						event.target.appendChild(p_description);

					}
				}
			}
		},false);
	}
	
	window.onload = function(){
		//tab切换
		introduction();
	
	};

})();