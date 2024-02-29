function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    for (let j = i + 1; j < phone_book.length; j++) {
      if (phone_book[j].includes(phone_book[i])) {
        return false;
      }
    }
  }
  return true;
}

//2try
function solution(phone_book) {
  phone_book.sort();

  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].includes(phone_book[i])) {
      return false;
    }
  }

  return true;
}

//3try
function solution(phone_book) {
  phone_book.sort();
  // sort 이용하여 순서대로 배열할 때 숫자순서대로 배열하면 같은 문자열 확인이 안됨. 그렇기 때문에 문자 순서대로 배열로 해야함
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }
  // sort 이용했기 때문에 바로 뒤의 배열 문자를 확인만 해서 이중 for문을 굳이 구현 안해도 됨.
  return true;
}
