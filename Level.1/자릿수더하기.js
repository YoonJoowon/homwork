function solution(n) {
  let answer = 0;
  let arr = String(n);

  console.log(arr);

  for (i = 0; i < arr.length; i++) {
    answer += Number(arr[i]);
  }

  return answer;
}