module canvas {
  module log from 'log';
  export class MouseEvent {
    constructor(properties={type:null, stageX:0, stageY:0, target:null, nativeEvent:null}) {
      private stageX, stageY, type, nativeEvent, onMouseMove, onMouseUp, target;
      @stageX = properties.stageX;
      @stageY = properties.stageY;
      @nativeEvent = properties.nativeEvent;
      @onMouseMove = properties.mouseMove;
      @onMouseMove = properties.mouseMove;
      @target = properties.target;
    }
  }
  export class Point {
    constructor(properties={x:0, y:0}) {
      private x, y;
      @x = properties.x;
      @y = properties.y;     
    }
  };
  export class Matrix2D {
    constructor(properties={a:1, b:0, c:0, d:1, tx:0, ty:0}) {
      private a, b, c, d, tx, ty, alpha, shadow, compositeOperation;
      @a = properties.a || 1;
      @b = properties.b || 0;
      @c = properties.c || 0;
      @d = properties.d || 1;
      @tx = properties.tx || 0;
      @ty = properties.ty || 0;
      @alpha = properties.alpha || 1;
      @shadow = properties.shadow;
      @compositeOperation = properties.compositeOperation;
    }
    prepend(a, b, c, d, tx, ty) {
        var tx1 = @tx;
        if (a != 1 || b != 0 || c != 0 || d != 1) {
            var a1 = @a;
            var c1 = @c;
            @a  = a1*a+@b*c;
            @b  = a1*b+@b*d;
            @c  = c1*a+@d*c;
            @d  = c1*b+@d*d;
        }
        @tx = tx1*a+@ty*c+tx;
        @ty = tx1*b+@ty*d+ty;
    }
    append(a, b, c, d, tx, ty) {
        var a1 = @a;
        var b1 = @b;
        var c1 = @c;
        var d1 = @d;
        @a  = a*a1+b*c1;
        @b  = a*b1+b*d1;
        @c  = c*a1+d*c1;
        @d  = c*b1+d*d1;
        @tx = tx*a1+ty*c1+@tx;
        @ty = tx*b1+ty*d1+@ty;
    }
    prependMatrix(matrix) {
        @prepend(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
        @prependProperties(matrix.alpha, matrix.shadow,  matrix.compositeOperation);
    }
    appendMatrix(matrix) {
        @append(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
        @appendProperties(matrix.alpha, matrix.shadow,  matrix.compositeOperation);
    }
    prependTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
        if (rotation%360) {
            var r = rotation*Matrix2D.DEG_TO_RAD;
            var cos = Math.cos(r);
            var sin = Math.sin(r);
        } else {
            cos = 1;
            sin = 0;
        }
        if (regX || regY) {
            // append the registration offset:
            @tx -= regX; @ty -= regY;
        }
        if (skewX || skewY) {
            // TODO: can this be combined into a single prepend operation?
            skewX *= Matrix2D.DEG_TO_RAD;
            skewY *= Matrix2D.DEG_TO_RAD;
            @prepend(cos*scaleX, sin*scaleX, -sin*scaleY, cos*scaleY, 0, 0);
            @prepend(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y);
        } else {
            @prepend(cos*scaleX, sin*scaleX, -sin*scaleY, cos*scaleY, x, y);
        }
    }
    appendTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
        if (rotation%360) {
            var r = rotation*Matrix2D.DEG_TO_RAD;
            var cos = Math.cos(r);
            var sin = Math.sin(r);
        } else {
            cos = 1;
            sin = 0;
        }

        if (skewX || skewY) {
            // TODO: can this be combined into a single append?
            skewX *= Matrix2D.DEG_TO_RAD;
            skewY *= Matrix2D.DEG_TO_RAD;
            @append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y);
            @append(cos*scaleX, sin*scaleX, -sin*scaleY, cos*scaleY, 0, 0);
        } else {
            @append(cos*scaleX, sin*scaleX, -sin*scaleY, cos*scaleY, x, y);
        }
        if (regX || regY) {
            // prepend the registration offset:
            @tx -= regX*@a+regY*@c;
            @ty -= regX*@b+regY*@d;
        }
    }
    rotate(angle) {
        var cos = Math.cos(angle);
        var sin = Math.sin(angle);
        var a1 = @a;
        var c1 = @c;
        var tx1 = @tx;
        @a = a1*cos-@b*sin;
        @b = a1*sin+@b*cos;
        @c = c1*cos-@d*sin;
        @d = c1*sin+@d*cos;
        @tx = tx1*cos-@ty*sin;
        @ty = tx1*sin+@ty*cos;
    }
    skew(skewX, skewY) {
        skewX = skewX*Matrix2D.DEG_TO_RAD;
        skewY = skewY*Matrix2D.DEG_TO_RAD;
        @append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), 0, 0);
    }
    scale(x, y) {
        @a *= x;
        @d *= y;
        @tx *= x;
        @ty *= y;
    }
    translate(x, y) {
        @tx += x;
        @ty += y;
    }
    identity() {
        @alpha = @a = @d = 1;
        @b = @c = @tx = @ty = 0;
        @shadow = @compositeOperation = null;
    }
    invert() {
        var a1 = @a;
        var b1 = @b;
        var c1 = @c;
        var d1 = @d;
        var tx1 = @tx;
        var n = a1*d1-b1*c1;
        
        @a = d1/n;
        @b = -b1/n;
        @c = -c1/n;
        @d = a1/n;
        @tx = (c1*@ty-d1*tx1)/n;
        @ty = -(a1*@ty-b1*tx1)/n;
    }
    decompose(target) {
        // TODO: it would be nice to be able to solve for whether the matrix can be decomposed into only scale/rotation 
        // even when scale is negative
        if (target == null) { target = {}; }
        target.x = @tx;
        target.y = @ty;
        target.scaleX = Math.sqrt(@a * @a + @b * @b);
        target.scaleY = Math.sqrt(@c * @c + @d * @d);
        var skewX = Math.atan2(-@c, @d);
        var skewY = Math.atan2(@b, @a);
        if (skewX == skewY) {
            target.rotation = skewY/Matrix2D.DEG_TO_RAD;
            if (@a < 0 && @d >= 0) {
                target.rotation += (target.rotation <= 0) ? 180 : -180;
            }
            target.skewX = target.skewY = 0;
        } else {
            target.skewX = skewX/Matrix2D.DEG_TO_RAD;
            target.skewY = skewY/Matrix2D.DEG_TO_RAD;
        }
        return target;
    }
    reinitialize(a,b,c,d,tx,ty,alpha,shadow,compositeOperation) {
      @a = a;
      @b = b;
      @c = c;
      @d = d;
      @tx = tx;
      @ty = ty;
      @alpha = alpha || 1;
      @shadow = shadow;
      @compositeOperation = compositeOperation;
      return this;
    }
    appendProperties(alpha, shadow, compositeOperation) {
      @alpha *= alpha;
      @shadow = shadow || @shadow;
      @compositeOperation = compositeOperation || @compositeOperation;
    }
    prependProperties(alpha, shadow, compositeOperation) {
      @alpha *= alpha;
      @shadow = @shadow || shadow;
      @compositeOperation = @compositeOperation || compositeOperation;
    }
    static identity = Matrix2D(1, 0, 0, 1, 0, 0)
    static DEG_TO_RAD = Math.PI/180
  };
  export class SpriteSheet {
    constructor(properties={image:null, frameWidth:0, frameHeight:0, frameData:null}) {
      private image, frameWidth, frameHeight, frameData, loop, totalFrames;
      @image = properties.image;
      @frameWidth = properties.frameWidth;
      @frameHeight = properties.frameHeight;
      @frameData = properties.frameData;
      @loop = true;
      @totalFrames = 0;
    }
  };
  export class Command {
    constructor(properties={f:null,params:null}) {
      private f, params;
      @f = properties.f;
      @params = properties.params;
    }
    exec(scope) { 
      @f.apply(scope, @params); 
    }
  }
  export class Graphics {
    constructor(properties={}) {
      private _strokeInstructions, _strokeStyleInstructions, _fillInstructions, _instructions, _oldInstructions, _activeInstructions, _active, _dirty, drawRect, curveTo;
      @_active = false;
      @_dirty = false;
      @clear();
      @_ctx = Graphics._ctx;
      @curveTo = @quadraticCurveTo;
      @drawRect = @rect;
    }
    draw(ctx) {
        if (@_dirty) {
            @_updateInstructions();
        }
        var instr = @_instructions;
        for (var i=0, l=instr.length; i<l; i++) {
            instr[i].exec(ctx);
        }
    }
    moveTo(x, y) {
        @_activeInstructions.push(Command({f:@_ctx.moveTo, params:[x, y]}));
        return this;
    }
    lineTo(x, y) {
        @_dirty = @_active = true;
        @_activeInstructions.push(Command({f:@_ctx.lineTo, params:[x, y]}));
        return this;
    }
    arcTo(x1, y1, x2, y2, radius) {
        @_dirty = @_active = true;
        @_activeInstructions.push(Command({f:@_ctx.arcTo, params:[x1, y1, x2, y2, radius]}));
        return this;
    }
    arc(x, y, radius, startAngle, endAngle, anticlockwise) {
        @_dirty = @_active = true;
        if (anticlockwise == null) { anticlockwise = false; }
        @_activeInstructions.push(Command({f:@_ctx.arc, params:[x, y, radius, startAngle, endAngle, anticlockwise]}));
        return this;
    }
    quadraticCurveTo(cpx, cpy, x, y) {
        @_dirty = @_active = true;
        @_activeInstructions.push(Command({f:@_ctx.quadraticCurveTo, params:[cpx, cpy, x, y]}));
        return this;
    }
    bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
        @_dirty = @_active = true;
        @_activeInstructions.push(Command({f:@_ctx.bezierCurveTo, params:[cp1x, cp1y, cp2x, cp2y, x, y]}));
        return this;
    }
    rect(x, y, w, h) {
        @_dirty = @_active = true;
        @_activeInstructions.push(Command({f:@_ctx.rect, params:[x, y, w, h]}));
        return this;
    }
    closePath() {
        if (@_active) {
            @_dirty = true;
            @_activeInstructions.push(Command({f:@_ctx.closePath, params:[]}));
        }
        return this;
    }
    clear() {
        @_instructions = [];
        @_oldInstructions = [];
        @_activeInstructions = [];
        @_strokeStyleInstructions = @_strokeInstructions = @_fillInstructions = null;
        @_active = @_dirty = false;
        return this;
    }
    beginFill(color) {
        if (@_active) { @_newPath(); }
        @_fillInstructions = color ? [Command({f:@_setProp, params:["fillStyle", color]})] : null;
        return this;
    }
    beginLinearGradientFill(colors, ratios, x0, y0, x1, y1) {
        if (@_active) { @_newPath(); }
        var o = @_ctx.createLinearGradient(x0, y0, x1, y1);
        for (var i=0, l=colors.length; i<l; i++) {
            o.addColorStop(ratios[i], colors[i]);
        }
        @_fillInstructions = [Command({f:@_setProp, params:["fillStyle", o]})];
        return this;
    }
    beginRadialGradientFill(colors, ratios, x0, y0, r0, x1, y1, r1) {
        if (@_active) { @_newPath(); }
        var o = @_ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
        for (var i=0, l=colors.length; i<l; i++) {
            o.addColorStop(ratios[i], colors[i]);
        }
        @_fillInstructions = [Command({f:@_setProp, params:["fillStyle", o]})];
        return this;
    }
    beginBitmapFill(image, repetition) {
        if (@_active) { @_newPath(); }
        repetition = repetition || "";
        var o = @_ctx.createPattern(image, repetition);
        @_fillInstructions = [Command({f:@_setProp, params:["fillStyle", o]})];
        return this;
    }
    endFill() {
        @beginFill(null);
        return this;
    }
    setStrokeStyle(thickness, caps, joints, miterLimit) {
        if (@_active) { @_newPath(); }
        @_strokeStyleInstructions = [
            Command({f:@_setProp, params:["lineWidth", (thickness == null ? "1" : thickness)]}),
            Command({f:@_setProp, params:["lineCap", (caps == null ? "butt" : (isNaN(caps) ? caps : Graphics.STROKE_CAPS_MAP[caps]))]}),
            Command({f:@_setProp, params:["lineJoin", (joints == null ? "miter" : (isNaN(joints) ? joints : Graphics.STROKE_JOINTS_MAP[joints]))]}),
            Command({f:@_setProp, params:["miterLimit", (miterLimit == null ? "10" : miterLimit)]})
            ];
        return this;
    }
    beginStroke(color) {
        if (@_active) { @_newPath(); }
        @_strokeInstructions = color ? [Command({f:@_setProp, params:["strokeStyle", color]})] : null;
        return this;
    }
    beginLinearGradientStroke(colors, ratios, x0, y0, x1, y1) {
        if (@_active) { @_newPath(); }
        var o = @_ctx.createLinearGradient(x0, y0, x1, y1);
        for (var i=0, l=colors.length; i<l; i++) {
            o.addColorStop(ratios[i], colors[i]);
        }
        @_strokeInstructions = [Command({f:@_setProp, params:["strokeStyle", o]})];
        return this;
    }
    beginRadialGradientStroke(colors, ratios, x0, y0, r0, x1, y1, r1) {
        if (@_active) { @_newPath(); }
        var o = @_ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
        for (var i=0, l=colors.length; i<l; i++) {
            o.addColorStop(ratios[i], colors[i]);
        }
        @_strokeInstructions = [Command({f:@_setProp, params:["strokeStyle", o]})];
        return this;
    }
    beginBitmapStroke(image, repetition) {
        if (@_active) { @_newPath(); }
        repetition = repetition || "";
        var o = @_ctx.createPattern(image, repetition);
        @_strokeInstructions = [Command({f:@_setProp, params:["strokeStyle", o]})];
        return this;
    }
    endStroke() {
        @beginStroke(null);
        return this;
    }
    drawRoundRect(x, y, w, h, radius) {
        @drawRoundRectComplex(x, y, w, h, radius, radius, radius, radius);
        return this;
    }
    drawRoundRectComplex(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL) {
        @_dirty = @_active = true;
        @_activeInstructions.push(
            Command({f:@_ctx.moveTo, params:[x+radiusTL, y]}),
            Command({f:@_ctx.lineTo, params:[x+w-radiusTR, y]}),
            Command({f:@_ctx.arc, params:[x+w-radiusTR, y+radiusTR, radiusTR, (-Math.PI/2), 0, false]}),
            Command({f:@_ctx.lineTo, params:[x+w, y+h-radiusBR]}),
            Command({f:@_ctx.arc, params:[x+w-radiusBR, y+h-radiusBR, radiusBR, 0, Math.PI/2, false]}),
            Command({f:@_ctx.lineTo, params:[x+radiusBL, y+h]}),
            Command({f:@_ctx.arc, params:[x+radiusBL, y+h-radiusBL, radiusBL, Math.PI/2, Math.PI, false]}),
            Command({f:@_ctx.lineTo, params:[x, y+radiusTL]}),
            Command({f:@_ctx.arc, params:[x+radiusTL, y+radiusTL, radiusTL, Math.PI, Math.PI*3/2, false]})
        );
        return this;
    } 
    drawCircle(x, y, radius) {
        @arc(x, y, radius, 0, Math.PI*2);
        return this;
    }
    drawEllipse(x, y, w, h) {
        @_dirty = @_active = true;
        var k = 0.5522848;
        var ox = (w / 2) * k;
        var oy = (h / 2) * k;
        var xe = x + w;
        var ye = y + h;
        var xm = x + w / 2;
        var ym = y + h / 2;
            
        @_activeInstructions.push(
            Command({f:@_ctx.moveTo, params:[x, ym]}),
            Command({f:@_ctx.bezierCurveTo, params:[x, ym-oy, xm-ox, y, xm, y]}),
            Command({f:@_ctx.bezierCurveTo, params:[xm+ox, y, xe, ym-oy, xe, ym]}),
            Command({f:@_ctx.bezierCurveTo, params:[xe, ym+oy, xm+ox, ye, xm, ye]}),
            Command({f:@_ctx.bezierCurveTo, params:[xm-ox, ye, x, ym+oy, x, ym]})
        );
        return this;
    }
    drawPolyStar(x, y, radius, sides, pointSize, angle) {
        @_dirty = @_active = true;
        if (pointSize == null) { pointSize = 0; }
        pointSize = 1-pointSize;
        if (angle == null) { angle = 0; }
        else { angle /= 180/Math.PI; }
        var a = Math.PI/sides;
        
        @_activeInstructions.push(Command({f:@_ctx.moveTo, params:[x+Math.cos(angle)*radius, y+Math.sin(angle)*radius]}));
        for (var i=0; i<sides; i++) {
            angle += a;
            if (pointSize != 1) {
                @_activeInstructions.push(Command({f:@_ctx.lineTo, params:[x+Math.cos(angle)*radius*pointSize, y+Math.sin(angle)*radius*pointSize]}));
            }
            angle += a;
            @_activeInstructions.push(Command({f:@_ctx.lineTo, params:[x+Math.cos(angle)*radius, y+Math.sin(angle)*radius]}));
        }
        return this;
    }
    _updateInstructions() {
        @_instructions = @_oldInstructions.slice()
        @_instructions.push(Graphics.beginCmd);
         
        if (@_fillInstructions) { @_instructions.push.apply(@_instructions, @_fillInstructions); }
        if (@_strokeInstructions) {
            @_instructions.push.apply(@_instructions, @_strokeInstructions);
            if (@_strokeStyleInstructions) {
                @_instructions.push.apply(@_instructions, @_strokeStyleInstructions);
            }
        }
        
        @_instructions.push.apply(@_instructions, @_activeInstructions);
        
        if (@_fillInstructions) { @_instructions.push(Graphics.fillCmd); }
        if (@_strokeInstructions) { @_instructions.push(Graphics.strokeCmd); }
    }
    _newPath() {
        if (@_dirty) { @_updateInstructions(); }
        @_oldInstructions = @_instructions;
        @_activeInstructions = [];
        @_active = @_dirty = false;
    }
    _setProp(name, value) {
        this[name] = value;
    }
    static getRGB = function(r, g, b, alpha) {
        if (r != null && b == null) {
            alpha = g;
            b = r&0xFF;
            g = r>>8&0xFF;
            r = r>>16&0xFF;
        }
        if (alpha == null) {
            return "rgb("+r+","+g+","+b+")";
        } else {
            return "rgba("+r+","+g+","+b+","+alpha+")";
        }
    }
    static getHSL(hue, saturation, lightness, alpha) {
        if (alpha == null) {
            return "hsl("+(hue%360)+","+saturation+"%,"+lightness+"%)";
        } else {
            return "hsla("+(hue%360)+","+saturation+"%,"+lightness+"%,"+alpha+")";
        }
    }
    static STROKE_CAPS_MAP = ["butt", "round", "square"]
    static STROKE_JOINTS_MAP = ["miter", "round", "bevel"]
    static _ctx = document.createElement("canvas").getContext("2d")
    static beginCmd = Command({f:Graphics._ctx.beginPath, params:[]})
    static fillCmd = Command({f:Graphics._ctx.fill, params:[]})
    static strokeCmd = Command({f:Graphics._ctx.stroke, params:[]})
  };
  export class DisplayObject {
    constructor(properties={}) {
      private alpha, cacheCanvas, id, mouseEnabled, name, parent, regX, regY, rotation, scaleX, scaleY, skewX, skewY;
      @alpha = properties.alpha || 1;
      @id = properties.id || Math.uuid(8);
      @mouseEnabled = properties.mouseEnabled || true;
      @regX = properties.regX || 0;
      @regY = properties.regY || 0;
      @rotation = properties.rotation || 0;
      @scaleX = properties.scaleX || 1;
      @scaleY = properties.scaleY || 1;
      @skewX = properties.skewX || 0;
      @skewY = properties.skewY || 0;
      @shadow = properties.shadow;
      @visible = properties.visiable || true;
      @x = properties.x || 0;
      @y = properties.y || 0;
      @compositeOperation = properties.compositeOperation;
      @snapToPixel = properties.snapToPixel || false;
      @onPress = properties.onPress;
      @onClick = properties.onClick;
      @onDoubleClick = properties.onDoubleClick;
      @onMouseOver = properties.onMouseOver;
      @onMouseOut = properties.onMouseOut;
      @tick = properties.tick;
      @filters = properties.filters;
      @_cacheOffsetX = properties._cacheOffsetX || 0;
      @_cacheOffsetY = properties._cacheOffsetY || 0;
      @_matrix = properties._matrix || Matrix2D();
    }
    isVisible() {
      return @visible && @alpha > 0 && @scaleX != 0 && @scaleY != 0;
    }
    draw(ctx, ignoreCache) {
      if (ignoreCache || !@cacheCanvas) { 
        return false; 
      }
      ctx.drawImage(@cacheCanvas, @_cacheOffsetX, @_cacheOffsetY);
      return true;
    }
    cache(x, y, width, height) {
      // draw to canvas.
      @cacheCanvas = @cacheCanvas || document.createElement("canvas"); 
      var ctx = @cacheCanvas.getContext("2d");
      @cacheCanvas.width = width;
      @cacheCanvas.height = height;
      ctx.setTransform(1, 0, 0, 1, -x, -y);
      ctx.clearRect(0, 0, width+1, height+1);
      @draw(ctx, true);
      @_cacheOffsetX = x;
      @_cacheOffsetY = y;
      @_applyFilters();
    }
    updateCache(compositeOperation) {
      if (@cacheCanvas == null) { 
        throw "cache() must be called before updateCache()"; 
      }
      var ctx = @cacheCanvas.getContext("2d");
      ctx.setTransform(1, 0, 0, 1, -@_cacheOffsetX, -@_cacheOffsetY);
      if (!compositeOperation) { 
        ctx.clearRect(0, 0, @cacheCanvas.width+1, @cacheCanvas.height+1); 
      } else { 
        ctx.globalCompositeOperation = compositeOperation; 
      }
      @draw(ctx, true);
      compositeOperation && (ctx.globalCompositeOperation = "source-over");
      @_applyFilters();
    }
    uncachefunction() {
      @cacheCanvas = null;
      @_cacheOffsetX = @_cacheOffsetY = 0;
    }
    getStagefunction() {
      var o = this;
      while (o.parent) {
        o = o.parent;
      }
      if (o instanceof Stage) { return o; }
      return null;
    }
    localToGlobal(x, y) {
      var mtx = @getConcatenatedMatrix(@_matrix);
      if (mtx == null) { return null; }
      mtx.append(1, 0, 0, 1, x, y);
      return Point(mtx.tx, mtx.ty);
    }
    globalToLocal(x, y) {
      var mtx = @getConcatenatedMatrix(@_matrix);
      if (mtx == null) { return null; }
      mtx.invert();
      mtx.append(1, 0, 0, 1, x, y);
      return Point(mtx.tx, mtx.ty);
    }
    localToLocal(x, y, target) {
      var pt = @localToGlobal(x, y);
      return target.globalToLocal(pt.x, pt.y);
    }
    setTransform(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
      @x = x || 0;
      @y = y || 0;
      @scaleX = scaleX == null ? 1 : scaleX;
      @scaleY = scaleY == null ? 1 : scaleY;
      @rotation = rotation || 0;
      @skewX = skewX || 0;
      @skewY = skewY || 0;
      @regX = regX || 0;
      @regY = regY || 0;
    }
    getConcatenatedMatrix(mtx) {
      if (mtx) { mtx.identity(); }
      else { mtx = Matrix2D(); }
      var target = this;
      while (target != null) {
        mtx.prependTransform(target.x, target.y, target.scaleX, target.scaleY, target.rotation, target.skewX,
                    target.skewY, target.regX, target.regY);
        mtx.prependProperties(target.alpha, target.shadow, target.compositeOperation);
        target = target.parent;
      }
      return mtx;
    }
    hitTestfunction(x, y) {
      var ctx = DisplayObject._hitTestContext;
      var canvas = DisplayObject._hitTestCanvas;
  
      ctx.setTransform(1,  0, 0, 1, -x, -y);
      @draw(ctx);

      var hit = @_testHit(ctx);
  
      canvas.width = 0;
      canvas.width = 1;
      return hit;
    }
    applyShadow = function(ctx, shadow) {
      shadow = shadow || Shadow.identity;
      ctx.shadowColor = shadow.color;
      ctx.shadowOffsetX = shadow.offsetX;
      ctx.shadowOffsetY = shadow.offsetY;
      ctx.shadowBlur = shadow.blur;
    }
    _testHit(ctx) {
      try {
        var hit = ctx.getImageData(0, 0, 1, 1).data[3] > 1;
      } catch (e) {
        if (!DisplayObject.suppressCrossDomainErrors) {
          throw "An error has occured. This is most likely due to security restrictions on reading canvas pixel " +
          "data with local or cross-domain images.";
        }
      }
      return hit;
    }
    _applyFilters = function() {
      if (!@filters || @filters.length == 0 || !@cacheCanvas) { return; }
      var l = @filters.length;
      var ctx = @cacheCanvas.getContext("2d");
      var w = @cacheCanvas.width;
      var h = @cacheCanvas.height;
      for (var i=0; i<l; i++) {
        @filters[i].applyFilter(ctx, 0, 0, w, h);
      }
    }
    static suppressCrossDomainErrors = false
    static hitTestCanvas = document.createElement("canvas")
    static hitTestContext = DisplayObject.hitTestCanvas.getContext("2d")
/*
  DisplayObject._hitTestCanvas.width = DisplayObject._hitTestCanvas.height = 1;
*/
  };
  export class BitmapSequence extends DisplayObject {
    constructor(properties={spriteSheet:null}) {
      private callback, currentFrame, currentEndFrame, currentStartFrame, nextSequence, paused, spriteSheet, snapToPixel;
      DisplayObject.call(this, properties);
      @callback = properties.callback;
      @currentFrame = properties.currentFrame || -1;
      @currentEndFrame = properties.currentEndFrame;
      @currentStartFrame = properties.currentStartFrame;
      @nextSequence = properties.nextSequence;
      @paused = properties.paused || false;
      @spriteSheet = properties.spriteSheet;
      @snapToPixel = properties.snapToPixel || true;
    }
    isVisible() {
      var image = @spriteSheet ? @spriteSheet.image : null;
      return @visible && @alpha > 0 && @scaleX != 0 && @scaleY != 0 && image && @currentFrame >= 0 && (image.complete || image.getContext);
    }
    draw(ctx, ignoreCache) {
        if (DisplayObject.prototype.draw.call(this, ctx, ignoreCache)) { 
          return true; 
        }
        var image = @spriteSheet.image;
        var frameWidth = @spriteSheet.frameWidth;
        var frameHeight = @spriteSheet.frameHeight;
        var cols = image.width/frameWidth|0;
        var rows = image.height/frameHeight|0;
        if (@currentEndFrame != null) {
            // use sequencing.
            if (@currentFrame > @currentEndFrame) {
                if (@nextSequence) {
                    @_goto(@nextSequence);
                } else {
                    @paused = true;
                    @currentFrame = @currentEndFrame;
                }
                @callback && @callback(this);
            }
        } else {
            // use simple mode.
            var ttlFrames = @spriteSheet.totalFrames || cols*rows;
            if (@currentFrame >= ttlFrames) {
                if (@spriteSheet.loop) { 
                  @currentFrame = 0; 
                } else {
                    @currentFrame = ttlFrames-1;
                    @paused = true;
                }
                @callback && @callback(this);
            }
        }
        if (@currentFrame >= 0) {
            var col = @currentFrame%cols;
            var row = @currentFrame/cols|0;
            ctx.drawImage(image, frameWidth*col, frameHeight*row, frameWidth, frameHeight, 0, 0, frameWidth, frameHeight);
        }
        return true;
    }
    gotoAndPlay(frameOrSequence) {
        @paused = false;
        @_goto(frameOrSequence);
    }
    gotoAndStop(frameOrSequence) {
        @paused = true;
        @_goto(frameOrSequence);
    }
    advance() {
        @_tick();
    }
    _tick() {
        if (@currentFrame == -1 && @spriteSheet.frameData) {
            // sequence data is set, but we haven't actually played a sequence yet:
            @paused = true;
        }
        if (@paused) { return; }
        @currentFrame++;
    }
    _goto(frameOrSequence) {
        if (isNaN(frameOrSequence)) {
            if (frameOrSequence == @currentSequence) {
                @currentFrame = @currentStartFrame;
                return;
            }
            var data = @spriteSheet.frameData[frameOrSequence];
            if (data instanceof Array) {
                @currentFrame = @currentStartFrame = data[0];
                @currentSequence = frameOrSequence;
                @currentEndFrame = data[1];
                if (@currentEndFrame == null) { @currentEndFrame = @currentStartFrame; }
                if (@currentEndFrame == null) { @currentEndFrame = @currentFrame; }
                @nextSequence = data[2];
                if (@nextSequence == null) { @nextSequence = @currentSequence; }
                else if (@nextSequence == false) { @nextSequence = null; }
            } else {
                @currentSequence = @nextSequence = null;
                @currentEndFrame = @currentFrame = @currentStartFrame = data;
            }
        } else {
            @currentSequence = @nextSequence = @currentEndFrame = null;
            @currentStartFrame = 0;
            @currentFrame = frameOrSequence;
        }
    }
  };
  export class Shape extends DisplayObject {
    constructor(properties={graphics:null}) {
      private graphics;
      DisplayObject.call(this, properties);
      @graphics = properties.graphics || Graphics();
    }
    isVisible() {
      return @visible && @alpha > 0 && @scaleX != 0 && @scaleY != 0 && @graphics;
    }
    draw(ctx, ignoreCache) {
      if(DisplayObject.prototype.draw.call(this, ctx, ignoreCache)) {
        return true;
      }
      @graphics.draw(ctx);
      return true;
    }
  };
  export class Container extends DisplayObject {
    constructor(properties={children:[]}) {
      private children;
      DisplayObject.call(this, properties);
      @children = properties.children || [];
    }
    isVisible() {
      return @visible && @alpha > 0 && @children.length && @scaleX != 0 && @scaleY != 0;
    }
    draw(ctx, ignoreCache, _mtx) {
      var snap = Stage._snapToPixelEnabled;
      if (DisplayObject.prototype.draw.call(this, ctx, ignoreCache)) { return true; }
      _mtx = _mtx || @_matrix.reinitialize(1,0,0,1,0,0,@alpha, @shadow, @compositeOperation);
      var l = @children.length;
      // this ensures we don't have issues with display list changes that occur during a draw:
      var list = @children.slice(0);
      for (var i=0; i<l; i++) {
        var child = list[i];
        if (!child.isVisible()) { continue; }

        var shadow = false;
        var mtx = child._matrix.reinitialize(_mtx.a,_mtx.b,_mtx.c,_mtx.d,_mtx.tx,_mtx.ty,_mtx.alpha,_mtx.shadow,_mtx.compositeOperation);
        mtx.appendTransform(child.x, child.y, child.scaleX, child.scaleY, child.rotation, child.skewX, child.skewY,
                    child.regX, child.regY);
        mtx.appendProperties(child.alpha, child.shadow, child.compositeOperation);
  
        if (!(child instanceof Container && child.cacheCanvas == null)) {
          if (snap && child.snapToPixel && mtx.a == 1 && mtx.b == 0 && mtx.c == 0 && mtx.d == 1) {
            ctx.setTransform(mtx.a,  mtx.b, mtx.c, mtx.d, mtx.tx+0.5|0, mtx.ty+0.5|0);
          } else {
            ctx.setTransform(mtx.a,  mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
          }
          ctx.globalAlpha = mtx.alpha;
          ctx.globalCompositeOperation = mtx.compositeOperation || "source-over";
          if (shadow = mtx.shadow) { @applyShadow(ctx, shadow); }
        }
        child.draw(ctx, false, mtx);
        if (shadow) { @applyShadow(ctx); }
      }
      return true;
    }
    addChild(child) {
      var l = arguments.length;
      if (l > 1) {
        for (var i=0; i<l; i++) { 
          @addChild(arguments[i]); 
        }
        return arguments[l-1];
      }
      if (child.parent) { 
        child.parent.removeChild(child); 
      }
      child.parent = this;
      @children.push(child);
      return child;
    }
    addChildAt(child, index) {
      var l = arguments.length;
      if (l > 2) {
        index = arguments[i-1];
        for (var i=0; i<l-1; i++) { @addChildAt(arguments[i], index+i); }
        return arguments[l-2];
      }
      if (child.parent) { child.parent.removeChild(child); }
      child.parent = this;
      @children.splice(index, 0, child);
      return child;
    }
    removeChild(child) {
      var l = arguments.length;
      if (l > 1) {
        var good = true;
        for (var i=0; i<l; i++) { good = good && @removeChild(arguments[i]); }
        return good;
      }
      return @removeChildAt(@children.indexOf(child));
    }
    removeChildAt = function(index) {
    var l = arguments.length;
    if (l > 1) {
      var a = [];
      for (var i=0; i<l; i++) { a[i] = arguments[i]; }
      a.sort(function(a, b) { return b-a; })
      var good = true;
      for (var i=0; i<l; i++) { good = good && @removeChildAt(a[i]); }
      return good;
    }
    if (index < 0 || index > @children.length-1) { return false; }
    var child = @children[index];
    if (child != null) { child.parent = null; }
    @children.splice(index, 1);
    return true;
    }
    removeAllChildren = function() {
      while (@children.length) { @removeChildAt(0); }
    }
    getChildAt = function(index) {
      return @children[index];
    }
    sortChildren(sortFunction) {
      @children.sort(sortFunction);
    }
    getChildIndex(child) {
      return @children.indexOf(child);
    }
    getNumChildren() {
      return @children.length;
    }
    contains(child) {
      while (child) {
        if (child == this) { return true; }
        child = child.parent;
      }
      return false;
    }
    hitTest(x, y) {
      // TODO: optimize to use the fast cache check where possible.
      return (@getObjectUnderPoint(x, y) != null);
    }
    getObjectsUnderPoint(x, y) {
      var arr = [];
      var pt = @localToGlobal(x, y);
      @_getObjectsUnderPoint(pt.x, pt.y, arr);
      return arr;
    }
    getObjectUnderPoint(x, y) {
      var pt = @localToGlobal(x, y);
      return @_getObjectsUnderPoint(pt.x, pt.y);
    }
    _tick() {
      for (var i=@children.length-1; i>=0; i--) {
        var child = @children[i];
        if (child._tick) { child._tick(); }
        if (child.tick) { child.tick(); }
      }
    }
    _getObjectsUnderPoint(x, y, arr, mouseEvents) {
      var ctx = DisplayObject._hitTestContext;
      var canvas = DisplayObject._hitTestCanvas;
      var mtx = @_matrix;
      var hasHandler = (mouseEvents&1 && (@onPress || @onClick || @onDoubleClick)) || (mouseEvents&2 &&
                                  (@onMouseOver || @onMouseOut));
  
      // if we have a cache handy, we can use it to do a quick check:
      if (@cacheCanvas) {
        @getConcatenatedMatrix(mtx);
        ctx.setTransform(mtx.a,  mtx.b, mtx.c, mtx.d, mtx.tx-x, mtx.ty-y);
        ctx.globalAlpha = mtx.alpha;
        @draw(ctx);
        if (@_testHit(ctx)) {
          canvas.width = 0;
          canvas.width = 1;
          if (hasHandler) { return this; }
        } else {
          return null;
        }
      }
  
      // draw children one at a time, and check if we get a hit:
      var l = @children.length;
      for (var i=l-1; i>=0; i--) {
        var child = @children[i];
        if (!child.isVisible() || !child.mouseEnabled) { continue; }
  
        if (child instanceof Container) {
          var result;
          if (hasHandler) {
            // only concerned about the first hit, because this container is going to claim it anyway:
            result = child._getObjectsUnderPoint(x, y);
            if (result) { return this; }
          } else {
            result = child._getObjectsUnderPoint(x, y, arr, mouseEvents);
            if (!arr && result) { return result; }
          }
        } else if (!mouseEvents || hasHandler || (mouseEvents&1 && (child.onPress || child.onClick || child.onDoubleClick)) ||
                              (mouseEvents&2 && (child.onMouseOver || child.onMouseOut))) {
          child.getConcatenatedMatrix(mtx);
          ctx.setTransform(mtx.a,  mtx.b, mtx.c, mtx.d, mtx.tx-x, mtx.ty-y);
          ctx.globalAlpha = mtx.alpha;
          child.draw(ctx);
          if (!@_testHit(ctx)) { continue; }
          canvas.width = 0;
          canvas.width = 1;
          if (hasHandler) { return this; }
          else if (arr) { arr.push(child); }
          else { return child; }
        }
      }
      return null;
    }
  };
  export class Stage extends Container {
    constructor(properties={canvas:null}) {
      private _activeMouseTarget, _activeMouseEvent, _mouseOverIntervalID, _mouseOverX, _mouseOverY, _mouseOverTarget, autoClear, canvas, mouseInBounds, mouseX, mouseY, snapToPixelEnabled, tickOnUpdate;
      Container.call(this, properties);
      @autoClear = true;
      @snapToPixelEnabled = false;
      @mouseInBounds = false;
      @tickOnUpdate = true;
      @_mouseOverX = 0;
      @_mouseOverY = 0;
      @canvas = properties.canvas;
      @_enableMouseEvents(true);
      @tick = @update;
    }
    onMouseMove(){}
    onMouseUp(){}
    onMouseDown(){}
    update() {
      if (!@canvas) { 
        return; 
      }
      if (@autoClear) { 
        @clear(); 
      }
      Stage._snapToPixelEnabled = @snapToPixelEnabled;
      if (@tickOnUpdate) { 
        @_tick(); 
      }
      @draw(@canvas.getContext("2d"), false, @getConcatenatedMatrix(@_matrix));
    }
    clear() {
      if (!@canvas) { return; }
      var ctx = @canvas.getContext("2d");
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, @canvas.width, @canvas.height);
    }
    toDataURL(backgroundColor, mimeType) {
      if(!mimeType) {
        mimeType = "image/png";
      }
      var ctx = @canvas.getContext('2d');
      var w = @canvas.width;
      var h = @canvas.height;
      var data;
      if(backgroundColor) {
        //get the current ImageData for the canvas.
        data = ctx.getImageData(0, 0, w, h);
        //store the current globalCompositeOperation
        var compositeOperation = ctx.globalCompositeOperation;
        //set to draw behind current content
        ctx.globalCompositeOperation = "destination-over";
        //set background color
        ctx.fillStyle = backgroundColor;
        //draw background on entire canvas
        ctx.fillRect(0, 0, w, h);
      }
      //get the image data from the canvas
      var dataURL = @canvas.toDataURL(mimeType);

      if(backgroundColor) {
        //clear the canvas
        ctx.clearRect (0, 0, w, h);

        //restore it with original settings
        ctx.putImageData(data, 0, 0);

        //reset the globalCompositeOperation to what it was
        ctx.globalCompositeOperation = compositeOperation;
      }

      return dataURL;
    }
    enableMouseOver(frequency) {
      if (@_mouseOverIntervalID) {
        clearInterval(@_mouseOverIntervalID);
        @_mouseOverIntervalID = null;
      }
      if (frequency <= 0) { 
        return; 
      }
      var o = this;
      @_mouseOverIntervalID = setInterval(function(){ o._testMouseOver(); }, 1000/Math.min(50,frequency));
      @_mouseOverX = NaN;
      @_mouseOverTarget = null;
    }
    _enableMouseEvents() {
      var o = this;
      var evtTarget = window.addEventListener ? window : document;
      evtTarget.addEventListener("mouseup", function(e) { o._handleMouseUp(e); }, false);
      evtTarget.addEventListener("mousemove", function(e) { o._handleMouseMove(e); }, false);
      evtTarget.addEventListener("dblclick", function(e) { o._handleDoubleClick(e); }, false);
      @canvas.addEventListener("mousedown", function(e) { o._handleMouseDown(e); }, false);
    }
    _handleMouseMove(e) {
      if (!@canvas) {
        @mouseX = @mouseY = null;
        return;
      }
      if(!e){ e = window.event; }
      var inBounds = @mouseInBounds;
      @_updateMousePosition(e.pageX, e.pageY);
      if (!inBounds && !@mouseInBounds) { return; }
      var evt = MouseEvent("onMouseMove", @mouseX, @mouseY, this, e);
      if (@onMouseMove) { @onMouseMove(evt); }
      if (@_activeMouseEvent && @_activeMouseEvent.onMouseMove) { @_activeMouseEvent.onMouseMove(evt); }
    }
    _updateMousePosition(pageX, pageY) {
      var o = @canvas;
      do {
        pageX -= o.offsetLeft;
        pageY -= o.offsetTop;
      } while (o = o.offsetParent);
      @mouseInBounds = (pageX >= 0 && pageY >= 0 && pageX < @canvas.width && pageY < @canvas.height);
      if (@mouseInBounds) {
        @mouseX = pageX;
        @mouseY = pageY;
      }
    }
    _handleMouseUp(e) {
      var evt = MouseEvent("onMouseUp", @mouseX, @mouseY, this, e);
      if (@onMouseUp) { @onMouseUp(evt); }
      if (@_activeMouseEvent && @_activeMouseEvent.onMouseUp) { @_activeMouseEvent.onMouseUp(evt); }
      if (@_activeMouseTarget && @_activeMouseTarget.onClick &&
        @_getObjectsUnderPoint(@mouseX, @mouseY, null, true, (@_mouseOverIntervalID ? 3 : 1)) == @_activeMouseTarget) {
        @_activeMouseTarget.onClick(MouseEvent("onClick", @mouseX, @mouseY, @_activeMouseTarget, e));
      }
      @_activeMouseEvent = @_activeMouseTarget = null;
    }
    _handleMouseDown(e) {
      if (@onMouseDown) {
        @onMouseDown(MouseEvent("onMouseDown", @mouseX, @mouseY, this, e));
      }
      var target = @_getObjectsUnderPoint(@mouseX, @mouseY, null, (@_mouseOverIntervalID ? 3 : 1));
      if (target) {
        if (target.onPress instanceof Function) {
          var evt = MouseEvent("onPress", @mouseX, @mouseY, target, e);
          target.onPress(evt);
          if (evt.onMouseMove || evt.onMouseUp) { @_activeMouseEvent = evt; }
        }
        @_activeMouseTarget = target;
      }
    }
    _testMouseOver() {
      if (@mouseX == @_mouseOverX && @mouseY == @_mouseOverY && @mouseInBounds) { return; }
      var target = null;
      if (@mouseInBounds) {
        target = @_getObjectsUnderPoint(@mouseX, @mouseY, null, 3);
        @_mouseOverX = @mouseX;
        @_mouseOverY = @mouseY;
      }
      if (@_mouseOverTarget != target) {
        if (@_mouseOverTarget && @_mouseOverTarget.onMouseOut) {
          @_mouseOverTarget.onMouseOut(MouseEvent("onMouseOut", @mouseX, @mouseY, @_mouseOverTarget));
        }
        if (target && target.onMouseOver) {
          target.onMouseOver(MouseEvent("onMouseOver", @mouseX, @mouseY, target));
        }
        @_mouseOverTarget = target;
      }
    }
    _handleDoubleClick(e) {
      if (@onDoubleClick) {
        @onDoubleClick(MouseEvent("onDoubleClick", @mouseX, @mouseY, this, e));
      }
      var target = @_getObjectsUnderPoint(@mouseX, @mouseY, null, (@_mouseOverIntervalID ? 3 : 1));
      if (target) {
        if (target.onDoubleClick instanceof Function) {
          target.onDoubleClick(MouseEvent("onPress", @mouseX, @mouseY, target, e));
        }
      }
    }
    static _snapToPixelEnabled = false
  };
  class TickerType {
    constructor(properties={}) {
      private _listeners, _pauseable, _paused, _inited, _startTime, _pausedTime, _ticks, _pausedTickers, _interval, _intervalID, _lastTime, _times;
      @_listeners = [];
      @_pauseable = [];
      @_paused = false;
      @_inited = false;
      @_startTime = 0;
      @_pausedTime=0;
      @_ticks = 0;
      @_pausedTickers = 0;
      @_interval = 50; // READ-ONLY
      @_intervalID = null;
      @_lastTime = 0;
      @_times = [];
      @_tick = @_tick.bind(this);
    }
    addListener(o, pauseable) {
        if (!@_inited) {
            @_inited = true;
            @_startTime = @_getTime();
            @_times.push(0);
            @setInterval(@_interval);
        }
        this.removeListener(o);
        @_pauseable[@_listeners.length] = (pauseable == null) ? true : pauseable;
        @_listeners.push(o);
    }
    removeListener(o) {
        if (@_listeners == null) { return; }
        var index = @_listeners.indexOf(o);
        if (index != -1) {
            @_listeners.splice(index, 1);
            @_pauseable.splice(index, 1);
        }
    }
    removeAllListeners() {
        @_listeners = [];
        @_pauseable = [];
    }
    setInterval(interval) {
        if (@_intervalID != null) { clearInterval(@_intervalID); }
        @_lastTime = @getTime(false);
        @_interval = interval;
        @_intervalID = setInterval(@_tick, interval);
    }
    getInterval() {
        return @_interval;
    }
    getFPS() {
        return 1000/@_interval;
    }
    setFPS(value) {
        @setInterval(1000/value);
    }
    getMeasuredFPS(ticks) {
        if (@_times.length < 2) { return -1; }
        // x >> 1 : use bitwise to divide by two (int math)
        if (ticks == null) { ticks = @getFPS()>>1; }
        ticks = Math.min(@_times.length-1, ticks);
        return 1000/((@_times[0]-@_times[ticks])/ticks);
    }
    setPaused(value) {
        @_paused = value;
    }
    getPaused() {
        return @_paused;
    }
    getTime(pauseable) {
        return @_getTime() - @_startTime - (pauseable ? @_pausedTime : 0);
    }
    getTicks(pauseable) {
        return  @_ticks - (pauseable ?@_pausedTickers : 0);
    }
    _tick() {
        @_ticks++;
        var time = @getTime(false);
        var elapsedTime = time-@_lastTime;
        var paused = @_paused;
        
        if (paused) {
            @_pausedTickers++;
            @_pausedTime += elapsedTime;
        }
        @_lastTime = time;
        var pauseable = @_pauseable;
        var listeners = @_listeners.slice();
        var l = listeners ? listeners.length : 0;
        for (var i=0; i<l; i++) {
            var p = pauseable[i];
            var listener = listeners[i];
            if (listener == null || (paused && p) || listener.tick == null) { 
              continue; 
            }
            listener.tick(elapsedTime);
        }
        
        @_times.unshift(time);
        if (@_times.length > 100) { @_times.pop(); }
    }
    _getTime() {
        return new Date().getTime();
    }
  }
  export const Ticker = TickerType();
}
