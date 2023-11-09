'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;
  let result = [];

  return function getSum(num) {
    callCount++;
    result.push(num);

    return function next(nextNum) {
      result.push(nextNum);

      const sum = result.reduce((acc, curr) => acc + curr);

      result = [];

      if (callCount > 3 && callCount % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return sum;
      }
    };
  };
}

module.exports = makeRobotAccountant;
