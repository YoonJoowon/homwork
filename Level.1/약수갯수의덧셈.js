function solution(left, right) {
  let answer = 0;

  for (let current = left; current <= right; current++) {
    let num = 0;

    for (let i = 1; i <= current; i++) {
      if (current % i === 0) {
        num++;
      }
    }

    if (num % 2 === 0) {
      answer += current;
    } else {
      answer -= current;
    }
  }

  return answer;
}
