
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>EaselJS Example: Infinite Hearts</title>

<link href="styles/styles.css" rel="stylesheet" type="text/css" />

<!-- Import EaselJS Framework -->
<script src="../src/easeljs/utils/UID.js"></script>
<script src="../src/easeljs/geom/Matrix2D.js"></script>
<script src="../src/easeljs/events/MouseEvent.js"></script>
<script src="../src/easeljs/display/SpriteSheet.js"></script>
<script src="../src/easeljs/display/Shadow.js"></script>
<script src="../src/easeljs/display/DisplayObject.js"></script>
<script src="../src/easeljs/display/Container.js"></script>
<script src="../src/easeljs/display/Stage.js"></script>
<script src="../src/easeljs/display/Text.js"></script>
<script src="../src/easeljs/display/Graphics.js"></script>
<script src="../src/easeljs/display/Shape.js"></script>
<script src="../src/easeljs/utils/Ticker.js"></script>
<!-- End EaselJS Imports -->

<script>
var canvas;
var stage;
var container;
var captureContainers;
var captureIndex;

function init() {
	// create a new stage and point it at our canvas:
	canvas = document.getElementById("testCanvas");
	stage = new Stage(canvas);
	
	var w = canvas.width;
	var h = canvas.height;
	
	container = new Container();
	stage.addChild(container);
	
	captureContainers = [];
	captureIndex = 0;
	
	// create a large number of slightly complex vector shapes, and give them random positions and velocities:
	for (var i=0; i<50; i++) {
		var heart = new Shape();
		heart.graphics.beginFill(Graphics.getHSL(Math.random()*30-45, 100, 50+Math.random()*30));
		heart.graphics.moveTo(0,-9).curveTo(0,-20,8,-20).curveTo(16,-20,16,-10).curveTo(16,0,0,12);
		heart.graphics.curveTo(-16,0,-16,-10).curveTo(-16,-20,-8,-20).curveTo(0,-20,0,-9);
		heart.y = -100;
		
		container.addChild(heart);
	}
	
	var text = new Text("the longer I'm with you\nthe more I love you", "bold 24px Arial", "#312");
	text.textAlign = "center";
	text.x = w/2;
	text.y = h/2;
	stage.addChild(text);
	
	for (i=0; i<100; i++) {
		var captureContainer = new Container();
		captureContainer.cache(0,0,w,h);
		captureContainers.push(captureContainer);
	}
	
	// start the tick and point it at the window so we can do some work before updating the stage:
	Ticker.addListener(window);
	Ticker.setFPS(30);
}

function tick() {
	var w = canvas.width;
	var h = canvas.height;
	var l = container.getNumChildren();
	
	captureIndex = (captureIndex+1)%captureContainers.length;
	stage.removeChildAt(0);
	var captureContainer = captureContainers[captureIndex];
	stage.addChildAt(captureContainer,0);
	captureContainer.addChild(container);
	
	// iterate through all the children and move them according to their velocity:
	for (var i=0; i<l; i++) {
		var heart = container.getChildAt(i);
		if (heart.y < -50) {
			heart._x = Math.random()*w;
			heart.y = h*(1+Math.random())+50;
			heart.perX = (1+Math.random())*h;
			heart.offX = Math.random()*h;
			heart.ampX = heart.perX*0.1*(0.2+Math.random());
			heart.velY = -Math.random()*2-2;
			heart.scaleX = heart.scaleY = Math.random()+1;
			heart.rotation = Math.random()*40-20;
			heart.alpha = Math.random();
		}
		heart.y += heart.velY;
		heart.x = heart._x + Math.cos((heart.offX+heart.y)/heart.perX*Math.PI*2)*heart.ampX;
	}
	
	captureContainer.updateCache("source-over");
	
	// draw the updates to stage:
	stage.update();
}


</script>
</head>
	
<body onload="init();">
	<!-- background isn't set to black to demonstrate how the darkening applies -->
	<div class="description">
		Infinte hearts: code poetry for Valentine's day.
	</div>
	<div class="canvasHolder">
		<canvas id="testCanvas" width="980" height="680" style="background-color:#312"></canvas>
	</div>
</body>
</html>
