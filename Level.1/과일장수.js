function solution(k, m, score) {
  let answer = 0;
  let arr = [];

  // score 를 오름차순으로 재 배열
  score.sort(function (a, b) {
    return b - a;
  });

  // arr 배열에 m 개만큼 큰 수 대로 담고 초과되면 break
  for (let i = 0; i < score.length; i++) {
    arr.push(score[i]);
    if (arr.length % m === 0) {
      // arr 배열의 제일 작은수 * m 의 값을 answer에 ++ 을 반복
      answer += arr[m - 1] * m;
      arr.splice(0, m);
    }
  }

  return answer;
}
