function shortestWordEditPath(source, target, words) {
  // check to make sure input isn't dumb
  if (source === target) return 0;
  if (words.length === 1 && words[0] === target) return 0;

  let currentWord = findNextPossibility(words, source);
  let counter = 0;
  let possible = false;

  while (currentWord) {
    if (currentWord === target) {
      possible = true;
    }
    counter++;
    currentWord = findNextPossibility(words, currentWord);
  }

  if (possible) {
    return counter;
  } else {
    return -1;
  }
}

function findNextPossibility(words, currentWord) {
  for (word of words) {
    let counter = 0;
    let i = 0;
    let j = 0;

    while (i < currentWord.length) {
      if (currentWord[i] == word[j]) {
        counter++;
      }
      i++;
      j++;
    }

    if (counter + 1 === currentWord.length) {
      words.splice(words.indexOf(word), 1);
      return word;
    }
  }
}

const source = "bit";
const target = "dog";
let words = ["but", "put", "big", "pot", "pog", "dog", "lot"];
// let words = ["dog"];
console.log(shortestWordEditPath(source, target, words));
