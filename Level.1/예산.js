function solution(d, budget) {
  //     d는 부서별로 신청한 금액
  //     budget은 예산
  //     최대 몇개 부서에 물품 지원

  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    budget -= d[i];
    if (budget < 0) {
      return i;
    }
  }

  return d.length;
}
