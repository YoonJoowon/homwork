function solution(s) {
  let answer = true;
  const arr = s.split("");
  let last = arr.length;
  let stack = 1;

  if (arr[0] == ")") {
    return false;
  }
  if (arr[last - 1] == "(") {
    return false;
  }

  if (last % 2 !== 0) {
    return false;
  }

  for (i = 1; i < last; i++) {
    if (arr[i] == ")") {
      stack -= 1;
    }
    if (arr[i] == "(") {
      stack += 1;
    }
    if (stack < 0) {
      break;
    }
  }

  if (stack !== 0) {
    answer = false;
  }

  return answer;
}
