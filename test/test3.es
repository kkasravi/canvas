module monads from 'monads';
module canvas from 'canvas';
class ProgressBar {
  constructor() {
    private i, container, context, initialX, initialY, radius, stage, totalWidth, totalHeight;
    @tick = @tick.bind(this);
    @totalWidth = 300;
    @totalHeight = 34;
    @initialX = 20;
    @initialY = 20;
    @radius = @totalHeight/2;
    @i = @totalWidth;
    @element = monads.DOMable({tagName:'canvas'}).on('load').attributes({'id':'testCanvas',width:'980',height:'680'}).style({'background-color':'#fff'}).insert(document.body).element();
    @context = @element.getContext('2d');
    @context.font = "16px Verdana";
    var progress_lingrad = @context.createLinearGradient(0,@initialY+@totalHeight,0,0);
    progress_lingrad.addColorStop(0, '#4DA4F3');
    progress_lingrad.addColorStop(0.4, '#ADD9FF');
    progress_lingrad.addColorStop(1, '#9ED1FF');
    @context.fillStyle = progress_lingrad;
    canvas.Ticker.addListener(this);
    canvas.Ticker.setFPS(30);
  }
  tick() {
    @i--;
    if(@i >= 0) {
      @progressLayerRect(@context, @initialX, @initialY, @totalWidth, @totalHeight, @radius);
      @progressBarRect(@context, @initialX, @initialY, @i, @totalHeight, @radius, @totalWidth);
      @progressText(@context, @initialX, @initialY, @i, @totalHeight, @radius, @totalWidth);
    }
  }
  roundRect() {
    @context.beginPath();
    @context.moveTo(@initialX + @radius, @initialY);
    @context.lineTo(@initialX + @totalWidth - @radius, @initialY);
    @context.arc(@initialX+@totalWidth-@radius, @initialY+@radius, @radius, -Math.PI/2, Math.PI/2, false);
    @context.lineTo(@initialX + @radius, @initialY + @totalHeight);
    @context.arc(@initialX+@radius, @initialY+@radius, @radius, Math.PI/2, 3*Math.PI/2, false);
    @context.closePath();
    @context.fill();
  }
  progressLayerRect(ctx, x, y, width, height, radius) {
      ctx.save();
      // Set shadows to make some depth
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 2;
      ctx.shadowColor = '#666';

       // Create initial grey layer
      ctx.fillStyle = 'rgba(189,189,189,1)';
      @roundRect();

      // Overlay with gradient
      ctx.shadowColor = 'rgba(0,0,0,0)'
      var lingrad = ctx.createLinearGradient(0,y+height,0,0);
      lingrad.addColorStop(0, 'rgba(255,255,255, 0.1)');
      lingrad.addColorStop(0.4, 'rgba(255,255,255, 0.7)');
      lingrad.addColorStop(1, 'rgba(255,255,255,0.4)');
      ctx.fillStyle = lingrad;
      @roundRect();

      ctx.fillStyle = 'white';
      //roundInsetRect(ctx, x, y, width, height, radius);

      ctx.restore();
  }
  progressBarRect(ctx, x, y, width, height, radius, max) {
      // var to store offset for proper filling when inside rounded area
      var offset = 0;
      ctx.beginPath();
      if (width<radius) {
          offset = radius - Math.sqrt(Math.pow(radius,2)-Math.pow((radius-width),2));
          ctx.moveTo(x + width, y+offset);
          ctx.lineTo(x + width, y+height-offset);
          ctx.arc(x + radius, y + radius, radius, Math.PI - Math.acos((radius - width) / radius), Math.PI + Math.acos((radius - width) / radius), false);
      }
      else if (width+radius>max) {
          offset = radius - Math.sqrt(Math.pow(radius,2)-Math.pow((radius - (max-width)),2));
          ctx.moveTo(x + radius, y);
          ctx.lineTo(x + width, y);
          ctx.arc(x+max-radius, y + radius, radius, -Math.PI/2, -Math.acos((radius - (max-width)) / radius), false);
          ctx.lineTo(x + width, y+height-offset);
          ctx.arc(x+max-radius, y + radius, radius, Math.acos((radius - (max-width)) / radius), Math.PI/2, false);
          ctx.lineTo(x + radius, y + height);
          ctx.arc(x+radius, y+radius, radius, Math.PI/2, 3*Math.PI/2, false);
      }
      else {
          ctx.moveTo(x + radius, y);
          ctx.lineTo(x + width, y);
          ctx.lineTo(x + width, y + height);
          ctx.lineTo(x + radius, y + height);
          ctx.arc(x+radius, y+radius, radius, Math.PI/2, 3*Math.PI/2, false);
      }
      ctx.closePath();
      ctx.fill();

      // draw progress bar right border shadow
      if (width<max-1) {
          ctx.save();
          ctx.shadowOffsetX = 1;
          ctx.shadowBlur = 1;
          ctx.shadowColor = '#666';
          if (width+radius>max)
            offset = offset+1;
          ctx.fillRect(x+width,y+offset,1,@totalHeight-offset*2);
          ctx.restore();
      }
  }
  progressText(ctx, x, y, width, height, radius, max) {
      ctx.save();
      ctx.fillStyle = 'white';
      var text = Math.floor(width/max*100)+"%";
      var text_width = ctx.measureText(text).width;
      var text_x = x+width-text_width-radius/2;
      if (width<=radius+text_width) {
          text_x = x+radius/2;
      }
      ctx.fillText(text, text_x, y+22);
      ctx.restore();
  }
}
ProgressBar();    
