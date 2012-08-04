(function() {
  var nm = module.Module('canvas');
  (function(require, exports, moduleId) {
    var log = require('log');
    var MouseEvent = (function() {
      function MouseEvent() {
        function privateData() {
          this.stageX = null;
          this.stageY = null;
          this.type = null;
          this.nativeEvent = null;
          this.onMouseMove = null;
          this.onMouseUp = null;
          this.target = null;
        }
        var p_vars = new privateData();
        var stageX = p_vars.stageX;
        Object.getOwnPropertyDescriptor(this,'stageX') || Object.defineProperty(this,'stageX', {get: function(){return stageX;},set: function(e){stageX=e;}});
        var stageY = p_vars.stageY;
        Object.getOwnPropertyDescriptor(this,'stageY') || Object.defineProperty(this,'stageY', {get: function(){return stageY;},set: function(e){stageY=e;}});
        var type = p_vars.type;
        Object.getOwnPropertyDescriptor(this,'type') || Object.defineProperty(this,'type', {get: function(){return type;},set: function(e){type=e;}});
        var nativeEvent = p_vars.nativeEvent;
        Object.getOwnPropertyDescriptor(this,'nativeEvent') || Object.defineProperty(this,'nativeEvent', {get: function(){return nativeEvent;},set: function(e){nativeEvent=e;}});
        var onMouseMove = p_vars.onMouseMove;
        Object.getOwnPropertyDescriptor(this,'onMouseMove') || Object.defineProperty(this,'onMouseMove', {get: function(){return onMouseMove;},set: function(e){onMouseMove=e;}});
        var onMouseUp = p_vars.onMouseUp;
        Object.getOwnPropertyDescriptor(this,'onMouseUp') || Object.defineProperty(this,'onMouseUp', {get: function(){return onMouseUp;},set: function(e){onMouseUp=e;}});
        var target = p_vars.target;
        Object.getOwnPropertyDescriptor(this,'target') || Object.defineProperty(this,'target', {get: function(){return target;},set: function(e){target=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            type:null,
            stageX:0,
            stageY:0,
            target:null,
            nativeEvent:null
          };
          this.stageX=properties.stageX;
          this.stageY=properties.stageY;
          this.nativeEvent=properties.nativeEvent;
          this.onMouseMove=properties.mouseMove;
          this.onMouseMove=properties.mouseMove;
          this.target=properties.target;
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = MouseEvent;
        return new MouseEvent(args && args.length && args[0]);
      };
    })();
    exports.MouseEvent = MouseEvent;
    var Point = (function() {
      function Point() {
        function privateData() {
          this.x = null;
          this.y = null;
        }
        var p_vars = new privateData();
        var x = p_vars.x;
        Object.getOwnPropertyDescriptor(this,'x') || Object.defineProperty(this,'x', {get: function(){return x;},set: function(e){x=e;}});
        var y = p_vars.y;
        Object.getOwnPropertyDescriptor(this,'y') || Object.defineProperty(this,'y', {get: function(){return y;},set: function(e){y=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            x:0,
            y:0
          };
          this.x=properties.x;
          this.y=properties.y;
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Point;
        return new Point(args && args.length && args[0]);
      };
    })();
    exports.Point = Point;
    var Matrix2D = (function() {
      function Matrix2D() {
        function privateData() {
          this.a = null;
          this.b = null;
          this.c = null;
          this.d = null;
          this.tx = null;
          this.ty = null;
          this.alpha = null;
          this.shadow = null;
          this.compositeOperation = null;
        }
        var p_vars = new privateData();
        var a = p_vars.a;
        Object.getOwnPropertyDescriptor(this,'a') || Object.defineProperty(this,'a', {get: function(){return a;},set: function(e){a=e;}});
        var b = p_vars.b;
        Object.getOwnPropertyDescriptor(this,'b') || Object.defineProperty(this,'b', {get: function(){return b;},set: function(e){b=e;}});
        var c = p_vars.c;
        Object.getOwnPropertyDescriptor(this,'c') || Object.defineProperty(this,'c', {get: function(){return c;},set: function(e){c=e;}});
        var d = p_vars.d;
        Object.getOwnPropertyDescriptor(this,'d') || Object.defineProperty(this,'d', {get: function(){return d;},set: function(e){d=e;}});
        var tx = p_vars.tx;
        Object.getOwnPropertyDescriptor(this,'tx') || Object.defineProperty(this,'tx', {get: function(){return tx;},set: function(e){tx=e;}});
        var ty = p_vars.ty;
        Object.getOwnPropertyDescriptor(this,'ty') || Object.defineProperty(this,'ty', {get: function(){return ty;},set: function(e){ty=e;}});
        var alpha = p_vars.alpha;
        Object.getOwnPropertyDescriptor(this,'alpha') || Object.defineProperty(this,'alpha', {get: function(){return alpha;},set: function(e){alpha=e;}});
        var shadow = p_vars.shadow;
        Object.getOwnPropertyDescriptor(this,'shadow') || Object.defineProperty(this,'shadow', {get: function(){return shadow;},set: function(e){shadow=e;}});
        var compositeOperation = p_vars.compositeOperation;
        Object.getOwnPropertyDescriptor(this,'compositeOperation') || Object.defineProperty(this,'compositeOperation', {get: function(){return compositeOperation;},set: function(e){compositeOperation=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            a:1,
            b:0,
            c:0,
            d:1,
            tx:0,
            ty:0
          };
          this.a=properties.a || 1;
          this.b=properties.b || 0;
          this.c=properties.c || 0;
          this.d=properties.d || 1;
          this.tx=properties.tx || 0;
          this.ty=properties.ty || 0;
          this.alpha=properties.alpha || 1;
          this.shadow=properties.shadow;
          this.compositeOperation=properties.compositeOperation;
        }
        return ctor.apply(this,args) || this;
      }
      Matrix2D.prototype['prepend'] = function(a,b,c,d,tx,ty) {
        var tx1=this.tx;
        if(a != 1 || b != 0 || c != 0 || d != 1) {
          var a1=this.a;
          var c1=this.c;
          this.a=a1 * a + this.b * c;
          this.b=a1 * b + this.b * d;
          this.c=c1 * a + this.d * c;
          this.d=c1 * b + this.d * d;
        }
        this.tx=tx1 * a + this.ty * c + tx;
        this.ty=tx1 * b + this.ty * d + ty;
      };
      Matrix2D.prototype['append'] = function(a,b,c,d,tx,ty) {
        var a1=this.a;
        var b1=this.b;
        var c1=this.c;
        var d1=this.d;
        this.a=a * a1 + b * c1;
        this.b=a * b1 + b * d1;
        this.c=c * a1 + d * c1;
        this.d=c * b1 + d * d1;
        this.tx=tx * a1 + ty * c1 + this.tx;
        this.ty=tx * b1 + ty * d1 + this.ty;
      };
      Matrix2D.prototype['prependMatrix'] = function(matrix) {
        this.prepend(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
        this.prependProperties(matrix.alpha,matrix.shadow,matrix.compositeOperation);
      };
      Matrix2D.prototype['appendMatrix'] = function(matrix) {
        this.append(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
        this.appendProperties(matrix.alpha,matrix.shadow,matrix.compositeOperation);
      };
      Matrix2D.prototype['prependTransform'] = function(x,y,scaleX,scaleY,rotation,skewX,skewY,regX,regY) {
        if(rotation % 360) {
          var r=rotation * Matrix2D.DEG_TO_RAD;
          var cos=Math.cos(r);
          var sin=Math.sin(r);
        } else {
          cos=1;
          sin=0;
        }
        if(regX || regY) {
          this.tx-=regX;
          this.ty-=regY;
        }
        if(skewX || skewY) {
          skewX*=Matrix2D.DEG_TO_RAD;
          skewY*=Matrix2D.DEG_TO_RAD;
          this.prepend(cos * scaleX,sin * scaleX,-sin * scaleY,cos * scaleY,0,0);
          this.prepend(Math.cos(skewY),Math.sin(skewY),-Math.sin(skewX),Math.cos(skewX),x,y);
        } else {
          this.prepend(cos * scaleX,sin * scaleX,-sin * scaleY,cos * scaleY,x,y);
        }
      };
      Matrix2D.prototype['appendTransform'] = function(x,y,scaleX,scaleY,rotation,skewX,skewY,regX,regY) {
        if(rotation % 360) {
          var r=rotation * Matrix2D.DEG_TO_RAD;
          var cos=Math.cos(r);
          var sin=Math.sin(r);
        } else {
          cos=1;
          sin=0;
        }
        if(skewX || skewY) {
          skewX*=Matrix2D.DEG_TO_RAD;
          skewY*=Matrix2D.DEG_TO_RAD;
          this.append(Math.cos(skewY),Math.sin(skewY),-Math.sin(skewX),Math.cos(skewX),x,y);
          this.append(cos * scaleX,sin * scaleX,-sin * scaleY,cos * scaleY,0,0);
        } else {
          this.append(cos * scaleX,sin * scaleX,-sin * scaleY,cos * scaleY,x,y);
        }
        if(regX || regY) {
          this.tx-=regX * this.a + regY * this.c;
          this.ty-=regX * this.b + regY * this.d;
        }
      };
      Matrix2D.prototype['rotate'] = function(angle) {
        var cos=Math.cos(angle);
        var sin=Math.sin(angle);
        var a1=this.a;
        var c1=this.c;
        var tx1=this.tx;
        this.a=a1 * cos - this.b * sin;
        this.b=a1 * sin + this.b * cos;
        this.c=c1 * cos - this.d * sin;
        this.d=c1 * sin + this.d * cos;
        this.tx=tx1 * cos - this.ty * sin;
        this.ty=tx1 * sin + this.ty * cos;
      };
      Matrix2D.prototype['skew'] = function(skewX,skewY) {
        skewX=skewX * Matrix2D.DEG_TO_RAD;
        skewY=skewY * Matrix2D.DEG_TO_RAD;
        this.append(Math.cos(skewY),Math.sin(skewY),-Math.sin(skewX),Math.cos(skewX),0,0);
      };
      Matrix2D.prototype['scale'] = function(x,y) {
        this.a*=x;
        this.d*=y;
        this.tx*=x;
        this.ty*=y;
      };
      Matrix2D.prototype['translate'] = function(x,y) {
        this.tx+=x;
        this.ty+=y;
      };
      Matrix2D.prototype['identity'] = function() {
        this.alpha=this.a=this.d=1;
        this.b=this.c=this.tx=this.ty=0;
        this.shadow=this.compositeOperation=null;
      };
      Matrix2D.prototype['invert'] = function() {
        var a1=this.a;
        var b1=this.b;
        var c1=this.c;
        var d1=this.d;
        var tx1=this.tx;
        var n=a1 * d1 - b1 * c1;
        this.a=d1 / n;
        this.b=-b1 / n;
        this.c=-c1 / n;
        this.d=a1 / n;
        this.tx=(c1 * this.ty - d1 * tx1) / n;
        this.ty=-(a1 * this.ty - b1 * tx1) / n;
      };
      Matrix2D.prototype['decompose'] = function(target) {
        if(target == null) {
          target={};
        }
        target.x=this.tx;
        target.y=this.ty;
        target.scaleX=Math.sqrt(this.a * this.a + this.b * this.b);
        target.scaleY=Math.sqrt(this.c * this.c + this.d * this.d);
        var skewX=Math.atan2(-this.c,this.d);
        var skewY=Math.atan2(this.b,this.a);
        if(skewX == skewY) {
          target.rotation=skewY / Matrix2D.DEG_TO_RAD;
          if(this.a < 0 && this.d >= 0) {
            target.rotation+=(target.rotation <= 0)?180:-180;
          }
          target.skewX=target.skewY=0;
        } else {
          target.skewX=skewX / Matrix2D.DEG_TO_RAD;
          target.skewY=skewY / Matrix2D.DEG_TO_RAD;
        }
        return target;
      };
      Matrix2D.prototype['reinitialize'] = function(a,b,c,d,tx,ty,alpha,shadow,compositeOperation) {
        this.a=a;
        this.b=b;
        this.c=c;
        this.d=d;
        this.tx=tx;
        this.ty=ty;
        this.alpha=alpha || 1;
        this.shadow=shadow;
        this.compositeOperation=compositeOperation;
        return this;
      };
      Matrix2D.prototype['appendProperties'] = function(alpha,shadow,compositeOperation) {
        this.alpha*=alpha;
        this.shadow=shadow || this.shadow;
        this.compositeOperation=compositeOperation || this.compositeOperation;
      };
      Matrix2D.prototype['prependProperties'] = function(alpha,shadow,compositeOperation) {
        this.alpha*=alpha;
        this.shadow=this.shadow || shadow;
        this.compositeOperation=this.compositeOperation || compositeOperation;
      };
      Matrix2D.identity = Matrix2D(1,0,0,1,0,0);
      Matrix2D.DEG_TO_RAD = Math.PI / 180;
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.identity = Matrix2D.identity;
        __.DEG_TO_RAD = Matrix2D.DEG_TO_RAD;
        __.constructor = Matrix2D;
        return new Matrix2D(args && args.length && args[0]);
      };
    })();
    exports.Matrix2D = Matrix2D;
    var SpriteSheet = (function() {
      function SpriteSheet() {
        function privateData() {
          this.image = null;
          this.frameWidth = null;
          this.frameHeight = null;
          this.frameData = null;
          this.loop = null;
          this.totalFrames = null;
        }
        var p_vars = new privateData();
        var image = p_vars.image;
        Object.getOwnPropertyDescriptor(this,'image') || Object.defineProperty(this,'image', {get: function(){return image;},set: function(e){image=e;}});
        var frameWidth = p_vars.frameWidth;
        Object.getOwnPropertyDescriptor(this,'frameWidth') || Object.defineProperty(this,'frameWidth', {get: function(){return frameWidth;},set: function(e){frameWidth=e;}});
        var frameHeight = p_vars.frameHeight;
        Object.getOwnPropertyDescriptor(this,'frameHeight') || Object.defineProperty(this,'frameHeight', {get: function(){return frameHeight;},set: function(e){frameHeight=e;}});
        var frameData = p_vars.frameData;
        Object.getOwnPropertyDescriptor(this,'frameData') || Object.defineProperty(this,'frameData', {get: function(){return frameData;},set: function(e){frameData=e;}});
        var loop = p_vars.loop;
        Object.getOwnPropertyDescriptor(this,'loop') || Object.defineProperty(this,'loop', {get: function(){return loop;},set: function(e){loop=e;}});
        var totalFrames = p_vars.totalFrames;
        Object.getOwnPropertyDescriptor(this,'totalFrames') || Object.defineProperty(this,'totalFrames', {get: function(){return totalFrames;},set: function(e){totalFrames=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            image:null,
            frameWidth:0,
            frameHeight:0,
            frameData:null
          };
          this.image=properties.image;
          this.frameWidth=properties.frameWidth;
          this.frameHeight=properties.frameHeight;
          this.frameData=properties.frameData;
          this.loop=true;
          this.totalFrames=0;
        }
        return ctor.apply(this,args) || this;
      }
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = SpriteSheet;
        return new SpriteSheet(args && args.length && args[0]);
      };
    })();
    exports.SpriteSheet = SpriteSheet;
    var Command = (function() {
      function Command() {
        function privateData() {
          this.f = null;
          this.params = null;
        }
        var p_vars = new privateData();
        var f = p_vars.f;
        Object.getOwnPropertyDescriptor(this,'f') || Object.defineProperty(this,'f', {get: function(){return f;},set: function(e){f=e;}});
        var params = p_vars.params;
        Object.getOwnPropertyDescriptor(this,'params') || Object.defineProperty(this,'params', {get: function(){return params;},set: function(e){params=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            f:null,
            params:null
          };
          this.f=properties.f;
          this.params=properties.params;
        }
        return ctor.apply(this,args) || this;
      }
      Command.prototype['exec'] = function(scope) {
        this.f.apply(scope,this.params);
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Command;
        return new Command(args && args.length && args[0]);
      };
    })();
    exports.Command = Command;
    var Graphics = (function() {
      function Graphics() {
        function privateData() {
          this._strokeInstructions = null;
          this._strokeStyleInstructions = null;
          this._fillInstructions = null;
          this._instructions = null;
          this._oldInstructions = null;
          this._activeInstructions = null;
          this._active = null;
          this._dirty = null;
          this.drawRect = null;
          this.curveTo = null;
        }
        var p_vars = new privateData();
        var _strokeInstructions = p_vars._strokeInstructions;
        Object.getOwnPropertyDescriptor(this,'_strokeInstructions') || Object.defineProperty(this,'_strokeInstructions', {get: function(){return _strokeInstructions;},set: function(e){_strokeInstructions=e;}});
        var _strokeStyleInstructions = p_vars._strokeStyleInstructions;
        Object.getOwnPropertyDescriptor(this,'_strokeStyleInstructions') || Object.defineProperty(this,'_strokeStyleInstructions', {get: function(){return _strokeStyleInstructions;},set: function(e){_strokeStyleInstructions=e;}});
        var _fillInstructions = p_vars._fillInstructions;
        Object.getOwnPropertyDescriptor(this,'_fillInstructions') || Object.defineProperty(this,'_fillInstructions', {get: function(){return _fillInstructions;},set: function(e){_fillInstructions=e;}});
        var _instructions = p_vars._instructions;
        Object.getOwnPropertyDescriptor(this,'_instructions') || Object.defineProperty(this,'_instructions', {get: function(){return _instructions;},set: function(e){_instructions=e;}});
        var _oldInstructions = p_vars._oldInstructions;
        Object.getOwnPropertyDescriptor(this,'_oldInstructions') || Object.defineProperty(this,'_oldInstructions', {get: function(){return _oldInstructions;},set: function(e){_oldInstructions=e;}});
        var _activeInstructions = p_vars._activeInstructions;
        Object.getOwnPropertyDescriptor(this,'_activeInstructions') || Object.defineProperty(this,'_activeInstructions', {get: function(){return _activeInstructions;},set: function(e){_activeInstructions=e;}});
        var _active = p_vars._active;
        Object.getOwnPropertyDescriptor(this,'_active') || Object.defineProperty(this,'_active', {get: function(){return _active;},set: function(e){_active=e;}});
        var _dirty = p_vars._dirty;
        Object.getOwnPropertyDescriptor(this,'_dirty') || Object.defineProperty(this,'_dirty', {get: function(){return _dirty;},set: function(e){_dirty=e;}});
        var drawRect = p_vars.drawRect;
        Object.getOwnPropertyDescriptor(this,'drawRect') || Object.defineProperty(this,'drawRect', {get: function(){return drawRect;},set: function(e){drawRect=e;}});
        var curveTo = p_vars.curveTo;
        Object.getOwnPropertyDescriptor(this,'curveTo') || Object.defineProperty(this,'curveTo', {get: function(){return curveTo;},set: function(e){curveTo=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          this._active=false;
          this._dirty=false;
          this.clear();
          this._ctx=Graphics._ctx;
          this.curveTo=this.quadraticCurveTo;
          this.drawRect=this.rect;
        }
        return ctor.apply(this,args) || this;
      }
      Graphics.prototype['draw'] = function(ctx) {
        if(this._dirty) {
          this._updateInstructions();
        }
        var instr=this._instructions;
        for(var i=0,l=instr.length;i < l;++i) {
          instr[i].exec?instr[i].exec(ctx):instr[i]();
        }
      };
      Graphics.prototype['moveTo'] = function(x,y) {
        this._activeInstructions.push(Command({
          f:this._ctx.moveTo,
          params:[x,y]
        }));
        return this;
      };
      Graphics.prototype['lineTo'] = function(x,y) {
        this._dirty=this._active=true;
        this._activeInstructions.push(Command({
          f:this._ctx.lineTo,
          params:[x,y]
        }));
        return this;
      };
      Graphics.prototype['arcTo'] = function(x1,y1,x2,y2,radius) {
        this._dirty=this._active=true;
        this._activeInstructions.push(Command({
          f:this._ctx.arcTo,
          params:[x1,y1,x2,y2,radius]
        }));
        return this;
      };
      Graphics.prototype['arc'] = function(x,y,radius,startAngle,endAngle,anticlockwise) {
        this._dirty=this._active=true;
        if(anticlockwise == null) {
          anticlockwise=false;
        }
        this._activeInstructions.push(Command({
          f:this._ctx.arc,
          params:[x,y,radius,startAngle,endAngle,anticlockwise]
        }));
        return this;
      };
      Graphics.prototype['quadraticCurveTo'] = function(cpx,cpy,x,y) {
        this._dirty=this._active=true;
        this._activeInstructions.push(Command({
          f:this._ctx.quadraticCurveTo,
          params:[cpx,cpy,x,y]
        }));
        return this;
      };
      Graphics.prototype['bezierCurveTo'] = function(cp1x,cp1y,cp2x,cp2y,x,y) {
        this._dirty=this._active=true;
        this._activeInstructions.push(Command({
          f:this._ctx.bezierCurveTo,
          params:[cp1x,cp1y,cp2x,cp2y,x,y]
        }));
        return this;
      };
      Graphics.prototype['rect'] = function(x,y,w,h) {
        this._dirty=this._active=true;
        this._activeInstructions.push(Command({
          f:this._ctx.rect,
          params:[x,y,w,h]
        }));
        return this;
      };
      Graphics.prototype['closePath'] = function() {
        if(this._active) {
          this._dirty=true;
          this._activeInstructions.push(Command({
            f:this._ctx.closePath,
            params:[]
          }));
        }
        return this;
      };
      Graphics.prototype['clear'] = function() {
        this._instructions=[];
        this._oldInstructions=[];
        this._activeInstructions=[];
        this._strokeStyleInstructions=this._strokeInstructions=this._fillInstructions=null;
        this._active=this._dirty=false;
        return this;
      };
      Graphics.prototype['beginFill'] = function(color) {
        if(this._active) {
          this._newPath();
        }
        this._fillInstructions=color?[Command({
          f:this._setProp,
          params:["fillStyle",color]
        })]:null;
        return this;
      };
      Graphics.prototype['beginLinearGradientFill'] = function(colors,ratios,x0,y0,x1,y1) {
        if(this._active) {
          this._newPath();
        }
        var o=this._ctx.createLinearGradient(x0,y0,x1,y1);
        for(var i=0,l=colors.length;i < l;++i) {
          o.addColorStop(ratios[i],colors[i]);
        }
        this._fillInstructions=[Command({
          f:this._setProp,
          params:["fillStyle",o]
        })];
        return this;
      };
      Graphics.prototype['beginRadialGradientFill'] = function(colors,ratios,x0,y0,r0,x1,y1,r1) {
        if(this._active) {
          this._newPath();
        }
        var o=this._ctx.createRadialGradient(x0,y0,r0,x1,y1,r1);
        for(var i=0,l=colors.length;i < l;++i) {
          o.addColorStop(ratios[i],colors[i]);
        }
        this._fillInstructions=[Command({
          f:this._setProp,
          params:["fillStyle",o]
        })];
        return this;
      };
      Graphics.prototype['beginBitmapFill'] = function(image,repetition) {
        if(this._active) {
          this._newPath();
        }
        repetition=repetition || "";
        var o=this._ctx.createPattern(image,repetition);
        this._fillInstructions=[Command({
          f:this._setProp,
          params:["fillStyle",o]
        })];
        return this;
      };
      Graphics.prototype['endFill'] = function() {
        this.beginFill(null);
        return this;
      };
      Graphics.prototype['setStrokeStyle'] = function(thickness,caps,joints,miterLimit) {
        if(this._active) {
          this._newPath();
        }
        this._strokeStyleInstructions=[Command({
          f:this._setProp,
          params:["lineWidth",(thickness == null?"1":thickness)]
        }),Command({
          f:this._setProp,
          params:["lineCap",(caps == null?"butt":(isNaN(caps)?caps:Graphics.STROKE_CAPS_MAP[caps]))]
        }),Command({
          f:this._setProp,
          params:["lineJoin",(joints == null?"miter":(isNaN(joints)?joints:Graphics.STROKE_JOINTS_MAP[joints]))]
        }),Command({
          f:this._setProp,
          params:["miterLimit",(miterLimit == null?"10":miterLimit)]
        })];
        return this;
      };
      Graphics.prototype['beginStroke'] = function(color) {
        if(this._active) {
          this._newPath();
        }
        this._strokeInstructions=color?[Command({
          f:this._setProp,
          params:["strokeStyle",color]
        })]:null;
        return this;
      };
      Graphics.prototype['beginLinearGradientStroke'] = function(colors,ratios,x0,y0,x1,y1) {
        if(this._active) {
          this._newPath();
        }
        var o=this._ctx.createLinearGradient(x0,y0,x1,y1);
        for(var i=0,l=colors.length;i < l;++i) {
          o.addColorStop(ratios[i],colors[i]);
        }
        this._strokeInstructions=[Command({
          f:this._setProp,
          params:["strokeStyle",o]
        })];
        return this;
      };
      Graphics.prototype['beginRadialGradientStroke'] = function(colors,ratios,x0,y0,r0,x1,y1,r1) {
        if(this._active) {
          this._newPath();
        }
        var o=this._ctx.createRadialGradient(x0,y0,r0,x1,y1,r1);
        for(var i=0,l=colors.length;i < l;++i) {
          o.addColorStop(ratios[i],colors[i]);
        }
        this._strokeInstructions=[Command({
          f:this._setProp,
          params:["strokeStyle",o]
        })];
        return this;
      };
      Graphics.prototype['beginBitmapStroke'] = function(image,repetition) {
        if(this._active) {
          this._newPath();
        }
        repetition=repetition || "";
        var o=this._ctx.createPattern(image,repetition);
        this._strokeInstructions=[Command({
          f:this._setProp,
          params:["strokeStyle",o]
        })];
        return this;
      };
      Graphics.prototype['endStroke'] = function() {
        this.beginStroke(null);
        return this;
      };
      Graphics.prototype['drawRoundRect'] = function(x,y,w,h,radius) {
        this.drawRoundRectComplex(x,y,w,h,radius,radius,radius,radius);
        return this;
      };
      Graphics.prototype['drawRoundRectComplex'] = function(x,y,w,h,radiusTL,radiusTR,radiusBR,radiusBL) {
        this._dirty=this._active=true;
        this._activeInstructions.push(Command({
          f:this._ctx.moveTo,
          params:[x + radiusTL,y]
        }),Command({
          f:this._ctx.lineTo,
          params:[x + w - radiusTR,y]
        }),Command({
          f:this._ctx.arc,
          params:[x + w - radiusTR,y + radiusTR,radiusTR,(-Math.PI / 2),0,false]
        }),Command({
          f:this._ctx.lineTo,
          params:[x + w,y + h - radiusBR]
        }),Command({
          f:this._ctx.arc,
          params:[x + w - radiusBR,y + h - radiusBR,radiusBR,0,Math.PI / 2,false]
        }),Command({
          f:this._ctx.lineTo,
          params:[x + radiusBL,y + h]
        }),Command({
          f:this._ctx.arc,
          params:[x + radiusBL,y + h - radiusBL,radiusBL,Math.PI / 2,Math.PI,false]
        }),Command({
          f:this._ctx.lineTo,
          params:[x,y + radiusTL]
        }),Command({
          f:this._ctx.arc,
          params:[x + radiusTL,y + radiusTL,radiusTL,Math.PI,Math.PI * 3 / 2,false]
        }));
        return this;
      };
      Graphics.prototype['drawCircle'] = function(x,y,radius) {
        this.arc(x,y,radius,0,Math.PI * 2);
        return this;
      };
      Graphics.prototype['drawEllipse'] = function(x,y,w,h) {
        this._dirty=this._active=true;
        var k=0.5522848;
        var ox=(w / 2) * k;
        var oy=(h / 2) * k;
        var xe=x + w;
        var ye=y + h;
        var xm=x + w / 2;
        var ym=y + h / 2;
        this._activeInstructions.push(Command({
          f:this._ctx.moveTo,
          params:[x,ym]
        }),Command({
          f:this._ctx.bezierCurveTo,
          params:[x,ym - oy,xm - ox,y,xm,y]
        }),Command({
          f:this._ctx.bezierCurveTo,
          params:[xm + ox,y,xe,ym - oy,xe,ym]
        }),Command({
          f:this._ctx.bezierCurveTo,
          params:[xe,ym + oy,xm + ox,ye,xm,ye]
        }),Command({
          f:this._ctx.bezierCurveTo,
          params:[xm - ox,ye,x,ym + oy,x,ym]
        }));
        return this;
      };
      Graphics.prototype['drawPolyStar'] = function(x,y,radius,sides,pointSize,angle) {
        this._dirty=this._active=true;
        if(pointSize == null) {
          pointSize=0;
        }
        pointSize=1 - pointSize;
        if(angle == null) {
          angle=0;
        } else {
          angle/=180 / Math.PI;
        }
        var a=Math.PI / sides;
        this._activeInstructions.push(Command({
          f:this._ctx.moveTo,
          params:[x + Math.cos(angle) * radius,y + Math.sin(angle) * radius]
        }));
        for(var i=0;i < sides;++i) {
          angle+=a;
          if(pointSize != 1) {
            this._activeInstructions.push(Command({
              f:this._ctx.lineTo,
              params:[x + Math.cos(angle) * radius * pointSize,y + Math.sin(angle) * radius * pointSize]
            }));
          }
          angle+=a;
          this._activeInstructions.push(Command({
            f:this._ctx.lineTo,
            params:[x + Math.cos(angle) * radius,y + Math.sin(angle) * radius]
          }));
        }
        return this;
      };
      Graphics.prototype['_updateInstructions'] = function() {
        this._instructions=this._oldInstructions.slice();
        this._instructions.push(Graphics.beginCmd);
        if(this._fillInstructions) {
          this._instructions.push.apply(this._instructions,this._fillInstructions);
        }
        if(this._strokeInstructions) {
          this._instructions.push.apply(this._instructions,this._strokeInstructions);
          if(this._strokeStyleInstructions) {
            this._instructions.push.apply(this._instructions,this._strokeStyleInstructions);
          }
        }
        this._instructions.push.apply(this._instructions,this._activeInstructions);
        if(this._fillInstructions) {
          this._instructions.push(Graphics.fillCmd);
        }
        if(this._strokeInstructions) {
          this._instructions.push(Graphics.strokeCmd);
        }
      };
      Graphics.prototype['_newPath'] = function() {
        this._dirty && this._updateInstructions();
        this._oldInstructions=this._instructions;
        this._activeInstructions=[];
        this._active=this._dirty=false;
      };
      Graphics.prototype['_setProp'] = function(name,value) {
        this[name]=value;
      };
      Graphics.getRGB = function (r,g,b,alpha) {
        if(r != null && b == null) {
          alpha=g;
          b=r & 255;
          g=r >> 8 & 255;
          r=r >> 16 & 255;
        }
        if(alpha == null) {
          return "rgb(" + r + "," + g + "," + b + ")";
        } else {
          return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
        }
      };
      Graphics.getHSL = function(hue,saturation,lightness,alpha) {
        if(alpha == null) {
          return "hsl(" + (hue % 360) + "," + saturation + "%," + lightness + "%)";
        } else {
          return "hsla(" + (hue % 360) + "," + saturation + "%," + lightness + "%," + alpha + ")";
        }
      }
      Graphics.STROKE_CAPS_MAP = ["butt","round","square"];
      Graphics.STROKE_JOINTS_MAP = ["miter","round","bevel"];
      Graphics._ctx = document.createElement("canvas").getContext("2d");
      Graphics.beginCmd = Command({
        f:Graphics._ctx.beginPath,
        params:[]
      });
      Graphics.fillCmd = Command({
        f:Graphics._ctx.fill,
        params:[]
      });
      Graphics.strokeCmd = Command({
        f:Graphics._ctx.stroke,
        params:[]
      });
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.getRGB = Graphics.getRGB;
        __.getHSL = Graphics.getHSL;
        __.STROKE_CAPS_MAP = Graphics.STROKE_CAPS_MAP;
        __.STROKE_JOINTS_MAP = Graphics.STROKE_JOINTS_MAP;
        __._ctx = Graphics._ctx;
        __.beginCmd = Graphics.beginCmd;
        __.fillCmd = Graphics.fillCmd;
        __.strokeCmd = Graphics.strokeCmd;
        __.constructor = Graphics;
        return new Graphics(args && args.length && args[0]);
      };
    })();
    exports.Graphics = Graphics;
    var DisplayObject = (function() {
      function DisplayObject() {
        function privateData() {
          this.alpha = null;
          this.cacheCanvas = null;
          this.id = null;
          this.mouseEnabled = null;
          this.name = null;
          this.parent = null;
          this.regX = null;
          this.regY = null;
          this.rotation = null;
          this.scaleX = null;
          this.scaleY = null;
          this.skewX = null;
          this.skewY = null;
        }
        var p_vars = new privateData();
        var alpha = p_vars.alpha;
        Object.getOwnPropertyDescriptor(this,'alpha') || Object.defineProperty(this,'alpha', {get: function(){return alpha;},set: function(e){alpha=e;}});
        var cacheCanvas = p_vars.cacheCanvas;
        Object.getOwnPropertyDescriptor(this,'cacheCanvas') || Object.defineProperty(this,'cacheCanvas', {get: function(){return cacheCanvas;},set: function(e){cacheCanvas=e;}});
        var id = p_vars.id;
        Object.getOwnPropertyDescriptor(this,'id') || Object.defineProperty(this,'id', {get: function(){return id;},set: function(e){id=e;}});
        var mouseEnabled = p_vars.mouseEnabled;
        Object.getOwnPropertyDescriptor(this,'mouseEnabled') || Object.defineProperty(this,'mouseEnabled', {get: function(){return mouseEnabled;},set: function(e){mouseEnabled=e;}});
        var name = p_vars.name;
        Object.getOwnPropertyDescriptor(this,'name') || Object.defineProperty(this,'name', {get: function(){return name;},set: function(e){name=e;}});
        var parent = p_vars.parent;
        Object.getOwnPropertyDescriptor(this,'parent') || Object.defineProperty(this,'parent', {get: function(){return parent;},set: function(e){parent=e;}});
        var regX = p_vars.regX;
        Object.getOwnPropertyDescriptor(this,'regX') || Object.defineProperty(this,'regX', {get: function(){return regX;},set: function(e){regX=e;}});
        var regY = p_vars.regY;
        Object.getOwnPropertyDescriptor(this,'regY') || Object.defineProperty(this,'regY', {get: function(){return regY;},set: function(e){regY=e;}});
        var rotation = p_vars.rotation;
        Object.getOwnPropertyDescriptor(this,'rotation') || Object.defineProperty(this,'rotation', {get: function(){return rotation;},set: function(e){rotation=e;}});
        var scaleX = p_vars.scaleX;
        Object.getOwnPropertyDescriptor(this,'scaleX') || Object.defineProperty(this,'scaleX', {get: function(){return scaleX;},set: function(e){scaleX=e;}});
        var scaleY = p_vars.scaleY;
        Object.getOwnPropertyDescriptor(this,'scaleY') || Object.defineProperty(this,'scaleY', {get: function(){return scaleY;},set: function(e){scaleY=e;}});
        var skewX = p_vars.skewX;
        Object.getOwnPropertyDescriptor(this,'skewX') || Object.defineProperty(this,'skewX', {get: function(){return skewX;},set: function(e){skewX=e;}});
        var skewY = p_vars.skewY;
        Object.getOwnPropertyDescriptor(this,'skewY') || Object.defineProperty(this,'skewY', {get: function(){return skewY;},set: function(e){skewY=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          this.alpha=properties.alpha || 1;
          this.id=properties.id || Math.uuid(8);
          this.mouseEnabled=properties.mouseEnabled || true;
          this.regX=properties.regX || 0;
          this.regY=properties.regY || 0;
          this.rotation=properties.rotation || 0;
          this.scaleX=properties.scaleX || 1;
          this.scaleY=properties.scaleY || 1;
          this.skewX=properties.skewX || 0;
          this.skewY=properties.skewY || 0;
          this.shadow=properties.shadow;
          this.visible=properties.visiable || true;
          this.x=properties.x || 0;
          this.y=properties.y || 0;
          this.compositeOperation=properties.compositeOperation;
          this.snapToPixel=properties.snapToPixel || false;
          this.onPress=properties.onPress;
          this.onClick=properties.onClick;
          this.onDoubleClick=properties.onDoubleClick;
          this.onMouseOver=properties.onMouseOver;
          this.onMouseOut=properties.onMouseOut;
          this.tick=properties.tick;
          this.filters=properties.filters;
          this._cacheOffsetX=properties._cacheOffsetX || 0;
          this._cacheOffsetY=properties._cacheOffsetY || 0;
          this._matrix=properties._matrix || Matrix2D();
        }
        return ctor.apply(this,args) || this;
      }
      DisplayObject.prototype['isVisible'] = function() {
        return this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0;
      };
      DisplayObject.prototype['draw'] = function(ctx,ignoreCache) {
        if(ignoreCache || !this.cacheCanvas) {
          return false;
        }
        ctx.drawImage(this.cacheCanvas,this._cacheOffsetX,this._cacheOffsetY);
        return true;
      };
      DisplayObject.prototype['cache'] = function(x,y,width,height) {
        this.cacheCanvas=this.cacheCanvas || document.createElement("canvas");
        var ctx=this.cacheCanvas.getContext("2d");
        this.cacheCanvas.width=width;
        this.cacheCanvas.height=height;
        ctx.setTransform(1,0,0,1,-x,-y);
        ctx.clearRect(0,0,width + 1,height + 1);
        this.draw(ctx,true);
        this._cacheOffsetX=x;
        this._cacheOffsetY=y;
        this._applyFilters();
      };
      DisplayObject.prototype['updateCache'] = function(compositeOperation) {
        if(!this.cacheCanvas) {
          throw "cache() must be called before updateCache()";
        }
        var ctx=this.cacheCanvas.getContext("2d");
        ctx.setTransform(1,0,0,1,-this._cacheOffsetX,-this._cacheOffsetY);
        if(!compositeOperation) {
          ctx.clearRect(0,0,this.cacheCanvas.width + 1,this.cacheCanvas.height + 1);
        } else {
          ctx.globalCompositeOperation=compositeOperation;
        }
        this.draw(ctx,true);
        compositeOperation && (ctx.globalCompositeOperation="source-over");
        this._applyFilters();
      };
      DisplayObject.prototype['uncachefunction'] = function() {
        this.cacheCanvas=null;
        this._cacheOffsetX=this._cacheOffsetY=0;
      };
      DisplayObject.prototype['getStagefunction'] = function() {
        var o=this;
        while(o.parent) {
          o=o.parent;
        }
        return o instanceof Stage?o:null;
      };
      DisplayObject.prototype['localToGlobal'] = function(x,y) {
        var mtx=this.getConcatenatedMatrix(this._matrix);
        if(mtx == null) {
          return null;
        }
        mtx.append(1,0,0,1,x,y);
        return Point(mtx.tx,mtx.ty);
      };
      DisplayObject.prototype['globalToLocal'] = function(x,y) {
        var mtx=this.getConcatenatedMatrix(this._matrix);
        if(mtx == null) {
          return null;
        }
        mtx.invert();
        mtx.append(1,0,0,1,x,y);
        return Point(mtx.tx,mtx.ty);
      };
      DisplayObject.prototype['localToLocal'] = function(x,y,target) {
        var pt=this.localToGlobal(x,y);
        return target.globalToLocal(pt.x,pt.y);
      };
      DisplayObject.prototype['setTransform'] = function(x,y,scaleX,scaleY,rotation,skewX,skewY,regX,regY) {
        this.x=x || 0;
        this.y=y || 0;
        this.scaleX=scaleX == null?1:scaleX;
        this.scaleY=scaleY == null?1:scaleY;
        this.rotation=rotation || 0;
        this.skewX=skewX || 0;
        this.skewY=skewY || 0;
        this.regX=regX || 0;
        this.regY=regY || 0;
      };
      DisplayObject.prototype['getConcatenatedMatrix'] = function(mtx) {
        if(mtx) {
          mtx.identity();
        } else {
          mtx=Matrix2D();
        }
        var target=this;
        while(target != null) {
          mtx.prependTransform(target.x,target.y,target.scaleX,target.scaleY,target.rotation,target.skewX,target.skewY,target.regX,target.regY);
          mtx.prependProperties(target.alpha,target.shadow,target.compositeOperation);
          target=target.parent;
        }
        return mtx;
      };
      DisplayObject.prototype['hitTestfunction'] = function(x,y) {
        var ctx=DisplayObject._hitTestContext;
        var canvas=DisplayObject._hitTestCanvas;
        ctx.setTransform(1,0,0,1,-x,-y);
        this.draw(ctx);
        var hit=this._testHit(ctx);
        canvas.width=0;
        canvas.width=1;
        return hit;
      };
      DisplayObject.prototype['_testHit'] = function(ctx) {
        try {
          var hit=ctx.getImageData(0,0,1,1).data[3] > 1;
        } catch(e) {
          if(!DisplayObject.suppressCrossDomainErrors) {
            throw "An error has occured. This is most likely due to security restrictions on reading canvas pixel " + "data with local or cross-domain images.";
          }
        }
        return hit;
      };
      Object.defineProperty(DisplayObject.prototype,'applyShadow', {value:function (ctx,shadow) {
        shadow=shadow || Shadow.identity;
        ctx.shadowColor=shadow.color;
        ctx.shadowOffsetX=shadow.offsetX;
        ctx.shadowOffsetY=shadow.offsetY;
        ctx.shadowBlur=shadow.blur;
      }, writable: true, enumerable: true, configurable: true});
      Object.defineProperty(DisplayObject.prototype,'_applyFilters', {value:function () {
        if(!this.filters || this.filters.length == 0 || !this.cacheCanvas) {
          return;
        }
        var l=this.filters.length;
        var ctx=this.cacheCanvas.getContext("2d");
        var w=this.cacheCanvas.width;
        var h=this.cacheCanvas.height;
        for(var i=0;i < l;++i) {
          this.filters[i].applyFilter(ctx,0,0,w,h);
        }
      }, writable: true, enumerable: true, configurable: true});
      DisplayObject.suppressCrossDomainErrors = false;
      DisplayObject.hitTestCanvas = document.createElement("canvas");
      DisplayObject.hitTestContext = DisplayObject.hitTestCanvas.getContext("2d");
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.suppressCrossDomainErrors = DisplayObject.suppressCrossDomainErrors;
        __.hitTestCanvas = DisplayObject.hitTestCanvas;
        __.hitTestContext = DisplayObject.hitTestContext;
        __.constructor = DisplayObject;
        return new DisplayObject(args && args.length && args[0]);
      };
    })();
    exports.DisplayObject = DisplayObject;
    var BitmapSequence = (function() {
      BitmapSequence.prototype = exports.DisplayObject();
      BitmapSequence.prototype.constructor = BitmapSequence;
      var DisplayObject = exports.DisplayObject.constructor;
      function BitmapSequence() {
        function privateData() {
          this.callback = null;
          this.currentFrame = null;
          this.currentEndFrame = null;
          this.currentStartFrame = null;
          this.nextSequence = null;
          this.paused = null;
          this.spriteSheet = null;
          this.snapToPixel = null;
        }
        var p_vars = new privateData();
        var callback = p_vars.callback;
        Object.getOwnPropertyDescriptor(this,'callback') || Object.defineProperty(this,'callback', {get: function(){return callback;},set: function(e){callback=e;}});
        var currentFrame = p_vars.currentFrame;
        Object.getOwnPropertyDescriptor(this,'currentFrame') || Object.defineProperty(this,'currentFrame', {get: function(){return currentFrame;},set: function(e){currentFrame=e;}});
        var currentEndFrame = p_vars.currentEndFrame;
        Object.getOwnPropertyDescriptor(this,'currentEndFrame') || Object.defineProperty(this,'currentEndFrame', {get: function(){return currentEndFrame;},set: function(e){currentEndFrame=e;}});
        var currentStartFrame = p_vars.currentStartFrame;
        Object.getOwnPropertyDescriptor(this,'currentStartFrame') || Object.defineProperty(this,'currentStartFrame', {get: function(){return currentStartFrame;},set: function(e){currentStartFrame=e;}});
        var nextSequence = p_vars.nextSequence;
        Object.getOwnPropertyDescriptor(this,'nextSequence') || Object.defineProperty(this,'nextSequence', {get: function(){return nextSequence;},set: function(e){nextSequence=e;}});
        var paused = p_vars.paused;
        Object.getOwnPropertyDescriptor(this,'paused') || Object.defineProperty(this,'paused', {get: function(){return paused;},set: function(e){paused=e;}});
        var spriteSheet = p_vars.spriteSheet;
        Object.getOwnPropertyDescriptor(this,'spriteSheet') || Object.defineProperty(this,'spriteSheet', {get: function(){return spriteSheet;},set: function(e){spriteSheet=e;}});
        var snapToPixel = p_vars.snapToPixel;
        Object.getOwnPropertyDescriptor(this,'snapToPixel') || Object.defineProperty(this,'snapToPixel', {get: function(){return snapToPixel;},set: function(e){snapToPixel=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            spriteSheet:null
          };
          DisplayObject.call(this,properties);
          this.callback=properties.callback;
          this.currentFrame=properties.currentFrame || -1;
          this.currentEndFrame=properties.currentEndFrame;
          this.currentStartFrame=properties.currentStartFrame;
          this.nextSequence=properties.nextSequence;
          this.paused=properties.paused || false;
          this.spriteSheet=properties.spriteSheet;
          this.snapToPixel=properties.snapToPixel || true;
        }
        return ctor.apply(this,args) || this;
      }
      BitmapSequence.prototype['isVisible'] = function() {
        var image=this.spriteSheet?this.spriteSheet.image:null;
        return this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && image && this.currentFrame >= 0 && (image.complete || image.getContext);
      };
      BitmapSequence.prototype['draw'] = function(ctx,ignoreCache) {
        if(DisplayObject.prototype.draw.call(this,ctx,ignoreCache)) {
          return true;
        }
        var image=this.spriteSheet.image;
        var frameWidth=this.spriteSheet.frameWidth;
        var frameHeight=this.spriteSheet.frameHeight;
        var cols=image.width / frameWidth | 0;
        var rows=image.height / frameHeight | 0;
        if(this.currentEndFrame != null) {
          if(this.currentFrame > this.currentEndFrame) {
            if(this.nextSequence) {
              this._goto(this.nextSequence);
            } else {
              this.paused=true;
              this.currentFrame=this.currentEndFrame;
            }
            this.callback && this.callback(this);
          }
        } else {
          var ttlFrames=this.spriteSheet.totalFrames || cols * rows;
          if(this.currentFrame >= ttlFrames) {
            if(this.spriteSheet.loop) {
              this.currentFrame=0;
            } else {
              this.currentFrame=ttlFrames - 1;
              this.paused=true;
            }
            this.callback && this.callback(this);
          }
        }
        if(this.currentFrame >= 0) {
          var col=this.currentFrame % cols;
          var row=this.currentFrame / cols | 0;
          ctx.drawImage(image,frameWidth * col,frameHeight * row,frameWidth,frameHeight,0,0,frameWidth,frameHeight);
        }
        return true;
      };
      BitmapSequence.prototype['gotoAndPlay'] = function(frameOrSequence) {
        this.paused=false;
        this._goto(frameOrSequence);
      };
      BitmapSequence.prototype['gotoAndStop'] = function(frameOrSequence) {
        this.paused=true;
        this._goto(frameOrSequence);
      };
      BitmapSequence.prototype['advance'] = function() {
        this._tick();
      };
      BitmapSequence.prototype['_tick'] = function() {
        if(this.currentFrame == -1 && this.spriteSheet.frameData) {
          this.paused=true;
        }
        if(this.paused) {
          return;
        }
        ++this.currentFrame;
      };
      BitmapSequence.prototype['_goto'] = function(frameOrSequence) {
        if(isNaN(frameOrSequence)) {
          if(frameOrSequence == this.currentSequence) {
            this.currentFrame=this.currentStartFrame;
            return;
          }
          var data=this.spriteSheet.frameData[frameOrSequence];
          if(data instanceof Array) {
            this.currentFrame=this.currentStartFrame=data[0];
            this.currentSequence=frameOrSequence;
            this.currentEndFrame=data[1];
            if(this.currentEndFrame == null) {
              this.currentEndFrame=this.currentStartFrame;
            }
            if(this.currentEndFrame == null) {
              this.currentEndFrame=this.currentFrame;
            }
            this.nextSequence=data[2];
            if(this.nextSequence == null) {
              this.nextSequence=this.currentSequence;
            } else if(this.nextSequence == false) {
              this.nextSequence=null;
            }
          } else {
            this.currentSequence=this.nextSequence=null;
            this.currentEndFrame=this.currentFrame=this.currentStartFrame=data;
          }
        } else {
          this.currentSequence=this.nextSequence=this.currentEndFrame=null;
          this.currentStartFrame=0;
          this.currentFrame=frameOrSequence;
        }
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = BitmapSequence;
        return new BitmapSequence(args && args.length && args[0]);
      };
    })();
    exports.BitmapSequence = BitmapSequence;
    var Shape = (function() {
      Shape.prototype = exports.DisplayObject();
      Shape.prototype.constructor = Shape;
      var DisplayObject = exports.DisplayObject.constructor;
      function Shape() {
        function privateData() {
          this.graphics = null;
        }
        var p_vars = new privateData();
        var graphics = p_vars.graphics;
        Object.getOwnPropertyDescriptor(this,'graphics') || Object.defineProperty(this,'graphics', {get: function(){return graphics;},set: function(e){graphics=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            graphics:null
          };
          DisplayObject.call(this,properties);
          this.graphics=properties.graphics || Graphics();
        }
        return ctor.apply(this,args) || this;
      }
      Shape.prototype['isVisible'] = function() {
        return this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && this.graphics;
      };
      Shape.prototype['draw'] = function(ctx,ignoreCache) {
        if(DisplayObject.prototype.draw.call(this,ctx,ignoreCache)) {
          return true;
        }
        this.graphics.draw(ctx);
        return true;
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Shape;
        return new Shape(args && args.length && args[0]);
      };
    })();
    exports.Shape = Shape;
    var Text = (function() {
      Text.prototype = exports.DisplayObject();
      Text.prototype.constructor = Text;
      var DisplayObject = exports.DisplayObject.constructor;
      function Text() {
        function privateData() {
          this.text = null;
          this.font = null;
          this.color = null;
          this.textAlign = null;
          this.textBaseline = null;
          this.maxWidth = null;
          this.outline = null;
          this.lineHeight = null;
          this.lineWidth = null;
        }
        var p_vars = new privateData();
        var text = p_vars.text;
        Object.getOwnPropertyDescriptor(this,'text') || Object.defineProperty(this,'text', {get: function(){return text;},set: function(e){text=e;}});
        var font = p_vars.font;
        Object.getOwnPropertyDescriptor(this,'font') || Object.defineProperty(this,'font', {get: function(){return font;},set: function(e){font=e;}});
        var color = p_vars.color;
        Object.getOwnPropertyDescriptor(this,'color') || Object.defineProperty(this,'color', {get: function(){return color;},set: function(e){color=e;}});
        var textAlign = p_vars.textAlign;
        Object.getOwnPropertyDescriptor(this,'textAlign') || Object.defineProperty(this,'textAlign', {get: function(){return textAlign;},set: function(e){textAlign=e;}});
        var textBaseline = p_vars.textBaseline;
        Object.getOwnPropertyDescriptor(this,'textBaseline') || Object.defineProperty(this,'textBaseline', {get: function(){return textBaseline;},set: function(e){textBaseline=e;}});
        var maxWidth = p_vars.maxWidth;
        Object.getOwnPropertyDescriptor(this,'maxWidth') || Object.defineProperty(this,'maxWidth', {get: function(){return maxWidth;},set: function(e){maxWidth=e;}});
        var outline = p_vars.outline;
        Object.getOwnPropertyDescriptor(this,'outline') || Object.defineProperty(this,'outline', {get: function(){return outline;},set: function(e){outline=e;}});
        var lineHeight = p_vars.lineHeight;
        Object.getOwnPropertyDescriptor(this,'lineHeight') || Object.defineProperty(this,'lineHeight', {get: function(){return lineHeight;},set: function(e){lineHeight=e;}});
        var lineWidth = p_vars.lineWidth;
        Object.getOwnPropertyDescriptor(this,'lineWidth') || Object.defineProperty(this,'lineWidth', {get: function(){return lineWidth;},set: function(e){lineWidth=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            text:"",
            font:null,
            color:'#000'
          };
          DisplayObject.call(this,properties);
          this.text=properties.text;
          this.font=properties.font;
          this.color=properties.color;
          this.textAlign=properties.textAlign;
          this.textBaseline=properties.textBaseline;
          this.maxWidth=properties.maxWidth || 0;
          this.outline=properties.outline;
          this.lineHeight=properties.lineHeight || 0;
          this.lineWidth=properties.lineWidth || 0;
        }
        return ctor.apply(this,args) || this;
      }
      Text.prototype['isVisible'] = function() {
        return Boolean(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && this.text != null && this.text != "");
      };
      Text.prototype['draw'] = function(ctx,ignoreCache) {
        if(DisplayObject.prototype.draw.call(this,ctx,ignoreCache)) {
          return true;
        }
        if(this.outline) {
          ctx.strokeStyle=this.color;
        } else {
          ctx.fillStyle=this.color;
        }
        ctx.font=this.font;
        ctx.textAlign=this.textAlign?this.textAlign:"start";
        ctx.textBaseline=this.textBaseline?this.textBaseline:"alphabetic";
        var lines=String(this.text).split(/(?:\r\n|\r|\n)/);
        var lineHeight=(this.lineHeight == null)?this.getMeasuredLineHeight():this.lineHeight;
        var y=0;
        for(var i=0,l=lines.length;i < l;++i) {
          var w=ctx.measureText(lines[i]).width;
          if(this.lineWidth == null || w < this.lineWidth) {
            this._drawTextLine(ctx,lines[i],y);
            y+=lineHeight;
            continue;
          }
          var words=lines[i].split(/(\s)/);
          var str=words[0];
          for(var j=1,jl=words.length;j < jl;j+=2) {
            if(ctx.measureText(str + words[j] + words[j + 1]).width > this.lineWidth) {
              this._drawTextLine(ctx,str,y);
              y+=lineHeight;
              str=words[j + 1];
            } else {
              str+=words[j] + words[j + 1];
            }
          }
          this._drawTextLine(ctx,str,y);
          y+=lineHeight;
        }
        return true;
      };
      Text.prototype['getMeasuredWidth'] = function() {
        return this._getWorkingContext().measureText(this.text).width;
      };
      Text.prototype['getMeasuredLineHeight'] = function() {
        return this._getWorkingContext().measureText("M").width * 1.2;
      };
      Text.prototype['_getWorkingContext'] = function() {
        var ctx=Text._workingContext;
        ctx.font=this.font;
        ctx.textAlign=this.textAlign?this.textAlign:"start";
        ctx.textBaseline=this.textBaseline?this.textBaseline:"alphabetic";
        return ctx;
      };
      Text.prototype['_drawTextLine'] = function(ctx,text,y) {
        if(this.outline) {
          ctx.strokeText(text,0,y,this.maxWidth);
        } else {
          ctx.fillText(text,0,y,this.maxWidth);
        }
      };
      Text._workingContext = document.createElement("canvas").getContext("2d");
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __._workingContext = Text._workingContext;
        __.constructor = Text;
        return new Text(args && args.length && args[0]);
      };
    })();
    exports.Text = Text;
    var Container = (function() {
      Container.prototype = exports.DisplayObject();
      Container.prototype.constructor = Container;
      var DisplayObject = exports.DisplayObject.constructor;
      function Container() {
        function privateData() {
          this.children = null;
        }
        var p_vars = new privateData();
        var children = p_vars.children;
        Object.getOwnPropertyDescriptor(this,'children') || Object.defineProperty(this,'children', {get: function(){return children;},set: function(e){children=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            children:[]
          };
          DisplayObject.call(this,properties);
          this.children=properties.children || [];
        }
        return ctor.apply(this,args) || this;
      }
      Container.prototype['isVisible'] = function() {
        return this.visible && this.alpha > 0 && this.children.length && this.scaleX != 0 && this.scaleY != 0;
      };
      Container.prototype['draw'] = function(ctx,ignoreCache,_mtx) {
        var snap=Stage._snapToPixelEnabled;
        if(DisplayObject.prototype.draw.call(this,ctx,ignoreCache)) {
          return true;
        }
        _mtx=_mtx || this._matrix.reinitialize(1,0,0,1,0,0,this.alpha,this.shadow,this.compositeOperation);
        var l=this.children.length;
        var list=this.children.slice(0);
        for(var i=0;i < l;++i) {
          var child=list[i];
          if(!child.isVisible()) {
            continue;
          }
          var shadow=false;
          var mtx=child._matrix.reinitialize(_mtx.a,_mtx.b,_mtx.c,_mtx.d,_mtx.tx,_mtx.ty,_mtx.alpha,_mtx.shadow,_mtx.compositeOperation);
          mtx.appendTransform(child.x,child.y,child.scaleX,child.scaleY,child.rotation,child.skewX,child.skewY,child.regX,child.regY);
          mtx.appendProperties(child.alpha,child.shadow,child.compositeOperation);
          if(!(child instanceof Container && child.cacheCanvas == null)) {
            if(snap && child.snapToPixel && mtx.a == 1 && mtx.b == 0 && mtx.c == 0 && mtx.d == 1) {
              ctx.setTransform(mtx.a,mtx.b,mtx.c,mtx.d,mtx.tx + 0.5 | 0,mtx.ty + 0.5 | 0);
            } else {
              ctx.setTransform(mtx.a,mtx.b,mtx.c,mtx.d,mtx.tx,mtx.ty);
            }
            ctx.globalAlpha=mtx.alpha;
            ctx.globalCompositeOperation=mtx.compositeOperation || "source-over";
            if(shadow=mtx.shadow) {
              this.applyShadow(ctx,shadow);
            }
          }
          child.draw(ctx,false,mtx);
          if(shadow) {
            this.applyShadow(ctx);
          }
        }
        return true;
      };
      Container.prototype['addChild'] = function(child) {
        var l=arguments.length;
        if(l > 1) {
          for(var i=0;i < l;++i) {
            this.addChild(arguments[i]);
          }
          return arguments[l - 1];
        }
        if(child.parent) {
          child.parent.removeChild(child);
        }
        child.parent=this;
        this.children.push(child);
        return child;
      };
      Container.prototype['addChildAt'] = function(child,index) {
        var l=arguments.length;
        if(l > 2) {
          index=arguments[i - 1];
          for(var i=0;i < l - 1;++i) {
            this.addChildAt(arguments[i],index + i);
          }
          return arguments[l - 2];
        }
        if(child.parent) {
          child.parent.removeChild(child);
        }
        child.parent=this;
        this.children.splice(index,0,child);
        return child;
      };
      Container.prototype['removeChild'] = function(child) {
        var l=arguments.length;
        if(l > 1) {
          var good=true;
          for(var i=0;i < l;++i) {
            good=good && this.removeChild(arguments[i]);
          }
          return good;
        }
        return this.removeChildAt(this.children.indexOf(child));
      };
      Container.prototype['sortChildren'] = function(sortFunction) {
        this.children.sort(sortFunction);
      };
      Container.prototype['getChildIndex'] = function(child) {
        return this.children.indexOf(child);
      };
      Container.prototype['getNumChildren'] = function() {
        return this.children.length;
      };
      Container.prototype['contains'] = function(child) {
        while(child) {
          if(child == this) {
            return true;
          }
          child=child.parent;
        }
        return false;
      };
      Container.prototype['hitTest'] = function(x,y) {
        return (this.getObjectUnderPoint(x,y) != null);
      };
      Container.prototype['getObjectsUnderPoint'] = function(x,y) {
        var arr=[];
        var pt=this.localToGlobal(x,y);
        this._getObjectsUnderPoint(pt.x,pt.y,arr);
        return arr;
      };
      Container.prototype['getObjectUnderPoint'] = function(x,y) {
        var pt=this.localToGlobal(x,y);
        return this._getObjectsUnderPoint(pt.x,pt.y);
      };
      Container.prototype['_tick'] = function() {
        for(var i=this.children.length - 1;i >= 0;--i) {
          var child=this.children[i];
          if(child._tick) {
            child._tick();
          }
          if(child.tick) {
            child.tick();
          }
        }
      };
      Container.prototype['_getObjectsUnderPoint'] = function(x,y,arr,mouseEvents) {
        var ctx=DisplayObject._hitTestContext;
        var canvas=DisplayObject._hitTestCanvas;
        var mtx=this._matrix;
        var hasHandler=(mouseEvents & 1 && (this.onPress || this.onClick || this.onDoubleClick)) || (mouseEvents & 2 && (this.onMouseOver || this.onMouseOut));
        if(this.cacheCanvas) {
          this.getConcatenatedMatrix(mtx);
          ctx.setTransform(mtx.a,mtx.b,mtx.c,mtx.d,mtx.tx - x,mtx.ty - y);
          ctx.globalAlpha=mtx.alpha;
          this.draw(ctx);
          if(this._testHit(ctx)) {
            canvas.width=0;
            canvas.width=1;
            if(hasHandler) {
              return this;
            }
          } else {
            return null;
          }
        }
        var l=this.children.length;
        for(var i=l - 1;i >= 0;--i) {
          var child=this.children[i];
          if(!child.isVisible() || !child.mouseEnabled) {
            continue;
          }
          if(child instanceof Container) {
            var result;
            if(hasHandler) {
              result=child._getObjectsUnderPoint(x,y);
              if(result) {
                return this;
              }
            } else {
              result=child._getObjectsUnderPoint(x,y,arr,mouseEvents);
              if(!arr && result) {
                return result;
              }
            }
          } else if(!mouseEvents || hasHandler || (mouseEvents & 1 && (child.onPress || child.onClick || child.onDoubleClick)) || (mouseEvents & 2 && (child.onMouseOver || child.onMouseOut))) {
            child.getConcatenatedMatrix(mtx);
            ctx.setTransform(mtx.a,mtx.b,mtx.c,mtx.d,mtx.tx - x,mtx.ty - y);
            ctx.globalAlpha=mtx.alpha;
            child.draw(ctx);
            if(!this._testHit(ctx)) {
              continue;
            }
            canvas.width=0;
            canvas.width=1;
            if(hasHandler) {
              return this;
            } else if(arr) {
              arr.push(child);
            } else {
              return child;
            }
          }
        }
        return null;
      };
      Object.defineProperty(Container.prototype,'removeChildAt', {value:function (index) {
        var l=arguments.length;
        if(l > 1) {
          var a=[];
          for(var i=0;i < l;++i) {
            a[i]=arguments[i];
          }
          a.sort(function (a,b) {
            return b - a;
          });
          var good=true;
          for(var i=0;i < l;++i) {
            good=good && this.removeChildAt(a[i]);
          }
          return good;
        }
        if(index < 0 || index > this.children.length - 1) {
          return false;
        }
        var child=this.children[index];
        if(child != null) {
          child.parent=null;
        }
        this.children.splice(index,1);
        return true;
      }, writable: true, enumerable: true, configurable: true});
      Object.defineProperty(Container.prototype,'removeAllChildren', {value:function () {
        while(this.children.length) {
          this.removeChildAt(0);
        }
      }, writable: true, enumerable: true, configurable: true});
      Object.defineProperty(Container.prototype,'getChildAt', {value:function (index) {
        return this.children[index];
      }, writable: true, enumerable: true, configurable: true});
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = Container;
        return new Container(args && args.length && args[0]);
      };
    })();
    exports.Container = Container;
    var Stage = (function() {
      Stage.prototype = exports.Container();
      Stage.prototype.constructor = Stage;
      var Container = exports.Container.constructor;
      function Stage() {
        function privateData() {
          this._activeMouseTarget = null;
          this._activeMouseEvent = null;
          this._mouseOverIntervalID = null;
          this._mouseOverX = null;
          this._mouseOverY = null;
          this._mouseOverTarget = null;
          this.autoClear = null;
          this.canvas = null;
          this.mouseInBounds = null;
          this.mouseX = null;
          this.mouseY = null;
          this.snapToPixelEnabled = null;
          this.tickOnUpdate = null;
        }
        var p_vars = new privateData();
        var _activeMouseTarget = p_vars._activeMouseTarget;
        Object.getOwnPropertyDescriptor(this,'_activeMouseTarget') || Object.defineProperty(this,'_activeMouseTarget', {get: function(){return _activeMouseTarget;},set: function(e){_activeMouseTarget=e;}});
        var _activeMouseEvent = p_vars._activeMouseEvent;
        Object.getOwnPropertyDescriptor(this,'_activeMouseEvent') || Object.defineProperty(this,'_activeMouseEvent', {get: function(){return _activeMouseEvent;},set: function(e){_activeMouseEvent=e;}});
        var _mouseOverIntervalID = p_vars._mouseOverIntervalID;
        Object.getOwnPropertyDescriptor(this,'_mouseOverIntervalID') || Object.defineProperty(this,'_mouseOverIntervalID', {get: function(){return _mouseOverIntervalID;},set: function(e){_mouseOverIntervalID=e;}});
        var _mouseOverX = p_vars._mouseOverX;
        Object.getOwnPropertyDescriptor(this,'_mouseOverX') || Object.defineProperty(this,'_mouseOverX', {get: function(){return _mouseOverX;},set: function(e){_mouseOverX=e;}});
        var _mouseOverY = p_vars._mouseOverY;
        Object.getOwnPropertyDescriptor(this,'_mouseOverY') || Object.defineProperty(this,'_mouseOverY', {get: function(){return _mouseOverY;},set: function(e){_mouseOverY=e;}});
        var _mouseOverTarget = p_vars._mouseOverTarget;
        Object.getOwnPropertyDescriptor(this,'_mouseOverTarget') || Object.defineProperty(this,'_mouseOverTarget', {get: function(){return _mouseOverTarget;},set: function(e){_mouseOverTarget=e;}});
        var autoClear = p_vars.autoClear;
        Object.getOwnPropertyDescriptor(this,'autoClear') || Object.defineProperty(this,'autoClear', {get: function(){return autoClear;},set: function(e){autoClear=e;}});
        var canvas = p_vars.canvas;
        Object.getOwnPropertyDescriptor(this,'canvas') || Object.defineProperty(this,'canvas', {get: function(){return canvas;},set: function(e){canvas=e;}});
        var mouseInBounds = p_vars.mouseInBounds;
        Object.getOwnPropertyDescriptor(this,'mouseInBounds') || Object.defineProperty(this,'mouseInBounds', {get: function(){return mouseInBounds;},set: function(e){mouseInBounds=e;}});
        var mouseX = p_vars.mouseX;
        Object.getOwnPropertyDescriptor(this,'mouseX') || Object.defineProperty(this,'mouseX', {get: function(){return mouseX;},set: function(e){mouseX=e;}});
        var mouseY = p_vars.mouseY;
        Object.getOwnPropertyDescriptor(this,'mouseY') || Object.defineProperty(this,'mouseY', {get: function(){return mouseY;},set: function(e){mouseY=e;}});
        var snapToPixelEnabled = p_vars.snapToPixelEnabled;
        Object.getOwnPropertyDescriptor(this,'snapToPixelEnabled') || Object.defineProperty(this,'snapToPixelEnabled', {get: function(){return snapToPixelEnabled;},set: function(e){snapToPixelEnabled=e;}});
        var tickOnUpdate = p_vars.tickOnUpdate;
        Object.getOwnPropertyDescriptor(this,'tickOnUpdate') || Object.defineProperty(this,'tickOnUpdate', {get: function(){return tickOnUpdate;},set: function(e){tickOnUpdate=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {
            canvas:null
          };
          Container.call(this,properties);
          this.autoClear=properties.autoClear || true;
          this.snapToPixelEnabled=false;
          this.mouseInBounds=false;
          this.tickOnUpdate=true;
          this._mouseOverX=0;
          this._mouseOverY=0;
          this.canvas=properties.canvas;
          this._enableMouseEvents(true);
          this.tick=this.update;
        }
        return ctor.apply(this,args) || this;
      }
      Stage.prototype['onMouseMove'] = function() {
      };
      Stage.prototype['onMouseUp'] = function() {
      };
      Stage.prototype['onMouseDown'] = function() {
      };
      Stage.prototype['update'] = function() {
        if(!this.canvas) {
          return;
        }
        if(this.autoClear) {
          this.clear();
        }
        Stage._snapToPixelEnabled=this.snapToPixelEnabled;
        if(this.tickOnUpdate) {
          this._tick();
        }
        this.draw(this.canvas.getContext("2d"),false,this.getConcatenatedMatrix(this._matrix));
      };
      Stage.prototype['clear'] = function() {
        if(!this.canvas) {
          return;
        }
        var ctx=this.canvas.getContext("2d");
        ctx.setTransform(1,0,0,1,0,0);
        ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
      };
      Stage.prototype['toDataURL'] = function(backgroundColor,mimeType) {
        if(!mimeType) {
          mimeType="image/png";
        }
        var ctx=this.canvas.getContext('2d');
        var w=this.canvas.width;
        var h=this.canvas.height;
        var data;
        if(backgroundColor) {
          data=ctx.getImageData(0,0,w,h);
          var compositeOperation=ctx.globalCompositeOperation;
          ctx.globalCompositeOperation="destination-over";
          ctx.fillStyle=backgroundColor;
          ctx.fillRect(0,0,w,h);
        }
        var dataURL=this.canvas.toDataURL(mimeType);
        if(backgroundColor) {
          ctx.clearRect(0,0,w,h);
          ctx.putImageData(data,0,0);
          ctx.globalCompositeOperation=compositeOperation;
        }
        return dataURL;
      };
      Stage.prototype['enableMouseOver'] = function(frequency) {
        if(this._mouseOverIntervalID) {
          clearInterval(this._mouseOverIntervalID);
          this._mouseOverIntervalID=null;
        }
        if(frequency <= 0) {
          return;
        }
        var o=this;
        this._mouseOverIntervalID=setInterval(function () {
          o._testMouseOver();
        },1000 / Math.min(50,frequency));
        this._mouseOverX=NaN;
        this._mouseOverTarget=null;
      };
      Stage.prototype['_enableMouseEvents'] = function() {
        var o=this;
        var evtTarget=window.addEventListener?window:document;
        evtTarget.addEventListener("mouseup",function (e) {
          o._handleMouseUp(e);
        },false);
        evtTarget.addEventListener("mousemove",function (e) {
          o._handleMouseMove(e);
        },false);
        evtTarget.addEventListener("dblclick",function (e) {
          o._handleDoubleClick(e);
        },false);
        this.canvas.addEventListener("mousedown",function (e) {
          o._handleMouseDown(e);
        },false);
      };
      Stage.prototype['_handleMouseMove'] = function(e) {
        if(!this.canvas) {
          this.mouseX=this.mouseY=null;
          return;
        }
        if(!e) {
          e=window.event;
        }
        var inBounds=this.mouseInBounds;
        this._updateMousePosition(e.pageX,e.pageY);
        if(!inBounds && !this.mouseInBounds) {
          return;
        }
        var evt=MouseEvent("onMouseMove",this.mouseX,this.mouseY,this,e);
        if(this.onMouseMove) {
          this.onMouseMove(evt);
        }
        if(this._activeMouseEvent && this._activeMouseEvent.onMouseMove) {
          this._activeMouseEvent.onMouseMove(evt);
        }
      };
      Stage.prototype['_updateMousePosition'] = function(pageX,pageY) {
        var o=this.canvas;
        do {
          pageX-=o.offsetLeft;
          pageY-=o.offsetTop;
        } while(o=o.offsetParent);
        this.mouseInBounds=(pageX >= 0 && pageY >= 0 && pageX < this.canvas.width && pageY < this.canvas.height);
        if(this.mouseInBounds) {
          this.mouseX=pageX;
          this.mouseY=pageY;
        }
      };
      Stage.prototype['_handleMouseUp'] = function(e) {
        var evt=MouseEvent("onMouseUp",this.mouseX,this.mouseY,this,e);
        if(this.onMouseUp) {
          this.onMouseUp(evt);
        }
        if(this._activeMouseEvent && this._activeMouseEvent.onMouseUp) {
          this._activeMouseEvent.onMouseUp(evt);
        }
        if(this._activeMouseTarget && this._activeMouseTarget.onClick && this._getObjectsUnderPoint(this.mouseX,this.mouseY,null,true,(this._mouseOverIntervalID?3:1)) == this._activeMouseTarget) {
          this._activeMouseTarget.onClick(MouseEvent("onClick",this.mouseX,this.mouseY,this._activeMouseTarget,e));
        }
        this._activeMouseEvent=this._activeMouseTarget=null;
      };
      Stage.prototype['_handleMouseDown'] = function(e) {
        if(this.onMouseDown) {
          this.onMouseDown(MouseEvent("onMouseDown",this.mouseX,this.mouseY,this,e));
        }
        var target=this._getObjectsUnderPoint(this.mouseX,this.mouseY,null,(this._mouseOverIntervalID?3:1));
        if(target) {
          if(target.onPress instanceof Function) {
            var evt=MouseEvent("onPress",this.mouseX,this.mouseY,target,e);
            target.onPress(evt);
            if(evt.onMouseMove || evt.onMouseUp) {
              this._activeMouseEvent=evt;
            }
          }
          this._activeMouseTarget=target;
        }
      };
      Stage.prototype['_testMouseOver'] = function() {
        if(this.mouseX == this._mouseOverX && this.mouseY == this._mouseOverY && this.mouseInBounds) {
          return;
        }
        var target=null;
        if(this.mouseInBounds) {
          target=this._getObjectsUnderPoint(this.mouseX,this.mouseY,null,3);
          this._mouseOverX=this.mouseX;
          this._mouseOverY=this.mouseY;
        }
        if(this._mouseOverTarget != target) {
          if(this._mouseOverTarget && this._mouseOverTarget.onMouseOut) {
            this._mouseOverTarget.onMouseOut(MouseEvent("onMouseOut",this.mouseX,this.mouseY,this._mouseOverTarget));
          }
          if(target && target.onMouseOver) {
            target.onMouseOver(MouseEvent("onMouseOver",this.mouseX,this.mouseY,target));
          }
          this._mouseOverTarget=target;
        }
      };
      Stage.prototype['_handleDoubleClick'] = function(e) {
        if(this.onDoubleClick) {
          this.onDoubleClick(MouseEvent("onDoubleClick",this.mouseX,this.mouseY,this,e));
        }
        var target=this._getObjectsUnderPoint(this.mouseX,this.mouseY,null,(this._mouseOverIntervalID?3:1));
        if(target) {
          if(target.onDoubleClick instanceof Function) {
            target.onDoubleClick(MouseEvent("onPress",this.mouseX,this.mouseY,target,e));
          }
        }
      };
      Stage._snapToPixelEnabled = false;
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __._snapToPixelEnabled = Stage._snapToPixelEnabled;
        __.constructor = Stage;
        return new Stage(args && args.length && args[0]);
      };
    })();
    exports.Stage = Stage;
    var TickerType = (function() {
      function TickerType() {
        function privateData() {
          this._listeners = null;
          this._pauseable = null;
          this._paused = null;
          this._inited = null;
          this._startTime = null;
          this._pausedTime = null;
          this._ticks = null;
          this._pausedTickers = null;
          this._interval = null;
          this._intervalID = null;
          this._lastTime = null;
          this._times = null;
        }
        var p_vars = new privateData();
        var _listeners = p_vars._listeners;
        Object.getOwnPropertyDescriptor(this,'_listeners') || Object.defineProperty(this,'_listeners', {get: function(){return _listeners;},set: function(e){_listeners=e;}});
        var _pauseable = p_vars._pauseable;
        Object.getOwnPropertyDescriptor(this,'_pauseable') || Object.defineProperty(this,'_pauseable', {get: function(){return _pauseable;},set: function(e){_pauseable=e;}});
        var _paused = p_vars._paused;
        Object.getOwnPropertyDescriptor(this,'_paused') || Object.defineProperty(this,'_paused', {get: function(){return _paused;},set: function(e){_paused=e;}});
        var _inited = p_vars._inited;
        Object.getOwnPropertyDescriptor(this,'_inited') || Object.defineProperty(this,'_inited', {get: function(){return _inited;},set: function(e){_inited=e;}});
        var _startTime = p_vars._startTime;
        Object.getOwnPropertyDescriptor(this,'_startTime') || Object.defineProperty(this,'_startTime', {get: function(){return _startTime;},set: function(e){_startTime=e;}});
        var _pausedTime = p_vars._pausedTime;
        Object.getOwnPropertyDescriptor(this,'_pausedTime') || Object.defineProperty(this,'_pausedTime', {get: function(){return _pausedTime;},set: function(e){_pausedTime=e;}});
        var _ticks = p_vars._ticks;
        Object.getOwnPropertyDescriptor(this,'_ticks') || Object.defineProperty(this,'_ticks', {get: function(){return _ticks;},set: function(e){_ticks=e;}});
        var _pausedTickers = p_vars._pausedTickers;
        Object.getOwnPropertyDescriptor(this,'_pausedTickers') || Object.defineProperty(this,'_pausedTickers', {get: function(){return _pausedTickers;},set: function(e){_pausedTickers=e;}});
        var _interval = p_vars._interval;
        Object.getOwnPropertyDescriptor(this,'_interval') || Object.defineProperty(this,'_interval', {get: function(){return _interval;},set: function(e){_interval=e;}});
        var _intervalID = p_vars._intervalID;
        Object.getOwnPropertyDescriptor(this,'_intervalID') || Object.defineProperty(this,'_intervalID', {get: function(){return _intervalID;},set: function(e){_intervalID=e;}});
        var _lastTime = p_vars._lastTime;
        Object.getOwnPropertyDescriptor(this,'_lastTime') || Object.defineProperty(this,'_lastTime', {get: function(){return _lastTime;},set: function(e){_lastTime=e;}});
        var _times = p_vars._times;
        Object.getOwnPropertyDescriptor(this,'_times') || Object.defineProperty(this,'_times', {get: function(){return _times;},set: function(e){_times=e;}});
        var args = Array.prototype.slice.call(arguments);
        var ctor = function (_properties) {
          var properties = _properties || {};
          this._listeners=[];
          this._pauseable=[];
          this._paused=false;
          this._inited=false;
          this._startTime=0;
          this._pausedTime=0;
          this._ticks=0;
          this._pausedTickers=0;
          this._interval=50;
          this._intervalID=null;
          this._lastTime=0;
          this._times=[];
          this._tick=this._tick.bind(this);
        }
        return ctor.apply(this,args) || this;
      }
      TickerType.prototype['addListener'] = function(o,pauseable) {
        if(!this._inited) {
          this._inited=true;
          this._startTime=this._getTime();
          this._times.push(0);
          this.setInterval(this._interval);
        }
        this.removeListener(o);
        this._pauseable[this._listeners.length]=(pauseable == null)?true:pauseable;
        this._listeners.push(o);
      };
      TickerType.prototype['removeListener'] = function(o) {
        if(this._listeners == null) {
          return;
        }
        var index=this._listeners.indexOf(o);
        if(index != -1) {
          this._listeners.splice(index,1);
          this._pauseable.splice(index,1);
        }
      };
      TickerType.prototype['removeAllListeners'] = function() {
        this._listeners=[];
        this._pauseable=[];
      };
      TickerType.prototype['setInterval'] = function(interval) {
        if(this._intervalID != null) {
          clearInterval(this._intervalID);
        }
        this._lastTime=this.getTime(false);
        this._interval=interval;
        this._intervalID=setInterval(this._tick,interval);
      };
      TickerType.prototype['stop'] = function() {
        if(this._intervalID != null) {
          clearInterval(this._intervalID);
        }
      };
      TickerType.prototype['getInterval'] = function() {
        return this._interval;
      };
      TickerType.prototype['getFPS'] = function() {
        return 1000 / this._interval;
      };
      TickerType.prototype['setFPS'] = function(value) {
        this.setInterval(1000 / value);
      };
      TickerType.prototype['getMeasuredFPS'] = function(ticks) {
        if(this._times.length < 2) {
          return -1;
        }
        if(ticks == null) {
          ticks=this.getFPS() >> 1;
        }
        ticks=Math.min(this._times.length - 1,ticks);
        return 1000 / ((this._times[0] - this._times[ticks]) / ticks);
      };
      TickerType.prototype['setPaused'] = function(value) {
        this._paused=value;
      };
      TickerType.prototype['getPaused'] = function() {
        return this._paused;
      };
      TickerType.prototype['getTime'] = function(pauseable) {
        return this._getTime() - this._startTime - (pauseable?this._pausedTime:0);
      };
      TickerType.prototype['getTicks'] = function(pauseable) {
        return this._ticks - (pauseable?this._pausedTickers:0);
      };
      TickerType.prototype['_tick'] = function() {
        ++this._ticks;
        var time=this.getTime(false);
        var elapsedTime=time - this._lastTime;
        var paused=this._paused;
        if(paused) {
          ++this._pausedTickers;
          this._pausedTime+=elapsedTime;
        }
        this._lastTime=time;
        var pauseable=this._pauseable;
        var listeners=this._listeners.slice();
        var l=listeners?listeners.length:0;
        for(var i=0;i < l;++i) {
          var p=pauseable[i];
          var listener=listeners[i];
          if(listener == null || (paused && p) || listener.tick == null) {
            continue;
          }
          listener.tick(elapsedTime);
        }
        this._times.unshift(time);
        if(this._times.length > 100) {
          this._times.pop();
        }
      };
      TickerType.prototype['_getTime'] = function() {
        return new Date().getTime();
      };
      return function __() {
        var args = Array.prototype.slice.call(arguments);
        __.constructor = TickerType;
        return new TickerType(args && args.length && args[0]);
      };
    })();
    const Ticker=TickerType();
    exports.Ticker = Ticker;
  })(require, nm.getExports(), nm.getId());
})();

