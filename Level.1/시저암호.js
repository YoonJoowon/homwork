function solution(s, n) {
  var answer = "";
  var words = [];
  var wordsChange = [];

  // console.log(s.charCodeAt())

  for (let i = 0; i < s.length; i++) {
    let num = s[i].charCodeAt();
    num += n;

    if (num === 123) {
      num = 65;
    }
    words.push(num);
    // words.split(" ")
  }

  // console.log(words);

  for (let i = 0; i < s.length; i++) {
    // words.split("1");
    wordsChange.push(String.fromCharCode(words[i]));
    // answer.join()
  }
  console.log(wordsChange);

  return answer;
}

// 2try
function solution(s, n) {
  var chars =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXY";
  return s
    .split("")
    .map((e) => chars[chars.indexOf(e) + n])
    .join("");
}
