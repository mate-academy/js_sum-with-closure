'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (param) => {
    let result = 0;

    count++;

    result += param;

    const innerGetSum = (anotherNum) => {
      return count === 2 || count % 2 !== 0
        ? result + anotherNum
        : `Bzzz... Error!`;
    };

    return innerGetSum;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
