<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <script>
        //세균 증식
        function solution(n, t) {
            var answer = 0;
            
            answer = n*2**t;
            
            return answer;
        }

        //n의 배수고르기
        function solution(n, numlist) {
            return numlist.filter(num => num % n === 0);
        }

        function solution(n, numlist) {
            return numlist.filter(i => i % n === 0);
        }



        
    </script>
    
</body>
</html>