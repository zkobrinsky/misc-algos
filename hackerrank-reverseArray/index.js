console.log("yo");

let input = [1, 4, 3, 2];
// expected output = [2,3,4,1]

function reverseArray(arr) {
  let i = 0;
  let j = arr.length - 1;
  while (i < j) {
    let rightNum = arr[j];
    let leftNum = arr[i];
    arr[i] = rightNum;
    arr[j] = leftNum;
    i++;
    j--;
  }
  return arr;
}

console.log(reverseArray(input));

// i[(1, 4, 3, 2)];
// j;
