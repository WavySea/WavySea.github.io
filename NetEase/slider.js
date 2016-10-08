var $ = function(id){
	return document.getElementById(id);
};

function fadeIn(e) {
	e.className = "slider_pic fadein";
}

function fadeOut(e) {
  	e.className = "slider_pic";
}

var imgs = $("imgwrap").children;
//申明图片数组中当前的轮播图片
cur_img = $("imgwrap").children.length - 1;
fadeIn(imgs[cur_img]);

//图片轮播函数
function turnImgs() {
			    
	if (cur_img === 0) {
		fadeOut(imgs[cur_img]);
	    cur_img = imgs.length - 1;
		fadeIn(imgs[cur_img]);
	} else {
		fadeOut(imgs[cur_img]);
        fadeIn(imgs[cur_img - 1]);
	    cur_img--;
    }
}
