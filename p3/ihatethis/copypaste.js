var joggingRate = 0;

$(function(){

	var distanceIndicator = $("#Distance");
	var hasJogger = true;

	// the connection port

	var previousOffsetX = document.body.scrollLeft;
	var previousOffsetY = document.body.scrollTop;

	var ignoreScroll = false;
	var timeout = -1;
	var pagePixels = 0;
	var lastJoggerPictureUpdate = 0;

	var previousTime = Date.now();
});
	// /*//bind the mousewheel events
	// window.addEventListener("mousewheel", function(e){
	// 	sendPixels(e.wheelDeltaX, e.wheelDeltaY);
	// 	ignoreScroll = true;
	// 	previousTime = Date.now();
	// 	clearTimeout(timeout);
	// 	timeout = setTimeout(function(){
	// 		ignoreScroll = false;
	// 	}, 100);
	// });
  //
	// // bind the scroll events
	// window.addEventListener("scroll", function(e){
	// 	if (!ignoreScroll){
	// 		var scrollLeft = document.body.scrollLeft;
	// 		var scrollTop = document.body.scrollTop;
	// 		var dX = previousOffsetX - scrollLeft;
	// 		var dY = previousOffsetY - scrollTop;
	// 		previousOffsetX = scrollLeft;
	// 		previousOffsetY = scrollTop;
	// 		sendPixels(dX, dY);
	// 	}
	// });

	function testScroll(){
		var scrollLeft = $(document).scrollLeft();
		var scrollTop = $(document).scrollTop();
		var dX = previousOffsetX - scrollLeft;
		var dY = previousOffsetY - scrollTop;
		previousOffsetX = scrollLeft;
		previousOffsetY = scrollTop;
		if (dX !== 0 || dY !== 0){
			sendPixels(dX, dY);
		}
	}

	//preload the images
	for (var i = 1; i < 9; i++){
		var img = new Image();
		img.src = "./images/00"+i+".png";
	}
	var img10 = new Image();
	img10.src = "./images/0010.png";


	function sendPixels(dX, dY){
		dX = Math.abs(dX);
		dY = Math.abs(dY);
		var pixels = dX + dY;
		pagePixels += pixels;
		displayDist(pagePixels);
	}

	//the jogger
	var jogger = $(".bob")[0];
	//style and setup
	jogger.style.position = "fixed";
	jogger.style.width = "500px";
	jogger.style.height = "500px";
	jogger.style.backgroundColor = "transparent";
	jogger.style.top = "50%";
	jogger.style.marginTop = "-250px";
	jogger.style.left = "50%";
	jogger.style.marginLeft = "-250px";
	jogger.style.pointerEvents = "none";
	jogger.style.zIndex = "2px"; // 1 less than youtube and netflix
	jogger.style.backgroundColor = "transparent";
	jogger.style.transition = "transform 0.1s";
	jogger.style.webkitTransition = "-webkit-transform 0.1s";
	jogger.style.transform = "translate3d(0, 0, 0) rotate(0deg)";
	jogger.style.webkitTransform = "translate3d(0, 0, 0) rotate(0deg)";
	jogger.style.transformOrigin = "50% 0%";
	jogger.style.webkitTransformOrigin = "50% 0%";

	var joggerImg = document.createElement("img");
	jogger.appendChild(joggerImg);
	joggerImg.style.position = "absolute";
	joggerImg.style.width = "100%";
	joggerImg.style.height = "100%";
	joggerImg.style.bottom = "0px";
	joggerImg.style.left = "0px";
	joggerImg.style.pointerEvents = "none";
	joggerImg.style.backgroundColor = "transparent";
	joggerImg.src = "./images/0010.png";

	var lastUpdate = Date.now();
	var lastJoggerPictureUpdatePixels = 0;
	var lastJoggerPictureUpdateTime = Date.now();
	var joggerImageNumber = 3;
	var rateHistory = [];

	(function updateJogger(){
		testScroll();
		requestAnimationFrame(updateJogger);
		// setTimeout(updateJogger, 100);
		if (!hasJogger){
			return;
		}
	}());

	var side = 0;

	var currentPosition = {
		x : 0,
		y : 0,
		rotation : 0
	};

	var imageSize = 25;

	var maxX = window.innerWidth - imageSize * 2 + 10;
	var minX = -25;
	var maxY = 0;
	var minY = -window.innerHeight;

	window.addEventListener("resize", function(){
		maxX = window.innerWidth - imageSize * 2 + 10;
		minX = -25;
		maxY = 0;
		minY = -window.innerHeight;
	});
//
// 	function displayDist(pixels){
// 		var inches = pixels / 72;
// 		distanceIndicator.text((inches / 63360).toFixed(3) + " miles");
//
// });
