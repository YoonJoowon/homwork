function solution(brown, yellow) {
  let addCarpet = brown + yellow;
  // 촉 타일> 갯수를 모두 더한 값이 카펫 크기

  for (let i = 0; i < brown; i++) {
    if (addCarpet % i === 0) {
      if ((i - 2) * (addCarpet / i - 2) === yellow) {
        // 가로길이 -2 * 세로길이 -2 한 값이 노란타일 갯수
        // i를 가로길이로 임의 지정했으므로 총 크기에 - i 가 세로길이
        return [addCarpet / i, i];
      }
    }
  }

}
