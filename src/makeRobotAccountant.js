'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 0;

  return function(startValue) {
    count++;

    return function(lastValue) {
      if (count > 3 && count % 2 === 0) {
        return 'Bzzz... Error!';
      }

      return startValue + lastValue;
    };
  };
}

module.exports = makeRobotAccountant;
