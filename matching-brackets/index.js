const input = "(())";
// const input = "((()()";

function countBracketsNeeded(brackets) {
  let arr = [];

  for (let i = 0; i < brackets.length; i++) {
    const bracket = brackets[i];
    if (bracket === "(") {
      arr.push(bracket);
    }

    if (bracket === ")") {
      arr.pop();
    }
  }

  return arr.length;
}

console.log(countBracketsNeeded(input));
