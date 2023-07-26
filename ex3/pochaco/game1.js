
var ball1 = new Ball (100,100,"black");
var ball2 = new Ball (200,100,"blue");
// ball 1개 만듦

/** @type {HTMLCanvasElement} */ // 이제야 인식함.
var canvas = document.querySelector("#canvas"); // canvas 만들고
var ctx = canvas.getContext("2d"); // 그려야! 초당 수십번 얻어냄... 한번만 해도 되지않아?

// 선택한 ball만 움직이게!!!
var curBall = ball1; // ball 활성화 시킴
curBall.setActive(); 

canvas.onclick = function(e){
    // 클릭을 하면 -> 해당하는 ball이 움직여 ! 

    // ball1아 너 거기 있니 ? 
    if(ball1.isLocated(e.x, e.y))
   
    // if(ball1.x - 30  < e.x && 
    //     e.x < ball1.x + 30  &&
    //     ball1.y - 30  < e.y && 
    //     e.y < ball1.y + 30 
    // )

    {
        curBall = ball1; // curBall에 ball1 넣어줌
        curBall.setActive(); // 활성화시킴
        ball2.isActive= false; // 나머지는 비활성화 시킴 
        return; 
    }

    if(ball2.isLocated(e.x, e.y))

    // if((ball2.x - 30  <= e.x && e.x < ball2.x + 30 ) &&
    //     (ball2.y - 30  <= e.y && e.y < ball2.y + 30 ))

    {
        curBall = ball2;
        curBall.setActive();
        ball1.isActive= false;
        return;
    }

    curBall.moveTo(e.x, e.y);  
}

window.setInterval(function(){
    ball1.update();
    ctx.clearRect(0,0,900,700); 

    ball1.draw(ctx); 

    ball2.update();
    ball2.draw(ctx); 

},10);


