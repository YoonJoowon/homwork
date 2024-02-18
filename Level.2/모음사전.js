function solution(word) {
  var answer = word.length;
  const gathers = "AEIOU";
  const maxNums = [781, 156, 31, 6, 1];

  for (let i = 0; i < word.length; i++) {
    const idx = gathers.indexOf(word[i]);
    answer += idx * maxNums[i];
  }

  return answer;
}
