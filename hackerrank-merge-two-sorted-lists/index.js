const headA = {
  data: 1,
  next: {
    data: 3,
    next: {
      data: 7,
      next: null,
    },
  },
};

const headB = {
  data: 1,
  next: {
    data: 2,
    next: null,
  },
};

// first attempt
// function mergeLists(head1, head2) {
//   let returnList = {
//     data: head1.data <= head2.data ? head1.data : head2.data,
//     next: null,
//   };
//   let currentReturn = returnList;
//   //   debugger;
//   let current1 = head1;
//   let current2 = head2;

//   while (current1 || current) {
//     if (current1.data > current2.data) {
//       insert(currentReturn, current1);
//       current1 = current1.next;
//       currentReturn = currentReturn.next;
//     } else {
//       insert(currentReturn, current2);
//       current2 = current2.next;
//       currentReturn = currentReturn.next;
//     }
//   }
//   debugger;

//   function insert(list, node) {
//     let next = list.next;
//     list.next = node;
//     node.next = next;
//   }
//   return returnList;
// }

function mergeLists(head1, head2) {
  let current1 = head1;
  let current2 = head2;
  let prev = head1;

  while (current1 || current2) {
    //   debugger;
    // return;
    //   this inserts successfully if current2 > = current1
    if (current2.data >= current1.data) {
      // debugger;
      let current2Next = current2.next;
      let smallerNode = current2;
      smallerNode.prev = current1;
      smallerNode.next = current1.next;
      prev.next = smallerNode;
      prev = current1;
      current1 = current1.next;
      current2 = current2Next;
      debugger;
    } else {
      debugger;
      // do the thing
    }
    // if curren2 is greater or equal

    // debugger;
  }
}

console.log(mergeLists(headA, headB));
