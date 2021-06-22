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
console.time("rank choice");

function rankChoice(voters, candidates) {
  let elimination = true;
  let results = {};
  let majority = voters.length / 2;
  let winners = [],
    losers = [];

  console.log(candidates);
  if (candidates.length <= 2) elimination = false;
  // debugger;
  //     get everybody's first choice
  voters.forEach((voter, index) => {
    // make sure top choice is a valid candidate, and cascade through choices if not
    validate(voter, voters, candidates, index);

    if (voter.root) {
      results[voter.root.val] = results[voter.root.val] + 1 || 1;
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
    console.timeEnd("rank choice");
    return winners[0];
  }

  voters.forEach(voter => {
    if (voter.root && losers.includes(voter.root.val)) voter.shift();
  });

  // remove losers from candidacy
  if (elimination) {
    losers.forEach(loser => {
      candidates.splice(candidates.indexOf(loser), 1);
    });
  }

  return rankChoice(voters, candidates);

  function validate(voter, voters, candidates, index) {
    if (!voter.root) {
      // if voter has exhausted all votes, remove voter
      return voters.splice(index, 1);
    }
    if (!candidates.includes(voter.root.val)) {
      let current = voter.root;
      while (current) {
        if (!candidates.includes(current.val)) {
          current = current.next;
        } else {
          voter.root = current;
          break;
        }
      }
    } else {
      return;
    }
  }
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

let voters = makeVoters(300, candidates);
console.log(rankChoice(voters, candidates));
