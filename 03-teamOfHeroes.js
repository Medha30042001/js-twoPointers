//my approach

function solve(N,K,arr){
  let left=0, right=N-1;
  arr.sort((a, b) => a - b);
  while(left < right){
    if(arr[left]+arr[right] == K) return 'Yes';
    else if(arr[left]+arr[right] < K) left++;
    else right--;
  }
  return 'No';
}

function takeInput(){
  const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
  let testcases = parseInt(input[0], 10);
  for(let i=1; i<input.length; i+=2){
    let [N, K] = input[i].split(' ').map(Number);
    let arr = input[i+1].split(' ').map(Number);
    console.log(solve(N, K, arr));
  }
}
takeInput();
