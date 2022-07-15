'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let getSumCounter = 0;

  return (a) => {
    return (b) => {
      getSumCounter++;

      return getSumCounter > 3 && getSumCounter % 2 === 0
        ? 'Bzzz... Error!'
        : a + b;
    };
  };
}

module.exports = makeRobotAccountant;
