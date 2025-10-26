//my approach

function solve(N,arr,K){
  let left=0, right=N-1, max=-1;
  arr.sort((a, b) => a - b);
  while(left < right){
    let sum = arr[left]+arr[right];
    if(sum < K) {
      if(sum >= max) max = sum;
      left++;
    }else right--;
  }
  console.log(max);
}

