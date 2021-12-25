'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (number1 = 0) => {
    count++;

    if (count > 3 && count % 2 === 0) {
      return () => 'Bzzz... Error!';
    }

    return (number2 = 0) => number1 + number2;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
