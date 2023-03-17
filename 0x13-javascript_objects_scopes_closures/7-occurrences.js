#!/usr/bin/node

exports.nbOccurences = function (list, searchElement) {
  let result = 0;
  //   let item;
  //   for (item of list.flat()) {
  //     if (item === searchElement) result++;
  //   }
  //   return result;

  // //////////////////////////////////////////////////

  //   for (let i = 0; i <= list.length; i++) {
  //     if (list[i] === searchElement) {
  //       result++;
  //     }
  //   }
  //  return result;

  // ////////////////////////////////////////////////

  list.forEach(data => {
    if (data === searchElement) {
      result++;
    }
  });
  return result;
};
