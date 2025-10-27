//my approach
//brute force, T.C => O(n^3)
//deosn't pass all testcases

function sum(i, j, arr){
  let sum = 0;
  for(let p=i; p<=j; p++){
    sum+=arr[p];
  }
  return sum;
}
function findSubarrayWithSumK(arr, n, k){
  for(let i=0; i<n; i++){
    for(let j=i; j<n; j++){
      if(sum(i, j, arr)==k){
        return 'Yes';
      }
    }
  }
  return 'No';
}

function takeInput(){
  const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
  let testcases = parseInt(input[0], 10);
  for(let i=1; i<input.length; i+=2){
    let [N, K] = input[i].split(' ').map(Number);
    let arr = input[i+1].split(' ').map(Number);
    console.log(findSubarrayWithSumK(arr, N, K));
  }
}
takeInput();
