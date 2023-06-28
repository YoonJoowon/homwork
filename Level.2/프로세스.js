function solution(priorities, location) {
    let answer = 0;
  
    const array = priorities.map((process,index) => {
      return {process, index};
    })
  
    while(array.length){
      const queue = array.shift();
      let hasHigherPriority = false;
        
      array.forEach((element) => {
        if (element.process > queue.process) {
          hasHigherPriority = true;
        }
      });
  
        
      if (hasHigherPriority) {
        array.push(queue);
      // console.log(queue)
      } else {
        answer++;
        if (queue.index === location) break;
      }
    }
      
    return answer;
  }
  
  // function solution(priorities, location) {
  //     let answer = 0;
      
  //     const arr = priorities.map((pro,index) => {
  //         return {pro, index}
  //     })
      
  //     arr.sort(function(a, b){
  //       return b.pro - a.pro;
  
  //     });   
  //     console.log(arr)
      
  //     for(i = 0; i < priorities.length; i ++){
          
  //     }     
      
  //     return answer;
  // }
      
      
  //     for(i = 0; i < arr.length; i ++){
  
  //         if(arr[0].pro < arr[i].pro){
  //             arr.shift();
  //             sort.push(arr[0])
  //         }    
  //     }
      
  //     while(sort.length === priorities.length){
  //          for(i = 0; i < arr.length; i ++){
  
  //             if(arr[0].pro < arr[i].pro){
  //                 arr.shift();
  //                 sort.push(arr[i])
  //             }    
  //         }
      
  // }
      
      
      