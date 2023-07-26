
/** @type {HTMLCanvasElement} */
// var canvas;  // 이게 왜 지역변수지?
// var canvas = document.body.firstElementChild;
var canvas = document.querySelector("#canvas");

var ctx = canvas.getContext("2d");

// 사각형 
// ctx.fillRect(25,25,100,100);
// ctx.clearRect(45,45,60,60);
// ctx.strokeRect(50,50,50,50);

// =============================================================

// // 삼각형
// // moveTo와 lineTo의 차이 알고가기
// 그림을 그리고 이용할건가 그림을 그리지 않고 이용할건가...?

// ctx.beginPath();
// ctx.moveTo(75,50);  // 선을 시작하는 위치
// ctx.lineTo(100,75);
// ctx.lineTo(75,100);

// stroke는 close와 함께 써야하는데 실행해보니 stroke를 먼저 작성하면 닫히지 않음
// close 후에 stroke 써주기!
// ctx.closePath();
// ctx.stroke();        // 윤곽선 그리기
// ctx.fill();

// =============================================================

// 원
// ctx.beginPath();
// ctx.moveTo(75,50);  // 선을 시작하는 위치
// ctx.lineTo(100,75);
// ctx.lineTo(75,100);
// ctx.arc(75,75,50,0,Math.PI*2,true);
// // 가로위치, 세로위치, 크기, 선 길이...? , 각도, 시계방향(true면, false면 반시계방향...?)
// false가 시계방향 true가 반시계방향 = default값
// // ctx.closePath();
// ctx.stroke();       
//ctx.fill();


// 원 안에 반구 아웃라인만 그리기
// ctx.beginPath();
// ctx.arc(75,75,50,0,Math.PI*2,true);
// ctx.moveTo(110,75);
// ctx.arc(75,75,35,0,Math.PI,false);          // 여기서 35부분이 정확히 뭘까 => 반지름
// ctx.moveTo(80,75);
// ctx.arc(75,75,5,0,Math.PI*2,true);   
// ctx.stroke();

// 벨루가 얼굴 코드
//오른쪽눈
// ctx.moveTo(95, 50);
// ctx.lineTo(85, 55);
// ctx.lineTo(95, 60);

// //왼쪽눈
// ctx.moveTo(60, 50);
// ctx.lineTo(60, 60);

// ctx.stroke();

// //볼
// ctx.beginPath();
// ctx.fillStyle = "rgb(255, 50, 50,0.5)";
// ctx.moveTo(40, 75);
// ctx.arc(40, 75, 10, 0, 3.14 * 2, false);
// ctx.moveTo(110, 75);
// ctx.arc(110, 75, 10, 0, 3.14 * 2, false);

// ctx.fill();



// =============================================================
// 기존 (lineTo 사용)
// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.lineTo(100,100);
// ctx.stroke();
// ctx.strokeRect(100,50,1,1);

//quadraticCurveTo() 사용
// ctx.beginPath();
// ctx.moveTo(50,50);
// ctx.quadraticCurveTo(150,10,100,100);
// ctx.stroke();
// ctx.strokeRect(150,10,1,1);         // 여기있는 앞에 두 좌표를 quadratic에 넣어주는 것
                                    // quadraticCurveTo를 lineTo 대신 사용 






// 두 점을 찍고 싶을때
// ctx.beginPath();
// ctx.moveTo(50,50);
// // ctx.quadraticCurveTo(150,10,100,100);
// ctx.bezierCurveTo(150,10,150,70,100,100);
// ctx.stroke();
// ctx.strokeRect(150,10,1,1); 
// ctx.strokeRect(150,70,1,1);  


// Path2D
// var shape1 = new Path2D();
// shape1.rect(10,10,100,100);
// ctx.stroke(shape1);

// var shape2 = new Path2D();
// shape2.arc(160,60,50,0,2*Math.PI);
// ctx.stroke(shape2);

// var shape3 = new Path2D("M10 10 h 110 v 100 h -100 z");  // MOVE .... 
// ctx.stroke(shape3);



canvas.onclick = function(e){
    if (e.shiftKey)
    {
        console.log(e.x,e.y);
        var shape1 = new Path2D();
        shape1.rect(e.x,e.y,50,50);
        ctx.stroke(shape1);
    }
    else
    {
        var shape = new Path2D();
        shape.arc(e.x,e.y,25,0,Math.PI*2);
        ctx.stroke(shape);
    }
       
}

var ctx = canvas.getContext("2d");








