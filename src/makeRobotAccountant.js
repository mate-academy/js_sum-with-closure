'use strict';
/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let countBug = 0;

  const getSum = (a) => {
    return (b) => {
      countBug++;

      return countBug > 3 && countBug % 2 === 0
        ? `Bzzz... Error!`
        : a + b;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
