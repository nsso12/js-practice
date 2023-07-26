{
    var add = new Function("x, y", "return x+y;");
    // 왜 구현부를 문자열로 받을까 
    console.log(add(3,4));    
    
    var add = function(x, y){return x+y;};
    console.log(add(3,4));  
    
    // function add(x, y){return x+y;};
    // console.log(add(3,4));  // 7
}
console.log("===============================================");
{
    var add = function() {
        console.log("arguments:"+arguments.length);
        var x = arguments[0];
        var y = arguments[1];

        var sum = 0;
        for(var arg of arguments)
        sum += arg;

        // return x+y;         // 5
        return sum;            // 14
    };

    // console.log(add(0))
    // NaN이 나옴 => undefined + undefined이기 때문 
    console.log(add(2,3,4,5));
    // js는 매개변수가 의미가 없음 
}
console.log("===============================================");

// alert(a);           // undefined. a는 들어갔지만 1은 들어가지 않음
// var a = 1;          // a는 준비물. 미리 준비해둬야 함 
        
// a = 1;              // a는 준비물. 미리 준비해둬야 함 
// alert(a);           // 1

// alert(a);              // Uncaught ReferenceError: a is not defined
// a=1;                   // 변수 선언을 한다는 것은 절차를 준비해달라고 하는것
                       // 고로 이 경우는 준비가 되지 않기에 에러가 남

console.log("============전역 변수 특징==============");
// 전역 변수의 특징
{

    // a = 1;
    // console.log(a);         //  1
    // var a;


    // window.alert("aa");
    // // console.log(a);
    // console.log(window.a);  // 값을 안 넣은 것
    // a = 2;
    // 전역 공간에 있는 변수들은 위치 상관없이 모두 log(window.a); 
    // window가 생략되어 있던 것 모두 window의 속성이었음
    // 선언을 안 하면 window에 붙지 않음...


    // 전역 공간에서는 변수 선언(var를 사용)해도 되고 안해도 되고
    // 둘은 같은 것이다. 맞나? 아님
    // 그럼 둘의 차이는? 선언의 의미 =? 변수를 (미리) 준비시킴
    // 전역 공간에서의 선언은 곧 c fwindow의 속성이 됨
    // 그것이 선언이 아니고 값을 대입만 하는 경우도 마찬가지

    // window.alert("aa");
    // var a = 2;
    // console.log(a);
    
    // for(var k in window)
    // console.log(k);

    console.log("===========지역 변수 특징================");

// 지역 변수의 특징
// {
//     var f1 = function() {
//         a = 1;

//         console.log(window.a);
//         var a;
//     }

//     f1();
    // 지역에 변수가 선언되어 있는지 잘 봐야함 중요! 
    // js는 지역변수 개념이 없음. 

}

// {
// var f1 = function() {
//     a = 1;        
//     var a;          
//     a++;
//         alert(a);           // 2 
//         alert(window.a);    // undefiend
//     }

//     f1();
// }


{
    function f1() {
        var a = 1;
        console.log(a);

        function f2() {
            a = 10;    // 전역 변수
            a++;
            console.log(a);
        }
        f2();
        console.log(a);
    }
    f1();
}

console.log("=========== Outer 변수 특징================");
{
    var f1 = function() {
        var a = 1;

        console.log(a);         // 1

        function f2() {
            var a = 10;
            a++

            console.log(a);     // 11
        }
        f2();
        console.log(a);         // 1
    }
    f1();
}
// 함수 안에서 선언되지 않은 변수는 무조건 window를 쓴다
 
console.log("==========  Closure 함수  ===========");  

{
    var fClosuer = null;
    var fClosuer2 = null;

    var f1 = function() {
        var a = 1;
        a++;
        console.log("f1: " + a);     
        
        function f2() {
            a++
            console.log("f2:"+a);    
        }
       window.fClosuer = f2;

       function f3() {
        a--
        console.log("f3:" + a);
       }
       window.fClosuer2 = f3;
    }

    f1();
    f1();
    f1();
    fClosuer(); 
    fClosuer2();
    fClosuer();
    fClosuer2();
}


// function f1() {
//     var a =1;

//     return function f2() {
//         return a;
//     }
// }
// var f = f1();
// var a = f();
// alert(a);
