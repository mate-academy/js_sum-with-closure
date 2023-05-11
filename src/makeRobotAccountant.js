'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  const addNum = x => {
    if (x === -Infinity) {
      return Infinity;
    }

    const sumFunc = (y) => {
      if (count > 3 && count % 2 === 0) {
        count++;

        return 'Bzzz... Error!';
      }
      count++;

      return x + y;
    };

    return sumFunc;
  };

  return addNum;
}

module.exports = makeRobotAccountant;
