function solution(n, m) {
  var answer = [];

  // m 의 약수 구해서 배열로
  let arr1 = [];
  for (let i = 0; i < m; i++) {
    if (m % i == 0) {
      arr1.push(i);
    }
  }

  // 배열안에 n이 있는 최소의 수 가 답1
  for (let i = 0; i < arr1.length; i++) {
    if (n === arr1[i]) {
      answer.push();
    }
  }
  // n을 계속 1개씩 높은 수로 곱하고, 만약 m이상이되면 m도 곱해주기

  return answer;
}

function solution(n, m) {
  var answer = [];

  // 처음부터 해서 n 과 m 을 나눴을 때 나머지 0 인 최소 수를 구해서 배열에 놓고 braek
  for (let i = m; i > 0; i--) {
    if (m % i === 0 && n % i === 0) {
      answer.push(i);
      break;
    }
  }

  for (let i = n; i <= n * m; i++) {
    if (i % n === 0 && i % m === 0) {
      answer.push(i);
      break;
    }
  }

  return answer;
}
