'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let count = 1;

  return function(numberFirst) {
    return function(numberLast) {
      count++;

      return (count > 3 && count % 2 === 1)
        ? 'Bzzz... Error!'
        : numberFirst + numberLast;
    };
  };
}

module.exports = makeRobotAccountant;
