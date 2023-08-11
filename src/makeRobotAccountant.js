'use strict';

/**
 *
 * @return {function}
 */

function makeRobotAccountant() {
  let caunt = 0;

  return function(a) {
    return function(b) {
      caunt++;

      if (caunt > 3) {
        return caunt % 2 === 0 ? 'Bzzz... Error!' : a + b;
      }

      return a + b;
    };
  };
}

module.exports = makeRobotAccountant;
