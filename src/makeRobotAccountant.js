'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let operationsAmount = 0;

  const getSum = (x) => {
    return (y) => {
      operationsAmount++;

      if (operationsAmount > 3 && operationsAmount % 2 === 0) {
        return 'Bzzz... Error!';
      } else {
        return x + y;
      }
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
