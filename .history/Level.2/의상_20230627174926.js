function solution(clothes) {
    const clothsObj = {};
      
    clothes.forEach((cloth) =>
      clothsObj[cloth[1]] ? clothsObj[cloth[1]]++ : (clothsObj[cloth[1]] = 1)
    );
  
      
    let answer = 1;
    for (let key of Object.keys(clothsObj)) {
      answer *= clothsObj[key] + 1;
    }
      console.log(Object.keys(clothsObj))
  
    //아무것도 입지 않는 경우 빼기
    return answer - 1;
  }