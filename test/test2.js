var monads = require('monads');
var canvas = require('canvas');
var Hearts = (function() {
  function Hearts() {
    function privateData() {
      this.element = null;
      this.stage = null;
      this.container = null;
      this.captureContainers = null;
      this.captureIndex = null;
    }
    var p_vars = new privateData();
    var element = p_vars.element;
    Object.getOwnPropertyDescriptor(this,'element') || Object.defineProperty(this,'element', {get: function(){return element;},set: function(e){element=e;}});
    var stage = p_vars.stage;
    Object.getOwnPropertyDescriptor(this,'stage') || Object.defineProperty(this,'stage', {get: function(){return stage;},set: function(e){stage=e;}});
    var container = p_vars.container;
    Object.getOwnPropertyDescriptor(this,'container') || Object.defineProperty(this,'container', {get: function(){return container;},set: function(e){container=e;}});
    var captureContainers = p_vars.captureContainers;
    Object.getOwnPropertyDescriptor(this,'captureContainers') || Object.defineProperty(this,'captureContainers', {get: function(){return captureContainers;},set: function(e){captureContainers=e;}});
    var captureIndex = p_vars.captureIndex;
    Object.getOwnPropertyDescriptor(this,'captureIndex') || Object.defineProperty(this,'captureIndex', {get: function(){return captureIndex;},set: function(e){captureIndex=e;}});
    var args = Array.prototype.slice.call(arguments);
    var ctor = function () {
      this.tick=this.tick.bind(this);
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
      var w=this.element.width;
      var h=this.element.height;
      this.container=canvas.Container();
      this.stage.addChild(this.container);
      this.captureContainers=[];
      this.captureIndex=0;
      for(var i=0;i < 50;++i) {
        var heart=canvas.Shape();
        heart.graphics.beginFill(canvas.Graphics.getHSL(Math.random() * 30 - 45,100,50 + Math.random() * 30));
        heart.graphics.moveTo(0,-9).curveTo(0,-20,8,-20).curveTo(16,-20,16,-10).curveTo(16,0,0,12);
        heart.graphics.curveTo(-16,0,-16,-10).curveTo(-16,-20,-8,-20).curveTo(0,-20,0,-9);
        heart.y=-100;
        this.container.addChild(heart);
      }
      var text=canvas.Text({
        text:"the longer I'm with you\nthe more I love you",
        font:"bold 24px Arial",
        color:"#312",
        textAlign:'center',
        x:w / 2,
        y:h / 2
      });
      this.stage.addChild(text);
      for(i=0;i < 100;++i) {
        var captureContainer=canvas.Container();
        captureContainer.cache(0,0,w,h);
        this.captureContainers.push(captureContainer);
      }
      canvas.Ticker.addListener(this);
      canvas.Ticker.setFPS(30);
    }
    return ctor.apply(this,args) || this;
  }
  Hearts.prototype['tick'] = function() {
    var w=this.element.width;
    var h=this.element.height;
    var l=this.container.getNumChildren();
    this.captureIndex=(this.captureIndex + 1) % this.captureContainers.length;
    this.stage.removeChildAt(0);
    var captureContainer=this.captureContainers[this.captureIndex];
    this.stage.addChildAt(captureContainer,0);
    captureContainer.addChild(this.container);
    for(var i=0;i < l;++i) {
      var heart=this.container.getChildAt(i);
      if(heart.y < -50) {
        heart._x=Math.random() * w;
        heart.y=h * (1 + Math.random()) + 50;
        heart.perX=(1 + Math.random()) * h;
        heart.offX=Math.random() * h;
        heart.ampX=heart.perX * 0.1 * (0.2 + Math.random());
        heart.velY=-Math.random() * 2 - 2;
        heart.scaleX=heart.scaleY=Math.random() + 1;
        heart.rotation=Math.random() * 40 - 20;
        heart.alpha=Math.random();
      }
      heart.y+=heart.velY;
      heart.x=heart._x + Math.cos((heart.offX + heart.y) / heart.perX * Math.PI * 2) * heart.ampX;
    }
    captureContainer.updateCache("source-over");
    this.stage.update();
  };
  return function __() {
    var args = Array.prototype.slice.call(arguments);
    __.constructor = Hearts;
    return new Hearts(args && args.length && args[0]);
  };
})();
Hearts();

