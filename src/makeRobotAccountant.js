'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countCalls = 0;

  return function getSum(x) {
    return function(y) {
      countCalls++;

      return (countCalls <= 3 || countCalls % 2 !== 0)
        ? x + y
        : 'Bzzz... Error!';
    };
  };
}

module.exports = makeRobotAccountant;
