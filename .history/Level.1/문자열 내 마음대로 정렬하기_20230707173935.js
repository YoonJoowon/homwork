function solution(strings, n) {
    var answer = [];
        
    strings.sort();
    
    // console.log(strings)
    let alpabets = strings.map(x => x.charAt(n)).sort();    
    
    for(let i = 0; i < alpabets.length; i++){
        
        for(let j=0; j < strings.length; j++){
        console.log(alpabets)
        console.log(strings)        
            if(strings[j].charAt(n) === alpabets[i]){
                // == 은 string 1이랑 int 1이랑 비교 했을때 맞다고 함
                // === 은 int string 까지 
                answer.push(strings[j]);   
                strings.splice(j, 1);
                
                console.log(strings)
                console.log(answer)
                break;
            }
        }
    }
    return answer;
}