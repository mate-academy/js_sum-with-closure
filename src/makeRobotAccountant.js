'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSum = function(firstNumber) {
    return (secoundNumber) => {
      counter++;

      if (counter <= 3 || counter % 2 !== 0) {
        return firstNumber + secoundNumber;
      }

      return 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
