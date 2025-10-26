//my approach

function findPair(arr, n, k) {
  let left=0, right=n-1, flag=0;
  arr.sort((a, b) => a - b);
  while(left < right){
    if(arr[left]+arr[right] == k) {
      console.log('1'); flag = 1; break;
    }
    else if(arr[left]+arr[right] < k) left++;
    else right--;
  }
  if(flag==0) console.log('-1');
}



