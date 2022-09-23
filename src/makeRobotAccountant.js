'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function getSum(number) {
    count++;

    return function(numberSecond) {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return number + numberSecond;
    };
  };
}

module.exports = makeRobotAccountant;
