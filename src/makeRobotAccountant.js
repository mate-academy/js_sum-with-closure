'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let count = 0;

  return function(a) {
    const x = count++ + 1;

    return function(b) {
      if (x === 4) {
        return 'Bzzz... Error!';
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;

// const getSum = makeRobotAccountant();

// getSum(5)(9);
// getSum(5)(6);
// getSum(11)(53);

// const actual = getSum(1)(13);

// console.log(actual);
