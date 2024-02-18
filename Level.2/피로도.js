function solution(k, dungeons) {
  let answer = 0;
  // 방문했는지 확인하기 위한 배열
  const visited = new Array(dungeons.length).fill(false);
  function DFS(hp, L) {
    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && dungeons[i][0] <= hp) {
        visited[i] = true;
        DFS(hp - dungeons[i][1], L + 1);
        visited[i] = false;
      }
    }
    console.log(hp, L);
    answer = Math.max(answer, L);
  }
  DFS(k, 0);
  return answer;
}
