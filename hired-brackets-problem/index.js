// const solution = (angles) => {
//     rights = [];
//     lefts = [];
//    for (let i = 0; i < angles.length; i++) {
//        if (angles[i] === "<") {
//             rights.push(">");
//             lefts.pop()
//        } else {
//            lefts.push("<")
//            rights.pop()
//        }
//    }
//     return lefts.join("")+angles+rights.join("")
//    }

const solution = angles => {
  rights = 0;
  lefts = 0;
  for (let i = 0; i < angles.length; i++) {
    if (angles[i] === "<") {
      rights++;
      lefts--;
    } else {
      lefts++;
      rights--;
    }
  }
  for (let i = 0; i < lefts; i++) {
    angles = "<" + angles;
  }

  for (let i = 0; i < rights; i++) {
    angles += ">";
  }
  return angles;
};

console.log(solution("><>>"));
