let matrix = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
let target = 13;

var searchMatrix = function (matrix, target) {
  let idx;

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] <= target) {
      idx = i;
    }

    if (matrix[i][0] > target) break;
  }
  if (idx === undefined) return false;

  for (let i = 0; i < matrix[idx].length; i++) {
    if (matrix[idx][i] === target) return true;
  }

  return false;
};

searchMatrix(matrix, target);
