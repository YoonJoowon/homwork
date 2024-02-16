function solution(numbers) {
  var arr = [];

  // console.log(numbers);

  // for 문으로 하나씩 더해주고 answer 배열에다가 하나씩 담아주기
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      arr.push(numbers[i] + numbers[j]);
    }
  }

  arr.sort((a, b) => a - b);
  // console.log(arr)

  const answer = [...new Set(arr)];
  // [...new Set(arr)] 에서 Set 객체를 배열로 변환. 전개연산자(...) 를 사용하여 set 객체의 각 요소를 새로운 배열로 가져옴
  // Set() 은 중복된 객체 허용 안함

  return answer;
}

// 2try
function solution(numbers) {
  var answer = [];
  //들어온 배열의 요소를 확인한다.
  //배열의 두개 요소를 뽑아 덧셈한 모든 경우의 수를 구한다.
  //중복된 값은 제거한다.
  //배열값을 리턴한다.
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (answer.indexOf(numbers[i] + numbers[j]) === -1) {
        // -1 은 해당값이 없다면으로 해석
        answer.push(numbers[i] + numbers[j]);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}
