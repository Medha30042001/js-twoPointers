//my approach

function solve(N,arr1,arr2){
  let first = 0, last = N-1, str = '';
  for(let i=0; i<N; i++){
    let sum = arr1[first] + arr2[last];
    str += sum + ' ';
    first++; last--;
  }
  console.log(str.trim());
}
