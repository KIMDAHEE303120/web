
        //제곱구하기 1 (정의식)
        function square(num) {
            if (num == 0) {
                return 0;
            } else if (num == isNaN()) {
                return 0;
            }
            return num * num;
        }
        let result = square(3)

        //제곱구하기 2 (표현식)
        let fnc = function (num) {
            if (num == 0) {
                return 0;
            } else if (isNaN(num)) {
                return 0;
            }
            return num * num;
        }
        console.log(fnc(3))

        //
        let count = 0;

        function myfnc() {
            let cnt = 0; 
            count++;
            cnt++;
            document.write(cnt + '<br>')
        }

        myfnc();

        let thefnc = function () {
            let cnt = 0; //선언될 때 마다 0으로 초기화
            count++; // 위에서 호출 했던놈,, 값이 쌓임
            cnt++;
            document.write(cnt + '<br>')
        }
        thefnc();
        thefnc();


        // Change Color
        let colors = ['yellow', 'blue', 'red', 'green', 'pink', 'aqua'];
        let i = 0;
        function changeColor() {
            // let bdy = document.getElementById('bdy'); //아이디값으로 가져올 때는 element
            let bdy = document.getElementsByTagName('body');// 테그<body>를 가져올 때는  elements > 배열 사용
            console.log(bdy[0]);
            bdy[0].style.backgroundColor = colors[i % 6];
            i++;
        }



        //
        function map(func, ary) {
            let result = [];
            for (let i = 0; i < ary.length; i ++) {
                result[i] = func(arr[i]);
            }
            return result;
        }
        let fun = function(x) {
            return x * x;
        }
        let arr = [0, 1, 2, 4];
        let result = map(fun, arr); 
        console.log(result);
  
  
        //
        function callFunc(a, b, c) {
            let sum = 0;
            for (let i = 0; i < arguments.length; i++) {
                sum += arguments[i];
            }
            return sum;
        }
        console.log(callFunc(2, 3, 4, 5, 6, 7, 8));


        //
        function callArySum(arr) {
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i];
            }
            return sum;
        }
        let aryy = [1, 2, 3, 4, 5]
        console.log(callArySum(aryy));


        //재귀함수
        let factorial = function fac(num) {
            return num < 2 ? 1 : num * fac(num-1);
        }
        result = factorial(3); //3 * 2 * 1 = 6
        console.log(result);

        // 
        function outside(x) {
            function inside(y) {
            return x + y;
            }
            return inside;
        }
        let fn_inside = outside(2);
        let res = fn_inside(3); //outside(2)(3)
        console.log(res);

        console.log(outside(2)(5));