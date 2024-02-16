function solution(s) {
  var answer = [];
  var arr = [];

  for (let i = 0; i < s.length; i++) {
    arr.push(s[i]);

    for (let j = 0; j < arr.length; j++) {
      if (s[i] !== arr[j]) {
        answer.push(-1);
      } else if (s) {
        answer.push(i);
      }

      // if(s[i] === s[j]){
      //     answer.push(j);
      // } else {
      //     answer.push(-1);
      // }
    }
  }

  // 새로운 배열에 해당 알파벳이 아무것도 없다면 answer에 -1 담기

  // 새로운 배열에 해당 알파벳이 있다면 배열 차이 많큼 숫자 answer에 담기

  return answer;
}

// 2try
function solution(s) {
  var answer = [];
  var arr = [];

  // 해당 순서 알파벳이 왼쪽으로 숫자를 낮춰가며 있는것을 감지 만약 없다면 -1 있다면 넘어간 만큼 숫자 배열
  //     for(let i = 0; i < s.length; i++){

  //     }

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (s[i] === arr[j]) {
        arr.push(-1);
      } else if (s) {
      }
    }
  }

  return answer;
}

// 3try
function solution(s) {
  let answer = [];
  let arr = [];

  for (let i = 0; i < s.length; i++) {
    if (!arr.includes(s[i])) {
      answer.push(-1);
      arr.push(s[i]);
    } else {
      let lastIndex = 0;
      for (let j = arr.length - 1; j >= 0; j--) {
        if (arr[j] === s[i]) {
          lastIndex = j;
          break;
        }
      }
      answer.push(i - lastIndex);
      arr.push(s[i]);
    }
  }

  return answer;
}
