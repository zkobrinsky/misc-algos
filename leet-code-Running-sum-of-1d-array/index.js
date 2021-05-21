// recursive
function runningSum(nums, sum = 0, counter = 0) {
  if (counter === nums.length) return nums;
  sum += nums[counter];
  nums[counter] = sum;
  return runningSum(nums, sum, counter + 1);
}

// iterative appraoch
// function runningSum(nums) {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         sum+= nums[0];
//         nums[i] = sum;
//     }
//     return nums;
// }

console.log(runningSum([1, 1, 1, 1, 1]));
