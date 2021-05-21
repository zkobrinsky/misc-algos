const solution = arr => {
  let left = arr[0];
  let right = arr[0];
  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i] && arr[i] !== -1) {
      left += arr[i];
    }
    if (arr[i + 1] && arr[i + 1] !== -1) {
      right += arr[i + 1];
    }
  }
  debugger;
};

solution([3, 6, 2, 9, -1, 10]);
