function solution(s) {
  //"3people unFollowed me"	"3people Unfollowed Me"
  // "for the last week" "For The Last Week"

  let word = s.split(" ");
  let word2 = word
    .map((n) => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase())
    .join(" ");

// map은 배열 만듬. 첫번째 문자 charAt(0) 을 통해서 대문자바꾸기 , slice(1) 로 뒤에 끝까지 다 소문자로 바꾸고 join 합치기

  return word2;
}
