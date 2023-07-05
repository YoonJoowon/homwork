const ingredient = [1, 2, 3, 1, 2, 3, 1];
let stack = [];
let answer = 0;

console.log("for...of 반복문");
for (let i of ingredient) {
  stack.push(i);

  if (stack.slice(-4).join('') === '1231') {
    stack.splice(-4);
    answer++;
  }
}

console.log("결과: ", answer); // 결과: 2

stack = [];
answer = 0;

console.log("전통적인 for 반복문");
for (let i = 0; i < ingredient.length; i++) {
  stack.push(ingredient[i]);

  if (stack.slice(-4).join('') === '1231') {
    stack.splice(-4);
    answer++;
  }
}

console.log("결과: ", answer); // 결과: 3