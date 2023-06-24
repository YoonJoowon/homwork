function solution(name, yearning, photo) {
  let answer = [];
  let value = {};

  name.forEach((a, b) => {
    value[a] = yearning[b];
    // console.log (value)
  });

  for (i = 0; i < photo.length; i++) {
    let photoname = photo[i];
    let sum = 0;

    for (k = 0; k < photoname.length; k++) {
      if (value[photoname[k]]) {
        sum += value[photoname[k]];
        // console.log(sum)
      }
    }

    answer.push(sum);
  }
  return answer;
}
