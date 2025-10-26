//my approach

function solve(N,K,arr){
  let left=0, right=N-1, flag=0;
  arr.sort((a, b) => a - b);
  while(left < right){
    if(arr[left]+arr[right] == K) {
      console.log('Possible'); flag = 1; break;
    }
    else if(arr[left]+arr[right] < K) left++;
    else right--;
  }
  if(flag==0) console.log('Impossible');
}



