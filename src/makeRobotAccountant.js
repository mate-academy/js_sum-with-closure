'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (param) => {
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
}

module.exports = makeRobotAccountant;
