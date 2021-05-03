const head = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: {
        data: 4,
        next: {
          data: 5,
          next: null,
        },
      },
    },
  },
};

// using get tail:
// function reverse(head) {
//   let tail = head;
//   let current = head;
// //   loop through to get tail;
//   while (current) {
//     tail = current;
//     current = current.next;
//   }

// }

function reverse(head) {
  let prev = null;
  let current = head;
  let next = null;
  while (current) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    head = prev;
  }
  return head;
}

// function reverse(head) {}

console.log(reverse(head));
