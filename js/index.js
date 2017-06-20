(function() {
	//获取元素
	var musicbtn=document.getElementById('music');
	var musicbg=document.querySelector('.music_bg');
	var aud=document.querySelector('.aud');
	var musicIco=document.querySelector('.music_img');

	//定义音乐的状态
	var music_state=1;
	musicbtn.onclick=function(){
		if(music_state==1){
			musicbg.style.display='none';
			musicIco.style.animation='none';
			aud.pause();
			music_state =2;
		}else{
			musicbg.style.display='block';
			musicIco.style.animation='rotatee 3s linear infinite';
			aud.play();
			music_state =1;
		}
	}
	console.log(musicbtn);
	console.log(musicbg,aud,musicIco);
})(window);

// 自带滑屏js文件
var mySwiper = new Swiper ('.swiper-container', {

	//horizontal水平 vertical 垂直滑动
	direction: 'vertical',
	// loop: true,

	// 如果需要分页器
	pagination: '.swiper-pagination',
		 	    
	// 如果需要滚动条
	scrollbar: '.swiper-scrollbar',
	onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimateCache(swiper); //隐藏动画元素 
	    swiperAnimate(swiper); //初始化完成开始动画
	}, 
	onSlideChangeEnd: function(swiper){ 
		swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	} 
}) 


     