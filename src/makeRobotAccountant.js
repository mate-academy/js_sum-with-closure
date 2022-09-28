'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (firstNum) => {
    return (secondNum) => {
      count++;

      const toBreak = (count === 2 || count % 2 === 1);

      return (toBreak)
        ? firstNum + secondNum
        : 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
