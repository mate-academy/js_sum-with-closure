'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return (num) => {
    let result = 0;

    count++;

    result += num;

    const innerGetSum = (anotherNum) => {
      return count === 2 || count % 2 !== 0
        ? result + anotherNum
        : `Bzzz... Error!`;
    };

    return innerGetSum;
  };
}

module.exports = makeRobotAccountant;
