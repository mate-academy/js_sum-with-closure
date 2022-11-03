'use strict';

// Accounting, numbers, many numbers. Boring. The solution is to automate!
// The first
// robot accountant came off the assembly line. I don't know how accountants'
// brains don't melt, but when our robot starts adding numbers, it starts to
// burn significantly and it counts every other time. Reproduce the behavior of
// our robots.

// // Create a function makeRobotAccountant, the result of which is a function
// that works on the pattern getSum (4) (5) === 9. The first 3 calls to this
// featurework fine. Then all even calls return the string Bzzz... Error!, And
// odd calls the correct value.

// Example:

// const getSum = makeRobotAccountant();
// getSum(5)(6) === 11;
// getSum(1)(3) === 4;
// getSum(6)(6) === 12;
// getSum(55)(16) === 'Bzzz... Error!';
// getSum(55)(16) === 71;
// getSum(55)(17) === 'Bzzz... Error!';
// getSum(5)(17) === 22;
// getSum(1)(1) === 'Bzzz... Error!';
/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSum = (a) => {
    return b => {
      counter++;

      return (counter <= 3 || counter % 2 !== 0)
        ? a + b : 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
