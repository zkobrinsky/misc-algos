var luckyNumbers = function (matrix) {
  let output = [];

  for (let i = 0; i < matrix.length; i++) {
    let min = Infinity;
    let index = 0;

    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] < min) {
        min = matrix[i][j];
        index = j;
      }
    }

    let col = [];
    for (let j = 0; j < matrix.length; j++) {
      col.push(matrix[j][index]);
    }

    if (Math.max(...col) === min) output.push(min);
  }
  return output;
};

// refactored with helpers:
// var luckyNumbers = function (matrix) {
//   let output = [];

//   for (let i = 0; i < matrix.length; i++) {
//     const [min, index] = findMinAndIndex(matrix[i]);
//     const col = getColFromIndex(index, matrix);
//     if (Math.max(...col) === min) output.push(min);
//   }
//   return output;

//   function findMinAndIndex(arr) {
//     let min = Infinity;
//     let index = 0;

//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] < min) {
//         min = arr[j];
//         index = j;
//       }
//     }
//     return [min, index];
//   }

//   function getColFromIndex(index, arr) {
//     let col = [];
//     for (let i = 0; i < arr.length; i++) {
//       col.push(arr[i][index]);
//     }
//     return col;
//   }
// };
