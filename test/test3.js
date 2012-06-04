var monads = require('monads');
var canvas = require('canvas');
var ProgressBar = (function() {
  function ProgressBar() {
    function privateData() {
      this.i = null;
      this.container = null;
      this.context = null;
      this.initialX = null;
      this.initialY = null;
      this.radius = null;
      this.stage = null;
      this.totalWidth = null;
      this.totalHeight = null;
    }
    var p_vars = new privateData();
    var i = p_vars.i;
    Object.getOwnPropertyDescriptor(this,'i') || Object.defineProperty(this,'i', {get: function(){return i;},set: function(e){i=e;}});
    var container = p_vars.container;
    Object.getOwnPropertyDescriptor(this,'container') || Object.defineProperty(this,'container', {get: function(){return container;},set: function(e){container=e;}});
    var context = p_vars.context;
    Object.getOwnPropertyDescriptor(this,'context') || Object.defineProperty(this,'context', {get: function(){return context;},set: function(e){context=e;}});
    var initialX = p_vars.initialX;
    Object.getOwnPropertyDescriptor(this,'initialX') || Object.defineProperty(this,'initialX', {get: function(){return initialX;},set: function(e){initialX=e;}});
    var initialY = p_vars.initialY;
    Object.getOwnPropertyDescriptor(this,'initialY') || Object.defineProperty(this,'initialY', {get: function(){return initialY;},set: function(e){initialY=e;}});
    var radius = p_vars.radius;
    Object.getOwnPropertyDescriptor(this,'radius') || Object.defineProperty(this,'radius', {get: function(){return radius;},set: function(e){radius=e;}});
    var stage = p_vars.stage;
    Object.getOwnPropertyDescriptor(this,'stage') || Object.defineProperty(this,'stage', {get: function(){return stage;},set: function(e){stage=e;}});
    var totalWidth = p_vars.totalWidth;
    Object.getOwnPropertyDescriptor(this,'totalWidth') || Object.defineProperty(this,'totalWidth', {get: function(){return totalWidth;},set: function(e){totalWidth=e;}});
    var totalHeight = p_vars.totalHeight;
    Object.getOwnPropertyDescriptor(this,'totalHeight') || Object.defineProperty(this,'totalHeight', {get: function(){return totalHeight;},set: function(e){totalHeight=e;}});
    var args = Array.prototype.slice.call(arguments);
    var ctor = function () {
      this.tick=this.tick.bind(this);
      this.totalWidth=300;
      this.totalHeight=34;
      this.initialX=20;
      this.initialY=20;
      this.radius=this.totalHeight / 2;
      this.i=this.totalWidth;
      this.element=monads.DOMable({
        tagName:'canvas'
      }).on('load').attributes({
        'id':'testCanvas',
        width:'980',
        height:'680'
      }).style({
        'background-color':'#fff'
      }).insert(document.body).element();
      this.context=this.element.getContext('2d');
      this.context.font="16px Verdana";
      var progress_lingrad=this.context.createLinearGradient(0,this.initialY + this.totalHeight,0,0);
      progress_lingrad.addColorStop(0,'#4DA4F3');
      progress_lingrad.addColorStop(0.4,'#ADD9FF');
      progress_lingrad.addColorStop(1,'#9ED1FF');
      this.context.fillStyle=progress_lingrad;
      canvas.Ticker.addListener(this);
      canvas.Ticker.setFPS(30);
    }
    return ctor.apply(this,args) || this;
  }
  ProgressBar.prototype['tick'] = function() {
    --this.i;
    if(this.i >= 0) {
      this.progressLayerRect(this.context,this.initialX,this.initialY,this.totalWidth,this.totalHeight,this.radius);
      this.progressBarRect(this.context,this.initialX,this.initialY,this.i,this.totalHeight,this.radius,this.totalWidth);
      this.progressText(this.context,this.initialX,this.initialY,this.i,this.totalHeight,this.radius,this.totalWidth);
    }
  };
  ProgressBar.prototype['roundRect'] = function() {
    this.context.beginPath();
    this.context.moveTo(this.initialX + this.radius,this.initialY);
    this.context.lineTo(this.initialX + this.totalWidth - this.radius,this.initialY);
    this.context.arc(this.initialX + this.totalWidth - this.radius,this.initialY + this.radius,this.radius,-Math.PI / 2,Math.PI / 2,false);
    this.context.lineTo(this.initialX + this.radius,this.initialY + this.totalHeight);
    this.context.arc(this.initialX + this.radius,this.initialY + this.radius,this.radius,Math.PI / 2,3 * Math.PI / 2,false);
    this.context.closePath();
    this.context.fill();
  };
  ProgressBar.prototype['progressLayerRect'] = function(ctx,x,y,width,height,radius) {
    ctx.save();
    ctx.shadowOffsetX=2;
    ctx.shadowOffsetY=2;
    ctx.shadowBlur=2;
    ctx.shadowColor='#666';
    ctx.fillStyle='rgba(189,189,189,1)';
    this.roundRect();
    ctx.shadowColor='rgba(0,0,0,0)';
    var lingrad=ctx.createLinearGradient(0,y + height,0,0);
    lingrad.addColorStop(0,'rgba(255,255,255, 0.1)');
    lingrad.addColorStop(0.4,'rgba(255,255,255, 0.7)');
    lingrad.addColorStop(1,'rgba(255,255,255,0.4)');
    ctx.fillStyle=lingrad;
    this.roundRect();
    ctx.fillStyle='white';
    ctx.restore();
  };
  ProgressBar.prototype['progressBarRect'] = function(ctx,x,y,width,height,radius,max) {
    var offset=0;
    ctx.beginPath();
    if(width < radius) {
      offset=radius - Math.sqrt(Math.pow(radius,2) - Math.pow((radius - width),2));
      ctx.moveTo(x + width,y + offset);
      ctx.lineTo(x + width,y + height - offset);
      ctx.arc(x + radius,y + radius,radius,Math.PI - Math.acos((radius - width) / radius),Math.PI + Math.acos((radius - width) / radius),false);
    } else if(width + radius > max) {
      offset=radius - Math.sqrt(Math.pow(radius,2) - Math.pow((radius - (max - width)),2));
      ctx.moveTo(x + radius,y);
      ctx.lineTo(x + width,y);
      ctx.arc(x + max - radius,y + radius,radius,-Math.PI / 2,-Math.acos((radius - (max - width)) / radius),false);
      ctx.lineTo(x + width,y + height - offset);
      ctx.arc(x + max - radius,y + radius,radius,Math.acos((radius - (max - width)) / radius),Math.PI / 2,false);
      ctx.lineTo(x + radius,y + height);
      ctx.arc(x + radius,y + radius,radius,Math.PI / 2,3 * Math.PI / 2,false);
    } else {
      ctx.moveTo(x + radius,y);
      ctx.lineTo(x + width,y);
      ctx.lineTo(x + width,y + height);
      ctx.lineTo(x + radius,y + height);
      ctx.arc(x + radius,y + radius,radius,Math.PI / 2,3 * Math.PI / 2,false);
    }
    ctx.closePath();
    ctx.fill();
    if(width < max - 1) {
      ctx.save();
      ctx.shadowOffsetX=1;
      ctx.shadowBlur=1;
      ctx.shadowColor='#666';
      if(width + radius > max) {
        offset=offset + 1;
      }
      ctx.fillRect(x + width,y + offset,1,this.totalHeight - offset * 2);
      ctx.restore();
    }
  };
  ProgressBar.prototype['progressText'] = function(ctx,x,y,width,height,radius,max) {
    ctx.save();
    ctx.fillStyle='white';
    var text=Math.floor(width / max * 100) + "%";
    var text_width=ctx.measureText(text).width;
    var text_x=x + width - text_width - radius / 2;
    if(width <= radius + text_width) {
      text_x=x + radius / 2;
    }
    ctx.fillText(text,text_x,y + 22);
    ctx.restore();
  };
  return function __() {
    var args = Array.prototype.slice.call(arguments);
    __.constructor = ProgressBar;
    return new ProgressBar(args && args.length && args[0]);
  };
})();
ProgressBar();

