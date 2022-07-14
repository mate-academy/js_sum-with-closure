'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const getSum = (firstEntering) => {
    const subFunction = (secondEntering) => {
      count++;

      if (count > 2 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return secondEntering + firstEntering;
    };

    return subFunction;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
