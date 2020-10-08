'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const getNum = (numA) => {
    count++;

    const getSum = (numB) => {
      if (count < 3) {
        return numA + numB;
      } else if (count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return numA + numB;
    };

    return getSum;
  };

  return getNum;
}

module.exports = makeRobotAccountant;
