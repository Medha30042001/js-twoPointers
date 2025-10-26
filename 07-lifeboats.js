//gpt taught me

function solve(N,weight,arr){
  let left = 0, right = N-1, count=0;
  arr.sort((a, b) => a-b);
  
  while(left<=right){
    if(arr[left]+arr[right] <= weight){
      left++;  
    }
    right--; count++;
  }
  console.log(count);
}
