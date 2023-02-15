    // 몫 구하기
    function solution(num1, num2) {
        var answer = ~~(num1/num2);
        return answer;
    }

    // 나머지 구하기
    function solution(num1, num2) {
        var answer = num1%num2;
        return answer;
    }

    // 각도기 구하기
    function solution(angle) {
        if(angle<90){
            return 1
        };
        if(angle===90){
            return 2
        };
        if(angle<180){
            return 3
        };
        return 4
    };

    // 정수 구하기
    function solution(num1, num2) {
        sum = num1/num2*1000
        sum2 = Math.floor(sum)
                        
        return  sum2
    }

    //// 짝수의 합
    function solution(n) {
        var answer = 0;

        for(let i=2 ; i<=n ; i+=2)
            answer += i;

        return answer;
    }

    function solution(n) {
        let answer = 0;
        for(i=0; i<= n; i++){
            if(i%2===0){
                answer += i;
            }
        }
        return answer
    }

    // 큰 키 몇명인지
    function solution(array, height) {
        let answer=[];
        for(i=-1; i < array.length; i++ ){
            if(height < array[i]){
                answer.push(i);
            }
        }
        return answer.length;
    }

    //// 중복된 숫자갯수
    function solution(array, n) {
        let answer = 0;
        for(i=0; i<array.length; i++){
            if(array[i] === n){
                answer++
            }        
        }
        return answer;
    }