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
      if (count < 4 || count % 2 !== 0) {
        return numA + numB;
      } else {
        return 'Bzzz... Error!';
      }
    };

    return getSum;
  };

  return getNum;
}

module.exports = makeRobotAccountant;
