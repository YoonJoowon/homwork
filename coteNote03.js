//문자 반복 출력하기
function solution(my_string, n) {
    var answer = '';
    
    for(i=0; i < my_string.length; i++){
        answer += my_string[i].repeat(n);
    }
    
    return answer;
}

//중앙값 구하기
function solution(array) {
    array.sort((a,b)=>a-b)
    //오름차순 정렬
    
    var answer = array[Math.floor(array.length/2)] ;
    
    return answer;
}

//짝수는 싫어요
function solution(n) {
    var answer = [];
    
    for(i=0; i<=n; i++){
        if(i%2===1){
            answer.push(i);
        }
        
    }
    
    return answer;
}

//배열의 유사도
function solution(s1, s2) {
    var answer = 0;

    for(i=0; i<s1.length; i++){
        for(j=0; j<s2.length; j++){
            if(s1[i]===s2[j]){
                answer++;
            }
        }
    }
    return answer
}

//옷가게 할인받기
function solution(price) {
    var answer = 0;
    
    if(price < 100000){
        answer = ~~price
    }
    
    if(price >= 100000){
        answer = ~~(price - price*5/100)
    }   
    if(price >= 300000){
        answer = ~~(price - price*10/100)
    }
    if(price >= 500000){
        answer = ~~(price - price*20/100)
    }

    return answer;
}

//문자열 속 문자열 찾기
function solution(str1, str2) {

    return str1.includes(str2) ? 1:2;

    }

//자릿수 더하기
function solution(n) {

return String(n).split('').reduce((acc, cur) => acc + cur*1, 0)

        // 문자열로 바꾸고, 배열로 쪼갠다음, 값을 계속 더해준다
}
function solution(n) {
    var answer = 0;

    answer = String(n).split('').reduce((acc, cur)=> acc + Number(cur), 0);
    
    return answer;
}

//제곱수 판별하기
function solution(n) {
    var answer = 0;
    
    for(i=0; i<n; i++){
        if(i*i===n){
            return 1
        }
    }
    return 2
}

//개미 군단
function solution(hp) {
    var answer = 0;
    
    answer = ~~(hp/5) + ~~(hp%5/3) + ~~(hp%5%3/1)

    return answer;
}

//모음제거
function solution(my_string) {
    
    return my_string.replace(/['a','e','i','o','u']/g, '')
}