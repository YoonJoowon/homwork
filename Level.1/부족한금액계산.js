function solution(price, money, count) {
  // price는 놀이공원 탄 갯수

  // money는 있는 돈

  // count는 price 값 배수로 받기

  // 금액 부족한 만큼 return 안부족하면 0 return

  for (let i = 1; i <= count; i++) {
    money -= price * i;
  }

  if (money >= 0) {
    return 0;
  } else {
    return money * -1;
  }
}
