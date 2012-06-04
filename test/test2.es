module monads from 'monads';
module canvas from 'canvas';
class Hearts {
  constructor() {
    private element, stage, container, captureContainers, captureIndex;
    @tick = @tick.bind(this);
    @element = monads.DOMable({tagName:'canvas'}).on('load').attributes({'id':'testCanvas',width:'980',height:'680'}).style({'background-color':'#000'}).insert(document.body).element();
    @stage = canvas.Stage({canvas:@element});
    var w = @element.width;
    var h = @element.height;
    @container = canvas.Container();
    @stage.addChild(@container);
    @captureContainers = [];
    @captureIndex = 0;
    for (var i=0; i<50; i++) {
      var heart = canvas.Shape();
      heart.graphics.beginFill(canvas.Graphics.getHSL(Math.random()*30-45, 100, 50+Math.random()*30));
      heart.graphics.moveTo(0,-9).curveTo(0,-20,8,-20).curveTo(16,-20,16,-10).curveTo(16,0,0,12);
      heart.graphics.curveTo(-16,0,-16,-10).curveTo(-16,-20,-8,-20).curveTo(0,-20,0,-9);
      heart.y = -100;
      @container.addChild(heart);
    }
    var text = canvas.Text({text:"the longer I'm with you\\nthe more I love you", font:"bold 24px Arial", color:"#312", textAlign:'center',x:w/2,y:h/2});
    @stage.addChild(text);
    for (i=0; i<100; i++) {
        var captureContainer = canvas.Container();
        captureContainer.cache(0,0,w,h);
        @captureContainers.push(captureContainer);
    }
    canvas.Ticker.addListener(this);
    canvas.Ticker.setFPS(30);
  }
  tick() {
    var w = @element.width;
    var h = @element.height;
    var l = @container.getNumChildren();
    @captureIndex = (@captureIndex+1)%@captureContainers.length;
    @stage.removeChildAt(0);
    var captureContainer = @captureContainers[@captureIndex];
    @stage.addChildAt(captureContainer,0);
    captureContainer.addChild(@container);
    for (var i=0; i<l; i++) {
        var heart = @container.getChildAt(i);
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
    @stage.update();
  }
}
Hearts();
