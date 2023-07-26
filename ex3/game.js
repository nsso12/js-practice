var x = 100;
var y = 100;
var vx = 0;
var vy = 0;
var dx = 0;
var dy = 0;

console.log(typeof localStorage.getItem("y"));

/** @type {HTMLCanvasElement} */
//var canvas = document.body.firstElementChild;
var canvas = document.querySelector("#canvas");

canvas.onclick = function(e){
  
    dx = e.x;
    dy = e.y;

    var w = (dx-x);
    var h = (dy-y);
    var d = Math.sqrt(w*w+h*h);
    vx = w/d;
    vy = h/d;

    localStorage.setItem('x', e.x);
    localStorage.setItem('y', e.y);
}

window.setInterval(function(){

    if ((x-1 < dx && dx < x+1) &&
    (y-1 < dy && dy < y+1)) {
        vx = 0;
        vy = 0;
    }
    x+= vx;
    y+= vy;

    var ctx = canvas.getContext("2d");
    var ball = new Path2D();

    ball.arc(x,y,30,0,Math.PI*2); 
    ctx.clearRect(0,0,900,700);
    ctx.fill(ball);
}, 10);
