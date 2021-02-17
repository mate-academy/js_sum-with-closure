'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  function getSum(firstValue) {
    counter++;

    return function(secondValue) {
      if (counter % 2 === 0 && counter > 3) {
        return 'Bzzz... Error!';
      } else {
        return firstValue + secondValue;
      }
    };
  }

  return getSum;
}

module.exports = makeRobotAccountant;
