function solution(t, p) {
  let answer = 0;
  for (i = 0; i < t.length - p.length + 1; i++) {
    let str = t.slice(i, i + p.length);
    if (str < p + 1) {
      answer++;
    }
  }

  return answer;
}

// 2 try

function solution(t, p) {
    let count = 0;
    for(let i=0; i<=t.length-p.length; i++) {
        let value = t.slice(i, i+p.length);
        if(+p >= +value) count++;
        // 문자열 앞에 + 를 붙혀주면 parseint 가 없어도 됨
    }
    return count;
}
