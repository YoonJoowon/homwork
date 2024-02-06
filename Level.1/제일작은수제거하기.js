function solution(arr) {
  if (arr.length === 1) {
    return [-1];
  }
  // 배열의 길이가 1일때 미리 return  

  let min = Math.min(...arr);
  // 제일 작은 수의 값을 구현 Math.min(...arr);

  return arr.filter((n) => n !== min);
  // fiter((n) => n !==min) 을 활용하여 min을 제외한 값 재 리턴
}