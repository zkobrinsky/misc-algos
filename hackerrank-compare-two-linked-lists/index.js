const list1 = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: {
        data: 4,
        next: {
          data: 5,
          next: {
            data: 6,
            next: {
              data: 7,
              next: null,
            },
          },
        },
      },
    },
  },
};

const list2 = {
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

function compareLists(llist1, llist2) {
  let current1 = llist1;
  let current2 = llist2;
  while (current1 || current2) {
    if (current1 === null || current2 === null) return 0;
    if (current1.data !== current2.data) return 0;
    current1 = current1.next;
    current2 = current2.next;
  }
  return 1;
}

console.log(compareLists(list1, list2));
