'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  return function(arg1) {
    return function(arg2) {
      const sum = arg1 + arg2;

      counter++;

      return (counter > 3 && counter % 2 === 0)
        ? 'Bzzz... Error!'
        : sum;
    };
  };
}

module.exports = makeRobotAccountant;
