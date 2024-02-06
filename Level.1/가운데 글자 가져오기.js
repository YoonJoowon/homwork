function solution(s) {
  let answer = "";

  let len = s.length / 2;

  // console.log(len);

  if (len % 2 === 0) {
    answer += s[len - 1];
    answer += s[len];
    // answer += s[len];
    return answer;
  }
  answer += s[len - 0.5];
  return answer;
}

// 2 try
function solution(s) {
  let answer = "";
  let len = Math.floor(s.length / 2);

  // console.log(len);

  if (s.length % 2 === 0) {
    answer += s[len - 1];
    answer += s[len];
  } else {
    answer += s[len];
  }

  return answer;
}
