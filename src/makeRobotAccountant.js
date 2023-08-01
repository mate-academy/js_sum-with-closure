'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let callCount = 0;
  const sum = (a, b) => a + b;
  const error = () => 'Bzzz... Error!';

  function getSum(a) {
    callCount++;

    if (callCount > 3 && callCount % 2 === 0) {
      return error;
    } else {
      return function(b) {
        return sum(a, b);
      };
    }
  }

  return getSum;
}

module.exports = makeRobotAccountant;
