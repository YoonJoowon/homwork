function solution(absolutes, signs) {
    let answer = 0;
    
    for (let i = 0; i < signs.length; i++){

        if(true === signs[i]){
            answer += absolutes[i];
        }
        if(false === signs[i]){
            answer -= absolutes[i];
        }
    }
    
    return answer;
}

