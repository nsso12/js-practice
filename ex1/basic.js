{
    var exam = { kor: 10, eng: 20, math: 30 };
    // 객체 반복? 배열 반복? 
    // [] 는 배열이고 {}는 객체?

    console.log("===============================================");

    for (var att in exam)
        console.log(att + ":" + exam[att]);   // exam.kor, exam["kor"], exam[att]

    // console.log("===============================================");
    // for (var value of exam)
    //     console.log(value);      // Uncaught TypeError: exam is not iterable


    console.log("===============================================");


    var names = [, "철수", "영희", "맹구", , "동천"];
    for (var i = 0; i < names.length; i++)
        console.log(names[i]);              // 철수, 영희, 맹구, 동천
    console.log("===============================================");

    for (var i in names)
        console.log(names[i]);              // 철수, 영희, 맹구, 동천
    console.log("===============================================");


    for (var name of names)
        console.log(name);                  // 철수, 영희, 맹구, 동천

}

console.log("====================================================");
// NaN, Infinity : Global Property
{
    var x = Infinity;
    console.log(Infinity - 1000000);
    console.log(Number.MAX_VALUE);   // Max_Value가 곧 Infinity
    var y = Math.pow(100, 1000000);   // 100^^10000000;
    console.log(y);                  // Infinity

    console.log("====================================================");

    var x = 3 * 'a';
    console.log(x);             // NaN
    console.log(x == NaN);        // false
    console.log(x === NaN);       // false
    console.log(isNaN(x));      // true
}


console.log("====================================================");
{
    var kor = null ?? 10;        // 10   null로만 한정해서 기본값을 만들고 싶을 때
    var kor = false ?? 10;      // false
    var kor = false || 10;      // 10    falsy를 기반으로 기본값을 만들고 싶을 때
    console.log(kor);           // 10


    var result = true || false && false;
    result = 'Cat' || 'Dog' && 'Dragon';        // Cat
    result = 'Cat' && 'Dog' || 'Dragon';        // Dog
    console.log(result);


    var kor = 9;
    var eng = 10;
    var math = 10;
    var valid = kor && eng && math;

    if (valid)
        console.log("모든 값이 입력 되었습니다");       // 출력됨
    // false가 없기 때문에 math값이 valid에 들어가고 if(10)은 truthy이기에 위에 내용 출력
    else
        console.log("입력되지 않은 값이 존재합니다");


    // var age = window.prompt("나이를 입력하세요");   // 자바스크립트 기능이 아니고 윈도우에서 지원하는 기능
    // age = age || 10;
    // console.log(age);           // 값을 입력하면 그 값. 입력하지 않으면 10


    var result = null || 0 || undefined || '' || 'aa' || ' ' || 3 || 'hello';
    console.log(result);            // aa 

    var o5 = 'Cat' || 'Dog';
    console.log(o5);                // Cat
}

console.log("====================================================");

// 연산자 Operators
{
    var result = 32 > "4";
    console.log(result);            // true
    // 4가 숫자가 된 것    

    var result = "32" > "4";
    console.log(result);            // false
    // 문자열 비교는 길이와 상관없음 
    // 첫글자부터 비교해서 결정남

    var result = 3.5 - "A";
    console.log(result);            // NAN : Not A Number

    var result = 3.5 - "2";
    console.log(result);            // 1.5

}

console.log("====================================================");

// JSON
{
    //stringify()
    var member = { id: 1, username: "dragon", password: '1111' };
    var json = JSON.stringify(member);
    console.log(json);


    var str = "{\"id\": 1, \"username\" : \"newlec\", \"password\":\"111\"}";
    var member = JSON.parse(str);
    console.log(member.username);


    // JSON.parse()
    var str = '{"id": 1, "username" : "newlec", "password":"111"}';
    var member = JSON.parse(str);
    console.log(member.username);


    // eval()
    [1, 2, 3];
    '({"id": 1, "username" : "newlec", "password":"111"})';


    var str = '({"id": 1, "username" : "newlec", "password":"111"})';
    var member = eval(str);
    console.log(member.username);


    var str = "[3,4,2,3]";    // 배열 아니고 문자열임! 
    console.log(str[1]);      // 3 =>  문자열이니까 문자 하나씩이 배열이 됨
    console.log(str[2]);      // ,  

    var list = eval(str);
    console.log(list[2]);     // 2 


    var code = "var x =30;";
    eval(code);
    // eval로 실행하기 위해서는 완전한 문장이어야함  ex) "var x = " 이런거 X
    // 한 줄에 문장으로써 쓸 수 없는 녀석은 X (줄 단위의 완전한 문장만 가능)

    console.log(x);

}


console.log("====================================================");

{
    var exam = { kor: 10, eng: 30, "ma th": 90 };
    console.log(exam["ma th"]);       // 90
    var nums = [1, 2, 3, 4, 5];       // (5) [1, 2, 3, 4, 5]
    console.log(nums);

    // var x = 3;          // 객체 (내가 만든 객체가 아님)
    // var y = "hello";    // 객체
    // var ar = [];        // 객체

    // var ar = new Array();
    // var x = new Number(3);   // 내가 별도로 만들어야하는 객체

}

console.log("====================================================");
{
    // Object property mani
    var exam = new Object();
    exam.kor = 30;
    exam["eng"] = 40;
    var colName = "math";
    exam[colName] = 50;

    console.log(exam["kor"]);       // 30
    console.log(exam.eng);          // 40  
    console.log(exam.math);         // 50


    // 속성 지우기 
    delete exam.eng;
    console.log(exam);
    console.log(exam.eng);      // undefined
    // 지금 지웠는데 자료형이 나온것. js는 undefined가 값이 없는게 아니라 자료형
    // js는 .을 찍는 순간 나옴
    // 속성은 있는데 값이 없는 것 


    console.log("====================================================");

    // Object basic
    var exam = new Object();
    exam.kor = 30;
    console.log(exam);          // {kor: 30}
    exam.eng = 40;              // {kor: 30, eng: 40}
    console.log(exam);          // {kor: 30, eng: 40, math: 50}
    exam.math = 50;
    console.log(exam);          // 30

    console.log(exam.kor);
}


console.log("====================================================");
// array data structure
{
    // array manipulation
    var nums = new Array(1, 2, 3, 4, 5, 6);
    console.log(nums);               // (6) [1, 2, 3, 4, 5, 6]
    // nums.splice(3);               // (3) [1, 2, 3]
    //    nums.splice(3,1);          // [1, 2, 3, 5, 6]
    //    nums.splice(3,2);          // [1, 2, 3, 6]
    //    nums.splice(3,1,7,8,9,10);    //(9) [1, 2, 3, 7, 8, 9, 10, 5, 6]
    // nums.splice(3, 0, new Array(7, 8, 9, 10));    // (7) [1, 2, 3, Array(4), 4, 5, 6] (가지치기 느낌으로 생김)

    // 문제1. 숫자 2를 100으로 수정하기
    nums.splice(1, 1, 100);
    console.log(nums);


    // queue : FIFO(First In First Out)
    var nums = new Array();
    nums.push("그저께 산 바나나");
    nums.push("어제 산 바나나");
    nums.push("오늘 산 바나나");

    console.log(nums);             // (3) ['그저께 산 바나나', '어제 산 바나나', '오늘 산 바나나']
    var banana = nums.shift();
    console.log(banana);           // 그저께 산 바나나
    console.log(nums);             // (2) ['어제 산 바나나', '오늘 산 바나나']


    var banana = nums.unshift();
    console.log(nums);




    // stack : LIFO(Last In First Out)
    var nums = new Array();
    nums.push(1);
    nums.push(21);
    nums.push(30);
    nums.push(19);

    console.log(nums);           // (4) [1, 21, 30, 19]
    var outNum = nums.pop();
    console.log(outNum);         // 19 
    console.log(nums);           // (3) [1, 21, 30]
}



console.log("====================================================");
// array 
{
    var nums = new Array();
    nums[3] = 4;

    console.log(nums);             // (4) [empty × 3, 4] 
    console.log(nums[0]);          // undefined
    console.log(typeof nums[0]);   // undefined
    console.log(nums.length);      // 4


    var nums = new Array(5, 10, 21, "hello", new Array(2, 3, 4));
    console.log(nums[4][1]);        // 3
    console.log(nums[4]);           // [2,3,4]
    console.log(nums);              // [5, 10, 21, 'hello', Array(3)]

}


{
    var x = 5;
    var y;

    // typeof는 변수의 type을 말해주는 연산자
    console.log(typeof x);  // number
    console.log(typeof y);  // undefined (타입임)
    console.log(y);         // undefined


    // 초기화 되었는지를 확인하는 코드는?
    console.log(y == "undefined");   // false (자체가 값이기 때문에 값과 값만 비교해야 함)
    console.log(y == undefined);     // true
    console.log(y === undefined);    // true


}


console.log("====================================================");
{
    var x = 3;
    var y = 3;   // new Number(3);

    console.log(x);
    console.log(y);

    console.log(x == y);  // 박스에 들어있는 값을 비교하는 연산자
    console.log(x === y); // 박스가 같은지를 비교하는 연산
}