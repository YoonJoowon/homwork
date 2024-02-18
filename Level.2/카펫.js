function solution(brown, yellow) {
  let addCarpet = brown + yellow;

  for (let i = 0; i < brown; i++) {
    if (addCarpet % i === 0) {
      if ((i - 2) * (addCarpet / i - 2) === yellow) {
        return [addCarpet / i, i];
      }
    }
  }

}
