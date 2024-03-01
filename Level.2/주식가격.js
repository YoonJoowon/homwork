function solution(prices) {
  const answer = [];

  for (let i = 0; i < prices.length; i++) {
    let stack = 0;

    for (let j = i + 1; j < prices.length; j++) {
      stack++;
      // 다음 주식 공지 전까지 무조건 1초는 버틴걸로 보기 때문에 stack 을 ++해줘야함
      if (prices[i] > prices[j]) {
        // 그래서 조건을 가격이 나려갔으면 break 끊어줘야함
        break;
      }
    }

    answer.push(stack);
  }

  return answer;
}
