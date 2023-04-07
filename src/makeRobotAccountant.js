'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  // write code here
  let counter = 0;

  return (a) => {
    return (b) => {
      counter++;

      const output = counter >= 4 && counter % 2 === 0
        ? 'Bzzz... Error!'
        : a + b;

      return output;
    };
  };
}

module.exports = makeRobotAccountant;
