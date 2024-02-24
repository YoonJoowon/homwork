function solution(n) {
  let answer = 1;
  for (let i = 1; i < n; i++) {
      let tmp = 0;
      for (let j = i; j < n; j++) {
          tmp += j;
          if (tmp >= n) {
              if (tmp === n) answer++;
              break;
          }
      }
  }
  return answer;
}