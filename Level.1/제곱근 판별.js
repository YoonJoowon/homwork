// 1 try
function solution(n) {
  for (let i = 0; i < n; i++) {
    if (i * i === n) {
      return (i + 1) * (i + 1);
    }
  }

  return -1;

  //     n이 양의 정수 x의 제곱이라면 x+1 리턴
  //     n이 양의 정수 x의 제곱이 아니라면 -1리턴
}

// 2 try
function solution(n) {
  for (let i = 0; i < n + 1; i++) {
    if (i * i === n) {
      return (i + 1) * (i + 1);
    }
  }

  return -1;

}
