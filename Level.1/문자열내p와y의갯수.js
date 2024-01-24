// 1 try
function solution(s){
  let answer = true;
  let arr = s.toString();
  let sum = 0;
  // console.log(arr.length);
  
  for(let i = 0; i<arr.length-1; i++){
      if(arr[i]==='p'){
          sum += 1;
      }     
  }
  
  if(sum % 2 === 0){
      return false;
  } else{
      return true;
  }
}

// 2 try

function solution(s){
  let answer = true;
  let arr = s.toString();
  let sumP = 0;
  let sumY = 0;
  console.log(arr.length);
  
  for(let i = 0; i<arr.length; i++){
      if(arr[i] ==='p'|| arr[i] ==='P'){
          sumP += 1;
      }
  }
  
  for(let i = 0; i<arr.length; i++){
      if(arr[i] === 'y' || arr[i] === 'Y'){
          sumY += 1;
      }
  }  
  
  if(sumY === sumP){
      return true;
  } else {
      return false;
  }
}

