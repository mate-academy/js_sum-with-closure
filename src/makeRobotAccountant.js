'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(y) {
    return function(x) {
      const result = x + y;

      count++;

      if (count % 4 === 0) {
        if (result % 2 !== 0) {
          return result;
        }

        return 'Bzzz... Error!';
      }

      return result;
    };
  };
};

module.exports = makeRobotAccountant;
