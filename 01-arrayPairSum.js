//my approach

function arrayPairSum(n, arr){
  let first = 0; 
  let last = n-1;
  let str = '';
  while(first<last){
    let sum = arr[first] + arr[last];
    str += sum + ' ';
    first++; last--;
  }
  console.log(str.trim());
}
