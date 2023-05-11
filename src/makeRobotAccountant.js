'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;
  const getSum = (firstNumber) => {
    counter++;

    return function(seconNumber) {
      if (counter > 3 && counter % 2 === 0) {
        return 'Bzzz... Error!';
      };

      return firstNumber + seconNumber;
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
