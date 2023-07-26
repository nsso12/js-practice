console.log("------------ 생성자 --------------");
{
    function f1() {
        console.log("f1");
        console.log(this);    // window
        // this가 전역객체인 window를 호출함
        this.kor = 20;        // window
    }


    // 두 방법의 차이
    var x1 = f1();
    console.log("x1: " , x1);       // undefined    
    // 리턴값이 없기 때문에 undefined 

    console.log("----------------------------");

    var x2 = new f1();                  
    console.log("x2:" , x2);         // f1 {kor: 20}
    console.log("x2:" , x2.kor);     // 20

    console.log("----------------------------");

    // 생성자로 사용될 이름엔 대문자 사용!
    function Exam() { 
        //this 생략 불가능. js에서 this는 window
        this.kor = 10;
        this.eng = 10;
        this.math = 20;

        this.total = function() {
            return this.kor + this.eng + this.math;
        }
    }

    var exam = new Exam();
    console.log("total: "+ exam.total());       // 40

    console.log(exam.kor);              // 10 


    console.log("-----------overload constructor-----------------");

    {

        function Exam(kor, eng, math) {
            this.kor = kor || 0;
            this.eng = eng || 0; 
            this.math = math || 0; 
            // || 는 처음으로 참이 되는 값 찾기
            // 0이 나오면 안돼!

            this.total = function() {
                return this.kor + this.eng + this.math;
            }

            this.avg = function() {
                return this.total()/3;
                // js는 실수 정수 구분 안함. 
                // 3으로 나누어도 실수값으로 반환

            }
        }

        var exam = new Exam();
        console.log("total", exam.total());             // 0
        console.log("avg", exam.avg());                 // 0
        console.log("-------------------------");

        var exam = new Exam(10,10,10);
        console.log("total", exam.total());             // 30
        console.log("avg", exam.avg());                 // 10

        console.log("---------------------------------")
        // console.log(exam.constructor);

        // var exam1 = new Exam();
        var exam1 = new exam.constructor(1,2,3);
        console.log("total1", exam1.total());
        console.log("avg1", exam1.avg());

    }
    console.log("-----------PrototType을 이용한 캡슐화-----------------");

    {
        // var exam1 = new Exam (1,1,1);
        // var exam2 = new Exam (2,2,2);
        // console.log(exam1.total === exam2.total);           // false
        // console.log(exam1.constructor === exam2.constructor);       // true

        // console.log("------------------------------------");
        // console.log(exam1.constructor === Exam);
        // console.log(exam1.constructor);
        // console.log(Exam);
        // console.log("------------------------------------");
        // console.log(Exam.prototype);

        // function NewExam() {
        //     this.com = 0;
        // }

        // NewExam.prototype = exam1;
        // // 77번째 줄 var exam1을 프로토타입으로 삼음
        // // 객체를 기반으로 해서 객체를 공유하는 것

        // var exam3 = new NewExam();
        // console.log(exam3.total());
        // console.log(exam3);

        // var exam4 = new NewExam();
        // console.log(exam3.total ===  exam4.total);

        function Exam(kor,eng,math) {
            this.kor = kor || 0;
            this.eng = eng || 0;
            this.math = math || 0;
        } 

        Exam.prototype = {      // 인스턴스 메서드 
            total: function() {
                return this.kor+this.eng+this.math;
            },
             avg : function() {
                return this.total()/3;
        }
    }

    var exam5 = new Exam(2,2,2);
    var exam6 = new Exam(4,5,6);
    console.log(exam5.total === exam6.total);           // true


    // total이랑 avg는 똑같기때문에 같은걸 공유해주기 위해서
    // prototype을 만든 것

 } 
}

 console.log("---------- 객체 속성 관리 -----------------");

 {


    console.log(null == undefined); 
    // falsy falsy는 true
    console.log(null === undefined);
    // 형식이 다르기 때문에 false

    var nums = [];
    console.log(typeof nums);       // object
    console.log(nums instanceof Array);         // true
    console.log(Array.isArray(nums));           // true
    // Array라는 객체 안에 isArray라는 메서드
    // 배열인지 아닌지 확인하는 메서드
 }

 console.log("---------- 프로토타입 얻기 -----------------");

 {
    function NewLecExam() {

    }

    NewLecExam.prototype = exam5;
    var newExam = new NewLecExam();
    console.log(newExam);
    console.log(NewlecExam);
    
    console.log("NewLecExam.prototype : " + NewLecExam.prototype);
   
    console.log("newExam : " + newExam);
    console.log(newExam.total());           // 6


    console.log(newExam.prototpe);         // undefined
    console.log(newExam.__proto__);         // {kor: 2, eng: 2, math: 2}
    console.log(Object.getPrototypeOf(newExam));        // {kor: 2, eng: 2, math: 2}
    // exam5의 prototype을 넣어줌 
    // setPrototype이 값을 설정하는거, get이 확인하는거
    // 셋이 다 같은 값인데 다른 표현법이니까 값을 확인하기 위한 확인용
    
    // console.log(NewlecExam.prototype);
    console.log(newExam.constructor.prototype);      // {constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, __lookupGetter__: ƒ, …}
     // 한 단계를 건너뛴 느낌

    // console.log(newExam.constructor === NewlecExam);
    console.log(exam5.constructor === Exam);        // false
    

    // prototype을 설정하면 constructor가 달라짐 

    function Omok() {
        this.x = 0;         // this는 지역
        this.y = 0;         // this는 지역
    }

    console.log(Omok.prototype);            // Object 
    console.log(Omok.prototype.constructor);
    // 기본 틀이 없기 때문에 기본 속성값들이 나옴 (설명서)
    // 현재 정의된 프로토타입이 없음

    var omok1 = new Omok();
    console.log(omok1.constructor);

    Omok.prototype = {};     // 초기화

    var omok2 = new Omok();
    console.log(omok2.constructor);       // function

    // 모든 function 객체는 prototype을 가지고 있음!    
 }



 //태호오빠 코드 
{
    console.log("---------프로토타입 설정----------------------------------")
    {
        function NewlecExam(){
            
        }
    
        NewlecExam.prototype = exam5;
    
        var newExam = new NewlecExam(); 
        console.log(newExam);
        console.log(NewlecExam);
        console.log(newExam.prototype); // undefined
        console.log(newExam.__proto__); // kor : 2 eng : 2 math : 2 함수에 있는걸 
        console.log(Object.getPrototypeOf(newExam)); // kor : 2 eng : 2 math : 2
        console.log(NewlecExam.prototype); // kor : 2 eng : 2 math : 2
        console.log(NewlecExam.__proto__); //   빈껍데기
        // console.log(newExam.constructor === NewlecExam);
    
        console.log(exam5 === NewlecExam.prototype);
        console.log(exam5 == NewlecExam.prototype);
        console.log(exam5.__proto__);
        console.log(exam5.prototype);
    
        console.log(typeof(newExam.constructor));
        console.log(typeof(NewlecExam));
        
        console.log(exam5.constructor === Exam);
        console.log(exam5);
        console.log(Exam);
        
        console.log(newExam);
        console.log(newExam.constructor);
    
    }
    
    console.log("---------new가 생성객체의 prototype을 따라간다.----------------------------------")
    {
        function Omok(){
            this.x = 0;
            this.y =0;
        }
    
        console.log(Omok.prototype) // constructor가 존재.
        console.log(Omok.prototype.constructor) 
    
        var omok1 = new Omok();
        console.log(omok1.constructor);
        console.log(typeof(Omok.prototype.constructor))
        console.log(typeof(omok1.constructor))
    
        console.log(Omok.prototype.constructor == omok1.consructor)
        console.log(Omok.prototype.constructor === omok1.consructor) // 값 + 형식 비교
        
        console.log("———변경 ———")
        Omok.prototype= {};
    
        var omok1 = new Omok();
        console.log(omok1.constructor);
    }
}




 console.log("---------- Inheriting -----------------");

 //  {
//     var exam = {
//         kor:10,
//         eng:30,
//         __proto__: {
//             eng:50,
//             math:40,
//             __proto__ : {
//                 com:60
//             }
//         }
//     };

//     console.log(exam.kor, exam.eng, exam.math, exam.com);
    // 이게 바로 자바스크립트가 가지고 있는 상속
// }


    // 2번째 공유 
    {
        var base = {            // 부모 
            kor:10,
            eng:20,
            math:30
        }

        var exam = {
            com:10,
            __proto__:base
            // java에서 extends = __proto__ 
        };

        var exam2 = {
            com:20,
            __proto__:base
        };

        exam.kor = 3;       //Shadowing 뜻하지 않게 부모것을 가린 것 
        //(아래 false가 나오는 이유 : var exam에 kor이 생겨버린것)
        exam2.kor = 4;

        console.log(exam.kor, exam.eng, exam.math, exam.com);           // 3 20 30 10
        console.log(exam2.kor, exam2.eng, exam2.math, exam2.com);       // 4 20 30 20

        console.log(exam.eng === exam2.eng);        // true        
        console.log(exam.kor === exam2.kor);        // false




    }



