//gpt taught me

function solve(N, weight, arr) {
  let left = 0, right = N - 1, count = 0;
  arr.sort((a, b) => a - b); // sort by weight ascending
  
  while (left <= right) {
    if (arr[left] + arr[right] <= weight) {
      // If lightest + heaviest can fit together, send them together
      left++;
    }
    // Heaviest person always goes (either alone or with someone)
    right--;
    count++;
  }
  
  console.log(count);
}
