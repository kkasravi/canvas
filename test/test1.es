module monads from 'monads';
module canvas from 'canvas';
class Sparkles {
  constructor() {
    private element, stage, imgSeq, bmpSeq;
    @clickCanvas = @clickCanvas.bind(this);
    @onimageload = @onimageload.bind(this);
    @moveCanvas = @moveCanvas.bind(this);
    @tick = @tick.bind(this);
    @imgSeq = new Image();
    @element = monads.DOMable({tagName:'canvas'}).on('load').attributes({'id':'testCanvas',width:'980',height:'680'}).style({'background-color':'#000'}).insert(document.body).element();
    @stage = canvas.Stage({canvas:@element});
    @imgSeq.onload = @onimageload;
    @imgSeq.src = "img/sparkle_21x23.png";
  }
  onimageload() {
    @element.onmousemove = @moveCanvas;
    @element.onclick = @clickCanvas;
    @stage.addChild(canvas.Shape({alpha:0.33,graphics:canvas.Graphics().beginFill('#000').drawRect(0,0,@element.width+1,@element.height)}));
    @stage.autoClear = false;
    @bmpSeq = canvas.BitmapSequence({regX:10.5,regY:11.5,spriteSheet:canvas.SpriteSheet({image:@imgSeq,frameWidth:21,frameHeight:23})});
    canvas.Ticker.addListener(this);
  }
  tick() {
    var h = @element.height;
    var l = @stage.getNumChildren();
    for (var i=l-1; i>0; i--) {
        var sparkle = @stage.getChildAt(i);
        sparkle.vY += 2;
        sparkle.vX *= 0.98;
        sparkle.x += sparkle.vX;
        sparkle.y += sparkle.vY;
        sparkle.scaleX = sparkle.scaleY = sparkle.scaleX+sparkle.vS;
        sparkle.alpha += sparkle.vA;
        if (sparkle.y > h) {
            sparkle.vY *= -0.6;
            sparkle.y -= sparkle.y%h;
        }
        if (sparkle.alpha <= 0) {
            @stage.removeChildAt(i);
        }
    }
    @stage.update();
  }
  clickCanvas(e) {
    @addSparkles(Math.random()*200+100|0, e.pageX-@element.offsetLeft, e.pageY-@element.offsetTop, 2);
  }
  moveCanvas(e) {
    @addSparkles(Math.random()*2+1|0, e.pageX-@element.offsetLeft, e.pageY-@element.offsetTop, 1);
  }
  addSparkles(count, x, y, speed) {
    for (var i=0; i<count; i++) {
        var sparkle = canvas.BitmapSequence(@bmpSeq);
        sparkle.x = x;
        sparkle.y = y;
        sparkle.rotation = Math.random()*360;
        sparkle.alpha = Math.random()*0.5+0.5;
        sparkle.scaleX = sparkle.scaleY = Math.random()+0.3;
        sparkle.compositeOperation = "lighter";
        var a = Math.PI*2*Math.random();
        var v = (Math.random()-0.5)*30*speed;
        sparkle.vX = Math.cos(a)*v;
        sparkle.vY = Math.sin(a)*v;
        sparkle.vS = (Math.random()-0.5)*0.2; // scale
        sparkle.vA = -Math.random()*0.05-0.01; // alpha
        sparkle.currentFrame = Math.random()*12|0;
        @stage.addChild(sparkle);
    }
  }
}
Sparkles();
