'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(firstValue) {
    return function(secondValue) {
      const result = firstValue + secondValue;

      count++;

      if (count > 3) {
        if (count % 2 === 0) {
          return 'Bzzz... Error!';
        }
      }

      return result;
    };
  };
};

module.exports = makeRobotAccountant;
