// 직사각형에서 탈출
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

const x = Number(input[0]);
const y = Number(input[1]);
const w = Number(input[2]);
const h = Number(input[3]);

const array = [x, w-x, y, h-y];
const answer = Math.min(...array);
console.log(answer);


// 네 번째 점
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let arrayX = [];
let arrayY = [];
let x;
let y;
for(let i = 0; i < 3; i++){
    arrayX.push(Number(input[i].split(" ")[0])); //arrayX라는 빈배열에 하나씩 넣겠다. input[i]는 x하나씩 3개를 문자열 배열로 바꿔서 넣음
    arrayY.push(Number(input[i].split(" ")[1]));
}
arrayX = arrayX.sort(); //1,2,3, 이렇게 정렬
arrayy = arrayY.sort();

x = arrayX[1] === arrayX[0] ? arrayX[2] : arrayX[0];
y = arrayY[1] === arrayY[0] ? arrayY[2] : arrayY[0];

console.log(`${x} ${y}`);


// 직각삼각형
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function answer(input){
    for(let i = 0; i < input.length -1; i +=1){
        input[i].sort((a,b)=>a-b); //오름차순 정렬
        [a,b,c] = input[i];
        a**2 + b**2 === c**2 ? console.log('right') : console.log('wrong');
    }
}

answer(input)


// 택시 기하학
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
 
const PI = Math.PI // 파이값
 
const r = parseInt(input); //반지름값
 
    // 원의 넓이
console.log((PI * r * r).toFixed(6)) //toFixed(6) 는 6번째 자리까지 반올림
 
    // 택시 기하학, 맨하튼 거리 원의 넓이
console.log((2 * r * r).toFixed(6))


// ACM 호텔
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const A = parseInt(input.shift()); // 첫번째 값 제거
    // 순서= H호텔층수 W각층방수 N몇번째손님

for(let i = 0; i < A; i++){
   const arr = input[i].split(' ')
   const H = parseInt(arr[0]); //호텔 층수
   const N = parseInt(arr[2]); // 몇번째 손님인지
   if(N % H === 0){ //꼭대기층
      fl = H; // 층
      ho = N / H; // 호수
   }else if(N % H !== 0){
    fl = N % H;
    ho = Math.floor(N / H)+1;
  }
  if(ho < 10){ho = `0${ho}`;}
   console.log(`${fl}${ho}`);
 
}


// 팩토리얼
const input = require('fs').readFileSync('/dev/stdin').toString();

let answer = 1;

for (let i = 1; i <= input; i++){
    answer *=i;
}
console.log(answer);


// 최댓값
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

let max = Math.max(...input) //input 배열의 모든 요소를 개별적으로 값을 분리시킴 
                            // 개별적으로 분리 시켜놔야 Math.max가 input배열의 가장 큰값을 반환함

console.log(max);
console.log(input.indexOf(max)+1) // indexOf()는 몇 번째에 요소인지를 찾아줌


// 단어의 개수
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

console.log(input[0] === "" ? 0 : input.length);


// 숫자의 개수
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n').map(Number);

let a = parseInt(input[0])
let b = parseInt(input[1])
let c = parseInt(input[2])

let num = String(a*b*c)

for(let i = 0; i <= 9; i++){
    console.log(num.split(i).length -1);
}


// 나머지
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

    //42로 나눈 나머지를 중복 없이 저장할 배열을 생성
    const answer = [];

    //forEach대신 map을 사용해도 된다.
    input.map(x => {
        const num = x % 42;
        
        //indexOf 메서드를 사용해 배열안에 값이 없다면 answer에 넣어준다.
        //일치하는 값이 없으면 -1 을 반환하는 메서드
        if (answer.indexOf(num) === -1) {
            answer.push(num);
        }
    });

console.log(answer.length);


// OX 퀴즈
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num = Number(input[0])

for(let i = 1; i <= num; i++){

    let count = 0;
    let sum = 0;

    for(let j = 0; j < input[i].length; j++){
        if(input[i][j] === "0" ){
            count++;
        }else{
            count = 0;
        }
        sum += count;
    }
    console.log(sum);
}


// 숫자의합
let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num = Number(input[0]);
let num2 = input[1].split("");
let answer = 0;


for(let i = 0; i < num; i++){
    answer += Number(num2[i])
}

console.log(answer);


// 알파벳 찾기
let input = require('fs').readFileSync('/dev/stdin').toString();

const result = [];

for (let i = 97; i <= 122; i++) {
  result.push(input.indexOf(String.fromCharCode(i)));
}

console.log(result.join(" "));


// 문자열 반복
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

    // let case = Number(input[0])
    // let length = Number(input[1])
    // let world = Number(input[2])

    // let worlds = split(world)
let length = Number(input[0]);
let answer = '';

for (let i = 1 ; i <= length; i ++) {
    let arr = input[i].split(' ');
    let str = arr[1];
    for (let j = 0; j < arr[1].length; j++ ) {
        answer += str[j].repeat(arr[0]);
    }
    answer += '\n'
}
console.log(answer)








