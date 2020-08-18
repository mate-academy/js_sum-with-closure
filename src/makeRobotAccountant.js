'use strict';
// Reproduce the behavior of our robots.
// Create a function `makeRobotAccountant`,
//  the result of which is a function that
// works on the pattern `getSum (4) (5) === 9`.
// The first 3 calls to this feature work fine.
//  Then all even calls return the string
// `Bzzz ... Error!`, And odd calls the correct value.

// Example:
// ```
// const getSum = makeRobotAccountant();
// getSum(5)(6) === 11;
// getSum(1)(3) === 4;
// getSum(6)(6) === 12;
// getSum(55)(16) === 'Bzzz... Error!';
// getSum(55)(16) === 71;
// getSum(55)(17) === 'Bzzz... Error!';
// getSum(5)(17) === 22;
// getSum(1)(1) === 'Bzzz... Error!';
// ```
/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(x) {
    return function(y) {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      };

      return x + y;
    };
  };
}

module.exports = makeRobotAccountant;
