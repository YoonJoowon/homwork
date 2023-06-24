function solution(progresses, speeds) {
  let answer = [];

  for (i = 0; i < progresses.length; i++) {
    let sum = 0;

    for (j = 0; j < progresses.length; j++) {
      progresses[i] += speeds[i];
      console.log(progresses[i]);

      if (progresses[i] >= 100) {
        sum += 1;

        // console.log(sum)
        break;
      }
    }
    // answer.push[]
  }

  return answer;
}
