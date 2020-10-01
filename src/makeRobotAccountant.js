'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const sumOfNums = (num1) => (num2) => {
    count++;

    if (count > 2 && count % 2 === 0) {
      return 'Bzzz... Error!';
    }

    return num1 + num2;
  };

  return sumOfNums;
}

module.exports = makeRobotAccountant;
