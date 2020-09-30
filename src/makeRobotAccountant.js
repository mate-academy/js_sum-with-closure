'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const sumOfNums = (num1) => {
    return (num2) => {
      count++;

      return (count > 2 && count % 2 === 0) ? 'Bzzz... Error!' : num1 + num2;
    };
  };

  return sumOfNums;
}

module.exports = makeRobotAccountant;
