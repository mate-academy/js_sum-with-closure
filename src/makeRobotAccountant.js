'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = (firstData) => {
    count++;

    return (secondData) => {
      if (count > 3 && count % 2 === 0) {
        return `Bzzz... Error!`;
      }

      return firstData + secondData;
    };
  };

  return getSum;
}
module.exports = makeRobotAccountant;
