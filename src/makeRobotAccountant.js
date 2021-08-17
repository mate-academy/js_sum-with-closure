'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  const getSum = function(number1) {
    return function(number2) {
      count++;

      if (count % 2 !== 0 || count < 3) {
        return number1 + number2;
      } else {
        return 'Bzzz... Error!';
      }
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
