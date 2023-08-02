'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let counter = 0;

  const getSum = function(a) {
    return function(b) {
      counter++;

      if (counter <= 3 || counter % 2 !== 0) {
        return a + b;
      }

      return 'Bzzz... Error!';
    };
  };

  return getSum;
}

module.exports = makeRobotAccountant;
