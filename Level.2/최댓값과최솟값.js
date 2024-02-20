function solution(s) {
  s = s.split(" ");
  console.log(s);
  let max = Math.max(...s);
  let min = Math.min(...s);

  return min + " " + max;
}
