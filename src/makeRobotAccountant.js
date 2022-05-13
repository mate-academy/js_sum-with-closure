'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (numberX) => {
    const accountFunc = (numberY) => {
      count++;

      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return numberY + numberX;
    };

    return accountFunc;
  };

  return getSum;
}

module.exports = makeRobotAccountant;
