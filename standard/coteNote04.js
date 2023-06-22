//숨어있는 숫자의 덧셈
function solution(my_string) {
    var answer = 0;
    
    return my_string.match(/[0-9]/g,'').map(Number).reduce((a,c) => a+c, 0);
    
    return answer;
}

//가위 바위 보
function solution(rsp) {
    var answer = '';
    
    rsp.split('');
    
    for(i=0; i<rsp.length; i++){
        if(rsp[i]==='0'){
            answer += '5';
        }
        else if(rsp[i]==='2'){
            answer += '0';
        }
        else if(rsp[i]==='5'){
            answer += '2';
        };
    };
    
    return answer;
}

//대문자와 소문자
function solution(my_string) {

    let arr = [];
    
    for(i=0; i<my_string.length; i++){
        
        if(my_string[i]===my_string[i].toUpperCase()){
            arr.push(my_string[i].toLowerCase())
        }
        
        else {
            arr.push(my_string[i].toUpperCase())
        }
    }
    return arr.join('');
}

//암호 해독
function solution(cipher, code) {
    let arr = [];

    for(i=0; i<cipher.length; i++){
        if((i+1)%code===0){
        arr.push(cipher[i]);
        }
    }
    
    return arr.join("");
}

//주사위의 개수
function solution(box, n) {
    let answer = Math.floor((box[0]/n))*Math.floor((box[1]/n))*Math.floor((box[2]/n))
    return answer;
}

//문자열 정렬하기
function solution(my_string) {
    var answer = [];
    
    answer = my_string.match(/[0-9]/g).map(Number).sort((a,b)=>a-b)

    return answer;
}

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