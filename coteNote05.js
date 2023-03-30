// 두 정수 A와 B를 입력받은 다음, A-B를 출력하는 프로그램을 작성하시오.

var fs = require('fs');
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a - b);

// (A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
// (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
// 세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);

console.log((a+b)%c);
console.log( ((a%c)+(b%c))%c );
console.log( (a*b%c) );
console.log( ((a%c)*(b%c))%c );

// 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(Math.floor(a/b));
console.log(a%b);

// 알파벳 소문자, 대문자, 숫자 0-9중 하나가 주어졌을 때, 주어진 글자의 아스키 코드값을 출력하는 프로그램을 작성하시오.

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = (input[0])

console.log(a.charCodeAt(0))

// 두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);
var b = parseInt(input[1]);

if(a>b){
    console.log('>')
}
if(b>a){
    console.log('<')
}
if(a===b){
    console.log('==')
}

// 시험 점수를 입력받아 90 ~ 100점은 A, 80 ~ 89점은 B, 70 ~ 79점은 C, 60 ~ 69점은 D, 나머지 점수는 F를 출력하는 프로그램을 작성하시오.

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);

if(a>=90){
    console.log('A')
}
else if(a>=80){
    console.log('B')
}
else if(a>=70){
    console.log('C')
}
else if(a>=60){
    console.log('D')
}
else{
    console.log('F')
}

// 사분면 고르기
// const fs = require('fs');
// const [x, y] = fs.readFileSync(0).toString().trim().split('\n').map(Number);

// if(x > 0) y > 0 ? console.log(1) : console.log(4)
// if(x < 0) y > 0 ? console.log(2) : console.log(3)


// 사분면 고르기 (2)
const input = require('fs').readFileSync(0).toString().split('\n');
const [x, y] = input;

if (x > 0) {
  console.log(y > 0 ? 1 : 4);
} else {
  console.log(y > 0 ? 2 : 3);
}

// 윤년
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]);

if(a%4===0 && a%100 !==0){
    console.log('1')
}
else if(a%4===0 && a%400 ===0){
    console.log('1')
}
else{
    console.log('0')
};

// 손익분기점
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

const margin = c - b;
const count = Math.floor(a / margin) + 1

console.log(margin <= 0 ? -1 : count);

// 알람시계
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
let hour = Number(input[0]);  // Hour
let minute = Number(input[1]);  // Minute

// const hour = Number(input[0]);
// const minute = Number(input[1]);
// const 와 let의 차이

minute -= 45;

if (minute < 0) {
    minute += 60;
    hour--;

    if (hour === -1) {
        hour = 23;
    }
}

console.log(hour + ' ' + minute);

// 별찍기
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
let a = Number(input);

for(let i = 0; i <a; i++){

    let star = "";
    
    for(let j = a - 1; j >= 0; j--){
        star += j <= i ? '*' : ' ';
    }
    
    console.log(star);
}

// N 찍기
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let a = Number(input);

let answer = '';

for (let i = a; i > 0; i--) {
    answer += i + '\n';
}

console.log(answer);

// a+b-8
let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for (let i = 1; i <= input[0]; i++) { //input[0]이 케이스 갯수 T임
    let numbers = input[i].split(' '); //input이 쭉 나열 되는데 input[1],input[2]가 A,B임
                                       //input[0]을 제외하고 이것들을 다시 numbers 라는 배열로 반환
    let num1 = Number(numbers[0]);
    let num2 = Number(numbers[1]);
    
    console.log(`Case #${i}: ${num1} + ${num2} = ${num1 + num2}`);
}

// 합
let n = require('fs').readFileSync('/dev/stdin').toString();

let a = 0;

for(let i = 1; i <= n; i++){
    a += i;

}

console.log(a);

// x보다 작은수
let input = require('fs').readFileSunc('/dev/srdin')/toString().split('\n');


//첫째 줄의 10, 5를 N, X에 담는다.
let numbers = input[0].split(' ');
let N = Number(numbers[0]); //10
let X = Number(numbers[1]); //5

//둘째 줄의 수열 A
let A = input[1].split(' ');

//결과를 담을 변수
let result= '';

for(let i=0; i<N; i++){
    if(Number( A[i]) < X ){
        result += A[i] + ' ';
    }
}
console.log(result);

// 별찍기 -7
// const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

// const N = Number(input)

// /* 2. 1부터 N-1까지 공백과 별 찍기 */
// for(let i=1; i < N; i++){
//     let blank = ' '.repeat( (N-i) );
//     let stars = '*'.repeat( i+(i-1) );
//     console.log( blank + stars );
// }

// /* 3. N부터 1까지 공백과 별 찍기 */
// for(let j=N; j > 0; j--) {
//     let blank = ' '.repeat( (N-j) );
//     let stars = '*'.repeat( j+(j-1) );
//     console.log( blank + stars );
// }











