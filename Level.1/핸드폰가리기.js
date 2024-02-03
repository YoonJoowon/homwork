function solution(phone_number) {
  const maskedPart = "*".repeat(phone_number.length - 4);
  const lastFourDigits = phone_number.slice(-4);
  return maskedPart + lastFourDigits;
}
