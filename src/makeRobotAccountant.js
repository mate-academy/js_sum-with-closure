'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;
  let results = [];

  return function getSum(num) {
    callCount++;
    results.push(num);

    return function nextStep(nextNum) {
      results.push(nextNum);

      const sum = results.reduce((acc, val) => acc
        + val);

      results = [];

      if (callCount > 3 && callCount % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return sum;
      }
    };
  };
}

module.exports = makeRobotAccountant;
