function Ball(x, y, size,color){
    this.x = x || 100;
    this.y = y || 100;
    this.vx = 0;
    this.vy = 0;
    this.dx = 0;
    this.dy = 0;
    this.color = color || black;
    this.isActive = false;
}
console.log(Ball.prototype)

Ball.prototype = {
    
    Constructor : Ball,


    moveTo : function(dx, dy){
        this.dx = dx;
        this.dy = dy;

        var w = (this.dx-this.x);
        var h = (this.dy-this.y);
        var d = Math.sqrt(w*w + h*h);

        this.vx = w/d;
        this.vy = h/d;
    },

    update : function(){
        if(
            (this.x-1 < this.dx && this.dx < this.x+1) &&
            (this.y-1 < this.dy && this.dy < this.y+1)
        ) {
            this.vx = 0;
            this.vy = 0;
        }

        this.x+=this.vx;
        this.y+=this.vy;
    },

    draw : function(){
        var shape = new Path2D();    
        shape.arc(this.x, this.y, 30, 0, Math.PI*2)
        var originColor = ctx.fillStyle;
        ctx.fillStyle= this.color;
        ctx.fill(shape);
        ctx.fillStyle = originColor;

        if(this.isActive){
            var originColor = ctx.strokeStyle;
            ctx.stroke(shape);
            ctx.lineWidth = 10;
            ctx.strokeStyle = "red";
            ctx.fillStyle = originColor;
        }
    },

    setActive : function(active){
        if(active === undefined) {
            this.isActive = true;
            return;
        }
        this.isActive = false;
    },

    isLocated : function(x, y){
        var result = (this.x - 30 <=x && 
            x <= this.x +30) &&
            (this.y - 30 <= y && 
            y <= this.y +30 );

        return result;
    }

}