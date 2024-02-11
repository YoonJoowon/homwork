function solution(s) {
  let answer = "";
  let words = s.split(" ");

  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      if (j % 2 === 0) {
        answer += words[i][j].toUpperCase();
        // .toUpperCase() 사용 시 대문자로 교체
      } else {
        answer += words[i][j].toLowerCase();
        // .toLowerCase() 사용 시 소문자로 교체
      }
    }

    if (i < words.length - 1) {
      answer += " ";
    }
  }
  return answer;
}
