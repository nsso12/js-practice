var ball1 = new Ball(100,40,30, "Black");
var ball2 = new Ball(100,100, 30,"blue");

var balls = [];

balls.push(ball1);
balls.push(ball2);


var curBall = ball1;
curBall.setActive();

/**@type {HTMLCanvasElement} */

var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext("2d");

canvas.onclick = function(e){

    if(ball1.isLocated(e.x, e.y)){
        curBall.setActive(false);
        curBall = ball1;
        curBall.setActive();
        return;
    }

    if(ball2.isLocated(e.x, e.y)) {
        curBall.setActive(false);
        curBall = ball2;
        curBall.setActive();
        return;
    }
    // Ball중에 하나를 클릭한 것이 아니라면 curBall을 이동시킨다.
    curBall.moveTo(e.x, e.y);

}   

window.setInterval(function(){
    
    
    ball1.update();
    ball2.update();
    
    ctx.clearRect(0,0,900,700);
    ball1.draw(ctx);
    ball2.draw(ctx);
}, 20);

// var ball1 = new Path2D();    
// ball1.arc(200, 100, 30, 0, Math.PI*2);
// ctx1.fillStyle = "red";
// ctx1.fill(ball1);