function makeVoters(n, candidates) {
  let voters = [];
  for (let i = 0; i < n; i++) {
    let voter = {};
    let choices = [...candidates];
    for (let j = 1; j <= 5; j++) {
      let idx = Math.floor(Math.random() * choices.length);
      let choice = choices[idx];

      voter[j] = choice;
      choices.splice(idx, 1);
    }
    voters.push(voter);
  }
  return voters.map(voter => new Voter(voter, 5));
}

function rankChoice(voters) {
  let results = {};
  let majority = voters.length / 2;
  let winners = [],
    losers = [];

  //     get everybody's first choice
  voters.forEach((voter, index) => {
    if (voter.root && voter.root.val) {
      results[voter.root.val] = results[voter.root.val] + 1 || 1;
    } else {
      // if voter is out of votes, remove them from array
      voters.splice(index, 1);
    }
  });

  let max = Math.max(...Object.values(results));
  let min = Math.min(...Object.values(results));

  for (let candidate in results) {
    if (results[candidate] === max) {
      winners.push(candidate);
    }

    if (results[candidate] === min) {
      losers.push(candidate);
    }
  }

  if (max >= majority && winners.length === 1) {
    return winners[0];
  }

  voters.forEach(voter => {
    if (voter.root && losers.includes(voter.root.val)) voter.shift();
  });

  return rankChoice(voters);
}

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Voter {
  constructor(voter, numChoices) {
    this.root = new Node(voter[1]);

    let current = this.root;
    for (let i = 2; i <= numChoices; i++) {
      current.next = new Node(voter[i]);
      current = current.next;
    }
    return this;
  }

  shift() {
    if (!this.root) return null;
    let returnVal = this.root;
    if (this.root.next) {
      this.root = this.root.next;
    } else {
      this.root = null;
    }
    return returnVal;
  }
}

let candidates = [
  "Eric Adams",
  "Shaun Donovan",
  "Kathryn Garcia",
  "Ray McGuire",
  "Dianne Morales",
  "Scott Stringer",
  "Maya Wiley",
  "Andrew Yang",
];
console.log(rankChoice(makeVoters(100, candidates), candidates));

// makeVoters(100, candidates)
