function solution(t, p) {
  let answer = 0;

  for (i = 0; i < t.length - p.length + 1; i++) {
    let str = t.slice(i, i + p.length);

    if (str < p + 1) {
      answer++;
    }
  }

  return answer;
}
