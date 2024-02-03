function solution(phone_number) {
  const maskedPart = "*".repeat(phone_number.length - 4);
  // repeat(4) 는 4번 반복
  const lastFourDigits = phone_number.slice(-4);
  // slice 음수는 뒤에서 부터 순서만큼 분리
  // slice(2,4) 와 같이 중간 분리도 가능
  // slice(4) 는 4번째 부터 끝까지 분리
  return maskedPart + lastFourDigits;
}
