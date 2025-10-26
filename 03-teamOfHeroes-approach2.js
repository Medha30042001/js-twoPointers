//sir's approach

function solve(N,K,arr){
  let left=0, right=N-1, flag=0;
  arr.sort((a, b) => a - b);
  while(left < right){
    if(arr[left]+arr[right] == K) {
      console.log('Yes'); flag = 1; break;
    }
    else if(arr[left]+arr[right] < K) left++;
    else right--;
  }
  if(flag==0) console.log('No');
}

function takeInput(){
  const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
  let testcases = parseInt(input[0], 10);
  for(let i=1; i<input.length; i+=2){
    let [N, K] = input[i].split(' ').map(Number);
    let arr = input[i+1].split(' ').map(Number);
    solve(N, K, arr);
  }
}
takeInput();
