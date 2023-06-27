function solution(nums) {
    let answer = [];
    let choice = nums.length/2;

    nums.map(num => (
        answer.length < choice && !answer.includes(num) ? answer.push(num) : num
        
    ))
    
    
    return answer.length;
}