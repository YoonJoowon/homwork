function solution(board, moves) {
    //   board = [
    // [0,0,0,0,0] 431132 4
    // [0,0,1,0,3] 15351214
    // [0,2,5,0,1]
    // [4,2,4,4,2]
    // [3,5,1,3,1]
    // ]
  
      let n = board.length;
      const result = [];
      let answer = 0;
      
      for(i = 0; i < moves.length; i++){
        for (j = 0; j < n; j++) {
          // board[j][moves[i]-1];
          if (board[j][moves[i] - 1] !== 0) {
            if (board[j][moves[i] - 1] === result[result.length - 1]) {
              result.pop();
              answer += 2;

              console.log(answer);
            } else {
              result.push(board[j][moves[i] - 1]);
            }

            board[j][moves[i] - 1] = 0;
            break;
          }
        }
      }
      
  //     for(k = 0; k < moves.length -1; k++){
  //         if (result[k] === result[k+1]){
  //             answer += 2;
  //         }        
  //     }
        
      return answer;
  }