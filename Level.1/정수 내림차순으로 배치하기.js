function solution(n) { 
  return Number(n.toString().split('').sort((a, b) => b-a).join(''))   
  // tostring 문자열 split 하나씩 쪼갬 sort 로 내림차순 배치 join 문자 합치기
}