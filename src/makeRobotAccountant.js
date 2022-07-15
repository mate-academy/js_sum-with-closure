'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(x) {
    let sum = x;

    count++;

    return function(y) {
      sum += y;

      return count < 3 || count % 2 !== 0
        ? sum
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;

// let count = 0;

// return function(x) {
//   let sum = x;

//   count++;

//   return function(y) {
//     sum += y;

//     if (count > 3 && count % 2 === 0) {
//       return 'Bzzz... Error!';
//     } else if (count > 3 && count % 2 !== 0) {
//       return sum;
//     }

//     return sum;
//   };
// };
