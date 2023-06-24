function solution(array, commands) {
  let answer = [];

  for (i = 0; i < commands.length; i++) {
    let commandsArray = commands[i];
    // console.log(commandsArray)

    let sliceArray = array.slice([commands[i][0] - 1], [commands[i][1]]);
    sliceArray.sort(function (a, b) {
      return a - b;
    });

    answer.push(sliceArray[commandsArray[2] - 1]);
  }
  return answer;
}
