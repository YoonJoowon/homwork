function solution(numbers) {
  //     0~9 까지 일부의 정수 배열 numbers
  //     없는 숫자를 모두 찾아 더해야 함
  let answer = 45;

  for (let i = 0; i < numbers.length; i++) {
    answer -= numbers[i];
  }

  return answer;
}
