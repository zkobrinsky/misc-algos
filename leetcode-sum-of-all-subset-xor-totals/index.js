function subsetXORSum(nums) {
  let sum = combinations(nums);
  function combinations(nums, sum = eval(nums.join("^"))) {
    if (nums.length === 1) return sum;
    return combinations(nums.slice(1), eval(nums.join("^")));
  }
  if (nums.length > 2) {
    for (let i = nums.length - 1; i > 0; i--) {
      let values = [];
      for (let j = 0; j < i; j++) {
        values.push(nums[j]);
      }
      sum += eval(values.join("^"));
    }
  }
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  return sum;
}

console.log(subsetXORSum([1, 3]));
