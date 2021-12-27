'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (num1) => {
    count++;

    if (count > 3 && count % 2 === 0) {
      return () => 'Bzzz... Error!';
    }

    return (num2) => num1 + num2;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
