// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
];

function transpose(matrix) {
  let output = [];
  for (let i = 0; i < matrix[0].length; i++) {
    let array = [];
    for (let j = 0; j < matrix.length; j++) {
      array.push(matrix[j][i]);
    }
    output.push(array);
  }
  return output;
}

console.log(transpose(matrix));
