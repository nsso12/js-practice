// 이 전체가 Ball 인거 ! 
// Ball 안 전체에서 쓰려면 this 써줘야! 

function Ball (x,y,color){ // 기본값 정해줌 
    this.x = x || 100; // 현재 좌표
    this.y = y || 100;
    this.vx = 0; // 한번에 가는 거리 
    this.vy = 0;
    this.dx = 0; // 가고싶은 좌표
    this.dy = 0;
    this.color = color || "black";
    this.isActive = false; 
}

Ball.prototype = {
    constructor : Ball,
    moveTo : function(dx, dy){
        this.dx = dx;
        this.dy = dy;
        
        var w = (this.dx-this.x); //멤버변수에 있는건 this생략하면 안돼
        var h = (this.dy-this.y);
        var d = Math.sqrt(w*w + h*h);
    
        this.vx = w/d; // 한번에 갈 거리 
        this.vy = h/d;
    },

    update : function(){
        if( 
            (this.x-1 < this.dx && this.dx < this.x+1 ) &&
            (this.y-1 < this.dy && this.dy < this.y+1 )
        ){ 
            this.vx = 0; // 갈 거리 이제 없어 
            this.vy = 0; // 
        }
        this.x += this.vx; // 누적해서 나가야지! 
        this.y += this.vy;
        console.log(this.x,this.y)
    },

    draw : function(ctx){
        var shape = new Path2D(); 
        shape.arc(this.x,this.y,30,0,Math.PI*2); 
        
        var originColor = ctx.fillStyle;
        ctx.fillStyle = this.color;
        ctx.fill(shape); 
        ctx.fillStyle = originColor;
        // 초기화 시켜줌

        // ctx.clearRect(0,0,900,700); 
        // ctx.fillStyle = this.color

     // 조건을 넣어?!?! 활성화 되면 테두리 그려줘
     if (this.isActive){ // 활성화된 ball -> true로 바뀌면
        var originColor = ctx.strokeStyle;
        ctx.strokeStyle = "red";
        ctx.lineWidth = "5";
        ctx.stroke(shape);
        ctx.strokeStyle = originColor;
        // 다른걸 선택했을때도 red가 나오는걸 방지하기 위해서
    }
    },

// fill -> strok 해야 테두리 그려짐
     setActive : function() {
       this.isActive = true;
     },

     isLocated : function(a, b) {
        // var located = false;
        if(this.x - 30  < a && 
            a < this.x + 30  &&
            this.y - 30  < b && 
            b < this.y + 30 
        )
        return true;
        }


};