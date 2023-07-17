function solution(food) {
  let answer = "";
  // food의 첫번째 배열 2를 나눈 나머지 값 만큼 계속해서 answer 에 담기
  for (i = 1; i < food.length; i++) {
    let cnt = Math.trunc(food[i] / 2);

    for (j = 0; j < cnt; j++) {
      // console.log(cnt)
      let str = i;
      answer += str;
    }
  }
  // 0도 담기
  answer += "0";

  // food의 반대 값들 또한 answer 에 담기
  for (i = 1; i < food.length; i++) {
    let cnt = Math.trunc(food[food.length - i] / 2);

    for (j = 0; j < cnt; j++) {
      let str = food.length - i;

      answer += str;
    }
  }

  return answer;
}
