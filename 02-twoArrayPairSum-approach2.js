//sir's approach

function solve(N,arr1,arr2){
  let left = 0, right = N-1, res = [];
  while(left<N && right>=0){
    res.push(arr1[left] + arr2[right]);
    left++; right--;
  }
  console.log(res.join(' '));
}
