function solution(nums) {
  let answer = [];
  let choice = nums.length / 2;

  nums.map((num) =>
    answer.length < choice && !answer.includes(num) ? answer.push(num) : num
  );

  return answer.length;
}

//2try
function solution(nums) {
  let max = nums.length / 2;
  let arr = [...new Set(nums)];

  console.log(arr);

  return arr.length > max ? max : arr.length;
}

//3try
