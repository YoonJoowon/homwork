function solution(s) {
  s = s.split(" ");

  // 공백 기준으로 자름

  let max = Math.max(...s);
  let min = Math.min(...s);

  return min + " " + max;

  // 최댓값 최솟값 Math.max min
}
