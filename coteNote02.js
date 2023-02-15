        ////배열뒤집기
        function solution(num_list) {
            var answer = num_list.reverse();
            
            return answer;
        }

        //배열 곱하기
        function solution(numbers){
                var answer = numbers.map(n => n*2);
                return answer;
            }

        ////배열 원소 길이구하기
        function solution(strlist) {
            return strlist.map((el) => el.length) 
        }

        // 피자 나눠먹기
            // Math.floor() : 소수점 이하를 버림한다.
            // Math.ceil() : 소수점 이하를 올림한다.
            // Math.round() : 소수점 이하를 반올림한다.
        function solution(slice, n) {
            return Math.ceil(n / slice)
        }

        //삼각형의 완성조건
        function solution(sides) {
            sides.sort()
            if(sides[2] < sides[1]+sides[0]){
                return 1
            }
            else{
                return 2
            }
        }
        
        //편지 몇글자인지
        function solution(message) {
            return message.length*2
        }
        //점의 위치 구하기
        function solution(dot) {

        if(dot[0] < 0 && dot[1] <0){
            return 3
        };
        if(dot[0] < 0 && dot[1] >0){
            return 2
        }
        if(dot[0] > 0 && dot[1] <0){
            return 4
        }
        return 1
        }

        //문자열 뒤집기
        function solution(my_string) {
            var answer = my_string.split('').reverse('').join('');
            return answer;
        }


        //최댓값 만들기
        function solution(numbers) {
            numbers.sort((a, b)=> b -a );
            var answer = numbers[0]*numbers[1];
            return answer;
        }


        //특정문자 모두 제거
        function solution(my_string, letter) {
            var answer = my_string.replaceAll(letter, '');
            return answer;
        }