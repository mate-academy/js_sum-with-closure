'use strict';

/**
 *
 * @return {function}
 */
function makeRobotAccountant() {
  let count = 0;

  return function(value1) {
    count++;

    return function(value2) {
      if (count % 2 === 0 && count > 3) {
        return 'Bzzz... Error!';
      }

      return value1 + value2;
    };
  };
}
module.exports = makeRobotAccountant;
