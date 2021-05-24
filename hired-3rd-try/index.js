const solution = s => {
  let longestString = "";
  let substring = [];
  for (let i = 0; i < s.length; i++) {
    if (!substring.includes(s[i]) && s[i] !== s[i + 1]) {
      substring.push(s[i]);
    } else {
      substring = [];
    }
    if (substring.length > longestString.length) {
      longestString = substring.join("");
    }
  }
  return longestString.length;
};

console.log(solution("nndNfdABcefghimklopqrstfdfDFGKLJMNOPQ"));
