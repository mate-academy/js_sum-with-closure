'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const getSum = firstNum => secondNum => {
    count++;

    if (count > 3 && count % 2 === 0) {
      return 'Bzzz... Error!';
    } else {
      return firstNum + secondNum;
    }
  };

  return getSum;
}

module.exports = makeRobotAccountant;
