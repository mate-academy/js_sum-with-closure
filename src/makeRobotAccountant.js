'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (number1) => {
    count++;

    if (!(count % 2) && count > 3) {
      return () => 'Bzzz... Error!';
    }

    return number2 => number1 + number2;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
