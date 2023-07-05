
function solution(a, b) {
    const yoil = ['MON','TUE','WED','THU','FRI','SAT', 'SUN'];
    const month = [31,29,31,30,31,30,31,31,30,31,30,31]; 
    let day = b+3; 
    for(let i = 0; i < a-1; ++i){
        day += month[i];
    }
    return yoil[day%7];
}

// function solution(a, b) {
//     return new Date(2016, a-1, b).toString().slice(0,3).toUpperCase();
// }