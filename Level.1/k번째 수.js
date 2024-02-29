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

//2try
function solution(array, commands) {
  let answer = [];

  for (let i = 0; i < commands.length; i++) {
    let arr = array.slice(commands[i][0] - 1, commands[i][1]);

    arr.sort((a, b) => a - b);

    answer.push(arr[commands[i][2] - 1]);
  }

  return answer;
}
