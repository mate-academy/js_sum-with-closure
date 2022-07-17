'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (param) => {
    let result = 0;
    let msg;

    count++;

    result += param;

    const innerGetSum = (anotherNum) => {
      result += anotherNum;

      count === 2 || count % 2 !== 0
        ? msg = result
        : msg = `Bzzz... Error!`;

      return msg;
    };

    return innerGetSum;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
