var monads = require('monads');
var canvas = require('canvas');
var Sparkles = (function() {
  function Sparkles() {
    function privateData() {
      this.element = null;
      this.stage = null;
      this.imgSeq = null;
      this.bmpSeq = null;
    }
    var p_vars = new privateData();
    var element = p_vars.element;
    Object.getOwnPropertyDescriptor(this,'element') || Object.defineProperty(this,'element', {get: function(){return element;},set: function(e){element=e;}});
    var stage = p_vars.stage;
    Object.getOwnPropertyDescriptor(this,'stage') || Object.defineProperty(this,'stage', {get: function(){return stage;},set: function(e){stage=e;}});
    var imgSeq = p_vars.imgSeq;
    Object.getOwnPropertyDescriptor(this,'imgSeq') || Object.defineProperty(this,'imgSeq', {get: function(){return imgSeq;},set: function(e){imgSeq=e;}});
    var bmpSeq = p_vars.bmpSeq;
    Object.getOwnPropertyDescriptor(this,'bmpSeq') || Object.defineProperty(this,'bmpSeq', {get: function(){return bmpSeq;},set: function(e){bmpSeq=e;}});
    var args = Array.prototype.slice.call(arguments);
    var ctor = function () {
      this.clickCanvas=this.clickCanvas.bind(this);
      this.onimageload=this.onimageload.bind(this);
      this.moveCanvas=this.moveCanvas.bind(this);
      this.tick=this.tick.bind(this);
      this.imgSeq=new Image();
      this.element=monads.DOMable({
        tagName:'canvas'
      }).on('load').attributes({
        'id':'testCanvas',
        width:'980',
        height:'680'
      }).style({
        'background-color':'#000'
      }).insert(document.body).element();
      this.stage=canvas.Stage({
        canvas:this.element
      });
      this.imgSeq.onload=this.onimageload;
      this.imgSeq.src="img/sparkle_21x23.png";
    }
    return ctor.apply(this,args) || this;
  }
  Sparkles.prototype['onimageload'] = function() {
    this.element.onmousemove=this.moveCanvas;
    this.element.onclick=this.clickCanvas;
    this.stage.addChild(canvas.Shape({
      alpha:0.33,
      graphics:canvas.Graphics().beginFill('#000').drawRect(0,0,this.element.width + 1,this.element.height)
    }));
    this.stage.autoClear=false;
    this.bmpSeq=canvas.BitmapSequence({
      regX:10.5,
      regY:11.5,
      spriteSheet:canvas.SpriteSheet({
        image:this.imgSeq,
        frameWidth:21,
        frameHeight:23
      })
    });
    canvas.Ticker.addListener(this);
  };
  Sparkles.prototype['tick'] = function() {
    var h=this.element.height;
    var l=this.stage.getNumChildren();
    for(var i=l - 1;i > 0;--i) {
      var sparkle=this.stage.getChildAt(i);
      sparkle.vY+=2;
      sparkle.vX*=0.98;
      sparkle.x+=sparkle.vX;
      sparkle.y+=sparkle.vY;
      sparkle.scaleX=sparkle.scaleY=sparkle.scaleX + sparkle.vS;
      sparkle.alpha+=sparkle.vA;
      if(sparkle.y > h) {
        sparkle.vY*=-0.6;
        sparkle.y-=sparkle.y % h;
      }
      if(sparkle.alpha <= 0) {
        this.stage.removeChildAt(i);
      }
    }
    this.stage.update();
  };
  Sparkles.prototype['clickCanvas'] = function(e) {
    if(!e) {
      var e=window.event;
    }
    this.addSparkles(Math.random() * 200 + 100 | 0,e.pageX - this.element.offsetLeft,e.pageY - this.element.offsetTop,2);
  };
  Sparkles.prototype['moveCanvas'] = function(e) {
    if(!e) {
      var e=window.event;
    }
    this.addSparkles(Math.random() * 2 + 1 | 0,e.pageX - this.element.offsetLeft,e.pageY - this.element.offsetTop,1);
  };
  Sparkles.prototype['addSparkles'] = function(count,x,y,speed) {
    for(var i=0;i < count;++i) {
      var sparkle=canvas.BitmapSequence(this.bmpSeq);
      sparkle.x=x;
      sparkle.y=y;
      sparkle.rotation=Math.random() * 360;
      sparkle.alpha=Math.random() * 0.5 + 0.5;
      sparkle.scaleX=sparkle.scaleY=Math.random() + 0.3;
      sparkle.compositeOperation="lighter";
      var a=Math.PI * 2 * Math.random();
      var v=(Math.random() - 0.5) * 30 * speed;
      sparkle.vX=Math.cos(a) * v;
      sparkle.vY=Math.sin(a) * v;
      sparkle.vS=(Math.random() - 0.5) * 0.2;
      sparkle.vA=-Math.random() * 0.05 - 0.01;
      sparkle.currentFrame=Math.random() * 12 | 0;
      this.stage.addChild(sparkle);
    }
  };
  return function __() {
    var args = Array.prototype.slice.call(arguments);
    __.constructor = Sparkles;
    return new Sparkles(args && args.length && args[0]);
  };
})();
Sparkles();

