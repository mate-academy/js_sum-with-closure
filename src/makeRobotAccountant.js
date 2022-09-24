'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;
  const getSum = (numOne) => {
    count++;

    return (numTwo) => {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return numOne + numTwo;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
