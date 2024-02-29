function solution(answers) {
  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const result = [0, 0, 0];
  const length = answers.length;

  for (let i = 0; i < length; i++) {
    if (one[i % 5] === answers[i]) result[0]++;
    if (two[i % 8] === answers[i]) result[1]++;
    if (three[i % 10] === answers[i]) result[2]++;
  }

  const answer = [];

  const maxValue = Math.max(...result);
  let index = 0;
  for (let i = 0; i < 3; i++) {
    if (maxValue === result[i]) {
      answer[index] = i + 1;
      index++;
    }
  }

  return answer;
}

//2try
function solution(answers) {
  let answer = [];
  let one = "12345"; //5
  let two = "21232425"; //8
  let three = "3311224455"; //10
  const arr = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == one[i % 5]) arr[0]++;
    if (answers[i] == two[i % 8]) arr[1]++;
    if (answers[i] == three[i % 10]) arr[2]++;
    // 여기서 '==' 하는 이유는 위에 문자열로 정렬하고 아래는 배열형식이기 때문에 type의 제한을 '==='를 쓰지않아서 풀어줌
  }

  let max = Math.max(...arr);

  console.log(max);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === max) {
      answer.push(i + 1);
    }
  }

  return answer;
}
