function solution(k, score) {
    let answer = [];
    let arr = []; 
    // arr 배열에 score를 하나씩 받고 작은수대로 정렬
    for (let i = 0; i < score.length; i ++){
        arr.push(score[i]);    
        arr.sort(function(a, b){
          return a - b;
        });
        
        // 만약 arr 배열의 길이가 k개가 넘으면 제일 작은 것 하나씩 answer 배열에 담음
        if(arr.length > k){
            arr.shift();            
            answer.push(arr[0]);
        } else{
            answer.push(arr[0]);
        }
    }   
    
    return answer;
}