var transpose = function (matrix) {
  let output = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i === 0) {
        let array = [matrix[i][j]];
        output.push(array);
      } else {
        output[j].push(matrix[i][j]);
      }
    }
  }
  return output;
};
