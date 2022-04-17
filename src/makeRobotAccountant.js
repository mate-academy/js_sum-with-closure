'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;
  let result = 0;

  const getSum = (a) => {
    const lastNum = (b) => {
      result = a + b;
      counter++;

      if (counter > 3 && counter % 2 === 0) {
        return `Bzzz... Error!`;
      } else {
        return result;
      }
    };

    return lastNum;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
