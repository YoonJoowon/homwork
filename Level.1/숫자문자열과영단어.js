function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    //numbers split 하게 되면 'one4seveneight'의 경우 ['',4seveneight] 로 나눠지고

    console.log(answer);

    answer = arr.join(i);
    //해당 빈 자리에 join 을 통해 i 가 채워지게 되며 합쳐짐
  }

  return Number(answer);
}
