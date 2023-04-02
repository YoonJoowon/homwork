// 단어의 개수
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')

console.log(input[0] === "" ? 0 : input.length) // 또한 문자열은 공백을로 시작하거나 끝날 수 있다..


// 문자열 반복
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let T = Number(input[0]);
let answer = ''; //답을 넣어줄거 생성

for(let i = 1; i < T; i++){

    let arr = input[i].split(' '); //input[i]는 케이스 제외한 배열 나열, split으로 다 쪼개줌
    let str = arr[i];
    for(let j = 0; j < arr[1].length; j++){ //arr[1].length 는 문자열의 길이
        answer += str[j].repeat(arr[0]);
    }
    answer += '\n'
}


// 상수
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')

let num1 = Number(input[0].split('').reverse().join(''));
let num2 = Number(input[1].split('').reverse().join(''));

console.log(num1 > num2 ? num1 : num2);


// 빠른 A+B
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let answer = '';

for(let i = 1; i <= input[0]; i++) {
    tmp = input[i].split(' ') //input[1] = 1 , 1 있으면 두개를 가지고 다시 배열 즉 input[1]의 2개 = tmp[1]
    answer += Number(tmp[0]) + Number(tmp[1]) + '\n'
}

console.log(answer)


// 전자레인지
let input = require('fs').readFileSync('/dev/stdin').toString().trim()

const a = 300;
const b = 60;
const c = 10;

let answer = '';
let time = input;

answer += `${parseInt(time / a)} `;
time = time % a;

answer += `${parseInt(time / b)} `;
time = time % b;

answer += `${parseInt(time / c)}`;
time = time % c;

answer = time !== 0 ? -1 : answer

console.log(answer);


// 뒤집기
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('')

let setNumber = 0, answer_cnt1 = 0, answer_cnt2 = 0;

for(let i = 0; i < input.length; i++){ //input.length는 이 문자열의 길이
    if(setNumber !== parseInt(input[i])){ //input[i] = 0101101010 을 하나 씩 가져옴
        // 0 이 아니라면 실행
        if(i===0){ //i가 0이면 실행 - 왜냐하면 1일로 바뀔때를 구해야 하니까
            answer_cnt1++;
        }else{
            if(input[i] !== input[i - 1]){ 
            // 0일경우를 빼고 1부터카운트가 되는데 뒤집어야하니까 뒤에가 같지않을 때만 카운트
                answer_cnt1++;
            }
        }
    }
}
setNumber = 1; //0일때구하고 1일때 구함
for(let i = 0; i < input.length; i++){
    if(setNumber !== parseInt(input[i])){
        if(i===0){
            answer_cnt2++;
        }
        else{
            if(input[i] !== input[i - 1]){
                answer_cnt2++;
            }
        }
    }
}

console.log(Math.min(answer_cnt1,answer_cnt2)) //둘중 더 작은것을 출력


// 그룹 단어 체커
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let numCase = Number(input[0]); //case가 오류 날 수도있어서 이름 x
let answer = 0;


for(let i = 1; i <= numCase; i++){
    const world = input[i]; //단어
    const letter = [];
    let count = true;

    for (let j = 0; j < world.length; j++){
        if(letter.indexOf(world[j]) === -1){ //word[j] 가 즉 letter 안에 그 알파벳이 없을 경우 
            letter.push(world[j]); //letter에 그 알파벳을 추가한다
        } else {
            if(letter.indexOf(world[j]) !== letter.length -1){ //그 알파벳이 letter안과 알파벳의 길이-1 이면 즉시 멈춘다
                count = false;
                break;
            }
        }
    }

    if(count){
        answer += 1;
    }
}
console.log(answer);


// 크로아티아 알파벳
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
input = input[0]; //문자열

function answer(input){
    const croatia = ['c=','c-','dz=','d-','lj','nj','s=','z='];
    let answer = 0;
    for(let i = 0; i < croatia.length; i++){
        // while을 써서 조건 하나만 주고 반복입력
        while(input !== input.replace(croatia[i], '')){ //replace는 첫번째 인자를 두번째 인자로 바꿔주는 역할을 함
            answer += 1; //input의 coroatia[i]의 갯수만큼 answer에 더해줌 , replace로 바꿔주는건 중복이 안되게하기위해
            input = input.replace(croatia[i], ' ');
        }

    }
    return answer += input.split(' ').join('').length; //croatia를 공백으로 바꿔준 것을 다시 배열로 쪼개고 합쳐줌
}

console.log(answer(input))


