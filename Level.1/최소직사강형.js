function solution(sizes) {
  let answer = 0;
  let arr = [];

  for (i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > sizes[i][1]) {
      arr.push(sizes[i]);
    } else {
      arr.push([sizes[i][1], sizes[i][0]]);
    }
  }

  arr.sort();

  let left = [];
  let right = [];

  for (j = 0; j < sizes.length; j++) {
    left.push(arr[j][0]);
    right.push(arr[j][1]);
  }
  answer = Math.max(...left) * Math.max(...right);

  return answer;
}

// 2try
function solution(sizes) {
  let left = [];
  let right = [];

  for (let i = 0; i < sizes.length; i++) {
    sizes[i].sort((a, b) => b - a);
  }

  for (let i = 0; i < sizes.length; i++) {
    left.push(sizes[i][0]);
    right.push(sizes[i][1]);
  }

  left.sort((a, b) => b - a);
  right.sort((a, b) => b - a);

  return left[0] * right[0];
}
